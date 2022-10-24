import { FunctionParam, FunctionParamSDKType } from "./bonds";
import { Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** MsgCreateBond defines a message for creating a new bond. */

export interface MsgCreateBond {
  bondDid: string;
  token: string;
  name: string;
  description: string;
  functionType: string;
  functionParameters: FunctionParam[];
  creatorDid: string;
  controllerDid: string;
  reserveTokens: string[];
  txFeePercentage: string;
  exitFeePercentage: string;
  feeAddress: string;
  reserveWithdrawalAddress: string;
  maxSupply?: Coin;
  orderQuantityLimits: Coin[];
  sanityRate: string;
  sanityMarginPercentage: string;
  allowSells: boolean;
  allowReserveWithdrawals: boolean;
  alphaBond: boolean;
  batchBlocks: string;
  outcomePayment: string;
  creatorAddress: string;
}
/** MsgCreateBond defines a message for creating a new bond. */

export interface MsgCreateBondSDKType {
  bond_did: string;
  token: string;
  name: string;
  description: string;
  function_type: string;
  function_parameters: FunctionParamSDKType[];
  creator_did: string;
  controller_did: string;
  reserve_tokens: string[];
  tx_fee_percentage: string;
  exit_fee_percentage: string;
  fee_address: string;
  reserve_withdrawal_address: string;
  max_supply?: CoinSDKType;
  order_quantity_limits: CoinSDKType[];
  sanity_rate: string;
  sanity_margin_percentage: string;
  allow_sells: boolean;
  allow_reserve_withdrawals: boolean;
  alpha_bond: boolean;
  batch_blocks: string;
  outcome_payment: string;
  creator_address: string;
}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */

export interface MsgCreateBondResponse {}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */

export interface MsgCreateBondResponseSDKType {}
/** MsgEditBond defines a message for editing an existing bond. */

export interface MsgEditBond {
  bondDid: string;
  name: string;
  description: string;
  orderQuantityLimits: string;
  sanityRate: string;
  sanityMarginPercentage: string;
  editorDid: string;
  editorAddress: string;
}
/** MsgEditBond defines a message for editing an existing bond. */

export interface MsgEditBondSDKType {
  bond_did: string;
  name: string;
  description: string;
  order_quantity_limits: string;
  sanity_rate: string;
  sanity_margin_percentage: string;
  editor_did: string;
  editor_address: string;
}
/** MsgEditBondResponse defines the Msg/EditBond response type. */

export interface MsgEditBondResponse {}
/** MsgEditBondResponse defines the Msg/EditBond response type. */

export interface MsgEditBondResponseSDKType {}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */

export interface MsgSetNextAlpha {
  bondDid: string;
  alpha: string;
  editorDid: string;
  editorAddress: string;
}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */

export interface MsgSetNextAlphaSDKType {
  bond_did: string;
  alpha: string;
  editor_did: string;
  editor_address: string;
}
export interface MsgSetNextAlphaResponse {}
export interface MsgSetNextAlphaResponseSDKType {}
/** MsgUpdateBondState defines a message for updating a bond's current state. */

export interface MsgUpdateBondState {
  bondDid: string;
  state: string;
  editorDid: string;
  editorAddress: string;
}
/** MsgUpdateBondState defines a message for updating a bond's current state. */

export interface MsgUpdateBondStateSDKType {
  bond_did: string;
  state: string;
  editor_did: string;
  editor_address: string;
}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */

export interface MsgUpdateBondStateResponse {}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */

export interface MsgUpdateBondStateResponseSDKType {}
/** MsgBuy defines a message for buying from a bond. */

export interface MsgBuy {
  buyerDid: string;
  amount?: Coin;
  maxPrices: Coin[];
  bondDid: string;
  buyerAddress: string;
}
/** MsgBuy defines a message for buying from a bond. */

export interface MsgBuySDKType {
  buyer_did: string;
  amount?: CoinSDKType;
  max_prices: CoinSDKType[];
  bond_did: string;
  buyer_address: string;
}
/** MsgBuyResponse defines the Msg/Buy response type. */

export interface MsgBuyResponse {}
/** MsgBuyResponse defines the Msg/Buy response type. */

export interface MsgBuyResponseSDKType {}
/** MsgSell defines a message for selling from a bond. */

export interface MsgSell {
  sellerDid: string;
  amount?: Coin;
  bondDid: string;
  sellerAddress: string;
}
/** MsgSell defines a message for selling from a bond. */

export interface MsgSellSDKType {
  seller_did: string;
  amount?: CoinSDKType;
  bond_did: string;
  seller_address: string;
}
/** MsgSellResponse defines the Msg/Sell response type. */

export interface MsgSellResponse {}
/** MsgSellResponse defines the Msg/Sell response type. */

export interface MsgSellResponseSDKType {}
/** MsgSwap defines a message for swapping from one reserve bond token to another. */

export interface MsgSwap {
  swapperDid: string;
  bondDid: string;
  from?: Coin;
  toToken: string;
  swapperAddress: string;
}
/** MsgSwap defines a message for swapping from one reserve bond token to another. */

export interface MsgSwapSDKType {
  swapper_did: string;
  bond_did: string;
  from?: CoinSDKType;
  to_token: string;
  swapper_address: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */

export interface MsgSwapResponse {}
/** MsgSwapResponse defines the Msg/Swap response type. */

export interface MsgSwapResponseSDKType {}
/** MsgMakeOutcomePayment defines a message for making an outcome payment to a bond. */

export interface MsgMakeOutcomePayment {
  senderDid: string;
  amount: string;
  bondDid: string;
  senderAddress: string;
}
/** MsgMakeOutcomePayment defines a message for making an outcome payment to a bond. */

export interface MsgMakeOutcomePaymentSDKType {
  sender_did: string;
  amount: string;
  bond_did: string;
  sender_address: string;
}
/** MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response type. */

export interface MsgMakeOutcomePaymentResponse {}
/** MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response type. */

export interface MsgMakeOutcomePaymentResponseSDKType {}
/** MsgWithdrawShare defines a message for withdrawing a share from a bond that is in the SETTLE stage. */

export interface MsgWithdrawShare {
  recipientDid: string;
  bondDid: string;
  recipientAddress: string;
}
/** MsgWithdrawShare defines a message for withdrawing a share from a bond that is in the SETTLE stage. */

export interface MsgWithdrawShareSDKType {
  recipient_did: string;
  bond_did: string;
  recipient_address: string;
}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */

export interface MsgWithdrawShareResponse {}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */

export interface MsgWithdrawShareResponseSDKType {}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */

export interface MsgWithdrawReserve {
  withdrawerDid: string;
  amount: Coin[];
  bondDid: string;
  withdrawerAddress: string;
}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */

export interface MsgWithdrawReserveSDKType {
  withdrawer_did: string;
  amount: CoinSDKType[];
  bond_did: string;
  withdrawer_address: string;
}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */

export interface MsgWithdrawReserveResponse {}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */

export interface MsgWithdrawReserveResponseSDKType {}

function createBaseMsgCreateBond(): MsgCreateBond {
  return {
    bondDid: "",
    token: "",
    name: "",
    description: "",
    functionType: "",
    functionParameters: [],
    creatorDid: "",
    controllerDid: "",
    reserveTokens: [],
    txFeePercentage: "",
    exitFeePercentage: "",
    feeAddress: "",
    reserveWithdrawalAddress: "",
    maxSupply: undefined,
    orderQuantityLimits: [],
    sanityRate: "",
    sanityMarginPercentage: "",
    allowSells: false,
    allowReserveWithdrawals: false,
    alphaBond: false,
    batchBlocks: "",
    outcomePayment: "",
    creatorAddress: ""
  };
}

export const MsgCreateBond = {
  encode(message: MsgCreateBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.functionType !== "") {
      writer.uint32(42).string(message.functionType);
    }

    for (const v of message.functionParameters) {
      FunctionParam.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.creatorDid !== "") {
      writer.uint32(58).string(message.creatorDid);
    }

    if (message.controllerDid !== "") {
      writer.uint32(66).string(message.controllerDid);
    }

    for (const v of message.reserveTokens) {
      writer.uint32(74).string(v!);
    }

    if (message.txFeePercentage !== "") {
      writer.uint32(82).string(message.txFeePercentage);
    }

    if (message.exitFeePercentage !== "") {
      writer.uint32(90).string(message.exitFeePercentage);
    }

    if (message.feeAddress !== "") {
      writer.uint32(98).string(message.feeAddress);
    }

    if (message.reserveWithdrawalAddress !== "") {
      writer.uint32(106).string(message.reserveWithdrawalAddress);
    }

    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(114).fork()).ldelim();
    }

    for (const v of message.orderQuantityLimits) {
      Coin.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    if (message.sanityRate !== "") {
      writer.uint32(130).string(message.sanityRate);
    }

    if (message.sanityMarginPercentage !== "") {
      writer.uint32(138).string(message.sanityMarginPercentage);
    }

    if (message.allowSells === true) {
      writer.uint32(144).bool(message.allowSells);
    }

    if (message.allowReserveWithdrawals === true) {
      writer.uint32(152).bool(message.allowReserveWithdrawals);
    }

    if (message.alphaBond === true) {
      writer.uint32(160).bool(message.alphaBond);
    }

    if (message.batchBlocks !== "") {
      writer.uint32(170).string(message.batchBlocks);
    }

    if (message.outcomePayment !== "") {
      writer.uint32(178).string(message.outcomePayment);
    }

    if (message.creatorAddress !== "") {
      writer.uint32(186).string(message.creatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.token = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.functionType = reader.string();
          break;

        case 6:
          message.functionParameters.push(FunctionParam.decode(reader, reader.uint32()));
          break;

        case 7:
          message.creatorDid = reader.string();
          break;

        case 8:
          message.controllerDid = reader.string();
          break;

        case 9:
          message.reserveTokens.push(reader.string());
          break;

        case 10:
          message.txFeePercentage = reader.string();
          break;

        case 11:
          message.exitFeePercentage = reader.string();
          break;

        case 12:
          message.feeAddress = reader.string();
          break;

        case 13:
          message.reserveWithdrawalAddress = reader.string();
          break;

        case 14:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;

        case 15:
          message.orderQuantityLimits.push(Coin.decode(reader, reader.uint32()));
          break;

        case 16:
          message.sanityRate = reader.string();
          break;

        case 17:
          message.sanityMarginPercentage = reader.string();
          break;

        case 18:
          message.allowSells = reader.bool();
          break;

        case 19:
          message.allowReserveWithdrawals = reader.bool();
          break;

        case 20:
          message.alphaBond = reader.bool();
          break;

        case 21:
          message.batchBlocks = reader.string();
          break;

        case 22:
          message.outcomePayment = reader.string();
          break;

        case 23:
          message.creatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateBond>): MsgCreateBond {
    const message = createBaseMsgCreateBond();
    message.bondDid = object.bondDid ?? "";
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.functionType = object.functionType ?? "";
    message.functionParameters = object.functionParameters?.map(e => FunctionParam.fromPartial(e)) || [];
    message.creatorDid = object.creatorDid ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.reserveTokens = object.reserveTokens?.map(e => e) || [];
    message.txFeePercentage = object.txFeePercentage ?? "";
    message.exitFeePercentage = object.exitFeePercentage ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.reserveWithdrawalAddress = object.reserveWithdrawalAddress ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
    message.orderQuantityLimits = object.orderQuantityLimits?.map(e => Coin.fromPartial(e)) || [];
    message.sanityRate = object.sanityRate ?? "";
    message.sanityMarginPercentage = object.sanityMarginPercentage ?? "";
    message.allowSells = object.allowSells ?? false;
    message.allowReserveWithdrawals = object.allowReserveWithdrawals ?? false;
    message.alphaBond = object.alphaBond ?? false;
    message.batchBlocks = object.batchBlocks ?? "";
    message.outcomePayment = object.outcomePayment ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateBondResponse(): MsgCreateBondResponse {
  return {};
}

export const MsgCreateBondResponse = {
  encode(_: MsgCreateBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBondResponse();

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

  fromPartial(_: DeepPartial<MsgCreateBondResponse>): MsgCreateBondResponse {
    const message = createBaseMsgCreateBondResponse();
    return message;
  }

};

function createBaseMsgEditBond(): MsgEditBond {
  return {
    bondDid: "",
    name: "",
    description: "",
    orderQuantityLimits: "",
    sanityRate: "",
    sanityMarginPercentage: "",
    editorDid: "",
    editorAddress: ""
  };
}

export const MsgEditBond = {
  encode(message: MsgEditBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.orderQuantityLimits !== "") {
      writer.uint32(34).string(message.orderQuantityLimits);
    }

    if (message.sanityRate !== "") {
      writer.uint32(42).string(message.sanityRate);
    }

    if (message.sanityMarginPercentage !== "") {
      writer.uint32(50).string(message.sanityMarginPercentage);
    }

    if (message.editorDid !== "") {
      writer.uint32(58).string(message.editorDid);
    }

    if (message.editorAddress !== "") {
      writer.uint32(66).string(message.editorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.orderQuantityLimits = reader.string();
          break;

        case 5:
          message.sanityRate = reader.string();
          break;

        case 6:
          message.sanityMarginPercentage = reader.string();
          break;

        case 7:
          message.editorDid = reader.string();
          break;

        case 8:
          message.editorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditBond>): MsgEditBond {
    const message = createBaseMsgEditBond();
    message.bondDid = object.bondDid ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.orderQuantityLimits = object.orderQuantityLimits ?? "";
    message.sanityRate = object.sanityRate ?? "";
    message.sanityMarginPercentage = object.sanityMarginPercentage ?? "";
    message.editorDid = object.editorDid ?? "";
    message.editorAddress = object.editorAddress ?? "";
    return message;
  }

};

function createBaseMsgEditBondResponse(): MsgEditBondResponse {
  return {};
}

export const MsgEditBondResponse = {
  encode(_: MsgEditBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBondResponse();

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

  fromPartial(_: DeepPartial<MsgEditBondResponse>): MsgEditBondResponse {
    const message = createBaseMsgEditBondResponse();
    return message;
  }

};

function createBaseMsgSetNextAlpha(): MsgSetNextAlpha {
  return {
    bondDid: "",
    alpha: "",
    editorDid: "",
    editorAddress: ""
  };
}

export const MsgSetNextAlpha = {
  encode(message: MsgSetNextAlpha, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.alpha !== "") {
      writer.uint32(18).string(message.alpha);
    }

    if (message.editorDid !== "") {
      writer.uint32(26).string(message.editorDid);
    }

    if (message.editorAddress !== "") {
      writer.uint32(34).string(message.editorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlpha {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextAlpha();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.alpha = reader.string();
          break;

        case 3:
          message.editorDid = reader.string();
          break;

        case 4:
          message.editorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetNextAlpha>): MsgSetNextAlpha {
    const message = createBaseMsgSetNextAlpha();
    message.bondDid = object.bondDid ?? "";
    message.alpha = object.alpha ?? "";
    message.editorDid = object.editorDid ?? "";
    message.editorAddress = object.editorAddress ?? "";
    return message;
  }

};

function createBaseMsgSetNextAlphaResponse(): MsgSetNextAlphaResponse {
  return {};
}

export const MsgSetNextAlphaResponse = {
  encode(_: MsgSetNextAlphaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlphaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextAlphaResponse();

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

  fromPartial(_: DeepPartial<MsgSetNextAlphaResponse>): MsgSetNextAlphaResponse {
    const message = createBaseMsgSetNextAlphaResponse();
    return message;
  }

};

function createBaseMsgUpdateBondState(): MsgUpdateBondState {
  return {
    bondDid: "",
    state: "",
    editorDid: "",
    editorAddress: ""
  };
}

export const MsgUpdateBondState = {
  encode(message: MsgUpdateBondState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }

    if (message.editorDid !== "") {
      writer.uint32(26).string(message.editorDid);
    }

    if (message.editorAddress !== "") {
      writer.uint32(34).string(message.editorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBondState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.state = reader.string();
          break;

        case 3:
          message.editorDid = reader.string();
          break;

        case 4:
          message.editorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateBondState>): MsgUpdateBondState {
    const message = createBaseMsgUpdateBondState();
    message.bondDid = object.bondDid ?? "";
    message.state = object.state ?? "";
    message.editorDid = object.editorDid ?? "";
    message.editorAddress = object.editorAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateBondStateResponse(): MsgUpdateBondStateResponse {
  return {};
}

export const MsgUpdateBondStateResponse = {
  encode(_: MsgUpdateBondStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBondStateResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateBondStateResponse>): MsgUpdateBondStateResponse {
    const message = createBaseMsgUpdateBondStateResponse();
    return message;
  }

};

function createBaseMsgBuy(): MsgBuy {
  return {
    buyerDid: "",
    amount: undefined,
    maxPrices: [],
    bondDid: "",
    buyerAddress: ""
  };
}

export const MsgBuy = {
  encode(message: MsgBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyerDid !== "") {
      writer.uint32(10).string(message.buyerDid);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.maxPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.bondDid !== "") {
      writer.uint32(34).string(message.bondDid);
    }

    if (message.buyerAddress !== "") {
      writer.uint32(42).string(message.buyerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buyerDid = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxPrices.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.bondDid = reader.string();
          break;

        case 5:
          message.buyerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBuy>): MsgBuy {
    const message = createBaseMsgBuy();
    message.buyerDid = object.buyerDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.maxPrices = object.maxPrices?.map(e => Coin.fromPartial(e)) || [];
    message.bondDid = object.bondDid ?? "";
    message.buyerAddress = object.buyerAddress ?? "";
    return message;
  }

};

function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}

export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();

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

  fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  }

};

function createBaseMsgSell(): MsgSell {
  return {
    sellerDid: "",
    amount: undefined,
    bondDid: "",
    sellerAddress: ""
  };
}

export const MsgSell = {
  encode(message: MsgSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellerDid !== "") {
      writer.uint32(10).string(message.sellerDid);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }

    if (message.sellerAddress !== "") {
      writer.uint32(34).string(message.sellerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSell();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellerDid = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.bondDid = reader.string();
          break;

        case 4:
          message.sellerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSell>): MsgSell {
    const message = createBaseMsgSell();
    message.sellerDid = object.sellerDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bondDid = object.bondDid ?? "";
    message.sellerAddress = object.sellerAddress ?? "";
    return message;
  }

};

function createBaseMsgSellResponse(): MsgSellResponse {
  return {};
}

export const MsgSellResponse = {
  encode(_: MsgSellResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellResponse();

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

  fromPartial(_: DeepPartial<MsgSellResponse>): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    return message;
  }

};

function createBaseMsgSwap(): MsgSwap {
  return {
    swapperDid: "",
    bondDid: "",
    from: undefined,
    toToken: "",
    swapperAddress: ""
  };
}

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapperDid !== "") {
      writer.uint32(10).string(message.swapperDid);
    }

    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }

    if (message.from !== undefined) {
      Coin.encode(message.from, writer.uint32(26).fork()).ldelim();
    }

    if (message.toToken !== "") {
      writer.uint32(34).string(message.toToken);
    }

    if (message.swapperAddress !== "") {
      writer.uint32(42).string(message.swapperAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.swapperDid = reader.string();
          break;

        case 2:
          message.bondDid = reader.string();
          break;

        case 3:
          message.from = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.toToken = reader.string();
          break;

        case 5:
          message.swapperAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.swapperDid = object.swapperDid ?? "";
    message.bondDid = object.bondDid ?? "";
    message.from = object.from !== undefined && object.from !== null ? Coin.fromPartial(object.from) : undefined;
    message.toToken = object.toToken ?? "";
    message.swapperAddress = object.swapperAddress ?? "";
    return message;
  }

};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();

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

  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }

};

function createBaseMsgMakeOutcomePayment(): MsgMakeOutcomePayment {
  return {
    senderDid: "",
    amount: "",
    bondDid: "",
    senderAddress: ""
  };
}

export const MsgMakeOutcomePayment = {
  encode(message: MsgMakeOutcomePayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }

    if (message.senderAddress !== "") {
      writer.uint32(34).string(message.senderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOutcomePayment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.bondDid = reader.string();
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

  fromPartial(object: DeepPartial<MsgMakeOutcomePayment>): MsgMakeOutcomePayment {
    const message = createBaseMsgMakeOutcomePayment();
    message.senderDid = object.senderDid ?? "";
    message.amount = object.amount ?? "";
    message.bondDid = object.bondDid ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }

};

function createBaseMsgMakeOutcomePaymentResponse(): MsgMakeOutcomePaymentResponse {
  return {};
}

export const MsgMakeOutcomePaymentResponse = {
  encode(_: MsgMakeOutcomePaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOutcomePaymentResponse();

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

  fromPartial(_: DeepPartial<MsgMakeOutcomePaymentResponse>): MsgMakeOutcomePaymentResponse {
    const message = createBaseMsgMakeOutcomePaymentResponse();
    return message;
  }

};

function createBaseMsgWithdrawShare(): MsgWithdrawShare {
  return {
    recipientDid: "",
    bondDid: "",
    recipientAddress: ""
  };
}

export const MsgWithdrawShare = {
  encode(message: MsgWithdrawShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientDid !== "") {
      writer.uint32(10).string(message.recipientDid);
    }

    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }

    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawShare();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipientDid = reader.string();
          break;

        case 2:
          message.bondDid = reader.string();
          break;

        case 3:
          message.recipientAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawShare>): MsgWithdrawShare {
    const message = createBaseMsgWithdrawShare();
    message.recipientDid = object.recipientDid ?? "";
    message.bondDid = object.bondDid ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawShareResponse(): MsgWithdrawShareResponse {
  return {};
}

export const MsgWithdrawShareResponse = {
  encode(_: MsgWithdrawShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawShareResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawShareResponse>): MsgWithdrawShareResponse {
    const message = createBaseMsgWithdrawShareResponse();
    return message;
  }

};

function createBaseMsgWithdrawReserve(): MsgWithdrawReserve {
  return {
    withdrawerDid: "",
    amount: [],
    bondDid: "",
    withdrawerAddress: ""
  };
}

export const MsgWithdrawReserve = {
  encode(message: MsgWithdrawReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerDid !== "") {
      writer.uint32(10).string(message.withdrawerDid);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }

    if (message.withdrawerAddress !== "") {
      writer.uint32(34).string(message.withdrawerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReserve();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawerDid = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.bondDid = reader.string();
          break;

        case 4:
          message.withdrawerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgWithdrawReserve>): MsgWithdrawReserve {
    const message = createBaseMsgWithdrawReserve();
    message.withdrawerDid = object.withdrawerDid ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.bondDid = object.bondDid ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }

};

function createBaseMsgWithdrawReserveResponse(): MsgWithdrawReserveResponse {
  return {};
}

export const MsgWithdrawReserveResponse = {
  encode(_: MsgWithdrawReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReserveResponse();

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

  fromPartial(_: DeepPartial<MsgWithdrawReserveResponse>): MsgWithdrawReserveResponse {
    const message = createBaseMsgWithdrawReserveResponse();
    return message;
  }

};