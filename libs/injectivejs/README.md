# InjectiveJS

<p align="center">
  <img src="https://raw.githubusercontent.com/hyperweb-io/interchainjs/refs/heads/main/assets/logo.svg" width="280">
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

## install

```sh
npm install injectivejs
```

## Table of contents

- [InjectiveJS](#injectivejs)
- [Install](#install)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
  - [RPC Clients](#rpc-clients)
  - [Tx Helpers](#tx-helpers)
    - [Auction](#auction)
    - [Exchange](#exchange)
    - [Insurance](#insurance)
    - [OCR](#ocr)
    - [Oracle](#oracle)
    - [Peggy](#peggy)
    - [CosmWasm](#cosmwasm)
    - [IBC](#ibc)
    - [Cosmos](#cosmos)
  - [Composing Messages](#composing-messages)
    - [Auction Messages](#auction-messages)
    - [Exchange Messages](#exchange-messages)
    - [Insurance Messages](#insurance-messages)
    - [OCR Messages](#ocr-messages)
    - [Oracle Messages](#oracle-messages)
    - [Peggy Messages](#peggy-messages)
    - [CosmWasm Messages](#cosmwasm-messages)
    - [IBC Messages](#ibc-messages)
    - [Cosmos Messages](#cosmos-messages)
- [Connecting with Wallets and Signing Messages](#connecting-with-wallets-and-signing-messages)
  - [Initializing the Signing Client](#initializing-the-signing-client)
  - [Creating Signers](#creating-signers)
  - [Broadcasting Messages](#broadcasting-messages)
- [All In One Example](#all-in-one-example)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
  - [Codegen](#codegen)
  - [Publishing](#publishing)
- [Credits](#credits)
- [License](#license)

## Usage

### RPC Clients

```js
import { getAllBalances } from "injectivejs/cosmos/bank/v1beta1/query.rpc.func";
import { getExchangeBalances } from "injectivejs/injective/exchange/v1beta1/query.rpc.func";

{ getRpcEndpoint } = useChain("injective");

const endpoint = await getRpcEndpoint();

// now you can query the cosmos modules
const balance = await getAllBalances(endpoint, {
  address: "inj1addresshere",
});

const exchangeBalance = await getExchangeBalances(endpoint, {});
```

### Tx Helpers

For tx messages, there're helper functions to sign and broadcast messages:

For more detailed usage on how to use these functions, please see the starship tests in the [networks/injective repo](https://github.com/hyperweb-io/interchainjs/tree/main/networks/injective/starship/__tests__)

There're also react and vue hooks for helper functions. Please see [injective-react](https://github.com/hyperweb-io/interchainjs/tree/main/libs/injective-react) and [injective-vue](https://github.com/hyperweb-io/interchainjs/tree/main/libs/injective-vue) repos for more information.

```js
import {
  createDeposit,
  createLiquidatePosition,
  createActivateStakeGrant,
} from "injectivejs/injective/exchange/v1beta1/tx.rpc.func";
```

#### Auction

```js
import { bid } from "injectivejs/injective/auction/v1beta1/tx.rpc.func";
```

#### Exchange

```js
import {
  activateStakeGrant,
  adminUpdateBinaryOptionsMarket,
  authorizeStakeGrants,
  batchCancelBinaryOptionsOrders,
  batchCancelDerivativeOrders,
  batchCancelSpotOrders,
  batchCreateDerivativeLimitOrders,
  batchCreateSpotLimitOrders,
  batchUpdateOrders,
  cancelBinaryOptionsOrder,
  cancelDerivativeOrder,
  cancelSpotOrder,
  createBinaryOptionsLimitOrder,
  createBinaryOptionsMarketOrder,
  createDerivativeLimitOrder,
  createDerivativeMarketOrder,
  createSpotLimitOrder,
  createSpotMarketOrder,
  decreasePositionMargin,
  deposit,
  emergencySettleMarket,
  externalTransfer,
  increasePositionMargin,
  instantBinaryOptionsMarketLaunch,
  instantExpiryFuturesMarketLaunch,
  instantPerpetualMarketLaunch,
  instantSpotMarketLaunch,
  liquidatePosition,
  privilegedExecuteContract,
  rewardsOptOut,
  subaccountTransfer,
  updateDerivativeMarket,
  updateParams,
  updateSpotMarket,
  withdraw,
} from "injectivejs/injective/exchange/v1beta1/tx.rpc.func";
```

#### Insurance

```js
import {
  createInsuranceFund,
  requestRedemption,
  underwrite,
} from "injectivejs/injective/insurance/v1beta1/tx.rpc.func";
```

#### OCR

```js
import {
  acceptPayeeship,
  createFeed,
  fundFeedRewardPool,
  setPayees,
  transferPayeeship,
  transmit,
  updateFeed,
  withdrawFeedRewardPool,
} from "injectivejs/injective/ocr/v1beta1/tx.rpc.func";
```

#### Oracle

```js
import {
  relayBandRates,
  relayCoinbaseMessages,
  relayPriceFeedPrice,
  relayProviderPrices,
  relayPythPrices,
  relayStorkMessage,
  requestBandIBCRates,
} from "injectivejs/injective/oracle/v1beta1/tx.rpc.func";
```

#### Peggy

```js
import {
  blacklistEthereumAddresses,
  cancelSendToEth,
  confirmBatch,
  depositClaim,
  eRC20DeployedClaim,
  requestBatch,
  revokeEthereumBlacklist,
  sendToEth,
  setOrchestratorAddresses,
  submitBadSignatureEvidence,
  valsetConfirm,
  valsetUpdateClaim,
  withdrawClaim,
} from "injectivejs/injective/peggy/v1/msgs.rpc.func";
```

#### CosmWasm

```js
import {
  executeContract,
  clearAdmin,
  instantiateContract,
  instantiateContract2,
  migrateContract,
  pinCodes,
  removeCodeUploadParamsAddresses,
  storeAndInstantiateContract,
  storeCode,
  sudoContract,
  unpinCodes,
  updateAdmin,
  updateContractLabel,
  updateInstantiateConfig,
  addCodeUploadParamsAddresses,
  storeAndMigrateContract,
} from "injectivejs/cosmwasm/wasm/v1/tx.rpc.func";
```

#### IBC

```js
import { transfer } from "injectivejs/ibc/applications/transfer/v1/tx.rpc.func";
```

#### Cosmos

```js
import {
  fundCommunityPool,
  communityPoolSpend,
  depositValidatorRewardsPool,
} from "injectivejs/cosmos/distribution/v1beta1/tx.rpc.func";

import {
  send,
  multiSend,
} from "injectivejs/cosmos/bank/v1beta1/tx.rpc.func";

import {
  delegate,
  undelegate,
  cancelUnbondingDelegation,
  createValidator,
} from "injectivejs/cosmos/staking/v1beta1/tx.rpc.func";

import {
  deposit,
  submitProposal,
  vote,
  voteWeighted,
} from "injectivejs/cosmos/gov/v1beta1/tx.rpc.func";
```

### Composing Messages

Import the `injective` object from `injectivejs`.

```js
import { MessageComposer } from "injectivejs/injective/exchange/v1beta1/tx.registry";

const { createSpotLimitOrder, createSpotMarketOrder, deposit } =
  MessageComposer.withTypeUrl;
```

#### Auction Messages

```js
import { MessageComposer } from "injectivejs/injective/auction/v1beta1/tx.registry";

const { bid } = MessageComposer.withTypeUrl;
```

#### Exchange Messages

```js
import { MessageComposer } from "injectivejs/injective/exchange/v1beta1/tx.registry";

const {
  adminUpdateBinaryOptionsMarket,
  batchCancelBinaryOptionsOrders,
  batchCancelDerivativeOrders,
  batchCancelSpotOrders,
  batchCreateDerivativeLimitOrders,
  batchCreateSpotLimitOrders,
  batchUpdateOrders,
  cancelBinaryOptionsOrder,
  cancelDerivativeOrder,
  cancelSpotOrder,
  createBinaryOptionsLimitOrder,
  createBinaryOptionsMarketOrder,
  createDerivativeLimitOrder,
  createDerivativeMarketOrder,
  createSpotLimitOrder,
  createSpotMarketOrder,
  deposit,
  exec,
  externalTransfer,
  increasePositionMargin,
  instantBinaryOptionsMarketLaunch,
  instantExpiryFuturesMarketLaunch,
  instantPerpetualMarketLaunch,
  instantSpotMarketLaunch,
  liquidatePosition,
  rewardsOptOut,
  subaccountTransfer,
  withdraw,
} = MessageComposer.withTypeUrl;
```

#### Insurance Messages

```js
import { MessageComposer } from "injectivejs/injective/insurance/v1beta1/tx.registry";

const { createInsuranceFund, requestRedemption, underwrite } =
  MessageComposer.withTypeUrl;
```

#### OCR Messages

```js
import { MessageComposer } from "injectivejs/injective/ocr/v1beta1/tx.registry";

const {
  acceptPayeeship,
  createFeed,
  fundFeedRewardPool,
  setPayees,
  transferPayeeship,
  transmit,
  updateFeed,
  withdrawFeedRewardPool,
} = MessageComposer.withTypeUrl;
```

#### Oracle Messages

```js
import { MessageComposer } from "injectivejs/injective/oracle/v1beta1/tx.registry";

const {
  relayBandRates,
  relayCoinbaseMessages,
  relayPriceFeedPrice,
  relayProviderPrices,
  requestBandIBCRates,
} = MessageComposer.withTypeUrl;
```

#### Peggy Messages

```js
import { MessageComposer } from "injectivejs/injective/peggy/v1/tx.registry";

const {
  cancelSendToEth,
  confirmBatch,
  depositClaim,
  eRC20DeployedClaim,
  requestBatch,
  sendToEth,
  setOrchestratorAddresses,
  submitBadSignatureEvidence,
  valsetConfirm,
  valsetUpdateClaim,
  withdrawClaim,
} = MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { MessageComposer } from "injectivejs/cosmwasm/wasm/v1/tx.registry";

const {
  clearAdmin,
  executeContract,
  instantiateContract,
  migrateContract,
  storeCode,
  updateAdmin,
} = MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { MessageComposer } from "injectivejs/ibc/applications/transfer/v1/tx.registry";

const { transfer } = MessageComposer.withTypeUrl;
```

#### Cosmos Messages

```js
import { MessageComposer } from "injectivejs/cosmos/distribution/v1beta1/tx.registry";

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
} = MessageComposer.fromPartial;
```

```js
import { MessageComposer } from "injectivejs/cosmos/bank/v1beta1/tx.registry";

const { multiSend, send } = MessageComposer.fromPartial;
```

```js
import { MessageComposer } from "injectivejs/cosmos/staking/v1beta1/tx.registry";

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate,
} = MessageComposer.fromPartial;
```

```js
import { MessageComposer } from "injectivejs/cosmos/gov/v1beta1/tx.registry";

const { deposit, submitProposal, vote, voteWeighted } =
  cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [interchain-kit](https://github.com/hyperweb-io/interchain-kit/). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/hyperweb-io/interchain-kit/blob/main/packages/core/README.md) in interchain-kit that can be used with Keplr and other wallets.

### Initializing the Signing Client

Use SigningClient.connectWithSigner and pass in the signer options for injective to get your `SigningClient`:

```js
import { SigningClient } from "@interchainjs/cosmos/signing-client";
import { defaultSignerOptions } from "@interchainjs/injective/defaults";

const signingClient = await SigningClient.connectWithSigner(
  await getRpcEndpoint(),
  new AminoGenericOfflineSigner(aminoOfflineSigner),
  {
    signerOptions: defaultSignerOptions.Cosmos,
  }
);
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [interchain-kit](https://github.com/hyperweb-io/interchain-kit/) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Broadcasting Messages

When you have your `signing client`, you can broadcast messages:

```js
const msg = {
  typeUrl: MsgSend.typeUrl,
  value: MsgSend.fromPartial({
    amount: [
      {
        denom: "inj",
        amount: "1000",
      },
    ],
    toAddress: address,
    fromAddress: address,
  }),
};

const fee: StdFee = {
  amount: [
    {
      denom: "inj",
      amount: "864",
    },
  ],
  gas: "86364",
};
const response = await signingClient.signAndBroadcast(address, [msg], fee);
```

### All In One Example

For a comprehensive example of how to use InjectiveJS to send messages, please see the example [here](https://github.com/hyperweb-io/create-interchain-app/tree/main/examples/injective/components/SendMsg.tsx). This example demonstrates how to:

- Initialize the client.
- Create and sign messages.
- Broadcast transactions.
- Handle responses and errors.

The example provides a complete walkthrough of setting up the client, creating a message for sending tokens, and broadcasting the transaction to the Injective blockchain.

Follow the [instructions](https://github.com/hyperweb-io/create-interchain-app/tree/main/examples/injective) in the example to set up your InjectiveJS client and start sending messages to the Injective blockchain.

## Advanced Usage

If you want to manually construct a signing client, you can do so by following the example below:

```js
import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    injectiveAminoConverters,
    injectiveProtoRegistry
} from 'injectivejs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpoint = 'https://rpc.cosmos.directory/injective'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...injectiveProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...injectiveAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const signingClient = await SigningClient.connectWithSigner(rpcEndpoint, signer);

signingClient.addEncoders(registry);
signingClient.addConverters(aminoTypes);
```

## Developing

When first cloning the repo:

```shell
yarn
yarn build:dev
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/inj.telescope.json` and configure the settings for bundling your SDK and contracts into `injectivejs`:

```shell
yarn codegen
```

### Publishing

Build the types and then publish:

```shell
yarn build
yarn publish
```

## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category                       | Tools                                                                                                                                                                                                     | Description                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Chain Information**          | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**          | [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit)                                                           | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.    |
| **Signing Clients**            | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs)                                                                            | A single, universal signing interface for any network                                                               |
| **SDK Clients**                | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                                                                                                                 | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.                                       |
| **Starter Kits**               | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app)                               | Set up a modern Interchain app by running one command.                                                              |
| **UI Kits**                    | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                                                                                                         | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.                            |
| **Testing Frameworks**         | [**Starship**](https://github.com/hyperweb-io/starship)                                                                                                                                                   | Unified Testing and Development for the Interchain.                                                                 |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                                                                                                                             | Build and deploy full-stack blockchain applications with TypeScript                                                 |
| **CosmWasm Contracts**         | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                                                                                                         | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.                                         |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
