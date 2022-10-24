import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as paymentsTxRegistry from "./tx.registry";
import * as paymentsTxAmino from "./tx.amino";
export const paymentsAminoConverters = { ...paymentsTxAmino.AminoConverter
};
export const paymentsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...paymentsTxRegistry.registry];
export const getSigningPaymentsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...paymentsProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...paymentsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPaymentsClient = async ({
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
  } = getSigningPaymentsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};