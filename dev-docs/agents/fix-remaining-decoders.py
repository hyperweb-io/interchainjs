#!/usr/bin/env python3

import re

# Read the file
with open('/workspace/interchainjs/networks/cosmos/src/adapters/tendermint34.ts', 'r') as f:
    content = f.read()

# Pattern to find decoder methods that still need fixing
pattern = r'(decode(?:Tx|TxSearch|UnconfirmedTxs|Validators|AbciQuery)<T extends \w+ = \w+>\(response: unknown\): T \{)\s*\n\s*(const data = response\.(?:result|tx) \|\| response;)'

# Replacement pattern
def replacement(match):
    method_signature = match.group(1)
    old_data_line = match.group(2)
    
    # Extract whether it's response.result or response.tx
    result_or_tx = 'result' if 'response.result' in old_data_line else 'tx'
    
    return f"""{method_signature}
    const resp = response as Record<string, unknown>;
    const data = (resp.{result_or_tx} || resp) as Record<string, unknown>;"""

# Apply the replacement
content = re.sub(pattern, replacement, content)

# Write back
with open('/workspace/interchainjs/networks/cosmos/src/adapters/tendermint34.ts', 'w') as f:
    f.write(content)

print("Updated decoder methods")