# InterchainJS Workspace Package Analysis

**Generated on:** July 2, 2025  
**Purpose:** Comprehensive analysis of all packages in the InterchainJS workspace for future development reference

## Overview

InterchainJS is a universal signing client for blockchain networks, organized as a monorepo with 18 packages across three main categories:

- **8 Core Packages** (`packages/`): Low-level utilities and types
- **7 High-level Libraries** (`libs/`): Framework integrations and main APIs  
- **3 Network Implementations** (`networks/`): Blockchain-specific clients

All packages are at version `1.11.18` and use TypeScript with dual CommonJS/ESM builds.

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PACKAGES      │    │      LIBS       │    │    NETWORKS     │
│   (Core Utils)  │───▶│  (High-level)   │───▶│  (Blockchain)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Dependency Flow
1. **Core packages** provide fundamental utilities (crypto, encoding, types)
2. **Libs** combine core packages into user-facing APIs
3. **Networks** implement blockchain-specific protocols using libs and core packages

## Core Packages (`packages/`)

### 1. `@interchainjs/types` 
**Purpose:** Core TypeScript interfaces and type definitions

**Key Types:**
- `IUniSigner<TAccount, TSignArgs, TBroadcastOpts, TBroadcastResponse>` - Universal signer interface
- `IAccount`, `ICryptoBytes` - Authentication types
- `HttpEndpoint`, `Price` - Common data structures
- `ISigned<TBroadcastOpts, TBroadcastResponse>` - Signed transaction wrapper
- `IBroadcastResult` - Transaction broadcast result
- Workflow builder interfaces for transaction construction
- Error types: `QueryClientError`, `NetworkError`, `TimeoutError`, etc.

**Dependencies:** `decimal.js`

**Usage:** Import this first for all type definitions across the ecosystem.

### 2. `@interchainjs/crypto`
**Purpose:** Cryptographic primitives and utilities

**Key Exports:**
- **Hashing:** `Sha256`, `Sha512`, `Keccak256`, `Ripemd160`
- **Key Generation:** `Secp256k1`, `Ed25519`, `Bip39`, `Slip10`
- **Signatures:** `Secp256k1Signature`, `ExtendedSecp256k1Signature`
- **Encryption:** `Xchacha20poly1305Ietf`, `Argon2id`
- **Utilities:** `Random`, `Hmac`, `HdPath`

**Dependencies:** `@noble/hashes`, `bn.js`, `elliptic`, `libsodium-wrappers-sumo`

**Usage:** Use for all cryptographic operations, key derivation, and signing.

### 3. `@interchainjs/encoding`
**Purpose:** Data encoding/decoding utilities

**Key Features:**
- Base64 encoding/decoding
- Bech32 address encoding
- Binary data manipulation
- Date handling utilities

**Dependencies:** `base64-js`, `bech32`, `readonly-date`

**Usage:** Essential for address formatting and data serialization.

### 4. `@interchainjs/math`
**Purpose:** Mathematical operations for blockchain calculations

**Key Features:**
- Big number arithmetic
- Decimal precision handling
- Mathematical utilities for token amounts

**Dependencies:** `bn.js`

**Usage:** Use for all token amount calculations and mathematical operations.

### 5. `@interchainjs/utils`
**Purpose:** General utility functions

**Key Features:**
- String/byte conversions
- Address validation
- Common helper functions
- Bech32 utilities

**Dependencies:** `bech32`, `decimal.js`

**Usage:** Common utilities used across all other packages.

### 6. `@interchainjs/amino`
**Purpose:** Amino encoding for Cosmos SDK transactions

**Key Features:**
- Amino JSON encoding/decoding
- Legacy transaction format support
- Cosmos SDK compatibility

**Dependencies:** Core packages (`crypto`, `encoding`, `math`, `utils`)

**Usage:** Required for Cosmos SDK amino-based signing.

### 7. `@interchainjs/auth`
**Purpose:** Authentication and account management

**Key Features:**
- Mnemonic to seed conversion
- Account derivation utilities
- Authentication helpers

**Dependencies:** `@noble/curves`, `@noble/hashes`, `@scure/bip32`

**Usage:** Use for wallet creation and account management.

