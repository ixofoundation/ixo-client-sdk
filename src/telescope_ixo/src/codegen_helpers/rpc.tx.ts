import { Rpc } from "./helpers";

export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
  cosmos: {
    bonds: new (await import("../codegen/bonds/tx.rpc.msg")).MsgClientImpl(rpc),
    entity: new (await import("../codegen/entity/tx.rpc.msg")).MsgClientImpl(
      rpc
    ),
    iid: new (await import("../codegen/iid/tx.rpc.msg")).MsgClientImpl(rpc),
    payments: new (
      await import("../codegen/payments/tx.rpc.msg")
    ).MsgClientImpl(rpc),
    project: new (await import("../codegen/project/tx.rpc.msg")).MsgClientImpl(
      rpc
    ),
  },
});
