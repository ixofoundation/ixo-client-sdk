import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Digital identity credential issued to an ixo DID */

export interface DidCredential {
  credType: string[];
  issuer: string;
  issued: string;
  claim?: Claim;
}
/** Digital identity credential issued to an ixo DID */

export interface DidCredentialSDKType {
  cred_type: string[];
  issuer: string;
  issued: string;
  claim?: ClaimSDKType;
}
/** The claim section of a credential, indicating if the DID is KYC validated */

export interface Claim {
  id: string;
  KYCValidated: boolean;
}
/** The claim section of a credential, indicating if the DID is KYC validated */

export interface ClaimSDKType {
  id: string;
  KYC_validated: boolean;
}
/** An ixo DID with public and private keys, based on the Sovrin DID spec */

export interface IxoDid {
  did: string;
  verifyKey: string;
  encryptionPublicKey: string;
  secret?: Secret;
}
/** An ixo DID with public and private keys, based on the Sovrin DID spec */

export interface IxoDidSDKType {
  did: string;
  verify_key: string;
  encryption_public_key: string;
  secret?: SecretSDKType;
}
/** The private section of an ixo DID, based on the Sovrin DID spec */

export interface Secret {
  seed: string;
  signKey: string;
  encryptionPrivateKey: string;
}
/** The private section of an ixo DID, based on the Sovrin DID spec */

export interface SecretSDKType {
  seed: string;
  sign_key: string;
  encryption_private_key: string;
}

function createBaseDidCredential(): DidCredential {
  return {
    credType: [],
    issuer: "",
    issued: "",
    claim: undefined
  };
}

export const DidCredential = {
  encode(message: DidCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.credType) {
      writer.uint32(10).string(v!);
    }

    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }

    if (message.issued !== "") {
      writer.uint32(26).string(message.issued);
    }

    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidCredential();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.credType.push(reader.string());
          break;

        case 2:
          message.issuer = reader.string();
          break;

        case 3:
          message.issued = reader.string();
          break;

        case 4:
          message.claim = Claim.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DidCredential>): DidCredential {
    const message = createBaseDidCredential();
    message.credType = object.credType?.map(e => e) || [];
    message.issuer = object.issuer ?? "";
    message.issued = object.issued ?? "";
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  }

};

function createBaseClaim(): Claim {
  return {
    id: "",
    KYCValidated: false
  };
}

export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.KYCValidated === true) {
      writer.uint32(16).bool(message.KYCValidated);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.KYCValidated = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = createBaseClaim();
    message.id = object.id ?? "";
    message.KYCValidated = object.KYCValidated ?? false;
    return message;
  }

};

function createBaseIxoDid(): IxoDid {
  return {
    did: "",
    verifyKey: "",
    encryptionPublicKey: "",
    secret: undefined
  };
}

export const IxoDid = {
  encode(message: IxoDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.verifyKey !== "") {
      writer.uint32(18).string(message.verifyKey);
    }

    if (message.encryptionPublicKey !== "") {
      writer.uint32(26).string(message.encryptionPublicKey);
    }

    if (message.secret !== undefined) {
      Secret.encode(message.secret, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IxoDid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIxoDid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.verifyKey = reader.string();
          break;

        case 3:
          message.encryptionPublicKey = reader.string();
          break;

        case 4:
          message.secret = Secret.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IxoDid>): IxoDid {
    const message = createBaseIxoDid();
    message.did = object.did ?? "";
    message.verifyKey = object.verifyKey ?? "";
    message.encryptionPublicKey = object.encryptionPublicKey ?? "";
    message.secret = object.secret !== undefined && object.secret !== null ? Secret.fromPartial(object.secret) : undefined;
    return message;
  }

};

function createBaseSecret(): Secret {
  return {
    seed: "",
    signKey: "",
    encryptionPrivateKey: ""
  };
}

export const Secret = {
  encode(message: Secret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed !== "") {
      writer.uint32(10).string(message.seed);
    }

    if (message.signKey !== "") {
      writer.uint32(18).string(message.signKey);
    }

    if (message.encryptionPrivateKey !== "") {
      writer.uint32(26).string(message.encryptionPrivateKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecret();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seed = reader.string();
          break;

        case 2:
          message.signKey = reader.string();
          break;

        case 3:
          message.encryptionPrivateKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Secret>): Secret {
    const message = createBaseSecret();
    message.seed = object.seed ?? "";
    message.signKey = object.signKey ?? "";
    message.encryptionPrivateKey = object.encryptionPrivateKey ?? "";
    return message;
  }

};