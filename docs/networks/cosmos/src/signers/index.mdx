# Cosmos Signers

This directory contains Amino and Direct signers for Cosmos-based blockchains, implementing the `ICosmosSigner` interface and using the existing workflows and query clients.

## Overview

The signers provide a complete transaction signing and broadcasting system for Cosmos networks with support for both protobuf (direct) and JSON (amino) signing modes.

## Components

### Signers

- **DirectSigner** - Protobuf-based signing using `SIGN_MODE_DIRECT`
- **AminoSigner** - JSON-based signing using `SIGN_MODE_LEGACY_AMINO_JSON`

### Wallet

- **SimpleWallet** - Basic wallet implementation for testing and development

### Base Classes

- **BaseCosmosSignerImpl** - Common functionality shared by both signers

## Usage

### Direct Signer

```typescript
import { DirectSigner, SimpleWallet, CosmosQueryClient } from '@interchainjs/cosmos';

// Create a wallet
const wallet = SimpleWallet.fromPrivateKey('your-private-key-hex', 'cosmos');

// Create query client
const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

// Create signer
const signer = new DirectSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient,
  addressPrefix: 'cosmos',
  gasPrice: '0.025uatom',
  gasMultiplier: 1.3
});

// Sign a transaction
const signedTx = await signer.sign({
  messages: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: 'cosmos1...',
        toAddress: 'cosmos1...',
        amount: [{ denom: 'uatom', amount: '1000000' }]
      }
    }
  ],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  },
  memo: 'Test transaction'
});

// Broadcast the transaction
const result = await signedTx.broadcast({ mode: 'sync', checkTx: true });
console.log('Transaction hash:', result.transactionHash);
```

### Amino Signer

```typescript
import { AminoSigner, SimpleWallet, CosmosQueryClient } from '@interchainjs/cosmos';

// Create a wallet
const wallet = SimpleWallet.fromMnemonic('your mnemonic phrase here', 'cosmos');

// Create query client
const queryClient = new CosmosQueryClient(rpcClient, protocolAdapter);

// Create signer
const signer = new AminoSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient,
  addressPrefix: 'cosmos',
  gasPrice: '0.025uatom',
  gasMultiplier: 1.3
});

// Sign and broadcast in one step
const result = await signer.signAndBroadcast({
  messages: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: 'cosmos1...',
        toAddress: 'cosmos1...',
        amount: [{ denom: 'uatom', amount: '1000000' }]
      }
    }
  ],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  }
}, { mode: 'commit' });

console.log('Transaction result:', result);
```

### Creating Wallets

```typescript
import { SimpleWallet } from '@interchainjs/cosmos';

// From private key
const wallet1 = SimpleWallet.fromPrivateKey('abcd1234...', 'cosmos');

// From mnemonic
const wallet2 = SimpleWallet.fromMnemonic(
  'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
  'cosmos'
);

// Random wallet
const wallet3 = SimpleWallet.random('osmo');

// Get account info
const account = await wallet1.getAccount();
console.log('Address:', account.address);
```

## Architecture

### Workflow Integration

The signers use the existing workflow system:

- **DirectSigner** uses `DirectWorkflow` for protobuf-based transaction building
- **AminoSigner** uses `AminoWorkflow` for JSON-based transaction building

### Query Client Integration

Both signers use the `CosmosQueryClient` for:

- Broadcasting transactions
- Querying account information
- Checking transaction status
- Simulating transactions

### Type Safety

All signers implement the `ICosmosSigner` interface, ensuring:

- Consistent API across different signing modes
- Type-safe transaction building
- Proper error handling

## Configuration

### CosmosSignerConfig

```typescript
interface CosmosSignerConfig {
  chainId: string;              // Chain ID (e.g., 'cosmoshub-4')
  queryClient: CosmosQueryClient; // Query client for chain interactions
  addressPrefix?: string;       // Address prefix (e.g., 'cosmos', 'osmo')
  gasPrice?: string | number;   // Gas price for fee calculation
  gasMultiplier?: number;       // Gas multiplier for fee calculation
}
```

### Broadcast Options

```typescript
interface CosmosBroadcastOptions {
  mode?: 'sync' | 'async' | 'commit'; // Broadcast mode
  checkTx?: boolean;                  // Whether to check transaction result
  timeout?: number;                   // Timeout for transaction confirmation (ms)
}
```

## Error Handling

The signers provide comprehensive error handling:

- Input validation with descriptive error messages
- Network error handling with retries
- Transaction timeout handling
- Proper error propagation

## Testing

The signers include a `SimpleWallet` implementation for testing:

```typescript
import { DirectSigner, SimpleWallet } from '@interchainjs/cosmos';

// Create test wallet
const testWallet = SimpleWallet.random('cosmos');

// Use in tests
const signer = new DirectSigner(testWallet, config);
```

## Security Considerations

- Private keys are handled securely within the wallet implementation
- Signatures are generated using industry-standard cryptographic libraries
- Transaction data is validated before signing
- Network communications use secure RPC connections

## Future Enhancements

1. **Hardware Wallet Support** - Integration with Ledger and other hardware wallets
2. **Multi-Signature Support** - Support for multi-signature transactions
3. **Fee Estimation** - Automatic fee estimation based on network conditions
4. **Transaction Simulation** - Pre-flight transaction simulation
5. **Caching** - Account information and gas price caching
6. **Retry Logic** - Automatic retry for failed broadcasts