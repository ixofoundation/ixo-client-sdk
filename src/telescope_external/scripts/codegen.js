import { join } from "path";
import telescope from "@osmonauts/telescope";
import { sync as rimraf } from "rimraf";
import { AMINO_MAP } from "./aminos";

const protoDirs = [join(__dirname, "/../proto")];
const outPath = join(__dirname, "../src/codegen");
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  experimentalGlobalProtoNamespace: true,
  options: {
    tsDisable: {
      files: [
        "cosmos/authz/v1beta1/tx.amino.ts",
        "cosmos/staking/v1beta1/tx.amino.ts",
      ],
    },
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: "timestamp",
        duration: "duration",
      },
      methods: {
        toJSON: true,
        fromJSON: true,
      },
    },
    aminoEncoding: {
      enabled: false,
      exceptions: AMINO_MAP,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.log("✨ all done!");
    console.error(e);
    process.exit(1);
  });
