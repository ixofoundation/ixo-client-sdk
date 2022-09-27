/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { serializeSignDoc } from "@cosmjs/amino";
import { sha256 } from "@cosmjs/crypto";
import { toUtf8, Bech32, toBase64 } from "@cosmjs/encoding";
import { Registry } from "@cosmjs/proto-signing";
import { decode } from "bs58";
import sovrin from "sovrin-did";
import { Coin } from "../codec/cosmos/coin";
import { Period } from "../codec/external/cosmos/vesting/v1beta1/vesting";
import {
  Discount,
  DistributionShare,
  PaymentTemplate,
} from "../codec/payments/payments";
import {
  MsgCreatePaymentContract,
  MsgCreatePaymentTemplate,
  MsgCreateSubscription,
  MsgEffectPayment,
  MsgGrantDiscount,
  MsgRevokeDiscount,
  MsgSetPaymentContractAuthorisation,
} from "../codec/payments/tx";
import { SigningStargateClient } from "../utils/customClient";
import { accountFromAny } from "../utils/EdAccountHandler";

export const SetPaymentContractAuthorization = async () => {
  const myRegistry = new Registry();
  myRegistry.register(
    "/payments.MsgSetPaymentContractAuthorisation",
    MsgSetPaymentContractAuthorisation
  ); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
    value: MsgSetPaymentContractAuthorisation.fromPartial({
      paymentContractId: "",
      payerDid: "",
      authorised: false,
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

export const CreatePaymentTemplate = async () => {
  const myRegistry = new Registry();
  myRegistry.register(
    "/payments.MsgCreatePaymentTemplate",
    MsgCreatePaymentTemplate
  ); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgCreatePaymentTemplate",
    value: MsgCreatePaymentTemplate.fromPartial({
      creatorDid: "",
      paymentTemplate: PaymentTemplate.fromPartial({
        id: "",
        paymentAmount: [
          Coin.fromPartial({
            denom: "",
            amount: "",
          }),
        ],
        paymentMinimum: [
          Coin.fromPartial({
            denom: "",
            amount: "",
          }),
        ],
        paymentMaximum: [
          Coin.fromPartial({
            denom: "",
            amount: "",
          }),
        ],
        discounts: [Discount.fromPartial({ id: "", percent: "" })],
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

export const CreatePaymentContract = async () => {
  const myRegistry = new Registry();
  myRegistry.register(
    "/payments.MsgCreatePaymentContract",
    MsgCreatePaymentContract
  ); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgCreatePaymentContract",
    value: MsgCreatePaymentContract.fromPartial({
      creatorDid: "",
      paymentTemplateId: "",
      paymentContractId: "",
      payer: "",
      recipients: [
        DistributionShare.fromPartial({ address: "", percentage: "" }),
      ],
      canDeauthorise: false,
      discountId: "",
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

export const CreateSubscription = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/payments.MsgCreateSubscription", MsgCreateSubscription); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;
  const test = new Uint8Array();
  const message = {
    typeUrl: "/payments.MsgCreateSubscription",
    value: MsgCreateSubscription.fromPartial({
      creatorDid: "",
      subscriptionId: "",
      paymentContractId: "",
      maxPeriods: "",
      period: {
        typeUrl: "",
        value: test,
      },
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

export const GrantDiscount = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/payments.MsgGrantDiscount", MsgGrantDiscount); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgGrantDiscount",
    value: MsgGrantDiscount.fromPartial({
      senderDid: "",
      paymentContractId: "",
      discountId: "",
      recipient: "",
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

export const RevokeDiscount = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/payments.MsgRevokeDiscount", MsgRevokeDiscount); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgRevokeDiscount",
    value: MsgRevokeDiscount.fromPartial({
      senderDid: "",
      paymentContractId: "",
      holder: "",
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

export const EffectPayment = async () => {
  const myRegistry = new Registry();
  myRegistry.register("/payments.MsgEffectPayment", MsgEffectPayment); // Replace with your own type URL and Msg class

  const edClient = getEdClient();

  const ad = await edClient.getAccounts();

  const client = await SigningStargateClient.connectWithSigner(
    process.env.RPC_URL, // Replace with your own RPC endpoint
    // @ts-ignore
    edClient,
    {
      registry: myRegistry,
      accountParser: accountFromAny,
    }
  );

  const myAddress = ad[0].address;

  const message = {
    typeUrl: "/payments.MsgEffectPayment",
    value: MsgEffectPayment.fromPartial({
      senderDid: "",
      paymentContractId: "",
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
