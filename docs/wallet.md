# Wallet

- See [Auth vs. Wallet vs. Signer](/docs/auth-wallet-signer.md)
- See more [Auth vs. Wallet](/docs/auth.md#auth-vs-wallet)

## Easy to Construct Wallet

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