import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  bonds: new (await import("./tx.rpc.msg")).MsgClientImpl(rpc)
});