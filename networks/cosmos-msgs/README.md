# Cosmos Messages

Cosmos message codecs (including Stargate and CosmWasm messages)

## Usage

```sh
npm install @interchainjs/cosmos-msgs
```

Make `Encoder` and `Converter` used by `Cosmos` signers (taking `MsgSend` as example)

```ts
import { MsgSend } from "@interchainjs/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { AminoSigner } from "@interchainjs/cosmos/amino";

const encoder = toEncoder(MsgSend);
const converter = toConverter(MsgSend);

const signer = new AminoSigner(<AUTH>, [encoder], [converter], <rpc-endpoint>);
```

- See [@interchainjs/auth](/packages/auth/README.md) to construct `<AUTH>`
- See [@interchainjs/cosmos](/packages/cosmos/README.md) to construct different `<signer>`s

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)