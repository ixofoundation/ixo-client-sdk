import { Context, ContextSDKType, Service, ServiceSDKType, AccordedRight, AccordedRightSDKType, LinkedResource, LinkedResourceSDKType, LinkedEntity, LinkedEntitySDKType, IidDocument, IidDocumentSDKType, IidMetadata, IidMetadataSDKType, VerificationMethod, VerificationMethodSDKType } from "./iid";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/**
 * Verification is a message that allows to assign a verification method
 * to one or more verification relationships
 */

export interface Verification {
  /**
   * verificationRelationships defines which relationships
   * are allowed to use the verification method
   */
  relationships: string[];
  /** public key associated with the did document. */

  method?: VerificationMethod;
  /** additional contexts (json ld schemas) */

  context: string[];
}
/**
 * Verification is a message that allows to assign a verification method
 * to one or more verification relationships
 */

export interface VerificationSDKType {
  /**
   * verificationRelationships defines which relationships
   * are allowed to use the verification method
   */
  relationships: string[];
  /** public key associated with the did document. */

  method?: VerificationMethodSDKType;
  /** additional contexts (json ld schemas) */

  context: string[];
}
/** MsgCreateDidDocument defines a SDK message for creating a new did. */

export interface MsgCreateIidDocument {
  /** the did */
  id: string;
  /** the list of controller DIDs */

  controllers: string[];
  context: Context[];
  /** the list of verification methods and relationships */

  verifications: Verification[];
  services: Service[];
  accordedRight: AccordedRight[];
  linkedResource: LinkedResource[];
  linkedEntity: LinkedEntity[];
  /** address of the account signing the message */

  signer: string;
}
/** MsgCreateDidDocument defines a SDK message for creating a new did. */

export interface MsgCreateIidDocumentSDKType {
  /** the did */
  id: string;
  /** the list of controller DIDs */

  controllers: string[];
  context: ContextSDKType[];
  /** the list of verification methods and relationships */

  verifications: VerificationSDKType[];
  services: ServiceSDKType[];
  accordedRight: AccordedRightSDKType[];
  linkedResource: LinkedResourceSDKType[];
  linkedEntity: LinkedEntitySDKType[];
  /** address of the account signing the message */

  signer: string;
}
export interface MsgCreateIidDocumentResponse {}
export interface MsgCreateIidDocumentResponseSDKType {}
/** MsgUpdateDidDocument replace an existing did document with a new version */

export interface MsgUpdateIidDocument {
  /** the did document to replace */
  doc?: IidDocument;
  /** address of the account signing the message */

  signer: string;
}
/** MsgUpdateDidDocument replace an existing did document with a new version */

export interface MsgUpdateIidDocumentSDKType {
  /** the did document to replace */
  doc?: IidDocumentSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgUpdateIidDocumentResponse {}
export interface MsgUpdateIidDocumentResponseSDKType {}
export interface MsgAddVerification {
  /** the did */
  id: string;
  /** the verification to add */

