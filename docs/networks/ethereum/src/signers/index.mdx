# Ethereum Signers

This directory contains the refactored Ethereum signers that follow the same architectural patterns as the Cosmos signers, implementing clean separation of concerns between signing logic and data retrieval.

## Overview

The new Ethereum signer architecture provides:

- **Clean separation of concerns**: Signers focus on signing, query clients handle data retrieval
- **Type safety**: Full TypeScript support with proper interfaces
- **Transaction type specialization**: Separate signers for Legacy and EIP-1559 transactions
- **Consistent API**: Implements `IUniSigner` interface for cross-chain compatibility
- **Dependency injection**: Query clients are injected, making testing and configuration easier

## Components

### Signers

- **LegacyEthereumSigner** - For pre-EIP-1559 transactions using `gasPrice`
- **EIP1559EthereumSigner** - For EIP-1559 transactions using `maxFeePerGas` and `maxPriorityFeePerGas`

### Base Classes

- **BaseEthereumSigner** - Common functionality shared by both signers
- **IEthereumSigner** - Interface extending `IUniSigner` with Ethereum-specific methods

### Workflows

- **LegacyWorkflow** - Workflow for legacy transaction building and signing
- **EIP1559Workflow** - Workflow for EIP-1559 transaction building and signing
- **EthereumWorkflowBuilder** - Main workflow builder with plugin system

### Workflow Plugins

- **InputValidationPlugin** - Validates and normalizes transaction parameters
- **TransactionBuildingPlugin** - Builds unsigned transaction arrays for RLP encoding
- **SignaturePlugin** - Creates cryptographic signatures for transactions
- **TxAssemblyPlugin** - Assembles final signed transactions

### Legacy Support

- **SignerFromPrivateKey** - Original implementation (maintained for backward compatibility)

## Migration Guide

### From SignerFromPrivateKey to New Architecture

#### Before (Old Architecture)

```typescript
import { SignerFromPrivateKey } from '@interchainjs/ethereum';

// Old way - signer handles everything including queries
const signer = new SignerFromPrivateKey('0x...privatekey', 'https://rpc.url');

// Send legacy transaction
const result = await signer.sendLegacyTransaction(
  '0x...to',
  BigInt('1000000000000000000'), // 1 ETH
  '0x',
  BigInt('20000000000'), // 20 gwei
  BigInt('21000')
);

// Send EIP-1559 transaction
const result = await signer.sendEIP1559Transaction(
  '0x...to',
  BigInt('1000000000000000000'), // 1 ETH
  '0x',
  BigInt('30000000000'), // 30 gwei max fee
  BigInt('2000000000'),  // 2 gwei priority fee
  BigInt('21000')
);
```

#### After (New Architecture)

```typescript
import {
  LegacyEthereumSigner,
  EIP1559EthereumSigner,
  EthereumQueryClient
} from '@interchainjs/ethereum';
import { Secp256k1HDWallet } from '@interchainjs/ethereum/wallets';
import { HttpRpcClient } from '@interchainjs/rpc';
import { EthereumProtocolAdapter } from '@interchainjs/ethereum/adapters';

// Create wallet
const wallet = Secp256k1HDWallet.fromPrivateKey('0x...privatekey');

// Create query client (handles all RPC calls)
const rpcClient = new HttpRpcClient('https://rpc.url');
const protocolAdapter = new EthereumProtocolAdapter();
const queryClient = new EthereumQueryClient(rpcClient, protocolAdapter);

// Create signers with injected dependencies
const legacySigner = new LegacyEthereumSigner(wallet, { queryClient });
const eip1559Signer = new EIP1559EthereumSigner(wallet, { queryClient });

// Send legacy transaction
const legacyTx = await legacySigner.sendTransfer(
  '0x...to',
  BigInt('1000000000000000000'), // 1 ETH
  undefined, // use first account
  {
    gasPrice: BigInt('20000000000'), // 20 gwei
    gasLimit: BigInt('21000')
  }
);
const legacyResult = await legacyTx.broadcast();

// Send EIP-1559 transaction
const eip1559Tx = await eip1559Signer.sendTransfer(
  '0x...to',
  BigInt('1000000000000000000'), // 1 ETH
  undefined, // use first account
  {
    maxFeePerGas: BigInt('30000000000'), // 30 gwei
    maxPriorityFeePerGas: BigInt('2000000000'), // 2 gwei
    gasLimit: BigInt('21000')
  }
);
const eip1559Result = await eip1559Tx.broadcast();
```

## Usage Examples

### Basic Setup

