import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateIidDocument, MsgUpdateIidDocument, MsgAddVerification, MsgRevokeVerification, MsgSetVerificationRelationships, MsgAddService, MsgDeleteService, MsgAddController, MsgDeleteController, MsgAddLinkedResource, MsgDeleteLinkedResource, MsgAddLinkedEntity, MsgDeleteLinkedEntity, MsgAddAccordedRight, MsgDeleteAccordedRight, MsgAddIidContext, MsgDeactivateIID, MsgDeleteIidContext, MsgUpdateIidMeta } from "./tx";
export interface AminoMsgCreateIidDocument extends AminoMsg {
  type: "/iid.MsgCreateIidDocument";
  value: {
    id: string;
    controllers: string[];
    context: {
      key: string;
      val: string;
    }[];
    verifications: {
      relationships: string[];
      method: {
        id: string;
        type: string;
        controller: string;
        blockchainAccountID: string;
        publicKeyHex: string;
        publicKeyMultibase: string;
      };
      context: string[];
    }[];
    services: {
      id: string;
      type: string;
      serviceEndpoint: string;
    }[];
    accordedRight: {
      type: string;
      id: string;
      mechanism: string;
      message: string;
      service: string;
    }[];
    linkedResource: {
      type: string;
      id: string;
      description: string;
      mediaType: string;
      serviceEndpoint: string;
      proof: string;
      encrypted: string;
      right: string;
    }[];
    linkedEntity: {
      id: string;
      relationship: string;
    }[];
    signer: string;
  };
}
export interface AminoMsgUpdateIidDocument extends AminoMsg {
  type: "/iid.MsgUpdateIidDocument";
  value: {
    doc: {
      context: {
        key: string;
        val: string;
      }[];
      id: string;
      controller: string[];
      verificationMethod: {
        id: string;
        type: string;
        controller: string;
        blockchainAccountID: string;
        publicKeyHex: string;
        publicKeyMultibase: string;
      }[];
      service: {
        id: string;
        type: string;
        serviceEndpoint: string;
      }[];
      authentication: string[];
      assertionMethod: string[];
      keyAgreement: string[];
      capabilityInvocation: string[];
      capabilityDelegation: string[];
      linkedResource: {
        type: string;
        id: string;
        description: string;
        mediaType: string;
        serviceEndpoint: string;
        proof: string;
        encrypted: string;
        right: string;
      }[];
      accordedRight: {
        type: string;
        id: string;
        mechanism: string;
        message: string;
        service: string;
      }[];
      linkedEntity: {
        id: string;
        relationship: string;
      }[];
      alsoKnownAs: string;
    };
    signer: string;
  };
}
export interface AminoMsgAddVerification extends AminoMsg {
  type: "/iid.MsgAddVerification";
  value: {
    id: string;
    verification: {
      relationships: string[];
      method: {
        id: string;
        type: string;
        controller: string;
        blockchainAccountID: string;
        publicKeyHex: string;
        publicKeyMultibase: string;
      };
      context: string[];
    };
    signer: string;
  };
}
export interface AminoMsgRevokeVerification extends AminoMsg {
  type: "/iid.MsgRevokeVerification";
  value: {
    id: string;
    method_id: string;
    signer: string;
  };
}
export interface AminoMsgSetVerificationRelationships extends AminoMsg {
  type: "/iid.MsgSetVerificationRelationships";
  value: {
    id: string;
    method_id: string;
    relationships: string[];
    signer: string;
  };
}
export interface AminoMsgAddService extends AminoMsg {
  type: "/iid.MsgAddService";
  value: {
    id: string;
    service_data: {
      id: string;
      type: string;
      serviceEndpoint: string;
    };
    signer: string;
  };
}
export interface AminoMsgDeleteService extends AminoMsg {
  type: "/iid.MsgDeleteService";
  value: {
    id: string;
    service_id: string;
    signer: string;
  };
}
export interface AminoMsgAddController extends AminoMsg {
  type: "/iid.MsgAddController";
  value: {
    id: string;
    controller_did: string;
    signer: string;
  };
}
export interface AminoMsgDeleteController extends AminoMsg {
  type: "/iid.MsgDeleteController";
  value: {
    id: string;
    controller_did: string;
    signer: string;
  };
}
export interface AminoMsgAddLinkedResource extends AminoMsg {
  type: "/iid.MsgAddLinkedResource";
  value: {
    id: string;
    linkedResource: {
      type: string;
      id: string;
      description: string;
      mediaType: string;
      serviceEndpoint: string;
      proof: string;
      encrypted: string;
      right: string;
    };
    signer: string;
  };
}
export interface AminoMsgDeleteLinkedResource extends AminoMsg {
  type: "/iid.MsgDeleteLinkedResource";
  value: {
    id: string;
    resource_id: string;
    signer: string;
  };
}
export interface AminoMsgAddLinkedEntity extends AminoMsg {
  type: "/iid.MsgAddLinkedEntity";
  value: {
    id: string;
    linkedEntity: {
      id: string;
      relationship: string;
    };
    signer: string;
  };
}
export interface AminoMsgDeleteLinkedEntity extends AminoMsg {
  type: "/iid.MsgDeleteLinkedEntity";
  value: {
    id: string;
    entity_id: string;
    signer: string;
  };
}
export interface AminoMsgAddAccordedRight extends AminoMsg {
  type: "/iid.MsgAddAccordedRight";
  value: {
    id: string;
    accordedRight: {
      type: string;
      id: string;
      mechanism: string;
      message: string;
      service: string;
    };
    signer: string;
  };
}
export interface AminoMsgDeleteAccordedRight extends AminoMsg {
  type: "/iid.MsgDeleteAccordedRight";
  value: {
    id: string;
    right_id: string;
    signer: string;
  };
}
export interface AminoMsgAddIidContext extends AminoMsg {
  type: "/iid.MsgAddIidContext";
  value: {
    id: string;
    context: {
      key: string;
      val: string;
    };
    signer: string;
  };
}
export interface AminoMsgDeactivateIID extends AminoMsg {
  type: "/iid.MsgDeactivateIID";
  value: {
    id: string;
    state: boolean;
    signer: string;
  };
}
export interface AminoMsgDeleteIidContext extends AminoMsg {
  type: "/iid.MsgDeleteIidContext";
  value: {
    id: string;
    contextKey: string;
    signer: string;
  };
}
export interface AminoMsgUpdateIidMeta extends AminoMsg {
  type: "/iid.MsgUpdateIidMeta";
  value: {
    id: string;
    meta: {
      versionId: string;
      created: {
        seconds: string;
        nanos: number;
      };
      updated: {
        seconds: string;
        nanos: number;
      };
      deactivated: boolean;
      entityType: string;
      startDate: {
        seconds: string;
        nanos: number;
      };
      endDate: {
        seconds: string;
        nanos: number;
      };
      status: number;
      stage: string;
      relayerNode: string;
      verifiableCredential: string;
      credentials: string[];
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/iid.MsgCreateIidDocument": {
    aminoType: "/iid.MsgCreateIidDocument",
    toAmino: ({
      id,
      controllers,
      context,
      verifications,
      services,
      accordedRight,
      linkedResource,
      linkedEntity,
      signer
    }: MsgCreateIidDocument): AminoMsgCreateIidDocument["value"] => {
      return {
        id,
        controllers,
        context: context.map(el0 => ({
          key: el0.key,
          val: el0.val
        })),
        verifications: verifications.map(el0 => ({
          relationships: el0.relationships,
          method: {
            id: el0.method.id,
            type: el0.method.type,
            controller: el0.method.controller,
            blockchainAccountID: el0.method.blockchainAccountID,
            publicKeyHex: el0.method.publicKeyHex,
            publicKeyMultibase: el0.method.publicKeyMultibase
          },
          context: el0.context
        })),
        services: services.map(el0 => ({
          id: el0.id,
          type: el0.type,
          serviceEndpoint: el0.serviceEndpoint
        })),
        accordedRight: accordedRight.map(el0 => ({
          type: el0.type,
          id: el0.id,
          mechanism: el0.mechanism,
          message: el0.message,
          service: el0.service
        })),
        linkedResource: linkedResource.map(el0 => ({
          type: el0.type,
          id: el0.id,
          description: el0.description,
          mediaType: el0.mediaType,
          serviceEndpoint: el0.serviceEndpoint,
          proof: el0.proof,
          encrypted: el0.encrypted,
          right: el0.right
        })),
        linkedEntity: linkedEntity.map(el0 => ({
          id: el0.id,
          relationship: el0.relationship
        })),
        signer
      };
    },
    fromAmino: ({
      id,
      controllers,
      context,
      verifications,
      services,
      accordedRight,
      linkedResource,
      linkedEntity,
      signer
    }: AminoMsgCreateIidDocument["value"]): MsgCreateIidDocument => {
      return {
        id,
        controllers,
        context: context.map(el0 => ({
          key: el0.key,
          val: el0.val
        })),
        verifications: verifications.map(el0 => ({
          relationships: el0.relationships,
          method: {
            id: el0.method.id,
            type: el0.method.type,
            controller: el0.method.controller,
            blockchainAccountID: el0.method.blockchainAccountID,
            publicKeyHex: el0.method.publicKeyHex,
            publicKeyMultibase: el0.method.publicKeyMultibase
          },
          context: el0.context
        })),
        services: services.map(el0 => ({
          id: el0.id,
          type: el0.type,
          serviceEndpoint: el0.serviceEndpoint
        })),
        accordedRight: accordedRight.map(el0 => ({
          type: el0.type,
          id: el0.id,
          mechanism: el0.mechanism,
          message: el0.message,
          service: el0.service
        })),
        linkedResource: linkedResource.map(el0 => ({
          type: el0.type,
          id: el0.id,
          description: el0.description,
          mediaType: el0.mediaType,
          serviceEndpoint: el0.serviceEndpoint,
          proof: el0.proof,
          encrypted: el0.encrypted,
          right: el0.right
        })),
        linkedEntity: linkedEntity.map(el0 => ({
          id: el0.id,
          relationship: el0.relationship
        })),
        signer
      };
    }
  },
  "/iid.MsgUpdateIidDocument": {
    aminoType: "/iid.MsgUpdateIidDocument",
    toAmino: ({
      doc,
      signer
    }: MsgUpdateIidDocument): AminoMsgUpdateIidDocument["value"] => {
      return {
        doc: {
          context: doc.context.map(el0 => ({
            key: el0.key,
            val: el0.val
          })),
          id: doc.id,
          controller: doc.controller,
          verificationMethod: doc.verificationMethod.map(el0 => ({
            id: el0.id,
            type: el0.type,
            controller: el0.controller,
            blockchainAccountID: el0.blockchainAccountID,
            publicKeyHex: el0.publicKeyHex,
            publicKeyMultibase: el0.publicKeyMultibase
          })),
          service: doc.service.map(el0 => ({
            id: el0.id,
            type: el0.type,
            serviceEndpoint: el0.serviceEndpoint
          })),
          authentication: doc.authentication,
          assertionMethod: doc.assertionMethod,
          keyAgreement: doc.keyAgreement,
          capabilityInvocation: doc.capabilityInvocation,
          capabilityDelegation: doc.capabilityDelegation,
          linkedResource: doc.linkedResource.map(el0 => ({
            type: el0.type,
            id: el0.id,
            description: el0.description,
            mediaType: el0.mediaType,
            serviceEndpoint: el0.serviceEndpoint,
            proof: el0.proof,
            encrypted: el0.encrypted,
            right: el0.right
          })),
          accordedRight: doc.accordedRight.map(el0 => ({
            type: el0.type,
            id: el0.id,
            mechanism: el0.mechanism,
            message: el0.message,
            service: el0.service
          })),
          linkedEntity: doc.linkedEntity.map(el0 => ({
            id: el0.id,
            relationship: el0.relationship
          })),
          alsoKnownAs: doc.alsoKnownAs
        },
        signer
      };
    },
    fromAmino: ({
      doc,
      signer
    }: AminoMsgUpdateIidDocument["value"]): MsgUpdateIidDocument => {
      return {
        doc: {
          context: doc.context.map(el1 => ({
            key: el1.key,
            val: el1.val
          })),
          id: doc.id,
          controller: doc.controller,
          verificationMethod: doc.verificationMethod.map(el1 => ({
            id: el1.id,
            type: el1.type,
            controller: el1.controller,
            blockchainAccountID: el1.blockchainAccountID,
            publicKeyHex: el1.publicKeyHex,
            publicKeyMultibase: el1.publicKeyMultibase
          })),
          service: doc.service.map(el1 => ({
            id: el1.id,
            type: el1.type,
            serviceEndpoint: el1.serviceEndpoint
          })),
          authentication: doc.authentication,
          assertionMethod: doc.assertionMethod,
          keyAgreement: doc.keyAgreement,
          capabilityInvocation: doc.capabilityInvocation,
          capabilityDelegation: doc.capabilityDelegation,
          linkedResource: doc.linkedResource.map(el1 => ({
            type: el1.type,
            id: el1.id,
            description: el1.description,
            mediaType: el1.mediaType,
            serviceEndpoint: el1.serviceEndpoint,
            proof: el1.proof,
            encrypted: el1.encrypted,
            right: el1.right
          })),
          accordedRight: doc.accordedRight.map(el1 => ({
            type: el1.type,
            id: el1.id,
            mechanism: el1.mechanism,
            message: el1.message,
            service: el1.service
          })),
          linkedEntity: doc.linkedEntity.map(el1 => ({
            id: el1.id,
            relationship: el1.relationship
          })),
          alsoKnownAs: doc.alsoKnownAs
        },
        signer
      };
    }
  },
  "/iid.MsgAddVerification": {
    aminoType: "/iid.MsgAddVerification",
    toAmino: ({
      id,
      verification,
      signer
    }: MsgAddVerification): AminoMsgAddVerification["value"] => {
      return {
        id,
        verification: {
          relationships: verification.relationships,
          method: {
            id: verification.method.id,
            type: verification.method.type,
            controller: verification.method.controller,
            blockchainAccountID: verification.method.blockchainAccountID,
            publicKeyHex: verification.method.publicKeyHex,
            publicKeyMultibase: verification.method.publicKeyMultibase
          },
          context: verification.context
        },
        signer
      };
    },
    fromAmino: ({
      id,
      verification,
      signer
    }: AminoMsgAddVerification["value"]): MsgAddVerification => {
      return {
        id,
        verification: {
          relationships: verification.relationships,
          method: {
            id: verification.method.id,
            type: verification.method.type,
            controller: verification.method.controller,
            blockchainAccountID: verification.method.blockchainAccountID,
            publicKeyHex: verification.method.publicKeyHex,
            publicKeyMultibase: verification.method.publicKeyMultibase
          },
          context: verification.context
        },
        signer
      };
    }
  },
  "/iid.MsgRevokeVerification": {
    aminoType: "/iid.MsgRevokeVerification",
    toAmino: ({
      id,
      methodId,
      signer
    }: MsgRevokeVerification): AminoMsgRevokeVerification["value"] => {
      return {
        id,
        method_id: methodId,
        signer
      };
    },
    fromAmino: ({
      id,
      method_id,
      signer
    }: AminoMsgRevokeVerification["value"]): MsgRevokeVerification => {
      return {
        id,
        methodId: method_id,
        signer
      };
    }
  },
  "/iid.MsgSetVerificationRelationships": {
    aminoType: "/iid.MsgSetVerificationRelationships",
    toAmino: ({
      id,
      methodId,
      relationships,
      signer
    }: MsgSetVerificationRelationships): AminoMsgSetVerificationRelationships["value"] => {
      return {
        id,
        method_id: methodId,
        relationships,
        signer
      };
    },
    fromAmino: ({
      id,
      method_id,
      relationships,
      signer
    }: AminoMsgSetVerificationRelationships["value"]): MsgSetVerificationRelationships => {
      return {
        id,
        methodId: method_id,
        relationships,
        signer
      };
    }
  },
  "/iid.MsgAddService": {
    aminoType: "/iid.MsgAddService",
    toAmino: ({
      id,
      serviceData,
      signer
    }: MsgAddService): AminoMsgAddService["value"] => {
      return {
        id,
        service_data: {
          id: serviceData.id,
          type: serviceData.type,
          serviceEndpoint: serviceData.serviceEndpoint
        },
        signer
      };
    },
    fromAmino: ({
      id,
      service_data,
      signer
    }: AminoMsgAddService["value"]): MsgAddService => {
      return {
        id,
        serviceData: {
          id: service_data.id,
          type: service_data.type,
          serviceEndpoint: service_data.serviceEndpoint
        },
        signer
      };
    }
  },
  "/iid.MsgDeleteService": {
    aminoType: "/iid.MsgDeleteService",
    toAmino: ({
      id,
      serviceId,
      signer
    }: MsgDeleteService): AminoMsgDeleteService["value"] => {
      return {
        id,
        service_id: serviceId,
        signer
      };
    },
    fromAmino: ({
      id,
      service_id,
      signer
    }: AminoMsgDeleteService["value"]): MsgDeleteService => {
      return {
        id,
        serviceId: service_id,
        signer
      };
    }
  },
  "/iid.MsgAddController": {
    aminoType: "/iid.MsgAddController",
    toAmino: ({
      id,
      controllerDid,
      signer
    }: MsgAddController): AminoMsgAddController["value"] => {
      return {
        id,
        controller_did: controllerDid,
        signer
      };
    },
    fromAmino: ({
      id,
      controller_did,
      signer
    }: AminoMsgAddController["value"]): MsgAddController => {
      return {
        id,
        controllerDid: controller_did,
        signer
      };
    }
  },
  "/iid.MsgDeleteController": {
    aminoType: "/iid.MsgDeleteController",
    toAmino: ({
      id,
      controllerDid,
      signer
    }: MsgDeleteController): AminoMsgDeleteController["value"] => {
      return {
        id,
        controller_did: controllerDid,
        signer
      };
    },
    fromAmino: ({
      id,
      controller_did,
      signer
    }: AminoMsgDeleteController["value"]): MsgDeleteController => {
      return {
        id,
        controllerDid: controller_did,
        signer
      };
    }
  },
  "/iid.MsgAddLinkedResource": {
    aminoType: "/iid.MsgAddLinkedResource",
    toAmino: ({
      id,
      linkedResource,
      signer
    }: MsgAddLinkedResource): AminoMsgAddLinkedResource["value"] => {
      return {
        id,
        linkedResource: {
          type: linkedResource.type,
          id: linkedResource.id,
          description: linkedResource.description,
          mediaType: linkedResource.mediaType,
          serviceEndpoint: linkedResource.serviceEndpoint,
          proof: linkedResource.proof,
          encrypted: linkedResource.encrypted,
          right: linkedResource.right
        },
        signer
      };
    },
    fromAmino: ({
      id,
      linkedResource,
      signer
    }: AminoMsgAddLinkedResource["value"]): MsgAddLinkedResource => {
      return {
        id,
        linkedResource: {
          type: linkedResource.type,
          id: linkedResource.id,
          description: linkedResource.description,
          mediaType: linkedResource.mediaType,
          serviceEndpoint: linkedResource.serviceEndpoint,
          proof: linkedResource.proof,
          encrypted: linkedResource.encrypted,
          right: linkedResource.right
        },
        signer
      };
    }
  },
  "/iid.MsgDeleteLinkedResource": {
    aminoType: "/iid.MsgDeleteLinkedResource",
    toAmino: ({
      id,
      resourceId,
      signer
    }: MsgDeleteLinkedResource): AminoMsgDeleteLinkedResource["value"] => {
      return {
        id,
        resource_id: resourceId,
        signer
      };
    },
    fromAmino: ({
      id,
      resource_id,
      signer
    }: AminoMsgDeleteLinkedResource["value"]): MsgDeleteLinkedResource => {
      return {
        id,
        resourceId: resource_id,
        signer
      };
    }
  },
  "/iid.MsgAddLinkedEntity": {
    aminoType: "/iid.MsgAddLinkedEntity",
    toAmino: ({
      id,
      linkedEntity,
      signer
    }: MsgAddLinkedEntity): AminoMsgAddLinkedEntity["value"] => {
      return {
        id,
        linkedEntity: {
          id: linkedEntity.id,
          relationship: linkedEntity.relationship
        },
        signer
      };
    },
    fromAmino: ({
      id,
      linkedEntity,
      signer
    }: AminoMsgAddLinkedEntity["value"]): MsgAddLinkedEntity => {
      return {
        id,
        linkedEntity: {
          id: linkedEntity.id,
          relationship: linkedEntity.relationship
        },
        signer
      };
    }
  },
  "/iid.MsgDeleteLinkedEntity": {
    aminoType: "/iid.MsgDeleteLinkedEntity",
    toAmino: ({
      id,
      entityId,
      signer
    }: MsgDeleteLinkedEntity): AminoMsgDeleteLinkedEntity["value"] => {
      return {
        id,
        entity_id: entityId,
        signer
      };
    },
    fromAmino: ({
      id,
      entity_id,
      signer
    }: AminoMsgDeleteLinkedEntity["value"]): MsgDeleteLinkedEntity => {
      return {
        id,
        entityId: entity_id,
        signer
      };
    }
  },
  "/iid.MsgAddAccordedRight": {
    aminoType: "/iid.MsgAddAccordedRight",
    toAmino: ({
      id,
      accordedRight,
      signer
    }: MsgAddAccordedRight): AminoMsgAddAccordedRight["value"] => {
      return {
        id,
        accordedRight: {
          type: accordedRight.type,
          id: accordedRight.id,
          mechanism: accordedRight.mechanism,
          message: accordedRight.message,
          service: accordedRight.service
        },
        signer
      };
    },
    fromAmino: ({
      id,
      accordedRight,
      signer
    }: AminoMsgAddAccordedRight["value"]): MsgAddAccordedRight => {
      return {
        id,
        accordedRight: {
          type: accordedRight.type,
          id: accordedRight.id,
          mechanism: accordedRight.mechanism,
          message: accordedRight.message,
          service: accordedRight.service
        },
        signer
      };
    }
  },
  "/iid.MsgDeleteAccordedRight": {
    aminoType: "/iid.MsgDeleteAccordedRight",
    toAmino: ({
      id,
      rightId,
      signer
    }: MsgDeleteAccordedRight): AminoMsgDeleteAccordedRight["value"] => {
      return {
        id,
        right_id: rightId,
        signer
      };
    },
    fromAmino: ({
      id,
      right_id,
      signer
    }: AminoMsgDeleteAccordedRight["value"]): MsgDeleteAccordedRight => {
      return {
        id,
        rightId: right_id,
        signer
      };
    }
  },
  "/iid.MsgAddIidContext": {
    aminoType: "/iid.MsgAddIidContext",
    toAmino: ({
      id,
      context,
      signer
    }: MsgAddIidContext): AminoMsgAddIidContext["value"] => {
      return {
        id,
        context: {
          key: context.key,
          val: context.val
        },
        signer
      };
    },
    fromAmino: ({
      id,
      context,
      signer
    }: AminoMsgAddIidContext["value"]): MsgAddIidContext => {
      return {
        id,
        context: {
          key: context.key,
          val: context.val
        },
        signer
      };
    }
  },
  "/iid.MsgDeactivateIID": {
    aminoType: "/iid.MsgDeactivateIID",
    toAmino: ({
      id,
      state,
      signer
    }: MsgDeactivateIID): AminoMsgDeactivateIID["value"] => {
      return {
        id,
        state,
        signer
      };
    },
    fromAmino: ({
      id,
      state,
      signer
    }: AminoMsgDeactivateIID["value"]): MsgDeactivateIID => {
      return {
        id,
        state,
        signer
      };
    }
  },
  "/iid.MsgDeleteIidContext": {
    aminoType: "/iid.MsgDeleteIidContext",
    toAmino: ({
      id,
      contextKey,
      signer
    }: MsgDeleteIidContext): AminoMsgDeleteIidContext["value"] => {
      return {
        id,
        contextKey,
        signer
      };
    },
    fromAmino: ({
      id,
      contextKey,
      signer
    }: AminoMsgDeleteIidContext["value"]): MsgDeleteIidContext => {
      return {
        id,
        contextKey,
        signer
      };
    }
  },
  "/iid.MsgUpdateIidMeta": {
    aminoType: "/iid.MsgUpdateIidMeta",
    toAmino: ({
      id,
      meta,
      signer
    }: MsgUpdateIidMeta): AminoMsgUpdateIidMeta["value"] => {
      return {
        id,
        meta: {
          versionId: meta.versionId,
          created: meta.created,
          updated: meta.updated,
          deactivated: meta.deactivated,
          entityType: meta.entityType,
          startDate: meta.startDate,
          endDate: meta.endDate,
          status: meta.status,
          stage: meta.stage,
          relayerNode: meta.relayerNode,
          verifiableCredential: meta.verifiableCredential,
          credentials: meta.credentials
        },
        signer
      };
    },
    fromAmino: ({
      id,
      meta,
      signer
    }: AminoMsgUpdateIidMeta["value"]): MsgUpdateIidMeta => {
      return {
        id,
        meta: {
          versionId: meta.versionId,
          created: meta.created,
          updated: meta.updated,
          deactivated: meta.deactivated,
          entityType: meta.entityType,
          startDate: meta.startDate,
          endDate: meta.endDate,
          status: meta.status,
          stage: meta.stage,
          relayerNode: meta.relayerNode,
          verifiableCredential: meta.verifiableCredential,
          credentials: meta.credentials
        },
        signer
      };
    }
  }
};