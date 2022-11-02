import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint,
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    impact: {
      bonds: (
        await import("../codegen/bonds/query.rpc.Query")
      ).createRpcQueryExtension(client),
      entity: (
        await import("../codegen/entity/query.rpc.Query")
      ).createRpcQueryExtension(client),
      iid: (
        await import("../codegen/iid/query.rpc.Query")
      ).createRpcQueryExtension(client),
      payments: (
        await import("../codegen/payments/query.rpc.Query")
      ).createRpcQueryExtension(client),
      project: (
        await import("../codegen/project/query.rpc.Query")
      ).createRpcQueryExtension(client),
    },
  };
};
