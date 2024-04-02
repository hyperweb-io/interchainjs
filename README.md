# interchainjs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80"><br />
    interchainjs
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

- [A Nextjs Example](https://github.com/cosmology-tech/interchainjs-example)
- [Advanced Docs](/docs/)

## Auth

Universally applied across different networks

- [@interchainjs/auth](/packages/auth/README.md)
- [Advanced Docs: `Auth vs. Wallet vs. Signer`](/docs/auth-wallet-signer.md)

## Cosmos Network

### Querying

- [@interchainjs/cosmos-query](/networks/cosmos-query/README.md)
  
### Transactions

- [@interchainjs/cosmos](/networks/cosmos/README.md)
- [@interchainjs/cosmos-msgs](/networks/cosmos-msgs/README.md)

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
