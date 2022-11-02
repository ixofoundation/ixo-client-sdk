import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIidDocumentsRequest, QueryIidDocumentsResponse, QueryIidDocumentRequest, QueryIidDocumentResponse, QueryIidMetaDataRequest, QueryIidMetaDataResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** IidDocuments queries all iid documents that match the given status. */
  iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse>;
  /** IidDocument queries a iid documents with an id. */

  iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse>;
  /** MetaData queries a iid documents with an id. */

  metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.iidDocuments = this.iidDocuments.bind(this);
    this.iidDocument = this.iidDocument.bind(this);
    this.metaData = this.metaData.bind(this);
  }

  iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse> {
    const data = QueryIidDocumentsRequest.encode(request).finish();
    const promise = this.rpc.request("iid.Query", "IidDocuments", data);
    return promise.then(data => QueryIidDocumentsResponse.decode(new _m0.Reader(data)));
  }

  iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse> {
    const data = QueryIidDocumentRequest.encode(request).finish();
    const promise = this.rpc.request("iid.Query", "IidDocument", data);
    return promise.then(data => QueryIidDocumentResponse.decode(new _m0.Reader(data)));
  }

  metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse> {
    const data = QueryIidMetaDataRequest.encode(request).finish();
    const promise = this.rpc.request("iid.Query", "MetaData", data);
    return promise.then(data => QueryIidMetaDataResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    iidDocuments(request: QueryIidDocumentsRequest): Promise<QueryIidDocumentsResponse> {
      return queryService.iidDocuments(request);
    },

    iidDocument(request: QueryIidDocumentRequest): Promise<QueryIidDocumentResponse> {
      return queryService.iidDocument(request);
    },

    metaData(request: QueryIidMetaDataRequest): Promise<QueryIidMetaDataResponse> {
      return queryService.metaData(request);
    }

  };
};