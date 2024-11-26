# @interchainjs/auth

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

Authentication/Wallet for web3 accounts.

## Usage

```sh
npm install @interchainjs/auth
```

Taking `secp256k1` as example.

```ts
// import * from "@interchainjs/auth"; // Error: use sub-imports, to ensure small app size
import { Secp256k1Auth } from "@interchainjs/auth/secp256k1";

const [directAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
  "m/44'/118'/0'/0/0",
]);
const signature = auth.sign(Uint8Array.from([1, 2, 3]));
console.log(signature.toHex());
```

It's easy to derive _cosmos/injective/ethereum_ network HD path (taking `cosmos` as example)

```ts
import { HDPath } from "@interchainjs/types";

// derive with Cosmos default HD path "m/44'/118'/0'/0/0"
const [auth] = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", [
  // use cosmos hdpath built by HDPath
  // we can get cosmos hdpath "m/44'/118'/0'/0/0" by this:
  HDPath.cosmos().toString(),
]);
// is identical to
const [auth] = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", [
  "m/44'/118'/0'/0/0",
]);
```

`Auth` objected can be utilized by different signers. See

- [@interchainjs/cosmos](/networks/cosmos/README.md)
- [@interchainjs/ethereum](/networks/ethereum/README.md)
- [@interchainjs/injective](/networks/injective/README.md)

## Implementations

- **secp256k1 auth** from `@interchainjs/auth/secp256k1`
- **ethSecp256k1 auth** from `@interchainjs/auth/ethSecp256k1`

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)
