const
    debug = require('debug')('ixo-client-sdk'),

    fetch = require('isomorphic-unfetch'),

    {Secp256k1HdWallet, makeCosmoshubPath, GasPrice, coins}
        = require('@cosmjs/launchpad'),

    {sortedJsonStringify} = require('@cosmjs/launchpad/build/encoding'),

    {toHex, fromHex, fromBase64} = require('@cosmjs/encoding'),

    {pathToString, stringToPath} = require('@cosmjs/crypto'),

    SigningCosmosClient = require('./SigningCosmosClient'),

    IxoAgentWallet = require('./IxoAgentWallet')


const
    defaultBlockchainUrl =
        'https://ixo-testnet-validator-mt.simply-vc.com.mt/api',

    defaultBlocksyncUrl = 'https://block-sync-pandora.ixo.world',

    defaultCellnodeUrl = 'https://pds-pandora.ixo.world'


const makeWallet = async (src, serializationPwd) => {
    let secp, agent

    if (typeof src === 'object') {
        ({secp, agent} = plainStateToWallet(src))

    } else if (src && src.startsWith('{"')) {
        const serialized = JSON.parse(src)

        ;[secp, agent] = await Promise.all([
            Secp256k1HdWallet.deserialize(serialized.secp, serializationPwd),
            IxoAgentWallet.deserialize(serialized.agent, serializationPwd),
        ])

    } else {
        secp = await (
            src
                ?  Secp256k1HdWallet
                    .fromMnemonic(src, makeCosmoshubPath(0), 'ixo')

                :  Secp256k1HdWallet.generate(12, makeCosmoshubPath(0), 'ixo')
        )

        agent = await IxoAgentWallet.fromMnemonic(secp.secret.data)
    }

    const toJSON = () => walletToPlainState({secp, agent})

    return {secp, agent, toJSON}
}

const walletToPlainState = w => ({
    secp: {
        secret: w.secp.secret && w.secp.secret.data,
        hdPath: pathToString(w.secp.accounts[0].hdPath),
        prefix: w.secp.accounts[0].prefix,
        privkey: toHex(w.secp.privkey),
        pubkey: toHex(w.secp.pubkey),
        address: w.secp.address,
    },
    agent: {
        secret: w.agent.secret && w.secp.secret.data,
        hdPath: pathToString(w.agent.accounts[0].hdPath),
        prefix: w.agent.accounts[0].prefix,
        privkey: w.agent.privkey,
        pubkey: w.agent.pubkey,
        signkey: w.agent.signkey,
        verifykey: w.agent.verifykey,
        did: w.agent.did,
        address: w.agent.address,
    },
})

const plainStateToWallet = s => ({
    secp: new Secp256k1HdWallet(
        s.secp.secret,
        stringToPath(s.secp.hdPath),
        fromHex(s.secp.privkey),
        fromHex(s.secp.pubkey),
        s.secp.prefix,
    ),

    agent: new IxoAgentWallet(
        s.agent.secret,
        stringToPath(s.agent.hdPath),
        s.agent.privkey,
        s.agent.pubkey,
        s.agent.signkey,
        s.agent.verifykey,
        s.agent.did,
        s.agent.prefix,
    ),
})

