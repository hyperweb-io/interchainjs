## TLDR

Deploy

```sh
# setup helm/starship
pnpm starship setup

# deploy starship, the command will wait until all pods are running
pnpm starship:all

# sanity check
pnpm starship get-pods
```

Run Tests

```sh
# test
pnpm starship:test
```

Teardown

```sh
# stop port forwarding (done by clean() too)
# pnpm starship stop-ports

# stop ports and delete & remove helm chart
pnpm starship:clean
```

## 1. Installation

Inorder to get started with starship, one needs to install the following

- `kubectl`: https://kubernetes.io/docs/tasks/tools/
- `kind`: https://kind.sigs.k8s.io/docs/user/quick-start/#installation
- `helm`: https://helm.sh/docs/intro/install/

Note: To make the process easy we have a simple command that will try and install dependencies
so that you dont have to.

```bash
pnpm starship setup
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
pnpm starship:all
# or
pnpm starship start
```

We use the config file `configs/config.yaml` as the genesis file to define the topology of the e2e test infra. Change it as required

Note: Spinup will take some time, while you wait for the system, can check the progress in another tab with `kubectl get pods`

## 4. Run the tests

We have everything we need, our desired infrastructure is now running as intended, now we can run
our end-to-end tests.

Run

```bash
pnpm starship:test
```

### Available Tests

The test suite includes comprehensive end-to-end tests covering Ethereum functionality including native ETH transfers, smart contract interactions, and utility functions:

#### Token Transfer Tests (`token.test.ts`)

Comprehensive testing of Ethereum token transfers and smart contract interactions:

- **ETH Transfers (Legacy)**: Tests native ETH transfers using legacy transaction format
- **ETH Transfers (EIP-1559)**: Tests native ETH transfers using EIP-1559 transaction format with dynamic fees
- **Smart Contract Deployment**: Tests deploying ERC-20 USDT contract to the test network
- **ERC-20 Token Transfers**: Tests transferring ERC-20 tokens between accounts
- **Personal Message Signing**: Tests signing arbitrary messages using personal_sign
- **WebSocket Event Monitoring**: Tests real-time monitoring of smart contract events
- **Key Scenarios**:
  - Sending ETH between accounts with balance verification and gas fee calculation
  - Deploying USDT smart contract and verifying deployment success
  - Transferring USDT tokens and verifying balance changes
  - Signing personal messages and validating signature format
  - Monitoring Transfer events via WebSocket for real-time contract interaction tracking
  - Testing both legacy and EIP-1559 transaction types for compatibility

**Network-Specific Considerations**:

- Uses local Hardhat node (http://127.0.0.1:8545) for testing
- Tests with pre-funded accounts using deterministic private keys
- Includes WebSocket testing (ws://127.0.0.1:8546) for event monitoring
- Validates proper gas estimation and fee calculation for different transaction types
- Tests contract interaction patterns including deployment, method calls, and event listening

#### Utility Function Tests (`utils.test.ts`)

Tests core Ethereum utility functions for address validation and data encoding:

- **Address Validation**: Tests Ethereum address format validation and checksum verification
- **Address Conversion**: Tests conversion between different address formats (lowercase, uppercase, checksum)
- **Data Encoding**: Tests UTF-8 to hex encoding and decoding functions
- **Error Handling**: Tests proper error handling for invalid inputs
- **Key Scenarios**:
  - Validating checksummed, lowercase, and uppercase Ethereum addresses
  - Detecting invalid checksum addresses and rejecting them
  - Converting addresses to proper checksum format
  - Encoding UTF-8 strings to hexadecimal representation
  - Decoding hex strings back to UTF-8 with proper error handling
  - Testing edge cases like invalid hex strings and malformed addresses

**Testing Patterns**:

- Comprehensive address format testing including EIP-55 checksum validation
- Bidirectional encoding/decoding tests to ensure data integrity
- Error boundary testing for malformed inputs
- Validation of utility function reliability for production use

## 5. Stop the infra

The tests should be ideompotent, so the tests can be run multiple times (which is recommeded), since the time to spinup is still high (around 5 to 10 mins).

Once the state of the mini-cosmos is corrupted, you can stop the deployments with

```bash
pnpm starship:clean
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
