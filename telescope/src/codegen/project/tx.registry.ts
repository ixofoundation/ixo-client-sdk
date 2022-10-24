import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProject, MsgUpdateProjectStatus, MsgCreateAgent, MsgUpdateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgWithdrawFunds, MsgUpdateProjectDoc } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/project.MsgCreateProject", MsgCreateProject], ["/project.MsgUpdateProjectStatus", MsgUpdateProjectStatus], ["/project.MsgCreateAgent", MsgCreateAgent], ["/project.MsgUpdateAgent", MsgUpdateAgent], ["/project.MsgCreateClaim", MsgCreateClaim], ["/project.MsgCreateEvaluation", MsgCreateEvaluation], ["/project.MsgWithdrawFunds", MsgWithdrawFunds], ["/project.MsgUpdateProjectDoc", MsgUpdateProjectDoc]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/project.MsgCreateProject",
        value: MsgCreateProject.encode(value).finish()
      };
    },

    updateProjectStatus(value: MsgUpdateProjectStatus) {
      return {
        typeUrl: "/project.MsgUpdateProjectStatus",
        value: MsgUpdateProjectStatus.encode(value).finish()
      };
    },

    createAgent(value: MsgCreateAgent) {
      return {
        typeUrl: "/project.MsgCreateAgent",
        value: MsgCreateAgent.encode(value).finish()
      };
    },

    updateAgent(value: MsgUpdateAgent) {
      return {
        typeUrl: "/project.MsgUpdateAgent",
        value: MsgUpdateAgent.encode(value).finish()
      };
    },

    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/project.MsgCreateClaim",
        value: MsgCreateClaim.encode(value).finish()
      };
    },

    createEvaluation(value: MsgCreateEvaluation) {
      return {
        typeUrl: "/project.MsgCreateEvaluation",
        value: MsgCreateEvaluation.encode(value).finish()
      };
    },

    withdrawFunds(value: MsgWithdrawFunds) {
      return {
        typeUrl: "/project.MsgWithdrawFunds",
        value: MsgWithdrawFunds.encode(value).finish()
      };
    },

    updateProjectDoc(value: MsgUpdateProjectDoc) {
      return {
        typeUrl: "/project.MsgUpdateProjectDoc",
        value: MsgUpdateProjectDoc.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/project.MsgCreateProject",
        value
      };
    },

    updateProjectStatus(value: MsgUpdateProjectStatus) {
      return {
        typeUrl: "/project.MsgUpdateProjectStatus",
        value
      };
    },

    createAgent(value: MsgCreateAgent) {
      return {
        typeUrl: "/project.MsgCreateAgent",
        value
      };
    },

    updateAgent(value: MsgUpdateAgent) {
      return {
        typeUrl: "/project.MsgUpdateAgent",
        value
      };
    },

    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/project.MsgCreateClaim",
        value
      };
    },

    createEvaluation(value: MsgCreateEvaluation) {
      return {
        typeUrl: "/project.MsgCreateEvaluation",
        value
      };
    },

    withdrawFunds(value: MsgWithdrawFunds) {
      return {
        typeUrl: "/project.MsgWithdrawFunds",
        value
      };
    },

    updateProjectDoc(value: MsgUpdateProjectDoc) {
      return {
        typeUrl: "/project.MsgUpdateProjectDoc",
        value
      };
    }

  },
  fromPartial: {
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/project.MsgCreateProject",
        value: MsgCreateProject.fromPartial(value)
      };
    },

    updateProjectStatus(value: MsgUpdateProjectStatus) {
      return {
        typeUrl: "/project.MsgUpdateProjectStatus",
        value: MsgUpdateProjectStatus.fromPartial(value)
      };
    },

    createAgent(value: MsgCreateAgent) {
      return {
        typeUrl: "/project.MsgCreateAgent",
        value: MsgCreateAgent.fromPartial(value)
      };
    },

    updateAgent(value: MsgUpdateAgent) {
      return {
        typeUrl: "/project.MsgUpdateAgent",
        value: MsgUpdateAgent.fromPartial(value)
      };
    },

    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/project.MsgCreateClaim",
        value: MsgCreateClaim.fromPartial(value)
      };
    },

    createEvaluation(value: MsgCreateEvaluation) {
      return {
        typeUrl: "/project.MsgCreateEvaluation",
        value: MsgCreateEvaluation.fromPartial(value)
      };
    },

    withdrawFunds(value: MsgWithdrawFunds) {
      return {
        typeUrl: "/project.MsgWithdrawFunds",
        value: MsgWithdrawFunds.fromPartial(value)
      };
    },

    updateProjectDoc(value: MsgUpdateProjectDoc) {
      return {
        typeUrl: "/project.MsgUpdateProjectDoc",
        value: MsgUpdateProjectDoc.fromPartial(value)
      };
    }

  }
};