/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { FunctionParam } from "./bonds";
import {
  MsgBuy,
  MsgCreateBond,
  MsgEditBond,
  MsgMakeOutcomePayment,
  MsgSell,
  MsgSetNextAlpha,
  MsgSwap,
  MsgUpdateBondState,
  MsgWithdrawReserve,
  MsgWithdrawShare,
} from "./tx";

// eslint-disable-next-line import/no-cycle

/** A high level transaction of the coin module */
export interface AminoBondCreate extends AminoMsg {
  readonly type: "bonds.MsgCreateBond";
  readonly value: {
    readonly token: string;
    readonly name: string;
    readonly description: string;
    readonly creatorDid: string;
    readonly controllerDid: string;
    readonly functionType: string;
    readonly functionParameters: FunctionParam[];
    readonly reserveTokens: string[];
    readonly txFeePercentage: string;
    readonly exitFeePercentage: string;
    readonly feeAddress: string;
    readonly reserveWithdrawalAddress: string;
    readonly maxSupply: Coin;
    readonly orderQuantityLimits: Coin[];
    readonly sanityRate: string;
    readonly sanityMarginPercentage: string;
    readonly allowSells: boolean;
    readonly allowReserveWithdrawals: boolean;
    readonly alphaBond: boolean;
    readonly batchBlocks: string;
    readonly outcomePayment: string;
    readonly bondDid: string;
  };
}

export function isAminoBondCreate(msg: AminoMsg): msg is AminoBondCreate {
  return msg.type === "bonds.MsgCreateBond";
}
export function createBondAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgCreateBond": {
      aminoType: "bonds.MsgCreateBond",

      toAmino: ({
        token,
        name,
        description,
        creatorDid,
        controllerDid,
        functionType,
        functionParameters,
        reserveTokens,
        txFeePercentage,
        exitFeePercentage,
        feeAddress,
        reserveWithdrawalAddress,
        maxSupply,
        orderQuantityLimits,
        sanityRate,
        sanityMarginPercentage,
        allowSells,
        allowReserveWithdrawals,
        alphaBond,
        batchBlocks,
        outcomePayment,
        bondDid,
      }: MsgCreateBond): AminoBondCreate["value"] => ({
        token: token,
        name: name,
        description: description,
        creatorDid: creatorDid,
        controllerDid: controllerDid,
        functionType: functionType,
        functionParameters: functionParameters,
        reserveTokens: reserveTokens,
        txFeePercentage: txFeePercentage,
        exitFeePercentage: exitFeePercentage,
        feeAddress: feeAddress,
        reserveWithdrawalAddress: reserveWithdrawalAddress,
        maxSupply: maxSupply,
        orderQuantityLimits: orderQuantityLimits,
        sanityRate: sanityRate,
        sanityMarginPercentage: sanityMarginPercentage,
        allowSells: allowSells,
        allowReserveWithdrawals: allowReserveWithdrawals,
        alphaBond: alphaBond,
        batchBlocks: batchBlocks,
        outcomePayment: outcomePayment,
        bondDid: bondDid,
      }),
      fromAmino: ({
        token,
        name,
        description,
        creatorDid,
        controllerDid,
        functionType,
        functionParameters,
        reserveTokens,
        txFeePercentage,
        exitFeePercentage,
        feeAddress,
        reserveWithdrawalAddress,
        maxSupply,
        orderQuantityLimits,
        sanityRate,
        sanityMarginPercentage,
        allowSells,
        allowReserveWithdrawals,
        alphaBond,
        batchBlocks,
        outcomePayment,
        bondDid,
      }: AminoBondCreate["value"]): MsgCreateBond => ({
        token: token,
        name: name,
        description: description,
        creatorDid: creatorDid,
        controllerDid: controllerDid,
        functionType: functionType,
        functionParameters: functionParameters,
        reserveTokens: reserveTokens,
        txFeePercentage: txFeePercentage,
        exitFeePercentage: exitFeePercentage,
        feeAddress: feeAddress,
        reserveWithdrawalAddress: reserveWithdrawalAddress,
        maxSupply: maxSupply,
        orderQuantityLimits: orderQuantityLimits,
        sanityRate: sanityRate,
        sanityMarginPercentage: sanityMarginPercentage,
        allowSells: allowSells,
        allowReserveWithdrawals: allowReserveWithdrawals,
        alphaBond: alphaBond,
        batchBlocks: batchBlocks,
        outcomePayment: outcomePayment,
        bondDid: bondDid,
      }),
    },
  };
}

//  TransactionEditBond

export interface AminoEditBond extends AminoMsg {
  readonly type: "bonds.MsgEditBond";
  readonly value: {
    readonly bondDid: string;
    readonly name: string;
    readonly description: string;
    readonly orderQuantityLimits: string;
    readonly sanityRate: string;
    readonly sanityMarginPercentage: string;
    readonly editorDid: string;
  };
}

