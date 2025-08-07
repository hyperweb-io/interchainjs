# Protocol Adapters

This directory contains version-specific adapters for different Tendermint/CometBFT protocol versions.

## Supported Versions

- **Tendermint 0.34**: `tendermint34.ts`
- **Tendermint 0.37**: `tendermint37.ts`
- **CometBFT 0.38**: `comet38.ts`

## Key Differences Between Versions

### Tendermint 0.34
- Uses `parts` in BlockId structure
- Has separate `beginBlockEvents` and `endBlockEvents` in block results
- Basic validator and consensus parameter structures

### Tendermint 0.37
- Uses `part_set_header` instead of `parts` in BlockId
- Still has `beginBlockEvents` and `endBlockEvents`
- Added `timeIotaMs` in block consensus params
- Added `maxBytes` in evidence params
- Added `appVersion` in version params

### CometBFT 0.38
- Uses `part_set_header` in BlockId
- Replaced `beginBlockEvents` and `endBlockEvents` with `finalizeBlockEvents`
- Added `appHash` in block results
- Added ABCI consensus params with `voteExtensionsEnableHeight`
- Enhanced version handling

## Usage

The adapters are automatically selected based on the protocol version specified when creating a `TendermintProtocolAdapter`:

```typescript
import { TendermintProtocolAdapter } from '../protocol-adapter.js';
import { ProtocolVersion } from '../types/protocol.js';

// For Tendermint 0.34
const adapter34 = new TendermintProtocolAdapter(ProtocolVersion.TENDERMINT_34);

// For Tendermint 0.37
const adapter37 = new TendermintProtocolAdapter(ProtocolVersion.TENDERMINT_37);

// For CometBFT 0.38
const adapter38 = new TendermintProtocolAdapter(ProtocolVersion.COMET_38);
```

## Response Decoding

Each adapter implements the `ResponseDecoder` interface and provides version-specific decoding for all RPC methods. The adapters handle:

- Converting snake_case to camelCase
- Decoding base64 and hex encoded values
- Converting string numbers to proper numeric types
- Handling version-specific field differences
- Providing consistent output format across versions