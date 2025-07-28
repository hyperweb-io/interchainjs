# @interchainjs/ethereum

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

Welcome to the **InterchainJS Ethereum** tutorial!
This guide will help you quickly get started with sending transactions, interacting with smart contracts, and handling Ethereum utilities using the `@interchainjs/ethereum` package.
Whether you're building backend services or frontend dApps, you'll find practical examples and tips below. Let's dive in! ✨

---

## Overview

Transaction codec and client to communicate with the Ethereum blockchain.

---

## Installation

```sh
npm install @interchainjs/ethereum
```

---

## Usage

### Query Client

The Ethereum Query Client provides a comprehensive interface for querying Ethereum blockchain data using JSON-RPC.

#### Basic Setup

```typescript
import { createEthereumQueryClient } from "@interchainjs/ethereum";

// Create a query client
const queryClient = await createEthereumQueryClient("https://eth.llamarpc.com");

// Or with options
const queryClient = await createEthereumQueryClient("https://eth.llamarpc.com", {
  timeout: 30000,
  headers: {
    'User-Agent': 'MyApp/1.0.0'
  }
});
```

#### Basic Information

```typescript
// Get chain ID
const chainId = await queryClient.getChainId();
console.log("Chain ID:", chainId); // 1 for mainnet

// Get latest block number
const blockNumber = await queryClient.getBlockNumber();
console.log("Latest block:", blockNumber);

// Check sync status
const syncing = await queryClient.isSyncing();
console.log("Syncing:", syncing);
```

#### Block Queries

```typescript
// Get latest block
const latestBlock = await queryClient.getLatestBlock();
console.log("Latest block hash:", latestBlock.hash);

// Get block by number
const block = await queryClient.getBlockByNumber(18000000);
console.log("Block timestamp:", block.timestamp);

// Get block by hash
const blockByHash = await queryClient.getBlockByHash("0x95b198e154acbfc64109dfd22d8224fe927fd8dfdedfae01587674482ba4baf3");
console.log("Block number:", blockByHash.number);

// Get transaction count in block
const txCount = await queryClient.getBlockTransactionCount(18000000);
console.log("Transaction count:", txCount);
```

#### Transaction Queries

```typescript
// Get transaction details
const tx = await queryClient.getTransaction("0x16e199673891df518e25db2ef5320155da82a3dd71a677e7d84363251885d133");
console.log("From:", tx.from, "To:", tx.to, "Value:", tx.value);

// Get transaction receipt
const receipt = await queryClient.getTransactionReceipt("0x16e199673891df518e25db2ef5320155da82a3dd71a677e7d84363251885d133");
console.log("Status:", receipt.status, "Gas used:", receipt.gasUsed);

// Get account nonce
const nonce = await queryClient.getTransactionCount("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
console.log("Nonce:", nonce);
```

#### Account and Balance Queries

```typescript
// Get account balance
const balance = await queryClient.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
console.log("Balance:", balance.toString(), "wei");

// Get contract code
const code = await queryClient.getCode("0xdAC17F958D2ee523a2206206994597C13D831ec7");
console.log("Contract code length:", code.length);

// Get storage value
const storage = await queryClient.getStorageAt("0xdAC17F958D2ee523a2206206994597C13D831ec7", "0x0");
console.log("Storage at slot 0:", storage);
```

#### Gas and Fee Queries

```typescript
// Get current gas price
const gasPrice = await queryClient.getGasPrice();
console.log("Gas price:", gasPrice.toString(), "wei");

// Get max priority fee (EIP-1559)
const priorityFee = await queryClient.getMaxPriorityFeePerGas();
console.log("Priority fee:", priorityFee.toString(), "wei");

// Get fee history
const feeHistory = await queryClient.getFeeHistory(4, 'latest', [25, 50, 75]);
console.log("Base fees:", feeHistory.baseFeePerGas);

// Estimate gas for transaction
const gasEstimate = await queryClient.estimateGas({
  from: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  to: "0x0000000000000000000000000000000000000000",
  value: "0x1"
});
console.log("Gas estimate:", gasEstimate.toString());
```

