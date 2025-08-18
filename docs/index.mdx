# InterchainJS

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

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any Web3 network.

## Table of Contents

- [Introduction](#interchainjs-universal-signing-for-web3)
- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Create Interchain App](#quick-setup-with-create-interchain-app)
- [Supported Networks](#supported-networks)
  - [Cosmos Network](#cosmos-network)
  - [Injective Network](#injective-network)
  - [Ethereum Network](#ethereum-network)
- [Interchain JavaScript Stack ⚛️](#interchain-javascript-stack-️)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## InterchainJS: Universal Signing for Web3

[InterchainJS](https://hyperweb.io/stack/interchainjs) is a **universal signing interface** designed for seamless interoperability across blockchain networks. It is one of the **core libraries of the [Interchain JavaScript Stack](https://hyperweb.io/stack)**, a modular framework that brings Web3 development to millions of JavaScript developers.

At its core, InterchainJS provides a **flexible adapter pattern** that abstracts away blockchain signing complexities, making it easy to integrate new networks, manage accounts, and support diverse authentication protocols and signing algorithms—all in a unified, extensible framework.

## Overview

InterchainJS sits at the foundation of the **[Interchain JavaScript Stack](https://hyperweb.io/stack)**, a set of tools that work together like nested building blocks:

- **[InterchainJS](https://hyperweb.io/stack/interchainjs)** → Powers signing across Cosmos, Ethereum (EIP-712), and beyond.
- **[Interchain Kit](https://hyperweb.io/stack/interchain-kit)** → Wallet adapters that connect dApps to multiple blockchain networks.
- **[Interchain UI](https://hyperweb.io/stack/interchain-ui)** → A flexible UI component library for seamless app design.
- **[Create Interchain App](https://hyperweb.io/stack/create-interchain-app)** → A developer-friendly starter kit for cross-chain applications.

This modular architecture ensures **compatibility, extensibility, and ease of use**, allowing developers to compose powerful blockchain applications without deep protocol-specific knowledge.

### Visualizing InterchainJS Components

The diagram below illustrates how InterchainJS connects different signer types to various network classes, showcasing its adaptability for a wide range of blockchain environments.

```mermaid
graph LR
    signers --> cosmos_signer["Cosmos Network"]
    signers --> injective_signer["Injective Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> eip1559_signer["EIP-1559 Signer"]
    ethereum_signer --> legacy_signer["Legacy Signer"]

    injective_signer --> injective_amino["Amino Signer"]
    injective_signer --> injective_direct["Direct Signer"]

    implement_signer --> any_signer["Any Signer"]

    style signers fill:#f9f,stroke:#333,stroke-width:2px
```

```mermaid
graph LR
    encoders[Encoders] --> auth["@interchainjs/auth"]
    encoders --> utils["@interchainjs/utils"]
    encoders --> cosmos_types["@interchainjs/cosmos-types"]

    auth --> secp256k1_auth["Secp256k1 Auth"]
    auth --> ethSecp256k1_auth["EthSecp256k1 Auth"]

    utils --> signer_utils["Signer Utilities"]
    utils --> crypto_utils["Crypto Utilities"]

    style encoders fill:#f9f,stroke:#333,stroke-width:2px
    style auth fill:#ccf,stroke:#333,stroke-width:2px
    style utils fill:#ccf,stroke:#333,stroke-width:2px
```

## Installation

This guide will walk you through the process of installing and setting up interchainjs for your project.

You can install interchainjs using pnpm:

```bash
pnpm add interchainjs
pnpm add @interchainjs/cosmos
```

or npm

```bash
npm i interchainjs
npm i @interchainjs/cosmos
```

or yarn

```bash
yarn add interchainjs
yarn add @interchainjs/cosmos
```

## Quick Start

### Using Signers Directly

Create and use signers for transaction signing and broadcasting:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';

// Create wallet from mnemonic
const wallet = await Secp256k1HDWallet.fromMnemonic(
  "your twelve word mnemonic phrase here",
  {
    derivations: [{
      prefix: "cosmos",
      hdPath: HDPath.cosmos(0, 0, 0).toString(), // m/44'/118'/0'/0/0
    }]
  }
);

// Create signer
const signer = new DirectSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

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
    gas: '200000'
  },
  memo: 'Transfer via InterchainJS'
});

console.log('Transaction hash:', result.transactionHash);
```

### Using with External Wallets

For integration with browser wallets like Keplr:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';

// Get offline signer from Keplr
await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

// Create signer with offline signer
const signer = new DirectSigner(offlineSigner, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

// Use the same signing interface
const result = await signer.signAndBroadcast({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' }
});
```

### Quick Setup with create-interchain-app

The easiest way to get started is by using the create-interchain-app tool, which sets up a complete project with all necessary dependencies:

```bash
pnpm install -g create-interchain-app

cia --example authz
```

Then an authz example website will be created and users can take a look how signing clients and helper functions are used.

---

## Supported Networks

### Cosmos Network

| Feature                      | Package                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| **Transactions**             | [@interchainjs/cosmos](https://docs.hyperweb.io/interchain-js/networks/cosmos)            |
| **Cosmos Types**             | [@interchainjs/cosmos-types](https://docs.hyperweb.io/interchain-js/libs/cosmos-types) |
| **Migration from `@cosmjs`** | [Migration Guide](https://docs.hyperweb.io/interchain-js/advanced/migration-from-cosmjs.mdx)             |

---

### Injective Network

| Feature          | Package                                                  |
| ---------------- | -------------------------------------------------------- |
| **Transactions** | [@interchainjs/injective](https://docs.hyperweb.io/interchain-js/networks/injective) |

---

### Ethereum Network

| Feature          | Package                                                |
| ---------------- | ------------------------------------------------------ |
| **Transactions** | [@interchainjs/ethereum](https://docs.hyperweb.io/interchain-js/networks/ethereum) |

---

## Developer Documentation

### For Contributors and Network Implementers

- **[Network Implementation Guide](./docs/advanced/network-implementation-guide.md)** - Comprehensive guide for implementing new blockchain network support
- **[Workflow Builder and Plugins Guide](./docs/advanced/workflow-builder-and-plugins.md)** - Plugin-based transaction workflow architecture
- **[Auth vs. Wallet vs. Signer](./docs/advanced/auth-wallet-signer.md)** - Understanding the three-layer architecture
- **[Tutorial](./docs/advanced/tutorial.md)** - Using and extending signers in the InterchainJS ecosystem

### Architecture and Design

InterchainJS follows a modular, three-layer architecture that separates concerns and enables flexible blockchain integration:

1. **Auth Layer**: Cryptographic operations and key management
2. **Wallet Layer**: Account management and address derivation
3. **Signer Layer**: Transaction building, signing, and broadcasting

This separation allows for maximum flexibility while maintaining type safety and consistent interfaces across different blockchain networks.

---

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

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
