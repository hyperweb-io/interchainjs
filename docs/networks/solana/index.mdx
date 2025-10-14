# @interchainjs/solana

A comprehensive TypeScript SDK for Solana blockchain interaction, part of the InterchainJS ecosystem. This SDK provides a modern, type-safe interface for building Solana applications with full SPL token support and wallet integration.

## 🆕 New Query Client Architecture

This package now includes a new query client architecture that follows the InterchainJS patterns established in the Cosmos implementation:

### Request Object Pattern

All RPC methods now use dedicated request objects instead of individual parameters:

```typescript
import { createSolanaQueryClient, SolanaProtocolVersion } from '@interchainjs/solana';
import { GetHealthRequest, GetVersionRequest } from '@interchainjs/solana';

// Create client with new architecture
const client = await createSolanaQueryClient('https://api.mainnet-beta.solana.com', {
  protocolVersion: SolanaProtocolVersion.SOLANA_1_18
});

// Methods that don't need parameters have optional request objects
const health = await client.getHealth(); // Simplified - no request needed
const version = await client.getVersion(); // Simplified - no request needed

// Or use explicit request objects (maintains consistency)
const healthRequest: GetHealthRequest = {};
const healthExplicit = await client.getHealth(healthRequest);

const versionRequest: GetVersionRequest = {};
const versionExplicit = await client.getVersion(versionRequest);
```

### Features

- **Type-Safe**: Strongly typed interfaces for all Solana RPC methods
- **User-Friendly**: Optional request parameters for methods that don't need input
- **Consistent**: Request object pattern across all methods
- **Extensible**: Easy to add new RPC methods following the same pattern
- **Protocol Adapters**: Version-specific adapters with encoding/decoding
- **Auto-Detection**: Automatic protocol version detection

## InterchainJS Integration

Use the InterchainJS core `getSigner` factory with the `solana_std` signer type to wire Solana wallets or keypairs into the standard workflow.

```typescript
import { getSigner, SOLANA_STD } from '@interchainjs/interchain/core';
import {
  createSolanaQueryClient,
  DEVNET_ENDPOINT,
  Keypair,
  PublicKey,
  SolanaSigner,
  SystemProgram,
  solToLamports
} from '@interchainjs/solana';

const queryClient = await createSolanaQueryClient(DEVNET_ENDPOINT);
const keypair = Keypair.generate();

const solanaSigner = getSigner<SolanaSigner>(keypair, {
  preferredSignType: SOLANA_STD,
  signerOptions: {
    queryClient,
    commitment: 'confirmed'
  }
});

const response = await solanaSigner.signAndBroadcast({
  instructions: [
    SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey: new PublicKey('11111111111111111111111111111112'),
      lamports: solToLamports(0.05)
    })
  ]
});

console.log('Signature:', response.signature);
```

Any `IWallet`-compatible authentication method—including browser wallets like `PhantomSigner` or an in-memory `Keypair`—can be supplied to the factory.

## Installation

```bash
npm install @interchainjs/solana
```

## Quick Start

### Node.js Environment

```typescript
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  DEVNET_ENDPOINT,
  solToLamports
} from '@interchainjs/solana';

// Create connection to Solana cluster
const connection = new Connection(DEVNET_ENDPOINT);

// Generate a new keypair
const keypair = Keypair.generate();
console.log('Public Key:', keypair.publicKey.toString());

// Create a simple transfer transaction
const recipient = new PublicKey('11111111111111111111111111111112');
const lamports = solToLamports(0.1); // 0.1 SOL

const transaction = new Transaction();
transaction.add(
  SystemProgram.transfer({
    fromPubkey: keypair.publicKey,
    toPubkey: recipient,
    lamports
  })
);

// Sign and send transaction
const signature = await connection.sendTransaction(transaction, [keypair]);
console.log('Transaction signature:', signature);
```

### Browser Environment

```typescript
import {
  Connection,
  PublicKey,
  Transaction,
  PhantomSigner,
  PhantomSigningClient,
  isPhantomInstalled,
  MAINNET_ENDPOINT
} from '@interchainjs/solana';

// Check if Phantom wallet is installed
if (!isPhantomInstalled()) {
  console.error('Phantom wallet not installed');
  return;
}

// Connect to Phantom wallet
const phantomSigner = new PhantomSigner();
await phantomSigner.connect();

// Create signing client
const connection = new Connection(MAINNET_ENDPOINT);
const client = new PhantomSigningClient(connection, phantomSigner);

// Get wallet address
const walletAddress = phantomSigner.getPublicKey();
console.log('Wallet address:', walletAddress.toString());

// Send transaction through Phantom
const recipient = new PublicKey('11111111111111111111111111111112');
const result = await client.sendTokens(walletAddress, recipient, 0.1);
console.log('Transaction result:', result);
```

