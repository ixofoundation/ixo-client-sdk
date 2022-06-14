#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./src/proto"
COSMOS_PROTO_DIR="./src/proto"
THIRD_PARTY_PROTO_DIR="./src/proto"
OUT_DIR="./src/codec"
PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"
mkdir -p "$OUT_DIR"



protoc \
--plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "./src/proto/cosmos/coin.proto" \
  "./src/proto/cosmos/cosmos.proto" \
  "./src/proto/cosmos/pagination.proto" \
  "./src/proto/bonds/bonds.proto" \
  "./src/proto/bonds/genesis.proto" \
  "./src/proto/bonds/query.proto" \
  "./src/proto/bonds/tx.proto" \
  "./src/proto/did/did.proto" \
  "./src/proto/did/diddoc.proto" \
  "./src/proto/did/genesis.proto" \
  "./src/proto/did/query.proto" \
  "./src/proto/did/tx.proto" \
  "./src/proto/gogoproto/gogo.proto" \
  "./src/proto/payments/genesis.proto" \
  "./src/proto/payments/payments.proto" \
  "./src/proto/payments/query.proto" \
  "./src/proto/payments/tx.proto" \
  "./src/proto/project/genesis.proto" \
  "./src/proto/project/project.proto" \
  "./src/proto/project/query.proto" \
  "./src/proto/project/tx.proto" \
  "./src/proto/tendermint/abci/types.proto" \
  "./src/proto/tendermint/crypto/keys.proto" \
  "./src/proto/tendermint/crypto/proof.proto" \
  "./src/proto/tendermint/p2p/types.proto" \
  "./src/proto/tendermint/types/block.proto" \
  "./src/proto/tendermint/types/evidence.proto" \
  "./src/proto/tendermint/types/params.proto" \
  "./src/proto/tendermint/types/types.proto" \
  "./src/proto/tendermint/types/validator.proto" \
  "./src/proto/tendermint/version/types.proto" \
  "./src/proto/tendermint/libs/bits/types.proto" \
  "./src/proto/google/protobuf/any.proto" \


#   "./cosmos/bank/v1beta1/query.proto" \
#   "./cosmos/bank/v1beta1/tx.proto" \
#   "./cosmos/base/abci/v1beta1/abci.proto" \
#   "./cosmos/base/query/v1beta1/pagination.proto" \
#   "./cosmos/base/v1beta1/coin.proto" \
#   "./cosmos/crypto/multisig/v1beta1/multisig.proto" \
#   "./cosmos/crypto/secp256k1/keys.proto" \
#   "./cosmos/distribution/v1beta1/distribution.proto" \
#   "./cosmos/distribution/v1beta1/query.proto" \
#   "./cosmos/distribution/v1beta1/tx.proto" \
#   "./cosmos/staking/v1beta1/query.proto" \
#   "./cosmos/staking/v1beta1/staking.proto" \
#   "./cosmos/staking/v1beta1/tx.proto" \
#   "./cosmos/tx/signing/v1beta1/signing.proto" \
#   "./cosmos/tx/v1beta1/tx.proto" \
#   "./cosmos/vesting/v1beta1/vesting.proto" \
#   "./tendermint/abci/types.proto" \
#   "./tendermint/crypto/keys.proto" \
#   "./tendermint/crypto/proof.proto" \
#   "./tendermint/libs/bits/types.proto" \
#   "./tendermint/types/params.proto" \
#   "./tendermint/types/types.proto" \
#   "./tendermint/types/validator.proto" \
#   "./tendermint/version/types.proto"

# Remove unnecessary codec files
rm -rf \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts
