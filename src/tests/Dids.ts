/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { serializeSignDoc } from "@cosmjs/amino";
import { sha256 } from "@cosmjs/crypto";
import { toUtf8, Bech32, toBase64 } from "@cosmjs/encoding";
import { Registry } from "@cosmjs/proto-signing";
import { decode } from "bs58";
import sovrin from "sovrin-did";
import { Claim, DidCredential } from "../codec/did/did";
import { MsgAddCredential, MsgAddDid } from "../codec/did/tx";
import { SigningStargateClient } from "../utils/customClient";
import { accountFromAny } from "../utils/EdAccountHandler";

export const AddDid = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/did.MsgAddDid", MsgAddDid); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    "https://testnet.ixo.earth/rpc/", // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/did.MsgAddDid",
    value: MsgAddDid.fromPartial({
      did: edClient.didSov,
      pubKey: edClient.didDoc.verifyKey,
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const AddCredential = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/did.MsgAddCredential", MsgAddCredential); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    "https://testnet.ixo.earth/rpc/", // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/did.MsgAddCredential",
    value: MsgAddCredential.fromPartial({
      didCredential: DidCredential.fromPartial({
        credType: [""],
        issuer: "",
        issued: "",
        claim: Claim.fromPartial({
          id: "",
          KYCValidated: false,
        }),
      }),
    }),
  };

  const fee = {
    amount: [
      {
        denom: "uixo", // Use the appropriate fee denom for your chain
        amount: "1000000",
      },
    ],
    gas: "3000000",
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

const getEdClient = () => {
  const mnemonic =
    "creek obvious bamboo ozone dwarf above hill muscle image fossil drastic toy";

  // Creating diddoc from MM - edkeys
  const didDoc = sovrin.fromSeed(sha256(toUtf8(mnemonic)).slice(0, 32));

  const edClient = {
    mnemonic,
    didDoc,
    didPrefix: "did:ixo:",
    did: "did:ixo:" + didDoc.did,
    didSov: "did:sov:" + didDoc.did,

    async getAccounts() {
      return [
        {
          algo: "ed25519-sha-256",
          pubkey: Uint8Array.from(decode(didDoc.verifyKey)),
          address: Bech32.encode(
            "ixo",
            sha256(decode(didDoc.verifyKey)).slice(0, 20)
          ),
        },
      ];
    },
    async signAmino(signerAddress: any, signDoc: any) {
      const account = (await this.getAccounts()).find(
        ({ address }) => address === signerAddress
      );

      if (!account)
        throw new Error(`Address ${signerAddress} not found in wallet`);

      const fullSignature = sovrin.signMessage(
        serializeSignDoc(signDoc),
        didDoc.secret.signKey,
        didDoc.verifyKey
      );
      const signatureBase64 = toBase64(fullSignature.slice(0, 64));
      const pub_keyBase64 = decode(didDoc.verifyKey);
      return {
        signed: signDoc,

        signature: {
          signature: signatureBase64,

          pub_key: {
            type: "tendermint/PubKeyEd25519",
            value: toBase64(pub_keyBase64).toString(),
          },
        },
      };
    },
  };

  return edClient;
};
