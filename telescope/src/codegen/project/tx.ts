import { UpdateProjectStatusDoc, UpdateProjectStatusDocSDKType, CreateAgentDoc, CreateAgentDocSDKType, UpdateAgentDoc, UpdateAgentDocSDKType, CreateClaimDoc, CreateClaimDocSDKType, CreateEvaluationDoc, CreateEvaluationDocSDKType, WithdrawFundsDoc, WithdrawFundsDocSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** MsgCreateProject defines a message for creating a project. */

export interface MsgCreateProject {
  txHash: string;
  senderDid: string;
  projectDid: string;
  pubKey: string;
  data: Uint8Array;
  projectAddress: string;
}
/** MsgCreateProject defines a message for creating a project. */

export interface MsgCreateProjectSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  pub_key: string;
  data: Uint8Array;
  project_address: string;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateProjectResponse {}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateProjectResponseSDKType {}
/** MsgUpdateProjectStatus defines a message for updating a project's current status. */

export interface MsgUpdateProjectStatus {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data?: UpdateProjectStatusDoc;
  projectAddress: string;
}
/** MsgUpdateProjectStatus defines a message for updating a project's current status. */

export interface MsgUpdateProjectStatusSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data?: UpdateProjectStatusDocSDKType;
  project_address: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateProjectStatus response type. */

export interface MsgUpdateProjectStatusResponse {}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateProjectStatus response type. */

export interface MsgUpdateProjectStatusResponseSDKType {}
/** MsgCreateAgent defines a message for creating an agent on a project. */

export interface MsgCreateAgent {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data?: CreateAgentDoc;
  projectAddress: string;
}
/** MsgCreateAgent defines a message for creating an agent on a project. */

export interface MsgCreateAgentSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data?: CreateAgentDocSDKType;
  project_address: string;
}
/** MsgCreateAgentResponse defines the Msg/CreateAgent response type. */

export interface MsgCreateAgentResponse {}
/** MsgCreateAgentResponse defines the Msg/CreateAgent response type. */

export interface MsgCreateAgentResponseSDKType {}
/** MsgUpdateAgent defines a message for updating an agent on a project. */

export interface MsgUpdateAgent {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data?: UpdateAgentDoc;
  projectAddress: string;
}
/** MsgUpdateAgent defines a message for updating an agent on a project. */

export interface MsgUpdateAgentSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data?: UpdateAgentDocSDKType;
  project_address: string;
}
/** MsgUpdateAgentResponse defines the Msg/UpdateAgent response type. */

export interface MsgUpdateAgentResponse {}
/** MsgUpdateAgentResponse defines the Msg/UpdateAgent response type. */

export interface MsgUpdateAgentResponseSDKType {}
/** MsgCreateClaim defines a message for creating a claim on a project. */

export interface MsgCreateClaim {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data?: CreateClaimDoc;
  projectAddress: string;
}
/** MsgCreateClaim defines a message for creating a claim on a project. */

export interface MsgCreateClaimSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data?: CreateClaimDocSDKType;
  project_address: string;
}
/** MsgCreateClaimResponse defines the Msg/CreateClaim response type. */

export interface MsgCreateClaimResponse {}
/** MsgCreateClaimResponse defines the Msg/CreateClaim response type. */

export interface MsgCreateClaimResponseSDKType {}
/** MsgCreateEvaluation defines a message for creating an evaluation for a specific claim on a project. */

export interface MsgCreateEvaluation {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data?: CreateEvaluationDoc;
  projectAddress: string;
}
/** MsgCreateEvaluation defines a message for creating an evaluation for a specific claim on a project. */

export interface MsgCreateEvaluationSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data?: CreateEvaluationDocSDKType;
  project_address: string;
}
/** MsgCreateEvaluationResponse defines the Msg/CreateEvaluation response type. */

export interface MsgCreateEvaluationResponse {}
/** MsgCreateEvaluationResponse defines the Msg/CreateEvaluation response type. */

export interface MsgCreateEvaluationResponseSDKType {}
/** MsgWithdrawFunds defines a message for project agents to withdraw their funds from a project. */

export interface MsgWithdrawFunds {
  senderDid: string;
  data?: WithdrawFundsDoc;
  senderAddress: string;
}
/** MsgWithdrawFunds defines a message for project agents to withdraw their funds from a project. */