```typescript
import {
  LegacyEthereumSigner,
  EIP1559EthereumSigner,
  EthereumQueryClient
} from '@interchainjs/ethereum';
import { Secp256k1HDWallet } from '@interchainjs/ethereum/wallets';

// Create wallet from private key
const wallet = Secp256k1HDWallet.fromPrivateKey('0x...');

// Or create from mnemonic
const wallet = Secp256k1HDWallet.fromMnemonic('your mnemonic phrase here');

// Create query client
const queryClient = new EthereumQueryClient(rpcClient, protocolAdapter);

// Create signers
const legacySigner = new LegacyEthereumSigner(wallet, {
  queryClient,
  gasMultiplier: 1.2 // optional: 20% gas buffer
});

const eip1559Signer = new EIP1559EthereumSigner(wallet, {
  queryClient,
  gasMultiplier: 1.2
});
```

### Legacy Transactions

```typescript
// Simple transfer with auto gas estimation
const signedTx = await legacySigner.signWithAutoGas({
  to: '0x...',
  value: '0x' + BigInt('1000000000000000000').toString(16) // 1 ETH
});

// Contract interaction
const signedTx = await legacySigner.sendContractTransaction(
  '0x...contractAddress',
  '0xa9059cbb...', // encoded function call
  0n, // no ETH value
  undefined, // use first account
  {
    gasPrice: BigInt('25000000000'), // 25 gwei
    gasLimit: BigInt('100000')
  }
);

// Broadcast and wait for confirmation
const result = await signedTx.broadcast({ waitForConfirmation: true });
console.log('Transaction hash:', result.transactionHash);
```

### EIP-1559 Transactions

```typescript
// Simple transfer with auto fee estimation
const signedTx = await eip1559Signer.signWithAutoFees({
  to: '0x...',
  value: '0x' + BigInt('1000000000000000000').toString(16) // 1 ETH
});

// Contract interaction with custom fees
const signedTx = await eip1559Signer.sendContractTransaction(
  '0x...contractAddress',
  '0xa9059cbb...', // encoded function call
  BigInt('500000000000000000'), // 0.5 ETH
  undefined, // use first account
  {
    maxFeePerGas: BigInt('50000000000'), // 50 gwei
    maxPriorityFeePerGas: BigInt('3000000000'), // 3 gwei
    gasLimit: BigInt('150000')
  }
);

// Broadcast and wait
const result = await signedTx.broadcast({
  waitForConfirmation: true,
  confirmations: 3,
  timeoutMs: 120000 // 2 minutes
});
```

### Personal Message Signing

```typescript
// Sign a personal message
const signature = await signer.signPersonalMessage('Hello, Ethereum!');

// Verify a signature
const isValid = await signer.verifyPersonalMessage(
  'Hello, Ethereum!',
  signature,
  '0x...address'
);
```

## Architecture Benefits

### Separation of Concerns

- **Signers**: Focus purely on transaction signing and cryptographic operations
- **Query Clients**: Handle all RPC calls and chain interactions
- **Wallets**: Manage private keys and account derivation

### Testability

```typescript
// Easy to mock query client for testing
const mockQueryClient = {
  getChainId: () => Promise.resolve(1),
  getNonce: () => Promise.resolve(42),
  getGasPrice: () => Promise.resolve(BigInt('20000000000')),
  // ... other methods
};

const signer = new LegacyEthereumSigner(wallet, { queryClient: mockQueryClient });
```

### Configuration

```typescript
// Flexible configuration
const config = {
  queryClient,
  gasMultiplier: 1.5,
  gasPrice: BigInt('25000000000'), // default gas price
  chainId: 1 // override chain ID
};

const signer = new LegacyEthereumSigner(wallet, config);
```

## Type Safety

All signers implement proper TypeScript interfaces:

```typescript
// Type-safe transaction arguments
const args: LegacyTransactionSignArgs = {
  transaction: {
    to: '0x...',
    value: '0x...',
    gasPrice: '0x...',
    gas: '0x...'
  },
  signerAddress: '0x...',
  options: { gasMultiplier: 1.2 }
};

const signedTx = await legacySigner.sign(args);
```

## Error Handling

```typescript
try {
  const signedTx = await signer.sendTransfer('0x...', BigInt('1000000000000000000'));
  const result = await signedTx.broadcast();
  console.log('Success:', result.transactionHash);
} catch (error) {
  if (error.message.includes('insufficient funds')) {
    console.error('Not enough ETH for transaction');
  } else if (error.message.includes('gas')) {
    console.error('Gas estimation failed');
  } else {
    console.error('Transaction failed:', error.message);
  }
}
```