export function isAminoEditBond(msg: AminoMsg): msg is AminoEditBond {
  return msg.type === "bonds.MsgEditBond";
}
export function EditBondAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgEditBond": {
      aminoType: "bonds.MsgEditBond",

      toAmino: ({
        bondDid,
        name,
        description,
        orderQuantityLimits,
        sanityRate,
        sanityMarginPercentage,
        editorDid,
      }: MsgEditBond): AminoEditBond["value"] => ({
        bondDid: bondDid,
        name: name,
        description: description,
        orderQuantityLimits: orderQuantityLimits,
        sanityRate: sanityRate,
        sanityMarginPercentage: sanityMarginPercentage,
        editorDid: editorDid,
      }),
      fromAmino: ({
        bondDid,
        name,
        description,
        orderQuantityLimits,
        sanityRate,
        sanityMarginPercentage,
        editorDid,
      }: AminoEditBond["value"]): MsgEditBond => ({
        bondDid: bondDid,
        name: name,
        description: description,
        orderQuantityLimits: orderQuantityLimits,
        sanityRate: sanityRate,
        sanityMarginPercentage: sanityMarginPercentage,
        editorDid: editorDid,
      }),
    },
  };
}

//  TransactionNextAlpha

export interface AminoNextAlpha extends AminoMsg {
  readonly type: "bonds.MsgNextAlpha";
  readonly value: {
    readonly bondDid: string;
    readonly alpha: string;
    readonly editorDid: string;
  };
}

export function isAminoNextAlpha(msg: AminoMsg): msg is AminoNextAlpha {
  return msg.type === "bonds.MsgNextAlpha";
}
export function NextAlphaAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgNextAlpha": {
      aminoType: "bonds.MsgNextAlpha",

      toAmino: ({
        bondDid,
        alpha,
        editorDid,
      }: MsgSetNextAlpha): AminoNextAlpha["value"] => ({
        bondDid: bondDid,
        alpha: alpha,
        editorDid: editorDid,
      }),
      fromAmino: ({
        bondDid,
        alpha,
        editorDid,
      }: AminoNextAlpha["value"]): MsgSetNextAlpha => ({
        bondDid: bondDid,
        alpha: alpha,
        editorDid: editorDid,
      }),
    },
  };
}

//  TransactionUpdateBondState

export interface AminoUpdateBondState extends AminoMsg {
  readonly type: "bonds.MsgUpdateBondState";
  readonly value: {
    readonly bondDid: string;
    readonly state: string;
    readonly editorDid: string;
  };
}

export function isAminoUpdateBondState(
  msg: AminoMsg
): msg is AminoUpdateBondState {
  return msg.type === "bonds.MsgUpdateBondState";
}
export function UpdateBondStateAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgUpdateBondState": {
      aminoType: "bonds.MsgUpdateBondState",

      toAmino: ({
        bondDid,
        state,
        editorDid,
      }: MsgUpdateBondState): AminoUpdateBondState["value"] => ({
        bondDid: bondDid,
        state: state,
        editorDid: editorDid,
      }),
      fromAmino: ({
        bondDid,
        state,
        editorDid,
      }: AminoUpdateBondState["value"]): MsgUpdateBondState => ({
        bondDid: bondDid,
        state: state,
        editorDid: editorDid,
      }),
    },
  };
}

//  TransactionBuy

export interface AminoBuy extends AminoMsg {
  readonly type: "bonds.MsgBuy";
  readonly value: {
    readonly buyerDid: string;
    readonly amount?: Coin;
    readonly maxPrices: Coin[];
    readonly bondDid: string;
  };
}

export function isAminoBuy(msg: AminoMsg): msg is AminoBuy {
  return msg.type === "bonds.MsgBuy";
}
export function BuyAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgBuy": {
      aminoType: "bonds.MsgBuy",

      toAmino: ({
        buyerDid,
        amount,
        maxPrices,
        bondDid,
      }: MsgBuy): AminoBuy["value"] => ({
        buyerDid: buyerDid,
        amount: amount,
        maxPrices: maxPrices,
        bondDid: bondDid,
      }),
      fromAmino: ({
        buyerDid,
        amount,
        maxPrices,
        bondDid,
      }: AminoBuy["value"]): MsgBuy => ({
        buyerDid: buyerDid,
        amount: amount,
        maxPrices: maxPrices,
        bondDid: bondDid,
      }),
    },
  };
}

//  TransactionSell

export interface AminoSell extends AminoMsg {
  readonly type: "bonds.MsgSell";
  readonly value: {
    readonly sellerDid: string;
    readonly amount?: Coin;
    readonly bondDid: string;
  };
}