  verification?: Verification;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddVerificationSDKType {
  /** the did */
  id: string;
  /** the verification to add */

  verification?: VerificationSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddVerificationResponse {}
export interface MsgAddVerificationResponseSDKType {}
export interface MsgSetVerificationRelationships {
  /** the did */
  id: string;
  /** the verification method id */

  methodId: string;
  /** the list of relationships to set */

  relationships: string[];
  /** address of the account signing the message */

  signer: string;
}
export interface MsgSetVerificationRelationshipsSDKType {
  /** the did */
  id: string;
  /** the verification method id */

  method_id: string;
  /** the list of relationships to set */

  relationships: string[];
  /** address of the account signing the message */

  signer: string;
}
export interface MsgSetVerificationRelationshipsResponse {}
export interface MsgSetVerificationRelationshipsResponseSDKType {}
export interface MsgRevokeVerification {
  /** the did */
  id: string;
  /** the verification method id */

  methodId: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgRevokeVerificationSDKType {
  /** the did */
  id: string;
  /** the verification method id */

  method_id: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgRevokeVerificationResponse {}
export interface MsgRevokeVerificationResponseSDKType {}
export interface MsgAddService {
  /** the did */
  id: string;
  /** the service data to add */

  serviceData?: Service;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddServiceSDKType {
  /** the did */
  id: string;
  /** the service data to add */

  service_data?: ServiceSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddServiceResponse {}
export interface MsgAddServiceResponseSDKType {}
export interface MsgDeleteService {
  /** the did */
  id: string;
  /** the service id */

  serviceId: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteServiceSDKType {
  /** the did */
  id: string;
  /** the service id */

  service_id: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteServiceResponse {}
export interface MsgDeleteServiceResponseSDKType {}
export interface MsgAddController {
  /** the did of the document */
  id: string;
  /** the did to add as a controller of the did document */

  controllerDid: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddControllerSDKType {
  /** the did of the document */
  id: string;
  /** the did to add as a controller of the did document */

  controller_did: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddControllerResponse {}
export interface MsgAddControllerResponseSDKType {}
export interface MsgDeleteController {
  /** the did of the document */
  id: string;
  /** the did to remove from the list of controllers of the did document */

  controllerDid: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteControllerSDKType {
  /** the did of the document */
  id: string;
  /** the did to remove from the list of controllers of the did document */

  controller_did: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteControllerResponse {}
export interface MsgDeleteControllerResponseSDKType {}
export interface MsgAddLinkedResource {
  /** the did */
  id: string;
  /** the verification to add */

  linkedResource?: LinkedResource;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddLinkedResourceSDKType {
  /** the did */
  id: string;
  /** the verification to add */

  linkedResource?: LinkedResourceSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteLinkedResource {
  /** the did */
  id: string;
  /** the service id */

  resourceId: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteLinkedResourceSDKType {
  /** the did */
  id: string;
  /** the service id */

  resource_id: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddLinkedEntity {
  /** the iid */
  id: string;
  /** the entity to add */

  linkedEntity?: LinkedEntity;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddLinkedEntitySDKType {
  /** the iid */
  id: string;
  /** the entity to add */

  linkedEntity?: LinkedEntitySDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteLinkedEntity {
  /** the iid */
  id: string;
  /** the entity id */

  entityId: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteLinkedEntitySDKType {
  /** the iid */
  id: string;
  /** the entity id */

  entity_id: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddAccordedRight {
  /** the did */
  id: string;
  /** the Accorded right to add */

  accordedRight?: AccordedRight;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddAccordedRightSDKType {
  /** the did */
  id: string;
  /** the Accorded right to add */

  accordedRight?: AccordedRightSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteAccordedRight {
  /** the did */
  id: string;
  /** the service id */

  rightId: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteAccordedRightSDKType {
  /** the did */
  id: string;
  /** the service id */

  right_id: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddIidContext {
  /** the did */
  id: string;
  /** the context to add */

  context?: Context;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddIidContextSDKType {
  /** the did */
  id: string;
  /** the context to add */

  context?: ContextSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeactivateIID {
  /** the did */
  id: string;
  state: boolean;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeactivateIIDSDKType {
  /** the did */
  id: string;
  state: boolean;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteIidContext {
  /** the did */
  id: string;
  /** the context key */

  contextKey: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgDeleteIidContextSDKType {
  /** the did */
  id: string;
  /** the context key */

  contextKey: string;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgUpdateIidMeta {
  /** the did */
  id: string;
  /** the context to add */

  meta?: IidMetadata;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgUpdateIidMetaSDKType {
  /** the did */
  id: string;
  /** the context to add */

  meta?: IidMetadataSDKType;
  /** address of the account signing the message */

  signer: string;
}
export interface MsgAddLinkedResourceResponse {}
export interface MsgAddLinkedResourceResponseSDKType {}
export interface MsgDeleteLinkedResourceResponse {}
export interface MsgDeleteLinkedResourceResponseSDKType {}
export interface MsgAddLinkedEntityResponse {}
export interface MsgAddLinkedEntityResponseSDKType {}
export interface MsgDeleteLinkedEntityResponse {}
export interface MsgDeleteLinkedEntityResponseSDKType {}
export interface MsgAddAccordedRightResponse {}
export interface MsgAddAccordedRightResponseSDKType {}
export interface MsgDeleteAccordedRightResponse {}
export interface MsgDeleteAccordedRightResponseSDKType {}
export interface MsgAddIidContextResponse {}
export interface MsgAddIidContextResponseSDKType {}
export interface MsgDeleteIidContextResponse {}
export interface MsgDeleteIidContextResponseSDKType {}
export interface MsgUpdateIidMetaResponse {}
export interface MsgUpdateIidMetaResponseSDKType {}
export interface MsgDeactivateIIDResponse {}
export interface MsgDeactivateIIDResponseSDKType {}

function createBaseVerification(): Verification {
  return {
    relationships: [],
    method: undefined,
    context: []
  };
}

export const Verification = {
  encode(message: Verification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relationships) {
      writer.uint32(10).string(v!);
    }

    if (message.method !== undefined) {
      VerificationMethod.encode(message.method, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.context) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Verification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerification();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relationships.push(reader.string());
          break;

        case 2:
          message.method = VerificationMethod.decode(reader, reader.uint32());
          break;

        case 3:
          message.context.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Verification>): Verification {
    const message = createBaseVerification();
    message.relationships = object.relationships?.map(e => e) || [];
    message.method = object.method !== undefined && object.method !== null ? VerificationMethod.fromPartial(object.method) : undefined;
    message.context = object.context?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateIidDocument(): MsgCreateIidDocument {
  return {
    id: "",
    controllers: [],
    context: [],
    verifications: [],
    services: [],
    accordedRight: [],
    linkedResource: [],
    linkedEntity: [],
    signer: ""
  };
}

export const MsgCreateIidDocument = {
  encode(message: MsgCreateIidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.controllers) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.context) {
      Context.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.verifications) {
      Verification.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.services) {
      Service.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.accordedRight) {
      AccordedRight.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.linkedResource) {
      LinkedResource.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.linkedEntity) {
      LinkedEntity.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIidDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.controllers.push(reader.string());
          break;

        case 3:
          message.context.push(Context.decode(reader, reader.uint32()));
          break;

        case 4:
          message.verifications.push(Verification.decode(reader, reader.uint32()));
          break;

        case 5:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;

        case 6:
          message.accordedRight.push(AccordedRight.decode(reader, reader.uint32()));
          break;

        case 7:
          message.linkedResource.push(LinkedResource.decode(reader, reader.uint32()));
          break;

        case 8:
          message.linkedEntity.push(LinkedEntity.decode(reader, reader.uint32()));
          break;

        case 9:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateIidDocument>): MsgCreateIidDocument {
    const message = createBaseMsgCreateIidDocument();
    message.id = object.id ?? "";
    message.controllers = object.controllers?.map(e => e) || [];
    message.context = object.context?.map(e => Context.fromPartial(e)) || [];
    message.verifications = object.verifications?.map(e => Verification.fromPartial(e)) || [];
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.accordedRight = object.accordedRight?.map(e => AccordedRight.fromPartial(e)) || [];
    message.linkedResource = object.linkedResource?.map(e => LinkedResource.fromPartial(e)) || [];
    message.linkedEntity = object.linkedEntity?.map(e => LinkedEntity.fromPartial(e)) || [];
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgCreateIidDocumentResponse(): MsgCreateIidDocumentResponse {
  return {};
}

export const MsgCreateIidDocumentResponse = {
  encode(_: MsgCreateIidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIidDocumentResponse();

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

  fromPartial(_: DeepPartial<MsgCreateIidDocumentResponse>): MsgCreateIidDocumentResponse {
    const message = createBaseMsgCreateIidDocumentResponse();
    return message;
  }

};

function createBaseMsgUpdateIidDocument(): MsgUpdateIidDocument {
  return {
    doc: undefined,
    signer: ""
  };
}

export const MsgUpdateIidDocument = {
  encode(message: MsgUpdateIidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.doc !== undefined) {
      IidDocument.encode(message.doc, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIidDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.doc = IidDocument.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateIidDocument>): MsgUpdateIidDocument {
    const message = createBaseMsgUpdateIidDocument();
    message.doc = object.doc !== undefined && object.doc !== null ? IidDocument.fromPartial(object.doc) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgUpdateIidDocumentResponse(): MsgUpdateIidDocumentResponse {
  return {};
}

export const MsgUpdateIidDocumentResponse = {
  encode(_: MsgUpdateIidDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIidDocumentResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateIidDocumentResponse>): MsgUpdateIidDocumentResponse {
    const message = createBaseMsgUpdateIidDocumentResponse();
    return message;
  }

};

function createBaseMsgAddVerification(): MsgAddVerification {
  return {
    id: "",
    verification: undefined,
    signer: ""
  };
}

export const MsgAddVerification = {
  encode(message: MsgAddVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.verification !== undefined) {
      Verification.encode(message.verification, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVerification();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.verification = Verification.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddVerification>): MsgAddVerification {
    const message = createBaseMsgAddVerification();
    message.id = object.id ?? "";
    message.verification = object.verification !== undefined && object.verification !== null ? Verification.fromPartial(object.verification) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddVerificationResponse(): MsgAddVerificationResponse {
  return {};
}

export const MsgAddVerificationResponse = {
  encode(_: MsgAddVerificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVerificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVerificationResponse();

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

  fromPartial(_: DeepPartial<MsgAddVerificationResponse>): MsgAddVerificationResponse {
    const message = createBaseMsgAddVerificationResponse();
    return message;
  }

};

function createBaseMsgSetVerificationRelationships(): MsgSetVerificationRelationships {
  return {
    id: "",
    methodId: "",
    relationships: [],
    signer: ""
  };
}

export const MsgSetVerificationRelationships = {
  encode(message: MsgSetVerificationRelationships, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.methodId !== "") {
      writer.uint32(18).string(message.methodId);
    }

    for (const v of message.relationships) {
      writer.uint32(26).string(v!);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVerificationRelationships {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationRelationships();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.methodId = reader.string();
          break;

        case 3:
          message.relationships.push(reader.string());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetVerificationRelationships>): MsgSetVerificationRelationships {
    const message = createBaseMsgSetVerificationRelationships();
    message.id = object.id ?? "";
    message.methodId = object.methodId ?? "";
    message.relationships = object.relationships?.map(e => e) || [];
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgSetVerificationRelationshipsResponse(): MsgSetVerificationRelationshipsResponse {
  return {};
}

export const MsgSetVerificationRelationshipsResponse = {
  encode(_: MsgSetVerificationRelationshipsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVerificationRelationshipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationRelationshipsResponse();

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

  fromPartial(_: DeepPartial<MsgSetVerificationRelationshipsResponse>): MsgSetVerificationRelationshipsResponse {
    const message = createBaseMsgSetVerificationRelationshipsResponse();
    return message;
  }

};

function createBaseMsgRevokeVerification(): MsgRevokeVerification {
  return {
    id: "",
    methodId: "",
    signer: ""
  };
}

export const MsgRevokeVerification = {
  encode(message: MsgRevokeVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.methodId !== "") {
      writer.uint32(18).string(message.methodId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVerification();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.methodId = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRevokeVerification>): MsgRevokeVerification {
    const message = createBaseMsgRevokeVerification();
    message.id = object.id ?? "";
    message.methodId = object.methodId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgRevokeVerificationResponse(): MsgRevokeVerificationResponse {
  return {};
}

export const MsgRevokeVerificationResponse = {
  encode(_: MsgRevokeVerificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVerificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVerificationResponse();

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

  fromPartial(_: DeepPartial<MsgRevokeVerificationResponse>): MsgRevokeVerificationResponse {
    const message = createBaseMsgRevokeVerificationResponse();
    return message;
  }

};

function createBaseMsgAddService(): MsgAddService {
  return {
    id: "",
    serviceData: undefined,
    signer: ""
  };
}

export const MsgAddService = {
  encode(message: MsgAddService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.serviceData !== undefined) {
      Service.encode(message.serviceData, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.serviceData = Service.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddService>): MsgAddService {
    const message = createBaseMsgAddService();
    message.id = object.id ?? "";
    message.serviceData = object.serviceData !== undefined && object.serviceData !== null ? Service.fromPartial(object.serviceData) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddServiceResponse(): MsgAddServiceResponse {
  return {};
}

export const MsgAddServiceResponse = {
  encode(_: MsgAddServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddServiceResponse();

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

  fromPartial(_: DeepPartial<MsgAddServiceResponse>): MsgAddServiceResponse {
    const message = createBaseMsgAddServiceResponse();
    return message;
  }

};

function createBaseMsgDeleteService(): MsgDeleteService {
  return {
    id: "",
    serviceId: "",
    signer: ""
  };
}

export const MsgDeleteService = {
  encode(message: MsgDeleteService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.serviceId !== "") {
      writer.uint32(18).string(message.serviceId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.serviceId = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteService>): MsgDeleteService {
    const message = createBaseMsgDeleteService();
    message.id = object.id ?? "";
    message.serviceId = object.serviceId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteServiceResponse(): MsgDeleteServiceResponse {
  return {};
}

export const MsgDeleteServiceResponse = {
  encode(_: MsgDeleteServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteServiceResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse {
    const message = createBaseMsgDeleteServiceResponse();
    return message;
  }

};

function createBaseMsgAddController(): MsgAddController {
  return {
    id: "",
    controllerDid: "",
    signer: ""
  };
}

export const MsgAddController = {
  encode(message: MsgAddController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.controllerDid !== "") {
      writer.uint32(18).string(message.controllerDid);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddController();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.controllerDid = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddController>): MsgAddController {
    const message = createBaseMsgAddController();
    message.id = object.id ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddControllerResponse(): MsgAddControllerResponse {
  return {};
}

export const MsgAddControllerResponse = {
  encode(_: MsgAddControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddControllerResponse();

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

  fromPartial(_: DeepPartial<MsgAddControllerResponse>): MsgAddControllerResponse {
    const message = createBaseMsgAddControllerResponse();
    return message;
  }

};

function createBaseMsgDeleteController(): MsgDeleteController {
  return {
    id: "",
    controllerDid: "",
    signer: ""
  };
}

export const MsgDeleteController = {
  encode(message: MsgDeleteController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.controllerDid !== "") {
      writer.uint32(18).string(message.controllerDid);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteController();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.controllerDid = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteController>): MsgDeleteController {
    const message = createBaseMsgDeleteController();
    message.id = object.id ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteControllerResponse(): MsgDeleteControllerResponse {
  return {};
}

export const MsgDeleteControllerResponse = {
  encode(_: MsgDeleteControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteControllerResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteControllerResponse>): MsgDeleteControllerResponse {
    const message = createBaseMsgDeleteControllerResponse();
    return message;
  }

};

function createBaseMsgAddLinkedResource(): MsgAddLinkedResource {
  return {
    id: "",
    linkedResource: undefined,
    signer: ""
  };
}

export const MsgAddLinkedResource = {
  encode(message: MsgAddLinkedResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.linkedResource !== undefined) {
      LinkedResource.encode(message.linkedResource, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLinkedResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.linkedResource = LinkedResource.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddLinkedResource>): MsgAddLinkedResource {
    const message = createBaseMsgAddLinkedResource();
    message.id = object.id ?? "";
    message.linkedResource = object.linkedResource !== undefined && object.linkedResource !== null ? LinkedResource.fromPartial(object.linkedResource) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteLinkedResource(): MsgDeleteLinkedResource {
  return {
    id: "",
    resourceId: "",
    signer: ""
  };
}

export const MsgDeleteLinkedResource = {
  encode(message: MsgDeleteLinkedResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.resourceId !== "") {
      writer.uint32(18).string(message.resourceId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteLinkedResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.resourceId = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteLinkedResource>): MsgDeleteLinkedResource {
    const message = createBaseMsgDeleteLinkedResource();
    message.id = object.id ?? "";
    message.resourceId = object.resourceId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddLinkedEntity(): MsgAddLinkedEntity {
  return {
    id: "",
    linkedEntity: undefined,
    signer: ""
  };
}

export const MsgAddLinkedEntity = {
  encode(message: MsgAddLinkedEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.linkedEntity !== undefined) {
      LinkedEntity.encode(message.linkedEntity, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLinkedEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.linkedEntity = LinkedEntity.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddLinkedEntity>): MsgAddLinkedEntity {
    const message = createBaseMsgAddLinkedEntity();
    message.id = object.id ?? "";
    message.linkedEntity = object.linkedEntity !== undefined && object.linkedEntity !== null ? LinkedEntity.fromPartial(object.linkedEntity) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteLinkedEntity(): MsgDeleteLinkedEntity {
  return {
    id: "",
    entityId: "",
    signer: ""
  };
}

export const MsgDeleteLinkedEntity = {
  encode(message: MsgDeleteLinkedEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteLinkedEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.entityId = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteLinkedEntity>): MsgDeleteLinkedEntity {
    const message = createBaseMsgDeleteLinkedEntity();
    message.id = object.id ?? "";
    message.entityId = object.entityId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddAccordedRight(): MsgAddAccordedRight {
  return {
    id: "",
    accordedRight: undefined,
    signer: ""
  };
}

export const MsgAddAccordedRight = {
  encode(message: MsgAddAccordedRight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.accordedRight !== undefined) {
      AccordedRight.encode(message.accordedRight, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccordedRight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccordedRight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.accordedRight = AccordedRight.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddAccordedRight>): MsgAddAccordedRight {
    const message = createBaseMsgAddAccordedRight();
    message.id = object.id ?? "";
    message.accordedRight = object.accordedRight !== undefined && object.accordedRight !== null ? AccordedRight.fromPartial(object.accordedRight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteAccordedRight(): MsgDeleteAccordedRight {
  return {
    id: "",
    rightId: "",
    signer: ""
  };
}

export const MsgDeleteAccordedRight = {
  encode(message: MsgDeleteAccordedRight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.rightId !== "") {
      writer.uint32(18).string(message.rightId);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccordedRight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccordedRight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.rightId = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteAccordedRight>): MsgDeleteAccordedRight {
    const message = createBaseMsgDeleteAccordedRight();
    message.id = object.id ?? "";
    message.rightId = object.rightId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddIidContext(): MsgAddIidContext {
  return {
    id: "",
    context: undefined,
    signer: ""
  };
}

export const MsgAddIidContext = {
  encode(message: MsgAddIidContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddIidContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddIidContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.context = Context.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddIidContext>): MsgAddIidContext {
    const message = createBaseMsgAddIidContext();
    message.id = object.id ?? "";
    message.context = object.context !== undefined && object.context !== null ? Context.fromPartial(object.context) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeactivateIID(): MsgDeactivateIID {
  return {
    id: "",
    state: false,
    signer: ""
  };
}

export const MsgDeactivateIID = {
  encode(message: MsgDeactivateIID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.state === true) {
      writer.uint32(16).bool(message.state);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateIID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateIID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.state = reader.bool();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeactivateIID>): MsgDeactivateIID {
    const message = createBaseMsgDeactivateIID();
    message.id = object.id ?? "";
    message.state = object.state ?? false;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgDeleteIidContext(): MsgDeleteIidContext {
  return {
    id: "",
    contextKey: "",
    signer: ""
  };
}

export const MsgDeleteIidContext = {
  encode(message: MsgDeleteIidContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.contextKey !== "") {
      writer.uint32(18).string(message.contextKey);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteIidContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteIidContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.contextKey = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteIidContext>): MsgDeleteIidContext {
    const message = createBaseMsgDeleteIidContext();
    message.id = object.id ?? "";
    message.contextKey = object.contextKey ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgUpdateIidMeta(): MsgUpdateIidMeta {
  return {
    id: "",
    meta: undefined,
    signer: ""
  };
}

export const MsgUpdateIidMeta = {
  encode(message: MsgUpdateIidMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.meta !== undefined) {
      IidMetadata.encode(message.meta, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIidMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.meta = IidMetadata.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateIidMeta>): MsgUpdateIidMeta {
    const message = createBaseMsgUpdateIidMeta();
    message.id = object.id ?? "";
    message.meta = object.meta !== undefined && object.meta !== null ? IidMetadata.fromPartial(object.meta) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAddLinkedResourceResponse(): MsgAddLinkedResourceResponse {
  return {};
}

export const MsgAddLinkedResourceResponse = {
  encode(_: MsgAddLinkedResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLinkedResourceResponse();

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

  fromPartial(_: DeepPartial<MsgAddLinkedResourceResponse>): MsgAddLinkedResourceResponse {
    const message = createBaseMsgAddLinkedResourceResponse();
    return message;
  }

};

function createBaseMsgDeleteLinkedResourceResponse(): MsgDeleteLinkedResourceResponse {
  return {};
}

export const MsgDeleteLinkedResourceResponse = {
  encode(_: MsgDeleteLinkedResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteLinkedResourceResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteLinkedResourceResponse>): MsgDeleteLinkedResourceResponse {
    const message = createBaseMsgDeleteLinkedResourceResponse();
    return message;
  }

};

function createBaseMsgAddLinkedEntityResponse(): MsgAddLinkedEntityResponse {
  return {};
}

export const MsgAddLinkedEntityResponse = {
  encode(_: MsgAddLinkedEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLinkedEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLinkedEntityResponse();

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

  fromPartial(_: DeepPartial<MsgAddLinkedEntityResponse>): MsgAddLinkedEntityResponse {
    const message = createBaseMsgAddLinkedEntityResponse();
    return message;
  }

};

function createBaseMsgDeleteLinkedEntityResponse(): MsgDeleteLinkedEntityResponse {
  return {};
}

export const MsgDeleteLinkedEntityResponse = {
  encode(_: MsgDeleteLinkedEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLinkedEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteLinkedEntityResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteLinkedEntityResponse>): MsgDeleteLinkedEntityResponse {
    const message = createBaseMsgDeleteLinkedEntityResponse();
    return message;
  }

};

function createBaseMsgAddAccordedRightResponse(): MsgAddAccordedRightResponse {
  return {};
}

export const MsgAddAccordedRightResponse = {
  encode(_: MsgAddAccordedRightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccordedRightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccordedRightResponse();

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

  fromPartial(_: DeepPartial<MsgAddAccordedRightResponse>): MsgAddAccordedRightResponse {
    const message = createBaseMsgAddAccordedRightResponse();
    return message;
  }

};

function createBaseMsgDeleteAccordedRightResponse(): MsgDeleteAccordedRightResponse {
  return {};
}

export const MsgDeleteAccordedRightResponse = {
  encode(_: MsgDeleteAccordedRightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccordedRightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccordedRightResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteAccordedRightResponse>): MsgDeleteAccordedRightResponse {
    const message = createBaseMsgDeleteAccordedRightResponse();
    return message;
  }

};

function createBaseMsgAddIidContextResponse(): MsgAddIidContextResponse {
  return {};
}

export const MsgAddIidContextResponse = {
  encode(_: MsgAddIidContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddIidContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddIidContextResponse();

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

  fromPartial(_: DeepPartial<MsgAddIidContextResponse>): MsgAddIidContextResponse {
    const message = createBaseMsgAddIidContextResponse();
    return message;
  }

};

function createBaseMsgDeleteIidContextResponse(): MsgDeleteIidContextResponse {
  return {};
}

export const MsgDeleteIidContextResponse = {
  encode(_: MsgDeleteIidContextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteIidContextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteIidContextResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteIidContextResponse>): MsgDeleteIidContextResponse {
    const message = createBaseMsgDeleteIidContextResponse();
    return message;
  }

};

function createBaseMsgUpdateIidMetaResponse(): MsgUpdateIidMetaResponse {
  return {};
}

export const MsgUpdateIidMetaResponse = {
  encode(_: MsgUpdateIidMetaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIidMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIidMetaResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateIidMetaResponse>): MsgUpdateIidMetaResponse {
    const message = createBaseMsgUpdateIidMetaResponse();
    return message;
  }

};

function createBaseMsgDeactivateIIDResponse(): MsgDeactivateIIDResponse {
  return {};
}

export const MsgDeactivateIIDResponse = {
  encode(_: MsgDeactivateIIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateIIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateIIDResponse();

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

  fromPartial(_: DeepPartial<MsgDeactivateIIDResponse>): MsgDeactivateIIDResponse {
    const message = createBaseMsgDeactivateIIDResponse();
    return message;
  }

};