## Core Features

### Connection Management

```typescript
import { Connection, DEVNET_ENDPOINT, MAINNET_ENDPOINT } from '@interchainjs/solana';

// Connect to different clusters
const devnetConnection = new Connection(DEVNET_ENDPOINT);
const mainnetConnection = new Connection(MAINNET_ENDPOINT);

// Check cluster health
const health = await connection.getHealth();
console.log('RPC Health:', health);

// Get account info
const accountInfo = await connection.getAccountInfo(publicKey);
if (accountInfo) {
  console.log('Account balance:', accountInfo.lamports);
  console.log('Account owner:', accountInfo.owner.toString());
}

// Get transaction history
const signatures = await connection.getSignaturesForAddress(publicKey);
console.log('Recent transactions:', signatures.length);
```

### Keypair Operations

```typescript
import { Keypair } from '@interchainjs/solana';

// Generate new keypair
const keypair = Keypair.generate();

// Create from secret key
const secretKey = new Uint8Array(64); // Your secret key bytes
const restoredKeypair = Keypair.fromSecretKey(secretKey);

// Create from seed (deterministic)
const seed = new Uint8Array(32); // Your seed
const seedKeypair = Keypair.fromSeed(seed);

// Sign messages
const message = new TextEncoder().encode('Hello Solana!');
const signature = keypair.sign(message);

// Verify signatures
const isValid = keypair.verify(message, signature);
console.log('Signature valid:', isValid);
```

### Transaction Building

```typescript
import {
  Transaction,
  SystemProgram,
  PublicKey,
  solToLamports
} from '@interchainjs/solana';

const transaction = new Transaction();

// Add transfer instruction
transaction.add(
  SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: new PublicKey(recipientAddress),
    lamports: solToLamports(1.5) // 1.5 SOL
  })
);

// Add account creation instruction
transaction.add(
  SystemProgram.createAccount({
    fromPubkey: payer.publicKey,
    newAccountPubkey: newAccount.publicKey,
    lamports: solToLamports(0.001), // Rent exemption
    space: 0, // Account data size
    programId: SystemProgram.programId
  })
);

// Set recent blockhash and fee payer
const { blockhash } = await connection.getLatestBlockhash();
transaction.recentBlockhash = blockhash;
transaction.feePayer = payer.publicKey;

// Sign transaction
transaction.sign([payer, newAccount]);
```

## SPL Token Operations

### Token Creation and Minting

```typescript
import {
  Connection,
  Keypair,
  TokenProgram,
  TokenInstructions,
  AssociatedTokenAccount,
  TokenMath,
  Transaction
} from '@interchainjs/solana';

const connection = new Connection(DEVNET_ENDPOINT);
const payer = Keypair.generate(); // Fund this account first

// Create new token mint
const mintKeypair = Keypair.generate();
const decimals = 6;

const createMintTx = new Transaction();
createMintTx.add(
  await TokenInstructions.createMint({
    payer: payer.publicKey,
    mint: mintKeypair.publicKey,
    decimals,
    mintAuthority: payer.publicKey,
    freezeAuthority: payer.publicKey
  })
);

// Send transaction
const signature = await connection.sendTransaction(createMintTx, [payer, mintKeypair]);
console.log('Mint created:', signature);

// Create associated token account
const tokenAccount = await AssociatedTokenAccount.getAddress(
  mintKeypair.publicKey,
  payer.publicKey
);

const createAtaTx = new Transaction();
createAtaTx.add(
  await TokenInstructions.createAssociatedTokenAccount({
    payer: payer.publicKey,
    associatedToken: tokenAccount,
    owner: payer.publicKey,
    mint: mintKeypair.publicKey
  })
);

await connection.sendTransaction(createAtaTx, [payer]);

// Mint tokens
const mintAmount = TokenMath.toTokenAmount(1000, decimals); // 1000 tokens
const mintTx = new Transaction();
mintTx.add(
  TokenInstructions.mintTo({
    mint: mintKeypair.publicKey,
    destination: tokenAccount,
    authority: payer.publicKey,
    amount: mintAmount
  })
);

await connection.sendTransaction(mintTx, [payer]);
console.log('Tokens minted successfully');
```

### Token Transfers

```typescript
import { TokenProgram, TokenMath } from '@interchainjs/solana';

// Transfer tokens between accounts
const transferAmount = TokenMath.toTokenAmount(100, 6); // 100 tokens with 6 decimals

const transferTx = new Transaction();
transferTx.add(
  TokenInstructions.transfer({
    source: senderTokenAccount,
    destination: recipientTokenAccount,
    owner: sender.publicKey,
    amount: transferAmount
  })
);

const signature = await connection.sendTransaction(transferTx, [sender]);
console.log('Token transfer completed:', signature);

// Check token balance
const tokenBalance = await connection.getTokenAccountBalance(tokenAccount);
console.log('Token balance:', TokenMath.fromTokenAmount(
  BigInt(tokenBalance.amount),
  tokenBalance.decimals
));
```

