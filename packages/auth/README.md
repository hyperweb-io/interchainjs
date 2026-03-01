# @interchainjs/auth

<p align="center" style={{ marginBottom: "20px" }}>
  <img
    src="https://raw.githubusercontent.com/hyperweb-io/interchainjs/refs/heads/main/assets/logo.svg"
    width="280"
  />
</p>

<p
  align="center"
  width="100%"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  }}
>
  <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img
      height="20"
      src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg"
    />
  </a>
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

Foundational cryptographic capabilities for blockchain applications, providing wallet implementations and account management across different cryptographic algorithms.

## Usage

```sh
npm install @interchainjs/auth
```

### Creating HD Wallets

The auth package provides HD (Hierarchical Deterministic) wallet implementations:

```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';
import { generateMnemonic } from '@interchainjs/crypto';

// Generate a mnemonic
const mnemonic = generateMnemonic();

// Create wallet with HD derivation
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{
    prefix: "cosmos",
    hdPath: HDPath.cosmos(0, 0, 0).toString(), // m/44'/118'/0'/0/0
  }]
});

// Get accounts
const accounts = await wallet.getAccounts();
console.log('Address:', accounts[0].address);

// Sign arbitrary data
const signature = await wallet.signByIndex(Uint8Array.from([1, 2, 3]), 0);
console.log('Signature:', signature.toHex());
```

### Working with Different Networks

The auth package supports multiple blockchain networks with appropriate HD paths:

```typescript
import { HDPath } from '@interchainjs/types';

// Cosmos networks (m/44'/118'/0'/0/0)
const cosmosPath = HDPath.cosmos(0, 0, 0).toString();

// Ethereum networks (m/44'/60'/0'/0/0)
const ethereumPath = HDPath.ethereum(0, 0, 0).toString();

// Create wallet for multiple networks
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [
    { prefix: "cosmos", hdPath: cosmosPath },
    { prefix: "osmo", hdPath: cosmosPath },
    // Add more derivations as needed
  ]
});
```

### Integration with Signers

Wallets from the auth package integrate seamlessly with network-specific signers:

- [@interchainjs/cosmos](/networks/cosmos/README.md) - Cosmos ecosystem signers
- [@interchainjs/ethereum](/networks/ethereum/README.md) - Ethereum signers
- [@interchainjs/injective](/networks/injective/README.md) - Injective Protocol signers

## Core Interfaces

### IWallet Interface

The primary interface for managing cryptographic accounts:

- `getAccounts()`: Returns all accounts managed by this wallet
- `getAccountByIndex(index)`: Gets a specific account by its index
- `signByIndex(data, index)`: Signs arbitrary binary data using the specified account

### IAccount Interface

Represents a single cryptographic account:

- `address`: The blockchain address for this account
- `algo`: The cryptographic algorithm used (e.g., 'secp256k1')
- `getPublicKey()`: Returns the public key for this account

### IPrivateKey Interface

Handles private key operations:

- `toPublicKey()`: Derives the corresponding public key
- `sign(data)`: Signs binary data and returns a cryptographic signature
- `fromMnemonic()`: Static method to derive private keys from mnemonic phrases

## Implementations

- **Secp256k1HDWallet**: HD wallet for Cosmos-based networks
- **EthSecp256k1HDWallet**: HD wallet for Ethereum-style addresses (used by Injective)
- **BaseWallet**: Base implementation of IWallet interface
- **PrivateKey**: Core private key implementation with HD derivation support
