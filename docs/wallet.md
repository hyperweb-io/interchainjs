# Wallet

- See [Auth vs. Wallet vs. Signer](/docs/auth-wallet-signer.md)
- See more [Auth vs. Wallet](/docs/auth.md#auth-vs-wallet)

```mermaid
classDiagram
    class ICosmosWallet {
        +getAccounts() Promise~AccountData[]~
    }

    class OfflineDirectSigner {
        +getAccounts() Promise~AccountData[]~
        +signDirect(signerAddress: string, signDoc: CosmosDirectDoc) Promise~DirectSignResponse~
    }

    class OfflineAminoSigner {
        +getAccounts() Promise~AccountData[]~
        +signAmino(signerAddress: string, signDoc: CosmosAminoDoc) Promise~AminoSignResponse~
    }

    class Secp256k1HDWallet {
        +accounts: ICosmosAccount[]
        +options: SignerConfig
        +getAccounts() Promise~AccountData[]~
        +signDirect(signerAddress: string, signDoc: CosmosDirectDoc) Promise~DirectSignResponse~
        +signAmino(signerAddress: string, signDoc: CosmosAminoDoc) Promise~AminoSignResponse~
        +toOfflineDirectSigner() OfflineDirectSigner
        +toOfflineAminoSigner() OfflineAminoSigner
        +fromMnemonic(mnemonic: string, derivations: AddrDerivation[], options?: WalletOptions) Secp256k1HDWallet
        -getAcctFromBech32Addr(address: string) ICosmosAccount
    }

    OfflineDirectSigner <|.. Secp256k1HDWallet
    OfflineAminoSigner <|.. Secp256k1HDWallet
    ICosmosWallet <|.. Secp256k1HDWallet

    style OfflineDirectSigner fill:#f9f,stroke:#333,stroke-width:2px
    style OfflineAminoSigner fill:#f9f,stroke:#333,stroke-width:2px
    style ICosmosWallet fill:#f9f,stroke:#333,stroke-width:2px
```

## Easy to Construct Wallet

Wallet can be constructed using fromMnemonic.

```ts
import { Secp256k1HDWallet } from "@interchainjs/cosmos/wallets/secp256k1hd";
import { HDPath } from "@interchainjs/types";

// init wallet with two accounts using two hd paths
const wallet = Secp256k1HDWallet.fromMnemonic(
  "<MNEMONIC_WORDS>",
  [0, 1].map((i) => ({
    prefix: commonPrefix,
    hdPath: HDPath.cosmos(0, 0, i).toString(),
  }))
);
```

Moreover, to construct `OfflineSigner`(a type from `@cosmjs`) object from `Wallet` to hide private key.

```ts
protoSigner = wallet.toOfflineDirectSigner();
address = (await protoSigner.getAccounts())[0].address;
```
