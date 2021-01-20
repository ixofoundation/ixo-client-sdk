const
    debug = require('debug')('ixo-client-sdk'),
    crypto = require('crypto'),
    base58 = require('bs58'),
    bip39 = require('bip39'),
    bip32 = require('bip32'),
    bitcoinjs = require('bitcoinjs-lib'),
    bech32 = require('bech32'),
    sovrin = require('sovrin-did'),
    secp256k1 = require('secp256k1')


const
    bech32MainPrefix = 'ixo',
    derivationPath = 'm/44\'/118\'/0\'/0/0'

const ixoCrypto = {
    generateMnemonic: entropy =>
        entropy
            ? bip39.entropyToMnemonic(entropy)
            : bip39.generateMnemonic(),

    deriveAddress: mnemonic => {
        if (!bip39.validateMnemonic(mnemonic))
            throw new Error('mnemonic phrases have invalid checksums')

        const
            seed = bip39.mnemonicToSeedSync(mnemonic),
            node = bip32.fromSeed(seed),
            child = node.derivePath(derivationPath),
            words = bech32.toWords(child.identifier)

        return bech32.encode(bech32MainPrefix, words)
    },

    deriveECKeyPair: mnemonic => {
        const
            seed = bip39.mnemonicToSeedSync(mnemonic),
            node = bip32.fromSeed(seed),
            child = node.derivePath(derivationPath),
            ecpair = bitcoinjs.ECPair.fromPrivateKey(child.privateKey, {
                compressed : false,
            })

        return ecpair
    },

    signEC: (stdSignMsg, ecpairPriv) => {
        const
            signMessage = stdSignMsg.json,

            hash =
                crypto.createHash('sha256')
                    .update(JSON.stringify(signMessage))
                    .digest(),

            {signature} = secp256k1.sign(hash, ecpairPriv),

            signatureBase64 = Buffer.from(signature).toString('base64')

        return signatureBase64
    },

    deriveDidDoc: mnemonic =>
        sovrin.fromSeed(
            crypto.createHash('sha256').update(mnemonic).digest().slice(0, 32)),

    deriveAgentAddress: verifyKey => {
        const hashedVerifyKey =
            crypto.createHash('sha256')
                .update(base58.decode(verifyKey))
                .digest()
                .slice(0, 20)

        return bech32.encode(bech32MainPrefix, bech32.toWords(hashedVerifyKey))
    },
}

const makeBlockchainClient = chainUrl => {
    const csFetch = makeFetcher(chainUrl)

    return {
        raw: csFetch,

        getAccounts: address =>
            csFetch('/auth/accounts' + address),

        makeStdMsg: input => ({
            json: input,
            bytes: convertStringToBytes(JSON.stringify(input)),
        }),

        broadcast: signedTx =>
            csFetch('/txs', {method: 'POST', body: signedTx}),
    }
}

const makeBlocksyncClient = blockSyncUrl => {
    const
        bsFetch = makeFetcher(blockSyncUrl),

        signAndPrepareTx = async (type, value, didDoc) => {
            const
                msgJson = JSON.stringify({type, value}),

                msgUppercaseHex =
                    new Buffer(msgJson).toString('hex').toUpperCase(),

                body = {msg: msgUppercaseHex, pub_key: didDoc.verifyKey},

                {body: {sign_bytes, fee}} =
                    await bsFetch('/api/sign_data', {method: 'POST', body}),

                fullSignature =
                    sovrin.signMessage(
                        sign_bytes,
                        didDoc.secret.signKey,
                        didDoc.verifyKey,
                    ),

                signatureBase64 =
                    Buffer.from(fullSignature).slice(0, 64).toString('base64')

            return {
                msg: [{type, value}],
                fee,
                signatures: [{
                    signature: signatureBase64,
                    pub_key: {
                        type: 'tendermint/PubKeyEd25519',
                        value:
                            base58.decode(didDoc.encryptionPublicKey)
                                .toString('base64'),
                    },
                }],
            }
        }

    return {
        raw: bsFetch,

        ping: () => bsFetch('/'),

        getStats: () => bsFetch('/api/stats/listStats'),

        registerUser: async didDoc => {
            const
                lightDidDoc = {
                    did: 'did:ixo:' + didDoc.did,
                    pubKey: didDoc.verifyKey, // See note [1]
                    credentials: [],
                },

                tx = await signAndPrepareTx('did/AddDid', lightDidDoc, didDoc)

            const resp = await bsFetch('/api/blockchain/txs', {
                method: 'POST',
                body: {tx, mode: 'block'},
            })

            if (resp.body.code && resp.body.code > 0)
                throw resp

            return resp
        },

        getDidDoc: did => bsFetch('/api/did/getByDid/' + did),

        listProjects: senderDid =>
            !senderDid
                ? bsFetch('/api/project/listProjects')

                : bsFetch('/api/project', {
                    method: 'POST',
                    body:
                        makePublicRpcMsg('listProjectBySenderDid', {senderDid}),
                }),

        getProject: did => bsFetch('/api/project/getByProjectDid/' + did),
    }
}

