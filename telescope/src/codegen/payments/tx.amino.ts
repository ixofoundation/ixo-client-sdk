import { AminoMsg } from "@cosmjs/amino";
import { MsgSetPaymentContractAuthorisation, MsgCreatePaymentTemplate, MsgCreatePaymentContract, MsgCreateSubscription, MsgGrantDiscount, MsgRevokeDiscount, MsgEffectPayment } from "./tx";
export interface AminoMsgSetPaymentContractAuthorisation extends AminoMsg {
  type: "/payments.MsgSetPaymentContractAuthorisation";
  value: {
    payment_contract_id: string;
    payer_did: string;
    authorised: boolean;
    payer_address: string;
  };
}
export interface AminoMsgCreatePaymentTemplate extends AminoMsg {
  type: "/payments.MsgCreatePaymentTemplate";
  value: {
    creator_did: string;
    payment_template: {
      id: string;
      payment_amount: {
        denom: string;
        amount: string;
      }[];
      payment_minimum: {
        denom: string;
        amount: string;
      }[];
      payment_maximum: {
        denom: string;
        amount: string;
      }[];
      discounts: {
        id: string;
        percent: string;
      }[];
    };
    creator_address: string;
  };
}
export interface AminoMsgCreatePaymentContract extends AminoMsg {
  type: "/payments.MsgCreatePaymentContract";
  value: {
    creator_did: string;
    payment_template_id: string;
    payment_contract_id: string;
    payer: string;
    recipients: {
      address: string;
      percentage: string;
    }[];
    can_deauthorise: boolean;
    discount_id: string;
    creator_address: string;
  };
}
export interface AminoMsgCreateSubscription extends AminoMsg {
  type: "/payments.MsgCreateSubscription";
  value: {
    creator_did: string;
    subscription_id: string;
    payment_contract_id: string;
    max_periods: string;
    period: {
      type_url: string;
      value: Uint8Array;
    };
    creator_address: string;
  };
}
export interface AminoMsgGrantDiscount extends AminoMsg {
  type: "/payments.MsgGrantDiscount";
  value: {
    sender_did: string;
    payment_contract_id: string;
    discount_id: string;
    recipient: string;
    sender_address: string;
  };
}
export interface AminoMsgRevokeDiscount extends AminoMsg {
  type: "/payments.MsgRevokeDiscount";
  value: {
    sender_did: string;
    payment_contract_id: string;
    holder: string;
    sender_address: string;
  };
}
export interface AminoMsgEffectPayment extends AminoMsg {
  type: "/payments.MsgEffectPayment";
  value: {
    sender_did: string;
    payment_contract_id: string;
    sender_address: string;
  };
}
export const AminoConverter = {
  "/payments.MsgSetPaymentContractAuthorisation": {
    aminoType: "/payments.MsgSetPaymentContractAuthorisation",
    toAmino: ({
      paymentContractId,
      payerDid,
      authorised,
      payerAddress
    }: MsgSetPaymentContractAuthorisation): AminoMsgSetPaymentContractAuthorisation["value"] => {
      return {
        payment_contract_id: paymentContractId,
        payer_did: payerDid,
        authorised,
        payer_address: payerAddress
      };
    },
    fromAmino: ({
      payment_contract_id,
      payer_did,
      authorised,
      payer_address
    }: AminoMsgSetPaymentContractAuthorisation["value"]): MsgSetPaymentContractAuthorisation => {
      return {
        paymentContractId: payment_contract_id,
        payerDid: payer_did,
        authorised,
        payerAddress: payer_address
      };
    }
  },
  "/payments.MsgCreatePaymentTemplate": {
    aminoType: "/payments.MsgCreatePaymentTemplate",
    toAmino: ({
      creatorDid,
      paymentTemplate,
      creatorAddress
    }: MsgCreatePaymentTemplate): AminoMsgCreatePaymentTemplate["value"] => {
      return {
        creator_did: creatorDid,
        payment_template: {
          id: paymentTemplate.id,
          payment_amount: paymentTemplate.paymentAmount.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          payment_minimum: paymentTemplate.paymentMinimum.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          payment_maximum: paymentTemplate.paymentMaximum.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          discounts: paymentTemplate.discounts.map(el0 => ({
            id: el0.id,
            percent: el0.percent
          }))
        },
        creator_address: creatorAddress
      };
    },
    fromAmino: ({
      creator_did,
      payment_template,
      creator_address
    }: AminoMsgCreatePaymentTemplate["value"]): MsgCreatePaymentTemplate => {
      return {
        creatorDid: creator_did,
        paymentTemplate: {
          id: payment_template.id,
          paymentAmount: payment_template.payment_amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          paymentMinimum: payment_template.payment_minimum.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          paymentMaximum: payment_template.payment_maximum.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          discounts: payment_template.discounts.map(el1 => ({
            id: el1.id,
            percent: el1.percent
          }))
        },
        creatorAddress: creator_address
      };
    }
  },
  "/payments.MsgCreatePaymentContract": {
    aminoType: "/payments.MsgCreatePaymentContract",
    toAmino: ({
      creatorDid,
      paymentTemplateId,
      paymentContractId,
      payer,
      recipients,
      canDeauthorise,
      discountId,
      creatorAddress
    }: MsgCreatePaymentContract): AminoMsgCreatePaymentContract["value"] => {
      return {
        creator_did: creatorDid,
        payment_template_id: paymentTemplateId,
        payment_contract_id: paymentContractId,
        payer,
        recipients: recipients.map(el0 => ({
          address: el0.address,
          percentage: el0.percentage
        })),
        can_deauthorise: canDeauthorise,
        discount_id: discountId,
        creator_address: creatorAddress
      };
    },
    fromAmino: ({
      creator_did,
      payment_template_id,
      payment_contract_id,
      payer,
      recipients,
      can_deauthorise,
      discount_id,
      creator_address
    }: AminoMsgCreatePaymentContract["value"]): MsgCreatePaymentContract => {
      return {
        creatorDid: creator_did,
        paymentTemplateId: payment_template_id,
        paymentContractId: payment_contract_id,
        payer,
        recipients: recipients.map(el0 => ({
          address: el0.address,
          percentage: el0.percentage
        })),
        canDeauthorise: can_deauthorise,
        discountId: discount_id,
        creatorAddress: creator_address
      };
    }
  },
  "/payments.MsgCreateSubscription": {
    aminoType: "/payments.MsgCreateSubscription",
    toAmino: ({
      creatorDid,
      subscriptionId,
      paymentContractId,
      maxPeriods,
      period,
      creatorAddress
    }: MsgCreateSubscription): AminoMsgCreateSubscription["value"] => {
      return {
        creator_did: creatorDid,
        subscription_id: subscriptionId,
        payment_contract_id: paymentContractId,
        max_periods: maxPeriods,
        period: {
          type_url: period.typeUrl,
          value: period.value
        },
        creator_address: creatorAddress
      };
    },
    fromAmino: ({
      creator_did,
      subscription_id,
      payment_contract_id,
      max_periods,
      period,
      creator_address
    }: AminoMsgCreateSubscription["value"]): MsgCreateSubscription => {
      return {
        creatorDid: creator_did,
        subscriptionId: subscription_id,
        paymentContractId: payment_contract_id,
        maxPeriods: max_periods,
        period: {
          typeUrl: period.type_url,
          value: period.value
        },
        creatorAddress: creator_address
      };
    }
  },
  "/payments.MsgGrantDiscount": {
    aminoType: "/payments.MsgGrantDiscount",
    toAmino: ({
      senderDid,
      paymentContractId,
      discountId,
      recipient,
      senderAddress
    }: MsgGrantDiscount): AminoMsgGrantDiscount["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId,
        discount_id: discountId,
        recipient,
        sender_address: senderAddress
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id,
      discount_id,
      recipient,
      sender_address
    }: AminoMsgGrantDiscount["value"]): MsgGrantDiscount => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id,
        discountId: discount_id,
        recipient,
        senderAddress: sender_address
      };
    }
  },
  "/payments.MsgRevokeDiscount": {
    aminoType: "/payments.MsgRevokeDiscount",
    toAmino: ({
      senderDid,
      paymentContractId,
      holder,
      senderAddress
    }: MsgRevokeDiscount): AminoMsgRevokeDiscount["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId,
        holder,
        sender_address: senderAddress
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id,
      holder,
      sender_address
    }: AminoMsgRevokeDiscount["value"]): MsgRevokeDiscount => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id,
        holder,
        senderAddress: sender_address
      };
    }
  },
  "/payments.MsgEffectPayment": {
    aminoType: "/payments.MsgEffectPayment",
    toAmino: ({
      senderDid,
      paymentContractId,
      senderAddress
    }: MsgEffectPayment): AminoMsgEffectPayment["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId,
        sender_address: senderAddress
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id,
      sender_address
    }: AminoMsgEffectPayment["value"]): MsgEffectPayment => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id,
        senderAddress: sender_address
      };
    }
  }
};