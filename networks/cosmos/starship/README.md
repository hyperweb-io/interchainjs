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

The test suite includes comprehensive end-to-end tests covering various Cosmos SDK functionalities:

#### Authorization Tests (`authz.test.ts`)

Tests the Cosmos authz module functionality for delegating permissions between accounts:

- **Grant Authorization**: Tests granting `SendAuthorization` with spending limits and `GenericAuthorization` for specific message types
- **Execute Authorized Actions**: Tests executing transactions on behalf of another account using granted permissions
- **Revoke Authorization**: Tests revoking previously granted authorizations
- **Key Scenarios**:
  - Granting limited send authorization with spending caps
  - Granting generic authorization for voting
  - Executing send transactions through authorization
  - Verifying authorization limits are enforced
  - Cleaning up authorizations by revoking them

#### Staking Tests (`staking.test.ts`)

Tests Cosmos staking operations including delegation and validator interactions:

- **Validator Discovery**: Queries and selects active validators for delegation
- **Token Delegation**: Tests delegating tokens to validators using different signing modes
- **Delegation Verification**: Verifies delegation amounts and validator assignments
- **Key Scenarios**:
  - Querying bonded validators and selecting by stake amount
  - Delegating tokens using default, direct, and amino signing modes
  - Verifying delegation balances match expected amounts
  - Testing multiple delegation transactions to the same validator

#### Token Transfer Tests (`token.test.ts`)

Comprehensive testing of token transfers within and across chains:

- **Direct Mode Transfers**: Tests token transfers using direct (protobuf) signing
- **Amino Mode Transfers**: Tests token transfers using amino (JSON) signing
- **WebSocket Event Monitoring**: Tests real-time transaction event monitoring via WebSocket
- **IBC Transfers**: Tests cross-chain token transfers using IBC protocol
- **Key Scenarios**:
  - Sending OSMO tokens between accounts with balance verification
  - Monitoring transfer events in real-time using WebSocket subscriptions
  - Cross-chain IBC transfers from Osmosis to Cosmos Hub
  - Verifying IBC token receipt and denomination tracing

#### Governance Tests (`gov.test.ts`)

Tests Cosmos governance functionality including proposals and voting:

- **Proposal Submission**: Tests submitting text proposals to the governance module
- **Voting Process**: Tests voting on proposals with different vote options
- **Proposal Status Tracking**: Tests querying proposal status and vote tallies
- **Validator Delegation**: Tests staking tokens to gain voting power
- **Key Scenarios**:
  - Submitting governance proposals with proper deposits
  - Voting on proposals using different signers and vote options
  - Tracking proposal lifecycle from submission to completion
  - Verifying vote recording and tally calculations

#### Broadcast Tests (`broadcast.test.ts`)

Tests different transaction broadcasting methods and RPC functionality:

- **Async Broadcasting**: Tests `broadcastTxAsync` for fire-and-forget transactions
- **Sync Broadcasting**: Tests `broadcastTxSync` for immediate response transactions
- **Commit Broadcasting**: Tests `broadcastTxCommit` for confirmed transactions
- **Error Handling**: Tests proper error responses for invalid transactions
- **Key Scenarios**:
  - Testing different broadcast modes with various transaction types
  - Verifying proper RPC response formats
  - Handling invalid transactions and signature errors
  - Testing broadcast method performance characteristics

#### Query Client Tests (`query-client.test.ts`)

Tests the Cosmos query client functionality and RPC endpoint interactions:

- **RPC Connectivity**: Tests connection to Cosmos RPC endpoints
- **Query Methods**: Tests various query methods for different modules
- **Adapter Functionality**: Tests protocol adapters for different Cosmos versions
- **Error Handling**: Tests proper error handling for failed queries
- **Key Scenarios**:
  - Testing query client initialization and connection
  - Verifying query responses match expected formats
  - Testing different RPC adapter implementations
  - Handling network errors and timeouts gracefully

#### Signer Method Tests (`signer-methods.test.ts`)

Tests different signing methods and signer configurations:

- **Direct Signing**: Tests protobuf-based transaction signing
- **Amino Signing**: Tests JSON-based legacy transaction signing
- **Signer Configuration**: Tests various signer configuration options
- **Multi-Signature**: Tests multi-signature transaction workflows
- **Key Scenarios**:
  - Comparing direct vs amino signing results
  - Testing signer configuration with different parameters
  - Verifying signature formats and compatibility
  - Testing multi-signature transaction creation and signing

#### Setup Tests (`setup.test.ts`)

Infrastructure and environment setup tests:

- **Environment Validation**: Tests that the Starship environment is properly configured
- **Chain Connectivity**: Tests connectivity to all configured chains
- **Account Funding**: Tests faucet functionality for test account funding
- **Service Health**: Tests that all required services are running and accessible
- **Key Scenarios**:
  - Verifying Starship pods are running and healthy
  - Testing RPC endpoint accessibility
  - Validating test account creation and funding
  - Ensuring proper chain configuration and genesis state

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

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
