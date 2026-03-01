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
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
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

## For Developers

### Understanding the Architecture

To understand how the Cosmos network implementation fits into the broader InterchainJS architecture:

- [Auth vs. Wallet vs. Signer](../../docs/advanced/auth-wallet-signer.md) - Understanding the three-layer architecture
- [Tutorial](../../docs/advanced/tutorial.md) - Using and extending signers

### Implementing Custom Networks

If you're implementing support for a new Cosmos-based network or want to understand the architectural patterns used in this implementation:

- [Network Implementation Guide](../../docs/advanced/network-implementation-guide.md) - Comprehensive guide for implementing blockchain network support
- [Workflow Builder and Plugins Guide](../../docs/advanced/workflow-builder-and-plugins.md) - Plugin-based transaction workflow architecture used by Cosmos signers

## Implementations

- **DirectSigner**: Protobuf-based signing for optimal performance (`@interchainjs/cosmos`)
- **AminoSigner**: JSON-based signing for legacy compatibility (`@interchainjs/cosmos`)
- **Secp256k1HDWallet**: HD wallet implementation for Cosmos networks (`@interchainjs/cosmos`)
- **CosmosQueryClient**: Query client for Cosmos RPC endpoints (`@interchainjs/cosmos`)
