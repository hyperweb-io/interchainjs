# Cosmjs

Wrapper of `@uni-sign/auth` and `@uni-sign/cosmos` to fit corresponding interfaces in `@cosmjs` 

## Usage

```sh
npm install @cosmology/cosmjs
```

To sign messages (taking `stargate` signing client as example)

```ts
// import * from "@cosmology/cosmjs"; // Error: use sub-imports, to ensure small app size
import { StargateSigningClient } from "@cosmology/cosmjs/stargate";

const client = StargateSigningClient.connectWithSigner(<rpc-endpoint>, <offline signer>);
const result = await client.signAndBroadcast(<address>, <messages>, "auto");
// or you can use helper functions to do `signAndBroadcast`. taking send tokens as example
const result = await client.helpers.send(<address>, <MsgSend message>, "auto", "");

console.log(result.transactionHash); // the hash of TxRaw
```

To construct an offline signer (taking `direct` signer as example)

```ts
import { Secp256k1Wallet } from "@cosmology/cosmjs/wallets/secp256k1";

const wallet = Secp256k1Wallet.fromMnemonic("<MNEMONIC_WORDS>", { prefix: "<prefix>" });
const directOfflineSigner = wallet.toOfflineDirectSigner();
```

## Implementations

- **signing client**
  - **signing client** from `@cosmology/cosmjs/signing-client`
  - **stargate signing client** from `@cosmology/cosmjs/stargate`
  - **cosmwasm signing client** from `@cosmology/cosmjs/cosmwasm-stargate`
- **wallet**
  - **secp256k1 wallet** from `@cosmology/cosmjs/wallets/secp256k1`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)