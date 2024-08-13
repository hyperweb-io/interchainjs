# interchainjs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80">
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

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