### 8. `@interchainjs/pubkey`
**Purpose:** Public key utilities and helpers

**Key Features:**
- Public key encoding/decoding
- Key format conversions
- Cosmos SDK pubkey types

**Dependencies:** `amino`, `cosmos-types`, `encoding`, `math`, `types`

**Usage:** Essential for public key operations and address derivation.

## High-Level Libraries (`libs/`)

### 1. `@interchainjs/cosmos-types`
**Purpose:** Generated Cosmos SDK protobuf types and codecs

**Key Features:**
- Complete Cosmos SDK message types
- Protobuf encoding/decoding
- Query client interfaces
- Transaction builders
- Generated from official Cosmos SDK protos

**Structure:**
```
src/
├── cosmos/          # Core Cosmos SDK modules
│   ├── auth/        # Authentication module
│   ├── bank/        # Bank module  
│   ├── gov/         # Governance module
│   ├── staking/     # Staking module
│   └── tx/          # Transaction module
├── tendermint/      # Tendermint consensus types
├── google/          # Google protobuf types
└── helpers.ts       # Utility functions
```

**Dependencies:** Core packages (`math`, `types`, `utils`)

**Usage:** Import specific modules for Cosmos SDK operations.

### 2. `interchainjs` (Main Library)
**Purpose:** Primary entry point for Cosmos SDK interactions

**Status:** ⚠️ Currently under refactoring (`throw new Error('refactoring')`)

**Dependencies:** All core packages + `@interchainjs/cosmos`

**Usage:** Will be the main library for general Cosmos SDK usage.

### 3. `@interchainjs/react`
**Purpose:** React hooks for blockchain interactions

**Status:** ⚠️ Currently under refactoring

**Planned Features:**
- React Query hooks for blockchain data
- Wallet connection hooks
- Transaction hooks
- Real-time data subscriptions

**Dependencies:** All core packages + `@interchainjs/cosmos`

### 4. `@interchainjs/vue`
**Purpose:** Vue.js composables for blockchain interactions

**Status:** ⚠️ Currently under refactoring

**Planned Features:**
- Vue 3 composables
- Reactive blockchain data
- Wallet integration
- Transaction management

### 5. `injectivejs`
**Purpose:** Injective Protocol specific library

**Status:** ⚠️ Currently under refactoring

**Dependencies:** All core packages + network implementations

### 6. `injective-react`
**Purpose:** React hooks for Injective Protocol

**Status:** ⚠️ Currently under refactoring

### 7. `injective-vue`
**Purpose:** Vue composables for Injective Protocol

**Status:** ⚠️ Currently under refactoring

## Network Implementations (`networks/`)

### 1. `@interchainjs/cosmos`
**Purpose:** Cosmos SDK blockchain client implementation

**Key Features:**
- **Query Client:** `ICosmosQueryClient` with full RPC support
- **Event Client:** `ICosmosEventClient` for real-time events
- **Protocol Adapters:** Support for different Tendermint versions
  - `tendermint34` - Tendermint 0.34.x
  - `tendermint37` - Tendermint 0.37.x  
  - `comet38` - CometBFT 0.38.x
- **HTTP/WebSocket Clients:** Dual transport support
- **Client Factory:** Easy client instantiation

**Structure:**
```
src/
├── adapters/        # Protocol version adapters
├── query/          # Query client implementation
├── event/          # Event client implementation
├── rpc/            # RPC transport layers
├── types/          # Cosmos-specific types
└── client-factory.ts # Client creation utilities
```

**Key Interfaces:**
- `ICosmosQueryClient` - Full RPC query interface
- `ICosmosEventClient` - Event subscription interface
- `IProtocolAdapter` - Version-specific protocol handling

**Dependencies:** `@interchainjs/auth`, `@interchainjs/cosmos-types`, `@interchainjs/types`, `@interchainjs/utils`

**Usage:** Primary client for Cosmos SDK blockchain interactions.

### 2. `@interchainjs/ethereum`
**Purpose:** Ethereum blockchain client implementation

**Key Features:**
- Ethereum transaction encoding/decoding
- EIP-155 transaction support
- RLP encoding
- Ethereum-specific cryptography

**Dependencies:** `@ethersproject/*`, `ethereum-cryptography`, `rlp`

