import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, createProtobufRpcClient, QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {  QueryClientImpl, QueryPaymentContractResponse, QueryPaymentContractsByIdPrefixResponse, QueryPaymentTemplateResponse, QuerySubscriptionResponse } from "../codec/payments/query";
import { } from "../codec/payments/tx";

const myRegistry = new Registry(defaultStargateTypes);


//Register payment Types
// myRegistry.register("./proto/payments/tx.proto",MsgAddCredential);
// myRegistry.register("./proto/payments/tx.proto", MsgAddDid);



async function initializerpcclient(rpcendpoint = "testnet-grpc.ixo.earth:9090"): Promise<{ tendermintClient: any, queryClient: QueryClient, rpcClient: ProtobufRpcClient, queryService: any }> {

    const tendermintClient = await Tendermint34Client.connect(rpcendpoint);


    const queryClient = new QueryClient(tendermintClient);


    const rpcClient = createProtobufRpcClient(queryClient);

    const queryService = new QueryClientImpl(rpcClient);

    return { tendermintClient: tendermintClient, queryClient: queryClient, rpcClient: rpcClient, queryService: queryService }
}



//Query Functions


export async function QueryPaymentTemplate (paymentTemplateId: string): Promise<QueryPaymentTemplateResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.PaymentTemplate({
        paymentTemplateId: paymentTemplateId,
    });

    return queryResult
}

export async function QueryPaymentContract (paymentContractId: string): Promise<QueryPaymentContractResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.PaymentContract({
        paymentContractId: paymentContractId,
    });

    return queryResult
}

export async function QueryPaymentContractsByIdPrefix (paymentContractsIdPrefix: string): Promise<QueryPaymentContractsByIdPrefixResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.PaymentContractsByIdPrefix({
        paymentContractsIdPrefix: paymentContractsIdPrefix,
    });

    return queryResult
}

export async function QueryPaymentSubscription (subscriptionId: string): Promise<QuerySubscriptionResponse> {

    const { queryService } = await initializerpcclient();

    const queryResult = await queryService.Subscription({
        subscriptionId: subscriptionId,
    });

    return queryResult
}
