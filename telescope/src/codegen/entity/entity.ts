import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** ProjectDoc defines a project (or entity) type with all of its parameters. */

export interface EntityDoc {}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */

export interface EntityDocSDKType {}

function createBaseEntityDoc(): EntityDoc {
  return {};
}

export const EntityDoc = {
  encode(_: EntityDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDoc();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<EntityDoc>): EntityDoc {
    const message = createBaseEntityDoc();
    return message;
  }

};