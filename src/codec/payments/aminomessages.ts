/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "../google/protobuf/any";
import { DistributionShare, PaymentTemplate } from "./payments";
import {
  MsgCreatePaymentContract,
  MsgCreatePaymentTemplate,
  MsgCreateSubscription,
  MsgEffectPayment,
  MsgGrantDiscount,
  MsgRevokeDiscount,
} from "./tx";

// eslint-disable-next-line import/no-cycle

export interface AminoCreatePaymentTemplate extends AminoMsg {
  readonly type: "payments.MsgCreatePaymentTemplate";
  readonly value: {
    readonly creatorDid: string;
    readonly paymentTemplate?: PaymentTemplate;
  };
}

export function isAminoCreatePaymentTemplate(
  msg: AminoMsg
): msg is AminoCreatePaymentTemplate {
  return msg.type === "payments.MsgCreatePaymentTemplate";
}
export function CreatePaymentTemplateAminoConverters(): AminoConverters {
  return {
    "/payments.MsgCreatePaymentTemplate": {
      aminoType: "payments.MsgCreatePaymentTemplate",

      toAmino: ({
        creatorDid,
        paymentTemplate,
      }: MsgCreatePaymentTemplate): AminoCreatePaymentTemplate["value"] => ({
        creatorDid: creatorDid,
        paymentTemplate: paymentTemplate,
      }),
      fromAmino: ({
        creatorDid,
        paymentTemplate,
      }: AminoCreatePaymentTemplate["value"]): MsgCreatePaymentTemplate => ({
        creatorDid: creatorDid,

        paymentTemplate: paymentTemplate,
      }),
    },
  };
}

//  TransactionCreatePaymentContract

export interface AminoCreatePaymentContract extends AminoMsg {
  readonly type: "payments.MsgCreatePaymentContract";
  readonly value: {
    readonly creatorDid: string;
    readonly paymentTemplateId: string;
    readonly paymentContractId: string;
    readonly payer: string;
    readonly recipients: DistributionShare[];
    readonly canDeauthorise: boolean;
    readonly discountId: string;
  };
}

export function isAminoCreatePaymentContract(
  msg: AminoMsg
): msg is AminoCreatePaymentContract {
  return msg.type === "payments.MsgCreatePaymentContract";
}
export function CreatePaymentContractAminoConverters(): AminoConverters {
  return {
    "/payments.MsgCreatePaymentContract": {
      aminoType: "payments.MsgCreatePaymentContract",

      toAmino: ({
        creatorDid,
        paymentTemplateId,
        paymentContractId,
        payer,
        recipients,
        canDeauthorise,
        discountId,
      }: MsgCreatePaymentContract): AminoCreatePaymentContract["value"] => ({
        creatorDid: creatorDid,
        paymentTemplateId: paymentTemplateId,
        paymentContractId: paymentContractId,
        payer: payer,
        recipients: recipients,
        canDeauthorise: canDeauthorise,
        discountId: discountId,
      }),
      fromAmino: ({
        creatorDid,
        paymentTemplateId,
        paymentContractId,
        payer,
        recipients,
        canDeauthorise,
        discountId,
      }: AminoCreatePaymentContract["value"]): MsgCreatePaymentContract => ({
        creatorDid: creatorDid,
        paymentTemplateId: paymentTemplateId,
        paymentContractId: paymentContractId,
        payer: payer,
        recipients: recipients,
        canDeauthorise: canDeauthorise,
        discountId: discountId,
      }),
    },
  };
}

//  TransactionCreateSubscription

export interface AminoCreateSubscription extends AminoMsg {
  readonly type: "payments.MsgCreateSubscription";
  readonly value: {
    readonly creatorDid: string;
    readonly subscriptionId: string;
    readonly paymentContractId: string;
    readonly maxPeriods: string;
    readonly period: Any;
  };
}

