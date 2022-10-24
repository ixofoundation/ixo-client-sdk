import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as iidTxRegistry from "./tx.registry";
import * as iidTxAmino from "./tx.amino";
export const iidAminoConverters = { ...iidTxAmino.AminoConverter
};
export const iidProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...iidTxRegistry.registry];
export const getSigningIidClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...iidProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...iidAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningIidClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningIidClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};