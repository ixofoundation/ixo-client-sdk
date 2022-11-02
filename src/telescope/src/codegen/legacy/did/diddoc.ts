import { DidCredential, DidCredentialSDKType } from "./did";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** BaseDidDoc defines a base DID document type. It implements the DidDoc interface. */

export interface BaseDidDoc {
  did: string;
  pubKey: string;
  credentials: DidCredential[];
}
/** BaseDidDoc defines a base DID document type. It implements the DidDoc interface. */

export interface BaseDidDocSDKType {
  did: string;
  pub_key: string;
  credentials: DidCredentialSDKType[];
}

function createBaseBaseDidDoc(): BaseDidDoc {
  return {
    did: "",
    pubKey: "",
    credentials: []
  };
}

export const BaseDidDoc = {
  encode(message: BaseDidDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }

    for (const v of message.credentials) {
      DidCredential.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseDidDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseDidDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.pubKey = reader.string();
          break;

        case 3:
          message.credentials.push(DidCredential.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BaseDidDoc {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      credentials: Array.isArray(object?.credentials) ? object.credentials.map((e: any) => DidCredential.fromJSON(e)) : []
    };
  },

  toJSON(message: BaseDidDoc): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);

    if (message.credentials) {
      obj.credentials = message.credentials.map(e => e ? DidCredential.toJSON(e) : undefined);
    } else {
      obj.credentials = [];
    }

    return obj;
  },

  fromPartial(object: Partial<BaseDidDoc>): BaseDidDoc {
    const message = createBaseBaseDidDoc();
    message.did = object.did ?? "";
    message.pubKey = object.pubKey ?? "";
    message.credentials = object.credentials?.map(e => DidCredential.fromPartial(e)) || [];
    return message;
  }

};