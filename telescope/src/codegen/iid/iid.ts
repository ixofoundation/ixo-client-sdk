import { Timestamp } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../helpers";
export interface Context {
  key: string;
  val: string;
}
export interface ContextSDKType {
  key: string;
  val: string;
}
export interface IidDocument {
  /** @context is spec for did document. */
  context: Context[];
  /** id represents the id for the did document. */

  id: string;
  /**
   * A DID controller is an entity that is authorized to make changes to a DID document.
   * cfr. https://www.w3.org/TR/did-core/#did-controller
   */

  controller: string[];
  /**
   * A DID document can express verification methods,
   * such as cryptographic public keys, which can be used
   * to authenticate or authorize interactions with the DID subject or associated parties.
   * https://www.w3.org/TR/did-core/#verification-methods
   */

  verificationMethod: VerificationMethod[];
  /**
   * Services are used in DID documents to express ways of communicating
   * with the DID subject or associated entities.
   * https://www.w3.org/TR/did-core/#services
   */

  service: Service[];
  /**
   * NOTE: below this line there are the relationships
   * Authentication represents public key associated with the did document.
   * cfr. https://www.w3.org/TR/did-core/#authentication
   */

  authentication: string[];
  /**
   * Used to specify how the DID subject is expected to express claims,
   * such as for the purposes of issuing a Verifiable Credential.
   * cfr. https://www.w3.org/TR/did-core/#assertion
   */

  assertionMethod: string[];
  /**
   * used to specify how an entity can generate encryption material
   * in order to transmit confidential information intended for the DID subject.
   * https://www.w3.org/TR/did-core/#key-agreement
   */

  keyAgreement: string[];
  /**
   * Used to specify a verification method that might be used by the DID subject
   * to invoke a cryptographic capability, such as the authorization
   * to update the DID Document.
   * https://www.w3.org/TR/did-core/#capability-invocation
   */

  capabilityInvocation: string[];
  /**
   * Used to specify a mechanism that might be used by the DID subject
   * to delegate a cryptographic capability to another party.
   * https://www.w3.org/TR/did-core/#capability-delegation
   */

  capabilityDelegation: string[];
  linkedResource: LinkedResource[];
  accordedRight: AccordedRight[];
  linkedEntity: LinkedEntity[];
  alsoKnownAs: string;
}
export interface IidDocumentSDKType {
  /** @context is spec for did document. */
  context: ContextSDKType[];
  /** id represents the id for the did document. */

  id: string;
  /**
   * A DID controller is an entity that is authorized to make changes to a DID document.
   * cfr. https://www.w3.org/TR/did-core/#did-controller
   */

  controller: string[];
  /**
   * A DID document can express verification methods,
   * such as cryptographic public keys, which can be used
   * to authenticate or authorize interactions with the DID subject or associated parties.
   * https://www.w3.org/TR/did-core/#verification-methods
   */

  verificationMethod: VerificationMethodSDKType[];
  /**
   * Services are used in DID documents to express ways of communicating
   * with the DID subject or associated entities.
   * https://www.w3.org/TR/did-core/#services
   */

  service: ServiceSDKType[];
  /**
   * NOTE: below this line there are the relationships
   * Authentication represents public key associated with the did document.
   * cfr. https://www.w3.org/TR/did-core/#authentication
   */

  authentication: string[];
  /**
   * Used to specify how the DID subject is expected to express claims,
   * such as for the purposes of issuing a Verifiable Credential.
   * cfr. https://www.w3.org/TR/did-core/#assertion
   */

  assertionMethod: string[];
  /**
   * used to specify how an entity can generate encryption material
   * in order to transmit confidential information intended for the DID subject.
   * https://www.w3.org/TR/did-core/#key-agreement
   */

  keyAgreement: string[];
  /**
   * Used to specify a verification method that might be used by the DID subject
   * to invoke a cryptographic capability, such as the authorization
   * to update the DID Document.
   * https://www.w3.org/TR/did-core/#capability-invocation
   */

  capabilityInvocation: string[];
  /**
   * Used to specify a mechanism that might be used by the DID subject
   * to delegate a cryptographic capability to another party.
   * https://www.w3.org/TR/did-core/#capability-delegation
   */

  capabilityDelegation: string[];
  linkedResource: LinkedResourceSDKType[];
  accordedRight: AccordedRightSDKType[];
  linkedEntity: LinkedEntitySDKType[];
  alsoKnownAs: string;
}
export interface AccordedRight {
  type: string;
  id: string;
  mechanism: string;
  message: string;
  service: string;
}
export interface AccordedRightSDKType {
  type: string;
  id: string;
  mechanism: string;
  message: string;
  service: string;
}
export interface LinkedResource {
  type: string;
  id: string;
  description: string;
  mediaType: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedResourceSDKType {
  type: string;
  id: string;
  description: string;
  mediaType: string;
  serviceEndpoint: string;
  proof: string;
  encrypted: string;
  right: string;
}
export interface LinkedEntity {
  id: string;
  relationship: string;
}
export interface LinkedEntitySDKType {
  id: string;
  relationship: string;
}
export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  blockchainAccountID?: string;
  publicKeyHex?: string;
  publicKeyMultibase?: string;
}
export interface VerificationMethodSDKType {
  id: string;
  type: string;
  controller: string;
  blockchainAccountID?: string;
  publicKeyHex?: string;
  publicKeyMultibase?: string;
}
/** Service defines how to find data associated with a identifer */

