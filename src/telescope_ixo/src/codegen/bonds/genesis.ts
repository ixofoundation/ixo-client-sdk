import { Bond, BondSDKType, Batch, BatchSDKType, Params, ParamsSDKType } from "./bonds";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the bonds module's genesis state. */

export interface GenesisState {
  bonds: Bond[];
  batches: Batch[];
  params?: Params;
}
/** GenesisState defines the bonds module's genesis state. */

export interface GenesisStateSDKType {
  bonds: BondSDKType[];
  batches: BatchSDKType[];
  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    bonds: [],
    batches: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bonds) {
      Bond.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.batches) {
      Batch.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bonds.push(Bond.decode(reader, reader.uint32()));
          break;

        case 2:
          message.batches.push(Batch.decode(reader, reader.uint32()));
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      bonds: Array.isArray(object?.bonds) ? object.bonds.map((e: any) => Bond.fromJSON(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => Batch.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.bonds) {
      obj.bonds = message.bonds.map(e => e ? Bond.toJSON(e) : undefined);
    } else {
      obj.bonds = [];
    }

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? Batch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.bonds = object.bonds?.map(e => Bond.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => Batch.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};