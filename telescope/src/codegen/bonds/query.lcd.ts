import { LCDClient } from "@osmonauts/lcd";
import { QueryBondsRequest, QueryBondsResponseSDKType, QueryBondsDetailedRequest, QueryBondsDetailedResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryBondRequest, QueryBondResponseSDKType, QueryBatchRequest, QueryBatchResponseSDKType, QueryLastBatchRequest, QueryLastBatchResponseSDKType, QueryCurrentPriceRequest, QueryCurrentPriceResponseSDKType, QueryCurrentReserveRequest, QueryCurrentReserveResponseSDKType, QueryAvailableReserveRequest, QueryAvailableReserveResponseSDKType, QueryCustomPriceRequest, QueryCustomPriceResponseSDKType, QueryBuyPriceRequest, QueryBuyPriceResponseSDKType, QuerySellReturnRequest, QuerySellReturnResponseSDKType, QuerySwapReturnRequest, QuerySwapReturnResponseSDKType, QueryAlphaMaximumsRequest, QueryAlphaMaximumsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Bonds returns all existing bonds. */


  async bonds(_params: QueryBondsRequest = {}): Promise<QueryBondsResponseSDKType> {
    const endpoint = `ixo/bonds`;
    return await this.req.get<QueryBondsResponseSDKType>(endpoint);
  }
  /* BondsDetailed returns a list of all existing bonds with some details about their current state. */


  async bondsDetailed(_params: QueryBondsDetailedRequest = {}): Promise<QueryBondsDetailedResponseSDKType> {
    const endpoint = `ixo/bonds_detailed`;
    return await this.req.get<QueryBondsDetailedResponseSDKType>(endpoint);
  }
  /* Params queries the paramaters of x/bonds module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ixo/bonds/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Bond queries info of a specific bond. */


  async bond(params: QueryBondRequest): Promise<QueryBondResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}`;
    return await this.req.get<QueryBondResponseSDKType>(endpoint);
  }
  /* Batch queries info of a specific bond's current batch. */


  async batch(params: QueryBatchRequest): Promise<QueryBatchResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/batch`;
    return await this.req.get<QueryBatchResponseSDKType>(endpoint);
  }
  /* LastBatch queries info of a specific bond's last batch. */


  async lastBatch(params: QueryLastBatchRequest): Promise<QueryLastBatchResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/last_batch`;
    return await this.req.get<QueryLastBatchResponseSDKType>(endpoint);
  }
  /* CurrentPrice queries the current price/s of a specific bond. */


  async currentPrice(params: QueryCurrentPriceRequest): Promise<QueryCurrentPriceResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/current_price`;
    return await this.req.get<QueryCurrentPriceResponseSDKType>(endpoint);
  }
  /* CurrentReserve queries the current balance/s of the reserve pool for a specific bond. */


  async currentReserve(params: QueryCurrentReserveRequest): Promise<QueryCurrentReserveResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/current_reserve`;
    return await this.req.get<QueryCurrentReserveResponseSDKType>(endpoint);
  }
  /* AvailableReserve queries current available balance/s of the reserve pool for a specific bond. */


  async availableReserve(params: QueryAvailableReserveRequest): Promise<QueryAvailableReserveResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/available_reserve`;
    return await this.req.get<QueryAvailableReserveResponseSDKType>(endpoint);
  }
  /* CustomPrice queries price/s of a specific bond at a specific supply. */


  async customPrice(params: QueryCustomPriceRequest): Promise<QueryCustomPriceResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}price/${params.bondAmount}`;
    return await this.req.get<QueryCustomPriceResponseSDKType>(endpoint);
  }
  /* BuyPrice queries price/s of buying an amount of tokens from a specific bond. */


  async buyPrice(params: QueryBuyPriceRequest): Promise<QueryBuyPriceResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}buy_price/${params.bondAmount}`;
    return await this.req.get<QueryBuyPriceResponseSDKType>(endpoint);
  }
  /* SellReturn queries return/s on selling an amount of tokens of a specific bond. */


  async sellReturn(params: QuerySellReturnRequest): Promise<QuerySellReturnResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}sell_return/${params.bondAmount}`;
    return await this.req.get<QuerySellReturnResponseSDKType>(endpoint);
  }
  /* SwapReturn queries return/s on swapping an amount of tokens to another token of a specific bond. */


  async swapReturn(params: QuerySwapReturnRequest): Promise<QuerySwapReturnResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/swap_return/${params.fromTokenWithAmount}/${params.toToken}`;
    return await this.req.get<QuerySwapReturnResponseSDKType>(endpoint);
  }
  /* AlphaMaximums queries alpha maximums for a specific augmented bonding curve. */


  async alphaMaximums(params: QueryAlphaMaximumsRequest): Promise<QueryAlphaMaximumsResponseSDKType> {
    const endpoint = `ixo/bonds/${params.bondDid}/alpha_maximums`;
    return await this.req.get<QueryAlphaMaximumsResponseSDKType>(endpoint);
  }

}