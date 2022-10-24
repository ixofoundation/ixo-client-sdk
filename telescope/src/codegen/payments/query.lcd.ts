import { LCDClient } from "@osmonauts/lcd";
import { QueryPaymentTemplateRequest, QueryPaymentTemplateResponseSDKType, QueryPaymentContractRequest, QueryPaymentContractResponseSDKType, QueryPaymentContractsByIdPrefixRequest, QueryPaymentContractsByIdPrefixResponseSDKType, QuerySubscriptionRequest, QuerySubscriptionResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.paymentTemplate = this.paymentTemplate.bind(this);
    this.paymentContract = this.paymentContract.bind(this);
    this.paymentContractsByIdPrefix = this.paymentContractsByIdPrefix.bind(this);
    this.subscription = this.subscription.bind(this);
  }
  /* PaymentTemplate queries info of a specific payment template. */


  async paymentTemplate(params: QueryPaymentTemplateRequest): Promise<QueryPaymentTemplateResponseSDKType> {
    const endpoint = `ixo/payments/templates/${params.paymentTemplateId}`;
    return await this.req.get<QueryPaymentTemplateResponseSDKType>(endpoint);
  }
  /* PaymentContract queries info of a specific payment contract. */


  async paymentContract(params: QueryPaymentContractRequest): Promise<QueryPaymentContractResponseSDKType> {
    const endpoint = `ixo/payments/contracts/${params.paymentContractId}`;
    return await this.req.get<QueryPaymentContractResponseSDKType>(endpoint);
  }
  /* PaymentContractsByIdPrefix lists all payment contracts having an id with a specific prefix. */


  async paymentContractsByIdPrefix(params: QueryPaymentContractsByIdPrefixRequest): Promise<QueryPaymentContractsByIdPrefixResponseSDKType> {
    const endpoint = `ixo/payments/contracts_by_id_prefix/${params.paymentContractsIdPrefix}`;
    return await this.req.get<QueryPaymentContractsByIdPrefixResponseSDKType>(endpoint);
  }
  /* Subscription queries info of a specific Subscription. */


  async subscription(params: QuerySubscriptionRequest): Promise<QuerySubscriptionResponseSDKType> {
    const endpoint = `ixo/payments/subscriptions/${params.subscriptionId}`;
    return await this.req.get<QuerySubscriptionResponseSDKType>(endpoint);
  }

}