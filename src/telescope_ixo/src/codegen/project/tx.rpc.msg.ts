import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateProject, MsgCreateProjectResponse, MsgUpdateProjectStatus, MsgUpdateProjectStatusResponse, MsgCreateAgent, MsgCreateAgentResponse, MsgUpdateAgent, MsgUpdateAgentResponse, MsgCreateClaim, MsgCreateClaimResponse, MsgCreateEvaluation, MsgCreateEvaluationResponse, MsgWithdrawFunds, MsgWithdrawFundsResponse, MsgUpdateProjectDoc, MsgUpdateProjectDocResponse } from "./tx";
/** Msg defines the project Msg service. */

export interface Msg {
  /** CreateProject defines a method for creating a project. */
  createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
  /** UpdateProjectStatus defines a method for updating a project's current status. */

  updateProjectStatus(request: MsgUpdateProjectStatus): Promise<MsgUpdateProjectStatusResponse>;
  /** CreateAgent defines a method for creating an agent on a project. */

  createAgent(request: MsgCreateAgent): Promise<MsgCreateAgentResponse>;
  /** UpdateAgent defines a method for updating an agent on a project. */

  updateAgent(request: MsgUpdateAgent): Promise<MsgUpdateAgentResponse>;
  /** CreateClaim defines a method for creating a claim on a project. */

  createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
  /** CreateEvaluation defines a method for creating an evaluation for a specific claim on a project. */

  createEvaluation(request: MsgCreateEvaluation): Promise<MsgCreateEvaluationResponse>;
  /** WithdrawFunds defines a method for project agents to withdraw their funds from a project. */

  withdrawFunds(request: MsgWithdrawFunds): Promise<MsgWithdrawFundsResponse>;
  /** UpdateProjectDoc defines a method for updating a project's data. */

  updateProjectDoc(request: MsgUpdateProjectDoc): Promise<MsgUpdateProjectDocResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProject = this.createProject.bind(this);
    this.updateProjectStatus = this.updateProjectStatus.bind(this);
    this.createAgent = this.createAgent.bind(this);
    this.updateAgent = this.updateAgent.bind(this);
    this.createClaim = this.createClaim.bind(this);
    this.createEvaluation = this.createEvaluation.bind(this);
    this.withdrawFunds = this.withdrawFunds.bind(this);
    this.updateProjectDoc = this.updateProjectDoc.bind(this);
  }

  createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "CreateProject", data);
    return promise.then(data => MsgCreateProjectResponse.decode(new _m0.Reader(data)));
  }

  updateProjectStatus(request: MsgUpdateProjectStatus): Promise<MsgUpdateProjectStatusResponse> {
    const data = MsgUpdateProjectStatus.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "UpdateProjectStatus", data);
    return promise.then(data => MsgUpdateProjectStatusResponse.decode(new _m0.Reader(data)));
  }

  createAgent(request: MsgCreateAgent): Promise<MsgCreateAgentResponse> {
    const data = MsgCreateAgent.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "CreateAgent", data);
    return promise.then(data => MsgCreateAgentResponse.decode(new _m0.Reader(data)));
  }

  updateAgent(request: MsgUpdateAgent): Promise<MsgUpdateAgentResponse> {
    const data = MsgUpdateAgent.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "UpdateAgent", data);
    return promise.then(data => MsgUpdateAgentResponse.decode(new _m0.Reader(data)));
  }

  createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse> {
    const data = MsgCreateClaim.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "CreateClaim", data);
    return promise.then(data => MsgCreateClaimResponse.decode(new _m0.Reader(data)));
  }

  createEvaluation(request: MsgCreateEvaluation): Promise<MsgCreateEvaluationResponse> {
    const data = MsgCreateEvaluation.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "CreateEvaluation", data);
    return promise.then(data => MsgCreateEvaluationResponse.decode(new _m0.Reader(data)));
  }

  withdrawFunds(request: MsgWithdrawFunds): Promise<MsgWithdrawFundsResponse> {
    const data = MsgWithdrawFunds.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "WithdrawFunds", data);
    return promise.then(data => MsgWithdrawFundsResponse.decode(new _m0.Reader(data)));
  }

  updateProjectDoc(request: MsgUpdateProjectDoc): Promise<MsgUpdateProjectDocResponse> {
    const data = MsgUpdateProjectDoc.encode(request).finish();
    const promise = this.rpc.request("project.Msg", "UpdateProjectDoc", data);
    return promise.then(data => MsgUpdateProjectDocResponse.decode(new _m0.Reader(data)));
  }

}