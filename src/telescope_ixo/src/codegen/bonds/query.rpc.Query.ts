import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBondsRequest, QueryBondsResponse, QueryBondsDetailedRequest, QueryBondsDetailedResponse, QueryParamsRequest, QueryParamsResponse, QueryBondRequest, QueryBondResponse, QueryBatchRequest, QueryBatchResponse, QueryLastBatchRequest, QueryLastBatchResponse, QueryCurrentPriceRequest, QueryCurrentPriceResponse, QueryCurrentReserveRequest, QueryCurrentReserveResponse, QueryAvailableReserveRequest, QueryAvailableReserveResponse, QueryCustomPriceRequest, QueryCustomPriceResponse, QueryBuyPriceRequest, QueryBuyPriceResponse, QuerySellReturnRequest, QuerySellReturnResponse, QuerySwapReturnRequest, QuerySwapReturnResponse, QueryAlphaMaximumsRequest, QueryAlphaMaximumsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Bonds returns all existing bonds. */
  bonds(request?: QueryBondsRequest): Promise<QueryBondsResponse>;
  /** BondsDetailed returns a list of all existing bonds with some details about their current state. */

  bondsDetailed(request?: QueryBondsDetailedRequest): Promise<QueryBondsDetailedResponse>;
  /** Params queries the paramaters of x/bonds module. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Bond queries info of a specific bond. */

  bond(request: QueryBondRequest): Promise<QueryBondResponse>;
  /** Batch queries info of a specific bond's current batch. */

  batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
  /** LastBatch queries info of a specific bond's last batch. */

  lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse>;
  /** CurrentPrice queries the current price/s of a specific bond. */

  currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse>;
  /** CurrentReserve queries the current balance/s of the reserve pool for a specific bond. */

  currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse>;
  /** AvailableReserve queries current available balance/s of the reserve pool for a specific bond. */

  availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse>;
  /** CustomPrice queries price/s of a specific bond at a specific supply. */

  customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse>;
  /** BuyPrice queries price/s of buying an amount of tokens from a specific bond. */

  buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse>;
  /** SellReturn queries return/s on selling an amount of tokens of a specific bond. */

  sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse>;
  /** SwapReturn queries return/s on swapping an amount of tokens to another token of a specific bond. */

  swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse>;
  /** AlphaMaximums queries alpha maximums for a specific augmented bonding curve. */

  alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bonds = this.bonds.bind(this);
    this.bondsDetailed = this.bondsDetailed.bind(this);
    this.params = this.params.bind(this);
    this.bond = this.bond.bind(this);
    this.batch = this.batch.bind(this);
    this.lastBatch = this.lastBatch.bind(this);
    this.currentPrice = this.currentPrice.bind(this);
    this.currentReserve = this.currentReserve.bind(this);
    this.availableReserve = this.availableReserve.bind(this);
    this.customPrice = this.customPrice.bind(this);
    this.buyPrice = this.buyPrice.bind(this);
    this.sellReturn = this.sellReturn.bind(this);
    this.swapReturn = this.swapReturn.bind(this);
    this.alphaMaximums = this.alphaMaximums.bind(this);
  }

  bonds(request: QueryBondsRequest = {}): Promise<QueryBondsResponse> {
    const data = QueryBondsRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "Bonds", data);
    return promise.then(data => QueryBondsResponse.decode(new _m0.Reader(data)));
  }

  bondsDetailed(request: QueryBondsDetailedRequest = {}): Promise<QueryBondsDetailedResponse> {
    const data = QueryBondsDetailedRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "BondsDetailed", data);
    return promise.then(data => QueryBondsDetailedResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  bond(request: QueryBondRequest): Promise<QueryBondResponse> {
    const data = QueryBondRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "Bond", data);
    return promise.then(data => QueryBondResponse.decode(new _m0.Reader(data)));
  }

  batch(request: QueryBatchRequest): Promise<QueryBatchResponse> {
    const data = QueryBatchRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "Batch", data);
    return promise.then(data => QueryBatchResponse.decode(new _m0.Reader(data)));
  }

  lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse> {
    const data = QueryLastBatchRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "LastBatch", data);
    return promise.then(data => QueryLastBatchResponse.decode(new _m0.Reader(data)));
  }

  currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse> {
    const data = QueryCurrentPriceRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "CurrentPrice", data);
    return promise.then(data => QueryCurrentPriceResponse.decode(new _m0.Reader(data)));
  }

  currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse> {
    const data = QueryCurrentReserveRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "CurrentReserve", data);
    return promise.then(data => QueryCurrentReserveResponse.decode(new _m0.Reader(data)));
  }

  availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse> {
    const data = QueryAvailableReserveRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "AvailableReserve", data);
    return promise.then(data => QueryAvailableReserveResponse.decode(new _m0.Reader(data)));
  }

  customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse> {
    const data = QueryCustomPriceRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "CustomPrice", data);
    return promise.then(data => QueryCustomPriceResponse.decode(new _m0.Reader(data)));
  }

  buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse> {
    const data = QueryBuyPriceRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "BuyPrice", data);
    return promise.then(data => QueryBuyPriceResponse.decode(new _m0.Reader(data)));
  }

  sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse> {
    const data = QuerySellReturnRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "SellReturn", data);
    return promise.then(data => QuerySellReturnResponse.decode(new _m0.Reader(data)));
  }

  swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse> {
    const data = QuerySwapReturnRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "SwapReturn", data);
    return promise.then(data => QuerySwapReturnResponse.decode(new _m0.Reader(data)));
  }

  alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse> {
    const data = QueryAlphaMaximumsRequest.encode(request).finish();
    const promise = this.rpc.request("bonds.Query", "AlphaMaximums", data);
    return promise.then(data => QueryAlphaMaximumsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    bonds(request?: QueryBondsRequest): Promise<QueryBondsResponse> {
      return queryService.bonds(request);
    },

    bondsDetailed(request?: QueryBondsDetailedRequest): Promise<QueryBondsDetailedResponse> {
      return queryService.bondsDetailed(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    bond(request: QueryBondRequest): Promise<QueryBondResponse> {
      return queryService.bond(request);
    },

    batch(request: QueryBatchRequest): Promise<QueryBatchResponse> {
      return queryService.batch(request);
    },

    lastBatch(request: QueryLastBatchRequest): Promise<QueryLastBatchResponse> {
      return queryService.lastBatch(request);
    },

    currentPrice(request: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponse> {
      return queryService.currentPrice(request);
    },

    currentReserve(request: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponse> {
      return queryService.currentReserve(request);
    },

    availableReserve(request: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponse> {
      return queryService.availableReserve(request);
    },

    customPrice(request: QueryCustomPriceRequest): Promise<QueryCustomPriceResponse> {
      return queryService.customPrice(request);
    },

    buyPrice(request: QueryBuyPriceRequest): Promise<QueryBuyPriceResponse> {
      return queryService.buyPrice(request);
    },

    sellReturn(request: QuerySellReturnRequest): Promise<QuerySellReturnResponse> {
      return queryService.sellReturn(request);
    },

    swapReturn(request: QuerySwapReturnRequest): Promise<QuerySwapReturnResponse> {
      return queryService.swapReturn(request);
    },

    alphaMaximums(request: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponse> {
      return queryService.alphaMaximums(request);
    }

  };
};