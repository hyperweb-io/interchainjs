#!/bin/bash

# Script to update remaining decoder methods in tendermint34.ts

FILE="/workspace/interchainjs/networks/cosmos/src/adapters/tendermint34.ts"

# Update decodeConsensusParams
sed -i 's/decodeConsensusParams<T = any>(response: unknown): T {/decodeConsensusParams<T extends ConsensusParamsResponse = ConsensusParamsResponse>(response: unknown): T {/' "$FILE"

# Update decodeGenesis
sed -i 's/decodeGenesis<T = any>(response: unknown): T {/decodeGenesis<T extends GenesisResponse = GenesisResponse>(response: unknown): T {/' "$FILE"

# Update decodeGenesisChunked
sed -i 's/decodeGenesisChunked<T = any>(response: unknown): T {/decodeGenesisChunked<T extends GenesisChunk = GenesisChunk>(response: unknown): T {/' "$FILE"

# Update decodeNumUnconfirmedTxs
sed -i 's/decodeNumUnconfirmedTxs<T = any>(response: unknown): T {/decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T {/' "$FILE"

# Update decodeStatus
sed -i 's/decodeStatus<T = any>(response: unknown): T {/decodeStatus<T extends StatusResponse = StatusResponse>(response: unknown): T {/' "$FILE"

# Update decodeTx
sed -i 's/decodeTx<T = any>(response: unknown): T {/decodeTx<T extends TxResponse = TxResponse>(response: unknown): T {/' "$FILE"

# Update decodeTxSearch
sed -i 's/decodeTxSearch<T = any>(response: unknown): T {/decodeTxSearch<T extends TxSearchResponse = TxSearchResponse>(response: unknown): T {/' "$FILE"

# Update decodeUnconfirmedTxs
sed -i 's/decodeUnconfirmedTxs<T = any>(response: unknown): T {/decodeUnconfirmedTxs<T extends UnconfirmedTxsResponse = UnconfirmedTxsResponse>(response: unknown): T {/' "$FILE"

# Update decodeValidators
sed -i 's/decodeValidators<T = any>(response: unknown): T {/decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T {/' "$FILE"

# Update decodeAbciQuery
sed -i 's/decodeAbciQuery<T = any>(response: unknown): T {/decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T {/' "$FILE"

echo "Updated all decoder method signatures"