import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProjectDocRequest, QueryProjectDocResponse, QueryProjectAccountsRequest, QueryProjectAccountsResponse, QueryProjectTxRequest, QueryProjectTxResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** ProjectDoc queries info of a specific project. */
  projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse>;
  /** ProjectAccounts lists a specific project's accounts. */

  projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse>;
  /** ProjectTx lists a specific project's transactions. */

  projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse>;
  /** Params queries the paramaters of x/project module. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.projectDoc = this.projectDoc.bind(this);
    this.projectAccounts = this.projectAccounts.bind(this);
    this.projectTx = this.projectTx.bind(this);
    this.params = this.params.bind(this);
  }

  projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse> {
    const data = QueryProjectDocRequest.encode(request).finish();
    const promise = this.rpc.request("project.Query", "ProjectDoc", data);
    return promise.then(data => QueryProjectDocResponse.decode(new _m0.Reader(data)));
  }

  projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse> {
    const data = QueryProjectAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("project.Query", "ProjectAccounts", data);
    return promise.then(data => QueryProjectAccountsResponse.decode(new _m0.Reader(data)));
  }

  projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse> {
    const data = QueryProjectTxRequest.encode(request).finish();
    const promise = this.rpc.request("project.Query", "ProjectTx", data);
    return promise.then(data => QueryProjectTxResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("project.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    projectDoc(request: QueryProjectDocRequest): Promise<QueryProjectDocResponse> {
      return queryService.projectDoc(request);
    },

    projectAccounts(request: QueryProjectAccountsRequest): Promise<QueryProjectAccountsResponse> {
      return queryService.projectAccounts(request);
    },

    projectTx(request: QueryProjectTxRequest): Promise<QueryProjectTxResponse> {
      return queryService.projectTx(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};