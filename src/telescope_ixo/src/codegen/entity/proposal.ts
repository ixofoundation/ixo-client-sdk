import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../helpers";
export interface InitializeNftContract {
  NftContractCodeId: Long;
  NftMinterAddress: string;
}
export interface InitializeNftContractSDKType {
  NftContractCodeId: Long;
  NftMinterAddress: string;
}

function createBaseInitializeNftContract(): InitializeNftContract {
  return {
    NftContractCodeId: Long.UZERO,
    NftMinterAddress: ""
  };
}

export const InitializeNftContract = {
  encode(message: InitializeNftContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.NftContractCodeId.isZero()) {
      writer.uint32(8).uint64(message.NftContractCodeId);
    }

    if (message.NftMinterAddress !== "") {
      writer.uint32(18).string(message.NftMinterAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitializeNftContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitializeNftContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.NftContractCodeId = (reader.uint64() as Long);
          break;

        case 2:
          message.NftMinterAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InitializeNftContract {
    return {
      NftContractCodeId: isSet(object.NftContractCodeId) ? Long.fromValue(object.NftContractCodeId) : Long.UZERO,
      NftMinterAddress: isSet(object.NftMinterAddress) ? String(object.NftMinterAddress) : ""
    };
  },

  toJSON(message: InitializeNftContract): unknown {
    const obj: any = {};
    message.NftContractCodeId !== undefined && (obj.NftContractCodeId = (message.NftContractCodeId || Long.UZERO).toString());
    message.NftMinterAddress !== undefined && (obj.NftMinterAddress = message.NftMinterAddress);
    return obj;
  },

  fromPartial(object: Partial<InitializeNftContract>): InitializeNftContract {
    const message = createBaseInitializeNftContract();
    message.NftContractCodeId = object.NftContractCodeId !== undefined && object.NftContractCodeId !== null ? Long.fromValue(object.NftContractCodeId) : Long.UZERO;
    message.NftMinterAddress = object.NftMinterAddress ?? "";
    return message;
  }

};