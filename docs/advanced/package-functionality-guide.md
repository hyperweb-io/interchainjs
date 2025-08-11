# InterchainJS Package Functionality Guide

A comprehensive reference for discovering the right packages and functions for your blockchain development needs.

## Table of Contents

- [Overview](#overview)
- [Quick Start by Use Case](#quick-start-by-use-case)
- [Core Functionality Areas](#core-functionality-areas)
  - [Transaction Signing & Broadcasting](#transaction-signing--broadcasting)
  - [Wallet Management & Authentication](#wallet-management--authentication)
  - [Blockchain Querying & RPC](#blockchain-querying--rpc)
  - [Cryptographic Operations](#cryptographic-operations)
  - [Encoding & Decoding](#encoding--decoding)
  - [Framework Integration](#framework-integration)
- [Network-Specific Packages](#network-specific-packages)
- [Utility Packages](#utility-packages)
- [Generated Libraries](#generated-libraries)
- [Common Import Patterns](#common-import-patterns)

## Overview

InterchainJS is organized into three main categories:

- **`packages/`** - Core utility packages providing fundamental blockchain functionality
- **`networks/`** - Network-specific implementations for different blockchains
- **`libs/`** - Generated libraries and framework integrations

The project follows a universal signing interface pattern, allowing consistent interaction across multiple blockchain networks while maintaining type safety and optimal bundle sizes through tree-shakable imports.

## Quick Start by Use Case

### "I want to send a transaction"
```typescript
import { DirectSigner, Secp256k1HDWallet } from '@interchainjs/cosmos';
// For Ethereum: import from '@interchainjs/ethereum'
// For Injective: import from '@interchainjs/injective'
```

### "I want to query blockchain data"
```typescript
import { getAllBalances } from '@interchainjs/cosmos/bank/v1beta1/query.rpc.func';
import { CosmosQueryClient } from '@interchainjs/cosmos';
```

### "I want to manage wallets and keys"
```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { generateMnemonic } from '@interchainjs/crypto';
import { HDPath } from '@interchainjs/types';
```

### "I want React/Vue integration"
```typescript
// React
import { useGetAllBalances } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';
// Vue
import { useGetAllBalances } from '@interchainjs/vue/cosmos/bank/v1beta1/query.rpc.vue';
```

## Core Functionality Areas

### Transaction Signing & Broadcasting

**Primary Packages:** `@interchainjs/cosmos`, `@interchainjs/ethereum`, `@interchainjs/injective`

#### Key Components:
- **DirectSigner** - Protobuf-based signing for optimal performance
- **AminoSigner** - JSON-based signing for legacy compatibility
- **Universal Signer Interface** - Consistent API across all networks

#### Usage Example:
```typescript
import { DirectSigner, Secp256k1HDWallet } from '@interchainjs/cosmos';

const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic);
const signer = new DirectSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

const result = await signer.signAndBroadcast({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' }
});
```

#### Cross-references:
- [Wallet Management](#wallet-management--authentication) for wallet creation
- [Network-Specific Packages](#network-specific-packages) for network details
- [Cryptographic Operations](#cryptographic-operations) for key management

### Wallet Management & Authentication

**Primary Packages:** `@interchainjs/auth`, `@interchainjs/crypto`, `@interchainjs/types`

#### Key Components:
- **Secp256k1HDWallet** - HD wallet for Cosmos-based networks
- **EthSecp256k1HDWallet** - HD wallet for Ethereum-style addresses
- **IWallet Interface** - Universal wallet interface
- **PrivateKey** - Core private key implementation with HD derivation

#### Key Functions:
```typescript
// From @interchainjs/crypto
export { Bip39, EnglishMnemonic, generateMnemonic }
export { Secp256k1, Secp256k1Keypair, Ed25519, Ed25519Keypair }
export { HdPath, Slip10, stringToPath, pathToString }

// From @interchainjs/auth
export { BaseWallet, IWallet, IAccount, IPrivateKey }
export { registerAddressStrategy, getAddressStrategy }

// From @interchainjs/types
export { HDPath, IUniSigner, SignerConfig }
```

#### Usage Example:
```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { generateMnemonic } from '@interchainjs/crypto';
import { HDPath } from '@interchainjs/types';

// Generate a new wallet
const mnemonic = generateMnemonic();
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{
    prefix: "cosmos",
    hdPath: HDPath.cosmos(0, 0, 0).toString(),
  }]
});

// Get account information
const accounts = await wallet.getAccounts();
console.log('Address:', accounts[0].address);
```

### Blockchain Querying & RPC

**Primary Packages:** `@interchainjs/cosmos`, `@interchainjs/cosmos-types`, `interchainjs`

#### Key Components:
- **Query Clients** - Network-specific RPC clients
- **Tree-shakable RPC Functions** - Individual query and transaction functions
- **Protocol Adapters** - Abstract network differences

#### Key Functions:
```typescript
// Tree-shakable query functions
import { getAllBalances } from '@interchainjs/cosmos/bank/v1beta1/query.rpc.func';
import { getValidator } from '@interchainjs/cosmos/staking/v1beta1/query.rpc.func';

// Tree-shakable transaction functions
import { createDelegate } from '@interchainjs/cosmos/staking/v1beta1/tx.rpc.func';
import { createSend } from '@interchainjs/cosmos/bank/v1beta1/tx.rpc.func';

// Query clients
export { CosmosQueryClient, EthereumQueryClient, InjectiveQueryClient }
export { HttpRpcClient, WebSocketRpcClient }
```

#### Usage Example:
```typescript
import { getAllBalances } from '@interchainjs/cosmos/bank/v1beta1/query.rpc.func';
import { CosmosQueryClient } from '@interchainjs/cosmos';

// Direct function usage
const balance = await getAllBalances(rpcEndpoint, {
  address: "cosmos1addresshere",
});

// Query client usage
const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);
const accountInfo = await queryClient.getAccount(address);
```

### Cryptographic Operations

**Primary Packages:** `@interchainjs/crypto`, `@interchainjs/amino`, `@interchainjs/pubkey`

#### Key Functions:
```typescript
// From @interchainjs/crypto
export { Secp256k1, Ed25519, Random }
export { Sha256, sha256, Sha512, sha512, Ripemd160, ripemd160 }
export { Keccak256, keccak256, Hmac }
export { Bip39, EnglishMnemonic }

// From @interchainjs/amino
export { pubkeyToAddress, encodeSecp256k1Pubkey, encodeEd25519Pubkey }
export { addCoins, Coin, coin, coins, parseCoins }
export { makeSignDoc, serializeSignDoc, StdSignature }

// From @interchainjs/pubkey
export { encodePubkey, decodePubkey, pubkeyToProto }
```

#### Usage Example:
```typescript
import { Secp256k1, generateMnemonic } from '@interchainjs/crypto';
import { pubkeyToAddress } from '@interchainjs/amino';

// Generate keys
const mnemonic = generateMnemonic();
const keypair = await Secp256k1.generateKeyPair();

// Address derivation
const address = pubkeyToAddress(pubkey, 'cosmos');
```

### Encoding & Decoding

**Primary Packages:** `@interchainjs/encoding`, `@interchainjs/utils`

#### Key Functions:
```typescript
// From @interchainjs/encoding
export { fromBase64, toBase64, fromHex, toHex }
export { fromBech32, toBech32, normalizeBech32 }
export { fromUtf8, toUtf8, fromAscii, toAscii }
export { fromRfc3339, toRfc3339 }

// From @interchainjs/utils
export { toAccAddress, longify, decodeCosmosSdkDecFromProto }
export { startsWithArray, arrayContentEquals }
export { getChainById, getPrefix }
```

#### Usage Example:
```typescript
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { fromHex, toHex } from '@interchainjs/encoding';

// Address encoding
const { data } = fromBech32('cosmos1...');
const address = toBech32('osmo', data);

// Hex encoding
const bytes = fromHex('deadbeef');
const hex = toHex(bytes);
```

### Framework Integration

**Primary Packages:** `@interchainjs/react`, `@interchainjs/vue`, `injective-react`, `injective-vue`

#### React Hooks:
```typescript
// Query hooks
import { useGetAllBalances } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';
import { useGetValidators } from '@interchainjs/react/cosmos/staking/v1beta1/query.rpc.react';

// Transaction hooks
import { useDelegate } from '@interchainjs/react/cosmos/staking/v1beta1/tx.rpc.react';
import { useSend } from '@interchainjs/react/cosmos/bank/v1beta1/tx.rpc.react';
```

#### Vue Composables:
```typescript
// Query composables
import { useGetAllBalances } from '@interchainjs/vue/cosmos/bank/v1beta1/query.rpc.vue';
import { useGetValidators } from '@interchainjs/vue/cosmos/staking/v1beta1/query.rpc.vue';

// Transaction composables
import { useDelegate } from '@interchainjs/vue/cosmos/staking/v1beta1/tx.rpc.vue';
import { useSend } from '@interchainjs/vue/cosmos/bank/v1beta1/tx.rpc.vue';
```

#### Usage Example:
```typescript
// React
import { useGetAllBalances } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';

function BalanceComponent({ address }) {
  const { data: balance, isLoading } = useGetAllBalances({
    request: { address },
    options: { enabled: !!address }
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>Balance: {balance?.balances?.[0]?.amount}</div>;
}
```

## Network-Specific Packages

### @interchainjs/cosmos
**Purpose:** Transaction codec and client for Cosmos SDK-based blockchains

**Key Exports:**
- `DirectSigner`, `AminoSigner` - Transaction signers
- `Secp256k1HDWallet` - HD wallet implementation
- `CosmosQueryClient` - RPC query client
- `createProtocolAdapter` - Protocol adapter factory

**Usage:** Cosmos Hub, Osmosis, Juno, and other Cosmos SDK chains

### @interchainjs/ethereum
**Purpose:** Transaction codec and client for Ethereum blockchain

**Key Exports:**
- `EthereumSigner` - Ethereum transaction signer
- `EthereumQueryClient` - JSON-RPC query client
- `EthSecp256k1HDWallet` - Ethereum-style HD wallet
- `EIP1559Workflow`, `LegacyWorkflow` - Transaction workflows

**Usage:** Ethereum mainnet, testnets, and EVM-compatible chains

### @interchainjs/injective
**Purpose:** Transaction codec and client for Injective Protocol

**Key Exports:**
- `DirectSigner`, `AminoSigner` - Injective signers
- `EthSecp256k1HDWallet` - Ethereum-style addresses for Injective
- `InjectiveQueryClient` - Injective-specific query client

**Usage:** Injective Protocol blockchain

### @interchainjs/solana
**Purpose:** Transaction codec and client for Solana blockchain

**Key Exports:**
- `DirectSigner`, `OfflineSigner` - Solana signers
- `SolanaSigningClient` - Signing client
- `PhantomSigner`, `PhantomSigningClient` - Phantom wallet integration
- `TokenProgram`, `SystemProgram` - Solana program interfaces

**Usage:** Solana blockchain and SPL tokens

## Utility Packages

### @interchainjs/types
**Purpose:** Core TypeScript interfaces and types

**Key Exports:**
- `IUniSigner` - Universal signer interface
- `HDPath` - HD derivation path utilities
- `SignerConfig` - Signer configuration types
- `QueryClientError` - Error handling types

### @interchainjs/utils
**Purpose:** Common utilities and helper functions

**Key Exports:**
- `HttpRpcClient`, `WebSocketRpcClient` - RPC client implementations
- `getChainById`, `getPrefix` - Chain registry utilities
- `startsWithArray`, `arrayContentEquals` - Array utilities

### @interchainjs/math
**Purpose:** Mathematical operations for blockchain applications

**Key Exports:**
- `Decimal` - Arbitrary precision decimal arithmetic
- `Uint53`, `Uint64` - Safe integer operations
- Mathematical utilities for token amounts and calculations

### @interchainjs/encoding
**Purpose:** Encoding and decoding utilities

**Key Exports:**
- Base64, Hex, Bech32, UTF-8, ASCII encoding/decoding
- RFC3339 date formatting
- Address and data format conversions

### @interchainjs/crypto
**Purpose:** Cryptographic primitives and key management

**Key Exports:**
- `Secp256k1`, `Ed25519` - Elliptic curve cryptography
- `Sha256`, `Sha512`, `Ripemd160`, `Keccak256` - Hash functions
- `Bip39` - Mnemonic generation and validation
- `Slip10` - HD key derivation

### @interchainjs/amino
**Purpose:** Amino encoding and legacy Cosmos SDK compatibility

**Key Exports:**
- Amino pubkey encoding/decoding
- Coin and fee utilities
- Legacy transaction signing support
- Address derivation from public keys

### @interchainjs/pubkey
**Purpose:** Public key utilities and conversions

**Key Exports:**
- `encodePubkey`, `decodePubkey` - Pubkey format conversions
- `pubkeyToProto` - Protobuf pubkey encoding
- Pubkey type checking and validation

### @interchainjs/auth
**Purpose:** Authentication and account management

**Key Exports:**
- `BaseWallet` - Base wallet implementation
- Address strategy registration and management
- Account and private key interfaces

## Generated Libraries

### @interchainjs/cosmos-types
**Purpose:** Generated Cosmos SDK message types and codecs

**Content:** Auto-generated from Cosmos SDK protobuf definitions
- Message types for all Cosmos SDK modules
- Query and transaction message definitions
- Type-safe protobuf encoding/decoding

### interchainjs
**Purpose:** Main library bundle with all generated types

**Content:** Comprehensive bundle including:
- All Cosmos SDK types
- IBC types
- CosmWasm types
- Tendermint types
- Helper functions and utilities

### injective-react / injective-vue
**Purpose:** Framework-specific hooks for Injective Protocol

**Content:**
- React Query hooks for Injective
- Vue Query composables for Injective
- Auto-generated from Injective protobuf definitions

### @interchainjs/react / @interchainjs/vue
**Purpose:** Framework-specific hooks for Cosmos SDK

**Content:**
- React Query hooks for Cosmos SDK modules
- Vue Query composables for Cosmos SDK modules
- Type-safe query and mutation hooks

## Function-to-Package Reference

### packages/amino
```typescript
// Address utilities
pubkeyToAddress              // Convert public key to bech32 address
pubkeyToRawAddress          // Convert public key to raw address bytes
rawEd25519PubkeyToRawAddress // Convert Ed25519 pubkey to raw address
rawSecp256k1PubkeyToRawAddress // Convert secp256k1 pubkey to raw address

// Coin utilities
addCoins                    // Add multiple coin amounts together
Coin                        // Coin type interface
coin                        // Create a single coin object
coins                       // Create multiple coin objects
parseCoins                  // Parse coin string into coin objects

// Encoding utilities
decodeAminoPubkey          // Decode amino-encoded public key
decodeBech32Pubkey         // Decode bech32-encoded public key
encodeAminoPubkey          // Encode public key in amino format
encodeBech32Pubkey         // Encode public key in bech32 format
encodeEd25519Pubkey        // Encode Ed25519 public key
encodeSecp256k1Pubkey      // Encode secp256k1 public key

// Pubkey types and utilities
Ed25519Pubkey              // Ed25519 public key type
isEd25519Pubkey            // Check if pubkey is Ed25519
isMultisigThresholdPubkey  // Check if pubkey is multisig threshold
isSecp256k1Pubkey          // Check if pubkey is secp256k1
isSinglePubkey             // Check if pubkey is single key
MultisigThresholdPubkey    // Multisig threshold pubkey type
Pubkey                     // Generic pubkey type
pubkeyType                 // Get the type of a pubkey
Secp256k1Pubkey           // secp256k1 public key type
SinglePubkey              // Single public key type

// Signature utilities
decodeSignature           // Decode signature from bytes
encodeSecp256k1Signature  // Encode secp256k1 signature
StdSignature              // Standard signature type

// Transaction utilities
AminoMsg                  // Amino message type
makeSignDoc               // Create signing document
serializeSignDoc          // Serialize signing document
StdFee                    // Standard fee type
StdSignDoc                // Standard signing document
isStdTx                   // Check if transaction is standard
makeStdTx                 // Create standard transaction
StdTx                     // Standard transaction type

// Signer interfaces
AccountData               // Account data interface
Algo                      // Algorithm type
AminoSignResponse         // Amino signing response
OfflineAminoSigner        // Offline amino signer interface

// Multisig and paths
createMultisigThresholdPubkey // Create multisig threshold pubkey
makeCosmoshubPath            // Create Cosmos Hub derivation path
omitDefault                  // Omit default values from objects

// Wallet utilities
executeKdf                   // Execute key derivation function
KdfConfiguration            // KDF configuration type
```

### packages/auth
```typescript
// Core interfaces and implementations
IWallet                     // Universal wallet interface
IAccount                    // Account interface with address and pubkey
IPrivateKey                 // Private key interface with signing
BaseWallet                  // Base wallet implementation
PrivateKey                  // Core private key implementation

// Address strategies
registerAddressStrategy     // Register custom address derivation strategy
getAddressStrategy          // Get registered address strategy by name
IAddressStrategy           // Address strategy interface

// Configuration
AlgorithmConfig            // Cryptographic algorithm configuration
HashConfig                 // Hash function configuration
SignatureFormatConfig      // Signature format configuration

// Key management
generatePrivateKey         // Generate new private key
derivePrivateKey          // Derive private key from seed
createAccount             // Create account from private key

// Authentication utilities
AuthConfig                // Authentication configuration
createAuthConfig          // Create auth configuration
validateSignature         // Validate cryptographic signature
```

### packages/crypto
```typescript
// Mnemonic and BIP39
Bip39                      // BIP39 mnemonic utilities
EnglishMnemonic           // English wordlist for mnemonics
generateMnemonic          // Generate new mnemonic phrase
validateMnemonic          // Validate mnemonic phrase

// Hash functions
HashFunction              // Generic hash function interface
Sha256                    // SHA-256 hash class
sha256                    // SHA-256 hash function
Sha512                    // SHA-512 hash class
sha512                    // SHA-512 hash function
Ripemd160                 // RIPEMD-160 hash class
ripemd160                 // RIPEMD-160 hash function
Keccak256                 // Keccak-256 hash class
keccak256                 // Keccak-256 hash function
Hmac                      // HMAC implementation

// Cryptographic algorithms
Secp256k1                 // secp256k1 elliptic curve operations
Secp256k1Keypair         // secp256k1 key pair
Ed25519                   // Ed25519 elliptic curve operations
Ed25519Keypair           // Ed25519 key pair
ExtendedSecp256k1Signature // Extended secp256k1 signature
Secp256k1Signature       // secp256k1 signature

// Key derivation
HdPath                    // HD derivation path utilities
pathToString              // Convert HD path to string
Slip10                    // SLIP-10 key derivation
Slip10Curve              // SLIP-10 curve specification
slip10CurveFromString    // Parse SLIP-10 curve from string
Slip10RawIndex           // Raw index for SLIP-10
Slip10Result             // SLIP-10 derivation result
stringToPath             // Parse HD path from string

// Encryption and utilities
Argon2id                 // Argon2id password hashing
Argon2idOptions          // Argon2id configuration options
isArgon2idOptions        // Check if valid Argon2id options
xchacha20NonceLength     // XChaCha20 nonce length constant
Xchacha20poly1305Ietf    // XChaCha20-Poly1305 encryption
Random                   // Cryptographically secure random
```

### packages/encoding
```typescript
// Base encoding
fromAscii                    // Convert ASCII string to bytes
toAscii                      // Convert bytes to ASCII string
fromBase64                   // Decode base64 string to bytes
toBase64                     // Encode bytes to base64 string
fromHex                      // Decode hex string to bytes
toHex                        // Encode bytes to hex string
fromUtf8                     // Convert UTF-8 string to bytes
toUtf8                       // Convert bytes to UTF-8 string

// Address encoding
fromBech32                   // Decode bech32 address to bytes
normalizeBech32             // Normalize bech32 address format
toBech32                     // Encode bytes to bech32 address

// Date/time encoding
fromRfc3339                  // Parse RFC3339 timestamp
toRfc3339                    // Format timestamp as RFC3339

// Cosmos-specific utilities
toAccAddress                 // Convert to account address format
longify                      // Convert to long integer format
decodeCosmosSdkDecFromProto  // Decode Cosmos SDK decimal from protobuf
```

### packages/math
```typescript
// Decimal arithmetic
Decimal                      // Arbitrary precision decimal class
DecimalConfig               // Decimal configuration options

// Safe integers
Uint32                      // 32-bit unsigned integer
Uint53                      // 53-bit unsigned integer (safe in JS)
Uint64                      // 64-bit unsigned integer
Int53                       // 53-bit signed integer (safe in JS)

// Mathematical operations
add                         // Add two numbers safely
subtract                    // Subtract two numbers safely
multiply                    // Multiply two numbers safely
divide                      // Divide two numbers safely
modulo                      // Modulo operation
power                       // Power operation
sqrt                        // Square root operation

// Conversion utilities
fromString                  // Parse number from string
toString                    // Convert number to string
toBigInt                    // Convert to BigInt
toNumber                    // Convert to JavaScript number
```

### packages/pubkey
```typescript
// Pubkey encoding/decoding
encodePubkey                 // Encode public key to protobuf format
decodePubkey                 // Decode public key from protobuf format
pubkeyToProto               // Convert pubkey to protobuf Any type
protoToPubkey               // Convert protobuf Any to pubkey

// Pubkey type utilities
isPubkey                    // Check if object is valid pubkey
validatePubkey              // Validate pubkey format and content
normalizePubkey             // Normalize pubkey to standard format

// Cosmos-specific pubkey utilities
cosmosSecp256k1PubkeyToProto // Convert Cosmos secp256k1 pubkey to proto
cosmosEd25519PubkeyToProto   // Convert Cosmos Ed25519 pubkey to proto

// Multisig utilities
createMultisigPubkey        // Create multisig threshold pubkey
validateMultisigPubkey      // Validate multisig pubkey structure
```

### packages/types
```typescript
// Core interfaces
IUniSigner                  // Universal signer interface
IWallet                     // Wallet interface for account management
IAccount                    // Account interface with address/pubkey
IPrivateKey                 // Private key interface with signing
ISigner                     // Generic signer interface

// Configuration types
SignerConfig               // Configuration for signers
WalletConfig               // Configuration for wallets
AuthConfig                 // Authentication configuration
NetworkConfig              // Network-specific configuration

// HD path utilities
HDPath                     // HD derivation path utilities
HdPath                     // HD path type definition
PathBuilder                // Builder for HD paths

// Query and RPC types
QueryClient                // Generic query client interface
RpcClient                  // RPC client interface
HttpEndpoint               // HTTP endpoint configuration
WebSocketEndpoint          // WebSocket endpoint configuration

// Error types
QueryClientError           // Query client error types
NetworkError               // Network-related errors
TimeoutError               // Timeout errors
ConnectionError            // Connection errors
ParseError                 // Parsing errors
InvalidResponseError       // Invalid response errors
SubscriptionError          // Subscription errors
ProtocolError              // Protocol-level errors

// Transaction types
TxBuilder                  // Transaction builder interface
TxWorkflow                 // Transaction workflow interface
SignDoc                    // Signing document type
BroadcastOptions           // Transaction broadcast options

// Telescope types (generated)
TelescopeGeneratedType     // Generated type from telescope
ProtoType                  // Protobuf type definition
AminoType                  // Amino type definition
```

### packages/utils
```typescript
// Array utilities
startsWithArray             // Check if array starts with another array
arrayContentEquals          // Check if arrays have equal content
arrayStartsWith             // Check if array starts with prefix
arrayEquals                 // Check if arrays are equal

// Assertion utilities
assert                      // Assert condition with error message
assertDefined               // Assert value is not null/undefined
assertIsDeliverTxSuccess    // Assert transaction was successful
assertIsDeliverTxFailure    // Assert transaction failed

// Chain utilities
getChainById                // Get chain info by chain ID
getPrefix                   // Get bech32 prefix for chain
getChainInfo                // Get comprehensive chain information
validateChainId             // Validate chain ID format

// Encoding utilities
cryptoBytes                 // Generate cryptographic random bytes
randomBytes                 // Generate random bytes
secureRandom                // Secure random number generation

// RPC utilities
HttpRpcClient               // HTTP RPC client implementation
WebSocketRpcClient          // WebSocket RPC client implementation
createRpcClient             // Factory for RPC clients
RpcClientOptions            // RPC client configuration options

// Endpoint utilities
HttpEndpoint                // HTTP endpoint configuration
WebSocketEndpoint           // WebSocket endpoint configuration
ReconnectOptions            // Reconnection configuration
EndpointConfig              // Generic endpoint configuration

// Event utilities
EventEmitter                // Event emitter implementation
EventListener               // Event listener interface
createEventEmitter          // Factory for event emitters

// Case conversion utilities
camelCase                   // Convert to camelCase
snakeCase                   // Convert to snake_case
pascalCase                  // Convert to PascalCase
kebabCase                   // Convert to kebab-case

// Price utilities
calculatePrice              // Calculate price with decimals
formatPrice                 // Format price for display
parsePrice                  // Parse price from string

// Logging utilities
Logger                      // Logger interface
LogLevel                    // Log level enumeration
createLogger                // Create logger instance
setLogLevel                 // Set global log level

// Type checking utilities
isObject                    // Check if value is object
isArray                     // Check if value is array
isString                    // Check if value is string
isNumber                    // Check if value is number
isBoolean                   // Check if value is boolean
isDefined                   // Check if value is defined
```

### networks/cosmos
```typescript
// Signers
DirectSigner, AminoSigner, BaseCosmosSignerImpl

// Wallets
Secp256k1HDWallet, SimpleWallet

// Query clients
CosmosQueryClient, createCosmosQueryClient

// Protocol adapters
IProtocolAdapter, createProtocolAdapter, getProtocolInfo

// Workflows
DirectWorkflow, AminoWorkflow, createWorkflow

// Auth and configuration
COSMOS_ADDRESS_STRATEGY, createCosmosConfig

// RPC clients (re-exported)
HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint

// Utilities
validateAddress, deriveAddress, createAccount
```

### networks/ethereum
```typescript
// Signers
EthereumSigner, SignerFromPrivateKey, SignerFromBrowser

// Wallets
EthSecp256k1HDWallet, EthereumWallet

// Query clients
EthereumQueryClient, createEthereumQueryClient

// Workflows
EIP1559Workflow, LegacyWorkflow, EthereumWorkflowBuilder

// Protocol adapters
EthereumProtocolAdapter, createEthereumAdapter

// Transaction types
EthereumTransaction, EIP1559Transaction, LegacyTransaction

// Utilities
estimateGas, getGasPrice, formatEther, parseEther
```

### networks/injective
```typescript
// Signers
DirectSigner, AminoSigner, InjectiveSigner

// Wallets
EthSecp256k1HDWallet, InjectiveWallet

// Query clients
InjectiveQueryClient, createInjectiveQueryClient

// Auth and configuration
INJECTIVE_ETH_ADDRESS_STRATEGY, createInjectiveEthConfig

// Protocol adapters
InjectiveProtocolAdapter, createInjectiveAdapter

// Signature processing
InjectiveSignatureProcessor, processInjectiveSignature
```

### networks/solana
```typescript
// Core types
PublicKey, Keypair, Transaction

// Programs
SystemProgram, TokenProgram, TokenInstructions

// Connection and clients
Connection, WebSocketConnection, SolanaSigningClient

// Signers
DirectSigner, OfflineSigner, PhantomSigner, PhantomSigningClient

// Token utilities
AssociatedTokenAccount, TokenMath, LAMPORTS_PER_SOL

// Wallet integration
getPhantomWallet, isPhantomInstalled

// Utility functions
lamportsToSol, solToLamports

// Constants
DEVNET_ENDPOINT, TESTNET_ENDPOINT, MAINNET_ENDPOINT
```

## Common Import Patterns

### Basic Transaction Signing
```typescript
import { DirectSigner, Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';
```

### Query Operations
```typescript
import { getAllBalances } from '@interchainjs/cosmos/bank/v1beta1/query.rpc.func';
import { CosmosQueryClient } from '@interchainjs/cosmos';
```

### Wallet Management
```typescript
import { generateMnemonic } from '@interchainjs/crypto';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
```

### Framework Integration
```typescript
// React
import { useGetAllBalances } from '@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react';

// Vue
import { useGetAllBalances } from '@interchainjs/vue/cosmos/bank/v1beta1/query.rpc.vue';
```

### Cross-Network Development
```typescript
// Cosmos
import { DirectSigner as CosmosDirectSigner } from '@interchainjs/cosmos';

// Ethereum
import { EthereumSigner } from '@interchainjs/ethereum';

// Injective
import { DirectSigner as InjectiveDirectSigner } from '@interchainjs/injective';
```

---

This guide provides a comprehensive overview of InterchainJS functionality organized by use case and development needs. For detailed API documentation and examples, refer to the individual package README files and the main project documentation.
