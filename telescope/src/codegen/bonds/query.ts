import { BondDetails, BondDetailsSDKType, Bond, BondSDKType, Batch, BatchSDKType, Params, ParamsSDKType } from "./bonds";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** QueryBondsRequest is the request type for the Query/Bonds RPC method. */

export interface QueryBondsRequest {}
/** QueryBondsRequest is the request type for the Query/Bonds RPC method. */

export interface QueryBondsRequestSDKType {}
/** QueryBondsResponse is the response type for the Query/Bonds RPC method. */

export interface QueryBondsResponse {
  bonds: string[];
}
/** QueryBondsResponse is the response type for the Query/Bonds RPC method. */

export interface QueryBondsResponseSDKType {
  bonds: string[];
}
/** QueryBondsDetailedRequest is the request type for the Query/BondsDetailed RPC method. */

export interface QueryBondsDetailedRequest {}
/** QueryBondsDetailedRequest is the request type for the Query/BondsDetailed RPC method. */

export interface QueryBondsDetailedRequestSDKType {}
/** QueryBondsDetailedResponse is the response type for the Query/BondsDetailed RPC method. */

export interface QueryBondsDetailedResponse {
  bondsDetailed: BondDetails[];
}
/** QueryBondsDetailedResponse is the response type for the Query/BondsDetailed RPC method. */

export interface QueryBondsDetailedResponseSDKType {
  bonds_detailed: BondDetailsSDKType[];
}
/** QueryBondRequest is the request type for the Query/Bond RPC method. */

export interface QueryBondRequest {
  bondDid: string;
}
/** QueryBondRequest is the request type for the Query/Bond RPC method. */

export interface QueryBondRequestSDKType {
  bond_did: string;
}
/** QueryBondResponse is the response type for the Query/Bond RPC method. */

export interface QueryBondResponse {
  bond?: Bond;
}
/** QueryBondResponse is the response type for the Query/Bond RPC method. */

export interface QueryBondResponseSDKType {
  bond?: BondSDKType;
}
/** QueryBatchRequest is the request type for the Query/Batch RPC method. */

export interface QueryBatchRequest {
  bondDid: string;
}
/** QueryBatchRequest is the request type for the Query/Batch RPC method. */

export interface QueryBatchRequestSDKType {
  bond_did: string;
}
/** QueryBatchResponse is the response type for the Query/Batch RPC method. */

export interface QueryBatchResponse {
  batch?: Batch;
}
/** QueryBatchResponse is the response type for the Query/Batch RPC method. */

export interface QueryBatchResponseSDKType {
  batch?: BatchSDKType;
}
/** QueryLastBatchRequest is the request type for the Query/LastBatch RPC method. */

export interface QueryLastBatchRequest {
  bondDid: string;
}
/** QueryLastBatchRequest is the request type for the Query/LastBatch RPC method. */

export interface QueryLastBatchRequestSDKType {
  bond_did: string;
}
/** QueryLastBatchResponse is the response type for the Query/LastBatch RPC method. */

export interface QueryLastBatchResponse {
  lastBatch?: Batch;
}
/** QueryLastBatchResponse is the response type for the Query/LastBatch RPC method. */

export interface QueryLastBatchResponseSDKType {
  last_batch?: BatchSDKType;
}
/** QueryCurrentPriceRequest is the request type for the Query/CurrentPrice RPC method. */

export interface QueryCurrentPriceRequest {
  bondDid: string;
}
/** QueryCurrentPriceRequest is the request type for the Query/CurrentPrice RPC method. */

export interface QueryCurrentPriceRequestSDKType {
  bond_did: string;
}
/** QueryCurrentPriceResponse is the response type for the Query/CurrentPrice RPC method. */

export interface QueryCurrentPriceResponse {
  currentPrice: DecCoin[];
}
/** QueryCurrentPriceResponse is the response type for the Query/CurrentPrice RPC method. */

