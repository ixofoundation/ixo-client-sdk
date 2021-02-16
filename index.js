const
    debug = require('debug')('ixo-client-sdk'),

    fetch = require('isomorphic-unfetch'),

    {
        Secp256k1HdWallet, makeCosmoshubPath, SigningCosmosClient, GasPrice,
        coins,
    } =
        require('@cosmjs/launchpad'),

    {sortedJsonStringify} = require('@cosmjs/launchpad/build/encoding'),

    IxoAgentWallet = require('./IxoAgentWallet')


const
    defaultBlockchainUrl =
        'https://ixo-testnet-validator-mt.simply-vc.com.mt/api',

    defaultBlocksyncUrl = 'https://block-sync-pandora.ixo.world',

    defaultCellnodeUrl = 'https://pds-pandora.ixo.world'


const makeWallet = async (mnemonicOrSerialization, serializationPwd) => {
    let secp, agent

    if (typeof mnemonicOrSerialization === 'object') {
        secp = new Secp256k1HdWallet(...mnemonicOrSerialization.secp)
        agent = new IxoAgentWallet(...mnemonicOrSerialization.agent)

    } else if (mnemonicOrSerialization && mnemonicOrSerialization.startsWith('{"')) {
        const serialized = JSON.parse(mnemonicOrSerialization)

        ;[secp, agent] = await Promise.all([
            Secp256k1HdWallet.deserialize(serialized.secp, serializationPwd),
            IxoAgentWallet.deserialize(serialized.agent, serializationPwd),
        ])

    } else {
        secp = await (
            mnemonicOrSerialization
                ?  Secp256k1HdWallet
                    .fromMnemonic(
                        mnemonicOrSerialization, makeCosmoshubPath(0), 'ixo')

                :  Secp256k1HdWallet.generate(12, makeCosmoshubPath(0), 'ixo')
        )

        agent = await IxoAgentWallet.fromMnemonic(secp.secret.data)
    }

    const serialize = pwd =>
        Promise.all([
            secp.serialize(pwd),
            agent.serialize(pwd),
        ])
            .then(([secp, agent]) =>
                JSON.stringify({secp, agent}))

    return {secp, agent, serialize}
}

const makeClient = (
    signer,
    blockchainUrl = defaultBlockchainUrl,
    blocksyncUrl = defaultBlocksyncUrl,
) => {
    const
        cosmosCli = {
            secp: new SigningCosmosClient(
                blockchainUrl,
                signer.secp.address,
                signer.secp,
                GasPrice.fromString('2000uixo'),
            ),

            agent:
                new SigningCosmosClient(
                    blockchainUrl,
                    signer.agent.address,
                    signer.agent,
                    GasPrice.fromString('0uixo')
                ),
        },

        bsFetch = makeFetcher(blocksyncUrl),

        getProject = did =>
            bsFetch('/api/project/getByProjectDid/' + did).then(r => r.body),

        getProjectHead = async projRecOrDid => {
            if (typeof projRecOrDid === 'object')
                return {
                    projectDid: projRecOrDid.projectDid,

                    serviceEndpoint:
                        (projRecOrDid.data.nodes || projRecOrDid.nodes)
                            .items
                            .find(i => i['@type'] === 'CellNode')
                            .serviceEndpoint
                            .replace(/\/$/, ''),
                }

            return getProjectHead(await getProject(projRecOrDid))
        },

        cnFetch = makeFetcher(),

        cnRpc = async (target, dataCb) => {
            const {projectDid, serviceEndpoint}
                = typeof target === 'string' && target.startsWith('http')
                    ? {projectDid: null, serviceEndpoint: target}
                    : (await getProjectHead(target))

            const
                {method, tplName, data, public = false} = dataCb(projectDid),

                message =
                    public
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

                path = public ? '/api/public' : '/api/request'

            const resp = await cnFetch(serviceEndpoint + path, {
                method: 'POST',
                body: message,
            })

            if (resp.body.error)
                throw resp.body.error

            return resp.body.result
        }

    return {
        getSecpAccount: () => cosmosCli.secp.getAccount(),

        getAgentAccount: () => cosmosCli.agent.getAccount(),

        register: verifyKey =>
            cosmosCli.agent.signAndBroadcast([{
                type: 'did/AddDid',
                value: {
                    did: 'did:ixo:' + signer.agent.did,
                    pubKey: signer.agent.verifykey || verifyKey, // [1]
                },
            }], {
                amount: [],
                gas: '0',
            }),

        getDidDoc: did => bsFetch('/api/did/getByDid/' + did).then(r => r.body),

        listEntities: () =>
            bsFetch('/api/project/listProjects').then(r => r.body),

        getEntity: getProject,

        createEntity: (projData, cnUrl = defaultCellnodeUrl) =>
            cnRpc(cnUrl, () => ({
                method: 'createProject',
                tplName: 'create_project',
                data: projData,
            })),

        createEntityFile: (target, dataUrl) => {
            const [, data, contentType] =
                dataUrl.match('^data:([^;]+);base64,(.+)$')

            return cnRpc(target, () => ({
                method: 'createPublic',
                data: {data, contentType},
                public: true,
            }))
        },

        getEntityFile: (target, key) =>
            cnRpc(target, () => ({
                method: 'fetchPublic',
                data: {key},
                public: true,
            })),

        updateEntityStatus: (projRecOrDid, status) =>
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

        createClaim: (projRecOrDid, claimData) =>
            cnRpc(projRecOrDid, projectDid => ({
                method: 'submitClaim',
                tplName: 'submit_claim',
                data: {...claimData, projectDid},
            })),

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


module.exports = {
    makeWallet,
    makeClient,
}


// [1] Note that we are assigning the verify key to the property "pubKey". This
// is not an error. Apparently some backend guy decided to call the "verify key"
// the "public key", which is a very bad thing to do in this context as another
// key that is called the "public key" already exists.
