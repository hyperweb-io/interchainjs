# @interchainjs/injective

<p align="center" style={{ marginBottom: "20px" }}>
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
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

Transaction codec and client to communicate with any injective blockchain.

## Usage

```sh
npm install @interchainjs/injective
```

### Using DirectSigner

Create and use signers for transaction signing and broadcasting:

```typescript
import { DirectSigner } from '@interchainjs/injective';
import { EthSecp256k1HDWallet } from '@interchainjs/injective';
import { HDPath } from '@interchainjs/types';

// Create wallet from mnemonic (Injective uses Ethereum-style addresses)
const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{
    prefix: "inj",
    hdPath: HDPath.ethereum(0, 0, 0).toString(), // m/44'/60'/0'/0/0
  }]
});

const signer = new DirectSigner(wallet, {
  chainId: 'injective-1',
  queryClient: queryClient,
  addressPrefix: 'inj'
});

// Sign and broadcast transaction
const result = await signer.signAndBroadcast({
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'inj1...',
      toAddress: 'inj1...',
      amount: [{ denom: 'inj', amount: '1000000000000000000' }] // 1 INJ
    }
  }],
  fee: {
    amount: [{ denom: 'inj', amount: '500000000000000' }],
    gas: '200000'
  }
});

console.log('Transaction hash:', result.transactionHash);
```

### Using with External Wallets

For integration with browser wallets like Keplr or Leap:

```typescript
import { DirectSigner } from '@interchainjs/injective';

// Get offline signer from external wallet
await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

// Create signer with offline signer
const signer = new DirectSigner(offlineSigner, {
  chainId: 'injective-1',
  queryClient: queryClient,
  addressPrefix: 'inj'
});

// Use the same signing interface
const result = await signer.signAndBroadcast({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'inj', amount: '500000000000000' }], gas: '200000' }
});
```

For more information:
- See [@interchainjs/auth](/packages/auth/README.md) for wallet creation
- See [@interchainjs/cosmos-types](/libs/cosmos-types/README.md) for message types (Injective uses Cosmos SDK messages)

## Implementations

- **DirectSigner**: Protobuf-based signing for optimal performance (`@interchainjs/injective`)
- **AminoSigner**: JSON-based signing for legacy compatibility (`@interchainjs/injective`)
- **EthSecp256k1HDWallet**: HD wallet implementation with Ethereum-style addresses (`@interchainjs/injective`)
- **InjectiveQueryClient**: Query client for Injective RPC endpoints (`@interchainjs/injective`)

### Key Features

- **Cosmos Compatibility**: Uses Cosmos SDK transaction format with Ethereum-style addresses
- **Unified Interface**: Both signers implement `IUniSigner` with identical methods
- **Flexible Authentication**: Works with both direct wallets and external wallets
- **Type Safety**: Full TypeScript support with proper type inference

## For Developers

### Understanding the Architecture

To understand how the Injective network implementation fits into the broader InterchainJS architecture:

- [Auth vs. Wallet vs. Signer](../../docs/advanced/auth-wallet-signer.md) - Understanding the three-layer architecture
- [Tutorial](../../docs/advanced/tutorial.md) - Using and extending signers

### Implementing Custom Networks

If you're implementing support for a new Injective-compatible network or want to understand the architectural patterns used in this implementation:

- [Network Implementation Guide](../../docs/advanced/network-implementation-guide.md) - Comprehensive guide for implementing blockchain network support
- [Workflow Builder and Plugins Guide](../../docs/advanced/workflow-builder-and-plugins.md) - Plugin-based transaction workflow architecture for extensible transaction building
