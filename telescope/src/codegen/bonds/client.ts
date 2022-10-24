import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as bondsTxRegistry from "./tx.registry";
import * as bondsTxAmino from "./tx.amino";
export const bondsAminoConverters = { ...bondsTxAmino.AminoConverter
};
export const bondsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bondsTxRegistry.registry];
export const getSigningBondsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bondsProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...bondsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBondsClient = async ({
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
  } = getSigningBondsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};