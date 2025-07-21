# @interchainjs/solana

Solana SDK for InterchainJS - A TypeScript implementation that doesn't depend on official Solana packages.

## Features

- ✅ Keypair generation and management
- ✅ Transaction building and signing
- ✅ RPC client for Solana devnet/mainnet
- ✅ Balance checking and transfers
- ✅ Follows Cosmos InterchainJS patterns
- ✅ No official Solana package dependencies

## Installation

```bash
npm install @interchainjs/solana
```

## Usage

```typescript
import { 
  Keypair, 
  SolanaSigningClient, 
  DirectSigner, 
  DEVNET_ENDPOINT 
} from '@interchainjs/solana';

// Generate a new keypair
const keypair = Keypair.generate();

// Create a signer
const signer = new DirectSigner(keypair);

// Connect to Solana devnet
const client = await SolanaSigningClient.connectWithSigner(
  DEVNET_ENDPOINT,
  signer
);

// Check balance
const balance = await client.getBalance();
console.log(`Balance: ${balance} lamports`);

// Transfer SOL
const signature = await client.transfer({
  recipient: recipientPublicKey,
  amount: 1000000, // 0.001 SOL in lamports
});
```

## Testing

### Setup

1. **Configure Private Key**: Add your private key to `.env.local`:
   ```
   PRIVATE_KEY=your_private_key_hex_here
   ```

2. **Verify Address**: The private key should correspond to address `486PNhqSjs5hVEqaVbRaSgNuW4dL9EADejtSbcmYpNVo`. Verify this by running:
   ```bash
   node verify-address.js
   ```

3. **Fund the Address**: Make sure the address has sufficient balance on Solana Devnet (at least 0.01 SOL for tests).

### Private Key Format

The private key can be either:
- **32 bytes (64 hex characters)** - for seed format
- **64 bytes (128 hex characters)** - for secret key format

### Running Tests

```bash
npm test
```

### Test Requirements

- **PRIVATE_KEY is required**: Tests will fail with an error message if no private key is provided in `.env.local`
- **Sufficient balance required**: Tests will fail (not skip) if the address doesn't have enough SOL, showing the current balance and required amount
- **Address verification**: The tests will print the address being used and the network for debugging

### Test Output

The tests will show:
- The address being tested
- Current balance vs required balance
- Network information (Solana Devnet)
- Detailed error messages for debugging

Example test output:
```
Testing with address: 486PNhqSjs5hVEqaVbRaSgNuW4dL9EADejtSbcmYpNVo
Network: Solana Devnet (https://api.devnet.solana.com)
Current balance: 0.05 SOL
Required balance: 0.01 SOL
Address: 486PNhqSjs5hVEqaVbRaSgNuW4dL9EADejtSbcmYpNVo
Network: Solana Devnet (https://api.devnet.solana.com)
```

## Error Messages

### Missing Private Key
```
PRIVATE_KEY is required in .env.local file. Please provide a private key for testing.
```

### Invalid Private Key
```
Failed to parse private key from environment: Invalid private key length: X bytes. Expected 32 bytes (seed) or 64 bytes (secret key). Please check your PRIVATE_KEY in .env.local file.
```

### Insufficient Balance
```
Insufficient balance for transfer test. Current: 0 SOL, Required: 0.01 SOL. Please add funds to address 486PNhqSjs5hVEqaVbRaSgNuW4dL9EADejtSbcmYpNVo on Solana Devnet.
```

## Development

```bash
# Build the SDK
npm run build

# Run tests
npm test

# Clean build files
npm run clean
```