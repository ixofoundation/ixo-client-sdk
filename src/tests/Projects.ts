/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { serializeSignDoc } from "@cosmjs/amino";
import { sha256 } from "@cosmjs/crypto";
import { toUtf8, Bech32, toBase64 } from "@cosmjs/encoding";
import { Registry } from "@cosmjs/proto-signing";
import { decode } from "bs58";
import sovrin from "sovrin-did";
import { WithdrawFundsDoc } from "../codec/project/project";
import {
  MsgCreateAgent,
  MsgCreateClaim,
  MsgCreateEvaluation,
  MsgCreateProject,
  MsgUpdateAgent,
  MsgUpdateProjectDoc,
  MsgUpdateProjectStatus,
  MsgWithdrawFunds,
} from "../codec/project/tx";
import { JsonToArray } from "../protoquery/utils";
import { SigningStargateClient } from "../utils/customClient";
import { accountFromAny } from "../utils/EdAccountHandler";

interface messageData {
  tx: {
    msg: [
      {
        type: string;
        value: {
          data: any;
          txHash: string;
          senderDid: string;
          projectDid: string;
          pubKey: string;
        };
      }
    ];
  };
}
const project = {
  data: '{"tx":{"msg":[{"type":"project/CreateProject","value":{"data":{"@type":"Project","name":"pol test","description":"A 12-month pilot of an innovative decentralised results-based financing mechanism to scale access to educational technologies for remote learning, to achieve primary education outcomes and build a tokenised education economy.","image":"https://pds_pandora.ixo.world/public/6rej1furasxkpzyqvf6","brand":"Chimple Learning","logo":"https://cellnode-pandora.ixo.world/public/rla7bjq579rktl44ur4","location":"IN","sdgs":["4"],"@context":"https://schema.ixo.foundation/entity:2383r9riuew","entitySchemaVersion":"1.0.0","relayerNode":"did:sov:Rmb6Rd1CU6k74FM2xzy6Do","startDate":"2021-09-15T02:00:00.000Z","endDate":"2022-09-30T02:00:00.000Z","status":"Created","stage":"Delivery","version":{"versionNumber":"1","effectiveDate":"2021-06-16T11:30:00.000Z"},"creator":{"id":"did:ixo:chimple","displayName":"Chimple Learning","logo":"https://cellnode-pandora.ixo.world/public/2cxhgpqb3bcktkjzbio","location":"IN","email":"help@chimple.org","website":"https://chimple.org","mission":"Comprehensive early learning technology solutions designed for all children."},"owner":{"id":"did:ixo:chimple","displayName":"Chimple Learning","logo":"https://cellnode-pandora.ixo.world/public/2cxhgpqb3bcktkjzbio","location":"IN","email":"help@chimple.org","website":"https://chimple.org","mission":"Comprehensive early learning technology solutions designed for all children."},"ddoTags":[{"category":"Project Type","tags":["Education & Awareness"]},{"category":"SDG","tags":["SDG4 – Quality Education"]},{"category":"Stage","tags":["Planning"]},{"category":"Sector","tags":["UBS Zone"]}],"displayCredentials":{"@context":"https://www.w3.org/2018/credentials/v1","items":[]},"headlineMetric":{"claimTemplateId":"did:ixo:EHKrVDLXX8zzgR9eKgAtKg"},"embeddedAnalytics":[{"title":"Live Activity Feed","urls":["https://protect2.fireeye.com/v1/url?k=e1684eb8-bef3766f-e16867c6-000babff4033-caf77e8efbded967&q=1&e=c1f985d7-0c7c-4505-915a-8fbe914dbdaa&u=https%3A%2F%2Fdatastudio.google.com%2Fs%2FpMGwQoBhtrg"]}],"page":{"cid":"g6skhn0kv14l66krzbb","version":"1.0.0"},"entityClaims":{"@context":"https://schema.ixo.world/claims:3r08webu2eou","items":[{"@id":"did:ixo:EHKrVDLXX8zzgR9eKgAtKg","visibility":"Public","title":"Learning Performance","description":"The level of performance a student has achieved at a specific period of the learning program.","targetMin":4000,"targetMax":5000,"startDate":"2021-09-15T02:00:00.000Z","endDate":"2022-09-30T02:00:00.000Z","goal":"Learning Progress Claims","agents":[],"claimEvaluation":[],"claimApproval":[],"claimEnrichment":[]},{"@id":"did:ixo:VUgXN2EfwuEbZKHewMTtny","visibility":"Public","title":"Accountable Use of Funds","description":"A generic form to submit claims of project expenditure items, together with supporting evidence.","targetMin":4000,"targetMax":100,"startDate":"2021-09-15T02:00:00.000Z","endDate":"2022-09-30T02:00:00.000Z","goal":"Expenditure Reported","agents":[],"claimEvaluation":[],"claimApproval":[],"claimEnrichment":[]},{"@id":"did:ixo:EENZQ9tUfkmCMD52Qpt9cs","visibility":"Public","title":"Bank Transactions","description":"A general claim for submitting proof of a bank transaction. Requests upload of a document as evidence for the transaction.","targetMin":1,"targetMax":20,"startDate":"2021-09-15T02:00:00.000Z","endDate":"2022-09-30T02:00:00.000Z","goal":"Accountable Bank Transactions","agents":[],"claimEvaluation":[],"claimApproval":[],"claimEnrichment":[]}]},"linkedEntities":[{"@type":"Investment","id":"did:ixo:PTZRqu8BsxNsdFbMyCxtLQ"}],"fees":{"@context":"https://schema.ixo.world/fees/ipfs3r08webu2eou","items":[]},"nodes":{"@context":"https://schema.ixo.world/nodes/ipfs3r08webu2eou","items":[{"@type":"CellNode","id":"#cellnode","serviceEndpoint":"https://cellnode-pandora.ixo.earth"}]},"liquidity":{"@context":"https://schema.ixo.world/liquidity/ipfs3r08webu2eou","items":[]},"service":[],"linkedResources":[],"createdOn":"2022-07-29T14:44:01Z","createdBy":"did:sov:GV1B2NuW5MvczufYCtCTfk","nodeDid":""},"txHash":"5f80d1012cf309dfff22611bb6c13a579be0f7719e39cf62334a6fb38d2f5275","senderDid":"did:sov:GV1B2NuW5MvczufYCtCTfk","projectDid":"did:ixo:CW3JR99iEVf2KBVNEuLCWv","pubKey":"7GZSSbz2YRutvaaa48QyXffezw3bNS2Y3jLwXdnPK6jd"}}],"fee":{"amount":[{"denom":"uixo","amount":"1000000"}],"gas":"0"},"signatures":[{"signature":"6HK3Pce8gOXgPToCQLWZst7uzXII3TPKARtpWDTmaWiPuAQNH7ZdG1T+0ExVIjkxkZnvr86KiSBT1UslzIoVCA==","pub_key":{"type":"tendermint/PubKeyEd25519","value":"XSKDHrj0QmU/+SWRuvtj63ZNbA4i6nchRnzWr6IMFqw="}}]},"mode":"block"}',
};

