import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { Params } from "../../codec/external/cosmos/auth/v1beta1/auth";
import { QueryClientImpl, Query, QueryAccountRequest, QueryAccountResponse, QueryAccountsResponse, QueryAccountsRequest, QueryParamsResponse } from "../../codec/external/cosmos/auth/v1beta1/query";
import { PageRequest } from "../../codec/external/cosmos/base/query/v1beta1/pagination";

const myRegistry = new Registry(defaultStargateTypes);

//Register did Types
// myRegistry.register("./proto/did/tx.proto",MsgAddCredential);
// myRegistry.register("./proto/did/tx.proto", MsgAddDid);

async function initializerpcclient(
  rpcendpoint = "testnet-grpc.ixo.earth:9090"
): Promise<{
  tendermintClient: any;
  queryClient: QueryClient;
  rpcClient: ProtobufRpcClient;
  queryService: Query;
}> {
  const tendermintClient = await Tendermint34Client.connect(rpcendpoint);

  const queryClient = new QueryClient(tendermintClient);

  const rpcClient = createProtobufRpcClient(queryClient);

  const queryService = new QueryClientImpl(rpcClient);

  return {
    tendermintClient: tendermintClient,
    queryClient: queryClient,
    rpcClient: rpcClient,
    queryService: queryService,
  };
}

//Query Functions

export async function QueryAccounts(
    pagination?: PageRequest
): Promise<QueryAccountsResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.Accounts({ pagination: pagination });

  return queryResult;
}

export async function QueryAccount(
    address: string
): Promise<QueryAccountResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.Account({address});

  return queryResult;
}

export async function QueryParams(
    params?: Params
): Promise<QueryParamsResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.Params({params});

  return queryResult;
}

