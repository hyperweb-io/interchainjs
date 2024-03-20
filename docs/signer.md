# Signer

The main purpose of the `@uni-sign/cosmos`, `@uni-sign/ethereum`, `@uni-sign/injective` is to offer developers a way to have different `Signer` implementations on different types of Blockchains. All of these `*Signer`s are implementing `UniSigner` interface and extending the same `BaseSigner` class  which with `Auth` object being utilized in construction.

```ts
import { UniSigner } from "@uni-signer/types";
import { BaseSigner } from "@uni-signer/utils";
```

All `Signer`s:

```ts
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { AminoSigner } from "@uni-sign/cosmos/amino";
import { DirectSigner } from "@uni-sign/injective/direct";
import { AminoSigner } from "@uni-sign/injective/amino";
```

The `*Signer` class is a way to sign and broadcast transactions on blockchains with ease. With it, you can just pass a Message that you want to be packed in a transaction and the transaction will be prepared, signed and broadcasted.

## Signer + Auth

As we know, `Auth` object can be used to sign any piece of binary data (See [details](/docs/auth.md)). However, combining with the `*Signer` class allows you to sign human-readable messages or transactions using one function call.

### Usage

```ts
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { toEncoder } from "@uni-sign/cosmos/utils";
import { Secp256k1Auth } from "@uni-sign/auth/secp256k1";
import { MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";

const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "cosmos");
const signer = new DirectSigner(auth, [toEncoder(MsgSend)], <RPC_ENDPOINT>);
```

## Signer + Wallet

As we know, `Wallet` object can be used to sign documents (See [details](/docs/auth.md#auth-vs-wallet)). However, some sign document is still not human-readable (i.e. for `DirectSigner`, the `SignDoc` type is an object with binary data type)

However, combining with the `*Signer` class allows you to sign human-readable messages or transactions using one function call.

### Usage

```ts
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { DirectWallet, SignDoc } from "@uni-sign/cosmos/types";
import { toEncoder } from "@uni-sign/cosmos/utils";
import { MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";

const wallet: DirectWallet = {
    async getAccount(){},
    async sign(doc: SignDoc){}
}
const signer = await DirectSigner.fromWallet(wallet, [toEncoder(MsgSend)], <RPC_ENDPOINT>);
```

### Easy to Construct Wallet

For each `Signer`, it has corresponding `toWallet` static method to convert `Auth` object to corresponding `Wallet` object.

```ts
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { DirectWallet } from "@uni-sign/cosmos/types";
import { Secp256k1Auth } from "@uni-sign/auth/secp256k1";

const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "cosmos");
const wallet: DirectWallet = DirectSigner.toWallet(auth);
```

Moreover, to construct `Wallet` object from `OfflineSigner` (a type from `@cosmjs`), we can utilize the functions as below.

```ts
import { toDirectWallet, toAminoWallet } from "@cosmology/cosmjs";
import { DirectWallet, AminoWallet } from "@uni-sign/cosmos/types";

const wallet: DirectWallet = toDirectWallet(offlineDirectSigner);
const wallet: AminoWallet = toAminoWallet(offlineAminoSigner);
```