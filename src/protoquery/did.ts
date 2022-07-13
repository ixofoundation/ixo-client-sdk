import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryAddressFromBase58EncodedPubkeyResponse, QueryAddressFromDidResponse, QueryAllDidsResponse, QueryClientImpl, QueryDidDocResponse } from "../codec/did/query";
import { MsgAddCredential,MsgAddDid,} from "../codec/did/tx";

const myRegistry = new Registry(defaultStargateTypes);

//Register did Types
myRegistry.register("./proto/did/tx.proto",MsgAddCredential);
myRegistry.register("./proto/did/tx.proto", MsgAddDid);




 async function initializerpcclient(rpcendpoint = "testnet-grpc.ixo.earth:9090"): Promise<{ tendermintClient: any, queryClient: QueryClient, rpcClient: ProtobufRpcClient, queryService: any }> {

    const tendermintClient = await Tendermint34Client.connect(rpcendpoint);


    const queryClient = new QueryClient(tendermintClient);


    const rpcClient = createProtobufRpcClient(queryClient);

    const queryService = new QueryClientImpl(rpcClient);

    return { tendermintClient: tendermintClient, queryClient: queryClient, rpcClient: rpcClient, queryService: queryService }
}



//Query Functions

export async function QuerydidDoc (diddoc: string): Promise<QueryDidDocResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.DidDoc({
        did: diddoc,
    });

    return queryResult
}


export async function QueryAlldids (diddoc: string): Promise<QueryAllDidsResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AllDids({});

    return queryResult
}

export async function QueryAlldidDoc (diddoc: string): Promise<QueryAllDidsResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AllDidDocs({});

    return queryResult
}

export async function QueryAddressFromDid (diddoc: string): Promise<QueryAddressFromDidResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AddressFromDid({did: diddoc,});

    return queryResult
}

export async function QueryAddressFromBase58EncodedPubkey (base58key: string): Promise<QueryAddressFromBase58EncodedPubkeyResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AddressFromBase58EncodedPubkey({pubKey: base58key,});

    return queryResult
}