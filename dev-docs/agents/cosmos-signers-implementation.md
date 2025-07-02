# Cosmos Signers Implementation

## Overview

This document describes the implementation of Amino and Direct signers for the Cosmos network using existing workflows and query clients. The implementation provides a complete signing infrastructure that integrates with the existing InterchainJS ecosystem.

## Architecture

### Core Components

1. **Base Signer (`BaseCosmosSignerImpl`)**: Common functionality for all Cosmos signers
2. **Direct Signer (`DirectCosmosSignerImpl`)**: Protobuf-based signing using SIGN_MODE_DIRECT
3. **Amino Signer (`AminoCosmosSignerImpl`)**: JSON-based signing using SIGN_MODE_LEGACY_AMINO_JSON
4. **Simple Wallet (`SimpleWallet`)**: Basic wallet implementation for testing and development

### File Structure

```
networks/cosmos/src/signers/
├── types.ts                 # Type definitions and interfaces
├── base-signer.ts           # Base signer implementation
├── direct-signer.ts         # Direct signer implementation
├── amino-signer.ts          # Amino signer implementation
├── simple-wallet.ts         # Simple wallet implementation
├── index.ts                 # Exports
└── README.md               # Usage documentation
```

## Implementation Details

### Type System

The implementation defines several key interfaces:

- `CosmosSignerConfig`: Configuration for signers (chain ID, query client)
- `CosmosWallet`: Wallet interface for account management and signing
- `CosmosBroadcastOptions`: Options for transaction broadcasting
- `CosmosBroadcastResponse`: Response from transaction broadcasting
- `CosmosSignedTransaction`: Signed transaction with broadcast capability

### Base Signer Features

The `BaseCosmosSignerImpl` provides:

- **Transaction Broadcasting**: Support for sync, async, and commit modes
- **Transaction Waiting**: Automatic polling for transaction inclusion
- **Account Querying**: Integration with chain query clients
- **Error Handling**: Comprehensive error handling and logging
- **Extensibility**: Abstract methods for subclass customization

### Direct Signer

The `DirectCosmosSignerImpl`:

- Uses `DirectWorkflow` for transaction building
- Implements `SIGN_MODE_DIRECT` for protobuf-based signing
- Supports all standard Cosmos SDK message types
- Provides efficient binary serialization

### Amino Signer

The `AminoCosmosSignerImpl`:

- Uses `AminoWorkflow` for transaction building
- Implements `SIGN_MODE_LEGACY_AMINO_JSON` for JSON-based signing
- Maintains compatibility with legacy Cosmos applications
- Supports amino message conversion

### Simple Wallet

The `SimpleWallet` provides:

- **Key Management**: Secp256k1 private/public key handling
- **Address Generation**: Bech32 address encoding with configurable prefixes
- **Signing**: Arbitrary data signing with ECDSA
- **Account Interface**: Compatible with `CosmosAccount` interface

## Usage Examples

### Basic Direct Signer Usage

```typescript
import { DirectCosmosSignerImpl, SimpleWallet } from '@interchainjs/cosmos';
import { CosmosQueryClient } from '@interchainjs/cosmos';

// Create wallet
const wallet = new SimpleWallet(privateKey, 'cosmos');

// Create signer
const signer = new DirectCosmosSignerImpl({
  chainId: 'cosmoshub-4',
  queryClient: new CosmosQueryClient(rpcClient, protocolAdapter)
}, wallet);

// Sign and broadcast transaction
const result = await signer.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'cosmos1...',
      toAddress: 'cosmos1...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  }],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gasLimit: BigInt(200000)
  },
  memo: 'Test transaction'
});

console.log('Transaction hash:', result.transactionHash);
```

### Basic Amino Signer Usage

```typescript
import { AminoCosmosSignerImpl, SimpleWallet } from '@interchainjs/cosmos';

// Create wallet
const wallet = new SimpleWallet(privateKey, 'cosmos');

// Create signer
const signer = new AminoCosmosSignerImpl({
  chainId: 'cosmoshub-4',
  queryClient: queryClient
}, wallet);

// Sign and broadcast transaction
const result = await signer.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'cosmos1...',
      toAddress: 'cosmos1...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  }],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gasLimit: BigInt(200000)
  },
  memo: 'Test transaction'
});
```

## Integration Points

### Workflow Integration

The signers integrate with existing workflows:

- **DirectWorkflow**: Used by `DirectCosmosSignerImpl` for protobuf-based transactions
- **AminoWorkflow**: Used by `AminoCosmosSignerImpl` for amino-based transactions

### Query Client Integration

The signers use `CosmosQueryClient` for:

- Broadcasting transactions (`broadcastTxSync`, `broadcastTxAsync`, `broadcastTxCommit`)
- Querying transaction status (`getTx`)
- Querying account information (`queryAbci`)

### Type System Integration

The implementation leverages existing types from:

- `@interchainjs/types`: Core interfaces (`ICryptoBytes`, `IAccount`)
- `@interchainjs/cosmos-types`: Cosmos-specific protobuf types
- `@interchainjs/utils`: Utility functions for encoding/decoding

## Error Handling

The implementation includes comprehensive error handling:

- **Network Errors**: Automatic retry logic for network failures
- **Transaction Errors**: Detailed error reporting for failed transactions
- **Validation Errors**: Input validation with descriptive error messages
- **Timeout Handling**: Configurable timeouts for transaction waiting

## Testing Considerations

The implementation is designed for testability:

- **Mock Support**: All dependencies can be easily mocked
- **Configurable Timeouts**: Adjustable timeouts for testing
- **Error Injection**: Ability to inject errors for testing error paths
- **Simple Wallet**: Basic wallet implementation for testing scenarios

## Future Enhancements

Potential areas for improvement:

1. **Message Registry**: Implement proper message encoder/converter registries
2. **Account Querying**: Add protobuf decoding for account queries
3. **Gas Estimation**: Implement transaction simulation for gas estimation
4. **Hardware Wallet Support**: Add support for hardware wallet integration
5. **Multi-Signature**: Support for multi-signature transactions
6. **Fee Estimation**: Automatic fee estimation based on network conditions

## Dependencies

The implementation depends on:

- `@interchainjs/types`: Core type definitions
- `@interchainjs/cosmos-types`: Cosmos protobuf types
- `@interchainjs/utils`: Utility functions
- `@interchainjs/encoding`: Encoding utilities
- `@noble/curves/secp256k1`: Cryptographic operations
- `@noble/hashes`: Hash functions

## Conclusion

This implementation provides a robust, extensible foundation for Cosmos transaction signing that integrates seamlessly with the existing InterchainJS ecosystem. The modular design allows for easy customization and extension while maintaining compatibility with both modern (Direct) and legacy (Amino) signing modes.