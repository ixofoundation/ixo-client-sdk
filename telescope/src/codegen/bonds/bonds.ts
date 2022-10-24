import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** FunctionParam is a key-value pair used for specifying a specific bond parameter. */

export interface FunctionParam {
  param: string;
  value: string;
}
/** FunctionParam is a key-value pair used for specifying a specific bond parameter. */

export interface FunctionParamSDKType {
  param: string;
  value: string;
}
/** BondDetails contains details about the current state of a given bond. */

export interface BondDetails {
  bondDid: string;
  spotPrice: DecCoin[];
  supply?: Coin;
  reserve: Coin[];
}
/** BondDetails contains details about the current state of a given bond. */

export interface BondDetailsSDKType {
  bond_did: string;
  spot_price: DecCoinSDKType[];
  supply?: CoinSDKType;
  reserve: CoinSDKType[];
}
/** Bond defines a token bonding curve type with all of its parameters. */

export interface Bond {
  token: string;
  name: string;
  description: string;
  creatorDid: string;
  controllerDid: string;
  functionType: string;
  functionParameters: FunctionParam[];
  reserveTokens: string[];
  txFeePercentage: string;
  exitFeePercentage: string;
  feeAddress: string;
  reserveWithdrawalAddress: string;
  maxSupply?: Coin;
  orderQuantityLimits: Coin[];
  sanityRate: string;
  sanityMarginPercentage: string;
  currentSupply?: Coin;
  currentReserve: Coin[];
  availableReserve: Coin[];
  currentOutcomePaymentReserve: Coin[];
  allowSells: boolean;
  allowReserveWithdrawals: boolean;
  alphaBond: boolean;
  batchBlocks: string;
  outcomePayment: string;
  state: string;
  bondDid: string;
}
/** Bond defines a token bonding curve type with all of its parameters. */

export interface BondSDKType {
  token: string;
  name: string;
  description: string;
  creator_did: string;
  controller_did: string;
  function_type: string;
  function_parameters: FunctionParamSDKType[];
  reserve_tokens: string[];
  tx_fee_percentage: string;
  exit_fee_percentage: string;
  fee_address: string;
  reserve_withdrawal_address: string;
  max_supply?: CoinSDKType;
  order_quantity_limits: CoinSDKType[];
  sanity_rate: string;
  sanity_margin_percentage: string;
  current_supply?: CoinSDKType;
  current_reserve: CoinSDKType[];
  available_reserve: CoinSDKType[];
  current_outcome_payment_reserve: CoinSDKType[];
  allow_sells: boolean;
  allow_reserve_withdrawals: boolean;
  alpha_bond: boolean;
  batch_blocks: string;
  outcome_payment: string;
  state: string;
  bond_did: string;
}
/**
 * BaseOrder defines a base order type. It contains all the necessary fields for specifying
 * the general details about a buy, sell, or swap order.
 */

export interface BaseOrder {
  accountDid: string;
  amount?: Coin;
  cancelled: boolean;
  cancelReason: string;
}
/**
 * BaseOrder defines a base order type. It contains all the necessary fields for specifying
 * the general details about a buy, sell, or swap order.
 */

export interface BaseOrderSDKType {
  account_did: string;
  amount?: CoinSDKType;
  cancelled: boolean;
  cancel_reason: string;
}
/**
 * BuyOrder defines a type for submitting a buy order on a bond, together with the maximum
 * amount of reserve tokens the buyer is willing to pay.
 */

export interface BuyOrder {
  baseOrder?: BaseOrder;
  maxPrices: Coin[];
}
/**
 * BuyOrder defines a type for submitting a buy order on a bond, together with the maximum
 * amount of reserve tokens the buyer is willing to pay.
 */

export interface BuyOrderSDKType {
  base_order?: BaseOrderSDKType;
  max_prices: CoinSDKType[];
}
/** SellOrder defines a type for submitting a sell order on a bond. */

export interface SellOrder {
  baseOrder?: BaseOrder;
}
/** SellOrder defines a type for submitting a sell order on a bond. */

export interface SellOrderSDKType {
  base_order?: BaseOrderSDKType;
}
/** SwapOrder defines a type for submitting a swap order between two tokens on a bond. */

export interface SwapOrder {
  baseOrder?: BaseOrder;
  toToken: string;
}
/** SwapOrder defines a type for submitting a swap order between two tokens on a bond. */

export interface SwapOrderSDKType {
  base_order?: BaseOrderSDKType;
  to_token: string;
}
/** Batch holds a collection of outstanding buy, sell, and swap orders on a particular bond. */