export interface QueryCurrentPriceResponseSDKType {
  current_price: DecCoinSDKType[];
}
/** QueryCurrentReserveRequest is the request type for the Query/CurrentReserve RPC method. */

export interface QueryCurrentReserveRequest {
  bondDid: string;
}
/** QueryCurrentReserveRequest is the request type for the Query/CurrentReserve RPC method. */

export interface QueryCurrentReserveRequestSDKType {
  bond_did: string;
}
/** QueryCurrentReserveResponse is the response type for the Query/CurrentReserve RPC method. */

export interface QueryCurrentReserveResponse {
  currentReserve: Coin[];
}
/** QueryCurrentReserveResponse is the response type for the Query/CurrentReserve RPC method. */

export interface QueryCurrentReserveResponseSDKType {
  current_reserve: CoinSDKType[];
}
/** QueryAvailableReserveRequest is the request type for the Query/AvailableReserve RPC method. */

export interface QueryAvailableReserveRequest {
  bondDid: string;
}
/** QueryAvailableReserveRequest is the request type for the Query/AvailableReserve RPC method. */

export interface QueryAvailableReserveRequestSDKType {
  bond_did: string;
}
/** QueryAvailableReserveResponse is the response type for the Query/AvailableReserve RPC method. */

export interface QueryAvailableReserveResponse {
  availableReserve: Coin[];
}
/** QueryAvailableReserveResponse is the response type for the Query/AvailableReserve RPC method. */

export interface QueryAvailableReserveResponseSDKType {
  available_reserve: CoinSDKType[];
}
/** QueryCustomPriceRequest is the request type for the Query/CustomPrice RPC method. */

export interface QueryCustomPriceRequest {
  bondDid: string;
  bondAmount: string;
}
/** QueryCustomPriceRequest is the request type for the Query/CustomPrice RPC method. */

export interface QueryCustomPriceRequestSDKType {
  bond_did: string;
  bond_amount: string;
}
/** QueryCustomPriceResponse is the response type for the Query/CustomPrice RPC method. */

export interface QueryCustomPriceResponse {
  price: DecCoin[];
}
/** QueryCustomPriceResponse is the response type for the Query/CustomPrice RPC method. */

export interface QueryCustomPriceResponseSDKType {
  price: DecCoinSDKType[];
}
/** QueryCustomPriceRequest is the request type for the Query/BuyPrice RPC method. */

export interface QueryBuyPriceRequest {
  bondDid: string;
  bondAmount: string;
}
/** QueryCustomPriceRequest is the request type for the Query/BuyPrice RPC method. */

export interface QueryBuyPriceRequestSDKType {
  bond_did: string;
  bond_amount: string;
}
/** QueryCustomPriceResponse is the response type for the Query/BuyPrice RPC method. */

export interface QueryBuyPriceResponse {
  adjustedSupply?: Coin;
  prices: Coin[];
  txFees: Coin[];
  totalPrices: Coin[];
  totalFees: Coin[];
}
/** QueryCustomPriceResponse is the response type for the Query/BuyPrice RPC method. */

export interface QueryBuyPriceResponseSDKType {
  adjusted_supply?: CoinSDKType;
  prices: CoinSDKType[];
  tx_fees: CoinSDKType[];
  total_prices: CoinSDKType[];
  total_fees: CoinSDKType[];
}
/** QuerySellReturnRequest is the request type for the Query/SellReturn RPC method. */

export interface QuerySellReturnRequest {
  bondDid: string;
  bondAmount: string;
}
/** QuerySellReturnRequest is the request type for the Query/SellReturn RPC method. */

export interface QuerySellReturnRequestSDKType {
  bond_did: string;
  bond_amount: string;
}
/** QuerySellReturnResponse is the response type for the Query/SellReturn RPC method. */

