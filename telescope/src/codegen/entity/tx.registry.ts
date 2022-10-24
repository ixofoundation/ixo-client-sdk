import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateEntity, MsgUpdateEntity, MsgUpdateEntityConfig, MsgTransferEntity } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/entity.MsgCreateEntity", MsgCreateEntity], ["/entity.MsgUpdateEntity", MsgUpdateEntity], ["/entity.MsgUpdateEntityConfig", MsgUpdateEntityConfig], ["/entity.MsgTransferEntity", MsgTransferEntity]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createEntity(value: MsgCreateEntity) {
      return {
        typeUrl: "/entity.MsgCreateEntity",
        value: MsgCreateEntity.encode(value).finish()
      };
    },

    updateEntity(value: MsgUpdateEntity) {
      return {
        typeUrl: "/entity.MsgUpdateEntity",
        value: MsgUpdateEntity.encode(value).finish()
      };
    },

    updateEntityConfig(value: MsgUpdateEntityConfig) {
      return {
        typeUrl: "/entity.MsgUpdateEntityConfig",
        value: MsgUpdateEntityConfig.encode(value).finish()
      };
    },

    transferEntity(value: MsgTransferEntity) {
      return {
        typeUrl: "/entity.MsgTransferEntity",
        value: MsgTransferEntity.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createEntity(value: MsgCreateEntity) {
      return {
        typeUrl: "/entity.MsgCreateEntity",
        value
      };
    },

    updateEntity(value: MsgUpdateEntity) {
      return {
        typeUrl: "/entity.MsgUpdateEntity",
        value
      };
    },

    updateEntityConfig(value: MsgUpdateEntityConfig) {
      return {
        typeUrl: "/entity.MsgUpdateEntityConfig",
        value
      };
    },

    transferEntity(value: MsgTransferEntity) {
      return {
        typeUrl: "/entity.MsgTransferEntity",
        value
      };
    }

  },
  fromPartial: {
    createEntity(value: MsgCreateEntity) {
      return {
        typeUrl: "/entity.MsgCreateEntity",
        value: MsgCreateEntity.fromPartial(value)
      };
    },

    updateEntity(value: MsgUpdateEntity) {
      return {
        typeUrl: "/entity.MsgUpdateEntity",
        value: MsgUpdateEntity.fromPartial(value)
      };
    },

    updateEntityConfig(value: MsgUpdateEntityConfig) {
      return {
        typeUrl: "/entity.MsgUpdateEntityConfig",
        value: MsgUpdateEntityConfig.fromPartial(value)
      };
    },

    transferEntity(value: MsgTransferEntity) {
      return {
        typeUrl: "/entity.MsgTransferEntity",
        value: MsgTransferEntity.fromPartial(value)
      };
    }

  }
};