export interface Batch {
  bondDid: string;
  blocksRemaining: string;
  nextPublicAlpha: string;
  totalBuyAmount?: Coin;
  totalSellAmount?: Coin;
  buyPrices: DecCoin[];
  sellPrices: DecCoin[];
  buys: BuyOrder[];
  sells: SellOrder[];
  swaps: SwapOrder[];
}
/** Batch holds a collection of outstanding buy, sell, and swap orders on a particular bond. */

export interface BatchSDKType {
  bond_did: string;
  blocks_remaining: string;
  next_public_alpha: string;
  total_buy_amount?: CoinSDKType;
  total_sell_amount?: CoinSDKType;
  buy_prices: DecCoinSDKType[];
  sell_prices: DecCoinSDKType[];
  buys: BuyOrderSDKType[];
  sells: SellOrderSDKType[];
  swaps: SwapOrderSDKType[];
}
/** Params defines the parameters for the bonds module. */

export interface Params {
  reservedBondTokens: string[];
}
/** Params defines the parameters for the bonds module. */

export interface ParamsSDKType {
  reserved_bond_tokens: string[];
}

function createBaseFunctionParam(): FunctionParam {
  return {
    param: "",
    value: ""
  };
}

export const FunctionParam = {
  encode(message: FunctionParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.param !== "") {
      writer.uint32(10).string(message.param);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunctionParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.param = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FunctionParam>): FunctionParam {
    const message = createBaseFunctionParam();
    message.param = object.param ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseBondDetails(): BondDetails {
  return {
    bondDid: "",
    spotPrice: [],
    supply: undefined,
    reserve: []
  };
}

export const BondDetails = {
  encode(message: BondDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    for (const v of message.spotPrice) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.supply !== undefined) {
      Coin.encode(message.supply, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.reserve) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondDetails();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.spotPrice.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supply = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.reserve.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BondDetails>): BondDetails {
    const message = createBaseBondDetails();
    message.bondDid = object.bondDid ?? "";
    message.spotPrice = object.spotPrice?.map(e => DecCoin.fromPartial(e)) || [];
    message.supply = object.supply !== undefined && object.supply !== null ? Coin.fromPartial(object.supply) : undefined;
    message.reserve = object.reserve?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBond(): Bond {
  return {
    token: "",
    name: "",
    description: "",
    creatorDid: "",
    controllerDid: "",
    functionType: "",
    functionParameters: [],
    reserveTokens: [],
    txFeePercentage: "",
    exitFeePercentage: "",
    feeAddress: "",
    reserveWithdrawalAddress: "",
    maxSupply: undefined,
    orderQuantityLimits: [],
    sanityRate: "",
    sanityMarginPercentage: "",
    currentSupply: undefined,
    currentReserve: [],
    availableReserve: [],
    currentOutcomePaymentReserve: [],
    allowSells: false,
    allowReserveWithdrawals: false,
    alphaBond: false,
    batchBlocks: "",
    outcomePayment: "",
    state: "",
    bondDid: ""
  };
}

export const Bond = {
  encode(message: Bond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.creatorDid !== "") {
      writer.uint32(34).string(message.creatorDid);
    }

    if (message.controllerDid !== "") {
      writer.uint32(42).string(message.controllerDid);
    }

    if (message.functionType !== "") {
      writer.uint32(50).string(message.functionType);
    }

    for (const v of message.functionParameters) {
      FunctionParam.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.reserveTokens) {
      writer.uint32(66).string(v!);
    }

    if (message.txFeePercentage !== "") {
      writer.uint32(74).string(message.txFeePercentage);
    }

    if (message.exitFeePercentage !== "") {
      writer.uint32(82).string(message.exitFeePercentage);
    }

    if (message.feeAddress !== "") {
      writer.uint32(90).string(message.feeAddress);
    }

    if (message.reserveWithdrawalAddress !== "") {
      writer.uint32(98).string(message.reserveWithdrawalAddress);
    }

    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(106).fork()).ldelim();
    }

    for (const v of message.orderQuantityLimits) {
      Coin.encode(v!, writer.uint32(114).fork()).ldelim();
    }

    if (message.sanityRate !== "") {
      writer.uint32(122).string(message.sanityRate);
    }

    if (message.sanityMarginPercentage !== "") {
      writer.uint32(130).string(message.sanityMarginPercentage);
    }

    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(138).fork()).ldelim();
    }

    for (const v of message.currentReserve) {
      Coin.encode(v!, writer.uint32(146).fork()).ldelim();
    }

    for (const v of message.availableReserve) {
      Coin.encode(v!, writer.uint32(154).fork()).ldelim();
    }

    for (const v of message.currentOutcomePaymentReserve) {
      Coin.encode(v!, writer.uint32(162).fork()).ldelim();
    }

    if (message.allowSells === true) {
      writer.uint32(168).bool(message.allowSells);
    }

    if (message.allowReserveWithdrawals === true) {
      writer.uint32(176).bool(message.allowReserveWithdrawals);
    }

    if (message.alphaBond === true) {
      writer.uint32(184).bool(message.alphaBond);
    }

    if (message.batchBlocks !== "") {
      writer.uint32(194).string(message.batchBlocks);
    }

    if (message.outcomePayment !== "") {
      writer.uint32(202).string(message.outcomePayment);
    }

    if (message.state !== "") {
      writer.uint32(210).string(message.state);
    }

    if (message.bondDid !== "") {
      writer.uint32(218).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.creatorDid = reader.string();
          break;

        case 5:
          message.controllerDid = reader.string();
          break;

        case 6:
          message.functionType = reader.string();
          break;

        case 7:
          message.functionParameters.push(FunctionParam.decode(reader, reader.uint32()));
          break;

        case 8:
          message.reserveTokens.push(reader.string());
          break;

        case 9:
          message.txFeePercentage = reader.string();
          break;

        case 10:
          message.exitFeePercentage = reader.string();
          break;

        case 11:
          message.feeAddress = reader.string();
          break;

        case 12:
          message.reserveWithdrawalAddress = reader.string();
          break;

        case 13:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;

        case 14:
          message.orderQuantityLimits.push(Coin.decode(reader, reader.uint32()));
          break;

        case 15:
          message.sanityRate = reader.string();
          break;

        case 16:
          message.sanityMarginPercentage = reader.string();
          break;

        case 17:
          message.currentSupply = Coin.decode(reader, reader.uint32());
          break;

        case 18:
          message.currentReserve.push(Coin.decode(reader, reader.uint32()));
          break;

        case 19:
          message.availableReserve.push(Coin.decode(reader, reader.uint32()));
          break;

        case 20:
          message.currentOutcomePaymentReserve.push(Coin.decode(reader, reader.uint32()));
          break;

        case 21:
          message.allowSells = reader.bool();
          break;

        case 22:
          message.allowReserveWithdrawals = reader.bool();
          break;

        case 23:
          message.alphaBond = reader.bool();
          break;

        case 24:
          message.batchBlocks = reader.string();
          break;

        case 25:
          message.outcomePayment = reader.string();
          break;

        case 26:
          message.state = reader.string();
          break;

        case 27:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Bond>): Bond {
    const message = createBaseBond();
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creatorDid = object.creatorDid ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.functionType = object.functionType ?? "";
    message.functionParameters = object.functionParameters?.map(e => FunctionParam.fromPartial(e)) || [];
    message.reserveTokens = object.reserveTokens?.map(e => e) || [];
    message.txFeePercentage = object.txFeePercentage ?? "";
    message.exitFeePercentage = object.exitFeePercentage ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.reserveWithdrawalAddress = object.reserveWithdrawalAddress ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
    message.orderQuantityLimits = object.orderQuantityLimits?.map(e => Coin.fromPartial(e)) || [];
    message.sanityRate = object.sanityRate ?? "";
    message.sanityMarginPercentage = object.sanityMarginPercentage ?? "";
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.currentReserve = object.currentReserve?.map(e => Coin.fromPartial(e)) || [];
    message.availableReserve = object.availableReserve?.map(e => Coin.fromPartial(e)) || [];
    message.currentOutcomePaymentReserve = object.currentOutcomePaymentReserve?.map(e => Coin.fromPartial(e)) || [];
    message.allowSells = object.allowSells ?? false;
    message.allowReserveWithdrawals = object.allowReserveWithdrawals ?? false;
    message.alphaBond = object.alphaBond ?? false;
    message.batchBlocks = object.batchBlocks ?? "";
    message.outcomePayment = object.outcomePayment ?? "";
    message.state = object.state ?? "";
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseBaseOrder(): BaseOrder {
  return {
    accountDid: "",
    amount: undefined,
    cancelled: false,
    cancelReason: ""
  };
}

export const BaseOrder = {
  encode(message: BaseOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountDid !== "") {
      writer.uint32(10).string(message.accountDid);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.cancelled === true) {
      writer.uint32(24).bool(message.cancelled);
    }

    if (message.cancelReason !== "") {
      writer.uint32(34).string(message.cancelReason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountDid = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.cancelled = reader.bool();
          break;

        case 4:
          message.cancelReason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseOrder>): BaseOrder {
    const message = createBaseBaseOrder();
    message.accountDid = object.accountDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.cancelled = object.cancelled ?? false;
    message.cancelReason = object.cancelReason ?? "";
    return message;
  }

};

function createBaseBuyOrder(): BuyOrder {
  return {
    baseOrder: undefined,
    maxPrices: []
  };
}

export const BuyOrder = {
  encode(message: BuyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseOrder !== undefined) {
      BaseOrder.encode(message.baseOrder, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.maxPrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseOrder = BaseOrder.decode(reader, reader.uint32());
          break;

        case 2:
          message.maxPrices.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BuyOrder>): BuyOrder {
    const message = createBaseBuyOrder();
    message.baseOrder = object.baseOrder !== undefined && object.baseOrder !== null ? BaseOrder.fromPartial(object.baseOrder) : undefined;
    message.maxPrices = object.maxPrices?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSellOrder(): SellOrder {
  return {
    baseOrder: undefined
  };
}

export const SellOrder = {
  encode(message: SellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseOrder !== undefined) {
      BaseOrder.encode(message.baseOrder, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseOrder = BaseOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SellOrder>): SellOrder {
    const message = createBaseSellOrder();
    message.baseOrder = object.baseOrder !== undefined && object.baseOrder !== null ? BaseOrder.fromPartial(object.baseOrder) : undefined;
    return message;
  }

};

function createBaseSwapOrder(): SwapOrder {
  return {
    baseOrder: undefined,
    toToken: ""
  };
}

export const SwapOrder = {
  encode(message: SwapOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseOrder !== undefined) {
      BaseOrder.encode(message.baseOrder, writer.uint32(10).fork()).ldelim();
    }

    if (message.toToken !== "") {
      writer.uint32(18).string(message.toToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseOrder = BaseOrder.decode(reader, reader.uint32());
          break;

        case 2:
          message.toToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SwapOrder>): SwapOrder {
    const message = createBaseSwapOrder();
    message.baseOrder = object.baseOrder !== undefined && object.baseOrder !== null ? BaseOrder.fromPartial(object.baseOrder) : undefined;
    message.toToken = object.toToken ?? "";
    return message;
  }

};

function createBaseBatch(): Batch {
  return {
    bondDid: "",
    blocksRemaining: "",
    nextPublicAlpha: "",
    totalBuyAmount: undefined,
    totalSellAmount: undefined,
    buyPrices: [],
    sellPrices: [],
    buys: [],
    sells: [],
    swaps: []
  };
}

export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.blocksRemaining !== "") {
      writer.uint32(18).string(message.blocksRemaining);
    }

    if (message.nextPublicAlpha !== "") {
      writer.uint32(26).string(message.nextPublicAlpha);
    }

    if (message.totalBuyAmount !== undefined) {
      Coin.encode(message.totalBuyAmount, writer.uint32(34).fork()).ldelim();
    }

    if (message.totalSellAmount !== undefined) {
      Coin.encode(message.totalSellAmount, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.buyPrices) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.sellPrices) {
      DecCoin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.buys) {
      BuyOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.sells) {
      SellOrder.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.swaps) {
      SwapOrder.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.blocksRemaining = reader.string();
          break;

        case 3:
          message.nextPublicAlpha = reader.string();
          break;

        case 4:
          message.totalBuyAmount = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.totalSellAmount = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.buyPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.sellPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.buys.push(BuyOrder.decode(reader, reader.uint32()));
          break;

        case 9:
          message.sells.push(SellOrder.decode(reader, reader.uint32()));
          break;

        case 10:
          message.swaps.push(SwapOrder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Batch>): Batch {
    const message = createBaseBatch();
    message.bondDid = object.bondDid ?? "";
    message.blocksRemaining = object.blocksRemaining ?? "";
    message.nextPublicAlpha = object.nextPublicAlpha ?? "";
    message.totalBuyAmount = object.totalBuyAmount !== undefined && object.totalBuyAmount !== null ? Coin.fromPartial(object.totalBuyAmount) : undefined;
    message.totalSellAmount = object.totalSellAmount !== undefined && object.totalSellAmount !== null ? Coin.fromPartial(object.totalSellAmount) : undefined;
    message.buyPrices = object.buyPrices?.map(e => DecCoin.fromPartial(e)) || [];
    message.sellPrices = object.sellPrices?.map(e => DecCoin.fromPartial(e)) || [];
    message.buys = object.buys?.map(e => BuyOrder.fromPartial(e)) || [];
    message.sells = object.sells?.map(e => SellOrder.fromPartial(e)) || [];
    message.swaps = object.swaps?.map(e => SwapOrder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    reservedBondTokens: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reservedBondTokens) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reservedBondTokens.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.reservedBondTokens = object.reservedBondTokens?.map(e => e) || [];
    return message;
  }

};