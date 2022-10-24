import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as projectTxRegistry from "./tx.registry";
import * as projectTxAmino from "./tx.amino";
export const projectAminoConverters = { ...projectTxAmino.AminoConverter
};
export const projectProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...projectTxRegistry.registry];
export const getSigningProjectClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...projectProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...projectAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningProjectClient = async ({
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
  } = getSigningProjectClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};