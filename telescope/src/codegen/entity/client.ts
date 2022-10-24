import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as entityTxRegistry from "./tx.registry";
import * as entityTxAmino from "./tx.amino";
export const entityAminoConverters = { ...entityTxAmino.AminoConverter
};
export const entityProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...entityTxRegistry.registry];
export const getSigningEntityClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...entityProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...entityAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEntityClient = async ({
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
  } = getSigningEntityClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};