import { EntityDoc, EntityDocSDKType, Params, ParamsSDKType } from "./entity";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the project module's genesis state. */

export interface GenesisState {
  entityDocs: EntityDoc[];
  /** repeated GenesisAccountMap account_maps       = 2 [(gogoproto.nullable) = false, (gogoproto.moretags) = "yaml:\"account_maps\""]; */

  params?: Params;
}
/** GenesisState defines the project module's genesis state. */

export interface GenesisStateSDKType {
  entity_docs: EntityDocSDKType[];
  /** repeated GenesisAccountMap account_maps       = 2 [(gogoproto.nullable) = false, (gogoproto.moretags) = "yaml:\"account_maps\""]; */

  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    entityDocs: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entityDocs) {
      EntityDoc.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.entityDocs.push(EntityDoc.decode(reader, reader.uint32()));
          break;

        case 2:
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
      entityDocs: Array.isArray(object?.entityDocs) ? object.entityDocs.map((e: any) => EntityDoc.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.entityDocs) {
      obj.entityDocs = message.entityDocs.map(e => e ? EntityDoc.toJSON(e) : undefined);
    } else {
      obj.entityDocs = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.entityDocs = object.entityDocs?.map(e => EntityDoc.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};