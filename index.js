const
    {inspect} = require('util'),

    debug = require('debug')('ixo-client-sdk'),

    fetch = require('isomorphic-unfetch'),

    {Secp256k1HdWallet} = require('@cosmjs/amino'),

    {sortedJsonStringify} = require('@cosmjs/amino/build/signdoc'),

    {fromBase64} = require('@cosmjs/encoding'),

    {EnglishMnemonic, pathToString, stringToPath} = require('@cosmjs/crypto'),

    base58 = require('bs58'),

    memoize = require('lodash.memoize'),

    makeAgentWallet = require('./IxoAgentWallet')


const
    defaultBlockchainUrl = 'https://testnet.ixo.world',

    defaultBlocksyncUrl = 'https://block-sync-pandora.ixo.world',

    defaultCellnodeUrl = 'https://pds-pandora.ixo.world'


const makeWallet = async src => {
    let secp, agent

    if (typeof src === 'object') {
        ({secp, agent} = plainStateToWallet(src))

    } else {
        secp = await (
            src
                ?  Secp256k1HdWallet.fromMnemonic(src, {prefix: 'ixo'})
                :  Secp256k1HdWallet.generate(12, {prefix: 'ixo'})
        )

        agent = await makeAgentWallet(secp.mnemonic)
    }

    const toJSON = () => walletToPlainState({secp, agent})

    return {secp, agent, toJSON}
}

const walletToPlainState = w => ({
    secp: {
        mnemonic: w.secp.mnemonic,
        seed: base58.encode(w.secp.seed),
        accounts: w.secp.accounts.map(a => ({
            ...a,
            hdPath: pathToString(a.hdPath),
        })),
    },
    agent: {
        mnemonic: w.agent.mnemonic,
        didDoc: w.agent.didDoc,
    },
})

const plainStateToWallet = s => ({
    secp: new Secp256k1HdWallet(new EnglishMnemonic(s.secp.mnemonic), {
        seed: Uint8Array.from(base58.decode(s.secp.seed)),
        prefix: s.secp.accounts[0].prefix,
        hdPaths: s.secp.accounts.map(a => stringToPath(a.hdPath)),
    }),

    agent: makeAgentWallet(s.agent.mnemonic, s.agent.didDoc),
})

