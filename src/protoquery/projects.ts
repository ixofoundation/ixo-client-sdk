
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl, QueryProjectAccountsResponse, QueryProjectDocResponse, QueryProjectTxResponse } from "../codec/project/query";
import { MsgCreateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgCreateProject, MsgUpdateAgent, MsgUpdateProjectDoc, MsgUpdateProjectStatus, MsgWithdrawFunds } from "../codec/project/tx";

const myRegistry = new Registry(defaultStargateTypes);
//Register Project Types
myRegistry.register("./proto/project/tx.proto", MsgCreateAgent);
myRegistry.register("./proto/project/tx.proto", MsgCreateProject);
myRegistry.register("./proto/project/tx.proto", MsgUpdateProjectStatus);
myRegistry.register("./proto/project/tx.proto", MsgCreateEvaluation);
myRegistry.register("./proto/project/tx.proto", MsgUpdateAgent);
myRegistry.register("./proto/project/tx.proto", MsgCreateClaim);
myRegistry.register("./proto/project/tx.proto", MsgWithdrawFunds);
myRegistry.register("./proto/project/tx.proto", MsgUpdateProjectDoc);




export async function initializerpcclient(rpcendpoint = "impacthub-grpc.ixo.earth:443"): Promise<{ tendermintClient: any, queryClient: QueryClient, rpcClient: ProtobufRpcClient, queryService: any }> {

    const tendermintClient = await Tendermint34Client.connect(rpcendpoint);


    const queryClient = new QueryClient(tendermintClient);


    const rpcClient = createProtobufRpcClient(queryClient);

    const queryService = new QueryClientImpl(rpcClient);

    return { tendermintClient: tendermintClient, queryClient: queryClient, rpcClient: rpcClient, queryService: queryService }
}

//Query Functions

export async function QueryProjectDoc(projectDid: string): Promise<QueryProjectDocResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.ProjectDoc({
        projectDid: projectDid,
    });

    return queryResult
}
export async function QueryProjectAccounts(projectDid: string): Promise<QueryProjectAccountsResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.ProjectAccounts({
        projectDid: projectDid,
    });

    return queryResult
}
export async function QueryProjectTxs(projectDid: string): Promise<QueryProjectTxResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.ProjectTx({
        projectDid: projectDid,
    });

    return queryResult
}


