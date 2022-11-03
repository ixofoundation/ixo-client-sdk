import { IidDocument, IidDocumentSDKType, IidMetadata, IidMetadataSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */

export interface QueryIidDocumentsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */

export interface QueryIidDocumentsRequestSDKType {
  /** status enables to query for validators matching a given status. */
  status: string;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */

export interface QueryIidDocumentsResponse {
  /** validators contains all the queried validators. */
  iidDocuments: IidDocument[];
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */

export interface QueryIidDocumentsResponseSDKType {
  /** validators contains all the queried validators. */
  iidDocuments: IidDocumentSDKType[];
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */

export interface QueryIidDocumentRequest {
  /** status enables to query for validators matching a given status. */
  id: string;
}
/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */

export interface QueryIidDocumentRequestSDKType {
  /** status enables to query for validators matching a given status. */
  id: string;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */

export interface QueryIidDocumentResponse {
  /** validators contains all the queried validators. */
  iidDocument?: IidDocument;
}
/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */

export interface QueryIidDocumentResponseSDKType {
  /** validators contains all the queried validators. */
  iidDocument?: IidDocumentSDKType;
}
export interface QueryIidMetaDataRequest {
  /** status enables to query for validators matching a given status. */
  id: string;
}
export interface QueryIidMetaDataRequestSDKType {
  /** status enables to query for validators matching a given status. */
  id: string;
}
export interface QueryIidMetaDataResponse {
  /**
   * validators contains all the queried validators.
   * IidDocument iidDocument = 1  [(gogoproto.nullable) = false];
   */
  didMetadata?: IidMetadata;
}
export interface QueryIidMetaDataResponseSDKType {
  /**
   * validators contains all the queried validators.
   * IidDocument iidDocument = 1  [(gogoproto.nullable) = false];
   */
  didMetadata?: IidMetadataSDKType;
}

function createBaseQueryIidDocumentsRequest(): QueryIidDocumentsRequest {
  return {
    status: ""
  };
}

export const QueryIidDocumentsRequest = {
  encode(message: QueryIidDocumentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidDocumentsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },

  toJSON(message: QueryIidDocumentsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentsRequest>): QueryIidDocumentsRequest {
    const message = createBaseQueryIidDocumentsRequest();
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseQueryIidDocumentsResponse(): QueryIidDocumentsResponse {
  return {
    iidDocuments: []
  };
}

export const QueryIidDocumentsResponse = {
  encode(message: QueryIidDocumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iidDocuments) {
      IidDocument.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iidDocuments.push(IidDocument.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidDocumentsResponse {
    return {
      iidDocuments: Array.isArray(object?.iidDocuments) ? object.iidDocuments.map((e: any) => IidDocument.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryIidDocumentsResponse): unknown {
    const obj: any = {};

    if (message.iidDocuments) {
      obj.iidDocuments = message.iidDocuments.map(e => e ? IidDocument.toJSON(e) : undefined);
    } else {
      obj.iidDocuments = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentsResponse>): QueryIidDocumentsResponse {
    const message = createBaseQueryIidDocumentsResponse();
    message.iidDocuments = object.iidDocuments?.map(e => IidDocument.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryIidDocumentRequest(): QueryIidDocumentRequest {
  return {
    id: ""
  };
}

export const QueryIidDocumentRequest = {
  encode(message: QueryIidDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidDocumentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryIidDocumentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentRequest>): QueryIidDocumentRequest {
    const message = createBaseQueryIidDocumentRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryIidDocumentResponse(): QueryIidDocumentResponse {
  return {
    iidDocument: undefined
  };
}

export const QueryIidDocumentResponse = {
  encode(message: QueryIidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iidDocument !== undefined) {
      IidDocument.encode(message.iidDocument, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidDocumentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iidDocument = IidDocument.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidDocumentResponse {
    return {
      iidDocument: isSet(object.iidDocument) ? IidDocument.fromJSON(object.iidDocument) : undefined
    };
  },

  toJSON(message: QueryIidDocumentResponse): unknown {
    const obj: any = {};
    message.iidDocument !== undefined && (obj.iidDocument = message.iidDocument ? IidDocument.toJSON(message.iidDocument) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryIidDocumentResponse>): QueryIidDocumentResponse {
    const message = createBaseQueryIidDocumentResponse();
    message.iidDocument = object.iidDocument !== undefined && object.iidDocument !== null ? IidDocument.fromPartial(object.iidDocument) : undefined;
    return message;
  }

};

function createBaseQueryIidMetaDataRequest(): QueryIidMetaDataRequest {
  return {
    id: ""
  };
}

export const QueryIidMetaDataRequest = {
  encode(message: QueryIidMetaDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidMetaDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidMetaDataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidMetaDataRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryIidMetaDataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryIidMetaDataRequest>): QueryIidMetaDataRequest {
    const message = createBaseQueryIidMetaDataRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryIidMetaDataResponse(): QueryIidMetaDataResponse {
  return {
    didMetadata: undefined
  };
}

export const QueryIidMetaDataResponse = {
  encode(message: QueryIidMetaDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didMetadata !== undefined) {
      IidMetadata.encode(message.didMetadata, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIidMetaDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIidMetaDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.didMetadata = IidMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIidMetaDataResponse {
    return {
      didMetadata: isSet(object.didMetadata) ? IidMetadata.fromJSON(object.didMetadata) : undefined
    };
  },

  toJSON(message: QueryIidMetaDataResponse): unknown {
    const obj: any = {};
    message.didMetadata !== undefined && (obj.didMetadata = message.didMetadata ? IidMetadata.toJSON(message.didMetadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryIidMetaDataResponse>): QueryIidMetaDataResponse {
    const message = createBaseQueryIidMetaDataResponse();
    message.didMetadata = object.didMetadata !== undefined && object.didMetadata !== null ? IidMetadata.fromPartial(object.didMetadata) : undefined;
    return message;
  }

};