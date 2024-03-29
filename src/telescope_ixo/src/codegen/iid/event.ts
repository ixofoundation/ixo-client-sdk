import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** DidDocumentCreatedEvent is an event triggered on a DID document creation */

export interface IidDocumentCreatedEvent {
  /** the did being created */
  did: string;
  /** the signer account creating the did */

  signer: string;
}
/** DidDocumentCreatedEvent is an event triggered on a DID document creation */

export interface IidDocumentCreatedEventSDKType {
  /** the did being created */
  did: string;
  /** the signer account creating the did */

  signer: string;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */

export interface IidDocumentUpdatedEvent {
  /** the did being updated */
  did: string;
  /** the signer account of the change */

  signer: string;
}
/** DidDocumentUpdatedEvent is an event triggered on a DID document update */

export interface IidDocumentUpdatedEventSDKType {
  /** the did being updated */
  did: string;
  /** the signer account of the change */

  signer: string;
}

function createBaseIidDocumentCreatedEvent(): IidDocumentCreatedEvent {
  return {
    did: "",
    signer: ""
  };
}

export const IidDocumentCreatedEvent = {
  encode(message: IidDocumentCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocumentCreatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IidDocumentCreatedEvent {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: IidDocumentCreatedEvent): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<IidDocumentCreatedEvent>): IidDocumentCreatedEvent {
    const message = createBaseIidDocumentCreatedEvent();
    message.did = object.did ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseIidDocumentUpdatedEvent(): IidDocumentUpdatedEvent {
  return {
    did: "",
    signer: ""
  };
}

export const IidDocumentUpdatedEvent = {
  encode(message: IidDocumentUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocumentUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocumentUpdatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IidDocumentUpdatedEvent {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: IidDocumentUpdatedEvent): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: Partial<IidDocumentUpdatedEvent>): IidDocumentUpdatedEvent {
    const message = createBaseIidDocumentUpdatedEvent();
    message.did = object.did ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};