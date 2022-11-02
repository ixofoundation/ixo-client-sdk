import * as _101 from "./abci/types";
import * as _102 from "./crypto/keys";
import * as _103 from "./crypto/proof";
import * as _104 from "./libs/bits/types";
import * as _105 from "./p2p/types";
import * as _106 from "./types/block";
import * as _107 from "./types/evidence";
import * as _108 from "./types/params";
import * as _109 from "./types/types";
import * as _110 from "./types/validator";
import * as _111 from "./version/types";
export namespace tendermint {
  export const abci = { ..._101
  };
  export const crypto = { ..._102,
    ..._103
  };
  export namespace libs {
    export const bits = { ..._104
    };
  }
  export const p2p = { ..._105
  };
  export const types = { ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110
  };
  export const version = { ..._111
  };
}