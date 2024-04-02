# Signer

The main purpose of the `@interchainjs/cosmos`, `@interchainjs/ethereum`, `@interchainjs/injective` is to offer developers a way to have different `Signer` implementations on different types of Blockchains. All of these `Signer`s are implementing [`UniSigner` interface](#unisigner-interface) and extending the same `BaseSigner` class  which with `Auth` object being utilized in construction.

```ts
import { UniSigner } from "@interchainjser/types";
import { BaseSigner } from "@interchainjser/utils";
```

Need to note that there are 2 type parameters that indicates 2 types of document involved in signing and broadcasting process for interface `UniSigner`:

- `SignDoc` is the document type as the signing target to get signature
- `Tx` is the transaction type to broadcast

The `Signer` class is a way to sign and broadcast transactions on blockchains with ease. With it, you can just pass a Message that you want to be packed in a transaction and the transaction will be prepared, signed and broadcasted.

## Signer + Auth

As we know, `Auth` object can be used to sign any piece of binary data (See [details](/docs/auth.md)). However, combining with the `*Signer` class allows you to sign human-readable messages or transactions using one function call.

### Usage

```ts
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { toEncoder } from "@interchainjs/cosmos/utils";
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";
import { MsgSend } from "@interchainjs/cosmos-msgs/cosmos/bank/v1beta1/tx";

const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "cosmos");
const signer = new DirectSigner(auth, [toEncoder(MsgSend)], <RPC_ENDPOINT>);
```

## Signer + Wallet

As we know, `Wallet` object can be used to sign documents (See [details](/docs/auth.md#auth-vs-wallet)). However, some sign document is still not human-readable (i.e. for `DirectSigner`, the `SignDoc` type is an object with binary data type)

However, combining with the `Signer` class allows you to sign human-readable messages or transactions using one function call.

### Usage

```ts
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { DirectWallet, SignDoc } from "@interchainjs/cosmos/types";
import { toEncoder } from "@interchainjs/cosmos/utils";
import { MsgSend } from "@interchainjs/cosmos-msgs/cosmos/bank/v1beta1/tx";

const wallet: DirectWallet = {
    async getAccount(){},
    async sign(doc: SignDoc){}
}
const signer = await DirectSigner.fromWallet(wallet, [toEncoder(MsgSend)], <RPC_ENDPOINT>);
```

> Tips: `interchainjs` also provides helper methods to easily construct `Wallet` for each `Signer`. See [details](/docs/wallet.md#easy-to-construct-wallet).

## UniSigner Interface

There are 3 signing methods in `UniSigner`

```ts
/** you can import { UniSigner } from "@interchainjs/types" */
export interface UniSigner<SignDoc, Tx> {
  ...
  signArbitrary(data: Uint8Array): IKey;
  signDoc: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
  sign(
    messages: unknown,
    ...args: unknown[]
  ): Promise<SignResponse<SignDoc, Tx>>;
  ...
}
```

- `signArbitrary`, derived from `Auth` object, is usually used to request signatures that don't need to be efficiently processed on-chain. It's often used for signature challenges that are authenticated on a web server, such as sign-in with Ethereum/Cosmos.
- `signDoc`, derived from `Wallet` object, is usually used to request signatures that are efficient to process on-chain. The `doc` argument varies among different signing modes and networks.
- `sign` is used to sign human-readable message, to facilidate signing process with an user interface.

> Tips: These 3 signing methods correspond to 3 levels of signing type: [Auth vs. Wallet vs. Signer](/docs/auth-wallet-signer.md).


## Namespaces & Interfaces

`@interchainjs/types` exposes all the types that descirbe all the available signers under `@interchainjs` scope. They are collected in the namespaces below.

```ts
import { ISigner, ISignDoc, ITransaction, IWallet, IWalletAccount } from "@interchainjs/types";
```

See details below

> Tips about the headers:
> - **Class**: the Class implements the Interface
> - **SignDoc**: document structure for signing
> - **Transaction**: document structure for broadcasting (abbr. `Tx`)
> - **Wallet**: interface for web3 wallets
> - **WalletAccount**: interface for web3 wallets account

### ISigner.CosmosDirectSigner

- **Class**: `import { DirectSigner } from "@interchainjs/cosmos/direct"`
- **SignDoc**: *ISignDoc.CosmosDirectDoc*
- **Transaction**: *ITransaction.CosmosTx*
- **Wallet**: *IWallet.CosmosDirectWallet*
- **WalletAccount**: *IWalletAccount.CosmosAccount*
  
### ISigner.CosmosAminoSigner

- **Class**: `import { AminoSigner } from "@interchainjs/cosmos/amino"`
- **SignDoc**: *ISignDoc.CosmosAminoDoc*
- **Transaction**: *ITransaction.CosmosTx*
- **Wallet**: *IWallet.CosmosAminoWallet*
- **WalletAccount**: *IWalletAccount.CosmosAccount*
  
### ISigner.InjectiveDirectSigner

- **Class**: `import { DirectSigner } from "@interchainjs/injective/direct"`
- **SignDoc**: *ISignDoc.CosmosDirectDoc*
- **Transaction**: *ITransaction.CosmosTx*
- **Wallet**: *IWallet.InjectiveDirectWallet*
- **WalletAccount**: *IWalletAccount.InjectiveAccount*

### ISigner.InjectiveAminoSigner

- **Class**: `import { AminoSigner } from "@interchainjs/injective/amino"`
- **SignDoc**: *ISignDoc.CosmosAminoDoc*
- **Transaction**: *ITransaction.CosmosTx*
- **Wallet**: *IWallet.InjectiveAminoWallet*
- **WalletAccount**: *IWalletAccount.InjectiveAccount*

### ISigner.InjectiveEip712Signer

- **Class**: `import { Eip712Signer } from "@interchainjs/injective/eip712"`
- **SignDoc**: *ISignDoc.InjectiveEip712Doc*
- **Transaction**: *ITransaction.CosmosTx*
- **Wallet**: *IWallet.InjectiveEip712Wallet*
- **WalletAccount**: *IWalletAccount.InjectiveAccount*

### ISigner.Eip712Signer

- **Class**: `import { Eip712Signer } from "@interchainjs/ethereum/eip712"`
- **SignDoc**: *ISignDoc.Eip712Doc*
- **Transaction**: *ITransaction.Eip712Tx*
- **Wallet**: *IWallet.Eip712Wallet*
- **WalletAccount**: *IWalletAccount.EthereumAccount*
