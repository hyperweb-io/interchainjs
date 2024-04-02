# @interchainjs/injective

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80"><br />
    @interchainjs/injective
</p>

Transaction codec and client to communicate with any injective blockchain.

## Usage

```sh
npm install @interchainjs/injective
```

Taking `direct` signing mode as example.

```ts
// import * from "@interchainjs/injective"; // Error: use sub-imports, to ensure small app size
import { DirectSigner } from "@interchainjs/injective/direct";

const signer = new DirectSigner(<AUTH>, <ENCODER>[], <RPC_ENDPOINT>); // **ONLY** rpc endpoint is supported for now
const result = await signer.signAndBroadcast(<MESSAGE>[]);
console.log(result.hash); // the hash of TxRaw
```

- See [@interchainjs/auth](/packages/auth/README.md) to construct `<AUTH>`
- See `@interchainjs/injective-msgs`(on progress) to construct `<ENCODER>`s and `<CONVERTER>`s, and also different message types.

## Implementations

- **direct signer** from `@interchainjs/injective/direct`
- **amino signer** from `@interchainjs/injective/amino`
- **eip712 signer** from `@interchainjs/injective/eip712`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)