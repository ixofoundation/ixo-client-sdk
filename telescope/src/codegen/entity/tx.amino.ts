import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateEntity, MsgUpdateEntity, MsgUpdateEntityConfig, MsgTransferEntity } from "./tx";
export interface AminoMsgCreateEntity extends AminoMsg {
  type: "/entity.MsgCreateEntity";
  value: {
    entityType: string;
    entityStatus: number;
    controller: string[];
    context: {
      key: string;
      val: string;
    }[];
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
    }[];
    service: {
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
    deactivated: boolean;
    startDate: {
      seconds: string;
      nanos: number;
    };
    endDate: {
      seconds: string;
      nanos: number;
    };
    stage: string;
    relayerNode: string;
    verificationStatus: string;
    verifiableCredential: string[];
    ownerDid: string;
    ownerAddress: string;
    data: Uint8Array;
  };
}
export interface AminoMsgUpdateEntity extends AminoMsg {
  type: "/entity.MsgUpdateEntity";
  value: {
    status: number;
    deactivated: boolean;
    startDate: {
      seconds: string;
      nanos: number;
    };
    endDate: {
      seconds: string;
      nanos: number;
    };
    stage: string;
    relayerNode: string;
    verifiableCredential: string;
    controllerDid: string;
    controllerAddress: string;
  };
}
export interface AminoMsgUpdateEntityConfig extends AminoMsg {
  type: "/entity.MsgUpdateEntityConfig";
  value: {
    nft_contract_address: string;
    signer: string;
  };
}
export interface AminoMsgTransferEntity extends AminoMsg {
  type: "/entity.MsgTransferEntity";
  value: {
    entityDid: string;
    controllerDid: string;
    controllerAddress: string;
    recipiantDid: string;
  };
}
export const AminoConverter = {
  "/entity.MsgCreateEntity": {
    aminoType: "/entity.MsgCreateEntity",
    toAmino: ({
      entityType,
      entityStatus,
      controller,
      context,
      verification,
      service,
      accordedRight,
      linkedResource,
      linkedEntity,
      deactivated,
      startDate,
      endDate,
      stage,
      relayerNode,
      verificationStatus,
      verifiableCredential,
      ownerDid,
      ownerAddress,
      data
    }: MsgCreateEntity): AminoMsgCreateEntity["value"] => {
      return {
        entityType,
        entityStatus,
        controller,
        context: context.map(el0 => ({
          key: el0.key,
          val: el0.val
        })),
        verification: verification.map(el0 => ({
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
        service: service.map(el0 => ({
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
        deactivated,
        startDate,
        endDate,
        stage,
        relayerNode,
        verificationStatus,
        verifiableCredential,
        ownerDid,
        ownerAddress,
        data
      };
    },
    fromAmino: ({
      entityType,
      entityStatus,
      controller,
      context,
      verification,
      service,
      accordedRight,
      linkedResource,
      linkedEntity,
      deactivated,
      startDate,
      endDate,
      stage,
      relayerNode,
      verificationStatus,
      verifiableCredential,
      ownerDid,
      ownerAddress,
      data
    }: AminoMsgCreateEntity["value"]): MsgCreateEntity => {
      return {
        entityType,
        entityStatus,
        controller,
        context: context.map(el0 => ({
          key: el0.key,
          val: el0.val
        })),
        verification: verification.map(el0 => ({
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
        service: service.map(el0 => ({
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
        deactivated,
        startDate,
        endDate,
        stage,
        relayerNode,
        verificationStatus,
        verifiableCredential,
        ownerDid,
        ownerAddress,
        data
      };
    }
  },
  "/entity.MsgUpdateEntity": {
    aminoType: "/entity.MsgUpdateEntity",
    toAmino: ({
      status,
      deactivated,
      startDate,
      endDate,
      stage,
      relayerNode,
      verifiableCredential,
      controllerDid,
      controllerAddress
    }: MsgUpdateEntity): AminoMsgUpdateEntity["value"] => {
      return {
        status,
        deactivated,
        startDate,
        endDate,
        stage,
        relayerNode,
        verifiableCredential,
        controllerDid,
        controllerAddress
      };
    },
    fromAmino: ({
      status,
      deactivated,
      startDate,
      endDate,
      stage,
      relayerNode,
      verifiableCredential,
      controllerDid,
      controllerAddress
    }: AminoMsgUpdateEntity["value"]): MsgUpdateEntity => {
      return {
        status,
        deactivated,
        startDate,
        endDate,
        stage,
        relayerNode,
        verifiableCredential,
        controllerDid,
        controllerAddress
      };
    }
  },
  "/entity.MsgUpdateEntityConfig": {
    aminoType: "/entity.MsgUpdateEntityConfig",
    toAmino: ({
      nftContractAddress,
      signer
    }: MsgUpdateEntityConfig): AminoMsgUpdateEntityConfig["value"] => {
      return {
        nft_contract_address: nftContractAddress,
        signer
      };
    },
    fromAmino: ({
      nft_contract_address,
      signer
    }: AminoMsgUpdateEntityConfig["value"]): MsgUpdateEntityConfig => {
      return {
        nftContractAddress: nft_contract_address,
        signer
      };
    }
  },
  "/entity.MsgTransferEntity": {
    aminoType: "/entity.MsgTransferEntity",
    toAmino: ({
      entityDid,
      controllerDid,
      controllerAddress,
      recipiantDid
    }: MsgTransferEntity): AminoMsgTransferEntity["value"] => {
      return {
        entityDid,
        controllerDid,
        controllerAddress,
        recipiantDid
      };
    },
    fromAmino: ({
      entityDid,
      controllerDid,
      controllerAddress,
      recipiantDid
    }: AminoMsgTransferEntity["value"]): MsgTransferEntity => {
      return {
        entityDid,
        controllerDid,
        controllerAddress,
        recipiantDid
      };
    }
  }
};