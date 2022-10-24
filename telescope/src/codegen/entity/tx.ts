import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType } from "../iid/iid";
import { Verification, VerificationSDKType } from "../iid/tx";
import { Timestamp } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../helpers";
/** MsgCreateEntity defines a message for creating a project. */

export interface MsgCreateEntity {
  /** An Entity Type as defined by the implementer */
  entityType: string;
  /** Status of the Entity as defined by the implementer and interpreted by Client applications */

  entityStatus: number;
  /** the list of controller DIDs */

  controller: string[];
  /** JSON-LD contexts */

  context: Context[];
  /** Verification Methods and Verification Relationships */

  verification: Verification[];
  /** Service endpoints */

  service: Service[];
  /** Legal or Electronic Rights and associated Object Capabilities */

  accordedRight: AccordedRight[];
  /** Digital resources associated with the Subject */

  linkedResource: LinkedResource[];
  /** DID of a linked Entity and its relationship with the Subject */

  linkedEntity: LinkedEntity[];
  /**
   * Operational status of the Entity
   * Start Date of the Entity as defined by the implementer and interpreted by Client applications
   */

  deactivated: boolean;
  /**
   * address of the account signing the message
   * End Date of the Entity as defined by the implementer and interpreted by Client applications
   */

  startDate?: Date;
  /** address of the account signing the message */

  endDate?: Date;
  /**
   * State of the Entity as defined by the implementer and interpreted by Client applications
   * DID of the operator through which the Entity was created
   */

  stage: string;
  relayerNode: string;
  /** Public proof that the Entity is verified */

  verificationStatus: string;
  /** Content ID or Hash of public Verifiable Credentials associated with the  subject */

  verifiableCredential: string[];
  /** Owner of the Entity NFT | The ownersdid used to sign this transaction. */

  ownerDid: string;
  /** The ownersdid address used to sign this transaction. */

  ownerAddress: string;
  /** Extention data */

  data: Uint8Array;
}
/** MsgCreateEntity defines a message for creating a project. */

export interface MsgCreateEntitySDKType {
  /** An Entity Type as defined by the implementer */
  entityType: string;
  /** Status of the Entity as defined by the implementer and interpreted by Client applications */

  entityStatus: number;
  /** the list of controller DIDs */

  controller: string[];
  /** JSON-LD contexts */

  context: ContextSDKType[];
  /** Verification Methods and Verification Relationships */

  verification: VerificationSDKType[];
  /** Service endpoints */

  service: ServiceSDKType[];
  /** Legal or Electronic Rights and associated Object Capabilities */

  accordedRight: AccordedRightSDKType[];
  /** Digital resources associated with the Subject */

  linkedResource: LinkedResourceSDKType[];
  /** DID of a linked Entity and its relationship with the Subject */

  linkedEntity: LinkedEntitySDKType[];
  /**
   * Operational status of the Entity
   * Start Date of the Entity as defined by the implementer and interpreted by Client applications
   */

  deactivated: boolean;
  /**
   * address of the account signing the message
   * End Date of the Entity as defined by the implementer and interpreted by Client applications
   */

  startDate?: Date;
  /** address of the account signing the message */

  endDate?: Date;
  /**
   * State of the Entity as defined by the implementer and interpreted by Client applications
   * DID of the operator through which the Entity was created
   */

  stage: string;
  relayerNode: string;
  /** Public proof that the Entity is verified */

  verificationStatus: string;
  /** Content ID or Hash of public Verifiable Credentials associated with the  subject */

  verifiableCredential: string[];
  /** Owner of the Entity NFT | The ownersdid used to sign this transaction. */

  ownerDid: string;
  /** The ownersdid address used to sign this transaction. */

  ownerAddress: string;
  /** Extention data */

