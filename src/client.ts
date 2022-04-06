const { format: fmt, inspect } = require("util");
const debug = require("debug")("ixo-client-sdk");
const fetch = require("isomorphic-unfetch");
const { coins } = require("@cosmjs/amino");
const { sortedJsonStringify } = require("@cosmjs/amino/build/signdoc");
const { fromBase64 } = require("@cosmjs/encoding");
const memoize = require("lodash.memoize");
const env = require("dotenv").config();

let defaultCellnodeUrl = "https://cellnode-pandora.ixo.world";

let GlobalBlockchainUrl =
  process.env.BLOCKCHAINURL != null
    ? process.env.BLOCKCHAINURL
    : "https://testnet.ixo.world/rest";
let GlobalBlocksyncUrl =
  process.env.BLOCKSYNCURL != null
    ? process.env.BLOCKSYNCURL
    : "https://blocksync-pandora.ixo.world";
let GlobalCellnodeUrl =
  process.env.CELLNODEURL != null
    ? process.env.CELLNODEURL
    : "https://cellnode-pandora.ixo.world";

export function makeClient(
  signer: any,
  { blockchainUrl = "", blocksyncUrl = "", dashifyUrls = false }
) {
  blockchainUrl = GlobalBlockchainUrl;
  blocksyncUrl = GlobalBlocksyncUrl;

  if (signer) assertSignerIsValid(signer);

  const getSignerAccount = memoize((signerToUse: string | number) =>
      signer[signerToUse].getAccounts().then((as: any[]) => as[0])
    ),
    getNodeInfo = memoize(() =>
      bcFetch("/node_info").then((body: { node_info: any }) => body.node_info)
    ),
    sign = async (
      signerToUse: string,
      signDoc: {
        account_number: any;
        chain_id: any;
        fee: { amount: any; gas: string };
        memo: string;
        msgs: any[];
        sequence: any;
      }
    ) =>
      signer[signerToUse].signAmino(
        (await getSignerAccount(signerToUse)).address,
        signDoc
      ),
    signAndBroadcast = async (
      signerToUse: string,
      msg: {
        type: string;
        value:
          | { did: any; pubKey: any }
          | {
              amount: { amount: string; denom: string }[];
              from_address: any;
              to_address: any;
            }
          | {
              amount: { denom: string; amount: string };
              delegator_address: any;
              validator_address: any;
            }
          | {
              amount: { denom: string; amount: string };
              delegator_address: any;
              validator_address: any;
            }
          | {
              amount: { denom: string; amount: string };
              delegator_address: any;
              validator_src_address: any;
              validator_dst_address: any;
            }
          | {
              buyer_did: any;
              bond_did: any;
              amount: { amount: string; denom: any };
              max_prices: { amount: string; denom: any }[];
            }
          | {
              seller_did: any;
              bond_did: any;
              amount: { amount: string; denom: any };
            };
      },
      fee = { amount: coins(5000, "uixo"), gas: "200000" },
      memo = ""
    ) => {
      const { address } = await getSignerAccount(signerToUse),
        {
          account: { account_number, sequence },
        } = await bcFetch("/cosmos/auth/v1beta1/accounts/" + address),
        signDoc = {
          account_number,
          chain_id: (await getNodeInfo()).network,
          fee,
          memo,
          msgs: [msg],
          sequence,
        },
        { signature } = await sign(signerToUse, signDoc),
        txResp = await bcFetch("/txs", {
          method: "POST",
          body: {
            tx: {
              msg: [msg],
              fee,
              signatures: [
                {
                  ...signature,
                  account_number,
                  sequence,
                },
              ],
            },
            mode: "sync",
          },
        });

      return txResp;
    },
    bcFetch = makeFetcher(blockchainUrl),
    bsFetch = makeFetcher(blocksyncUrl),
    listEntities = async (type: string) => {
      const ents = await bsFetch("/api/project/listProjects");

      if (!type) return ents;

      return ents.filter(
        (e: { data: { [x: string]: string } }) => e.data["@type"] === type
      );
    },
    getEntity = (did: string) => bsFetch("/api/project/getByProjectDid/" + did),
    getEntityHead = async (projRecOrDid: any): Promise<any> => {
      if (typeof projRecOrDid === "object") {
        const { projectDid } = projRecOrDid;
        let serviceEndpoint;

        try {
          serviceEndpoint = projRecOrDid.data.nodes.items
            .find((i: { [x: string]: string }) => i["@type"] === "CellNode")
            .serviceEndpoint.replace(/\/$/, "");

          if (dashifyUrls) serviceEndpoint = dashifyUrl(serviceEndpoint);
        } catch (e) {
          serviceEndpoint = defaultCellnodeUrl;
          /* throw new Error('Project doesn\'t have an associated Cell Node record!') */
        }

        return { projectDid, serviceEndpoint };
      }

      return getEntityHead(await getEntity(projRecOrDid));
    },
    cnFetch = makeFetcher(),
    cnRpc = async (target: string, dataCb: any, fetchOpts?: any) => {
      if (!signer)
        throw new Error(
          "The client needs to be initialized with a wallet / signer in order for this method to be used"
        );

      const { projectDid, serviceEndpoint } =
        typeof target === "string" && target.startsWith("http")
          ? { projectDid: null, serviceEndpoint: target }
          : await getEntityHead(target);

      const {
          method,
          tplName,
          data,
          isPublic = false,
          then = (x: any) => x,
        } = dataCb(projectDid, serviceEndpoint),
        message = isPublic
          ? makePublicRpcMsg(method, data)
          : makeRpcMsg(method, tplName, data, {
              type: (await getSignerAccount("agent")).algo,
              created: new Date().toISOString(),
              creator: signer.agent.did,
              signatureValue: (await sign("agent", data)).signature.signature,
            }),
        path = isPublic ? "/api/public" : "/api/request";

      const respBody = await cnFetch(serviceEndpoint + path, {
        method: "POST",
        body: message,
        ...fetchOpts,
      });

      if (fetchOpts.dryRun) return respBody;

      if (respBody.error) throw respBody.error;

      return then(respBody.result);
    },
    getEntityFile = (target: string, key: any) =>
      cnRpc(target, () => ({
        method: "fetchPublic",
        data: { key },
        isPublic: true,
      })),
    dashifyProjUrls = (projRec: { data: { [x: string]: string } }) => {
      ["logo", "image"]
        .filter((propName) => projRec.data[propName])

        .forEach(
          (propName) =>
            (projRec.data[propName] = dashifyUrl(projRec.data[propName]))
        );

      return projRec;
    };

  return {
    getSecpAccount: async () =>
      await bcFetch(
        "/cosmos/auth/v1beta1/accounts/" +
          (
            await getSignerAccount("secp")
          ).address
      ),

    getAgentAccount: async () =>
      await bcFetch(
        "/cosmos/auth/v1beta1/accounts/" +
          (
            await getSignerAccount("agent")
          ).address
      ),

    balances: async (accountType: any, denom: any) =>
      await bcFetch(
        fmt(
          "/cosmos/bank/v1beta1/balances/%s" + (denom ? "/%s" : ""),
          (
            await getSignerAccount(accountType)
          ).address,
          denom || ""
        )
      ),

    register: (pubKey: any) => {
      if (!signer)
        throw new Error(
          "The client needs to be initialized with a wallet / signer in order for this method to be used"
        ); // eslint-disable-line max-len

      return signAndBroadcast("agent", {
        type: "did/AddDid",
        value: {
          did: signer.agent.did,
          pubKey: signer.agent.didDoc.verifyKey || pubKey,
        },
      });
    },

    getDidDoc: (did: string) => bsFetch("/api/did/getByDid/" + did),

    listEntities,

    listProjects: async () => {
      const projRecs = await listEntities("Project");

      if (dashifyUrls) projRecs.forEach(dashifyProjUrls);

      return projRecs;
    },

    listTemplates: () => listEntities("Template"),

    listCells: () => listEntities("Cell"),

    getProject: async (projDid: string) => {
      const projRec = await getEntity(projDid);

      if (dashifyUrls) dashifyProjUrls(projRec);

      return projRec;
    },

    getTemplate,

    getCell: getEntity,

    createProject: (projectData: any, cnUrl = defaultCellnodeUrl) =>
      cnRpc(cnUrl, () => ({
        method: "createProject",
        tplName: "create_project",
        data: projectData,
      })),

    updateProject: (projectDocUpdates: any, cnUrl = defaultCellnodeUrl) =>
      cnRpc(cnUrl, () => ({
        method: "updateProjectDoc",
        tplName: "project_doc",
        data: projectDocUpdates,
      })),

    createEntityFile: (target: string, dataUrl: any) => {
      const [, contentType, data] = dataUrl.match("^data:([^;]+);base64,(.+)$");

      return cnRpc(target, (_: any, serviceEndpoint: string) => ({
        method: "createPublic",
        data: { data, contentType },
        isPublic: true,
        then: (data: string) => serviceEndpoint + "/public/" + data,
      }));
    },

    getEntityFile,

    updateProjectStatus: (projRecOrDid: string, status: any) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: "updateProjectStatus",
        tplName: "project_status",
        data: { projectDid, status },
      })),

    getProjectFundAddress: async (projDid: string) =>
      (await bcFetch("/projectAccounts/" + projDid)).map[projDid],

    listAgents: (projRecOrDid: string) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: "listAgents",
        tplName: "list_agent",
        data: { projectDid },
      })),

    createAgent: (projRecOrDid: string, { did, role, email, name }: any) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: "createAgent",
        tplName: "create_agent",
        data: { projectDid, agentDid: did, role, email, name },
      })),

    updateAgent: (
      projRecOrDid: string,
      agentDid: any,
      { status, role, version }: any
    ) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: "updateAgentStatus",
        tplName: "agent_status",
        data: { projectDid, agentDid, status, role, version },
      })),

    listClaims: (projRecOrDid: string, tplId: any) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: tplId ? "listClaimsByTemplateId" : "listClaims",
        tplName: "list_claim",
        data: { projectDid, claimTemplateId: tplId },
      })),

    createClaim: async (
      projRecOrDid: string,
      tplRecOrDid: string,
      claimItems: any,
      fetchOpts: any
    ) => {
      const tplRec = await getTemplate(tplRecOrDid);

      return await cnRpc(
        projRecOrDid,
        (projectDid: any) => ({
          method: "submitClaim",
          tplName: "submit_claim",
          data: {
            "@context":
              "https://schema.ixo.foundation/claims/53690e7d550278dbe228ddf35e0ba72b2666cba6", // eslint-disable-line max-len
            claimTemplateId: tplRec.projectDid,
            type: tplRec.data.page.content.claimInfo.type,
            issuerId: signer.agent.did,
            claimSubject: { id: projectDid },
            items: claimItems,
            projectDid,
            dateTime: new Date().toISOString(),
          },
        }),
        fetchOpts
      );
    },
    // TODO: We can optionally validate the given claims against the schema
    // of the claim template in the future.

    evaluateClaim: (projRecOrDid: string, claimId: any, status: any) =>
      cnRpc(projRecOrDid, (projectDid: any) => ({
        method: "evaluateClaim",
        tplName: "evaluate_claim",
        data: { projectDid, claimId, status },
      })),

    sendTokens: async (to: any, amount: any, denom = "uixo") =>
      await signAndBroadcast("secp", {
        type: "cosmos-sdk/MsgSend",
        value: {
          amount: [{ amount: String(amount), denom }],
          from_address: (await getSignerAccount("secp")).address,
          to_address: to,
        },
      }),

    staking: {
      listValidators: (urlParams: any) =>
        bcFetch("/staking/validators", { urlParams }),

      getValidator: (validatorAddr: any) =>
        bcFetch("/staking/validators/" + validatorAddr),

      myDelegations: async () =>
        await bcFetch(
          fmt(
            "/staking/delegators/%s/delegations",
            (
              await getSignerAccount("secp")
            ).address
          )
        ),

      pool: () => bcFetch("/staking/pool"),

      validatorDistribution: (validatorAddr: any) =>
        bcFetch("/distribution/validators/" + validatorAddr),

      delegatorValidatorRewards: (delegatorAddr: any, validatorAddr: any) =>
        bcFetch(
          fmt(
            "/distribution/delegators/%s/rewards/%s",
            delegatorAddr,
            validatorAddr
          )
        ),

      delegation: (delegatorAddr: any, validatorAddr: any) =>
        bcFetch(
          fmt(
            "/staking/delegators/%s/delegations/%s",
            delegatorAddr,
            validatorAddr
          )
        ),

      delegatorDelegations: (delegatorAddr: any) =>
        bcFetch(fmt("/staking/delegators/%s/delegations", delegatorAddr)),

      delegatorUnbondingDelegations: (delegatorAddr: any) =>
        bcFetch(
          fmt("/staking/delegators/%s/unbonding_delegations", delegatorAddr)
        ),

      delegatorRewards: (delegatorAddr: any) =>
        bcFetch(`/distribution/delegators/${delegatorAddr}/rewards`),

      delegate: async (validatorAddr: any, amount: any) =>
        await signAndBroadcast("secp", {
          type: "cosmos-sdk/MsgDelegate",
          value: {
            amount: { denom: "uixo", amount: String(amount) },
            delegator_address: (await getSignerAccount("secp")).address,
            validator_address: validatorAddr,
          },
        }),

      undelegate: async (validatorAddr: any, amount: any) =>
        await signAndBroadcast("secp", {
          type: "cosmos-sdk/MsgUndelegate",
          value: {
            amount: { denom: "uixo", amount: String(amount) },
            delegator_address: (await getSignerAccount("secp")).address,
            validator_address: validatorAddr,
          },
        }),

      redelegate: async (
        validatorSrcAddr: any,
        validatorDstAddr: any,
        amount: any
      ) =>
        await signAndBroadcast("secp", {
          type: "cosmos-sdk/MsgBeginRedelegate",
          value: {
            amount: { denom: "uixo", amount: String(amount) },
            delegator_address: (await getSignerAccount("secp")).address,
            validator_src_address: validatorSrcAddr,
            validator_dst_address: validatorDstAddr,
          },
        }),
    },

    bonds: {
      byId: (did: string) => bcFetch("/bonds/" + did),

      list: () => bcFetch("/bonds_detailed"),

      buy: (
        bondDid: any,
        bondToken: any,
        reserveToken: any,
        amount: any,
        maxPrice: any
      ) =>
        signAndBroadcast("agent", {
          type: "bonds/MsgBuy",
          value: {
            buyer_did: signer.agent.did,
            bond_did: bondDid,
            amount: { amount: String(amount), denom: bondToken },
            max_prices: [{ amount: String(maxPrice), denom: reserveToken }],
          },
        }),

      sell: (bondDid: any, bondToken: any, amount: any) =>
        signAndBroadcast("agent", {
          type: "bonds/MsgSell",
          value: {
            seller_did: signer.agent.did,
            bond_did: bondDid,
            amount: { amount: String(amount), denom: bondToken },
          },
        }),
    },

    custom: (signerToUse: any, msg: any, fee: any) =>
      signAndBroadcast(signerToUse, msg, fee),
  };
}

