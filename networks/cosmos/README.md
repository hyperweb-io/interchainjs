# Cosmos

Transaction codec and client to communicate with any cosmos blockchain.

## Usage

```sh
npm install @uni-sign/cosmos
```

Taking `direct` signing mode as example.

```ts
// import * from "@uni-sign/cosmos"; // Error: use sub-imports, to ensure small app size
import { DirectSigner } from "@uni-sign/cosmos/direct";

const signer = new DirectSigner(<AUTH>, <ENCODER>[], <RPC_ENDPOINT>); // **ONLY** rpc endpoint is supported for now
const result = await signer.signAndBroadcast(<MESSAGE>[]);
console.log(result.hash); // the hash of TxRaw
```

- See [@uni-sign/auth](/packages/auth/README.md) to construct `<AUTH>`
- See [@uni-sign/cosmos-msgs](/networks/cosmos-msgs/README.md) to construct `<ENCODER>`s and `<CONVERTER>`s, and also different message types.

## Implementations

- **direct signer** from `@uni-sign/cosmos/direct`
- **amino signer** from `@uni-sign/cosmos/amino`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)