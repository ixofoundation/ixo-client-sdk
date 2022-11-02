import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
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
  created?: Timestamp;
  updated?: Timestamp;
  deactivated: boolean;
  entityType: string;
  startDate?: Timestamp;
  endDate?: Timestamp;
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
  created?: TimestampSDKType;
  updated?: TimestampSDKType;
  deactivated: boolean;
  entityType: string;
  startDate?: TimestampSDKType;
  endDate?: TimestampSDKType;
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

  fromJSON(object: any): Context {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      val: isSet(object.val) ? String(object.val) : ""
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.val !== undefined && (obj.val = message.val);
    return obj;
  },

  fromPartial(object: Partial<Context>): Context {
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

  fromJSON(object: any): IidDocument {
    return {
      context: Array.isArray(object?.context) ? object.context.map((e: any) => Context.fromJSON(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      verificationMethod: Array.isArray(object?.verificationMethod) ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      authentication: Array.isArray(object?.authentication) ? object.authentication.map((e: any) => String(e)) : [],
      assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e: any) => String(e)) : [],
      keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e: any) => String(e)) : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation) ? object.capabilityInvocation.map((e: any) => String(e)) : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation) ? object.capabilityDelegation.map((e: any) => String(e)) : [],
      linkedResource: Array.isArray(object?.linkedResource) ? object.linkedResource.map((e: any) => LinkedResource.fromJSON(e)) : [],
      accordedRight: Array.isArray(object?.accordedRight) ? object.accordedRight.map((e: any) => AccordedRight.fromJSON(e)) : [],
      linkedEntity: Array.isArray(object?.linkedEntity) ? object.linkedEntity.map((e: any) => LinkedEntity.fromJSON(e)) : [],
      alsoKnownAs: isSet(object.alsoKnownAs) ? String(object.alsoKnownAs) : ""
    };
  },

  toJSON(message: IidDocument): unknown {
    const obj: any = {};

    if (message.context) {
      obj.context = message.context.map(e => e ? Context.toJSON(e) : undefined);
    } else {
      obj.context = [];
    }

    message.id !== undefined && (obj.id = message.id);

    if (message.controller) {
      obj.controller = message.controller.map(e => e);
    } else {
      obj.controller = [];
    }

    if (message.verificationMethod) {
      obj.verificationMethod = message.verificationMethod.map(e => e ? VerificationMethod.toJSON(e) : undefined);
    } else {
      obj.verificationMethod = [];
    }

    if (message.service) {
      obj.service = message.service.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }

    if (message.authentication) {
      obj.authentication = message.authentication.map(e => e);
    } else {
      obj.authentication = [];
    }

    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map(e => e);
    } else {
      obj.assertionMethod = [];
    }

    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map(e => e);
    } else {
      obj.keyAgreement = [];
    }

    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map(e => e);
    } else {
      obj.capabilityInvocation = [];
    }

    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map(e => e);
    } else {
      obj.capabilityDelegation = [];
    }

    if (message.linkedResource) {
      obj.linkedResource = message.linkedResource.map(e => e ? LinkedResource.toJSON(e) : undefined);
    } else {
      obj.linkedResource = [];
    }

    if (message.accordedRight) {
      obj.accordedRight = message.accordedRight.map(e => e ? AccordedRight.toJSON(e) : undefined);
    } else {
      obj.accordedRight = [];
    }

    if (message.linkedEntity) {
      obj.linkedEntity = message.linkedEntity.map(e => e ? LinkedEntity.toJSON(e) : undefined);
    } else {
      obj.linkedEntity = [];
    }

    message.alsoKnownAs !== undefined && (obj.alsoKnownAs = message.alsoKnownAs);
    return obj;
  },

  fromPartial(object: Partial<IidDocument>): IidDocument {
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

  fromJSON(object: any): AccordedRight {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      mechanism: isSet(object.mechanism) ? String(object.mechanism) : "",
      message: isSet(object.message) ? String(object.message) : "",
      service: isSet(object.service) ? String(object.service) : ""
    };
  },

  toJSON(message: AccordedRight): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.mechanism !== undefined && (obj.mechanism = message.mechanism);
    message.message !== undefined && (obj.message = message.message);
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  fromPartial(object: Partial<AccordedRight>): AccordedRight {
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

  fromJSON(object: any): LinkedResource {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      encrypted: isSet(object.encrypted) ? String(object.encrypted) : "",
      right: isSet(object.right) ? String(object.right) : ""
    };
  },

  toJSON(message: LinkedResource): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.mediaType !== undefined && (obj.mediaType = message.mediaType);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    message.proof !== undefined && (obj.proof = message.proof);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.right !== undefined && (obj.right = message.right);
    return obj;
  },

  fromPartial(object: Partial<LinkedResource>): LinkedResource {
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

  fromJSON(object: any): LinkedEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      relationship: isSet(object.relationship) ? String(object.relationship) : ""
    };
  },

  toJSON(message: LinkedEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.relationship !== undefined && (obj.relationship = message.relationship);
    return obj;
  },

  fromPartial(object: Partial<LinkedEntity>): LinkedEntity {
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

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      blockchainAccountID: isSet(object.blockchainAccountID) ? String(object.blockchainAccountID) : undefined,
      publicKeyHex: isSet(object.publicKeyHex) ? String(object.publicKeyHex) : undefined,
      publicKeyMultibase: isSet(object.publicKeyMultibase) ? String(object.publicKeyMultibase) : undefined
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.controller !== undefined && (obj.controller = message.controller);
    message.blockchainAccountID !== undefined && (obj.blockchainAccountID = message.blockchainAccountID);
    message.publicKeyHex !== undefined && (obj.publicKeyHex = message.publicKeyHex);
    message.publicKeyMultibase !== undefined && (obj.publicKeyMultibase = message.publicKeyMultibase);
    return obj;
  },

  fromPartial(object: Partial<VerificationMethod>): VerificationMethod {
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

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : ""
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },

  fromPartial(object: Partial<Service>): Service {
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
      Timestamp.encode(message.created, writer.uint32(18).fork()).ldelim();
    }

    if (message.updated !== undefined) {
      Timestamp.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }

    if (message.deactivated === true) {
      writer.uint32(32).bool(message.deactivated);
    }

    if (message.entityType !== "") {
      writer.uint32(42).string(message.entityType);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(50).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(58).fork()).ldelim();
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
          message.created = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.updated = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.deactivated = reader.bool();
          break;

        case 5:
          message.entityType = reader.string();
          break;

        case 6:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.endDate = Timestamp.decode(reader, reader.uint32());
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

  fromJSON(object: any): IidMetadata {
    return {
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
      updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
      deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      status: isSet(object.status) ? Number(object.status) : 0,
      stage: isSet(object.stage) ? String(object.stage) : "",
      relayerNode: isSet(object.relayerNode) ? String(object.relayerNode) : "",
      verifiableCredential: isSet(object.verifiableCredential) ? String(object.verifiableCredential) : "",
      credentials: Array.isArray(object?.credentials) ? object.credentials.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: IidMetadata): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.created !== undefined && (obj.created = fromTimestamp(message.created).toISOString());
    message.updated !== undefined && (obj.updated = fromTimestamp(message.updated).toISOString());
    message.deactivated !== undefined && (obj.deactivated = message.deactivated);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.stage !== undefined && (obj.stage = message.stage);
    message.relayerNode !== undefined && (obj.relayerNode = message.relayerNode);
    message.verifiableCredential !== undefined && (obj.verifiableCredential = message.verifiableCredential);

    if (message.credentials) {
      obj.credentials = message.credentials.map(e => e);
    } else {
      obj.credentials = [];
    }

    return obj;
  },

  fromPartial(object: Partial<IidMetadata>): IidMetadata {
    const message = createBaseIidMetadata();
    message.versionId = object.versionId ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    message.updated = object.updated !== undefined && object.updated !== null ? Timestamp.fromPartial(object.updated) : undefined;
    message.deactivated = object.deactivated ?? false;
    message.entityType = object.entityType ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.status = object.status ?? 0;
    message.stage = object.stage ?? "";
    message.relayerNode = object.relayerNode ?? "";
    message.verifiableCredential = object.verifiableCredential ?? "";
    message.credentials = object.credentials?.map(e => e) || [];
    return message;
  }

};