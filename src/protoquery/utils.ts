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
  rpcendpoint = "https://testnet.ixo.world/rpc/",
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

function Utf8ArrayToStr(array: any) {
  let out, i, c;
  let char2, char3;

  out = "";
  const len = array.length;
  i = 0;
  while (i < len) {
    c = array[i++];
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(
          ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
        );
        break;
    }
  }

  return out;
}

export function Uint8ArrayToJS(data: Uint8Array): string {
  const decodedData = Utf8ArrayToStr(data);
  return decodedData;
}
