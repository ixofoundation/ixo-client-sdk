import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { Grant } from "../../codec/external/cosmos/authz/v1beta1/authz";
import { Query, QueryClientImpl, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGrantsRequest, QueryGrantsResponse } from "../../codec/external/cosmos/authz/v1beta1/query";
import { Msg, MsgClientImpl, MsgExec, MsgExecResponse, MsgGrant, MsgGrantResponse, MsgRevoke, MsgRevokeResponse } from "../../codec/external/cosmos/authz/v1beta1/tx";
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
  msgqueryService: Msg;
}> {
  const tendermintClient = await Tendermint34Client.connect(rpcendpoint);

  const queryClient = new QueryClient(tendermintClient);

  const rpcClient = createProtobufRpcClient(queryClient);

  const queryService = new QueryClientImpl(rpcClient);

  const msgqueryService = new MsgClientImpl(rpcClient);

  return {
    tendermintClient: tendermintClient,
    queryClient: queryClient,
    rpcClient: rpcClient,
    queryService: queryService,
    msgqueryService: msgqueryService,
  };
}

//Query Functions
    
export async function QueryGrants(
    granter: string,
    grantee: string,
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string,
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest
): Promise<QueryGrantsResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.Grants({granter,grantee, msgTypeUrl, pagination });

  return queryResult;
}

export async function QueryGranterGrants(
    granter: string,
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest
): Promise<QueryGranterGrantsResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.GranterGrants({granter, pagination});

  return queryResult;
}

export async function QueryGranteeGrants(
    grantee: string,
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest
): Promise<QueryGranteeGrantsResponse> {
  const { queryService } = await initializerpcclient();

  const queryResult = await queryService.GranteeGrants({grantee, pagination});

  return queryResult;
}


// message functions

export async function TransactionGrant(
    granter: string,
    grantee: string,
    grant?: Grant
): Promise<MsgGrantResponse> {
  const { msgqueryService } = await initializerpcclient();

  const transactionResult = await msgqueryService.Grant({ granter, grantee, grant });

  return transactionResult;
}

export async function TransactionExec(
    grantee: string,
    /**
     * Authorization Msg requests to execute. Each msg must implement Authorization interface
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: any[]
): Promise<MsgExecResponse> {
  const { msgqueryService } = await initializerpcclient();

  const transactionResult = await msgqueryService.Exec({grantee, msgs});

  return transactionResult;
}

export async function TransactionRevoke(
    granter: string,
  grantee: string,
  msgTypeUrl: string
    
): Promise<MsgRevokeResponse> {
  const { msgqueryService } = await initializerpcclient();

  const transactionResult = await msgqueryService.Revoke({ granter, grantee, msgTypeUrl });

  return transactionResult;
}