export const CreateProject = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgCreateProject", MsgCreateProject); // Replace with your own type URL and Msg class
  const parsed: messageData = JSON.parse(project.data);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgCreateProject", // Same as above
    value: MsgCreateProject.fromPartial({
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      pubKey: edClient.didDoc.verifyKey,
      data: JsonToArray(JSON.stringify(parsed.tx.msg[0].value.data)),
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateProjectStatus = async () => {
  const myRegistry = new Registry();
  myRegistry.register(
    "/project.MsgUpdateProjectStatus",
    MsgUpdateProjectStatus
  );

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgUpdateProjectStatus", // Same as above
    value: MsgUpdateProjectStatus.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateAgent = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgCreateAgent", MsgCreateAgent);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgCreateAgent", // Same as above
    value: MsgCreateAgent.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateAgent = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgUpdateAgent", MsgUpdateAgent);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgUpdateAgent", // Same as above
    value: MsgUpdateAgent.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateClaim = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgCreateClaim", MsgCreateClaim);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgCreateClaim", // Same as above
    value: MsgCreateClaim.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const CreateEvaluation = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgCreateEvaluation", MsgCreateEvaluation);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgCreateEvaluation", // Same as above
    value: MsgCreateEvaluation.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const WithdrawFunds = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgWithdrawFunds", MsgWithdrawFunds);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgWithdrawFunds", // Same as above
    value: MsgWithdrawFunds.fromPartial({
      senderDid: edClient.did,
      data: WithdrawFundsDoc.fromPartial({
        projectDid: "",
        recipientDid: "",
        amount: "",
        isRefund: false,
      }),
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateProjectDoc = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/project.MsgUpdateProjectDoc", MsgUpdateProjectDoc);

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL,
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const projectDID = sovrin.gen();

  const message = {
    typeUrl: "/project.MsgUpdateProjectDoc", // Same as above
    value: MsgUpdateProjectDoc.fromPartial({
      txHash: "",
      senderDid: edClient.did,
      projectDid: "did:ixo:" + projectDID.did,
      data: undefined,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

const getEdClient = () => {
  const mnemonic =
    "creek obvious bamboo ozone dwarf above hill muscle image fossil drastic toy";

  // Creating diddoc from MM - edkeys
  const didDoc = sovrin.fromSeed(sha256(toUtf8(mnemonic)).slice(0, 32));

  const edClient = {
    mnemonic,
    didDoc,
    didPrefix: "did:ixo:",
    did: "did:ixo:" + didDoc.did,
    didSov: "did:sov:" + didDoc.did,

    async getAccounts() {
      return [
        {
          algo: "ed25519-sha-256",
          pubkey: Uint8Array.from(decode(didDoc.verifyKey)),
          address: Bech32.encode(
            "ixo",
            sha256(decode(didDoc.verifyKey)).slice(0, 20)
          ),
        },
      ];
    },
    async signAmino(signerAddress: any, signDoc: any) {
      const account = (await this.getAccounts()).find(
        ({ address }) => address === signerAddress
      );

      if (!account)
        throw new Error(`Address ${signerAddress} not found in wallet`);

      const fullSignature = sovrin.signMessage(
        serializeSignDoc(signDoc),
        didDoc.secret.signKey,
        didDoc.verifyKey
      );
      const signatureBase64 = toBase64(fullSignature.slice(0, 64));
      const pub_keyBase64 = decode(didDoc.verifyKey);
      return {
        signed: signDoc,

        signature: {
          signature: signatureBase64,

          pub_key: {
            type: "tendermint/PubKeyEd25519",
            value: toBase64(pub_keyBase64).toString(),
          },
        },
      };
    },
  };

  return edClient;
};