export function isAminoCreateSubscription(
  msg: AminoMsg
): msg is AminoCreateSubscription {
  return msg.type === "payments.MsgCreateSubscription";
}
export function CreateSubscriptionAminoConverters(): AminoConverters {
  return {
    "/payments.MsgCreateSubscription": {
      aminoType: "payments.MsgCreateSubscription",

      toAmino: ({
        creatorDid,
        subscriptionId,
        paymentContractId,
        maxPeriods,
        period,
      }: MsgCreateSubscription): AminoCreateSubscription["value"] => ({
        creatorDid: creatorDid,
        subscriptionId: subscriptionId,
        paymentContractId: paymentContractId,
        maxPeriods: maxPeriods,
        period: period,
      }),
      fromAmino: ({
        creatorDid,
        subscriptionId,
        paymentContractId,
        maxPeriods,
        period,
      }: AminoCreateSubscription["value"]): MsgCreateSubscription => ({
        creatorDid: creatorDid,
        subscriptionId: subscriptionId,
        paymentContractId: paymentContractId,
        maxPeriods: maxPeriods,
        period: period,
      }),
    },
  };
}

//  TransactionGrantDiscount

export interface AminoGrantDiscount extends AminoMsg {
  readonly type: "payments.MsgGrantDiscount";
  readonly value: {
    readonly senderDid: string;
    readonly paymentContractId: string;
    readonly discountId: string;
    readonly recipient: string;
  };
}

export function isAminoGrantDiscount(msg: AminoMsg): msg is AminoGrantDiscount {
  return msg.type === "payments.MsgGrantDiscount";
}
export function GrantDiscountAminoConverters(): AminoConverters {
  return {
    "/payments.MsgGrantDiscount": {
      aminoType: "payments.MsgGrantDiscount",

      toAmino: ({
        senderDid,
        paymentContractId,
        discountId,
        recipient,
      }: MsgGrantDiscount): AminoGrantDiscount["value"] => ({
        senderDid,
        paymentContractId,
        discountId,
        recipient,
      }),
      fromAmino: ({
        senderDid,
        paymentContractId,
        discountId,
        recipient,
      }: AminoGrantDiscount["value"]): MsgGrantDiscount => ({
        senderDid: senderDid,
        paymentContractId: paymentContractId,
        discountId: discountId,
        recipient: recipient,
      }),
    },
  };
}

//  TransactionRevokeDiscount

export interface AminoRevokeDiscount extends AminoMsg {
  readonly type: "payments.MsgRevokeDiscount";
  readonly value: {
    readonly senderDid: string;
    readonly paymentContractId: string;
    readonly holder: string;
  };
}

export function isAminoRevokeDiscount(
  msg: AminoMsg
): msg is AminoRevokeDiscount {
  return msg.type === "payments.MsgRevokeDiscount";
}
export function RevokeDiscountAminoConverters(): AminoConverters {
  return {
    "/payments.MsgRevokeDiscount": {
      aminoType: "payments.MsgRevokeDiscount",

      toAmino: ({
        senderDid,
        paymentContractId,
        holder,
      }: MsgRevokeDiscount): AminoRevokeDiscount["value"] => ({
        senderDid: senderDid,
        paymentContractId: paymentContractId,
        holder: holder,
      }),
      fromAmino: ({
        senderDid,
        paymentContractId,
        holder,
      }: AminoRevokeDiscount["value"]): MsgRevokeDiscount => ({
        senderDid: senderDid,
        paymentContractId: paymentContractId,
        holder: holder,
      }),
    },
  };
}

//  TransactionEffectPayment

export interface AminoEffectPayment extends AminoMsg {
  readonly type: "payments.MsgEffectPayment";
  readonly value: {
    readonly senderDid: string;
    readonly paymentContractId: string;
  };
}

export function isAminoEffectPayment(msg: AminoMsg): msg is AminoEffectPayment {
  return msg.type === "payments.MsgEffectPayment";
}
export function EffectPaymentAminoConverters(): AminoConverters {
  return {
    "/payments.MsgEffectPayment": {
      aminoType: "payments.MsgEffectPayment",

      toAmino: ({
        senderDid,
        paymentContractId,
      }: MsgEffectPayment): AminoEffectPayment["value"] => ({
        senderDid: senderDid,
        paymentContractId: paymentContractId,
      }),
      fromAmino: ({
        senderDid,
        paymentContractId,
      }: AminoEffectPayment["value"]): MsgEffectPayment => ({
        senderDid: senderDid,
        paymentContractId: paymentContractId,
      }),
    },
  };
}
