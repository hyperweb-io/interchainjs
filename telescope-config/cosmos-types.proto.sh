# accounts

accountFile=(
    "cosmos/auth/v1beta1/auth.proto"
    "cosmos/vesting/v1beta1/vesting.proto"
    "injective/types/v1beta1/account.proto"
)

# publicKeys

pubkeyFile=(
    "cosmos/crypto/secp256k1/keys.proto"
    "cosmos/crypto/secp256r1/keys.proto"
    "cosmos/crypto/ed25519/keys.proto"
)

# messages and query

cosmosSdkFiles=(
    "cosmos/authz/v1beta1/tx.proto"
    "cosmos/bank/v1beta1/tx.proto"
    "cosmos/distribution/v1beta1/tx.proto"
    "cosmos/feegrant/v1beta1/tx.proto"
    "cosmos/gov/v1beta1/tx.proto"
    "cosmos/gov/v1/tx.proto"
    "cosmos/group/v1/tx.proto"
    "cosmos/staking/v1beta1/tx.proto"
    "cosmos/vesting/v1beta1/tx.proto"

    "cosmos/auth/v1beta1/query.proto"
    "cosmos/bank/v1beta1/query.proto"
    "cosmos/staking/v1beta1/query.proto"
    "cosmos/gov/v1beta1/query.proto"
    )

ibcGoFiles=(
    "ibc/applications/transfer/v1/tx.proto"
    "ibc/core/channel/v1/tx.proto"
    "ibc/core/client/v1/tx.proto"
    "ibc/core/connection/v1/tx.proto"
    )

wasmdFiles=(
    "cosmwasm/wasm/v1/tx.proto"
    "cosmwasm/wasm/v1/query.proto"
    )