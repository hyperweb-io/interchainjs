# interchainjs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80">
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any web3 network.

⚠️ **This software is currently in a Development Preview Alpha stage.** It is not ready for production use. The features and functionality are subject to change, and there may be significant issues. We welcome feedback and contributions, but please use with caution and at your own risk.

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
