import { ProjectDoc, ProjectDocSDKType, AccountMap, AccountMapSDKType, WithdrawalInfoDocs, WithdrawalInfoDocsSDKType, Params, ParamsSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */

export interface QueryProjectDocRequest {
  projectDid: string;
}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */

export interface QueryProjectDocRequestSDKType {
  project_did: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryProjectDocResponse {
  projectDoc?: ProjectDoc;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryProjectDocResponseSDKType {
  project_doc?: ProjectDocSDKType;
}
/** QueryProjectAccountsRequest is the request type for the Query/ProjectAccounts RPC method. */

export interface QueryProjectAccountsRequest {
  projectDid: string;
}
/** QueryProjectAccountsRequest is the request type for the Query/ProjectAccounts RPC method. */

export interface QueryProjectAccountsRequestSDKType {
  project_did: string;
}
/** QueryProjectAccountsResponse is the response type for the Query/ProjectAccounts RPC method. */

export interface QueryProjectAccountsResponse {
  accountMap?: AccountMap;
}
/** QueryProjectAccountsResponse is the response type for the Query/ProjectAccounts RPC method. */

export interface QueryProjectAccountsResponseSDKType {
  account_map?: AccountMapSDKType;
}
/** QueryProjectTxRequest is the request type for the Query/ProjectTx RPC method. */

export interface QueryProjectTxRequest {
  projectDid: string;
}
/** QueryProjectTxRequest is the request type for the Query/ProjectTx RPC method. */

export interface QueryProjectTxRequestSDKType {
  project_did: string;
}
/** QueryProjectTxResponse is the response type for the Query/ProjectTx RPC method. */

export interface QueryProjectTxResponse {
  txs?: WithdrawalInfoDocs;
}
/** QueryProjectTxResponse is the response type for the Query/ProjectTx RPC method. */

export interface QueryProjectTxResponseSDKType {
  txs?: WithdrawalInfoDocsSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseQueryProjectDocRequest(): QueryProjectDocRequest {
  return {
    projectDid: ""
  };
}

export const QueryProjectDocRequest = {
  encode(message: QueryProjectDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDid !== "") {
      writer.uint32(10).string(message.projectDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectDocRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectDocRequest>): QueryProjectDocRequest {
    const message = createBaseQueryProjectDocRequest();
    message.projectDid = object.projectDid ?? "";
    return message;
  }

};

function createBaseQueryProjectDocResponse(): QueryProjectDocResponse {
  return {
    projectDoc: undefined
  };
}

export const QueryProjectDocResponse = {
  encode(message: QueryProjectDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDoc !== undefined) {
      ProjectDoc.encode(message.projectDoc, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectDocResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDoc = ProjectDoc.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectDocResponse>): QueryProjectDocResponse {
    const message = createBaseQueryProjectDocResponse();
    message.projectDoc = object.projectDoc !== undefined && object.projectDoc !== null ? ProjectDoc.fromPartial(object.projectDoc) : undefined;
    return message;
  }

};

function createBaseQueryProjectAccountsRequest(): QueryProjectAccountsRequest {
  return {
    projectDid: ""
  };
}

export const QueryProjectAccountsRequest = {
  encode(message: QueryProjectAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDid !== "") {
      writer.uint32(10).string(message.projectDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectAccountsRequest>): QueryProjectAccountsRequest {
    const message = createBaseQueryProjectAccountsRequest();
    message.projectDid = object.projectDid ?? "";
    return message;
  }

};

function createBaseQueryProjectAccountsResponse(): QueryProjectAccountsResponse {
  return {
    accountMap: undefined
  };
}

export const QueryProjectAccountsResponse = {
  encode(message: QueryProjectAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountMap !== undefined) {
      AccountMap.encode(message.accountMap, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountMap = AccountMap.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectAccountsResponse>): QueryProjectAccountsResponse {
    const message = createBaseQueryProjectAccountsResponse();
    message.accountMap = object.accountMap !== undefined && object.accountMap !== null ? AccountMap.fromPartial(object.accountMap) : undefined;
    return message;
  }

};

function createBaseQueryProjectTxRequest(): QueryProjectTxRequest {
  return {
    projectDid: ""
  };
}

export const QueryProjectTxRequest = {
  encode(message: QueryProjectTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectDid !== "") {
      writer.uint32(10).string(message.projectDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectTxRequest>): QueryProjectTxRequest {
    const message = createBaseQueryProjectTxRequest();
    message.projectDid = object.projectDid ?? "";
    return message;
  }

};

function createBaseQueryProjectTxResponse(): QueryProjectTxResponse {
  return {
    txs: undefined
  };
}

export const QueryProjectTxResponse = {
  encode(message: QueryProjectTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txs !== undefined) {
      WithdrawalInfoDocs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs = WithdrawalInfoDocs.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectTxResponse>): QueryProjectTxResponse {
    const message = createBaseQueryProjectTxResponse();
    message.txs = object.txs !== undefined && object.txs !== null ? WithdrawalInfoDocs.fromPartial(object.txs) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};