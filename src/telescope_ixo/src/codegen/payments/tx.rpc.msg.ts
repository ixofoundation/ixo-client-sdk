import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetPaymentContractAuthorisation, MsgSetPaymentContractAuthorisationResponse, MsgCreatePaymentTemplate, MsgCreatePaymentTemplateResponse, MsgCreatePaymentContract, MsgCreatePaymentContractResponse, MsgCreateSubscription, MsgCreateSubscriptionResponse, MsgGrantDiscount, MsgGrantDiscountResponse, MsgRevokeDiscount, MsgRevokeDiscountResponse, MsgEffectPayment, MsgEffectPaymentResponse } from "./tx";
/** Msg defines the payments Msg service. */

export interface Msg {
  /** SetPaymentContractAuthorisation defines a method for authorising or deauthorising a payment contract. */
  setPaymentContractAuthorisation(request: MsgSetPaymentContractAuthorisation): Promise<MsgSetPaymentContractAuthorisationResponse>;
  /** CreatePaymentTemplate defines a method for creating a payment template. */

  createPaymentTemplate(request: MsgCreatePaymentTemplate): Promise<MsgCreatePaymentTemplateResponse>;
  /** CreatePaymentContract defines a method for creating a payment contract. */

  createPaymentContract(request: MsgCreatePaymentContract): Promise<MsgCreatePaymentContractResponse>;
  /** CreateSubscription defines a method for creating a subscription. */

  createSubscription(request: MsgCreateSubscription): Promise<MsgCreateSubscriptionResponse>;
  /** GrantDiscount defines a method for granting a discount to a payer on a specific payment contract. */

  grantDiscount(request: MsgGrantDiscount): Promise<MsgGrantDiscountResponse>;
  /** RevokeDiscount defines a method for revoking a discount previously granted to a payer. */

  revokeDiscount(request: MsgRevokeDiscount): Promise<MsgRevokeDiscountResponse>;
  /** EffectPayment defines a method for putting a specific payment contract into effect. */

  effectPayment(request: MsgEffectPayment): Promise<MsgEffectPaymentResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setPaymentContractAuthorisation = this.setPaymentContractAuthorisation.bind(this);
    this.createPaymentTemplate = this.createPaymentTemplate.bind(this);
    this.createPaymentContract = this.createPaymentContract.bind(this);
    this.createSubscription = this.createSubscription.bind(this);
    this.grantDiscount = this.grantDiscount.bind(this);
    this.revokeDiscount = this.revokeDiscount.bind(this);
    this.effectPayment = this.effectPayment.bind(this);
  }

  setPaymentContractAuthorisation(request: MsgSetPaymentContractAuthorisation): Promise<MsgSetPaymentContractAuthorisationResponse> {
    const data = MsgSetPaymentContractAuthorisation.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "SetPaymentContractAuthorisation", data);
    return promise.then(data => MsgSetPaymentContractAuthorisationResponse.decode(new _m0.Reader(data)));
  }

  createPaymentTemplate(request: MsgCreatePaymentTemplate): Promise<MsgCreatePaymentTemplateResponse> {
    const data = MsgCreatePaymentTemplate.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "CreatePaymentTemplate", data);
    return promise.then(data => MsgCreatePaymentTemplateResponse.decode(new _m0.Reader(data)));
  }

  createPaymentContract(request: MsgCreatePaymentContract): Promise<MsgCreatePaymentContractResponse> {
    const data = MsgCreatePaymentContract.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "CreatePaymentContract", data);
    return promise.then(data => MsgCreatePaymentContractResponse.decode(new _m0.Reader(data)));
  }

  createSubscription(request: MsgCreateSubscription): Promise<MsgCreateSubscriptionResponse> {
    const data = MsgCreateSubscription.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "CreateSubscription", data);
    return promise.then(data => MsgCreateSubscriptionResponse.decode(new _m0.Reader(data)));
  }

  grantDiscount(request: MsgGrantDiscount): Promise<MsgGrantDiscountResponse> {
    const data = MsgGrantDiscount.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "GrantDiscount", data);
    return promise.then(data => MsgGrantDiscountResponse.decode(new _m0.Reader(data)));
  }

  revokeDiscount(request: MsgRevokeDiscount): Promise<MsgRevokeDiscountResponse> {
    const data = MsgRevokeDiscount.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "RevokeDiscount", data);
    return promise.then(data => MsgRevokeDiscountResponse.decode(new _m0.Reader(data)));
  }

  effectPayment(request: MsgEffectPayment): Promise<MsgEffectPaymentResponse> {
    const data = MsgEffectPayment.encode(request).finish();
    const promise = this.rpc.request("payments.Msg", "EffectPayment", data);
    return promise.then(data => MsgEffectPaymentResponse.decode(new _m0.Reader(data)));
  }

}