export interface MsgWithdrawFundsSDKType {
  sender_did: string;
  data?: WithdrawFundsDocSDKType;
  sender_address: string;
}
/** MsgWithdrawFundsResponse defines the Msg/WithdrawFunds response type. */

export interface MsgWithdrawFundsResponse {}
/** MsgWithdrawFundsResponse defines the Msg/WithdrawFunds response type. */

export interface MsgWithdrawFundsResponseSDKType {}
/** MsgUpdateProjectDoc defines a message for updating a project's data. */

export interface MsgUpdateProjectDoc {
  txHash: string;
  senderDid: string;
  projectDid: string;
  data: Uint8Array;
  projectAddress: string;
}
/** MsgUpdateProjectDoc defines a message for updating a project's data. */

export interface MsgUpdateProjectDocSDKType {
  tx_hash: string;
  sender_did: string;
  project_did: string;
  data: Uint8Array;
  project_address: string;
}
/** MsgUpdateProjectDocResponse defines the Msg/UpdateProjectDoc response type. */

export interface MsgUpdateProjectDocResponse {}
/** MsgUpdateProjectDocResponse defines the Msg/UpdateProjectDoc response type. */

export interface MsgUpdateProjectDocResponseSDKType {}

function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    pubKey: "",
    data: new Uint8Array(),
    projectAddress: ""
  };
}

export const MsgCreateProject = {
  encode(message: MsgCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.pubKey !== "") {
      writer.uint32(34).string(message.pubKey);
    }

    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }

    if (message.projectAddress !== "") {
      writer.uint32(50).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.pubKey = reader.string();
          break;

        case 5:
          message.data = reader.bytes();
          break;

        case 6:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.pubKey = object.pubKey ?? "";
    message.data = object.data ?? new Uint8Array();
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {};
}

export const MsgCreateProjectResponse = {
  encode(_: MsgCreateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    return message;
  }

};

function createBaseMsgUpdateProjectStatus(): MsgUpdateProjectStatus {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: undefined,
    projectAddress: ""
  };
}

