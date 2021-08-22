const
    {format: fmt, inspect} = require('util'),
    debug = require('debug')('ixo-client-sdk'),
    fetch = require('isomorphic-unfetch'),
    {coins} = require('@cosmjs/amino'),
    {sortedJsonStringify} = require('@cosmjs/amino/build/signdoc'),
    {fromBase64} = require('@cosmjs/encoding'),
    memoize = require('lodash.memoize')


const
    defaultBlockchainUrl = 'https://testnet.ixo.world',
    defaultBlocksyncUrl = 'https://block-sync-pandora.ixo.world',
    defaultCellnodeUrl = 'https://pds-pandora.ixo.world'


const makeClient = (signer, {
    blockchainUrl = defaultBlockchainUrl,
    blocksyncUrl = defaultBlocksyncUrl,
    dashifyUrls = false,
} = {}) => {
    if (signer)
        assertSignerIsValid(signer)

    const
        getSignerAccount = memoize(signerToUse =>
            signer[signerToUse].getAccounts().then(as => as[0])),

        getNodeInfo = memoize(() =>
            bcFetch('/node_info').then(body => body.node_info)),

        sign = async (signerToUse, signDoc) =>
            signer[signerToUse].signAmino(
                (await getSignerAccount(signerToUse)).address,
                signDoc,
            ),

        signAndBroadcast = async (
            signerToUse,
            msg,
            fee = {amount: coins(5000, 'uixo'), gas: '200000'},
            memo = '',
        ) => {
            const
                {address} = await getSignerAccount(signerToUse),

                {account: {account_number, sequence}} =
                    await bcFetch('/cosmos/auth/v1beta1/accounts/' + address),

                signDoc = {
                    account_number,
                    chain_id: (await getNodeInfo()).network,
                    fee,
                    memo,
                    msgs: [msg],
                    sequence,
                },

                {signature} = await sign(signerToUse, signDoc),

                txResp = await bcFetch('/txs', {
                    method: 'POST',
                    body: {
                        tx: {
                            msg: [msg],
                            fee,
                            signatures: [{
                                ...signature,
                                account_number,
                                sequence,
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
            const ents = await bsFetch('/api/project/listProjects')

            if (!type)
                return ents

            return ents.filter(e => e.data['@type'] === type)
        },

        getEntity = did =>
            bsFetch('/api/project/getByProjectDid/' + did),

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
                            type: (await getSignerAccount('agent')).algo,
                            created: (new Date()).toISOString(),
                            creator: signer.agent.did,
                            signatureValue:
                                (await sign('agent', data)).signature.signature,
                        }),

                path = isPublic ? '/api/public' : '/api/request'

            const respBody = await cnFetch(serviceEndpoint + path, {
                method: 'POST',
                body: message,
                ...fetchOpts,
            })

            if (fetchOpts.dryRun)
                return resp

            if (respBody.error)
                throw respBody.error

            return then(respBody.result)
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
                    + (await getSignerAccount('secp')).address),

        getAgentAccount: async () =>
            await bcFetch(
                '/cosmos/auth/v1beta1/accounts/'
                    + (await getSignerAccount('agent')).address),

        balances: async (accountType, denom) =>
            await bcFetch(fmt(
                '/cosmos/bank/v1beta1/balances/%s' + (denom ? '/%s' : ''),
                (await getSignerAccount(accountType)).address,
                denom || '',
            )),

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

        getDidDoc: did => bsFetch('/api/did/getByDid/' + did),

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
            (await bcFetch('/projectAccounts/' + projDid))[projDid],

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
                    amount: [{amount: String(amount), denom}],
                    from_address: (await getSignerAccount('secp')).address,
                    to_address: to,
                },
            }),

        staking: {
            listValidators: urlParams =>
                bcFetch('/staking/validators', {urlParams}),

            getValidator: validatorAddr =>
                bcFetch('/staking/validators/' + validatorAddr),

            myDelegations: async () =>
                await bcFetch(fmt(
                    '/staking/delegators/%s/delegations',
                    (await getSignerAccount('secp')).address,
                )),

            pool: () => bcFetch('/staking/pool'),

            validatorDistribution: validatorAddr =>
                bcFetch('/distribution/validators/' + validatorAddr),

            delegatorValidatorRewards: (delegatorAddr, validatorAddr) =>
                bcFetch(fmt(
                    '/distribution/delegators/%s/rewards/%s',
                    delegatorAddr,
                    validatorAddr,
                )),

            delegation: (delegatorAddr, validatorAddr) =>
                bcFetch(fmt(
                    '/staking/delegators/%s/delegations/%s',
                    delegatorAddr,
                    validatorAddr,
                )),

            delegatorDelegations: delegatorAddr =>
                bcFetch(fmt(
                    '/staking/delegators/%s/delegations',
                    delegatorAddr,
                )),

            delegatorUnbondingDelegations: delegatorAddr =>
                bcFetch(fmt(
                    '/staking/delegators/%s/unbonding_delegations',
                    delegatorAddr,
                )),

            delegatorRewards: delegatorAddr =>
                bcFetch(`/distribution/delegators/${delegatorAddr}/rewards`),

            delegate: async (validatorAddr, amount) =>
                await signAndBroadcast('secp', {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                        amount: {denom: 'uixo', amount: String(amount)},
                        delegator_address:
                            (await getSignerAccount('secp')).address,
                        validator_address: validatorAddr,
                    },
                }),

            undelegate: async (validatorAddr, amount) =>
                await signAndBroadcast('secp', {
                    type: 'cosmos-sdk/MsgUndelegate',
                    value: {
                        amount: {denom: 'uixo', amount: String(amount)},
                        delegator_address:
                            (await getSignerAccount('secp')).address,
                        validator_address: validatorAddr,
                    },
                }),

            redelegate: async (validatorSrcAddr, validatorDstAddr, amount) =>
                await signAndBroadcast('secp', {
                    type: 'cosmos-sdk/MsgBeginRedelegate',
                    value: {
                        amount: {denom: 'uixo', amount: String(amount)},
                        delegator_address:
                            (await getSignerAccount('secp')).address,
                        validator_src_address: validatorSrcAddr,
                        validator_dst_address: validatorDstAddr,
                    },
                }),
        },

        bonds: {
            byId: did => bcFetch('/bonds/' + did),

            list: () => bcFetch('/bonds_detailed'),

            buy: ({bondDid, bondToken, reserveToken, amount, maxPrice}) =>
                signAndBroadcast('agent', {
                    type: 'bonds/MsgBuy',
                    value: {
                        buyer_did: 'did:ixo:' + signer.agent.did,
                        bond_did: bondDid,
                        amount: {amount: String(amount), denom: bondToken},
                        max_prices: [
                            {amount: String(maxPrice), denom: reserveToken},
                        ],
                    },
                }),

            sell: ({bondDid, bondToken, amount}) =>
                signAndBroadcast('agent', {
                    type: 'bonds/MsgSell',
                    value: {
                        seller_did: 'did:ixo:' + signer.agent.did,
                        bond_did: bondDid,
                        amount: {amount: String(amount), denom: bondToken},
                    },
                }),
        },

        custom: (signerToUse, msg, fee) =>
            signAndBroadcast(signerToUse, msg, fee),
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