const makeClient = (signer, {
    blockchainUrl = defaultBlockchainUrl,
    blocksyncUrl = defaultBlocksyncUrl,
    dashifyUrls = false,
} = {}) => {
    assertSignerIsValid(signer)

    const
        getSignerAddress = memoize(walletToUse =>
            signer[walletToUse].getAccounts().then(as => as[0].address)),

        sign = async (walletToUse, signDoc) =>
            signer[walletToUse].signAmino(
                await getSignerAddress(walletToUse),
                signDoc,
            ),

        signAndBroadcast = async (walletToUse, msg, fee) => {
            const
                [account] = await signer[walletToUse].getAccounts(),

                signDocResp = await bcFetch('/txs/sign_data', {
                    method: 'POST',
                    body: {
                        msg: convertToHex(JSON.stringify(msg)).toUpperCase(),
                        pub_key: base58.encode(account.pubkey),
                    },
                }),

                signDoc = JSON.parse(signDocResp.body.sign_bytes),

                {signature} = await sign(walletToUse, signDoc),

                txResp = await bcFetch('/txs', {
                    method: 'POST',
                    body: {
                        tx: {
                            msg: [msg],
                            fee: fee || signDocResp.body.fee,
                            signatures: [{
                                ...signature,
                                account_number: signDoc.account_number,
                                sequence: signDoc.sequence,
                            }],
                        },
                        mode: 'sync',
                    },
                })

            return txResp
        },

        bcFetch = makeFetcher(blockchainUrl),

        bsFetch = makeFetcher(blocksyncUrl),

        listEntities = async type => {
            const ents =
                await bsFetch('/api/project/listProjects').then(r => r.body)

            if (!type)
                return ents

            return ents.filter(e => e.data['@type'] === type)
        },

        getEntity = did =>
            bsFetch('/api/project/getByProjectDid/' + did).then(r => r.body),

        getEntityHead = async projRecOrDid => {
            if (typeof projRecOrDid === 'object') {
                const {projectDid} = projRecOrDid
                let serviceEndpoint

                try {
                    serviceEndpoint =
                        projRecOrDid.data.nodes.items
                            .find(i => i['@type'] === 'CellNode')
                            .serviceEndpoint
                            .replace(/\/$/, '')

                    if (dashifyUrls)
                        serviceEndpoint = dashifyUrl(serviceEndpoint)

                } catch (e) {
                    serviceEndpoint = defaultCellnodeUrl
                    /* throw new Error('Project doesn\'t have an associated Cell Node record!') */// eslint-disable-line max-len
                }

                return {projectDid, serviceEndpoint}
            }

            return getEntityHead(await getEntity(projRecOrDid))
        },

        cnFetch = makeFetcher(),

        cnRpc = async (target, dataCb, fetchOpts = {}) => {
            if (!signer)
                throw new Error('The client needs to be initialized with a wallet / signer in order for this method to be used') // eslint-disable-line max-len

            const {projectDid, serviceEndpoint}
                = typeof target === 'string' && target.startsWith('http')
                    ? {projectDid: null, serviceEndpoint: target}
                    : (await getEntityHead(target))

            const
                {method, tplName, data, isPublic = false, then = x => x} =
                    dataCb(projectDid, serviceEndpoint),

                message =
                    isPublic
                        ? makePublicRpcMsg(method, data)

                        : makeRpcMsg(method, tplName, data, {
                            type: 'ed25519-sha-256',
                            created: (new Date()).toISOString(),
                            creator: signer.agent.did,
                            signatureValue:
                                (await sign('agent', data)).signature.signature,
                        }),

                path = isPublic ? '/api/public' : '/api/request'

            const resp = await cnFetch(serviceEndpoint + path, {
                method: 'POST',
                body: message,
                ...fetchOpts,
            })

            if (fetchOpts.dryRun)
                return resp

            if (resp.body.error)
                throw resp.body.error

            return then(resp.body.result)
        },

        getEntityFile = (target, key) =>
            cnRpc(target, () => ({
                method: 'fetchPublic',
                data: {key},
                isPublic: true,
            })),

        dashifyProjUrls = projRec => {
            [
                'logo',
                'image',
            ]
                .filter(propName => projRec.data[propName])

                .forEach(propName =>
                    projRec.data[propName] = dashifyUrl(projRec.data[propName]))

            return projRec
        },

        getTemplate = async tplRecOrDid => {
            const
                tplDoc =
                    typeof tplRecOrDid === 'object'
                        ? tplRecOrDid
                        : (await getEntity(tplRecOrDid))

            if (!tplDoc.data.page.content) {
                const
                    {data: rawTplContent} =
                        await getEntityFile(tplDoc, tplDoc.data.page.cid),

                    decodedTplContent =
                        String.fromCharCode.apply(
                            null, fromBase64(rawTplContent)),

                    parsedTplContent = JSON.parse(decodedTplContent)

                tplDoc.data.page.content = parsedTplContent
                // Here we're arbitrarily extending the template schema to add a
                // "content" property under "page", and populate it with the
                // actual claim template content fetched from the relevant cell
                // node.
            }

            return tplDoc
        }

    return {
        getSecpAccount: async () =>
            await bcFetch(
                '/cosmos/auth/v1beta1/accounts/'
                    + (await getSignerAddress('secp'))),

        getAgentAccount: async () =>
            await bcFetch(
                '/cosmos/auth/v1beta1/accounts/'
                    + (await getSignerAddress('agent'))),

        register: pubKey => {
            if (!signer)
                throw new Error('The client needs to be initialized with a wallet / signer in order for this method to be used') // eslint-disable-line max-len

            return signAndBroadcast('agent', {
                type: 'did/AddDid',
                value: {
                    did: signer.agent.did,
                    pubKey: signer.agent.didDoc.verifyKey || pubKey,
                },
            })
        },

        getDidDoc: did => bsFetch('/api/did/getByDid/' + did).then(r => r.body),

        listEntities,

        listProjects: async () => {
            const projRecs = await listEntities('Project')

            if (dashifyUrls)
                projRecs.forEach(dashifyProjUrls)

            return projRecs
        },

        listTemplates: () => listEntities('Template'),

        listCells: () => listEntities('Cell'),

        getProject: async projDid => {
            const projRec = await getEntity(projDid)

            if (dashifyUrls)
                dashifyProjUrls(projRec)

            return projRec
        },

        getTemplate,

        getCell: getEntity,

        createProject: (projectData, cnUrl = defaultCellnodeUrl) =>
            cnRpc(cnUrl, () => ({
                method: 'createProject',
                tplName: 'create_project',
                data: projectData,
            })),

        createEntityFile: (target, dataUrl) => {
            const [, contentType, data] =
                dataUrl.match('^data:([^;]+);base64,(.+)$')

            return cnRpc(target, (_, serviceEndpoint) => ({
                method: 'createPublic',
                data: {data, contentType},
                isPublic: true,
                then: data => serviceEndpoint + '/public/' + data,
            }))
        },

        getEntityFile,

        updateProjectStatus: (projRecOrDid, status) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'updateProjectStatus',
                tplName: 'project_status',
                data: {projectDid, status},
            })),

        getProjectFundAddress: async projDid =>
            (await bcFetch('/projectAccounts/' + projDid)).body[projDid],

        listAgents: projRecOrDid =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'listAgents',
                tplName: 'list_agent',
                data: {projectDid},
            })),

        createAgent: (projRecOrDid, {did, role, email, name}) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'createAgent',
                tplName: 'create_agent',
                data: {projectDid, agentDid: did, role, email, name},
            })),

        updateAgent: (projRecOrDid, agentDid, {status, role, version}) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'updateAgentStatus',
                tplName: 'agent_status',
                data: {projectDid, agentDid, status, role, version},
            })),

        listClaims: (projRecOrDid, tplId) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: tplId ? 'listClaimsByTemplateId' : 'listClaims',
                tplName: 'list_claim',
                data: {projectDid, claimTemplateId: tplId},
            })),

        createClaim: async (projRecOrDid, tplRecOrDid, claimItems, fetchOpts)=>{
            const tplRec = await getTemplate(tplRecOrDid)

            return await cnRpc(projRecOrDid, projectDid => ({
                method: 'submitClaim',
                tplName: 'submit_claim',
                data: {
                    '@context': 'https://schema.ixo.foundation/claims/53690e7d550278dbe228ddf35e0ba72b2666cba6', // eslint-disable-line max-len
                    claimTemplateId: tplRec.projectDid,
                    type: tplRec.data.page.content.claimInfo.type,
                    issuerId: signer.agent.did,
                    claimSubject: {id: projectDid},
                    items: claimItems,
                    projectDid,
                    dateTime: (new Date()).toISOString(),
                },
            }), fetchOpts)
        },
        // TODO: We can optionally validate the given claims against the schema
        // of the claim template in the future.

        evaluateClaim: (projRecOrDid, claimId, status) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'evaluateClaim',
                tplName: 'evaluate_claim',
                data: {projectDid, claimId, status},
            })),

        sendTokens: async (to, amount, denom = 'uixo') =>
            await signAndBroadcast('secp', {
                type: 'cosmos-sdk/MsgSend',
                value: {
                    amount: [{amount, denom}],
                    from_address: (await getSignerAddress('secp')),
                    to_address: to,
                },
            }),

        custom: (walletToUse, msg, fee) =>
            signAndBroadcast(walletToUse, msg, fee),
    }
}