### Token Account Management

```typescript
import { AssociatedTokenAccount, TokenProgram } from '@interchainjs/solana';

// Get associated token account address
const ata = await AssociatedTokenAccount.getAddress(mintAddress, ownerAddress);

// Check if ATA exists
const ataInfo = await connection.getAccountInfo(ata);
const ataExists = ataInfo !== null;

if (!ataExists) {
  // Create ATA if it doesn't exist
  const createAtaIx = await TokenInstructions.createAssociatedTokenAccount({
    payer: payer.publicKey,
    associatedToken: ata,
    owner: ownerAddress,
    mint: mintAddress
  });

  const tx = new Transaction().add(createAtaIx);
  await connection.sendTransaction(tx, [payer]);
}

// Get all token accounts for an owner
const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
  ownerAddress,
  { programId: TOKEN_PROGRAM_ID }
);

tokenAccounts.value.forEach(account => {
  const info = account.account.data.parsed.info;
  console.log(`Token: ${info.mint}, Balance: ${info.tokenAmount.uiAmount}`);
});
```

## WebSocket Connections

```typescript
import { WebSocketConnection } from '@interchainjs/solana';

const wsConnection = new WebSocketConnection('wss://api.devnet.solana.com');

// Subscribe to account changes
const subscriptionId = await wsConnection.onAccountChange(
  publicKey,
  (accountInfo) => {
    console.log('Account updated:', accountInfo);
  }
);

// Subscribe to program account changes
const programSubscriptionId = await wsConnection.onProgramAccountChange(
  TOKEN_PROGRAM_ID,
  (accountInfo, context) => {
    console.log('Program account updated:', accountInfo);
  }
);

// Subscribe to signature confirmations
const sigSubscriptionId = await wsConnection.onSignatureConfirmation(
  transactionSignature,
  (result) => {
    console.log('Transaction confirmed:', result);
  }
);

// Unsubscribe
await wsConnection.removeAccountChangeListener(subscriptionId);
await wsConnection.removeProgramAccountChangeListener(programSubscriptionId);
await wsConnection.removeSignatureListener(sigSubscriptionId);

// Close connection
wsConnection.close();
```

## Phantom Wallet Integration

### Basic Phantom Connection

```typescript
import {
  PhantomSigner,
  PhantomSigningClient,
  isPhantomInstalled,
  getPhantomWallet
} from '@interchainjs/solana';

// Check Phantom availability
if (!isPhantomInstalled()) {
  throw new Error('Please install Phantom wallet');
}

// Connect to Phantom
const phantomSigner = new PhantomSigner();
await phantomSigner.connect();

// Get wallet info
const publicKey = phantomSigner.getPublicKey();
const isConnected = phantomSigner.isConnected();

console.log('Wallet address:', publicKey.toString());
console.log('Connected:', isConnected);

// Disconnect
await phantomSigner.disconnect();
```

### Advanced Phantom Usage

```typescript
import { PhantomSigningClient } from '@interchainjs/solana';

const connection = new Connection(MAINNET_ENDPOINT);
const phantomSigner = new PhantomSigner();
await phantomSigner.connect();

const client = new PhantomSigningClient(connection, phantomSigner);

// Send SOL
const recipient = new PublicKey('target-address');
const result = await client.sendTokens(
  phantomSigner.getPublicKey(),
  recipient,
  1.5 // 1.5 SOL
);

// Sign custom transaction
const transaction = new Transaction();
transaction.add(/* your instructions */);

const signedTx = await phantomSigner.signTransaction(transaction);
const signature = await connection.sendRawTransaction(signedTx.serialize());

// Sign message
const message = new TextEncoder().encode('Sign this message');
const signature = await phantomSigner.signMessage(message);
console.log('Message signature:', signature);
```

## Utilities and Helpers

### Solana Units and Conversion

```typescript
import {
  lamportsToSol,
  solToLamports,
  solToLamportsBigInt,
  lamportsToSolString,
  isValidLamports,
  isValidSol,
  LAMPORTS_PER_SOL
} from '@interchainjs/solana';

// Convert between SOL and lamports
const solAmount = lamportsToSol(1500000000); // 1.5 SOL
const lamports = solToLamports(1.5); // 1500000000 lamports
const lamportsBigInt = solToLamportsBigInt(1.5);

// Format for display
const formatted = lamportsToSolString(1500000000); // "1.5"

// Validation
const isValidLamportAmount = isValidLamports(1500000000); // true
const isValidSolAmount = isValidSol(1.5); // true

console.log(`1 SOL = ${LAMPORTS_PER_SOL} lamports`);
```