  data: Uint8Array;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateEntityResponse {
  entityId: string;
  entityType: string;
  entityStatus: number;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */

export interface MsgCreateEntityResponseSDKType {
  entityId: string;
  entityType: string;
  entityStatus: number;
}
/** MsgUpdateEntityStatus defines a message for updating a entity's current status. */

export interface MsgUpdateEntity {
  /** The status of the entity. Should represent an enum in the client. */
  status: number;
  /**
   * Whether this entity is enabled ot not, basically a soft delete.
   * refer to iid module for more information
   */

  deactivated: boolean;
  /**
   * address of the account signing the message
   * refer to iid module for more information
   */

  startDate?: Date;
  /** address of the account signing the message */

  endDate?: Date;
  /**
   * refer to iid module meta data for more information
   * refer to iid module for more information
   */

  stage: string;
  relayerNode: string;
  /** refer to iid module for more information */

  verifiableCredential: string;
  /** The ownersdid used to sign this transaction. */

  controllerDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerAddress: string;
}
/** MsgUpdateEntityStatus defines a message for updating a entity's current status. */

export interface MsgUpdateEntitySDKType {
  /** The status of the entity. Should represent an enum in the client. */
  status: number;
  /**
   * Whether this entity is enabled ot not, basically a soft delete.
   * refer to iid module for more information
   */

  deactivated: boolean;
  /**
   * address of the account signing the message
   * refer to iid module for more information
   */

  startDate?: Date;
  /** address of the account signing the message */

  endDate?: Date;
  /**
   * refer to iid module meta data for more information
   * refer to iid module for more information
   */

  stage: string;
  relayerNode: string;
  /** refer to iid module for more information */

  verifiableCredential: string;
  /** The ownersdid used to sign this transaction. */

  controllerDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerAddress: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgUpdateEntityResponse {}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgUpdateEntityResponseSDKType {}
export interface MsgUpdateEntityConfig {
  nftContractAddress: string;
  signer: string;
}
export interface MsgUpdateEntityConfigSDKType {
  nft_contract_address: string;
  signer: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgUpdateEntityConfigResponse {}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgUpdateEntityConfigResponseSDKType {}
export interface MsgTransferEntity {
  entityDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerAddress: string;
  recipiantDid: string;
}
export interface MsgTransferEntitySDKType {
  entityDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerDid: string;
  /** The ownersdid used to sign this transaction. */

  controllerAddress: string;
  recipiantDid: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgTransferEntityResponse {}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateEntityStatus response type. */

export interface MsgTransferEntityResponseSDKType {}

function createBaseMsgCreateEntity(): MsgCreateEntity {
  return {
    entityType: "",
    entityStatus: 0,
    controller: [],
    context: [],
    verification: [],
    service: [],
    accordedRight: [],
    linkedResource: [],
    linkedEntity: [],
    deactivated: false,
    startDate: undefined,
    endDate: undefined,
    stage: "",
    relayerNode: "",
    verificationStatus: "",
    verifiableCredential: [],
    ownerDid: "",
    ownerAddress: "",
    data: new Uint8Array()
  };
}

export const MsgCreateEntity = {
  encode(message: MsgCreateEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityType !== "") {
      writer.uint32(10).string(message.entityType);
    }

    if (message.entityStatus !== 0) {
      writer.uint32(16).int32(message.entityStatus);
    }

    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.context) {
      Context.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.verification) {
      Verification.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.service) {
      Service.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.accordedRight) {
      AccordedRight.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.linkedResource) {
      LinkedResource.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.linkedEntity) {
      LinkedEntity.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    if (message.deactivated === true) {
      writer.uint32(80).bool(message.deactivated);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(90).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(98).fork()).ldelim();
    }

    if (message.stage !== "") {
      writer.uint32(106).string(message.stage);
    }

    if (message.relayerNode !== "") {
      writer.uint32(114).string(message.relayerNode);
    }

    if (message.verificationStatus !== "") {
      writer.uint32(122).string(message.verificationStatus);
    }

    for (const v of message.verifiableCredential) {
      writer.uint32(130).string(v!);
    }

    if (message.ownerDid !== "") {
      writer.uint32(138).string(message.ownerDid);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(146).string(message.ownerAddress);
    }

    if (message.data.length !== 0) {
      writer.uint32(154).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityType = reader.string();
          break;

        case 2:
          message.entityStatus = reader.int32();
          break;

        case 3:
          message.controller.push(reader.string());
          break;

        case 4:
          message.context.push(Context.decode(reader, reader.uint32()));
          break;

        case 5:
          message.verification.push(Verification.decode(reader, reader.uint32()));
          break;

        case 6:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;

        case 7:
          message.accordedRight.push(AccordedRight.decode(reader, reader.uint32()));
          break;

        case 8:
          message.linkedResource.push(LinkedResource.decode(reader, reader.uint32()));
          break;

        case 9:
          message.linkedEntity.push(LinkedEntity.decode(reader, reader.uint32()));
          break;

        case 10:
          message.deactivated = reader.bool();
          break;

        case 11:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 12:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 13:
          message.stage = reader.string();
          break;

        case 14:
          message.relayerNode = reader.string();
          break;

        case 15:
          message.verificationStatus = reader.string();
          break;

        case 16:
          message.verifiableCredential.push(reader.string());
          break;

        case 17:
          message.ownerDid = reader.string();
          break;

        case 18:
          message.ownerAddress = reader.string();
          break;

        case 19:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateEntity>): MsgCreateEntity {
    const message = createBaseMsgCreateEntity();
    message.entityType = object.entityType ?? "";
    message.entityStatus = object.entityStatus ?? 0;
    message.controller = object.controller?.map(e => e) || [];
    message.context = object.context?.map(e => Context.fromPartial(e)) || [];
    message.verification = object.verification?.map(e => Verification.fromPartial(e)) || [];
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.accordedRight = object.accordedRight?.map(e => AccordedRight.fromPartial(e)) || [];
    message.linkedResource = object.linkedResource?.map(e => LinkedResource.fromPartial(e)) || [];
    message.linkedEntity = object.linkedEntity?.map(e => LinkedEntity.fromPartial(e)) || [];
    message.deactivated = object.deactivated ?? false;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.stage = object.stage ?? "";
    message.relayerNode = object.relayerNode ?? "";
    message.verificationStatus = object.verificationStatus ?? "";
    message.verifiableCredential = object.verifiableCredential?.map(e => e) || [];
    message.ownerDid = object.ownerDid ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCreateEntityResponse(): MsgCreateEntityResponse {
  return {
    entityId: "",
    entityType: "",
    entityStatus: 0
  };
}

export const MsgCreateEntityResponse = {
  encode(message: MsgCreateEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }

    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }

    if (message.entityStatus !== 0) {
      writer.uint32(24).int32(message.entityStatus);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;

        case 2:
          message.entityType = reader.string();
          break;

        case 3:
          message.entityStatus = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateEntityResponse>): MsgCreateEntityResponse {
    const message = createBaseMsgCreateEntityResponse();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.entityStatus = object.entityStatus ?? 0;
    return message;
  }

};

function createBaseMsgUpdateEntity(): MsgUpdateEntity {
  return {
    status: 0,
    deactivated: false,
    startDate: undefined,
    endDate: undefined,
    stage: "",
    relayerNode: "",
    verifiableCredential: "",
    controllerDid: "",
    controllerAddress: ""
  };
}

export const MsgUpdateEntity = {
  encode(message: MsgUpdateEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    if (message.deactivated === true) {
      writer.uint32(16).bool(message.deactivated);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(26).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(34).fork()).ldelim();
    }

    if (message.stage !== "") {
      writer.uint32(42).string(message.stage);
    }

    if (message.relayerNode !== "") {
      writer.uint32(50).string(message.relayerNode);
    }

    if (message.verifiableCredential !== "") {
      writer.uint32(58).string(message.verifiableCredential);
    }

    if (message.controllerDid !== "") {
      writer.uint32(66).string(message.controllerDid);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(74).string(message.controllerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;

        case 2:
          message.deactivated = reader.bool();
          break;

        case 3:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.stage = reader.string();
          break;

        case 6:
          message.relayerNode = reader.string();
          break;

        case 7:
          message.verifiableCredential = reader.string();
          break;

        case 8:
          message.controllerDid = reader.string();
          break;

        case 9:
          message.controllerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateEntity>): MsgUpdateEntity {
    const message = createBaseMsgUpdateEntity();
    message.status = object.status ?? 0;
    message.deactivated = object.deactivated ?? false;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.stage = object.stage ?? "";
    message.relayerNode = object.relayerNode ?? "";
    message.verifiableCredential = object.verifiableCredential ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  }

};

function createBaseMsgUpdateEntityResponse(): MsgUpdateEntityResponse {
  return {};
}

export const MsgUpdateEntityResponse = {
  encode(_: MsgUpdateEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateEntityResponse>): MsgUpdateEntityResponse {
    const message = createBaseMsgUpdateEntityResponse();
    return message;
  }

};

function createBaseMsgUpdateEntityConfig(): MsgUpdateEntityConfig {
  return {
    nftContractAddress: "",
    signer: ""
  };
}

export const MsgUpdateEntityConfig = {
  encode(message: MsgUpdateEntityConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftContractAddress !== "") {
      writer.uint32(10).string(message.nftContractAddress);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nftContractAddress = reader.string();
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

  fromPartial(object: DeepPartial<MsgUpdateEntityConfig>): MsgUpdateEntityConfig {
    const message = createBaseMsgUpdateEntityConfig();
    message.nftContractAddress = object.nftContractAddress ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgUpdateEntityConfigResponse(): MsgUpdateEntityConfigResponse {
  return {};
}

export const MsgUpdateEntityConfigResponse = {
  encode(_: MsgUpdateEntityConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEntityConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntityConfigResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateEntityConfigResponse>): MsgUpdateEntityConfigResponse {
    const message = createBaseMsgUpdateEntityConfigResponse();
    return message;
  }

};

function createBaseMsgTransferEntity(): MsgTransferEntity {
  return {
    entityDid: "",
    controllerDid: "",
    controllerAddress: "",
    recipiantDid: ""
  };
}

export const MsgTransferEntity = {
  encode(message: MsgTransferEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityDid !== "") {
      writer.uint32(10).string(message.entityDid);
    }

    if (message.controllerDid !== "") {
      writer.uint32(18).string(message.controllerDid);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(26).string(message.controllerAddress);
    }

    if (message.recipiantDid !== "") {
      writer.uint32(34).string(message.recipiantDid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entityDid = reader.string();
          break;

        case 2:
          message.controllerDid = reader.string();
          break;

        case 3:
          message.controllerAddress = reader.string();
          break;

        case 4:
          message.recipiantDid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransferEntity>): MsgTransferEntity {
    const message = createBaseMsgTransferEntity();
    message.entityDid = object.entityDid ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    message.recipiantDid = object.recipiantDid ?? "";
    return message;
  }

};

function createBaseMsgTransferEntityResponse(): MsgTransferEntityResponse {
  return {};
}

export const MsgTransferEntityResponse = {
  encode(_: MsgTransferEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferEntityResponse();

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

  fromPartial(_: DeepPartial<MsgTransferEntityResponse>): MsgTransferEntityResponse {
    const message = createBaseMsgTransferEntityResponse();
    return message;
  }

};