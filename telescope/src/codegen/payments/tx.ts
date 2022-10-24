import { PaymentTemplate, PaymentTemplateSDKType, DistributionShare, DistributionShareSDKType } from "./payments";
import { Any, AnySDKType } from "../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */

export interface MsgSetPaymentContractAuthorisation {
  paymentContractId: string;
  payerDid: string;
  authorised: boolean;
  payerAddress: string;
}
/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */

export interface MsgSetPaymentContractAuthorisationSDKType {
  payment_contract_id: string;
  payer_did: string;
  authorised: boolean;
  payer_address: string;
}
/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */

export interface MsgSetPaymentContractAuthorisationResponse {}
/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */

export interface MsgSetPaymentContractAuthorisationResponseSDKType {}
/** MsgCreatePaymentTemplate defines a message for creating a payment template. */

export interface MsgCreatePaymentTemplate {
  creatorDid: string;
  paymentTemplate?: PaymentTemplate;
  creatorAddress: string;
}
/** MsgCreatePaymentTemplate defines a message for creating a payment template. */

export interface MsgCreatePaymentTemplateSDKType {
  creator_did: string;
  payment_template?: PaymentTemplateSDKType;
  creator_address: string;
}
/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */

export interface MsgCreatePaymentTemplateResponse {}
/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */

export interface MsgCreatePaymentTemplateResponseSDKType {}
/** MsgCreatePaymentContract defines a message for creating a payment contract. */

export interface MsgCreatePaymentContract {
  creatorDid: string;
  paymentTemplateId: string;
  paymentContractId: string;
  payer: string;
  recipients: DistributionShare[];
  canDeauthorise: boolean;
  discountId: string;
  creatorAddress: string;
}
/** MsgCreatePaymentContract defines a message for creating a payment contract. */

export interface MsgCreatePaymentContractSDKType {
  creator_did: string;
  payment_template_id: string;
  payment_contract_id: string;
  payer: string;
  recipients: DistributionShareSDKType[];
  can_deauthorise: boolean;
  discount_id: string;
  creator_address: string;
}
/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */

export interface MsgCreatePaymentContractResponse {}
/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */

export interface MsgCreatePaymentContractResponseSDKType {}
/** MsgCreateSubscription defines a message for creating a subscription. */

export interface MsgCreateSubscription {
  creatorDid: string;
  subscriptionId: string;
  paymentContractId: string;
  maxPeriods: string;
  period?: Any;
  creatorAddress: string;
}
/** MsgCreateSubscription defines a message for creating a subscription. */

export interface MsgCreateSubscriptionSDKType {
  creator_did: string;
  subscription_id: string;
  payment_contract_id: string;
  max_periods: string;
  period?: AnySDKType;
  creator_address: string;
}
/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */

export interface MsgCreateSubscriptionResponse {}
/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */

export interface MsgCreateSubscriptionResponseSDKType {}
/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */

export interface MsgGrantDiscount {
  senderDid: string;
  paymentContractId: string;
  discountId: string;
  recipient: string;
  senderAddress: string;
}
/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */

export interface MsgGrantDiscountSDKType {
  sender_did: string;
  payment_contract_id: string;
  discount_id: string;
  recipient: string;
  sender_address: string;
}
/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */

export interface MsgGrantDiscountResponse {}
/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */

export interface MsgGrantDiscountResponseSDKType {}
/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */

export interface MsgRevokeDiscount {
  senderDid: string;
  paymentContractId: string;
  holder: string;
  senderAddress: string;
}
/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */

export interface MsgRevokeDiscountSDKType {
  sender_did: string;
  payment_contract_id: string;
  holder: string;
  sender_address: string;
}
/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */

export interface MsgRevokeDiscountResponse {}
/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */

export interface MsgRevokeDiscountResponseSDKType {}
/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */

export interface MsgEffectPayment {
  senderDid: string;
  paymentContractId: string;
  senderAddress: string;
}
/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */

export interface MsgEffectPaymentSDKType {
  sender_did: string;
  payment_contract_id: string;
  sender_address: string;
}
/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */

export interface MsgEffectPaymentResponse {}
/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */

export interface MsgEffectPaymentResponseSDKType {}

function createBaseMsgSetPaymentContractAuthorisation(): MsgSetPaymentContractAuthorisation {
  return {
    paymentContractId: "",
    payerDid: "",
    authorised: false,
    payerAddress: ""
  };
}

