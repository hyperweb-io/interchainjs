# interchainjs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80">
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any web3 network.

- [Advanced Docs](/docs/)

## Overview

InterchainJS is a versatile signing library designed to cater to a variety of blockchain networks through a flexible adapter pattern. This architecture enables seamless integration of new networks, account management modules, authentication protocols, and signing algorithms.

By employing this pattern, InterchainJS ensures compatibility and extensibility, allowing developers to easily plug in and configure components tailored to specific requirements. The graphic below illustrates how different signer types are connected to specific network classes, demonstrating the library's adaptability in handling diverse blockchain environments.

```mermaid
graph LR
    signers --> cosmos_signer["Cosmos Network"]
    signers --> injective_signer["Injective Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> ethereum_eip712["EIP712 Signer"]

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

## Tutorial for building a custom signer

- [Tutorial](/docs/tutorial.md)

## Auth

Universally applied across different networks

- [@interchainjs/auth](/packages/auth/README.md)
- [Advanced Docs: `Auth vs. Wallet vs. Signer`](/docs/auth-wallet-signer.md)

## Cosmos Network

### Transactions

- [@interchainjs/cosmos](/networks/cosmos/README.md)
- [@interchainjs/cosmos-types](/networks/cosmos-msgs/README.md)

### Migration from `@cosmjs`

We created a specific package to make it easy to migrate from `@cosmjs`.

- [interchainjs](/networks/cosmjs/README.md)

## Injective Network

### Transactions

- [@interchainjs/injective](/networks/injective/README.md)
- `@interchainjs/injective-msgs`(on progress)

## Ethereum Network

### Transactions

- [@interchainjs/ethereum](/networks/ethereum/README.md)

## Interchain JavaScript Stack 

A unified toolkit for building applications and smart contracts in the Interchain ecosystem ⚛️

| Category              | Tools                                                                                                                  | Description                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Chain Information**   | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**| [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/cosmology-tech/cosmos-kit) | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface. |
| **Signing Clients**          | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs) | A single, universal signing interface for any network |
| **SDK Clients**              | [**Telescope**](https://github.com/cosmology-tech/telescope)                                                          | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules. |
| **Starter Kits**     | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/cosmology-tech/create-cosmos-app) | Set up a modern Interchain app by running one command. |
| **UI Kits**          | [**Interchain UI**](https://github.com/cosmology-tech/interchain-ui)                                                   | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit. |
| **Testing Frameworks**          | [**Starship**](https://github.com/cosmology-tech/starship)                                                             | Unified Testing and Development for the Interchain. |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                              | Build and deploy full-stack blockchain applications with TypeScript |
| **CosmWasm Contracts** | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                   | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes. |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