export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}
/** Service defines how to find data associated with a identifer */

export interface ServiceSDKType {
  id: string;
  type: string;
  serviceEndpoint: string;
}
/**
 * DidMetadata defines metadata associated to a did document such as
 * the status of the DID document
 */

export interface IidMetadata {
  versionId: string;
  created?: Date;
  updated?: Date;
  deactivated: boolean;
  entityType: string;
  startDate?: Date;
  endDate?: Date;
  status: number;
  stage: string;
  relayerNode: string;
  verifiableCredential: string;
  credentials: string[];
}
/**
 * DidMetadata defines metadata associated to a did document such as
 * the status of the DID document
 */

export interface IidMetadataSDKType {
  versionId: string;
  created?: Date;
  updated?: Date;
  deactivated: boolean;
  entityType: string;
  startDate?: Date;
  endDate?: Date;
  status: number;
  stage: string;
  relayerNode: string;
  verifiableCredential: string;
  credentials: string[];
}

function createBaseContext(): Context {
  return {
    key: "",
    val: ""
  };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.val = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    return message;
  }

};

function createBaseIidDocument(): IidDocument {
  return {
    context: [],
    id: "",
    controller: [],
    verificationMethod: [],
    service: [],
    authentication: [],
    assertionMethod: [],
    keyAgreement: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    linkedResource: [],
    accordedRight: [],
    linkedEntity: [],
    alsoKnownAs: ""
  };
}

export const IidDocument = {
  encode(message: IidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.context) {
      Context.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.service) {
      Service.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.authentication) {
      writer.uint32(50).string(v!);
    }

    for (const v of message.assertionMethod) {
      writer.uint32(58).string(v!);
    }

    for (const v of message.keyAgreement) {
      writer.uint32(66).string(v!);
    }

    for (const v of message.capabilityInvocation) {
      writer.uint32(74).string(v!);
    }

    for (const v of message.capabilityDelegation) {
      writer.uint32(82).string(v!);
    }

    for (const v of message.linkedResource) {
      LinkedResource.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.accordedRight) {
      AccordedRight.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.linkedEntity) {
      LinkedEntity.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    if (message.alsoKnownAs !== "") {
      writer.uint32(114).string(message.alsoKnownAs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.context.push(Context.decode(reader, reader.uint32()));
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.controller.push(reader.string());
          break;

        case 4:
          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          break;

        case 5:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;

        case 6:
          message.authentication.push(reader.string());
          break;

        case 7:
          message.assertionMethod.push(reader.string());
          break;

        case 8:
          message.keyAgreement.push(reader.string());
          break;

        case 9:
          message.capabilityInvocation.push(reader.string());
          break;

        case 10:
          message.capabilityDelegation.push(reader.string());
          break;

        case 11:
          message.linkedResource.push(LinkedResource.decode(reader, reader.uint32()));
          break;

        case 12:
          message.accordedRight.push(AccordedRight.decode(reader, reader.uint32()));
          break;

        case 13:
          message.linkedEntity.push(LinkedEntity.decode(reader, reader.uint32()));
          break;

        case 14:
          message.alsoKnownAs = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IidDocument>): IidDocument {
    const message = createBaseIidDocument();
    message.context = object.context?.map(e => Context.fromPartial(e)) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map(e => e) || [];
    message.verificationMethod = object.verificationMethod?.map(e => VerificationMethod.fromPartial(e)) || [];
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.authentication = object.authentication?.map(e => e) || [];
    message.assertionMethod = object.assertionMethod?.map(e => e) || [];
    message.keyAgreement = object.keyAgreement?.map(e => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map(e => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map(e => e) || [];
    message.linkedResource = object.linkedResource?.map(e => LinkedResource.fromPartial(e)) || [];
    message.accordedRight = object.accordedRight?.map(e => AccordedRight.fromPartial(e)) || [];
    message.linkedEntity = object.linkedEntity?.map(e => LinkedEntity.fromPartial(e)) || [];
    message.alsoKnownAs = object.alsoKnownAs ?? "";
    return message;
  }

};

function createBaseAccordedRight(): AccordedRight {
  return {
    type: "",
    id: "",
    mechanism: "",
    message: "",
    service: ""
  };
}

export const AccordedRight = {
  encode(message: AccordedRight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.mechanism !== "") {
      writer.uint32(26).string(message.mechanism);
    }

    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }

    if (message.service !== "") {
      writer.uint32(42).string(message.service);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccordedRight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccordedRight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.mechanism = reader.string();
          break;

        case 4:
          message.message = reader.string();
          break;

        case 5:
          message.service = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AccordedRight>): AccordedRight {
    const message = createBaseAccordedRight();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.mechanism = object.mechanism ?? "";
    message.message = object.message ?? "";
    message.service = object.service ?? "";
    return message;
  }

};

function createBaseLinkedResource(): LinkedResource {
  return {
    type: "",
    id: "",
    description: "",
    mediaType: "",
    serviceEndpoint: "",
    proof: "",
    encrypted: "",
    right: ""
  };
}

export const LinkedResource = {
  encode(message: LinkedResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.mediaType !== "") {
      writer.uint32(34).string(message.mediaType);
    }

    if (message.serviceEndpoint !== "") {
      writer.uint32(42).string(message.serviceEndpoint);
    }

    if (message.proof !== "") {
      writer.uint32(50).string(message.proof);
    }

    if (message.encrypted !== "") {
      writer.uint32(58).string(message.encrypted);
    }

    if (message.right !== "") {
      writer.uint32(66).string(message.right);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.mediaType = reader.string();
          break;

        case 5:
          message.serviceEndpoint = reader.string();
          break;

        case 6:
          message.proof = reader.string();
          break;

        case 7:
          message.encrypted = reader.string();
          break;

        case 8:
          message.right = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LinkedResource>): LinkedResource {
    const message = createBaseLinkedResource();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.mediaType = object.mediaType ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    message.proof = object.proof ?? "";
    message.encrypted = object.encrypted ?? "";
    message.right = object.right ?? "";
    return message;
  }

};

function createBaseLinkedEntity(): LinkedEntity {
  return {
    id: "",
    relationship: ""
  };
}

export const LinkedEntity = {
  encode(message: LinkedEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.relationship !== "") {
      writer.uint32(26).string(message.relationship);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedEntity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.relationship = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LinkedEntity>): LinkedEntity {
    const message = createBaseLinkedEntity();
    message.id = object.id ?? "";
    message.relationship = object.relationship ?? "";
    return message;
  }

};

function createBaseVerificationMethod(): VerificationMethod {
  return {
    id: "",
    type: "",
    controller: "",
    blockchainAccountID: undefined,
    publicKeyHex: undefined,
    publicKeyMultibase: undefined
  };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }

    if (message.blockchainAccountID !== undefined) {
      writer.uint32(34).string(message.blockchainAccountID);
    }

    if (message.publicKeyHex !== undefined) {
      writer.uint32(42).string(message.publicKeyHex);
    }

    if (message.publicKeyMultibase !== undefined) {
      writer.uint32(50).string(message.publicKeyMultibase);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.controller = reader.string();
          break;

        case 4:
          message.blockchainAccountID = reader.string();
          break;

        case 5:
          message.publicKeyHex = reader.string();
          break;

        case 6:
          message.publicKeyMultibase = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VerificationMethod>): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.blockchainAccountID = object.blockchainAccountID ?? undefined;
    message.publicKeyHex = object.publicKeyHex ?? undefined;
    message.publicKeyMultibase = object.publicKeyMultibase ?? undefined;
    return message;
  }

};

function createBaseService(): Service {
  return {
    id: "",
    type: "",
    serviceEndpoint: ""
  };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.serviceEndpoint = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  }

};

