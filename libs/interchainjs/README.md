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

const directWallet = Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
  {
    prefix: commonPrefix,
    hdPath: cosmosHdPath,
  },
]);

const directSigner = directWallet.toOfflineDirectSigner();

const signingClient = await StargateSigningClient.connectWithSigner(
  await getRpcEndpoint(),
  directSigner
);

const result = await signingClient.signAndBroadcast(<ADDRESS>, <MESSAGE>[], "auto");
// or you can use helper functions to do `signAndBroadcast`. taking send tokens as example
const result = await signingClient.helpers.send(<ADDRESS>, <MsgSend message>, "auto", "");

console.log(result.transactionHash); // the hash of TxRaw
```

To construct an offline signer (taking `direct` signer as example)

```ts
const directWallet = Secp256k1HDWallet.fromMnemonic(generateMnemonic(), [
  {
    prefix: commonPrefix,
    hdPath: cosmosHdPath,
  },
]);

const directSigner = directWallet.toOfflineDirectSigner();
```

## Implementations

- **signing client**
  - **signing client** from `interchainjs/signing-client`
  - **stargate signing client** from `interchainjs/stargate`
  - **cosmwasm signing client** from `interchainjs/cosmwasm-stargate`
- **wallet**
  - **secp256k1 wallet** from `@interchainjs/cosmos/wallets/secp256k1hd`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)