const assertSignerIsValid = signer => {
    if (
        !signer
        || !signer.secp
        || !signer.agent
        || typeof signer.secp.getAccounts !== 'function'
        || typeof signer.secp.signAmino !== 'function'
        || typeof signer.agent.getAccounts !== 'function'
        || typeof signer.agent.signAmino !== 'function'
        || typeof signer.agent.did !== 'string'
    )
        throw new Error('Invalid signer')
}

const makeFetcher = (urlPrefix = '') => async (path, opts = {}) => {
    const
        url = urlPrefix + path,
        rawBody = opts.body

    opts = {
        ...opts,
        body: opts.body && sortedJsonStringify(opts.body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...opts.headers,
        },
    }

    if (opts.dryRun)
        return {url, ...opts}

    debug('> Request', inspect({url, ...opts, body: rawBody}, {depth: 10}))

    const
        resp = await fetch(url, opts),
        isJson =resp.headers.get('content-type').startsWith('application/json'),
        body = await resp[isJson ? 'json' : 'text']()

    debug('< Response', inspect({
        status: resp.status,
        headers: Object.fromEntries(resp.headers.entries()),
        body: body,
    }, {depth: 10}))

    return Promise[resp.ok ? 'resolve' : 'reject']({
        status: resp.status,
        headers: resp.headers,
        body,
    })
}

const generateTxId = () => Math.floor(Math.random() * 1000000 + 1)

const makePublicRpcMsg = (method, params = {}) => ({
    jsonrpc: '2.0',
    method,
    id: generateTxId(),
    params,
})

const makeRpcMsg = (method, templateName, data, signature) => ({
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

const dashifyUrl = urlStr =>
    urlStr.replace(
        /^(https?:\/\/)([^/]+)(\/.*)?/,
        (_, proto, host, path) => proto + host.replace('_', '-') + (path || ''),
    )

const convertToHex = str =>
    str
        .split('')
        .map(c => c.charCodeAt(0).toString(16))
        .join('')


module.exports = {
    makeWallet,
    makeClient,
}
