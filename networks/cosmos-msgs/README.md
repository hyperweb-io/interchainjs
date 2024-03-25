# Cosmos Messages

Cosmos message codecs (including Stargate and CosmWasm messages)

## Usage

```sh
npm install @uni-sign/cosmos-msgs
```

Make `Encoder` and `Converter` used by `Cosmos` signers (taking `MsgSend` as example)

```ts
import { MsgSend } from "@uni-sign/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { toConverter, toEncoder } from "@uni-sign/cosmos/utils";
import { AminoSigner } from "@uni-sign/cosmos/amino";

const encoder = toEncoder(MsgSend);
const converter = toConverter(MsgSend);

const signer = new AminoSigner(<AUTH>, [encoder], [converter], <rpc-endpoint>);
```

- See [@uni-sign/auth](/packages/auth/README.md) to construct `<AUTH>`
- See [@uni-sign/cosmos](/packages/cosmos/README.md) to construct different `<signer>`s

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)