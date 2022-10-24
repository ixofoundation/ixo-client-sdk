import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface QueryEntityListRequest {
  entityType: string;
  entityStatus: string;
}
export interface QueryEntityListRequestSDKType {
  entity_type: string;
  entity_status: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityListResponse {}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityListResponseSDKType {}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */

export interface QueryEntityDocRequest {
  entityDid: string;
}
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */

export interface QueryEntityDocRequestSDKType {
  entity_did: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityDocResponse {}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityDocResponseSDKType {}
export interface QueryEntityConfigRequest {}
export interface QueryEntityConfigRequestSDKType {}
export interface QueryEntityConfigResponse_MapEntry {
  key: string;
  value: string;
}
export interface QueryEntityConfigResponse_MapEntrySDKType {
  key: string;
  value: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityConfigResponse {
  map: {
    [key: string]: string;
  };
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */

export interface QueryEntityConfigResponseSDKType {
  map: {
    [key: string]: string;
  };
}

function createBaseQueryEntityListRequest(): QueryEntityListRequest {
  return {
    entityType: "",
    entityStatus: ""
  };
}

export const QueryEntityListRequest = {
  encode(message: QueryEntityListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityType !== "") {
      writer.uint32(10).string(message.entityType);
    }

    if (message.entityStatus !== "") {
      writer.uint32(18).string(message.entityStatus);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityType = reader.string();
          break;

        case 2:
          message.entityStatus = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEntityListRequest>): QueryEntityListRequest {
    const message = createBaseQueryEntityListRequest();
    message.entityType = object.entityType ?? "";
    message.entityStatus = object.entityStatus ?? "";
    return message;
  }

};

function createBaseQueryEntityListResponse(): QueryEntityListResponse {
  return {};
}

export const QueryEntityListResponse = {
  encode(_: QueryEntityListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityListResponse();

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

  fromPartial(_: DeepPartial<QueryEntityListResponse>): QueryEntityListResponse {
    const message = createBaseQueryEntityListResponse();
    return message;
  }

};

function createBaseQueryEntityDocRequest(): QueryEntityDocRequest {
  return {
    entityDid: ""
  };
}

export const QueryEntityDocRequest = {
  encode(message: QueryEntityDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityDid !== "") {
      writer.uint32(10).string(message.entityDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityDocRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEntityDocRequest>): QueryEntityDocRequest {
    const message = createBaseQueryEntityDocRequest();
    message.entityDid = object.entityDid ?? "";
    return message;
  }

};

function createBaseQueryEntityDocResponse(): QueryEntityDocResponse {
  return {};
}

export const QueryEntityDocResponse = {
  encode(_: QueryEntityDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityDocResponse();

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

  fromPartial(_: DeepPartial<QueryEntityDocResponse>): QueryEntityDocResponse {
    const message = createBaseQueryEntityDocResponse();
    return message;
  }

};

function createBaseQueryEntityConfigRequest(): QueryEntityConfigRequest {
  return {};
}

export const QueryEntityConfigRequest = {
  encode(_: QueryEntityConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityConfigRequest();

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

  fromPartial(_: DeepPartial<QueryEntityConfigRequest>): QueryEntityConfigRequest {
    const message = createBaseQueryEntityConfigRequest();
    return message;
  }

};

function createBaseQueryEntityConfigResponse_MapEntry(): QueryEntityConfigResponse_MapEntry {
  return {
    key: "",
    value: ""
  };
}

export const QueryEntityConfigResponse_MapEntry = {
  encode(message: QueryEntityConfigResponse_MapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigResponse_MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityConfigResponse_MapEntry();

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

  fromPartial(object: DeepPartial<QueryEntityConfigResponse_MapEntry>): QueryEntityConfigResponse_MapEntry {
    const message = createBaseQueryEntityConfigResponse_MapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseQueryEntityConfigResponse(): QueryEntityConfigResponse {
  return {
    map: {}
  };
}

export const QueryEntityConfigResponse = {
  encode(message: QueryEntityConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.map).forEach(([key, value]) => {
      QueryEntityConfigResponse_MapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntityConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntityConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryEntityConfigResponse_MapEntry.decode(reader, reader.uint32());

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

  fromPartial(object: DeepPartial<QueryEntityConfigResponse>): QueryEntityConfigResponse {
    const message = createBaseQueryEntityConfigResponse();
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