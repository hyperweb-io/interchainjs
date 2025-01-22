# injective-react

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/193426489-d5d3c9a9-d738-43a0-a628-b8b4f1a8034b.png" width="80"><br />
    Building the future of decentralized exchange
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

## install

```sh
npm install injective-react
```

## Table of contents

- [injective-react](#injective-react)
  - [install](#install)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Tx Hooks](#tx-hooks)
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
    - [Initializing the Stargate Client](#initializing-the-stargate-client)
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
import { createQueryRpc } from "@interchainjs/cosmos/utils";
import { createGetAllBalances } from "injectivejs/cosmos/bank/v1beta1/query.rpc.func";
import { createGetExchangeBalances } from "injectivejs/injective/exchange/v1beta1/query.rpc.func";

{ getRpcEndpoint } = useChain("osmosis");

const endpoint = await getRpcEndpoint();
const rpc = createQueryRpc(endpoint);

// get the tree shakable helper functions using the rpc client
const getAllBalances = createGetAllBalances(rpc);

// now you can query the cosmos modules
const balance = await getAllBalances({
  address: "inj1addresshere",
});

// you can also query the injective modules
const getExchangeBalances = createGetExchangeBalances(rpc);
const exchangeBalance = await getExchangeBalances({});
```

### Tx Hooks

injective-react provides hooks for sending transactions. These hooks are built on top of the `useQuery` hook and the `useMutation` hook from `react-query`. The hooks are designed to be used with the `useDelegate` and `useGetValidators` functions from `injectivejs`.

There's also an all in one example of how to use these hooks in the [all in one example](#all-in-one-example) section.

```js
import { useDelegate } from "injective-react/cosmos/staking/v1beta1/tx.rpc.func";
import { useGetValidators } from "injective-react/cosmos/staking/v1beta1/query.rpc.func";

const {
  data,
  isSuccess: isGetValidatorsDone,
  isLoading: isGetValidatorsLoading,
} = useGetValidators({
  request: {
    status: "BOND_STATUS_BONDED",
  },
  options: {
    context: defaultContext,
    enabled: !validatorAddress,
  },
  rpcClient,
});

const { mutate: delegate, isSuccess: isDelegateSuccess } = useDelegate({
  clientResolver: signingClient,
  options: {
    context: defaultContext,
    onSuccess: (data: any) => {
      console.log("onSuccess", data);
    },
    onError: (error) => {
      console.log("onError", error);
    },
  },
});
```

### Tx Helpers

For tx messages, there're helper functions to sign and broadcast messages:

For more detailed usage on how to use these functions, please see the starship tests in the [networks/injective repo](https://github.com/hyperweb-io/interchainjs/tree/main/networks/injective/starship/__tests__)

There're also react hooks for helper functions. Please see the [Tx Hooks](#tx-hooks) section.

```js
import {
  createDeposit,
  createLiquidatePosition,
  createActivateStakeGrant,
} from "injectivejs/injective/exchange/v1beta1/tx.rpc.func";
```

#### Auction

```js
import { createBid } from "injectivejs/injective/auction/v1beta1/tx.rpc.func";
```

#### Exchange

```js
import {
  createActivateStakeGrant,
  createAdminUpdateBinaryOptionsMarket,
  createAuthorizeStakeGrants,
  createBatchCancelBinaryOptionsOrders,
  createBatchCancelDerivativeOrders,
  createBatchCancelSpotOrders,
  createBatchCreateDerivativeLimitOrders,
  createBatchCreateSpotLimitOrders,
  createBatchUpdateOrders,
  createCancelBinaryOptionsOrder,
  createCancelDerivativeOrder,
  createCancelSpotOrder,
  createCreateBinaryOptionsLimitOrder,
  createCreateBinaryOptionsMarketOrder,
  createCreateDerivativeLimitOrder,
  createCreateDerivativeMarketOrder,
  createCreateSpotLimitOrder,
  createCreateSpotMarketOrder,
  createDecreasePositionMargin,
  createDeposit,
  createEmergencySettleMarket,
  createExternalTransfer,
  createIncreasePositionMargin,
  createInstantBinaryOptionsMarketLaunch,
  createInstantExpiryFuturesMarketLaunch,
  createInstantPerpetualMarketLaunch,
  createInstantSpotMarketLaunch,
  createLiquidatePosition,
  createPrivilegedExecuteContract,
  createRewardsOptOut,
  createSubaccountTransfer,
  createUpdateDerivativeMarket,
  createUpdateParams,
  createUpdateSpotMarket,
  createWithdraw,
} from "injectivejs/injective/exchange/v1beta1/tx.rpc.func";
```

#### Insurance

```js
import {
  createCreateInsuranceFund,
  createRequestRedemption,
  createUnderwrite,
} from "injectivejs/injective/insurance/v1beta1/tx.rpc.func";
```

#### OCR

```js
import {
  createAcceptPayeeship,
  createCreateFeed,
  createFundFeedRewardPool,
  createSetPayees,
  createTransferPayeeship,
  createTransmit,
  createUpdateFeed,
  createWithdrawFeedRewardPool,
} from "injectivejs/injective/ocr/v1beta1/tx.rpc.func";
```

#### Oracle

```js
import {
  createRelayBandRates,
  createRelayCoinbaseMessages,
  createRelayPriceFeedPrice,
  createRelayProviderPrices,
  createRelayPythPrices,
  createRelayStorkMessage,
  createRequestBandIBCRates,
} from "injectivejs/injective/oracle/v1beta1/tx.rpc.func";
```

#### Peggy

```js
import {
  createBlacklistEthereumAddresses,
  createCancelSendToEth,
  createConfirmBatch,
  createDepositClaim,
  createERC20DeployedClaim,
  createRequestBatch,
  createRevokeEthereumBlacklist,
  createSendToEth,
  createSetOrchestratorAddresses,
  createSubmitBadSignatureEvidence,
  createValsetConfirm,
  createValsetUpdateClaim,
  createWithdrawClaim,
} from "injectivejs/injective/peggy/v1/msgs.rpc.func";
```

#### CosmWasm

```js
import {
  createExecuteContract,
  createClearAdmin,
  createInstantiateContract,
  createInstantiateContract2,
  createMigrateContract,
  createPinCodes,
  createRemoveCodeUploadParamsAddresses,
  createStoreAndInstantiateContract,
  createStoreCode,
  createSudoContract,
  createUnpinCodes,
  createUpdateAdmin,
  createUpdateContractLabel,
  createUpdateInstantiateConfig,
  createAddCodeUploadParamsAddresses,
  createStoreAndMigrateContract,
} from "injectivejs/cosmwasm/wasm/v1/tx.rpc.func";
```

#### IBC

```js
import { createTransfer } from "injectivejs/ibc/applications/transfer/v1/tx.rpc.func";
```

#### Cosmos

```js
import {
  createFundCommunityPool,
  createCommunityPoolSpend,
  createDepositValidatorRewardsPool,
} from "injectivejs/cosmos/distribution/v1beta1/tx.rpc.func";

import {
  createSend,
  createMultiSend,
} from "injectivejs/cosmos/bank/v1beta1/tx.rpc.func";

import {
  createDelegate,
  createUndelegate,
  createCancelUnbondingDelegation,
  createCreateValidator,
} from "injectivejs/cosmos/staking/v1beta1/tx.rpc.func";

import {
  createDeposit,
  createSubmitProposal,
  createVote,
  createVoteWeighted,
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

### Initializing the Stargate Client

Use `getSigningInjectiveClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { InjSigningClient } from "@interchainjs/injective/signing-client";

signingClient = await InjSigningClient.connectWithSigner(
  await getRpcEndpoint(),
  new AminoGenericOfflineSigner(aminoOfflineSigner)
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
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### All In One Example

For a comprehensive example of how to use InjectiveJS to send messages, please see the example [here](https://github.com/hyperweb-io/create-cosmos-app/blob/main/examples/injective/components/SendMsg.tsx). This example demonstrates how to:

- Initialize the client.
- Create and sign messages.
- Broadcast transactions.
- Handle responses and errors.

The example provides a complete walkthrough of setting up the client, creating a message for sending tokens, and broadcasting the transaction to the Injective blockchain.

Follow the [instructions](https://github.com/hyperweb-io/create-cosmos-app/tree/main/examples/injective) in the example to set up your InjectiveJS client and start sending messages to the Injective blockchain.

## Advanced Usage

If you want to manually construct a stargate client

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

const signingClient = await InjSigningClient.connectWithSigner(rpcEndpoint, signer);

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

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@cosmology/telescope](https://github.com/hyperweb-io/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.

## License

MIT License (MIT) & Apache License

Copyright (c) 2024 Cosmology (https://cosmology.zone/)
