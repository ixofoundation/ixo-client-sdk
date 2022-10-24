import { IidDocument, IidDocumentSDKType, IidMetadata, IidMetadataSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
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

  fromPartial(object: DeepPartial<QueryIidDocumentsRequest>): QueryIidDocumentsRequest {
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

  fromPartial(object: DeepPartial<QueryIidDocumentsResponse>): QueryIidDocumentsResponse {
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

  fromPartial(object: DeepPartial<QueryIidDocumentRequest>): QueryIidDocumentRequest {
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

  fromPartial(object: DeepPartial<QueryIidDocumentResponse>): QueryIidDocumentResponse {
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

  fromPartial(object: DeepPartial<QueryIidMetaDataRequest>): QueryIidMetaDataRequest {
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

  fromPartial(object: DeepPartial<QueryIidMetaDataResponse>): QueryIidMetaDataResponse {
    const message = createBaseQueryIidMetaDataResponse();
    message.didMetadata = object.didMetadata !== undefined && object.didMetadata !== null ? IidMetadata.fromPartial(object.didMetadata) : undefined;
    return message;
  }

};