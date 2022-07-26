import { fromBase64 } from "@cosmjs/encoding";
import {
  OfflineSigner,
  DirectSecp256k1HdWallet,
  Registry,
  decodeTxRaw,
} from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";

export async function initializesigner(
  Mnemonic: string
): Promise<OfflineSigner> {
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(Mnemonic, {
    prefix: "ixo",
  });

  return signer;
}

export async function initializeclient(
  signer: OfflineSigner,
  rpcendpoint = "testnet-grpc.ixo.earth:443",
  myRegistry: any
): Promise<SigningStargateClient> {
  const client = await SigningStargateClient.connectWithSigner(
    rpcendpoint,
    signer,
    { registry: myRegistry }
  );

  return client;
}

export async function parseTx(tx: string, registry: Registry): Promise<any> {
  const decoded = decodeTxRaw(fromBase64(tx));
  const parsedData = [];
  for (const message of decoded.body.messages) {
    const decodedMsg = registry.decode(message);
    parsedData.push(decodedMsg);
  }
  return parsedData;
}
