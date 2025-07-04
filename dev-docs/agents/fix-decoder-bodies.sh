#!/bin/bash

# Script to fix decoder method bodies in tendermint34.ts

FILE="/workspace/interchainjs/networks/cosmos/src/adapters/tendermint34.ts"

# Fix decodeConsensusParams
sed -i '/decodeConsensusParams<T extends ConsensusParamsResponse = ConsensusParamsResponse>(response: unknown): T {/{
n
s/const data = response.consensus_params || response;/const result = (response as Record<string, unknown>).consensus_params || response;\n    const data = result as Record<string, unknown>;/
}' "$FILE"

# Add 'as T' to return statements that don't have it
# This is a bit tricky with sed, so let's use a more targeted approach

# First, let's check which methods need fixing
echo "Checking methods that need 'as T' added to return statement..."

# Count lines that have "return {" followed by "};" without "as T"
grep -n "return {" "$FILE" | while read -r line; do
    line_num=$(echo "$line" | cut -d: -f1)
    # Check if this return statement ends with '};' without 'as T'
    if sed -n "${line_num},/^[[:space:]]*};/p" "$FILE" | tail -1 | grep -q "^[[:space:]]*};$"; then
        echo "Line $line_num needs 'as T' added"
    fi
done

echo "Script completed - manual fixes may still be needed"