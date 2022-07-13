import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryAlphaMaximumsResponse, QueryAvailableReserveResponse, QueryBondResponse, QueryBondsResponse, QueryBuyPriceResponse, QueryClientImpl, QueryCurrentPriceResponse, QueryCurrentReserveResponse } from "../codec/bonds/query";
import { MsgCreateBond, MsgEditBond, MsgSetNextAlpha, MsgUpdateBondState, MsgUpdateBondStateResponse, MsgBuy, MsgSell, MsgSwap, MsgMakeOutcomePayment, MsgWithdrawShare, MsgWithdrawReserve } from "../codec/bonds/tx";


//Import QueryTypes Bonds

const myRegistry = new Registry(defaultStargateTypes);
//Register Bonds Types
myRegistry.register("./proto/bonds/tx.proto", MsgCreateBond);
myRegistry.register("./proto/bonds/tx.proto", MsgEditBond);
myRegistry.register("./proto/bonds/tx.proto", MsgSetNextAlpha);
myRegistry.register("./proto/bonds/tx.proto", MsgUpdateBondState);
myRegistry.register("./proto/bonds/tx.proto", MsgUpdateBondStateResponse);
myRegistry.register("./proto/bonds/tx.proto", MsgBuy);
myRegistry.register("./proto/bonds/tx.proto", MsgSell);
myRegistry.register("./proto/bonds/tx.proto", MsgSwap);
myRegistry.register("./proto/bonds/tx.proto", MsgMakeOutcomePayment);
myRegistry.register("./proto/bonds/tx.proto", MsgWithdrawShare);
myRegistry.register("./proto/bonds/tx.proto", MsgWithdrawReserve);


async function initializerpcclient(rpcendpoint = "testnet-grpc.ixo.earth:9090"): Promise<{ tendermintClient: any, queryClient: QueryClient, rpcClient: ProtobufRpcClient, queryService: any }> {

    const tendermintClient = await Tendermint34Client.connect(rpcendpoint);


    const queryClient = new QueryClient(tendermintClient);


    const rpcClient = createProtobufRpcClient(queryClient);

    const queryService = new QueryClientImpl(rpcClient);

    return { tendermintClient: tendermintClient, queryClient: queryClient, rpcClient: rpcClient, queryService: queryService }
}



//Query Functions

export async function QueryBondAvailableReserve(bonddid: string): Promise<QueryAvailableReserveResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AvailableReserve({
        bondDid: bonddid,
    });

    return queryResult
}

export async function QueryBondAlphaMaximums(bonddid: string): Promise<QueryAlphaMaximumsResponse> {


    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.AlphaMaximums({
        bondDid: bonddid,
    });

    return queryResult
}


export async function QueryBond(bonddid: string): Promise<QueryBondResponse> {


    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.Bond({
        bondDid: bonddid,
    });

    return queryResult
}

export async function QueryBonds(bonddid: string): Promise<QueryBondsResponse> {


    const { queryService } = await initializerpcclient();

    //May need array Not sure
    const queryResult = await queryService.Bonds({});

    return queryResult
}


export async function QueryBondCurrentPrice(bonddid: string): Promise<QueryCurrentPriceResponse> {


    const { queryService } = await initializerpcclient();


    const queryResult = await queryService.CurrentPrice({ bondDid: bonddid });

    return queryResult
}

export async function QueryBondCurrentReserve(bonddid: string): Promise<QueryCurrentReserveResponse> {


    const { queryService } = await initializerpcclient();


    const queryResult = await queryService.CurrentReserve({ bondDid: bonddid });

    return queryResult
}

export async function QueryBondCurrentBuyprice(bonddid: string, bondamount: string): Promise<QueryBuyPriceResponse> {


    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.BuyPrice({ bondDid: bonddid, bondAmount: bondamount });

    return queryResult
}