const makeCellNodeClient = cnUrl => {
    const
        cnFetch = makeFetcher(cnUrl),

        cnRpc = (method, tplName, data, signature) =>
            cnFetch('/api/request', {
                method: 'POST',
                body: makeRpcMsg(method, tplName, signature, data),
            }),

        cnRpcPublic = (method, payload) =>
            cnFetch('/api/request', {
                method: 'POST',
                body: makePublicRpcMsg(method, payload),
            })

    return {
        raw: cnFetch,
        rawRpc: cnRpc,
        rawRpcPublic: cnRpcPublic,

        entity: {
            create: (data, signature) =>
                cnRpc('createProject', 'create_project', signature, data),

            update: (data, signature) =>
                cnRpc('updateProjectStatus', 'project_status', signature,data),

            fund: (data, signature) =>
                cnRpc('fundProject', 'fund_project', signature, data),

            createPublic: (base64Content) => {
                const [, data, contentType] =
                    base64Content.match('^data:([^;]+);base64,(.+)$')

                return cnRpcPublic('createPublic', {data, contentType})
            },

            fetchPublic: key =>
                cnRpcPublic('fetchPublic', {key})
                    .then(({result}) =>
                        result.data ? result : Promise.reject(result)),
        },

        agent: {
            create: (data, signature) =>
                cnRpc('createAgent', 'create_agent', data, signature),

            list: (data, signature) =>
                cnRpc('listAgents', 'list_agent', data, signature),

            updateStatus: (data, signature) =>
                cnRpc('updateAgentStatus', 'agent_status', data, signature),
        },

        claim: {
            create: (data, signature) =>
                cnRpc('submitClaim', 'submit_claim', data, signature),

            evaluate: (data, signature) =>
                cnRpc('evaluateClaim', 'evaluate_claim', data, signature),

            list: (data, signature) =>
                cnRpc('listClaims', 'list_claim', data, signature),
        },
    }
}

const makeFetcher = (urlPrefix = '') => async (path, opts = {}) => {
    const url = urlPrefix + path

    opts = {
        ...opts,
        body: opts.body && JSON.stringify(opts.body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...opts.headers,
        },
    }

    debug('> Request', url, opts)

    const
        resp = await fetch(url, opts),
        isJson =resp.headers.get('content-type').startsWith('application/json'),
        body = await resp[isJson ? 'json' : 'text']()

    debug('< Response', {status: resp.status, headers: resp.headers, body})

    return Promise[resp.ok ? 'resolve' : 'reject']({
        status: resp.status,
        headers: resp.headers,
        body,
    })
}

const generateTxId = Math.floor(Math.random() * 1000000 + 1)

const makeRpcMsg = (method, templateName, signature, data) => ({
    jsonrpc: '2.0',
    method,
    id: generateTxId(),
    params: {
        payload: {
            data: data ? data : {},
            template: templateName ? {name: templateName} : undefined,
        },
        signature,
    },
})

const makePublicRpcMsg = (method, params = {}) => ({
    jsonrpc: '2.0',
    method,
    id: generateTxId(),
    params,
})

const convertStringToBytes = str => {
    const
        myBuffer = [],
        buffer = Buffer.from(str, 'utf8')

    for (let i = 0; i < buffer.length; i++)
        myBuffer.push(buffer[i])

    return myBuffer
}


module.exports = {
    crypto: ixoCrypto,
    makeBlockchainClient,
    makeBlocksyncClient,
    makeCellNodeClient,
}


// [1] Note that we are assigning the verify key to the property "pubKey". This
// is not an error. Apparently some backend guy decided to call the "verify key"
// the "public key", which is a very bad thing to do in this context as another
// key that is called the "public key" already exists.
