# @interchainjs/cosmos

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


Transaction codec and client to communicate with any cosmos blockchain.

## Usage

```sh
npm install @interchainjs/cosmos
```

Taking `direct` signing mode as example.

```ts
// import * from "@interchainjs/cosmos"; // Error: use sub-imports, to ensure small app size
import { DirectSigner } from "@interchainjs/cosmos/direct";

const signer = new DirectSigner(<AUTH>, <ENCODER>[], <RPC_ENDPOINT>); // **ONLY** rpc endpoint is supported for now
const result = await signer.signAndBroadcast(<MESSAGE>[]);
console.log(result.hash); // the hash of TxRaw
```

- See [@interchainjs/auth](/packages/auth/README.md) to construct `<AUTH>`
- See [@interchainjs/cosmos-types](/networks/cosmos-msgs/README.md) to construct `<ENCODER>`s and `<CONVERTER>`s, and also different message types.

## Implementations

- **direct signer** from `@interchainjs/cosmos/direct`
- **amino signer** from `@interchainjs/cosmos/amino`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)