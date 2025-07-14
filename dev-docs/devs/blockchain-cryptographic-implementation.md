# Blockchain Cryptographic Structure Implementation

This document describes the implementation of the blockchain cryptographic structure in the `@interchainjs/auth` package.

## Overview

The implementation provides a comprehensive cryptographic infrastructure for blockchain applications, supporting multiple chains (Cosmos, Ethereum, Injective) and algorithms (secp256k1, ed25519).

## Architecture

### Core Components

1. **PrivateKey**: Manages private keys with HD derivation support
2. **PublicKey**: Handles public key operations and address derivation
3. **Address**: Represents blockchain addresses with validation
4. **Wallet**: High-level interface for key management and signing

### Configuration System

The configuration system uses a builder pattern to create chain-specific configurations:

```typescript
// Cosmos configuration
const cosmosConfig = createCosmosConfig('cosmos');

// Ethereum configuration
const ethConfig = createEthereumConfig();

// Injective configuration
const injConfig = createInjectiveConfig();
```

### Address Strategies

Different blockchains use different address derivation strategies:

- **Cosmos**: SHA256 → RIPEMD160 → Bech32 encoding
- **Ethereum**: Keccak256 → Last 20 bytes → EIP-55 checksum
- **Injective**: Same as Cosmos but with 'inj' prefix

## Usage Examples

### Creating a Wallet from Mnemonic

```typescript
import { HDPath } from '@interchainjs/types';
import { Wallet, createCosmosConfig } from '@interchainjs/auth';

const mnemonic = 'your twelve word mnemonic phrase here...';
const hdPaths = [
  HDPath.cosmos(0, 0, 0),
  HDPath.cosmos(0, 0, 1),
];

const config = createCosmosConfig('cosmos');
const wallet = await Wallet.fromMnemonic(mnemonic, hdPaths, config);
```

### Getting Accounts

```typescript
const accounts = wallet.toAccounts();
accounts.forEach(account => {
  console.log('Address:', account.address.value);
  console.log('Public Key:', account.publicKey.toHex());
  console.log('Algorithm:', account.algo);
});
```

### Signing Messages

```typescript
const message = new TextEncoder().encode('Hello, Blockchain!');
const signature = await wallet.sign(0, message); // Sign with first key

// Verify signature
const account = wallet.getAccount(0);
const isValid = await account.publicKey.verify(message, signature);
```

### Address Parsing

```typescript
import { Address } from '@interchainjs/auth';

// Parse Cosmos address
const cosmosAddr = Address.fromString(
  'cosmos1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqnrql8a',
  { strategy: 'cosmos' }
);

// Parse Ethereum address
const ethAddr = Address.fromString(
  '0x0000000000000000000000000000000000000000',
  { strategy: 'ethereum' }
);
```

### Key Import/Export

```typescript
// Export private key
const privateKey = wallet.privateKeys[0];
const hexKey = privateKey.toHex();
const base64Key = privateKey.toBase64();

// Import from hex
const imported = PrivateKey.fromHex(hexKey, config.privateKeyConfig);
```

## Multi-Chain Support

The same mnemonic can generate addresses for different chains:

```typescript
// Same mnemonic, different chains
const cosmosWallet = await Wallet.fromMnemonic(mnemonic, hdPaths, createCosmosConfig('cosmos'));
const osmoWallet = await Wallet.fromMnemonic(mnemonic, hdPaths, createCosmosConfig('osmo'));
const ethWallet = await Wallet.fromMnemonic(mnemonic, [HDPath.eth(0, 0, 0)], createEthereumConfig());
```

## Algorithm Support

### Secp256k1
- Used by: Bitcoin, Ethereum, Cosmos (default)
- Key size: 32 bytes private, 33/65 bytes public (compressed/uncompressed)
- Signature: 64 bytes (r, s components)

### Ed25519
- Used by: Solana, some Cosmos chains
- Key size: 32 bytes private, 32 bytes public
- Signature: 64 bytes

## Testing

The implementation includes comprehensive unit tests:

```bash
# Run tests
yarn test

# Run with coverage
yarn test:coverage
```

## Security Considerations

1. **Private Key Protection**: Private keys are wrapped in secure objects and never exposed directly
2. **Mnemonic Handling**: Mnemonics should be handled securely and cleared from memory after use
3. **Signature Verification**: Always verify signatures to ensure message integrity
4. **Address Validation**: Use the `isValid()` method to validate addresses before use

## Future Enhancements

1. **Hardware Wallet Support**: Integration with Ledger, Trezor
2. **Additional Algorithms**: Support for more signature schemes
3. **Key Encryption**: Built-in key encryption/decryption
4. **Threshold Signatures**: Multi-signature support
5. **Additional Chains**: Support for more blockchain networks