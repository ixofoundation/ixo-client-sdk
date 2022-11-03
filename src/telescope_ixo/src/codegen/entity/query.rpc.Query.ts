import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEntityListRequest, QueryEntityListResponse, QueryEntityDocRequest, QueryEntityDocResponse, QueryEntityConfigRequest, QueryEntityConfigResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse>;
  entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse>;
  entityConfig(request?: QueryEntityConfigRequest): Promise<QueryEntityConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.entityList = this.entityList.bind(this);
    this.entityDoc = this.entityDoc.bind(this);
    this.entityConfig = this.entityConfig.bind(this);
  }

  entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse> {
    const data = QueryEntityListRequest.encode(request).finish();
    const promise = this.rpc.request("entity.Query", "EntityList", data);
    return promise.then(data => QueryEntityListResponse.decode(new _m0.Reader(data)));
  }

  entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse> {
    const data = QueryEntityDocRequest.encode(request).finish();
    const promise = this.rpc.request("entity.Query", "EntityDoc", data);
    return promise.then(data => QueryEntityDocResponse.decode(new _m0.Reader(data)));
  }

  entityConfig(request: QueryEntityConfigRequest = {}): Promise<QueryEntityConfigResponse> {
    const data = QueryEntityConfigRequest.encode(request).finish();
    const promise = this.rpc.request("entity.Query", "EntityConfig", data);
    return promise.then(data => QueryEntityConfigResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    entityList(request: QueryEntityListRequest): Promise<QueryEntityListResponse> {
      return queryService.entityList(request);
    },

    entityDoc(request: QueryEntityDocRequest): Promise<QueryEntityDocResponse> {
      return queryService.entityDoc(request);
    },

    entityConfig(request?: QueryEntityConfigRequest): Promise<QueryEntityConfigResponse> {
      return queryService.entityConfig(request);
    }

  };
};