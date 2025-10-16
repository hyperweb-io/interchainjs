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
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache">
    <img
      height="20"
      src="https://img.shields.io/badge/license-Apache-blue.svg"
    />
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

## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category                       | Tools                                                                                                                                                                                                     | Description                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Chain Information**          | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**          | [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit), [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit)                                                           | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.    |
| **Signing Clients**            | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs), [**CosmJS**](https://github.com/cosmos/cosmjs)                                                                            | A single, universal signing interface for any network                                                               |
| **SDK Clients**                | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                                                                                                                 | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.                                       |
| **Starter Kits**               | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app), [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app)                               | Set up a modern Interchain app by running one command.                                                              |
| **UI Kits**                    | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                                                                                                         | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.                            |
| **Testing Frameworks**         | [**Starship**](https://github.com/hyperweb-io/starship)                                                                                                                                                   | Unified Testing and Development for the Interchain.                                                                 |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                                                                                                                             | Build and deploy full-stack blockchain applications with TypeScript                                                 |
| **CosmWasm Contracts**         | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                                                                                                         | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.                                         |

## Credits

🛠 Built by [Interweb](https://interweb.co) — if you like our tools, please checkout and contribute [https://interweb.co](https://interweb.co)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
