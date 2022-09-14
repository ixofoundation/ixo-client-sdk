/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import {
  CreateAgentDoc,
  CreateClaimDoc,
  CreateEvaluationDoc,
  UpdateAgentDoc,
  UpdateProjectStatusDoc,
  WithdrawFundsDoc,
} from "./project";
import {
  MsgCreateAgent,
  MsgCreateClaim,
  MsgCreateEvaluation,
  MsgCreateProject,
  MsgUpdateAgent,
  MsgUpdateProjectDoc,
  MsgUpdateProjectStatus,
  MsgWithdrawFunds,
} from "./tx";

// eslint-disable-next-line import/no-cycle

export interface AminoProjectCreate extends AminoMsg {
  readonly type: "project.MsgCreateProject";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly pubKey: string;
    readonly data: Uint8Array;
  };
}
export function isAminoProjectCreate(msg: AminoMsg): msg is AminoProjectCreate {
  return msg.type === "project.MsgCreateProject";
}
export function createProjectAminoConverters(): AminoConverters {
  return {
    "/project.MsgCreateProject": {
      aminoType: "project.MsgCreateProject",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        pubKey,
        data,
      }: MsgCreateProject): AminoProjectCreate["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        pubKey: pubKey,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        pubKey,
        data,
      }: AminoProjectCreate["value"]): MsgCreateProject => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        pubKey: pubKey,
        data: data,
      }),
    },
  };
}

//  TransactionUpdateProjectStatus

export interface AminoUpdateProjectStatus extends AminoMsg {
  readonly type: "project.MsgUpdateProjectStatus";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data?: UpdateProjectStatusDoc;
  };
}

export function isAminoUpdateProjectStatus(
  msg: AminoMsg
): msg is AminoUpdateProjectStatus {
  return msg.type === "project.MsgUpdateProjectStatus";
}

export function UpdateProjectStatusAminoConverters(): AminoConverters {
  return {
    "/project.MsgUpdateProjectStatus": {
      aminoType: "project.MsgUpdateProjectStatus",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgUpdateProjectStatus): AminoUpdateProjectStatus["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoUpdateProjectStatus["value"]): MsgUpdateProjectStatus => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}

//  TransactionCreateAgent

export interface AminoCreateAgent extends AminoMsg {
  readonly type: "project.MsgCreateAgent";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data?: CreateAgentDoc;
  };
}

export function isAminoCreateAgent(msg: AminoMsg): msg is AminoCreateAgent {
  return msg.type === "project.MsgCreateAgent";
}

export function CreateAgentAminoConverters(): AminoConverters {
  return {
    "/project.MsgCreateAgent": {
      aminoType: "project.MsgCreateAgent",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgCreateAgent): AminoCreateAgent["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoCreateAgent["value"]): MsgCreateAgent => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}

//  TransactionUpdateAgent

export interface AminoUpdateAgent extends AminoMsg {
  readonly type: "project.MsgUpdateAgent";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data?: UpdateAgentDoc;
  };
}

export function isAminoUpdateAgent(msg: AminoMsg): msg is AminoCreateAgent {
  return msg.type === "project.MsgUpdateAgent";
}

export function UpdateAgentAminoConverters(): AminoConverters {
  return {
    "/project.MsgUpdateAgent": {
      aminoType: "project.MsgUpdateAgent",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgUpdateAgent): AminoUpdateAgent["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoUpdateAgent["value"]): MsgUpdateAgent => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}

//  TransactionCreateClaim

export interface AminoCreateClaim extends AminoMsg {
  readonly type: "project.MsgCreateClaim";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data?: CreateClaimDoc;
  };
}

export function isAminoCreateClaim(msg: AminoMsg): msg is AminoCreateClaim {
  return msg.type === "project.MsgCreateClaim";
}

export function CreateClaimAminoConverters(): AminoConverters {
  return {
    "/project.MsgCreateClaim": {
      aminoType: "project.MsgCreateClaim",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgCreateClaim): AminoCreateClaim["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoCreateClaim["value"]): MsgCreateClaim => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}

//  TransactionCreateEvaluation

export interface AminoCreateEvaluation extends AminoMsg {
  readonly type: "project.MsgCreateEvaluation";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data?: CreateEvaluationDoc;
  };
}

export function isAminoCreateEvaluation(
  msg: AminoMsg
): msg is AminoCreateEvaluation {
  return msg.type === "project.MsgCreateEvaluation";
}

export function CreateEvaluationAminoConverters(): AminoConverters {
  return {
    "/project.MsgCreateEvaluation": {
      aminoType: "project.MsgCreateEvaluation",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgCreateEvaluation): AminoCreateEvaluation["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoCreateEvaluation["value"]): MsgCreateEvaluation => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}

//  TransactionWithdrawFunds

export interface AminoWithdrawFunds extends AminoMsg {
  readonly type: "project.MsgWithdrawFunds";
  readonly value: {
    readonly senderDid: string;
    readonly data?: WithdrawFundsDoc;
  };
}

export function isAminoWithdrawFunds(msg: AminoMsg): msg is AminoWithdrawFunds {
  return msg.type === "project.MsgWithdrawFunds";
}

export function WithdrawFundsAminoConverters(): AminoConverters {
  return {
    "/project.MsgWithdrawFunds": {
      aminoType: "project.MsgWithdrawFunds",

      toAmino: ({
        senderDid,
        data,
      }: MsgWithdrawFunds): AminoWithdrawFunds["value"] => ({
        senderDid: senderDid,

        data: data,
      }),
      fromAmino: ({
        senderDid,
        data,
      }: AminoWithdrawFunds["value"]): MsgWithdrawFunds => ({
        senderDid: senderDid,
        data: data,
      }),
    },
  };
}

//  TransactionUpdateProjectDoc

export interface AminoUpdateProjectDoc extends AminoMsg {
  readonly type: "project.MsgUpdateProjectDoc";
  readonly value: {
    readonly txHash: string;
    readonly senderDid: string;
    readonly projectDid: string;
    readonly data: Uint8Array;
  };
}

export function isAminoUpdateProjectDoc(
  msg: AminoMsg
): msg is AminoUpdateProjectDoc {
  return msg.type === "project.MsgUpdateProjectDoc";
}

export function UpdateProjectDocAminoConverters(): AminoConverters {
  return {
    "/project.MsgUpdateProjectDoc": {
      aminoType: "project.MsgUpdateProjectDoc",

      toAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: MsgUpdateProjectDoc): AminoUpdateProjectDoc["value"] => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
      fromAmino: ({
        txHash,
        senderDid,
        projectDid,
        data,
      }: AminoUpdateProjectDoc["value"]): MsgUpdateProjectDoc => ({
        txHash: txHash,
        senderDid: senderDid,
        projectDid: projectDid,
        data: data,
      }),
    },
  };
}
