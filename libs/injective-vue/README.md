# injective-vue

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
  <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

## install

```sh
npm install injective-vue
```

## Table of contents

- [injective-vue](#injective-vue)
  - [install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
  - [RPC Clients](#rpc-clients)
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
import { injective } from "injective-vue";

const { createRPCQueryClient } = injective.ClientFactory;
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "inj1addresshere",
});

// you can also query the injective modules
const balances = await client.injective.exchange.v1beta1.exchangeBalances();
```

### Composing Messages

Import the `injective` object from `injective-vue`.

```js
import { injective } from "injective-vue";

const { createSpotLimitOrder, createSpotMarketOrder, deposit } =
  injective.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### Auction Messages

```js
const { bid } = injective.auction.v1beta1.MessageComposer.withTypeUrl;
```

#### Exchange Messages

```js
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
} = injective.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### Insurance Messages

```js
const { createInsuranceFund, requestRedemption, underwrite } =
  injective.insurance.v1beta1.MessageComposer.withTypeUrl;
```

#### OCR Messages

```js
const {
  acceptPayeeship,
  createFeed,
  fundFeedRewardPool,
  setPayees,
  transferPayeeship,
  transmit,
  updateFeed,
  withdrawFeedRewardPool,
} = injective.ocr.v1beta1.MessageComposer.withTypeUrl;
```

#### Oracle Messages

```js
const {
  relayBandRates,
  relayCoinbaseMessages,
  relayPriceFeedPrice,
  relayProviderPrices,
  requestBandIBCRates,
} = injective.oracle.v1beta1.MessageComposer.withTypeUrl;
```

#### Peggy Messages

```js
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
} = injective.peggy.v1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "injective-vue";

const {
  clearAdmin,
  executeContract,
  instantiateContract,
  migrateContract,
  storeCode,
  updateAdmin,
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from "injective-vue";

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;
```

#### Cosmos Messages

```js
import { cosmos } from "injective-vue";

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const { multiSend, send } = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate,
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

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
} from 'injective-vue';

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
pnpm install
pnpm run build:dev
```

### Codegen

Contract schemas live in `./contracts`, and protos in `./proto`. Look inside of `scripts/inj.telescope.json` and configure the settings for bundling your SDK and contracts into `injectivejs`:

```shell
pnpm run codegen
```

### Publishing

Build the types and then publish:

```shell
pnpm run build
pnpm run publish
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

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
