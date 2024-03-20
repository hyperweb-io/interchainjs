# Auth

Authentication/Wallet for web3 accounts.

## Usage

```sh
npm install @uni-sign/auth
```

Taking `secp256k1` as example.

```ts
// import * from "@uni-sign/auth"; // Error: use sub-imports, to ensure small app size
import { Secp256k1Auth } from "@uni-sign/auth/secp256k1";

const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "<HD path>");
const signature = auth.sign(Uint8Array.from([1, 2, 3]));
console.log(signature.toHex());
```

It's easy to derive *cosmos/injective/ethereum* network HD path (taking `cosmos` as example)

```ts
// derive with Cosmos default HD path "m/44'/118'/0'/0/0"
const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "cosmos");
// is identical to 
const auth = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", "m/44'/118'/0'/0/0");
```

`Auth` objected can be utilized by different signers. See

- [@uni-sign/cosmos](/networks/cosmos/README.md)
- [@uni-sign/ethereum](/networks/ethereum/README.md)
- [@uni-sign/injective](/networks/injective/README.md)

## Implementations

- **secp256k1 auth** from `@uni-sign/auth/secp256k1`
- **ed25519 auth** from `@uni-sign/auth/ed25519` (`Not fully implemented yet`)

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)