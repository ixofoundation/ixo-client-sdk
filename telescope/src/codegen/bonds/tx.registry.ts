import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBond, MsgEditBond, MsgSetNextAlpha, MsgUpdateBondState, MsgBuy, MsgSell, MsgSwap, MsgMakeOutcomePayment, MsgWithdrawShare, MsgWithdrawReserve } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bonds.MsgCreateBond", MsgCreateBond], ["/bonds.MsgEditBond", MsgEditBond], ["/bonds.MsgSetNextAlpha", MsgSetNextAlpha], ["/bonds.MsgUpdateBondState", MsgUpdateBondState], ["/bonds.MsgBuy", MsgBuy], ["/bonds.MsgSell", MsgSell], ["/bonds.MsgSwap", MsgSwap], ["/bonds.MsgMakeOutcomePayment", MsgMakeOutcomePayment], ["/bonds.MsgWithdrawShare", MsgWithdrawShare], ["/bonds.MsgWithdrawReserve", MsgWithdrawReserve]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBond(value: MsgCreateBond) {
      return {
        typeUrl: "/bonds.MsgCreateBond",
        value: MsgCreateBond.encode(value).finish()
      };
    },

    editBond(value: MsgEditBond) {
      return {
        typeUrl: "/bonds.MsgEditBond",
        value: MsgEditBond.encode(value).finish()
      };
    },

    setNextAlpha(value: MsgSetNextAlpha) {
      return {
        typeUrl: "/bonds.MsgSetNextAlpha",
        value: MsgSetNextAlpha.encode(value).finish()
      };
    },

    updateBondState(value: MsgUpdateBondState) {
      return {
        typeUrl: "/bonds.MsgUpdateBondState",
        value: MsgUpdateBondState.encode(value).finish()
      };
    },

    buy(value: MsgBuy) {
      return {
        typeUrl: "/bonds.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },

    sell(value: MsgSell) {
      return {
        typeUrl: "/bonds.MsgSell",
        value: MsgSell.encode(value).finish()
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/bonds.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },

    makeOutcomePayment(value: MsgMakeOutcomePayment) {
      return {
        typeUrl: "/bonds.MsgMakeOutcomePayment",
        value: MsgMakeOutcomePayment.encode(value).finish()
      };
    },

    withdrawShare(value: MsgWithdrawShare) {
      return {
        typeUrl: "/bonds.MsgWithdrawShare",
        value: MsgWithdrawShare.encode(value).finish()
      };
    },

    withdrawReserve(value: MsgWithdrawReserve) {
      return {
        typeUrl: "/bonds.MsgWithdrawReserve",
        value: MsgWithdrawReserve.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createBond(value: MsgCreateBond) {
      return {
        typeUrl: "/bonds.MsgCreateBond",
        value
      };
    },

    editBond(value: MsgEditBond) {
      return {
        typeUrl: "/bonds.MsgEditBond",
        value
      };
    },

    setNextAlpha(value: MsgSetNextAlpha) {
      return {
        typeUrl: "/bonds.MsgSetNextAlpha",
        value
      };
    },

    updateBondState(value: MsgUpdateBondState) {
      return {
        typeUrl: "/bonds.MsgUpdateBondState",
        value
      };
    },

    buy(value: MsgBuy) {
      return {
        typeUrl: "/bonds.MsgBuy",
        value
      };
    },

    sell(value: MsgSell) {
      return {
        typeUrl: "/bonds.MsgSell",
        value
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/bonds.MsgSwap",
        value
      };
    },

    makeOutcomePayment(value: MsgMakeOutcomePayment) {
      return {
        typeUrl: "/bonds.MsgMakeOutcomePayment",
        value
      };
    },

    withdrawShare(value: MsgWithdrawShare) {
      return {
        typeUrl: "/bonds.MsgWithdrawShare",
        value
      };
    },

    withdrawReserve(value: MsgWithdrawReserve) {
      return {
        typeUrl: "/bonds.MsgWithdrawReserve",
        value
      };
    }

  },
  fromPartial: {
    createBond(value: MsgCreateBond) {
      return {
        typeUrl: "/bonds.MsgCreateBond",
        value: MsgCreateBond.fromPartial(value)
      };
    },

    editBond(value: MsgEditBond) {
      return {
        typeUrl: "/bonds.MsgEditBond",
        value: MsgEditBond.fromPartial(value)
      };
    },

    setNextAlpha(value: MsgSetNextAlpha) {
      return {
        typeUrl: "/bonds.MsgSetNextAlpha",
        value: MsgSetNextAlpha.fromPartial(value)
      };
    },

    updateBondState(value: MsgUpdateBondState) {
      return {
        typeUrl: "/bonds.MsgUpdateBondState",
        value: MsgUpdateBondState.fromPartial(value)
      };
    },

    buy(value: MsgBuy) {
      return {
        typeUrl: "/bonds.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },

    sell(value: MsgSell) {
      return {
        typeUrl: "/bonds.MsgSell",
        value: MsgSell.fromPartial(value)
      };
    },

    swap(value: MsgSwap) {
      return {
        typeUrl: "/bonds.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },

    makeOutcomePayment(value: MsgMakeOutcomePayment) {
      return {
        typeUrl: "/bonds.MsgMakeOutcomePayment",
        value: MsgMakeOutcomePayment.fromPartial(value)
      };
    },

    withdrawShare(value: MsgWithdrawShare) {
      return {
        typeUrl: "/bonds.MsgWithdrawShare",
        value: MsgWithdrawShare.fromPartial(value)
      };
    },

    withdrawReserve(value: MsgWithdrawReserve) {
      return {
        typeUrl: "/bonds.MsgWithdrawReserve",
        value: MsgWithdrawReserve.fromPartial(value)
      };
    }

  }
};