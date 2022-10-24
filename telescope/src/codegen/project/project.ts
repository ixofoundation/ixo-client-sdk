import { Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** UpdateProjectStatusDoc contains details required to update a project's status. */

export interface UpdateProjectStatusDoc {
  status: string;
  ethFundingTxnId: string;
}
/** UpdateProjectStatusDoc contains details required to update a project's status. */

export interface UpdateProjectStatusDocSDKType {
  status: string;
  eth_funding_txn_id: string;
}
/** CreateAgentDoc contains details required to create an agent. */

export interface CreateAgentDoc {
  agentDid: string;
  role: string;
}
/** CreateAgentDoc contains details required to create an agent. */

export interface CreateAgentDocSDKType {
  agent_did: string;
  role: string;
}
/** UpdateAgentDoc contains details required to update an agent. */

export interface UpdateAgentDoc {
  did: string;
  status: string;
  role: string;
}
/** UpdateAgentDoc contains details required to update an agent. */

export interface UpdateAgentDocSDKType {
  did: string;
  status: string;
  role: string;
}
/** CreateClaimDoc contains details required to create a claim on a project. */

export interface CreateClaimDoc {
  claimId: string;
  claimTemplateId: string;
}
/** CreateClaimDoc contains details required to create a claim on a project. */

export interface CreateClaimDocSDKType {
  claim_id: string;
  claim_template_id: string;
}
/** CreateEvaluationDoc contains details required to create an evaluation for a specific claim on a project. */

export interface CreateEvaluationDoc {
  claimId: string;
  status: string;
}
/** CreateEvaluationDoc contains details required to create an evaluation for a specific claim on a project. */

export interface CreateEvaluationDocSDKType {
  claim_id: string;
  status: string;
}
/** WithdrawFundsDoc contains details required to withdraw funds from a specific project. */

export interface WithdrawFundsDoc {
  projectDid: string;
  recipientDid: string;
  amount: string;
  isRefund: boolean;
}
/** WithdrawFundsDoc contains details required to withdraw funds from a specific project. */

export interface WithdrawFundsDocSDKType {
  project_did: string;
  recipient_did: string;
  amount: string;
  is_refund: boolean;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */

export interface ProjectDoc {
  txHash: string;
  projectDid: string;
  senderDid: string;
  pubKey: string;
  status: string;
  data: Uint8Array;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */

export interface ProjectDocSDKType {
  tx_hash: string;
  project_did: string;
  sender_did: string;
  pub_key: string;
  status: string;
  data: Uint8Array;
}
/** WithdrawalInfoDoc contains details required to withdraw from a specific project. */

export interface WithdrawalInfoDoc {
  projectDid: string;
  recipientDid: string;
  amount?: Coin;
}
/** WithdrawalInfoDoc contains details required to withdraw from a specific project. */

export interface WithdrawalInfoDocSDKType {
  project_did: string;
  recipient_did: string;
  amount?: CoinSDKType;
}
/** Params defines the parameters for the project module. */

export interface Params {
  ixoDid: string;
  projectMinimumInitialFunding: Coin[];
  oracleFeePercentage: string;
  nodeFeePercentage: string;
}
/** Params defines the parameters for the project module. */

export interface ParamsSDKType {
  ixo_did: string;
  project_minimum_initial_funding: CoinSDKType[];
  oracle_fee_percentage: string;
  node_fee_percentage: string;
}
/** Claim contains details required to start a claim on a project. */

export interface Claim {
  id: string;
  templateId: string;
  claimerDid: string;
  status: string;
}
/** Claim contains details required to start a claim on a project. */

export interface ClaimSDKType {
  id: string;
  template_id: string;
  claimer_did: string;
  status: string;
}
export interface GenesisAccountMap_MapEntry {
  key: string;
  value: string;
}
export interface GenesisAccountMap_MapEntrySDKType {
  key: string;
  value: string;
}
/** GenesisAccountMap is a type used at genesis that maps a specific project's account names to the accounts' addresses. */

export interface GenesisAccountMap {
  map: {
    [key: string]: string;
  };
}
/** GenesisAccountMap is a type used at genesis that maps a specific project's account names to the accounts' addresses. */

export interface GenesisAccountMapSDKType {
  map: {
    [key: string]: string;
  };
}
export interface AccountMap_MapEntry {
  key: string;
  value: string;
}
export interface AccountMap_MapEntrySDKType {
  key: string;
  value: string;
}
/** AccountMap maps a specific project's account names to the accounts' addresses. */

export interface AccountMap {
  map: {
    [key: string]: string;
  };
}
/** AccountMap maps a specific project's account names to the accounts' addresses. */

export interface AccountMapSDKType {
  map: {
    [key: string]: string;
  };
}
/** WithdrawalInfoDocs contains a list of type WithdrawalInfoDoc. */

export interface WithdrawalInfoDocs {
  docsList: WithdrawalInfoDoc[];
}
/** WithdrawalInfoDocs contains a list of type WithdrawalInfoDoc. */

export interface WithdrawalInfoDocsSDKType {
  docs_list: WithdrawalInfoDocSDKType[];
}
/** Claims contains a list of type Claim. */

export interface Claims {
  claimsList: Claim[];
}
/** Claims contains a list of type Claim. */

export interface ClaimsSDKType {
  claims_list: ClaimSDKType[];
}

function createBaseUpdateProjectStatusDoc(): UpdateProjectStatusDoc {
  return {
    status: "",
    ethFundingTxnId: ""
  };
}

export const UpdateProjectStatusDoc = {
  encode(message: UpdateProjectStatusDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    if (message.ethFundingTxnId !== "") {
      writer.uint32(18).string(message.ethFundingTxnId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectStatusDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectStatusDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        case 2:
          message.ethFundingTxnId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateProjectStatusDoc>): UpdateProjectStatusDoc {
    const message = createBaseUpdateProjectStatusDoc();
    message.status = object.status ?? "";
    message.ethFundingTxnId = object.ethFundingTxnId ?? "";
    return message;
  }

};

function createBaseCreateAgentDoc(): CreateAgentDoc {
  return {
    agentDid: "",
    role: ""
  };
}

export const CreateAgentDoc = {
  encode(message: CreateAgentDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentDid !== "") {
      writer.uint32(10).string(message.agentDid);
    }

    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAgentDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.agentDid = reader.string();
          break;

        case 2:
          message.role = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateAgentDoc>): CreateAgentDoc {
    const message = createBaseCreateAgentDoc();
    message.agentDid = object.agentDid ?? "";
    message.role = object.role ?? "";
    return message;
  }

};

function createBaseUpdateAgentDoc(): UpdateAgentDoc {
  return {
    did: "",
    status: "",
    role: ""
  };
}

export const UpdateAgentDoc = {
  encode(message: UpdateAgentDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }

    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAgentDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.status = reader.string();
          break;

        case 3:
          message.role = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateAgentDoc>): UpdateAgentDoc {
    const message = createBaseUpdateAgentDoc();
    message.did = object.did ?? "";
    message.status = object.status ?? "";
    message.role = object.role ?? "";
    return message;
  }

};

function createBaseCreateClaimDoc(): CreateClaimDoc {
  return {
    claimId: "",
    claimTemplateId: ""
  };
}

export const CreateClaimDoc = {
  encode(message: CreateClaimDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimId !== "") {
      writer.uint32(10).string(message.claimId);
    }

    if (message.claimTemplateId !== "") {
      writer.uint32(18).string(message.claimTemplateId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateClaimDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateClaimDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimId = reader.string();
          break;

        case 2:
          message.claimTemplateId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateClaimDoc>): CreateClaimDoc {
    const message = createBaseCreateClaimDoc();
    message.claimId = object.claimId ?? "";
    message.claimTemplateId = object.claimTemplateId ?? "";
    return message;
  }

};

function createBaseCreateEvaluationDoc(): CreateEvaluationDoc {
  return {
    claimId: "",
    status: ""
  };
}

export const CreateEvaluationDoc = {
  encode(message: CreateEvaluationDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimId !== "") {
      writer.uint32(10).string(message.claimId);
    }

    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEvaluationDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEvaluationDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimId = reader.string();
          break;

        case 2:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CreateEvaluationDoc>): CreateEvaluationDoc {
    const message = createBaseCreateEvaluationDoc();
    message.claimId = object.claimId ?? "";
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseWithdrawFundsDoc(): WithdrawFundsDoc {
  return {
    projectDid: "",
    recipientDid: "",
    amount: "",
    isRefund: false
  };
}

export const WithdrawFundsDoc = {
  encode(message: WithdrawFundsDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDid !== "") {
      writer.uint32(10).string(message.projectDid);
    }

    if (message.recipientDid !== "") {
      writer.uint32(18).string(message.recipientDid);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.isRefund === true) {
      writer.uint32(32).bool(message.isRefund);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFundsDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawFundsDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDid = reader.string();
          break;

        case 2:
          message.recipientDid = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.isRefund = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WithdrawFundsDoc>): WithdrawFundsDoc {
    const message = createBaseWithdrawFundsDoc();
    message.projectDid = object.projectDid ?? "";
    message.recipientDid = object.recipientDid ?? "";
    message.amount = object.amount ?? "";
    message.isRefund = object.isRefund ?? false;
    return message;
  }

};

function createBaseProjectDoc(): ProjectDoc {
  return {
    txHash: "",
    projectDid: "",
    senderDid: "",
    pubKey: "",
    status: "",
    data: new Uint8Array()
  };
}

export const ProjectDoc = {
  encode(message: ProjectDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.projectDid !== "") {
      writer.uint32(18).string(message.projectDid);
    }

    if (message.senderDid !== "") {
      writer.uint32(26).string(message.senderDid);
    }

    if (message.pubKey !== "") {
      writer.uint32(34).string(message.pubKey);
    }

    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.projectDid = reader.string();
          break;

        case 3:
          message.senderDid = reader.string();
          break;

        case 4:
          message.pubKey = reader.string();
          break;

        case 5:
          message.status = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProjectDoc>): ProjectDoc {
    const message = createBaseProjectDoc();
    message.txHash = object.txHash ?? "";
    message.projectDid = object.projectDid ?? "";
    message.senderDid = object.senderDid ?? "";
    message.pubKey = object.pubKey ?? "";
    message.status = object.status ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseWithdrawalInfoDoc(): WithdrawalInfoDoc {
  return {
    projectDid: "",
    recipientDid: "",
    amount: undefined
  };
}

export const WithdrawalInfoDoc = {
  encode(message: WithdrawalInfoDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDid !== "") {
      writer.uint32(10).string(message.projectDid);
    }

    if (message.recipientDid !== "") {
      writer.uint32(18).string(message.recipientDid);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalInfoDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDid = reader.string();
          break;

        case 2:
          message.recipientDid = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WithdrawalInfoDoc>): WithdrawalInfoDoc {
    const message = createBaseWithdrawalInfoDoc();
    message.projectDid = object.projectDid ?? "";
    message.recipientDid = object.recipientDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    ixoDid: "",
    projectMinimumInitialFunding: [],
    oracleFeePercentage: "",
    nodeFeePercentage: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ixoDid !== "") {
      writer.uint32(10).string(message.ixoDid);
    }

    for (const v of message.projectMinimumInitialFunding) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.oracleFeePercentage !== "") {
      writer.uint32(26).string(message.oracleFeePercentage);
    }

    if (message.nodeFeePercentage !== "") {
      writer.uint32(34).string(message.nodeFeePercentage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ixoDid = reader.string();
          break;

        case 2:
          message.projectMinimumInitialFunding.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.oracleFeePercentage = reader.string();
          break;

        case 4:
          message.nodeFeePercentage = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.ixoDid = object.ixoDid ?? "";
    message.projectMinimumInitialFunding = object.projectMinimumInitialFunding?.map(e => Coin.fromPartial(e)) || [];
    message.oracleFeePercentage = object.oracleFeePercentage ?? "";
    message.nodeFeePercentage = object.nodeFeePercentage ?? "";
    return message;
  }

};

function createBaseClaim(): Claim {
  return {
    id: "",
    templateId: "",
    claimerDid: "",
    status: ""
  };
}

export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.templateId !== "") {
      writer.uint32(18).string(message.templateId);
    }

    if (message.claimerDid !== "") {
      writer.uint32(26).string(message.claimerDid);
    }

    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.templateId = reader.string();
          break;

        case 3:
          message.claimerDid = reader.string();
          break;

        case 4:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = createBaseClaim();
    message.id = object.id ?? "";
    message.templateId = object.templateId ?? "";
    message.claimerDid = object.claimerDid ?? "";
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseGenesisAccountMap_MapEntry(): GenesisAccountMap_MapEntry {
  return {
    key: "",
    value: ""
  };
}

export const GenesisAccountMap_MapEntry = {
  encode(message: GenesisAccountMap_MapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap_MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountMap_MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisAccountMap_MapEntry>): GenesisAccountMap_MapEntry {
    const message = createBaseGenesisAccountMap_MapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseGenesisAccountMap(): GenesisAccountMap {
  return {
    map: {}
  };
}

export const GenesisAccountMap = {
  encode(message: GenesisAccountMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.map).forEach(([key, value]) => {
      GenesisAccountMap_MapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountMap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = GenesisAccountMap_MapEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.map[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisAccountMap>): GenesisAccountMap {
    const message = createBaseGenesisAccountMap();
    message.map = Object.entries(object.map ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseAccountMap_MapEntry(): AccountMap_MapEntry {
  return {
    key: "",
    value: ""
  };
}

export const AccountMap_MapEntry = {
  encode(message: AccountMap_MapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap_MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMap_MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountMap_MapEntry>): AccountMap_MapEntry {
    const message = createBaseAccountMap_MapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseAccountMap(): AccountMap {
  return {
    map: {}
  };
}

export const AccountMap = {
  encode(message: AccountMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.map).forEach(([key, value]) => {
      AccountMap_MapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = AccountMap_MapEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.map[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccountMap>): AccountMap {
    const message = createBaseAccountMap();
    message.map = Object.entries(object.map ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseWithdrawalInfoDocs(): WithdrawalInfoDocs {
  return {
    docsList: []
  };
}

export const WithdrawalInfoDocs = {
  encode(message: WithdrawalInfoDocs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.docsList) {
      WithdrawalInfoDoc.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDocs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalInfoDocs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.docsList.push(WithdrawalInfoDoc.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WithdrawalInfoDocs>): WithdrawalInfoDocs {
    const message = createBaseWithdrawalInfoDocs();
    message.docsList = object.docsList?.map(e => WithdrawalInfoDoc.fromPartial(e)) || [];
    return message;
  }

};

function createBaseClaims(): Claims {
  return {
    claimsList: []
  };
}

export const Claims = {
  encode(message: Claims, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimsList) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Claims {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaims();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimsList.push(Claim.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Claims>): Claims {
    const message = createBaseClaims();
    message.claimsList = object.claimsList?.map(e => Claim.fromPartial(e)) || [];
    return message;
  }

};