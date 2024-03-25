# uni-sign

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any web3 network.

⚠️ **This software is currently in a Development Preview Alpha stage.** It is not ready for production use. The features and functionality are subject to change, and there may be significant issues. We welcome feedback and contributions, but please use with caution and at your own risk.

- [A Nextjs Example](https://github.com/cosmology-tech/uni-sign-example)
- [Advanced Docs](/docs/)

## Auth

Universally applied across different networks

- [@uni-sign/auth](/packages/auth/README.md)
- [Advanced Docs of `Auth`](/docs/auth-wallet-signer.md)

## Cosmos Network

### Querying

- [@uni-sign/cosmos-query](/networks/cosmos-query/README.md)
  
### Transactions

- [@uni-sign/cosmos](/networks/cosmos/README.md)
- [@uni-sign/cosmos-msgs](/networks/cosmos-msgs/README.md)

### Migration from `@cosmjs`

We created a specific package to make it easy to migrate from `@cosmjs`.

- [@cosmology/cosmjs](/networks/cosmjs/README.md)

## Injective Network

### Transactions

- [@uni-sign/injective](/networks/injective/README.md)
- `@uni-sign/injective-msgs`(on progress)

## Ethereum Network

### Transactions

- [@uni-sign/ethereum](/networks/ethereum/README.md)
