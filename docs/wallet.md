# Wallet

- See [Auth vs. Wallet vs. Signer](/docs/auth-wallet-signer.md)
- See more [Auth vs. Wallet](/docs/auth.md#auth-vs-wallet)

## Easy to Construct Wallet

For each `Signer`, it has corresponding `toWallet` static method to convert `Auth` object to corresponding `Wallet` object.

```ts
import { DirectSigner } from "@interchainjs/cosmos/direct";
import { DirectWallet } from "@interchainjs/cosmos/types";
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";

const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "cosmos");
const wallet: DirectWallet = DirectSigner.toWallet(auth);
```

Moreover, to construct `Wallet` object from `OfflineSigner` (a type from `@cosmjs`), we can utilize the functions as below.

```ts
import { toDirectWallet, toAminoWallet } from "interchainjs";
import { DirectWallet, AminoWallet } from "@interchainjs/cosmos/types";

const wallet: DirectWallet = toDirectWallet(offlineDirectSigner);
const wallet: AminoWallet = toAminoWallet(offlineAminoSigner);
```