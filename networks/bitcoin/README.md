# @interchainjs/bitcoin

Transaction signing and account utilities for the Bitcoin network.

## Usage

```sh
npm install @interchainjs/bitcoin
```

```ts
import { SignerFromPrivateKey } from '@interchainjs/bitcoin'

const signer = new SignerFromPrivateKey(privateKeyHex)
const address = signer.getAddress()
```

## Implementations

- **SignerFromPrivateKey** from `@interchainjs/bitcoin/signers/SignerFromPrivateKey`
- **BitcoinAccount** from `@interchainjs/bitcoin/accounts/bitcoin-account`

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please check out and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

