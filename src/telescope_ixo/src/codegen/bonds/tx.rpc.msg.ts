import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBond, MsgCreateBondResponse, MsgEditBond, MsgEditBondResponse, MsgSetNextAlpha, MsgSetNextAlphaResponse, MsgUpdateBondState, MsgUpdateBondStateResponse, MsgBuy, MsgBuyResponse, MsgSell, MsgSellResponse, MsgSwap, MsgSwapResponse, MsgMakeOutcomePayment, MsgMakeOutcomePaymentResponse, MsgWithdrawShare, MsgWithdrawShareResponse, MsgWithdrawReserve, MsgWithdrawReserveResponse } from "./tx";
/** Msg defines the bonds Msg service. */

export interface Msg {
  /** CreateBond defines a method for creating a bond. */
  createBond(request: MsgCreateBond): Promise<MsgCreateBondResponse>;
  /** EditBond defines a method for editing a bond. */

  editBond(request: MsgEditBond): Promise<MsgEditBondResponse>;
  /** SetNextAlpha defines a method for editing a bond's alpha parameter. */

  setNextAlpha(request: MsgSetNextAlpha): Promise<MsgSetNextAlphaResponse>;
  /** UpdateBondState defines a method for updating a bond's current state. */

  updateBondState(request: MsgUpdateBondState): Promise<MsgUpdateBondStateResponse>;
  /** Buy defines a method for buying from a bond. */

  buy(request: MsgBuy): Promise<MsgBuyResponse>;
  /** Sell defines a method for selling from a bond. */

  sell(request: MsgSell): Promise<MsgSellResponse>;
  /** Swap defines a method for swapping from one reserve bond token to another. */

  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  /** MakeOutcomePayment defines a method for making an outcome payment to a bond. */

  makeOutcomePayment(request: MsgMakeOutcomePayment): Promise<MsgMakeOutcomePaymentResponse>;
  /** WithdrawShare defines a method for withdrawing a share from a bond that is in the SETTLE stage. */

  withdrawShare(request: MsgWithdrawShare): Promise<MsgWithdrawShareResponse>;
  /** WithdrawReserve defines a method for withdrawing reserve from a bond. */

  withdrawReserve(request: MsgWithdrawReserve): Promise<MsgWithdrawReserveResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBond = this.createBond.bind(this);
    this.editBond = this.editBond.bind(this);
    this.setNextAlpha = this.setNextAlpha.bind(this);
    this.updateBondState = this.updateBondState.bind(this);
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);
    this.swap = this.swap.bind(this);
    this.makeOutcomePayment = this.makeOutcomePayment.bind(this);
    this.withdrawShare = this.withdrawShare.bind(this);
    this.withdrawReserve = this.withdrawReserve.bind(this);
  }

  createBond(request: MsgCreateBond): Promise<MsgCreateBondResponse> {
    const data = MsgCreateBond.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "CreateBond", data);
    return promise.then(data => MsgCreateBondResponse.decode(new _m0.Reader(data)));
  }

  editBond(request: MsgEditBond): Promise<MsgEditBondResponse> {
    const data = MsgEditBond.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "EditBond", data);
    return promise.then(data => MsgEditBondResponse.decode(new _m0.Reader(data)));
  }

  setNextAlpha(request: MsgSetNextAlpha): Promise<MsgSetNextAlphaResponse> {
    const data = MsgSetNextAlpha.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "SetNextAlpha", data);
    return promise.then(data => MsgSetNextAlphaResponse.decode(new _m0.Reader(data)));
  }

  updateBondState(request: MsgUpdateBondState): Promise<MsgUpdateBondStateResponse> {
    const data = MsgUpdateBondState.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "UpdateBondState", data);
    return promise.then(data => MsgUpdateBondStateResponse.decode(new _m0.Reader(data)));
  }

  buy(request: MsgBuy): Promise<MsgBuyResponse> {
    const data = MsgBuy.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "Buy", data);
    return promise.then(data => MsgBuyResponse.decode(new _m0.Reader(data)));
  }

  sell(request: MsgSell): Promise<MsgSellResponse> {
    const data = MsgSell.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "Sell", data);
    return promise.then(data => MsgSellResponse.decode(new _m0.Reader(data)));
  }

  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new _m0.Reader(data)));
  }

  makeOutcomePayment(request: MsgMakeOutcomePayment): Promise<MsgMakeOutcomePaymentResponse> {
    const data = MsgMakeOutcomePayment.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "MakeOutcomePayment", data);
    return promise.then(data => MsgMakeOutcomePaymentResponse.decode(new _m0.Reader(data)));
  }

  withdrawShare(request: MsgWithdrawShare): Promise<MsgWithdrawShareResponse> {
    const data = MsgWithdrawShare.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "WithdrawShare", data);
    return promise.then(data => MsgWithdrawShareResponse.decode(new _m0.Reader(data)));
  }

  withdrawReserve(request: MsgWithdrawReserve): Promise<MsgWithdrawReserveResponse> {
    const data = MsgWithdrawReserve.encode(request).finish();
    const promise = this.rpc.request("bonds.Msg", "WithdrawReserve", data);
    return promise.then(data => MsgWithdrawReserveResponse.decode(new _m0.Reader(data)));
  }

}