export const MsgSetPaymentContractAuthorisation = {
  encode(message: MsgSetPaymentContractAuthorisation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentContractId !== "") {
      writer.uint32(10).string(message.paymentContractId);
    }

    if (message.payerDid !== "") {
      writer.uint32(18).string(message.payerDid);
    }

    if (message.authorised === true) {
      writer.uint32(24).bool(message.authorised);
    }

    if (message.payerAddress !== "") {
      writer.uint32(34).string(message.payerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPaymentContractAuthorisation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContractId = reader.string();
          break;

        case 2:
          message.payerDid = reader.string();
          break;

        case 3:
          message.authorised = reader.bool();
          break;

        case 4:
          message.payerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetPaymentContractAuthorisation>): MsgSetPaymentContractAuthorisation {
    const message = createBaseMsgSetPaymentContractAuthorisation();
    message.paymentContractId = object.paymentContractId ?? "";
    message.payerDid = object.payerDid ?? "";
    message.authorised = object.authorised ?? false;
    message.payerAddress = object.payerAddress ?? "";
    return message;
  }

};

function createBaseMsgSetPaymentContractAuthorisationResponse(): MsgSetPaymentContractAuthorisationResponse {
  return {};
}

export const MsgSetPaymentContractAuthorisationResponse = {
  encode(_: MsgSetPaymentContractAuthorisationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPaymentContractAuthorisationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSetPaymentContractAuthorisationResponse>): MsgSetPaymentContractAuthorisationResponse {
    const message = createBaseMsgSetPaymentContractAuthorisationResponse();
    return message;
  }

};

function createBaseMsgCreatePaymentTemplate(): MsgCreatePaymentTemplate {
  return {
    creatorDid: "",
    paymentTemplate: undefined,
    creatorAddress: ""
  };
}

export const MsgCreatePaymentTemplate = {
  encode(message: MsgCreatePaymentTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.paymentTemplate !== undefined) {
      PaymentTemplate.encode(message.paymentTemplate, writer.uint32(18).fork()).ldelim();
    }

    if (message.creatorAddress !== "") {
      writer.uint32(26).string(message.creatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentTemplate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.paymentTemplate = PaymentTemplate.decode(reader, reader.uint32());
          break;

        case 3:
          message.creatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePaymentTemplate>): MsgCreatePaymentTemplate {
    const message = createBaseMsgCreatePaymentTemplate();
    message.creatorDid = object.creatorDid ?? "";
    message.paymentTemplate = object.paymentTemplate !== undefined && object.paymentTemplate !== null ? PaymentTemplate.fromPartial(object.paymentTemplate) : undefined;
    message.creatorAddress = object.creatorAddress ?? "";
    return message;
  }

};

function createBaseMsgCreatePaymentTemplateResponse(): MsgCreatePaymentTemplateResponse {
  return {};
}

export const MsgCreatePaymentTemplateResponse = {
  encode(_: MsgCreatePaymentTemplateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentTemplateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreatePaymentTemplateResponse>): MsgCreatePaymentTemplateResponse {
    const message = createBaseMsgCreatePaymentTemplateResponse();
    return message;
  }

};

function createBaseMsgCreatePaymentContract(): MsgCreatePaymentContract {
  return {
    creatorDid: "",
    paymentTemplateId: "",
    paymentContractId: "",
    payer: "",
    recipients: [],
    canDeauthorise: false,
    discountId: "",
    creatorAddress: ""
  };
}

export const MsgCreatePaymentContract = {
  encode(message: MsgCreatePaymentContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.paymentTemplateId !== "") {
      writer.uint32(18).string(message.paymentTemplateId);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(26).string(message.paymentContractId);
    }

    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }

    for (const v of message.recipients) {
      DistributionShare.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.canDeauthorise === true) {
      writer.uint32(48).bool(message.canDeauthorise);
    }

    if (message.discountId !== "") {
      writer.uint32(58).string(message.discountId);
    }

    if (message.creatorAddress !== "") {
      writer.uint32(66).string(message.creatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.paymentTemplateId = reader.string();
          break;

        case 3:
          message.paymentContractId = reader.string();
          break;

        case 4:
          message.payer = reader.string();
          break;

        case 5:
          message.recipients.push(DistributionShare.decode(reader, reader.uint32()));
          break;

        case 6:
          message.canDeauthorise = reader.bool();
          break;

        case 7:
          message.discountId = reader.string();
          break;

        case 8:
          message.creatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePaymentContract>): MsgCreatePaymentContract {
    const message = createBaseMsgCreatePaymentContract();
    message.creatorDid = object.creatorDid ?? "";
    message.paymentTemplateId = object.paymentTemplateId ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.payer = object.payer ?? "";
    message.recipients = object.recipients?.map(e => DistributionShare.fromPartial(e)) || [];
    message.canDeauthorise = object.canDeauthorise ?? false;
    message.discountId = object.discountId ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    return message;
  }

};

function createBaseMsgCreatePaymentContractResponse(): MsgCreatePaymentContractResponse {
  return {};
}

export const MsgCreatePaymentContractResponse = {
  encode(_: MsgCreatePaymentContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreatePaymentContractResponse>): MsgCreatePaymentContractResponse {
    const message = createBaseMsgCreatePaymentContractResponse();
    return message;
  }

};

function createBaseMsgCreateSubscription(): MsgCreateSubscription {
  return {
    creatorDid: "",
    subscriptionId: "",
    paymentContractId: "",
    maxPeriods: "",
    period: undefined,
    creatorAddress: ""
  };
}

export const MsgCreateSubscription = {
  encode(message: MsgCreateSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(26).string(message.paymentContractId);
    }

    if (message.maxPeriods !== "") {
      writer.uint32(34).string(message.maxPeriods);
    }

    if (message.period !== undefined) {
      Any.encode(message.period, writer.uint32(42).fork()).ldelim();
    }

    if (message.creatorAddress !== "") {
      writer.uint32(50).string(message.creatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubscription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.subscriptionId = reader.string();
          break;

        case 3:
          message.paymentContractId = reader.string();
          break;

        case 4:
          message.maxPeriods = reader.string();
          break;

        case 5:
          message.period = Any.decode(reader, reader.uint32());
          break;

        case 6:
          message.creatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSubscription>): MsgCreateSubscription {
    const message = createBaseMsgCreateSubscription();
    message.creatorDid = object.creatorDid ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.maxPeriods = object.maxPeriods ?? "";
    message.period = object.period !== undefined && object.period !== null ? Any.fromPartial(object.period) : undefined;
    message.creatorAddress = object.creatorAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateSubscriptionResponse(): MsgCreateSubscriptionResponse {
  return {};
}

export const MsgCreateSubscriptionResponse = {
  encode(_: MsgCreateSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubscriptionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateSubscriptionResponse>): MsgCreateSubscriptionResponse {
    const message = createBaseMsgCreateSubscriptionResponse();
    return message;
  }

};

function createBaseMsgGrantDiscount(): MsgGrantDiscount {
  return {
    senderDid: "",
    paymentContractId: "",
    discountId: "",
    recipient: "",
    senderAddress: ""
  };
}

export const MsgGrantDiscount = {
  encode(message: MsgGrantDiscount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.discountId !== "") {
      writer.uint32(26).string(message.discountId);
    }

    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }

    if (message.senderAddress !== "") {
      writer.uint32(42).string(message.senderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantDiscount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.discountId = reader.string();
          break;

        case 4:
          message.recipient = reader.string();
          break;

        case 5:
          message.senderAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgGrantDiscount>): MsgGrantDiscount {
    const message = createBaseMsgGrantDiscount();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.discountId = object.discountId ?? "";
    message.recipient = object.recipient ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }

};

function createBaseMsgGrantDiscountResponse(): MsgGrantDiscountResponse {
  return {};
}

export const MsgGrantDiscountResponse = {
  encode(_: MsgGrantDiscountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantDiscountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgGrantDiscountResponse>): MsgGrantDiscountResponse {
    const message = createBaseMsgGrantDiscountResponse();
    return message;
  }

};

function createBaseMsgRevokeDiscount(): MsgRevokeDiscount {
  return {
    senderDid: "",
    paymentContractId: "",
    holder: "",
    senderAddress: ""
  };
}

export const MsgRevokeDiscount = {
  encode(message: MsgRevokeDiscount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.holder !== "") {
      writer.uint32(26).string(message.holder);
    }

    if (message.senderAddress !== "") {
      writer.uint32(34).string(message.senderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDiscount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.holder = reader.string();
          break;

        case 4:
          message.senderAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRevokeDiscount>): MsgRevokeDiscount {
    const message = createBaseMsgRevokeDiscount();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.holder = object.holder ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }

};

function createBaseMsgRevokeDiscountResponse(): MsgRevokeDiscountResponse {
  return {};
}

export const MsgRevokeDiscountResponse = {
  encode(_: MsgRevokeDiscountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDiscountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRevokeDiscountResponse>): MsgRevokeDiscountResponse {
    const message = createBaseMsgRevokeDiscountResponse();
    return message;
  }

};

function createBaseMsgEffectPayment(): MsgEffectPayment {
  return {
    senderDid: "",
    paymentContractId: "",
    senderAddress: ""
  };
}

export const MsgEffectPayment = {
  encode(message: MsgEffectPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.senderAddress !== "") {
      writer.uint32(26).string(message.senderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEffectPayment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.senderAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEffectPayment>): MsgEffectPayment {
    const message = createBaseMsgEffectPayment();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }

};

function createBaseMsgEffectPaymentResponse(): MsgEffectPaymentResponse {
  return {};
}

export const MsgEffectPaymentResponse = {
  encode(_: MsgEffectPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEffectPaymentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgEffectPaymentResponse>): MsgEffectPaymentResponse {
    const message = createBaseMsgEffectPaymentResponse();
    return message;
  }

};