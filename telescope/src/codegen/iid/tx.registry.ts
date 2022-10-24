import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateIidDocument, MsgUpdateIidDocument, MsgAddVerification, MsgRevokeVerification, MsgSetVerificationRelationships, MsgAddService, MsgDeleteService, MsgAddController, MsgDeleteController, MsgAddLinkedResource, MsgDeleteLinkedResource, MsgAddLinkedEntity, MsgDeleteLinkedEntity, MsgAddAccordedRight, MsgDeleteAccordedRight, MsgAddIidContext, MsgDeactivateIID, MsgDeleteIidContext, MsgUpdateIidMeta } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/iid.MsgCreateIidDocument", MsgCreateIidDocument], ["/iid.MsgUpdateIidDocument", MsgUpdateIidDocument], ["/iid.MsgAddVerification", MsgAddVerification], ["/iid.MsgRevokeVerification", MsgRevokeVerification], ["/iid.MsgSetVerificationRelationships", MsgSetVerificationRelationships], ["/iid.MsgAddService", MsgAddService], ["/iid.MsgDeleteService", MsgDeleteService], ["/iid.MsgAddController", MsgAddController], ["/iid.MsgDeleteController", MsgDeleteController], ["/iid.MsgAddLinkedResource", MsgAddLinkedResource], ["/iid.MsgDeleteLinkedResource", MsgDeleteLinkedResource], ["/iid.MsgAddLinkedEntity", MsgAddLinkedEntity], ["/iid.MsgDeleteLinkedEntity", MsgDeleteLinkedEntity], ["/iid.MsgAddAccordedRight", MsgAddAccordedRight], ["/iid.MsgDeleteAccordedRight", MsgDeleteAccordedRight], ["/iid.MsgAddIidContext", MsgAddIidContext], ["/iid.MsgDeactivateIID", MsgDeactivateIID], ["/iid.MsgDeleteIidContext", MsgDeleteIidContext], ["/iid.MsgUpdateIidMeta", MsgUpdateIidMeta]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createIidDocument(value: MsgCreateIidDocument) {
      return {
        typeUrl: "/iid.MsgCreateIidDocument",
        value: MsgCreateIidDocument.encode(value).finish()
      };
    },

    updateIidDocument(value: MsgUpdateIidDocument) {
      return {
        typeUrl: "/iid.MsgUpdateIidDocument",
        value: MsgUpdateIidDocument.encode(value).finish()
      };
    },

    addVerification(value: MsgAddVerification) {
      return {
        typeUrl: "/iid.MsgAddVerification",
        value: MsgAddVerification.encode(value).finish()
      };
    },

    revokeVerification(value: MsgRevokeVerification) {
      return {
        typeUrl: "/iid.MsgRevokeVerification",
        value: MsgRevokeVerification.encode(value).finish()
      };
    },

    setVerificationRelationships(value: MsgSetVerificationRelationships) {
      return {
        typeUrl: "/iid.MsgSetVerificationRelationships",
        value: MsgSetVerificationRelationships.encode(value).finish()
      };
    },

    addService(value: MsgAddService) {
      return {
        typeUrl: "/iid.MsgAddService",
        value: MsgAddService.encode(value).finish()
      };
    },

    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/iid.MsgDeleteService",
        value: MsgDeleteService.encode(value).finish()
      };
    },

    addController(value: MsgAddController) {
      return {
        typeUrl: "/iid.MsgAddController",
        value: MsgAddController.encode(value).finish()
      };
    },

    deleteController(value: MsgDeleteController) {
      return {
        typeUrl: "/iid.MsgDeleteController",
        value: MsgDeleteController.encode(value).finish()
      };
    },

    addLinkedResource(value: MsgAddLinkedResource) {
      return {
        typeUrl: "/iid.MsgAddLinkedResource",
        value: MsgAddLinkedResource.encode(value).finish()
      };
    },

    deleteLinkedResource(value: MsgDeleteLinkedResource) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedResource",
        value: MsgDeleteLinkedResource.encode(value).finish()
      };
    },

    addLinkedEntity(value: MsgAddLinkedEntity) {
      return {
        typeUrl: "/iid.MsgAddLinkedEntity",
        value: MsgAddLinkedEntity.encode(value).finish()
      };
    },

    deleteLinkedEntity(value: MsgDeleteLinkedEntity) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedEntity",
        value: MsgDeleteLinkedEntity.encode(value).finish()
      };
    },

    addAccordedRight(value: MsgAddAccordedRight) {
      return {
        typeUrl: "/iid.MsgAddAccordedRight",
        value: MsgAddAccordedRight.encode(value).finish()
      };
    },

    deleteAccordedRight(value: MsgDeleteAccordedRight) {
      return {
        typeUrl: "/iid.MsgDeleteAccordedRight",
        value: MsgDeleteAccordedRight.encode(value).finish()
      };
    },

    addIidContext(value: MsgAddIidContext) {
      return {
        typeUrl: "/iid.MsgAddIidContext",
        value: MsgAddIidContext.encode(value).finish()
      };
    },

    deactivateIID(value: MsgDeactivateIID) {
      return {
        typeUrl: "/iid.MsgDeactivateIID",
        value: MsgDeactivateIID.encode(value).finish()
      };
    },

    deleteIidContext(value: MsgDeleteIidContext) {
      return {
        typeUrl: "/iid.MsgDeleteIidContext",
        value: MsgDeleteIidContext.encode(value).finish()
      };
    },

    updateMetaData(value: MsgUpdateIidMeta) {
      return {
        typeUrl: "/iid.MsgUpdateIidMeta",
        value: MsgUpdateIidMeta.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createIidDocument(value: MsgCreateIidDocument) {
      return {
        typeUrl: "/iid.MsgCreateIidDocument",
        value
      };
    },

    updateIidDocument(value: MsgUpdateIidDocument) {
      return {
        typeUrl: "/iid.MsgUpdateIidDocument",
        value
      };
    },

    addVerification(value: MsgAddVerification) {
      return {
        typeUrl: "/iid.MsgAddVerification",
        value
      };
    },

    revokeVerification(value: MsgRevokeVerification) {
      return {
        typeUrl: "/iid.MsgRevokeVerification",
        value
      };
    },

    setVerificationRelationships(value: MsgSetVerificationRelationships) {
      return {
        typeUrl: "/iid.MsgSetVerificationRelationships",
        value
      };
    },

    addService(value: MsgAddService) {
      return {
        typeUrl: "/iid.MsgAddService",
        value
      };
    },

    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/iid.MsgDeleteService",
        value
      };
    },

    addController(value: MsgAddController) {
      return {
        typeUrl: "/iid.MsgAddController",
        value
      };
    },

    deleteController(value: MsgDeleteController) {
      return {
        typeUrl: "/iid.MsgDeleteController",
        value
      };
    },

    addLinkedResource(value: MsgAddLinkedResource) {
      return {
        typeUrl: "/iid.MsgAddLinkedResource",
        value
      };
    },

    deleteLinkedResource(value: MsgDeleteLinkedResource) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedResource",
        value
      };
    },

    addLinkedEntity(value: MsgAddLinkedEntity) {
      return {
        typeUrl: "/iid.MsgAddLinkedEntity",
        value
      };
    },

    deleteLinkedEntity(value: MsgDeleteLinkedEntity) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedEntity",
        value
      };
    },

    addAccordedRight(value: MsgAddAccordedRight) {
      return {
        typeUrl: "/iid.MsgAddAccordedRight",
        value
      };
    },

    deleteAccordedRight(value: MsgDeleteAccordedRight) {
      return {
        typeUrl: "/iid.MsgDeleteAccordedRight",
        value
      };
    },

    addIidContext(value: MsgAddIidContext) {
      return {
        typeUrl: "/iid.MsgAddIidContext",
        value
      };
    },

    deactivateIID(value: MsgDeactivateIID) {
      return {
        typeUrl: "/iid.MsgDeactivateIID",
        value
      };
    },

    deleteIidContext(value: MsgDeleteIidContext) {
      return {
        typeUrl: "/iid.MsgDeleteIidContext",
        value
      };
    },

    updateMetaData(value: MsgUpdateIidMeta) {
      return {
        typeUrl: "/iid.MsgUpdateIidMeta",
        value
      };
    }

  },
  fromPartial: {
    createIidDocument(value: MsgCreateIidDocument) {
      return {
        typeUrl: "/iid.MsgCreateIidDocument",
        value: MsgCreateIidDocument.fromPartial(value)
      };
    },

    updateIidDocument(value: MsgUpdateIidDocument) {
      return {
        typeUrl: "/iid.MsgUpdateIidDocument",
        value: MsgUpdateIidDocument.fromPartial(value)
      };
    },

    addVerification(value: MsgAddVerification) {
      return {
        typeUrl: "/iid.MsgAddVerification",
        value: MsgAddVerification.fromPartial(value)
      };
    },

    revokeVerification(value: MsgRevokeVerification) {
      return {
        typeUrl: "/iid.MsgRevokeVerification",
        value: MsgRevokeVerification.fromPartial(value)
      };
    },

    setVerificationRelationships(value: MsgSetVerificationRelationships) {
      return {
        typeUrl: "/iid.MsgSetVerificationRelationships",
        value: MsgSetVerificationRelationships.fromPartial(value)
      };
    },

    addService(value: MsgAddService) {
      return {
        typeUrl: "/iid.MsgAddService",
        value: MsgAddService.fromPartial(value)
      };
    },

    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/iid.MsgDeleteService",
        value: MsgDeleteService.fromPartial(value)
      };
    },

    addController(value: MsgAddController) {
      return {
        typeUrl: "/iid.MsgAddController",
        value: MsgAddController.fromPartial(value)
      };
    },

    deleteController(value: MsgDeleteController) {
      return {
        typeUrl: "/iid.MsgDeleteController",
        value: MsgDeleteController.fromPartial(value)
      };
    },

    addLinkedResource(value: MsgAddLinkedResource) {
      return {
        typeUrl: "/iid.MsgAddLinkedResource",
        value: MsgAddLinkedResource.fromPartial(value)
      };
    },

    deleteLinkedResource(value: MsgDeleteLinkedResource) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedResource",
        value: MsgDeleteLinkedResource.fromPartial(value)
      };
    },

    addLinkedEntity(value: MsgAddLinkedEntity) {
      return {
        typeUrl: "/iid.MsgAddLinkedEntity",
        value: MsgAddLinkedEntity.fromPartial(value)
      };
    },

    deleteLinkedEntity(value: MsgDeleteLinkedEntity) {
      return {
        typeUrl: "/iid.MsgDeleteLinkedEntity",
        value: MsgDeleteLinkedEntity.fromPartial(value)
      };
    },

    addAccordedRight(value: MsgAddAccordedRight) {
      return {
        typeUrl: "/iid.MsgAddAccordedRight",
        value: MsgAddAccordedRight.fromPartial(value)
      };
    },

    deleteAccordedRight(value: MsgDeleteAccordedRight) {
      return {
        typeUrl: "/iid.MsgDeleteAccordedRight",
        value: MsgDeleteAccordedRight.fromPartial(value)
      };
    },

    addIidContext(value: MsgAddIidContext) {
      return {
        typeUrl: "/iid.MsgAddIidContext",
        value: MsgAddIidContext.fromPartial(value)
      };
    },

    deactivateIID(value: MsgDeactivateIID) {
      return {
        typeUrl: "/iid.MsgDeactivateIID",
        value: MsgDeactivateIID.fromPartial(value)
      };
    },

    deleteIidContext(value: MsgDeleteIidContext) {
      return {
        typeUrl: "/iid.MsgDeleteIidContext",
        value: MsgDeleteIidContext.fromPartial(value)
      };
    },

    updateMetaData(value: MsgUpdateIidMeta) {
      return {
        typeUrl: "/iid.MsgUpdateIidMeta",
        value: MsgUpdateIidMeta.fromPartial(value)
      };
    }

  }
};