**Usage:** For Ethereum and EVM-compatible blockchain interactions.

### 3. `@interchainjs/injective`
**Purpose:** Injective Protocol specific implementation

**Key Features:**
- Injective-specific transaction types
- EVM compatibility layer
- Cosmos SDK + Ethereum hybrid support

**Dependencies:** Combines Cosmos and Ethereum implementations

**Usage:** Specifically for Injective Protocol interactions.

## Development Patterns

### Type Safety
All packages are fully typed with TypeScript. Key patterns:

```typescript
// Generic signer interface
interface IUniSigner<TAccount, TSignArgs, TBroadcastOpts, TBroadcastResponse> {
  getAccount(): Promise<TAccount>;
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>): Promise<TBroadcastResponse>;
}

// Protocol-specific implementations
interface ICosmosQueryClient extends IQueryClient {
  getBlock(height?: number): Promise<Block>;
  getTx(hash: string): Promise<TxResponse>;
  // ... more methods
}
```

### Error Handling
Standardized error types from `@interchainjs/types`:
- `QueryClientError` - Query operation failures
- `NetworkError` - Network connectivity issues
- `TimeoutError` - Operation timeouts
- `ConnectionError` - Connection failures
- `ParseError` - Data parsing failures

### Build System
All packages use consistent build configuration:
- **TypeScript compilation:** Dual CJS/ESM output
- **Build command:** `npm run clean; tsc; tsc -p tsconfig.esm.json; npm run copy`
- **Output structure:** `dist/` with both `index.js` (CJS) and `esm/index.js` (ESM)

## Testing Infrastructure

### Starship Integration
Several packages include Starship configuration for integration testing:
- `jest.starship.config.js` - Starship-specific test configuration
- `starship/` directories with test configurations
- Integration with live blockchain networks for testing

### Test Commands
- `yarn starship:test` - Run integration tests
- `yarn starship:debug` - Debug mode testing
- `yarn starship:watch` - Watch mode for development

## Usage Examples

### Basic Cosmos Client
```typescript
import { createCosmosQueryClient } from '@interchainjs/cosmos';
import { HttpEndpoint } from '@interchainjs/types';

const endpoint: HttpEndpoint = {
  url: 'https://rpc.cosmos.network',
  headers: {}
};

const client = await createCosmosQueryClient(endpoint);
const status = await client.getStatus();
```

### Cryptographic Operations
```typescript
import { Secp256k1, Bip39 } from '@interchainjs/crypto';
import { getSeedFromMnemonic } from '@interchainjs/auth';

const mnemonic = Bip39.encode(entropy);
const seed = getSeedFromMnemonic(mnemonic.toString());
const keypair = await Secp256k1.makeKeypair(seed);
```

### Address Encoding
```typescript
import { toBech32, fromBech32 } from '@interchainjs/encoding';

const address = toBech32('cosmos', publicKeyHash);
const { prefix, data } = fromBech32(address);
```

## Future Development Notes

### Refactoring Status
Several high-level libraries are currently being refactored:
- `interchainjs` - Main library
- React/Vue integrations
- Injective-specific libraries

### Extension Points
The architecture supports easy extension:
1. **New Networks:** Implement `IQueryClient` and `IEventClient` interfaces
2. **New Signers:** Implement `IUniSigner` interface
3. **New Protocols:** Add protocol adapters following existing patterns

### Performance Considerations
- All packages support tree-shaking with ESM builds
- Minimal dependencies in core packages
- Lazy loading patterns for large generated types

## Conclusion

The InterchainJS workspace provides a comprehensive, modular foundation for blockchain interactions. The clear separation between core utilities, high-level libraries, and network implementations allows for flexible usage patterns while maintaining type safety and consistency across the ecosystem.

**Key Strengths:**
- Strong TypeScript support with comprehensive type definitions
- Modular architecture enabling selective usage
- Consistent build and testing patterns
- Support for multiple blockchain networks
- Integration testing with Starship

**Current Limitations:**
- Several high-level libraries under refactoring
- Documentation could be more comprehensive
- Some packages lack detailed README files

This analysis provides the foundation for understanding the codebase structure and implementing new features within the InterchainJS ecosystem.