const makeClient = (signer, {
    blockchainUrl = defaultBlockchainUrl,
    blocksyncUrl = defaultBlocksyncUrl,
    dashifyUrls = false,
} = {}) => {
    const
        cosmosCli =
            signer
                ? {
                    secp: new SigningCosmosClient(
                        blockchainUrl,
                        signer.secp.address,
                        signer.secp,
                        GasPrice.fromString('0.025uixo'),
                    ),

                    agent:
                        new SigningCosmosClient(
                            blockchainUrl,
                            signer.agent.address,
                            signer.agent,
                            GasPrice.fromString('0.025uixo')
                        ),
                }
                : new Proxy({}, {
                    get() {
                        throw new Error('The client needs to be initialized with a wallet / signer in order for this method to be used') // eslint-disable-line max-len
                    },
                }),

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

        cnRpc = async (target, dataCb) => {
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
                            creator: 'did:ixo:' + signer.agent.did,
                            signatureValue:
                                (await signer.agent.sign(
                                    signer.agent.address,
                                    data
                                ))
                                    .signature.signature,
                        }),

                path = isPublic ? '/api/public' : '/api/request'

            const resp = await cnFetch(serviceEndpoint + path, {
                method: 'POST',
                body: message,
            })

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
                .filter(propName => projRec[propName])

                .forEach(propName =>
                    projRec[propName] = dashifyUrl(projRec[propName]))

            return projRec
        },

        getTemplate = async tplDid => {
            const
                tplDoc = await getEntity(tplDid),

                {data: rawTplContent} =
                    await getEntityFile(tplDoc, tplDoc.data.page.cid),

                decodedTplContent =
                    String.fromCharCode.apply(null, fromBase64(rawTplContent)),

                parsedTplContent = JSON.parse(decodedTplContent)

            tplDoc.data.page.content = parsedTplContent

            return tplDoc
        }

    return {
        getSecpAccount: () => cosmosCli.secp.getAccount(),

        getAgentAccount: () => cosmosCli.agent.getAccount(),

        register: verifyKey => {
            if (!signer)
                throw new Error('The client needs to be initialized with a wallet / signer in order for this method to be used') // eslint-disable-line max-len

            return cosmosCli.agent.signAndBroadcast([{
                type: 'did/AddDid',
                value: {
                    did: 'did:ixo:' + signer.agent.did,
                    pubKey: signer.agent.verifykey || verifyKey, // [1]
                },
            }], {
                amount: coins(2000, 'uixo'),
                gas: '80000',
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
            const [, data, contentType] =
                dataUrl.match('^data:([^;]+);base64,(.+)$')

            return cnRpc(target, () => ({
                method: 'createPublic',
                data: {data, contentType},
                isPublic: true,
            }))
        },

        getEntityFile,

        updateProjectStatus: (projRecOrDid, status) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'updateProjectStatus',
                tplName: 'project_status',
                data: {projectDid, status},
            })),

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

        createClaim: async (projRecOrDid, tplRecOrDid, claimItems) => {
            const tplRec = typeof tplRecOrDid !== 'object'
                ? await getTemplate(tplRecOrDid)
                : tplRecOrDid

            return await cnRpc(projRecOrDid, projectDid => {
                const foo = {
                    method: 'submitClaim',
                    tplName: 'submit_claim',
                    data: {
                        '@context': 'https://schema.ixo.foundation/claims/53690e7d550278dbe228ddf35e0ba72b2666cba6', // eslint-disable-line max-len
                        id: tplRec.projectDid,
                        type: tplRec.data.page.claimInfo.type,
                        issuerId: signer.agent.did,
                        claimSubject: {id: projectDid},
                        items: claimItems,
                        projectDid,
                        dateTime: (new Date()).toISOString(),
                    },
                }

                console.log('submitting claim',  foo)

                return foo
            })
        },
        // TODO: We can optionally validate the given claims against the schema
        // of the claim template in the future.

        evaluateClaim: (projRecOrDid, claimId, status) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'evaluateClaim',
                tplName: 'evaluate_claim',
                data: {projectDid, claimId, status},
            })),

        sendTokens: (to, amount, denom = 'uixo') =>
            cosmosCli.secp.sendTokens(to, coins(amount, denom)),

        custom: (type, msg) =>
            cosmosCli[type].signAndBroadcast([msg]),
    }
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

    debug('> Request', {url, ...opts, body: rawBody})

    const
        resp = await fetch(url, opts),
        isJson =resp.headers.get('content-type').startsWith('application/json'),
        body = await resp[isJson ? 'json' : 'text']()

    debug('< Response', {
        status: resp.status,
        headers: Object.fromEntries(resp.headers.entries()),
        body: body,
    })

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


module.exports = {
    makeWallet,
    makeClient,
}


// [1] Note that we are assigning the verify key to the property "pubKey". This
// is not an error. Apparently some backend guy decided to call the "verify key"
// the "public key", which is a very bad thing to do in this context as another
// key that is called the "public key" already exists.