export async function getTemplate(tplRecOrDid: string): Promise<any> {

 const getEntityHead = async (projRecOrDid: any): Promise<any> => {
    if (typeof projRecOrDid === "object") {
      const { projectDid } = projRecOrDid;
      let serviceEndpoint;

      try {
        serviceEndpoint = projRecOrDid.data.nodes.items
          .find((i: { [x: string]: string }) => i["@type"] === "CellNode")
          .serviceEndpoint.replace(/\/$/, "");

        if (dashifyUrls) serviceEndpoint = dashifyUrl(serviceEndpoint);
      } catch (e) {
        serviceEndpoint = defaultCellnodeUrl;
        /* throw new Error('Project doesn\'t have an associated Cell Node record!') */
      }

      return { projectDid, serviceEndpoint };
    }

    return getEntityHead(await getEntity(projRecOrDid));
  }

 const cnRpc = async (target: string, dataCb: any, fetchOpts?: any) => {
    if (!signer)
      throw new Error(
        "The client needs to be initialized with a wallet / signer in order for this method to be used"
      );

    const { projectDid, serviceEndpoint } =
      typeof target === "string" && target.startsWith("http")
        ? { projectDid: null, serviceEndpoint: target }
        : await getEntityHead(target);

    const {
        method,
        tplName,
        data,
        isPublic = false,
        then = (x: any) => x,
      } = dataCb(projectDid, serviceEndpoint),
      message = isPublic
        ? makePublicRpcMsg(method, data)
        : makeRpcMsg(method, tplName, data, {
            type: (await getSignerAccount("agent")).algo,
            created: new Date().toISOString(),
            creator: signer.agent.did,
            signatureValue: (await sign("agent", data)).signature.signature,
          }),
      path = isPublic ? "/api/public" : "/api/request";

   
    const respBody = await makeFetcher(serviceEndpoint + path, {
      method: "POST",
      body: message,
      ...fetchOpts,
    });

    if (fetchOpts.dryRun) return respBody;

    if (respBody.error) throw respBody.error;

    return then(respBody.result);
 },
   
  getEntityFile = (target: string, key: any) =>
    cnRpc(target, () => ({
      method: "fetchPublic",
      data: { key },
      isPublic: true,
    }))

  const tplDoc =
    typeof tplRecOrDid === "object"
      ? tplRecOrDid
      : await makeFetcher("/api/project/getByProjectDid/" + tplRecOrDid);

  if (!tplDoc.data.page.content) {
    const { data: rawTplContent } = await getEntityFile(
        tplDoc,
        tplDoc.data.page.cid
      ),
      decodedTplContent = String.fromCharCode.apply(
        null,
        fromBase64(rawTplContent)
      ),
      parsedTplContent = JSON.parse(decodedTplContent);

    tplDoc.data.page.content = parsedTplContent;
    // Here we're arbitrarily extending the template schema to add a
    // "content" property under "page", and populate it with the
    // actual claim template content fetched from the relevant cell
    // node.
  }

  return tplDoc;
}

