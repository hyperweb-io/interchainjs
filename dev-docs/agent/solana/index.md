# Solana Network Implementation

The Solana network implementation provides comprehensive support for interacting with the Solana blockchain, including transaction signing, RPC communication, wallet integration, and SPL token operations.

## Overview

Solana is a high-performance blockchain that supports smart contracts and decentralized applications. The InterchainJS Solana implementation provides:

- **Transaction Building**: Create and serialize Solana transactions
- **Signing Support**: Multiple signer types including direct, offline, and browser wallet integration
- **RPC Communication**: HTTP and WebSocket clients for blockchain interaction
- **SPL Token Support**: Comprehensive token program integration
- **Wallet Integration**: Support for Phantom and other Solana wallets

## Quick Start

### Installation

```bash
npm install @interchainjs/solana
```

### Basic Usage

```typescript
import { 
  Connection, 
  SolanaSigningClient, 
  DirectSigner, 
  Keypair,
  SystemProgram,
  PublicKey
} from '@interchainjs/solana';

// Create connection
const connection = new Connection({
  endpoint: 'https://api.devnet.solana.com',
  commitment: 'confirmed'
});

// Create signer
const keypair = Keypair.generate();
const signer = new DirectSigner(keypair);

// Create signing client
const client = new SolanaSigningClient(connection, signer);

// Transfer SOL
const signature = await client.transfer({
  recipient: new PublicKey('...'),
  amount: 1000000 // lamports
});

console.log('Transaction signature:', signature);
```

### Browser Wallet Integration

```typescript
import { 
  PhantomSigningClient,
  isPhantomInstalled 
} from '@interchainjs/solana';

if (isPhantomInstalled()) {
  const client = await PhantomSigningClient.connectWithPhantom(
    'https://api.devnet.solana.com'
  );
  
  const signature = await client.transfer({
    recipient: new PublicKey('...'),
    amount: 1000000
  });
}
```

## Core Components

### Connection Management
- **Connection**: HTTP RPC client for blockchain queries
- **WebSocketConnection**: Real-time subscriptions and events
- **Configuration**: Network endpoints and connection settings

### Transaction Signing
- **DirectSigner**: Sign transactions with a keypair
- **OfflineSigner**: Sign transactions without network access
- **PhantomSigner**: Browser wallet integration

### SPL Token Support
- **TokenProgram**: SPL token program instructions
- **TokenInstructions**: Token transfer and management
- **AssociatedTokenAccount**: Associated token account utilities

## Architecture

The Solana implementation follows a layered architecture:

```text
┌─────────────────────────────────────┐
│         Public API Layer           │  ← SolanaSigningClient, Signers
├─────────────────────────────────────┤
│       Transaction Layer            │  ← Transaction, SystemProgram
├─────────────────────────────────────┤
│      Communication Layer           │  ← Connection, WebSocket
├─────────────────────────────────────┤
│        Protocol Layer              │  ← RPC, Serialization
└─────────────────────────────────────┘
```

## Network Endpoints

### Mainnet
- **RPC**: `https://api.mainnet-beta.solana.com`
- **WebSocket**: `wss://api.mainnet-beta.solana.com`

### Devnet
- **RPC**: `https://api.devnet.solana.com`
- **WebSocket**: `wss://api.devnet.solana.com`

### Testnet
- **RPC**: `https://api.testnet.solana.com`
- **WebSocket**: `wss://api.testnet.solana.com`

## Key Features

### Transaction Types
- **System Program**: SOL transfers, account creation
- **SPL Token**: Token transfers, minting, burning
- **Custom Programs**: Arbitrary program interactions

### Wallet Support
- **Keypair Wallets**: Direct private key management
- **Browser Wallets**: Phantom, Solflare, and other providers
- **Hardware Wallets**: Ledger integration (planned)

### Real-time Features
- **Account Subscriptions**: Monitor account changes
- **Program Subscriptions**: Watch program account updates
- **Transaction Logs**: Real-time transaction monitoring

## Examples

### Token Transfer
```typescript
import { TokenProgram, TOKEN_PROGRAM_ID } from '@interchainjs/solana';

const transferInstruction = TokenProgram.transfer({
  source: sourceTokenAccount,
  destination: destinationTokenAccount,
  owner: signer.publicKey,
  amount: 1000000
});

const signature = await client.sendTransaction(
  new Transaction().add(transferInstruction)
);
```

### Account Monitoring
```typescript
import { WebSocketConnection } from '@interchainjs/solana';

const ws = new WebSocketConnection({
  endpoint: 'wss://api.devnet.solana.com'
});

await ws.connect();

const subscriptionId = await ws.subscribeToAccount(
  publicKey,
  (accountInfo) => {
    console.log('Account updated:', accountInfo);
  }
);
```

## Migration and Refactoring

The Solana implementation is undergoing architectural improvements to align with InterchainJS standards. See the [Refactoring Plan](./refactoring-plan) for detailed information about:

- Architectural modernization
- Breaking changes and migration paths
- New features and capabilities
- Timeline and implementation phases

## Resources

- [Solana Documentation](https://docs.solana.com/)
- [SPL Token Program](https://spl.solana.com/token)
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- [Phantom Wallet](https://phantom.app/)

## Support

For issues and questions:
- [GitHub Issues](https://github.com/cosmology-tech/interchainjs/issues)
- [Discord Community](https://discord.gg/cosmology)
- [Documentation](https://docs.cosmology.zone/interchainjs)