#### Event Logs and Filters

```typescript
// Get logs
const logs = await queryClient.getLogs({
  fromBlock: 18000000,
  toBlock: 18000100,
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"] // Transfer event
});
console.log("Found", logs.length, "Transfer events");

// Create and manage filters
const filterId = await queryClient.newFilter({
  fromBlock: 'latest',
  toBlock: 'latest'
});

const filterLogs = await queryClient.getFilterLogs(filterId);
console.log("Filter logs:", filterLogs.length);

// Clean up filter
await queryClient.uninstallFilter(filterId);
```

#### WebSocket Support

```typescript
import { EthereumClientFactory } from "@interchainjs/ethereum";

// Create WebSocket query client for real-time updates
const wsQueryClient = await EthereumClientFactory.createWebSocketQueryClient("wss://eth.llamarpc.com");

// Use the same interface as HTTP client
const latestBlock = await wsQueryClient.getLatestBlock();
console.log("Latest block via WebSocket:", latestBlock.number);
```

#### Error Handling

```typescript
try {
  const block = await queryClient.getBlockByNumber(999999999999);
} catch (error) {
  console.error("Block not found:", error.message);
}

try {
  const tx = await queryClient.getTransaction("0xinvalid");
} catch (error) {
  console.error("Invalid transaction hash:", error.message);
}
```

#### Connection Management

```typescript
// Check connection status
console.log("Connected:", queryClient.isConnected());

// Get endpoint
console.log("Endpoint:", queryClient.endpoint);

// Disconnect when done
await queryClient.disconnect();
```

### Using a Private Key

#### Import and Construct Signer

```typescript
import { SignerFromPrivateKey } from "@interchainjs/ethereum/signers/SignerFromPrivateKey";
const signer = new SignerFromPrivateKey(privateKey, RPC_URL);
```

#### Get Address, Balance, and Nonce

```typescript
// Get the address and current balance
type Address = string
const address: Address = signer.getAddress()
console.log("Address:", address)

const balance: bigint = await signer.getBalance()
console.log("Balance (wei):", balance)

// Get the current nonce
const nonce: number = await signer.getNonce()
console.log("Nonce:", nonce)
```

#### Send Legacy and EIP-1559 Transactions

```typescript
// Send a legacy transaction with automatic gas limit
const { txHash: legacyHash, wait: legacyWait } = await signer.sendLegacyTransactionAutoGasLimit(
  recipientAddress,
  1000000000000000n, // 0.001 ETH
  '0x'
)
const legacyReceipt = await legacyWait()
console.log("Legacy tx receipt:", legacyReceipt)

// Send an EIP-1559 transaction with automatic gas settings
const { txHash: eipHash, wait: eipWait } = await signer.sendEIP1559TransactionAutoGasLimit(
  recipientAddress,
  1000000000000000n // 0.001 ETH
)
const eipReceipt = await eipWait()
console.log("EIP-1559 tx receipt:", eipReceipt)
```

#### Sign and Verify a Personal Message

```typescript
// Sign and verify a personal message
const message: string = "Hello, Ethereum!"
const signature: string = signer.personalSign(message)
console.log("Signature:", signature)

const isValid: boolean = SignerFromPrivateKey.verifyPersonalSignature(
  message,
  signature,
  address
)
console.log("Signature valid:", isValid)
}
```

#### Estimate Gas for a Transaction

```typescript
// Estimate gas for an arbitrary transaction
const estimatedGas: bigint = await signer.estimateGas(
  recipientAddress,
  500000000000000000n, // 0.5 ETH
  "0x" // optional data
);
console.log("Estimated gas:", estimatedGas.toString());
```

#### Deploy a Smart Contract

