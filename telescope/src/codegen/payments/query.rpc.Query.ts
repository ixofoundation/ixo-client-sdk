import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPaymentTemplateRequest, QueryPaymentTemplateResponse, QueryPaymentContractRequest, QueryPaymentContractResponse, QueryPaymentContractsByIdPrefixRequest, QueryPaymentContractsByIdPrefixResponse, QuerySubscriptionRequest, QuerySubscriptionResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** PaymentTemplate queries info of a specific payment template. */
  paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse>;
  /** PaymentContract queries info of a specific payment contract. */

  paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse>;
  /** PaymentContractsByIdPrefix lists all payment contracts having an id with a specific prefix. */

  paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse>;
  /** Subscription queries info of a specific Subscription. */

  subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.paymentTemplate = this.paymentTemplate.bind(this);
    this.paymentContract = this.paymentContract.bind(this);
    this.paymentContractsByIdPrefix = this.paymentContractsByIdPrefix.bind(this);
    this.subscription = this.subscription.bind(this);
  }

  paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse> {
    const data = QueryPaymentTemplateRequest.encode(request).finish();
    const promise = this.rpc.request("payments.Query", "PaymentTemplate", data);
    return promise.then(data => QueryPaymentTemplateResponse.decode(new _m0.Reader(data)));
  }

  paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse> {
    const data = QueryPaymentContractRequest.encode(request).finish();
    const promise = this.rpc.request("payments.Query", "PaymentContract", data);
    return promise.then(data => QueryPaymentContractResponse.decode(new _m0.Reader(data)));
  }

  paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse> {
    const data = QueryPaymentContractsByIdPrefixRequest.encode(request).finish();
    const promise = this.rpc.request("payments.Query", "PaymentContractsByIdPrefix", data);
    return promise.then(data => QueryPaymentContractsByIdPrefixResponse.decode(new _m0.Reader(data)));
  }

  subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse> {
    const data = QuerySubscriptionRequest.encode(request).finish();
    const promise = this.rpc.request("payments.Query", "Subscription", data);
    return promise.then(data => QuerySubscriptionResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    paymentTemplate(request: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponse> {
      return queryService.paymentTemplate(request);
    },

    paymentContract(request: QueryPaymentContractRequest): Promise<QueryPaymentContractResponse> {
      return queryService.paymentContract(request);
    },

    paymentContractsByIdPrefix(request: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponse> {
      return queryService.paymentContractsByIdPrefix(request);
    },

    subscription(request: QuerySubscriptionRequest): Promise<QuerySubscriptionResponse> {
      return queryService.subscription(request);
    }

  };
};