export function assertSignerIsValid(signer: any): void {
  if (
    !signer ||
    !signer.secp ||
    !signer.agent ||
    typeof signer.secp.getAccounts !== "function" ||
    typeof signer.secp.signAmino !== "function" ||
    typeof signer.agent.getAccounts !== "function" ||
    typeof signer.agent.signAmino !== "function" ||
    typeof signer.agent.did !== "string"
  )
    throw new Error("Invalid signer");
}

//todo
export function makeFetcher(urlPrefix?: string): any {
  async (
    path: any,
    { urlParams = {}, fullResponse = false, dryRun = false, ...fetchOpts }
  ) => {
    const urlParamsStr = new URLSearchParams(urlParams).toString(),
      url = urlPrefix + path + (urlParamsStr ? "?" + urlParamsStr : ""),
      rawBody = fetchOpts.body;

    fetchOpts = {
      ...fetchOpts,
      body: fetchOpts.body && sortedJsonStringify(fetchOpts.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...fetchOpts.headers,
      },
    };

    if (dryRun) return { url, ...fetchOpts };

    debug(
      "> Request",
      inspect({ url, ...fetchOpts, body: rawBody }, { depth: 10 })
    );

    const resp = await fetch(url, fetchOpts),
      isJson = resp.headers.get("content-type").startsWith("application/json"),
      body = await resp[isJson ? "json" : "text"]();

    debug(
      "< Response",
      inspect(
        {
          status: resp.status,
          headers: Object.fromEntries(resp.headers.entries()),
          body: body,
        },
        { depth: 10 }
      )
    );

    return Promise[resp.ok ? "resolve" : "reject"](
      fullResponse
        ? {
            status: resp.status,
            headers: resp.headers,
            body,
          }
        : body
    );
  };
}

export function generateTxId(): number {
  return Math.floor(Math.random() * 1000000 + 1);
}

//todo
export function makePublicRpcMsg(method: any, params: any) {
  return {
    jsonrpc: "2.0",
    method,
    id: generateTxId(),
    params,
  };
}

export function makeRpcMsg(
  method?: any,
  templateName?: string,
  data?: any,
  signature?: any
): any {
  return {
    jsonrpc: "2.0",
    method,
    id: generateTxId(),
    params: {
      payload: {
        data: data ? data : {},
        template: templateName ? { name: templateName } : undefined,
      },
      signature,
    },
  };
}

export function dashifyUrl(urlStr: string): string {
  urlStr.replace(
    /^(https?:\/\/)([^/]+)(\/.*)?/,
    (_, proto, host, path) => proto + host.replace("_", "-") + (path || "")
  );
  return urlStr;
}