export const MsgUpdateProjectStatus = {
  encode(message: MsgUpdateProjectStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data !== undefined) {
      UpdateProjectStatusDoc.encode(message.data, writer.uint32(34).fork()).ldelim();
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = UpdateProjectStatusDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectStatus>): MsgUpdateProjectStatus {
    const message = createBaseMsgUpdateProjectStatus();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? UpdateProjectStatusDoc.fromPartial(object.data) : undefined;
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateProjectStatusResponse(): MsgUpdateProjectStatusResponse {
  return {};
}

export const MsgUpdateProjectStatusResponse = {
  encode(_: MsgUpdateProjectStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectStatusResponse>): MsgUpdateProjectStatusResponse {
    const message = createBaseMsgUpdateProjectStatusResponse();
    return message;
  }

};

function createBaseMsgCreateAgent(): MsgCreateAgent {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: undefined,
    projectAddress: ""
  };
}

export const MsgCreateAgent = {
  encode(message: MsgCreateAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data !== undefined) {
      CreateAgentDoc.encode(message.data, writer.uint32(34).fork()).ldelim();
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAgent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = CreateAgentDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateAgent>): MsgCreateAgent {
    const message = createBaseMsgCreateAgent();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? CreateAgentDoc.fromPartial(object.data) : undefined;
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateAgentResponse(): MsgCreateAgentResponse {
  return {};
}

export const MsgCreateAgentResponse = {
  encode(_: MsgCreateAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAgentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateAgentResponse>): MsgCreateAgentResponse {
    const message = createBaseMsgCreateAgentResponse();
    return message;
  }

};

function createBaseMsgUpdateAgent(): MsgUpdateAgent {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: undefined,
    projectAddress: ""
  };
}

export const MsgUpdateAgent = {
  encode(message: MsgUpdateAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data !== undefined) {
      UpdateAgentDoc.encode(message.data, writer.uint32(34).fork()).ldelim();
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = UpdateAgentDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateAgent>): MsgUpdateAgent {
    const message = createBaseMsgUpdateAgent();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? UpdateAgentDoc.fromPartial(object.data) : undefined;
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateAgentResponse(): MsgUpdateAgentResponse {
  return {};
}

export const MsgUpdateAgentResponse = {
  encode(_: MsgUpdateAgentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateAgentResponse>): MsgUpdateAgentResponse {
    const message = createBaseMsgUpdateAgentResponse();
    return message;
  }

};

function createBaseMsgCreateClaim(): MsgCreateClaim {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: undefined,
    projectAddress: ""
  };
}

export const MsgCreateClaim = {
  encode(message: MsgCreateClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data !== undefined) {
      CreateClaimDoc.encode(message.data, writer.uint32(34).fork()).ldelim();
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = CreateClaimDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateClaim>): MsgCreateClaim {
    const message = createBaseMsgCreateClaim();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? CreateClaimDoc.fromPartial(object.data) : undefined;
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateClaimResponse(): MsgCreateClaimResponse {
  return {};
}

export const MsgCreateClaimResponse = {
  encode(_: MsgCreateClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateClaimResponse>): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    return message;
  }

};

function createBaseMsgCreateEvaluation(): MsgCreateEvaluation {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: undefined,
    projectAddress: ""
  };
}

export const MsgCreateEvaluation = {
  encode(message: MsgCreateEvaluation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data !== undefined) {
      CreateEvaluationDoc.encode(message.data, writer.uint32(34).fork()).ldelim();
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEvaluation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = CreateEvaluationDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateEvaluation>): MsgCreateEvaluation {
    const message = createBaseMsgCreateEvaluation();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? CreateEvaluationDoc.fromPartial(object.data) : undefined;
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateEvaluationResponse(): MsgCreateEvaluationResponse {
  return {};
}

export const MsgCreateEvaluationResponse = {
  encode(_: MsgCreateEvaluationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEvaluationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateEvaluationResponse>): MsgCreateEvaluationResponse {
    const message = createBaseMsgCreateEvaluationResponse();
    return message;
  }

};

function createBaseMsgWithdrawFunds(): MsgWithdrawFunds {
  return {
    senderDid: "",
    data: undefined,
    senderAddress: ""
  };
}

export const MsgWithdrawFunds = {
  encode(message: MsgWithdrawFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.data !== undefined) {
      WithdrawFundsDoc.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    if (message.senderAddress !== "") {
      writer.uint32(42).string(message.senderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFunds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFunds();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.data = WithdrawFundsDoc.decode(reader, reader.uint32());
          break;

        case 5:
          message.senderAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawFunds>): MsgWithdrawFunds {
    const message = createBaseMsgWithdrawFunds();
    message.senderDid = object.senderDid ?? "";
    message.data = object.data !== undefined && object.data !== null ? WithdrawFundsDoc.fromPartial(object.data) : undefined;
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawFundsResponse(): MsgWithdrawFundsResponse {
  return {};
}

export const MsgWithdrawFundsResponse = {
  encode(_: MsgWithdrawFundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFundsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgWithdrawFundsResponse>): MsgWithdrawFundsResponse {
    const message = createBaseMsgWithdrawFundsResponse();
    return message;
  }

};

function createBaseMsgUpdateProjectDoc(): MsgUpdateProjectDoc {
  return {
    txHash: "",
    senderDid: "",
    projectDid: "",
    data: new Uint8Array(),
    projectAddress: ""
  };
}

export const MsgUpdateProjectDoc = {
  encode(message: MsgUpdateProjectDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.senderDid !== "") {
      writer.uint32(18).string(message.senderDid);
    }

    if (message.projectDid !== "") {
      writer.uint32(26).string(message.projectDid);
    }

    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }

    if (message.projectAddress !== "") {
      writer.uint32(42).string(message.projectAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.senderDid = reader.string();
          break;

        case 3:
          message.projectDid = reader.string();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        case 5:
          message.projectAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectDoc>): MsgUpdateProjectDoc {
    const message = createBaseMsgUpdateProjectDoc();
    message.txHash = object.txHash ?? "";
    message.senderDid = object.senderDid ?? "";
    message.projectDid = object.projectDid ?? "";
    message.data = object.data ?? new Uint8Array();
    message.projectAddress = object.projectAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateProjectDocResponse(): MsgUpdateProjectDocResponse {
  return {};
}

export const MsgUpdateProjectDocResponse = {
  encode(_: MsgUpdateProjectDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectDocResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectDocResponse>): MsgUpdateProjectDocResponse {
    const message = createBaseMsgUpdateProjectDocResponse();
    return message;
  }

};