# Adding a New Network

This guide outlines the basic steps to integrate a new blockchain network with InterchainJS. A network package exposes signers and account utilities that follow the interfaces defined in `@interchainjs/types`.

1. **Create a new package** under `networks/` with its own `package.json`, `tsconfig.json` and `src` folder. Export your signers and accounts from an `index.ts` file.
2. **Implement signers** that perform the necessary cryptographic signing. Signers typically wrap private keys or wallet providers and expose methods like `sign` or `send`.
3. **Provide account helpers** to derive addresses from public keys. Reuse hashing and encoding utilities from `@interchainjs/crypto` and `@interchainjs/encoding`.
4. **Document your network** in `docs/networks/` so users can install and use it.

Existing networks such as [Cosmos](./../networks/cosmos/index.mdx) and [Ethereum](./../networks/ethereum/index.mdx) can serve as references for structuring your package.