### Address Validation and Formatting

```typescript
import {
  isValidSolanaAddress,
  formatSolanaAddress,
  PublicKey
} from '@interchainjs/solana';

const address = 'DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1';

// Validate address
const isValid = isValidSolanaAddress(address);
console.log('Valid address:', isValid);

// Format address for display
const formatted = formatSolanaAddress(address, 4, 4); // "DjVE...59qw1"

// Create PublicKey from string
try {
  const publicKey = new PublicKey(address);
  console.log('PublicKey created:', publicKey.toString());
} catch (error) {
  console.error('Invalid address format');
}
```

### Transaction Utilities

```typescript
import {
  encodeSolanaCompactLength,
  decodeSolanaCompactLength,
  concatUint8Arrays,
  SOLANA_TRANSACTION_LIMITS,
  calculateRentExemption,
  SOLANA_ACCOUNT_SIZES
} from '@interchainjs/solana';

// Encode/decode compact array lengths
const length = 1000;
const encoded = encodeSolanaCompactLength(length);
const decoded = decodeSolanaCompactLength(encoded);

// Concatenate byte arrays
const array1 = new Uint8Array([1, 2, 3]);
const array2 = new Uint8Array([4, 5, 6]);
const combined = concatUint8Arrays([array1, array2]);

// Check transaction limits
console.log('Max transaction size:', SOLANA_TRANSACTION_LIMITS.MAX_TX_SIZE);
console.log('Max instructions per tx:', SOLANA_TRANSACTION_LIMITS.MAX_INSTRUCTIONS);

// Calculate rent exemption
const accountSize = SOLANA_ACCOUNT_SIZES.TOKEN_ACCOUNT;
const rentExemption = await calculateRentExemption(connection, accountSize);
console.log('Rent exemption needed:', lamportsToSol(rentExemption), 'SOL');
```

## Error Handling

```typescript
import { Connection, PublicKey } from '@interchainjs/solana';

try {
  const connection = new Connection(DEVNET_ENDPOINT);
  const accountInfo = await connection.getAccountInfo(publicKey);

  if (!accountInfo) {
    throw new Error('Account not found');
  }

  // Process account info
} catch (error) {
  if (error.message.includes('Invalid public key')) {
    console.error('Invalid address format');
  } else if (error.message.includes('Account not found')) {
    console.error('Account does not exist');
  } else {
    console.error('Network error:', error.message);
  }
}

// Transaction error handling
try {
  const signature = await connection.sendTransaction(transaction, signers);

  // Wait for confirmation with timeout
  const confirmation = await connection.confirmTransaction(signature, 'confirmed');

  if (confirmation.value.err) {
    throw new Error(`Transaction failed: ${confirmation.value.err}`);
  }

  console.log('Transaction confirmed:', signature);
} catch (error) {
  console.error('Transaction failed:', error.message);
}
```

## Development and Testing

### Running Tests

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:keypair
npm run test:token
npm run test:ws
npm run test:integration
npm run test:spl
```

### Building

```bash
# Development build
npm run build:dev

# Production build
npm run build

# Watch mode
npm run dev
```

### Local Development with Starship

```bash
# Start local Solana cluster
npm run starship:start

# Stop local cluster
npm run starship:stop
```

## API Reference

### Core Classes

- **Connection**: RPC client for Solana clusters
- **Keypair**: Ed25519 keypair for signing transactions
- **PublicKey**: Solana public key representation
- **Transaction**: Transaction builder and serializer
- **SystemProgram**: Native Solana system program interactions

### SPL Token Classes

- **TokenProgram**: SPL token program interactions
- **TokenInstructions**: Token instruction builders
- **AssociatedTokenAccount**: ATA management utilities
- **TokenMath**: Decimal precision handling

### Wallet Integration

- **PhantomSigner**: Phantom wallet integration
- **PhantomSigningClient**: High-level Phantom client
- **DirectSigner**: Direct keypair signing
- **OfflineSigner**: Offline transaction signing

### WebSocket

- **WebSocketConnection**: Real-time account/program monitoring

## Constants and Endpoints

```typescript
// Cluster endpoints
DEVNET_ENDPOINT = 'https://api.devnet.solana.com'
TESTNET_ENDPOINT = 'https://api.testnet.solana.com'
MAINNET_ENDPOINT = 'https://api.mainnet-beta.solana.com'

// Common program IDs
TOKEN_PROGRAM_ID
ASSOCIATED_TOKEN_PROGRAM_ID
SYSTEM_PROGRAM_ID

// Conversion constants
LAMPORTS_PER_SOL = 1_000_000_000
```

## License

MIT License

## Support

For issues and questions, please visit the [InterchainJS repository](https://github.com/hyperweb-io/interchainjs).