export function isAminoSell(msg: AminoMsg): msg is AminoSell {
  return msg.type === "bonds.MsgSell";
}
export function SellAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgSell": {
      aminoType: "bonds.MsgSell",

      toAmino: ({
        sellerDid,
        amount,
        bondDid,
      }: MsgSell): AminoSell["value"] => ({
        sellerDid: sellerDid,
        amount: amount,
        bondDid: bondDid,
      }),
      fromAmino: ({
        sellerDid,
        amount,
        bondDid,
      }: AminoSell["value"]): MsgSell => ({
        sellerDid: sellerDid,
        amount: amount,
        bondDid: bondDid,
      }),
    },
  };
}

//  TransactionSwap

export interface AminoSwap extends AminoMsg {
  readonly type: "bonds.MsgSwap";
  readonly value: {
    readonly swapperDid: string;
    readonly bondDid: string;
    readonly from?: Coin;
    readonly toToken: string;
  };
}

export function isAminoSwap(msg: AminoMsg): msg is AminoSwap {
  return msg.type === "bonds.MsgSwap";
}
export function SwapAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgSwap": {
      aminoType: "bonds.MsgSwap",

      toAmino: ({
        swapperDid,
        bondDid,
        from,
        toToken,
      }: MsgSwap): AminoSwap["value"] => ({
        swapperDid: swapperDid,
        bondDid: bondDid,
        from: from,
        toToken: toToken,
      }),
      fromAmino: ({
        swapperDid,
        bondDid,
        from,
        toToken,
      }: AminoSwap["value"]): MsgSwap => ({
        swapperDid: swapperDid,
        bondDid: bondDid,
        from: from,
        toToken: toToken,
      }),
    },
  };
}

//  TransactionMakeOutcomePayment

export interface AminoMakeOutcomePayment extends AminoMsg {
  readonly type: "bonds.MsgMakeOutcomePayment";
  readonly value: {
    readonly senderDid: string;
    readonly amount: string;
    readonly bondDid: string;
  };
}

export function isAminoMakeOutcomePayment(
  msg: AminoMsg
): msg is AminoMakeOutcomePayment {
  return msg.type === "bonds.MsgMakeOutcomePayment";
}
export function MakeOutcomePaymentAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgMakeOutcomePayment": {
      aminoType: "bonds.MsgMakeOutcomePayment",

      toAmino: ({
        senderDid,
        amount,
        bondDid,
      }: MsgMakeOutcomePayment): AminoMakeOutcomePayment["value"] => ({
        senderDid: senderDid,
        amount: amount,
        bondDid: bondDid,
      }),
      fromAmino: ({
        senderDid,
        amount,
        bondDid,
      }: AminoMakeOutcomePayment["value"]): MsgMakeOutcomePayment => ({
        senderDid: senderDid,
        amount: amount,
        bondDid: bondDid,
      }),
    },
  };
}

//  TransactionWithdrawShare

export interface AminoWithdrawShare extends AminoMsg {
  readonly type: "bonds.MsgWithdrawShare";
  readonly value: {
    readonly recipientDid: string;
    readonly bondDid: string;
  };
}

export function isAminoWithdrawShare(msg: AminoMsg): msg is AminoWithdrawShare {
  return msg.type === "bonds.MsgWithdrawShare";
}
export function WithdrawShareAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgWithdrawShare": {
      aminoType: "bonds.MsgWithdrawShare",

      toAmino: ({
        recipientDid,
        bondDid,
      }: MsgWithdrawShare): AminoWithdrawShare["value"] => ({
        recipientDid: recipientDid,

        bondDid: bondDid,
      }),
      fromAmino: ({
        recipientDid,

        bondDid,
      }: AminoWithdrawShare["value"]): MsgWithdrawShare => ({
        recipientDid: recipientDid,

        bondDid: bondDid,
      }),
    },
  };
}

//  TransactionWithdrawReserve

export interface AminoWithdrawReserve extends AminoMsg {
  readonly type: "bonds.MsgWithdrawReserve";
  readonly value: {
    readonly withdrawerDid: string;
    readonly amount: Coin[];
    readonly bondDid: string;
  };
}

export function isAminoWithdrawReserve(
  msg: AminoMsg
): msg is AminoWithdrawReserve {
  return msg.type === "bonds.MsgWithdrawReserve";
}
export function WithdrawReserveAminoConverters(): AminoConverters {
  return {
    "/bonds.MsgWithdrawReserve": {
      aminoType: "bonds.MsgWithdrawReserve",

      toAmino: ({
        withdrawerDid,
        amount,
        bondDid,
      }: MsgWithdrawReserve): AminoWithdrawReserve["value"] => ({
        withdrawerDid: withdrawerDid,
        amount: amount,
        bondDid: bondDid,
      }),
      fromAmino: ({
        withdrawerDid,
        amount,
        bondDid,
      }: AminoWithdrawReserve["value"]): MsgWithdrawReserve => ({
        withdrawerDid: withdrawerDid,
        amount: amount,
        bondDid: bondDid,
      }),
    },
  };
}
