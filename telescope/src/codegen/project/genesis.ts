import { ProjectDoc, ProjectDocSDKType, GenesisAccountMap, GenesisAccountMapSDKType, WithdrawalInfoDocs, WithdrawalInfoDocsSDKType, Claims, ClaimsSDKType, Params, ParamsSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** GenesisState defines the project module's genesis state. */

export interface GenesisState {
  projectDocs: ProjectDoc[];
  accountMaps: GenesisAccountMap[];
  withdrawalsInfos: WithdrawalInfoDocs[];
  claims: Claims[];
  params?: Params;
}
/** GenesisState defines the project module's genesis state. */

export interface GenesisStateSDKType {
  project_docs: ProjectDocSDKType[];
  account_maps: GenesisAccountMapSDKType[];
  withdrawals_infos: WithdrawalInfoDocsSDKType[];
  claims: ClaimsSDKType[];
  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    projectDocs: [],
    accountMaps: [],
    withdrawalsInfos: [],
    claims: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectDocs) {
      ProjectDoc.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accountMaps) {
      GenesisAccountMap.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.withdrawalsInfos) {
      WithdrawalInfoDocs.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.claims) {
      Claims.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectDocs.push(ProjectDoc.decode(reader, reader.uint32()));
          break;

        case 2:
          message.accountMaps.push(GenesisAccountMap.decode(reader, reader.uint32()));
          break;

        case 3:
          message.withdrawalsInfos.push(WithdrawalInfoDocs.decode(reader, reader.uint32()));
          break;

        case 4:
          message.claims.push(Claims.decode(reader, reader.uint32()));
          break;

        case 5:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.projectDocs = object.projectDocs?.map(e => ProjectDoc.fromPartial(e)) || [];
    message.accountMaps = object.accountMaps?.map(e => GenesisAccountMap.fromPartial(e)) || [];
    message.withdrawalsInfos = object.withdrawalsInfos?.map(e => WithdrawalInfoDocs.fromPartial(e)) || [];
    message.claims = object.claims?.map(e => Claims.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};