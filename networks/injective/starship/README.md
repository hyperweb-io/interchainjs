## TLDR

Deploy

```sh
# setup helm/starship
yarn starship setup

# deploy starship, the command will wait until all pods are running
yarn starship:all

# sanity check
yarn starship get-pods
```

Run Tests

```sh
# test
yarn starship:test
```

Teardown

```sh
# stop port forwarding (done by clean() too)
# yarn starship stop-ports

# stop ports and delete & remove helm chart
yarn starship:clean
```

## 1. Installation

Inorder to get started with starship, one needs to install the following

- `kubectl`: https://kubernetes.io/docs/tasks/tools/
- `kind`: https://kind.sigs.k8s.io/docs/user/quick-start/#installation
- `helm`: https://helm.sh/docs/intro/install/

Note: To make the process easy we have a simple command that will try and install dependencies
so that you dont have to.

```bash
yarn starship setup
```

This command will

- check (and install) if your system has all the dependencies needed to run the e2e tests wtih Starship
- fetch the helm charts for Starship

## 2. Connect to a kubernetes cluster

Inorder to set up the infrastructure, for Starship, we need access to a kubernetes cluster.
One can either perform connect to a

- remote cluster in a managed kubernetes service
- use kubernetes desktop to spin up a cluster
- use kind to create a local cluster on local machine

To make this easier we have a handy command which will create a local kind cluster and give you access
to a kubernetes cluster locally.

NOTE: Resources constraint on local machine will affect the performance of Starship spinup time

```bash
kubectl get pods
```

## 3. Start Starship

Now with the dependencies and a kubernetes cluster in handy, we can proceed with creating the mini-cosmos ecosystem

Run

```bash
yarn starship:all
# or
yarn starship start
```

We use the config file `configs/config.yaml` as the genesis file to define the topology of the e2e test infra. Change it as required

Note: Spinup will take some time, while you wait for the system, can check the progress in another tab with `kubectl get pods`

## 4. Run the tests

We have everything we need, our desired infrastructure is now running as intended, now we can run
our end-to-end tests.

Run

```bash
yarn starship:test
```

### Available Tests

The test suite includes comprehensive end-to-end tests covering Injective Protocol functionality with Ethereum-compatible addressing and specialized Cosmos SDK features:

#### Staking Tests (`staking.test.ts`)

Tests Injective staking operations with Ethereum-style addressing and Cosmos SDK delegation:

- **Validator Discovery**: Queries and selects active validators for delegation using Injective RPC
- **Token Delegation**: Tests delegating INJ tokens to validators using DirectSigner
- **Delegation Verification**: Verifies delegation amounts and validator assignments
- **Ethereum HD Path**: Uses Ethereum-style HD path (`m/44'/60'/0'/0/0`) for Injective compatibility
- **Key Scenarios**:
  - Querying bonded validators and selecting by stake amount
  - Delegating tokens using Injective-specific signer configuration
  - Verifying delegation balances match expected amounts
  - Testing with EthSecp256k1HDWallet for Ethereum-compatible key derivation

**Injective-Specific Patterns**:

- Uses `EthSecp256k1HDWallet` instead of standard Cosmos wallets
- Implements `queryClientWrapper` pattern to fix prototype chain issues
- Uses Ethereum HD path for address derivation while maintaining Cosmos SDK compatibility
- Applies Injective-specific signer configuration with compact signature format
- Includes proper error handling for Injective network peculiarities

#### Token Transfer Tests (`token.test.ts`)

Comprehensive testing of INJ token transfers and IBC functionality:

- **Native INJ Transfers**: Tests transferring native INJ tokens between accounts
- **IBC Transfers**: Tests cross-chain token transfers from Injective to Cosmos Hub
- **Ethereum Addressing**: Uses Ethereum-style addresses with `inj` prefix
- **Balance Verification**: Verifies token balances before and after transfers
- **Key Scenarios**:
  - Sending INJ tokens between accounts with balance verification
  - Cross-chain IBC transfers to Cosmos Hub with denomination tracking
  - Testing with multiple wallet instances and address derivations
  - Verifying IBC token receipt and proper denomination handling

**Injective-Specific Patterns**:

- Uses `EthSecp256k1HDWallet` with Ethereum HD path for sender accounts
- Switches to standard Cosmos HD path for Cosmos Hub recipients
- Implements `queryClientWrapper` pattern for proper method binding
- Uses Injective-specific signer configuration with proper defaults
- Includes network-specific timeout and error handling

#### Governance Tests (`gov.test.ts`)

Tests Injective governance functionality including proposals and voting:

- **Proposal Submission**: Tests submitting text proposals to the Injective governance module
- **Voting Process**: Tests voting on proposals with different vote options
- **Validator Delegation**: Tests staking INJ tokens to gain voting power
- **Proposal Status Tracking**: Tests querying proposal status and vote tallies
- **Key Scenarios**:
  - Submitting governance proposals with proper deposits
  - Voting on proposals using both DirectSigner and AminoSigner
  - Tracking proposal lifecycle from submission to completion
  - Verifying vote recording and tally calculations with Injective-specific parameters

**Injective-Specific Patterns**:

- Uses dual signer setup (DirectSigner and AminoSigner) for compatibility testing
- Implements proper encoder and converter registration for Injective message types
- Uses `EthSecp256k1HDWallet` with Ethereum HD path for governance participants
- Applies Injective-specific configuration for proposal parameters and voting periods
- Includes proper handling of Injective governance module differences

#### Setup Tests (`setup.test.ts`)

Infrastructure and environment setup tests for Injective Protocol:

- **Environment Validation**: Tests that the Starship environment is properly configured for Injective
- **Chain Connectivity**: Tests connectivity to Injective RPC endpoints
- **Account Funding**: Tests faucet functionality for INJ token funding
- **Wallet Compatibility**: Tests Ethereum-style wallet compatibility with Injective
- **Key Scenarios**:
  - Verifying Starship pods are running and healthy for Injective
  - Testing RPC endpoint accessibility and proper responses
  - Validating test account creation with Ethereum-style addressing
  - Ensuring proper chain configuration and genesis state for Injective Protocol

**Injective-Specific Patterns**:

- Validates Ethereum-compatible address generation with `inj` prefix
- Tests proper integration between Ethereum-style wallets and Cosmos SDK
- Verifies Injective-specific RPC endpoints and query methods
- Ensures proper configuration for Injective's unique protocol features
- Tests compatibility between Ethereum tooling and Cosmos SDK functionality

## 5. Stop the infra

The tests should be ideompotent, so the tests can be run multiple times (which is recommeded), since the time to spinup is still high (around 5 to 10 mins).

Once the state of the mini-cosmos is corrupted, you can stop the deployments with

```bash
yarn starship:clean
```

Which will

- Stop port-forwarding the traffic to your local
- Delete all the helm charts deployed

## Related

Checkout these related projects:

- [@hyperweb/telescope](https://github.com/hyperweb-io/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
- [chain-registry](https://github.com/hyperweb-io/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
- [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
- [create-cosmos-app](https://github.com/hyperweb-io/create-cosmos-app) Set up a modern Cosmos app by running one command.
- [interchain-ui](https://github.com/hyperweb-io/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
- [starship](https://github.com/hyperweb-io/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by the [Constructive](https://constructive.io) team — makers of [Hyperweb](https://hyperweb.io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