const makeFetcher = (urlPrefix = '') =>
    async (path, {
        urlParams,
        fullResponse = false,
        dryRun = false,
        ...fetchOpts
    } = {}) => {
        const
            urlParamsStr = new URLSearchParams(urlParams).toString(),
            url = urlPrefix + path + (urlParamsStr ? '?' + urlParamsStr : ''),
            rawBody = fetchOpts.body

        fetchOpts = {
            ...fetchOpts,
            body: fetchOpts.body && sortedJsonStringify(fetchOpts.body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...fetchOpts.headers,
            },
        }

        if (dryRun)
            return {url, ...fetchOpts}

        debug(
            '> Request',
            inspect({url, ...fetchOpts, body: rawBody}, {depth: 10}),
        )

        const
            resp = await fetch(url, fetchOpts),

            isJson =
                resp.headers.get('content-type').startsWith('application/json'),

            body = await resp[isJson ? 'json' : 'text']()

        debug('< Response', inspect({
            status: resp.status,
            headers: Object.fromEntries(resp.headers.entries()),
            body: body,
        }, {depth: 10}))

        return Promise[resp.ok ? 'resolve' : 'reject'](
            fullResponse
                ? {
                    status: resp.status,
                    headers: resp.headers,
                    body,
                }
                : body,
        )
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


module.exports = makeClient
