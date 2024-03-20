# uni-sign

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any web3 network.

⚠️ **This software is currently in a Development Preview Alpha stage.** It is not ready for production use. The features and functionality are subject to change, and there may be significant issues. We welcome feedback and contributions, but please use with caution and at your own risk.


## Wallet

Universally applied across different networks

- [@uni-sign/auth](/packages/auth/README.md)

## Cosmos Network

### Querying

- [@uni-sign/cosmos-query](/networks/cosmos-query/README.md)
  
### Transactions

- [@uni-sign/cosmos](/networks/cosmos/README.md)
- [@uni-sign/cosmos-msgs](/networks/cosmos-msgs/README.md)

#### Usage

```sh
npm install @uni-sign/auth @uni-sign/cosmos @uni-sign/cosmos-msgs
```

```ts
// use sub-imports, to ensure small app size
import { DirectSigner } from "@uni-sign/cosmos/direct";
import { AminoSigner } from "@uni-sign/cosmos/amino";
import { toConverter, toEncoder } from "@uni-sign/cosmos/utils";
import { Secp256k1Auth } from "@uni-sign/auth/secp256k1";
import { MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";

const auth = Secp256k1Auth.fromMnemonic("<mnemonic-words>", "cosmos");

// direct signer or amino signer
const signer = new DirectSigner(auth, [toEncoder(MsgSend)], <rpc-endpoint>);
const signer = new AminoSigner(auth, [toEncoder(MsgSend)], [toConverter(MsgSend)], <rpc-endpoint>);

const result = await signer.signAndBroadcast(<send token messages>);
console.log(result.hash); // the hash of TxRaw
```

#### Migration from `@cosmjs`

We created a specific package to make it easy to migrate from `@cosmjs`.

- [@cosmology/cosmjs](/networks/cosmjs/README.md)

## Injective Network

## Ethereum Network
