import * as _0 from "../codegen/bonds/genesis";
import * as _1 from "../codegen/bonds/bonds";
import * as _2 from "../codegen/bonds/query";
import * as _3 from "../codegen/bonds/tx";

import * as _4 from "../codegen/cosmos/coin";
import * as _5 from "../codegen/cosmos/cosmos";
import * as _6 from "../codegen/cosmos/pagination";

import * as _7 from "../codegen/entity/entity";
import * as _8 from "../codegen/entity/genesis";
import * as _9 from "../codegen/entity/query";
import * as _10 from "../codegen/entity/tx";

import * as _11 from "../codegen/iid/event";
import * as _12 from "../codegen/iid/genesis";
import * as _13 from "../codegen/iid/iid";
import * as _14 from "../codegen/iid/query";
import * as _15 from "../codegen/iid/tx";

import * as _16 from "../codegen/legacy/did/did";
import * as _17 from "../codegen/legacy/did/diddoc";

import * as _18 from "../codegen/payments/genesis";
import * as _19 from "../codegen/payments/payments";
import * as _20 from "../codegen/payments/query";
import * as _21 from "../codegen/payments/tx";

import * as _22 from "../codegen/project/genesis";
import * as _23 from "../codegen/project/project";
import * as _24 from "../codegen/project/query";
import * as _25 from "../codegen/project/tx";

import * as _26 from "./rpc.query";

export * as helpers from "./helpers";

export namespace impact {
  export const bonds = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
  };
  export const cosmos = {
    ..._4,
    ..._5,
    ..._6,
  };
  export const entity = {
    ..._7,
    ..._8,
    ..._9,
    ..._10,
  };
  export const iid = {
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
  };
  export const did = {
    ..._16,
    ..._17,
  };
  export const payments = {
    ..._18,
    ..._19,
    ..._20,
    ..._21,
  };
  export const project = {
    ..._22,
    ..._23,
    ..._24,
    ..._25,
  };
  export const ClientFactory = {
    ..._26,
  };
}
