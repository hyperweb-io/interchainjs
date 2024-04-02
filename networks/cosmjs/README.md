# interchainjs

Wrapper of `@interchainjs/auth` and `@interchainjs/cosmos` to fit corresponding interfaces in `@cosmjs` 

## Usage

```sh
npm install interchainjs
```

To sign messages (taking `stargate` signing client as example)

```ts
// import * from "interchainjs"; // Error: use sub-imports, to ensure small app size
import { StargateSigningClient } from "interchainjs/stargate";

const client = StargateSigningClient.connectWithSigner(<rpc-endpoint>, <offline signer>);
const result = await client.signAndBroadcast(<ADDRESS>, <MESSAGE>[], "auto");
// or you can use helper functions to do `signAndBroadcast`. taking send tokens as example
const result = await client.helpers.send(<ADDRESS>, <MsgSend message>, "auto", "");

console.log(result.transactionHash); // the hash of TxRaw
```

To construct an offline signer (taking `direct` signer as example)

```ts
import { Secp256k1Wallet } from "interchainjs/wallets/secp256k1";

const wallet = Secp256k1Wallet.fromMnemonic("<MNEMONIC_WORDS>", { prefix: "<prefix>" });
const directOfflineSigner = wallet.toOfflineDirectSigner();
```

## Implementations

- **signing client**
  - **signing client** from `interchainjs/signing-client`
  - **stargate signing client** from `interchainjs/stargate`
  - **cosmwasm signing client** from `interchainjs/cosmwasm-stargate`
- **wallet**
  - **secp256k1 wallet** from `interchainjs/wallets/secp256k1`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)