```typescript
// Deploy a smart contract
const bytecode = "0x..."; // compiled contract bytecode
const { txHash: deployHash, wait: deployWait } =
  await signer.sendLegacyTransactionAutoGasLimit("", 0n, bytecode);
const deployReceipt = await deployWait();
console.log("Contract deployed at:", deployReceipt.contractAddress);
```

#### Interact with a Deployed Contract (ERC20 Transfer)

```typescript
// Interact with a deployed contract (transfer ERC20 tokens)
import { ContractEncoder } from "@interchainjs/ethereum/utils/ContractEncoder";
const abi = [
  /* ERC20 contract ABI */
];
const contractAddress = deployReceipt.contractAddress;
const contract = new ContractEncoder(abi);
const dataHex = contract.transfer(recipientAddress, 1000000n);
const { txHash: tokenHash, wait: tokenWait } =
  await signer.sendLegacyTransactionAutoGasLimit(contractAddress, 0n, dataHex);
const tokenReceipt = await tokenWait();
console.log("Token transfer receipt:", tokenReceipt);
```

#### Monitor Contract Events via WebSocket

```typescript
// Monitor contract events via WebSocket
import { WebSocketContractMonitor } from "@interchainjs/ethereum/providers/WebSocketContractMonitor";
const wsUrl = "ws://127.0.0.1:8546";
const monitor = new WebSocketContractMonitor(contractAddress, abi, wsUrl);
await monitor.connect();
monitor.on("Transfer", (event) => {
  console.log("Transfer event:", event);
});
```

See more usages in the [unit test](https://github.com/hyperweb-io/interchainjs/blob/main/networks/ethereum/starship/__tests__/token.test.ts)

### In the frontend

#### Send Transaction from Browser Wallet

```typescript
import { SignerFromBrowser } from "@interchainjs/ethereum/signers/SignerFromBrowser";
const signer = new SignerFromBrowser(window.ethereum);
const tx = await signer.send({
  to: recipientAddress,
  value: BigInt(10 ** 18),
});
const receipt = await tx.wait();
```

For more details, see this [example](https://github.com/hyperweb-io/create-interchain-app/blob/main/examples/ethereum/app/page.tsx)

---

## Utility Functions

### Denominations

#### Parse and Format ETH/Token Amounts

```typescript
import {
  parseEther,
  formatEther,
  parseUnits,
  formatUnits
} from "@interchainjs/ethereum/utils/denominations";

// Parse ETH to wei
const wei: bigint = parseEther("1.5"); // 1500000000000000000n

// Format wei to ETH
const eth: string = formatEther(wei); // "1.5"

// Parse a token amount (e.g., 6 decimals)
const units: bigint = parseUnits("123.456", 6);

// Format back to human‐readable
const amount: string = formatUnits(units, 6); // "123.456"
```

### Encoding

#### UTF-8 and Hex Conversion

```typescript
import {
  utf8ToHex,
  hexToUtf8
} from "@interchainjs/ethereum/utils/encoding";

const hex = utf8ToHex("Hello, Ethereum!"); // "48656c6c6f2c20457468657265756d21"
const str = hexToUtf8("0x48656c6c6f");     // "Hello"
```

### Address Utilities

#### Validate and Checksum Ethereum Addresses

```typescript
import {
  isValidEthereumAddress,
  toChecksumAddress
} from "@interchainjs/ethereum/utils/address";

const addr = "0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359";
console.log(isValidEthereumAddress(addr));
// true

const lower = "0xfB6916095ca1df60bb79ce92ce3ea74c37c5d359";
console.log(toChecksumAddress(lower));
// "0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359"
```

---

## Implementations

- **SignerFromPrivateKey** from `@interchainjs/ethereum/signers/SignerFromPrivateKey`
- **SignerFromBrowser** from `@interchainjs/ethereum/signers/SignerFromBrowser`


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