export interface QuerySellReturnResponse {
  adjustedSupply?: Coin;
  returns: Coin[];
  txFees: Coin[];
  exitFees: Coin[];
  totalReturns: Coin[];
  totalFees: Coin[];
}
/** QuerySellReturnResponse is the response type for the Query/SellReturn RPC method. */

export interface QuerySellReturnResponseSDKType {
  adjusted_supply?: CoinSDKType;
  returns: CoinSDKType[];
  tx_fees: CoinSDKType[];
  exit_fees: CoinSDKType[];
  total_returns: CoinSDKType[];
  total_fees: CoinSDKType[];
}
/** QuerySwapReturnRequest is the request type for the Query/SwapReturn RPC method. */

export interface QuerySwapReturnRequest {
  bondDid: string;
  fromTokenWithAmount: string;
  toToken: string;
}
/** QuerySwapReturnRequest is the request type for the Query/SwapReturn RPC method. */

export interface QuerySwapReturnRequestSDKType {
  bond_did: string;
  from_token_with_amount: string;
  to_token: string;
}
/** QuerySwapReturnResponse is the response type for the Query/SwapReturn RPC method. */

export interface QuerySwapReturnResponse {
  totalReturns: Coin[];
  totalFees: Coin[];
}
/** QuerySwapReturnResponse is the response type for the Query/SwapReturn RPC method. */

export interface QuerySwapReturnResponseSDKType {
  total_returns: CoinSDKType[];
  total_fees: CoinSDKType[];
}
/** QueryAlphaMaximumsRequest is the request type for the Query/AlphaMaximums RPC method. */

export interface QueryAlphaMaximumsRequest {
  bondDid: string;
}
/** QueryAlphaMaximumsRequest is the request type for the Query/AlphaMaximums RPC method. */

export interface QueryAlphaMaximumsRequestSDKType {
  bond_did: string;
}
/** QueryAlphaMaximumsResponse is the response type for the Query/AlphaMaximums RPC method. */

export interface QueryAlphaMaximumsResponse {
  maxSystemAlphaIncrease: string;
  maxSystemAlpha: string;
}
/** QueryAlphaMaximumsResponse is the response type for the Query/AlphaMaximums RPC method. */

