# @interchainjs/cosmos

<p
  align="center"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  }}
>
  <img
    src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg"
    width="80"
  />
</p>

<p
  align="center"
  width="100%"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  }}
>
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache">
    <img
      height="20"
      src="https://img.shields.io/badge/license-Apache-blue.svg"
    />
  </a>
</p>

Transaction codec and client to communicate with any cosmos blockchain.

## Usage

```sh
npm install @interchainjs/cosmos
```

### Using DirectSigner

Create and use signers for transaction signing and broadcasting:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';

// Method 1: Using HD Wallet
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{
    prefix: "cosmos",
    hdPath: HDPath.cosmos(0, 0, 0).toString(),
  }]
});

const signer = new DirectSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

// Sign and broadcast transaction
const result = await signer.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'cosmos1...',
      toAddress: 'cosmos1...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  }],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  }
});

console.log('Transaction hash:', result.transactionHash);
```

### Using with External Wallets

For integration with browser wallets like Keplr:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';

// Get offline signer from Keplr
await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

// Create signer with offline signer
const signer = new DirectSigner(offlineSigner, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

// Use the same signing interface
const result = await signer.signAndBroadcast({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' }
});
```

### Using AminoSigner

For legacy compatibility, you can use the AminoSigner:

```typescript
import { AminoSigner } from '@interchainjs/cosmos';

// Create amino signer (same wallet can be used)
const aminoSigner = new AminoSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

// Same signing interface
const result = await aminoSigner.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'cosmos1...',
      toAddress: 'cosmos1...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  }],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  }
});
```

### Key Features

- **Unified Interface**: Both signers implement `IUniSigner` with identical methods
- **Flexible Authentication**: Works with both direct wallets and external wallets
- **Type Safety**: Full TypeScript support with proper type inference
- **Network Compatibility**: Designed specifically for Cosmos SDK-based networks

For more information:
- See [@interchainjs/auth](/packages/auth/README.md) for wallet creation
- See [@interchainjs/cosmos-types](/libs/cosmos-types/README.md) for message types

## Implementations

- **DirectSigner**: Protobuf-based signing for optimal performance (`@interchainjs/cosmos`)
- **AminoSigner**: JSON-based signing for legacy compatibility (`@interchainjs/cosmos`)
- **Secp256k1HDWallet**: HD wallet implementation for Cosmos networks (`@interchainjs/cosmos`)
- **CosmosQueryClient**: Query client for Cosmos RPC endpoints (`@interchainjs/cosmos`)

## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category                       | Tools                                                                                                                                                                                                     | Description                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Chain Information**          | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**          | [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit), [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit)                                                           | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.    |
| **Signing Clients**            | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs), [**CosmJS**](https://github.com/cosmos/cosmjs)                                                                            | A single, universal signing interface for any network                                                               |
| **SDK Clients**                | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                                                                                                                 | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.                                       |
| **Starter Kits**               | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app), [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app)                               | Set up a modern Interchain app by running one command.                                                              |
| **UI Kits**                    | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                                                                                                         | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.                            |
| **Testing Frameworks**         | [**Starship**](https://github.com/hyperweb-io/starship)                                                                                                                                                   | Unified Testing and Development for the Interchain.                                                                 |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                                                                                                                             | Build and deploy full-stack blockchain applications with TypeScript                                                 |
| **CosmWasm Contracts**         | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                                                                                                         | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.                                         |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