function createBaseIidMetadata(): IidMetadata {
  return {
    versionId: "",
    created: undefined,
    updated: undefined,
    deactivated: false,
    entityType: "",
    startDate: undefined,
    endDate: undefined,
    status: 0,
    stage: "",
    relayerNode: "",
    verifiableCredential: "",
    credentials: []
  };
}

export const IidMetadata = {
  encode(message: IidMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }

    if (message.created !== undefined) {
      Timestamp.encode(toTimestamp(message.created), writer.uint32(18).fork()).ldelim();
    }

    if (message.updated !== undefined) {
      Timestamp.encode(toTimestamp(message.updated), writer.uint32(26).fork()).ldelim();
    }

    if (message.deactivated === true) {
      writer.uint32(32).bool(message.deactivated);
    }

    if (message.entityType !== "") {
      writer.uint32(42).string(message.entityType);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(58).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    if (message.stage !== "") {
      writer.uint32(74).string(message.stage);
    }

    if (message.relayerNode !== "") {
      writer.uint32(82).string(message.relayerNode);
    }

    if (message.verifiableCredential !== "") {
      writer.uint32(90).string(message.verifiableCredential);
    }

    for (const v of message.credentials) {
      writer.uint32(98).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IidMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIidMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.versionId = reader.string();
          break;

        case 2:
          message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.updated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.deactivated = reader.bool();
          break;

        case 5:
          message.entityType = reader.string();
          break;

        case 6:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.status = reader.int32();
          break;

        case 9:
          message.stage = reader.string();
          break;

        case 10:
          message.relayerNode = reader.string();
          break;

        case 11:
          message.verifiableCredential = reader.string();
          break;

        case 12:
          message.credentials.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IidMetadata>): IidMetadata {
    const message = createBaseIidMetadata();
    message.versionId = object.versionId ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.deactivated = object.deactivated ?? false;
    message.entityType = object.entityType ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? 0;
    message.stage = object.stage ?? "";
    message.relayerNode = object.relayerNode ?? "";
    message.verifiableCredential = object.verifiableCredential ?? "";
    message.credentials = object.credentials?.map(e => e) || [];
    return message;
  }

};