export interface QueryAlphaMaximumsResponseSDKType {
  max_system_alpha_increase: string;
  max_system_alpha: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseQueryBondsRequest(): QueryBondsRequest {
  return {};
}

export const QueryBondsRequest = {
  encode(_: QueryBondsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondsRequest();

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

  fromPartial(_: DeepPartial<QueryBondsRequest>): QueryBondsRequest {
    const message = createBaseQueryBondsRequest();
    return message;
  }

};

function createBaseQueryBondsResponse(): QueryBondsResponse {
  return {
    bonds: []
  };
}

export const QueryBondsResponse = {
  encode(message: QueryBondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bonds) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bonds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondsResponse>): QueryBondsResponse {
    const message = createBaseQueryBondsResponse();
    message.bonds = object.bonds?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryBondsDetailedRequest(): QueryBondsDetailedRequest {
  return {};
}

export const QueryBondsDetailedRequest = {
  encode(_: QueryBondsDetailedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsDetailedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondsDetailedRequest();

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

  fromPartial(_: DeepPartial<QueryBondsDetailedRequest>): QueryBondsDetailedRequest {
    const message = createBaseQueryBondsDetailedRequest();
    return message;
  }

};

function createBaseQueryBondsDetailedResponse(): QueryBondsDetailedResponse {
  return {
    bondsDetailed: []
  };
}

export const QueryBondsDetailedResponse = {
  encode(message: QueryBondsDetailedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bondsDetailed) {
      BondDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondsDetailedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondsDetailedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondsDetailed.push(BondDetails.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondsDetailedResponse>): QueryBondsDetailedResponse {
    const message = createBaseQueryBondsDetailedResponse();
    message.bondsDetailed = object.bondsDetailed?.map(e => BondDetails.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBondRequest(): QueryBondRequest {
  return {
    bondDid: ""
  };
}

export const QueryBondRequest = {
  encode(message: QueryBondRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondRequest>): QueryBondRequest {
    const message = createBaseQueryBondRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryBondResponse(): QueryBondResponse {
  return {
    bond: undefined
  };
}

export const QueryBondResponse = {
  encode(message: QueryBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBondResponse>): QueryBondResponse {
    const message = createBaseQueryBondResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }

};

function createBaseQueryBatchRequest(): QueryBatchRequest {
  return {
    bondDid: ""
  };
}

export const QueryBatchRequest = {
  encode(message: QueryBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBatchRequest>): QueryBatchRequest {
    const message = createBaseQueryBatchRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryBatchResponse(): QueryBatchResponse {
  return {
    batch: undefined
  };
}

export const QueryBatchResponse = {
  encode(message: QueryBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      Batch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batch = Batch.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBatchResponse>): QueryBatchResponse {
    const message = createBaseQueryBatchResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? Batch.fromPartial(object.batch) : undefined;
    return message;
  }

};

function createBaseQueryLastBatchRequest(): QueryLastBatchRequest {
  return {
    bondDid: ""
  };
}

export const QueryLastBatchRequest = {
  encode(message: QueryLastBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBatchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLastBatchRequest>): QueryLastBatchRequest {
    const message = createBaseQueryLastBatchRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryLastBatchResponse(): QueryLastBatchResponse {
  return {
    lastBatch: undefined
  };
}

export const QueryLastBatchResponse = {
  encode(message: QueryLastBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastBatch !== undefined) {
      Batch.encode(message.lastBatch, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lastBatch = Batch.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLastBatchResponse>): QueryLastBatchResponse {
    const message = createBaseQueryLastBatchResponse();
    message.lastBatch = object.lastBatch !== undefined && object.lastBatch !== null ? Batch.fromPartial(object.lastBatch) : undefined;
    return message;
  }

};

function createBaseQueryCurrentPriceRequest(): QueryCurrentPriceRequest {
  return {
    bondDid: ""
  };
}

export const QueryCurrentPriceRequest = {
  encode(message: QueryCurrentPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentPriceRequest>): QueryCurrentPriceRequest {
    const message = createBaseQueryCurrentPriceRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryCurrentPriceResponse(): QueryCurrentPriceResponse {
  return {
    currentPrice: []
  };
}

export const QueryCurrentPriceResponse = {
  encode(message: QueryCurrentPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.currentPrice) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentPrice.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentPriceResponse>): QueryCurrentPriceResponse {
    const message = createBaseQueryCurrentPriceResponse();
    message.currentPrice = object.currentPrice?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCurrentReserveRequest(): QueryCurrentReserveRequest {
  return {
    bondDid: ""
  };
}

export const QueryCurrentReserveRequest = {
  encode(message: QueryCurrentReserveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentReserveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentReserveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentReserveRequest>): QueryCurrentReserveRequest {
    const message = createBaseQueryCurrentReserveRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryCurrentReserveResponse(): QueryCurrentReserveResponse {
  return {
    currentReserve: []
  };
}

export const QueryCurrentReserveResponse = {
  encode(message: QueryCurrentReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.currentReserve) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentReserveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentReserve.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentReserveResponse>): QueryCurrentReserveResponse {
    const message = createBaseQueryCurrentReserveResponse();
    message.currentReserve = object.currentReserve?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAvailableReserveRequest(): QueryAvailableReserveRequest {
  return {
    bondDid: ""
  };
}

export const QueryAvailableReserveRequest = {
  encode(message: QueryAvailableReserveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAvailableReserveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableReserveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAvailableReserveRequest>): QueryAvailableReserveRequest {
    const message = createBaseQueryAvailableReserveRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryAvailableReserveResponse(): QueryAvailableReserveResponse {
  return {
    availableReserve: []
  };
}

export const QueryAvailableReserveResponse = {
  encode(message: QueryAvailableReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.availableReserve) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAvailableReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableReserveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.availableReserve.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAvailableReserveResponse>): QueryAvailableReserveResponse {
    const message = createBaseQueryAvailableReserveResponse();
    message.availableReserve = object.availableReserve?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCustomPriceRequest(): QueryCustomPriceRequest {
  return {
    bondDid: "",
    bondAmount: ""
  };
}

export const QueryCustomPriceRequest = {
  encode(message: QueryCustomPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.bondAmount !== "") {
      writer.uint32(18).string(message.bondAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCustomPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCustomPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.bondAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCustomPriceRequest>): QueryCustomPriceRequest {
    const message = createBaseQueryCustomPriceRequest();
    message.bondDid = object.bondDid ?? "";
    message.bondAmount = object.bondAmount ?? "";
    return message;
  }

};

function createBaseQueryCustomPriceResponse(): QueryCustomPriceResponse {
  return {
    price: []
  };
}

export const QueryCustomPriceResponse = {
  encode(message: QueryCustomPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.price) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCustomPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCustomPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCustomPriceResponse>): QueryCustomPriceResponse {
    const message = createBaseQueryCustomPriceResponse();
    message.price = object.price?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBuyPriceRequest(): QueryBuyPriceRequest {
  return {
    bondDid: "",
    bondAmount: ""
  };
}

export const QueryBuyPriceRequest = {
  encode(message: QueryBuyPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.bondAmount !== "") {
      writer.uint32(18).string(message.bondAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuyPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.bondAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBuyPriceRequest>): QueryBuyPriceRequest {
    const message = createBaseQueryBuyPriceRequest();
    message.bondDid = object.bondDid ?? "";
    message.bondAmount = object.bondAmount ?? "";
    return message;
  }

};

function createBaseQueryBuyPriceResponse(): QueryBuyPriceResponse {
  return {
    adjustedSupply: undefined,
    prices: [],
    txFees: [],
    totalPrices: [],
    totalFees: []
  };
}

export const QueryBuyPriceResponse = {
  encode(message: QueryBuyPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adjustedSupply !== undefined) {
      Coin.encode(message.adjustedSupply, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.prices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.txFees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.totalPrices) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.totalFees) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuyPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.adjustedSupply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.prices.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.txFees.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalPrices.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalFees.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBuyPriceResponse>): QueryBuyPriceResponse {
    const message = createBaseQueryBuyPriceResponse();
    message.adjustedSupply = object.adjustedSupply !== undefined && object.adjustedSupply !== null ? Coin.fromPartial(object.adjustedSupply) : undefined;
    message.prices = object.prices?.map(e => Coin.fromPartial(e)) || [];
    message.txFees = object.txFees?.map(e => Coin.fromPartial(e)) || [];
    message.totalPrices = object.totalPrices?.map(e => Coin.fromPartial(e)) || [];
    message.totalFees = object.totalFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySellReturnRequest(): QuerySellReturnRequest {
  return {
    bondDid: "",
    bondAmount: ""
  };
}

export const QuerySellReturnRequest = {
  encode(message: QuerySellReturnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.bondAmount !== "") {
      writer.uint32(18).string(message.bondAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellReturnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellReturnRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.bondAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySellReturnRequest>): QuerySellReturnRequest {
    const message = createBaseQuerySellReturnRequest();
    message.bondDid = object.bondDid ?? "";
    message.bondAmount = object.bondAmount ?? "";
    return message;
  }

};

function createBaseQuerySellReturnResponse(): QuerySellReturnResponse {
  return {
    adjustedSupply: undefined,
    returns: [],
    txFees: [],
    exitFees: [],
    totalReturns: [],
    totalFees: []
  };
}

export const QuerySellReturnResponse = {
  encode(message: QuerySellReturnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adjustedSupply !== undefined) {
      Coin.encode(message.adjustedSupply, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.returns) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.txFees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.exitFees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.totalReturns) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.totalFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellReturnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellReturnResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.adjustedSupply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.returns.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.txFees.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.exitFees.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalReturns.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.totalFees.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySellReturnResponse>): QuerySellReturnResponse {
    const message = createBaseQuerySellReturnResponse();
    message.adjustedSupply = object.adjustedSupply !== undefined && object.adjustedSupply !== null ? Coin.fromPartial(object.adjustedSupply) : undefined;
    message.returns = object.returns?.map(e => Coin.fromPartial(e)) || [];
    message.txFees = object.txFees?.map(e => Coin.fromPartial(e)) || [];
    message.exitFees = object.exitFees?.map(e => Coin.fromPartial(e)) || [];
    message.totalReturns = object.totalReturns?.map(e => Coin.fromPartial(e)) || [];
    message.totalFees = object.totalFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySwapReturnRequest(): QuerySwapReturnRequest {
  return {
    bondDid: "",
    fromTokenWithAmount: "",
    toToken: ""
  };
}

export const QuerySwapReturnRequest = {
  encode(message: QuerySwapReturnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    if (message.fromTokenWithAmount !== "") {
      writer.uint32(18).string(message.fromTokenWithAmount);
    }

    if (message.toToken !== "") {
      writer.uint32(26).string(message.toToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapReturnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapReturnRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        case 2:
          message.fromTokenWithAmount = reader.string();
          break;

        case 3:
          message.toToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySwapReturnRequest>): QuerySwapReturnRequest {
    const message = createBaseQuerySwapReturnRequest();
    message.bondDid = object.bondDid ?? "";
    message.fromTokenWithAmount = object.fromTokenWithAmount ?? "";
    message.toToken = object.toToken ?? "";
    return message;
  }

};

function createBaseQuerySwapReturnResponse(): QuerySwapReturnResponse {
  return {
    totalReturns: [],
    totalFees: []
  };
}

export const QuerySwapReturnResponse = {
  encode(message: QuerySwapReturnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalReturns) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalFees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapReturnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapReturnResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalReturns.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalFees.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySwapReturnResponse>): QuerySwapReturnResponse {
    const message = createBaseQuerySwapReturnResponse();
    message.totalReturns = object.totalReturns?.map(e => Coin.fromPartial(e)) || [];
    message.totalFees = object.totalFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAlphaMaximumsRequest(): QueryAlphaMaximumsRequest {
  return {
    bondDid: ""
  };
}

export const QueryAlphaMaximumsRequest = {
  encode(message: QueryAlphaMaximumsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlphaMaximumsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlphaMaximumsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAlphaMaximumsRequest>): QueryAlphaMaximumsRequest {
    const message = createBaseQueryAlphaMaximumsRequest();
    message.bondDid = object.bondDid ?? "";
    return message;
  }

};

function createBaseQueryAlphaMaximumsResponse(): QueryAlphaMaximumsResponse {
  return {
    maxSystemAlphaIncrease: "",
    maxSystemAlpha: ""
  };
}

export const QueryAlphaMaximumsResponse = {
  encode(message: QueryAlphaMaximumsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxSystemAlphaIncrease !== "") {
      writer.uint32(10).string(message.maxSystemAlphaIncrease);
    }

    if (message.maxSystemAlpha !== "") {
      writer.uint32(18).string(message.maxSystemAlpha);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlphaMaximumsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlphaMaximumsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxSystemAlphaIncrease = reader.string();
          break;

        case 2:
          message.maxSystemAlpha = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAlphaMaximumsResponse>): QueryAlphaMaximumsResponse {
    const message = createBaseQueryAlphaMaximumsResponse();
    message.maxSystemAlphaIncrease = object.maxSystemAlphaIncrease ?? "";
    message.maxSystemAlpha = object.maxSystemAlpha ?? "";
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};