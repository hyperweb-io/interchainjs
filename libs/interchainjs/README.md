# InterchainJS

<p align="center" style={{ marginBottom: "20px" }}>
  <img
    src="https://raw.githubusercontent.com/hyperweb-io/interchainjs/refs/heads/main/assets/logo.svg"
    width="280"
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
  <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img
      height="20"
      src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg"
    />
  </a>
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

A single, universal signing interface for any network. Birthed from the interchain ecosystem for builders. Create adapters for any Web3 network.

## install

```sh
npm install interchainjs
```

## Table of Contents

- [InterchainJS](#interchainjs)
- [Install](#install)
- [Introduction](#interchainjs-universal-signing-for-web3)
- [Overview](#overview)
- [Tutorials & Documentation](#tutorials--documentation)
  - [RPC Clients](#rpc-clients)
  - [Tree Shakable Helpers](#tree-shakable-helpers)
  - [Module-Specific Helpers](#module-specific-helpers)
- [Connecting with Wallets and Signing Messages](#connecting-with-wallets-and-signing-messages)
  - [Initializing the Signing Client](#initializing-the-signing-client)
  - [Creating Signers](#creating-signers)
  - [getSigner Factory Function](#getsigner-factory-function)
    - [How It Works](#how-it-works)
    - [Supported Signer Types](#supported-signer-types)
    - [Configuration Options](#configuration-options)
    - [Usage Examples](#usage-examples)
    - [Error Handling](#error-handling)
    - [Best Practices](#best-practices)
  - [Broadcasting Messages](#broadcasting-messages)
  - [All In One Example](#all-in-one-example)
- [Amino Helpers](#amino-helpers)
- [Auth](#auth)
- [Crypto Helpers](#crypto-helpers)
- [Encoding Helpers](#encoding-helpers)
- [Math Helpers](#math-helpers)
- [Pubkey Helpers](#pubkey-helpers)
- [Supported Networks](#supported-networks)
  - [Cosmos Network](#cosmos-network)
  - [Injective Network](#injective-network)
  - [Solana Network](#solana-network)
  - [Ethereum Network](#ethereum-network)
- [Developing](#developing)
  - [Codegen](#codegen)
- [Interchain JavaScript Stack ⚛️](#interchain-javascript-stack-️)
- [Credits](#credits)
- [Disclaimer](#disclaimer)

## InterchainJS: Universal Signing for Web3

[InterchainJS](https://hyperweb.io/stack/interchainjs) is a **universal signing interface** designed for seamless interoperability across blockchain networks. It is one of the **core libraries of the [Interchain JavaScript Stack](https://hyperweb.io/stack)**, a modular framework that brings Web3 development to millions of JavaScript developers.

At its core, InterchainJS provides a **flexible adapter pattern** that abstracts away blockchain signing complexities, making it easy to integrate new networks, manage accounts, and support diverse authentication protocols and signing algorithms—all in a unified, extensible framework.

## Overview

InterchainJS sits at the foundation of the **[Interchain JavaScript Stack](https://hyperweb.io/stack)**, a set of tools that work together like nested building blocks:

- **[InterchainJS](https://hyperweb.io/stack/interchainjs)** → Powers signing across Cosmos, Solana, Ethereum (EIP-712), and beyond.
- **[Interchain Kit](https://hyperweb.io/stack/interchain-kit)** → Wallet adapters that connect dApps to multiple blockchain networks.
- **[Interchain UI](https://hyperweb.io/stack/interchain-ui)** → A flexible UI component library for seamless app design.
- **[Create Interchain App](https://hyperweb.io/stack/create-interchain-app)** → A developer-friendly starter kit for cross-chain applications.

This modular architecture ensures **compatibility, extensibility, and ease of use**, allowing developers to compose powerful blockchain applications without deep protocol-specific knowledge.

### Visualizing InterchainJS Components

The diagram below illustrates how InterchainJS connects different signer types to various network classes, showcasing its adaptability for a wide range of blockchain environments.

```mermaid
graph LR
    signers --> cosmos_signer["Cosmos Network"]
    signers --> injective_signer["Injective Network"]
    signers --> solana_signer["Solana Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> eip1559_signer["EIP-1559 Signer"]
    ethereum_signer --> legacy_signer["Legacy Signer"]

    injective_signer --> injective_amino["Amino Signer"]
    injective_signer --> injective_direct["Direct Signer"]

    solana_signer --> solana_std["Standard Signer"]

    implement_signer --> any_signer["Any Signer"]

    style signers fill:#f9f,stroke:#333,stroke-width:2px
```

```mermaid
graph LR
    encoders[Encoders] --> auth["@interchainjs/auth"]
    encoders --> utils["@interchainjs/utils"]
    encoders --> cosmos_types["@interchainjs/cosmos-types"]

    auth --> secp256k1_auth["Secp256k1 Auth"]
    auth --> ethSecp256k1_auth["EthSecp256k1 Auth"]

    utils --> signer_utils["Signer Utilities"]
    utils --> crypto_utils["Crypto Utilities"]

    style encoders fill:#f9f,stroke:#333,stroke-width:2px
    style auth fill:#ccf,stroke:#333,stroke-width:2px
    style utils fill:#ccf,stroke:#333,stroke-width:2px
```

---

## Tutorials & Documentation

The following resources provide comprehensive guidance for developers working with InterchainJS. Whether you're setting up a new application, implementing custom signers, or exploring advanced features, these tutorials and documentation will help you leverage the full power of InterchainJS across various blockchain networks.

| Topic                        | Documentation                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------- |
| **Create Interchain App**    | [Create Interchain App](https://github.com/hyperweb-io/create-interchain-app) |
| **Building a Custom Signer** | [Building a Custom Signer](/docs/building-a-custom-signer.md)                 |
| **Advanced Documentation**   | [View Docs](/docs/)                                                           |
| **Solana Network Guide**     | [@interchainjs/solana](/networks/solana/README.md)                            |

### RPC Clients

RPC (Remote Procedure Call) clients enable communication between your application and blockchain networks. InterchainJS provides a flexible and type-safe way to create these clients, allowing you to query blockchain data with minimal configuration. The following example demonstrates how to create and use an RPC client to query data from a Cosmos-based blockchain.

```js
import { getAllBalances } from "@interchainjs/cosmos/bank/v1beta1/query.rpc.func";

{ getRpcEndpoint } = useChain("cosmoshub");

const endpoint = await getRpcEndpoint();

// now you can query the cosmos modules
const balance = await getAllBalances(endpoint,{
  address: "cosmos1addresshere",
});
```

### Tree Shakable Helpers

InterchainJS provides tree shakable helper functions to optimize your application's bundle size. These helpers follow a factory pattern that allows modern JavaScript bundlers to eliminate unused code through tree shaking. These helpers improve modularity and optimize performance by allowing you to import only the functionality you need.
Tree shakable tutorial video: https://youtu.be/3dRm9HEklMo

#### How Tree Shakable Helpers Work

Each helper function is individually exported (e.g., `getAllBalances`).
This pattern enables:

1. **Bundle Size Optimization**: Only the functions you import and use are included in your final bundle
2. **Lazy Initialization**: Helper functions are only constructed when explicitly called
3. **Customizable Configuration**: Each helper can be configured with specific parameters

For example, query helpers are functions that return other functions, constructed with specific parameters:

```js
// Import only what you need
import { getAllBalances } from "@interchainjs/cosmos/bank/v1beta1/query.rpc.func";

// Now you can query the blockchain
const balance = await getAllBalances(endpoint, {
  address: "cosmos1addresshere",
});
```

#### Available Helper Types

InterchainJS provides two main types of tree shakable helpers:

1. **Query Helpers**: For retrieving data from the blockchain

   ```js
   import { getValidator } from "@interchainjs/cosmos/staking/v1beta1/query.rpc.func";
   ```

2. **Transaction Helpers**: For broadcasting transactions

   ```js
   import { createDelegate } from "@interchainjs/cosmos/staking/v1beta1/tx.rpc.func";
   ```

#### Example: Combining Query and Transaction Helpers

Here's how you might use both types together in a staking scenario:

```js
// Import helpers
import { getValidator } from "@interchainjs/cosmos/staking/v1beta1/query.rpc.func";
import { delegate } from "@interchainjs/cosmos/staking/v1beta1/tx.rpc.func";

// Query validator info
const { validator } = await getValidator(endpoint, {
  validatorAddr: "cosmosvaloper1...",
});

// Execute delegation
const result = await delegate(
  signingClient,
  signerAddress,
  {
    delegatorAddress: signerAddress,
    validatorAddress: validator.operatorAddress,
    amount: { denom: "uatom", amount: "1000000" },
  },
  fee,
  "Delegation via InterchainJS"
);
```

By importing only the specific helpers you need, you ensure that your application bundle remains as small and efficient as possible.

#### Framework Integration

These tree shakable helpers can be used with framework-specific implementations:

- **React**: Available as hooks in `@interchainjs/react`

  ```js
  import { useGetAllBalances } from "@interchainjs/react/cosmos/bank/v1beta1/query.rpc.react";
  ```

- **Vue**: Available as composables in `@interchainjs/vue`

  ```js
  import { useGetAllBalances } from "@interchainjs/vue/cosmos/bank/v1beta1/query.rpc.vue";
  ```

#### Examples and Documentation

For detailed usage examples and implementation patterns, refer to the test suite in the [starship/**tests**](https://github.com/hyperweb-io/interchainjs/tree/main/libs/interchainjs/starship/__tests__) directory.

#### Module-Specific Helpers

The following sections provide import examples for various Cosmos SDK modules.

##### Authz

```js
// query helpers
import {
  getGrants,
  getGranterGrants,
  getGranteeGrants,
} from "@interchainjs/cosmos/authz/v1beta1/query.rpc.func";

// tx helpers
import {
  grant,
  revoke,
  exec,
} from "@interchainjs/cosmos/authz/v1beta1/tx.rpc.func";
```

##### Bank

```js
// query helpers
import {
  getAllBalances,
  getDenomMetadata,
  getSupply,
  getParams,
} from "@interchainjs/cosmos/bank/v1beta1/query.rpc.func";

// tx helpers
import { send, multiSend } from "@interchainjs/cosmos/bank/v1beta1/tx.rpc.func";
```

##### Circuit

```js
// query helpers
import {
  getAccount,
  getAccounts,
  getDisabledList,
} from "@interchainjs/cosmos/circuit/v1/query.rpc.func";

// tx helpers
import {
  authorizeCircuitBreaker,
  tripCircuitBreaker,
  resetCircuitBreaker,
} from "@interchainjs/cosmos/circuit/v1/tx.rpc.func";
```

##### Consensus

```js
// query helpers
import { getParams } from "@interchainjs/cosmos/consensus/v1/query.rpc.func";

// tx helpers
import { updateParams } from "@interchainjs/cosmos/consensus/v1/tx.rpc.func";
```

##### Crisis

```js
// tx helpers
import {
  verifyInvariant,
  updateParams,
} from "@interchainjs/cosmos/crisis/v1beta1/tx.rpc.func";
```

##### Distribution

```js
// query helpers
import {
  getParams,
  getValidatorDistributionInfo,
  getValidatorOutstandingRewards,
  getValidatorCommission,
  getValidatorSlashes,
  getDelegationRewards,
  getDelegationTotalRewards,
} from "@interchainjs/cosmos/distribution/v1beta1/query.rpc.func";

// tx helpers
import {
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
  fundCommunityPool,
  communityPoolSpend,
  updateParams,
} from "@interchainjs/cosmos/distribution/v1beta1/tx.rpc.func";
```

##### Evidence

```js
// query helpers
import {
  getEvidence,
  getAllEvidence,
} from "@interchainjs/cosmos/evidence/v1beta1/query.rpc.func";

// tx helpers
import { submitEvidence } from "@interchainjs/cosmos/evidence/v1beta1/tx.rpc.func";
```

##### Feegrant

```js
// query helpers
import {
  getAllowance,
  getAllowances,
  getAllowancesByGranter,
} from "@interchainjs/cosmos/feegrant/v1beta1/query.rpc.func";

// tx helpers
import {
  grantAllowance,
  revokeAllowance,
  pruneAllowances,
} from "@interchainjs/cosmos/feegrant/v1beta1/tx.rpc.func";
```

##### Gov

```js
// query helpers
import {
  getProposal,
  getProposals,
  getVote,
  getVotes,
  getParams,
  getDeposit,
  getDeposits,
  getTallyResult,
} from "@interchainjs/cosmos/gov/v1beta1/query.rpc.func";

// tx helpers
import {
  submitProposal,
  deposit,
  vote,
  voteWeighted,
} from "@interchainjs/cosmos/gov/v1beta1/tx.rpc.func";
```

##### Group

```js
// query helpers
import {
  getGroupInfo,
  getGroupPolicyInfo,
  getGroupMembers,
  getGroupsByAdmin,
  getGroupPoliciesByGroup,
  getGroupPoliciesByAdmin,
} from "@interchainjs/cosmos/group/v1/query.rpc.func";

// tx helpers
import {
  createGroup,
  updateGroupMetadata,
  updateGroupMembers,
  updateGroupAdmin,
  updateGroupPolicyMetadata,
  submitProposal,
  vote,
  exec,
} from "@interchainjs/cosmos/group/v1/tx.rpc.func";
```

##### Mint

```js
// query helpers
import {
  getParams,
  getInflation,
  getAnnualProvisions,
} from "@interchainjs/cosmos/mint/v1beta1/query.rpc.func";

// tx helpers
import { updateParams } from "@interchainjs/cosmos/mint/v1beta1/tx.rpc.func";
```

##### Nft

```js
// query helpers
import {
  getBalance,
  getOwner,
  getClass,
  getClasses,
  getNFTs,
  getNFT,
} from "@interchainjs/cosmos/nft/v1/query.rpc.func";

// tx helpers
import { send } from "@interchainjs/cosmos/nft/v1/tx.rpc.func";
```

##### Staking

```js
// query helpers
import {
  getValidators,
  getValidator,
  getValidatorDelegations,
  getValidatorUnbondingDelegations,
  getDelegation,
  getUnbondingDelegation,
} from "@interchainjs/cosmos/staking/v1beta1/query.rpc.func";

// tx helpers
import {
  createValidator,
  editValidator,
  delegate,
  undelegate,
  redelegate,
} from "@interchainjs/cosmos/staking/v1beta1/tx.rpc.func";
```

##### Vesting

```js
// tx helpers
import {
  createVestingAccount,
  createPermanentLockedAccount,
  createPeriodicVestingAccount,
} from "@interchainjs/cosmos/vesting/v1beta1/tx.rpc.func";
```

##### CosmWasm

```js
// query helpers
import {
  getContractInfo,
  getContractHistory,
  getContractsByCode,
  getAllContractState,
  getRawContractState,
  getSmartContractState,
  getCode,
  getCodes,
} from "@interchainjs/cosmwasm/wasm/v1/query.rpc.func";

// tx helpers
import {
  storeCode,
  instantiateContract,
  migrateContract,
  updateAdmin,
  clearAdmin,
} from "@interchainjs/cosmwasm/wasm/v1/tx.rpc.func";
```

##### IBC

```js
// query helpers
import {
  getParams,
  getDenomHash,
  getEscrowAddress,
  getTotalEscrowForDenom,
} from "@interchainjs/ibc/applications/transfer/v1/query.rpc.func";

// tx helpers
import {
  transfer,
  updateParams,
} from "@interchainjs/ibc/applications/transfer/v1/tx.rpc.func";
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [interchain-kit](https://github.com/hyperweb-io/interchain-kit/). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/hyperweb-io/interchain-kit/blob/main/packages/core/README.md) in interchain-kit that can be used with Keplr and other wallets.

### Creating Signers

InterchainJS provides modern signers that implement the `IUniSigner` interface for consistent signing across networks:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';

// Method 1: Using HD Wallet (for development/testing)
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

// Method 2: Using External Wallets (for production)
await window.keplr.enable(chainId);
const offlineSigner = window.keplr.getOfflineSigner(chainId);

const signer = new DirectSigner(offlineSigner, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});
```

For wallet integration, we recommend:

- [interchain-kit](https://github.com/hyperweb-io/interchain-kit/) (recommended for production)
- [keplr](https://docs.keplr.app/api/cosmjs.html) (direct integration)

## getSigner Factory Function

The `getSigner` function is a powerful factory utility that provides a unified interface for creating signers across different blockchain networks. It abstracts away the complexity of signer instantiation and configuration, making it easy to work with multiple networks through a consistent API.

### How It Works

The `getSigner` function creates appropriate signer instances based on your preferred signing method and network type. It supports Cosmos-based networks (including Injective) and Ethereum networks, with automatic configuration merging and comprehensive error handling.

```typescript
import { getSigner, COSMOS_DIRECT } from '@interchainjs/interchain/core';
import { DirectSigner } from '@interchainjs/cosmos';

const signer = getSigner<DirectSigner>(wallet, {
  preferredSignType: COSMOS_DIRECT,
  signerOptions: {
    queryClient: cosmosQueryClient,
    chainId: 'cosmoshub-4',
    addressPrefix: 'cosmos'
  }
});
```

### Supported Signer Types

The `getSigner` function supports five main signer types:

| Signer Type | Network | Description | Wallet Support |
|-------------|---------|-------------|----------------|
| `'cosmos_amino'` | Cosmos | Legacy Amino signing for Cosmos networks | IWallet, OfflineSigner |
| `'cosmos_direct'` | Cosmos | Modern Protobuf signing for Cosmos networks | IWallet, OfflineSigner |
| `'solana_std'` | Solana | Standard Solana transaction workflow signer | IWallet, Keypair |
| `'ethereum_legacy'` | Ethereum | Legacy Ethereum transactions (pre-EIP-1559) | IWallet only |
| `'ethereum_eip1559'` | Ethereum | Modern Ethereum transactions with EIP-1559 | IWallet only |

**Important**: Ethereum signers (`ethereum_legacy` and `ethereum_eip1559`) only work with `IWallet` implementations and do not support `OfflineSigner` interfaces.

### Configuration Options

Each signer type accepts specific configuration options that are automatically merged with sensible defaults:

#### Cosmos Signers (`cosmos_amino`, `cosmos_direct`)

```typescript
interface CosmosSignerOptions {
  // Required
  queryClient: CosmosQueryClient;

  // Optional with defaults
  chainId?: string;
  addressPrefix?: string;        // Default: 'cosmos'
  multiplier?: number;           // Default: 1.3 (30% gas buffer)
  gasPrice?: string | number;    // Default: 'average'

  // Advanced options
  message?: {
    hash?: string | HashFunction; // Default: 'sha256'
  };
  signature?: {
    format?: SignatureFormatFunction | string;
  };
  unordered?: boolean;           // Default: false
  extensionOptions?: Any[];
  nonCriticalExtensionOptions?: Any[];
}
```

#### Ethereum Signers (`ethereum_legacy`, `ethereum_eip1559`)

#### Solana Signers (`solana_std`)

Solana signers require an `ISolanaQueryClient` and either a Solana `Keypair` or an `IWallet` implementation that exposes Solana-compatible accounts. Configuration options include:

Pair the signer with the request-object query clients created via `createSolanaQueryClient` for consistent RPC typing. See the full Solana workflows in `/networks/solana/README.md`.

```typescript
interface SolanaSignerOptions {
  // Required
  queryClient: ISolanaQueryClient;

  // Optional defaults
  commitment?: string;     // Default: 'processed'
  skipPreflight?: boolean; // Default: false
  maxRetries?: number;     // Default: 3
}
```

```typescript
interface EthereumSignerOptions {
  // Required
  queryClient: EthereumQueryClient;

  // Optional with defaults
  gasMultiplier?: number;        // Default: 1.5 (50% gas buffer)
  chainId?: number;              // Auto-detected if not provided

  // Legacy transaction options
  gasPrice?: bigint;             // Default: 20 gwei

  // EIP-1559 transaction options
  maxFeePerGas?: bigint;         // Default: 30 gwei
  maxPriorityFeePerGas?: bigint; // Default: 2 gwei

  // Advanced options
  signature?: {
    format?: EthereumSignatureFormatFunction | string;
  };
}
```

### Usage Examples

#### Basic Cosmos Direct Signer

```typescript
import { getSigner } from '@interchainjs/interchain/core';
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';

// Create wallet
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
  derivations: [{
    prefix: "cosmos",
    hdPath: HDPath.cosmos(0, 0, 0).toString()
  }]
});

// Create signer with minimal configuration
const signer = getSigner<DirectSigner>(wallet, {
  preferredSignType: 'cosmos_direct',
  signerOptions: {
    queryClient: cosmosQueryClient,
    chainId: 'cosmoshub-4',
    addressPrefix: 'cosmos'
  }
});
```

#### Cosmos Amino Signer with Custom Configuration

```typescript
import { AminoSigner } from '@interchainjs/cosmos';

const aminoSigner = getSigner<AminoSigner>(wallet, {
  preferredSignType: 'cosmos_amino',
  signerOptions: {
    queryClient: cosmosQueryClient,
    chainId: 'osmosis-1',
    addressPrefix: 'osmo',
    multiplier: 1.5,              // 50% gas buffer
    gasPrice: '0.025uosmo',       // Custom gas price
    message: {
      hash: 'sha256'              // Explicit hash function
    }
  }
});
```

#### Using with External Wallets (Keplr)

```typescript
// Enable Keplr for the chain
await window.keplr.enable('cosmoshub-4');
const offlineSigner = window.keplr.getOfflineSigner('cosmoshub-4');

const signer = getSigner<DirectSigner>(offlineSigner, {
  preferredSignType: 'cosmos_direct',
  signerOptions: {
    queryClient: cosmosQueryClient,
    chainId: 'cosmoshub-4',
    addressPrefix: 'cosmos'
  }
});
```

#### Solana Standard Signer

```typescript
import { getSigner, SOLANA_STD } from '@interchainjs/interchain/core';
import {
  createSolanaQueryClient,
  DEVNET_ENDPOINT,
  Keypair,
  PublicKey,
  SolanaSigner,
  SystemProgram,
  solToLamports
} from '@interchainjs/solana';

const queryClient = await createSolanaQueryClient(DEVNET_ENDPOINT);
const wallet = Keypair.generate();

const solanaSigner = getSigner<SolanaSigner>(wallet, {
  preferredSignType: SOLANA_STD,
  signerOptions: {
    queryClient,
    commitment: 'confirmed'
  }
});

const result = await solanaSigner.signAndBroadcast({
  instructions: [
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey('11111111111111111111111111111112'),
      lamports: solToLamports(0.05)
    })
  ]
});

console.log('Transaction signature:', result.signature);
```

#### Ethereum Legacy Signer

```typescript
import { LegacyEthereumSigner } from '@interchainjs/ethereum';
import { EthSecp256k1HDWallet } from '@interchainjs/ethereum/wallets/ethsecp256k1hd';

const ethWallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic);

const ethSigner = getSigner<LegacyEthereumSigner>(ethWallet, {
  preferredSignType: 'ethereum_legacy',
  signerOptions: {
    queryClient: ethereumQueryClient,
    gasMultiplier: 1.2,
    gasPrice: BigInt('25000000000') // 25 gwei
  }
});
```

#### Ethereum EIP-1559 Signer

```typescript
import { EIP1559EthereumSigner } from '@interchainjs/ethereum';

const eip1559Signer = getSigner<EIP1559EthereumSigner>(ethWallet, {
  preferredSignType: 'ethereum_eip1559',
  signerOptions: {
    queryClient: ethereumQueryClient,
    maxFeePerGas: BigInt('40000000000'),         // 40 gwei
    maxPriorityFeePerGas: BigInt('3000000000'), // 3 gwei
    gasMultiplier: 1.3
  }
});
```

#### Multi-Network Example

```typescript
// Create signers for different networks
const cosmosDirectSigner = getSigner<DirectSigner>(cosmosWallet, {
  preferredSignType: 'cosmos_direct',
  signerOptions: {
    queryClient: cosmosQueryClient,
    chainId: 'cosmoshub-4',
    addressPrefix: 'cosmos'
  }
});

const osmosisAminoSigner = getSigner<AminoSigner>(cosmosWallet, {
  preferredSignType: 'cosmos_amino',
  signerOptions: {
    queryClient: osmosisQueryClient,
    chainId: 'osmosis-1',
    addressPrefix: 'osmo'
  }
});

const ethereumSigner = getSigner<EIP1559EthereumSigner>(ethWallet, {
  preferredSignType: 'ethereum_eip1559',
  signerOptions: {
    queryClient: ethereumQueryClient,
    chainId: 1 // Ethereum mainnet
  }
});
```

### Error Handling

The `getSigner` function provides comprehensive error handling with descriptive error messages:

#### Common Error Scenarios

```typescript
try {
  const signer = getSigner<DirectSigner>(wallet, options);
} catch (error) {
  if (error.message.includes('walletOrSigner is required')) {
    // Handle missing wallet
    console.error('Wallet instance is required');
  } else if (error.message.includes('options are required')) {
    // Handle missing options
    console.error('Configuration options are required');
  } else if (error.message.includes('signerOptions are required')) {
    // Handle missing signer options
    console.error('Signer configuration is required');
  } else if (error.message.includes('Unsupported sign type')) {
    // Handle invalid signer type
    console.error('Invalid signer type specified');
  } else if (error.message.includes('queryClient is required')) {
    // Handle missing query client
    console.error('Query client is required in configuration');
  } else if (error.message.includes('Ethereum signers require IWallet')) {
    // Handle Ethereum signer with OfflineSigner
    console.error('Ethereum signers only work with IWallet, not OfflineSigner');
  } else if (error.message.includes('@interchainjs/cosmos is installed')) {
    // Handle missing dependencies
    console.error('Missing required package: @interchainjs/cosmos');
  } else if (error.message.includes('@interchainjs/ethereum is installed')) {
    // Handle missing dependencies
    console.error('Missing required package: @interchainjs/ethereum');
  }
}
```

#### Validation Best Practices

```typescript
// Validate inputs before calling getSigner
function createSigner(wallet: IWallet | OfflineSigner, type: SignerType, options: any) {
  // Check wallet
  if (!wallet) {
    throw new Error('Wallet is required');
  }

  // Check for Ethereum signer compatibility
  if ((type === 'ethereum_legacy' || type === 'ethereum_eip1559') && !('privateKeys' in wallet)) {
    throw new Error('Ethereum signers require IWallet implementation');
  }

  // Check required options
  if (!options?.queryClient) {
    throw new Error('Query client is required');
  }

  return getSigner(wallet, {
    preferredSignType: type,
    signerOptions: options
  });
}
```

### Best Practices

#### 1. Use TypeScript Generics

Always specify the expected signer type for better type safety:

```typescript
// Good: Type-safe with autocompletion
const signer = getSigner<DirectSigner>(wallet, options);

// Avoid: No type safety
const signer = getSigner(wallet, options);
```

#### 2. Handle Network-Specific Requirements

```typescript
// Cosmos networks: Support both IWallet and OfflineSigner
const cosmosSigner = getSigner<DirectSigner>(walletOrOfflineSigner, {
  preferredSignType: 'cosmos_direct',
  signerOptions: cosmosOptions
});

// Ethereum networks: Only IWallet supported
if ('privateKeys' in wallet) {
  const ethSigner = getSigner<LegacyEthereumSigner>(wallet, {
    preferredSignType: 'ethereum_legacy',
    signerOptions: ethereumOptions
  });
}
```

#### 3. Configuration Management

```typescript
// Create reusable configuration objects
const cosmosConfig = {
  queryClient: cosmosQueryClient,
  chainId: 'cosmoshub-4',
  addressPrefix: 'cosmos',
  multiplier: 1.3
};

const osmosisConfig = {
  queryClient: osmosisQueryClient,
  chainId: 'osmosis-1',
  addressPrefix: 'osmo',
  gasPrice: '0.025uosmo'
};

// Use configurations
const cosmosSigner = getSigner<DirectSigner>(wallet, {
  preferredSignType: 'cosmos_direct',
  signerOptions: cosmosConfig
});
```

#### 4. Error Recovery

```typescript
async function createSignerWithFallback(wallet: IWallet, primaryConfig: any, fallbackConfig: any) {
  try {
    return getSigner<DirectSigner>(wallet, {
      preferredSignType: 'cosmos_direct',
      signerOptions: primaryConfig
    });
  } catch (error) {
    console.warn('Primary configuration failed, trying fallback:', error.message);
    return getSigner<AminoSigner>(wallet, {
      preferredSignType: 'cosmos_amino',
      signerOptions: fallbackConfig
    });
  }
}
```

#### 5. Testing Considerations

```typescript
// Use minimal configuration for tests
const testSigner = getSigner<DirectSigner>(testWallet, {
  preferredSignType: 'cosmos_direct',
  signerOptions: {
    queryClient: mockQueryClient
    // Other options will use defaults
  }
});

// Verify signer functionality
const accounts = await testSigner.getAccounts();
expect(accounts.length).toBeGreaterThan(0);
```

### Broadcasting Messages

With your signer, you can sign and broadcast messages using the unified interface:

```typescript
const msg = {
  typeUrl: '/cosmos.bank.v1beta1.MsgSend',
  value: {
    fromAddress: 'cosmos1...',
    toAddress: 'cosmos1...',
    amount: [{ denom: 'uatom', amount: '1000000' }]
  }
};

const result = await signer.signAndBroadcast({
  messages: [msg],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  },
  memo: 'Transfer via InterchainJS'
});

console.log('Transaction hash:', result.transactionHash);
```

### All In One Example

For a comprehensive example of how to use InterchainJS to send messages, please see the example [here](https://github.com/hyperweb-io/create-interchain-app/tree/main/examples/authz). This example demonstrates how to:

- Initialize the client.
- Create and sign messages.
- Broadcast transactions.
- Handle responses and errors.

The example provides a complete walkthrough of setting up the client, creating a message for sending txs, and broadcasting the transaction to the chain.

---

## Amino Helpers

The `@interchainjs/amino` package provides utilities for working with Amino messages and types. It includes functions for encoding and decoding messages, as well as for creating and manipulating Amino types.

| Package                                          | Description                       |
| ------------------------------------------------ | --------------------------------- |
| [@interchainjs/amino](/packages/amino/README.md) | Amino message and type utilities. |

## Auth

The authentication module is universally applied across different networks.

| Package                                                                    | Description                                                                  |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [@interchainjs/auth](/packages/auth/README.md)                             | Handles authentication across blockchain networks.                           |
| [Advanced Docs: `Auth vs. Wallet vs. Signer`](/docs/auth-wallet-signer.md) | Explanation of the differences between authentication, wallets, and signers. |

## Crypto Helpers

The `@interchainjs/crypto` package provides utilities for working with cryptographic primitives. It includes functions for encoding and decoding messages, as well as for creating and manipulating Amino types.

| Package                                            | Description                        |
| -------------------------------------------------- | ---------------------------------- |
| [@interchainjs/crypto](/packages/crypto/README.md) | Crypto message and type utilities. |

## Encoding Helpers

The `@interchainjs/encoding` package provides utilities for working with encoding. It includes functions for encoding and decoding messages, as well as for creating and manipulating encoding types.

| Package                                                | Description                          |
| ------------------------------------------------------ | ------------------------------------ |
| [@interchainjs/encoding](/packages/encoding/README.md) | Encoding message and type utilities. |

## Math Helpers

The `@interchainjs/math` package provides utilities for working with math. It includes functions for encoding and decoding messages, as well as for creating and manipulating math types.

| Package                                        | Description                      |
| ---------------------------------------------- | -------------------------------- |
| [@interchainjs/math](/packages/math/README.md) | Math message and type utilities. |

## Pubkey Helpers

The `@interchainjs/pubkey` package provides utilities for working with pubkeys. It includes functions for encoding and decoding messages, as well as for creating and manipulating pubkey types.

| Package                                            | Description                        |
| -------------------------------------------------- | ---------------------------------- |
| [@interchainjs/pubkey](/packages/pubkey/README.md) | Pubkey message and type utilities. |

## Supported Networks

### Cosmos Network

| Feature                      | Package                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| **Transactions**             | [@interchainjs/cosmos](/networks/cosmos/README.md)            |
| **Cosmos Types**             | [@interchainjs/cosmos-types](/networks/cosmos-msgs/README.md) |
| **Migration from `@cosmjs`** | [interchainjs](/networks/cosmjs/README.md)                    |

---

### Injective Network

| Feature          | Package                                                  |
| ---------------- | -------------------------------------------------------- |
| **Transactions** | [@interchainjs/injective](/networks/injective/README.md) |

---

### Solana Network

Leverage the request-object query client with automatic protocol detection and the `solana_std` signer for wallet-friendly workflows.

| Feature                      | Package                                                  |
| ---------------------------- | -------------------------------------------------------- |
| **Query & Transactions**     | [@interchainjs/solana](/networks/solana/README.md)       |
| **Standard Signer (`solana_std`)** | [Solana Signer Guide](#solana-signers-solana_std) |

---

### Ethereum Network

| Feature          | Package                                                |
| ---------------- | ------------------------------------------------------ |
| **Transactions** | [@interchainjs/ethereum](/networks/ethereum/README.md) |

---

## Developing

When first cloning the repo:

```shell
yarn
yarn build:dev
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/interchainjs.telescope.json` and configure the settings for bundling your SDK and contracts into `interchainjs`:

```shell
yarn codegen
```

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

🛠 Built by the [Constructive](https://constructive.io) team — makers of [Hyperweb](https://hyperweb.io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

```

```

```

```
