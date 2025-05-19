# @interchainjs/ethereum

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80">
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

Transaction codec and client to communicate with ethereum blockchain.

## Usage

```sh
npm install @interchainjs/ethereum
```

### Using private key

```typescript
import { SignerFromPrivateKey } from "@interchainjs/ethereum/signers/SignerFromPrivateKey"
const signer = new SignerFromPrivateKey(privateKey, RPC_URL)
const { txHash, wait } = await signer.sendEIP1559TransactionAutoGasLimit(
  recipientAddress,
  amount
)
const receipt = await wait()
```

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

```typescript
// Estimate gas for an arbitrary transaction
const estimatedGas: bigint = await signer.estimateGas(
  recipientAddress,
  500000000000000000n, // 0.5 ETH
  '0x'               // optional data
)
console.log('Estimated gas:', estimatedGas.toString())
```

```typescript
// Deploy a smart contract
const bytecode = '0x...'; // compiled contract bytecode
const { txHash: deployHash, wait: deployWait } = await signer.sendLegacyTransactionAutoGasLimit(
  '',
  0n,
  bytecode
)
const deployReceipt = await deployWait()
console.log('Contract deployed at:', deployReceipt.contractAddress)
```

```typescript
// Interact with a deployed contract (transfer ERC20 tokens)
import { ContractEncoder } from "@interchainjs/ethereum/utils/ContractEncoder"
const abi = [ /* ERC20 contract ABI */ ]
const contractAddress = deployReceipt.contractAddress
const contract = new ContractEncoder(abi)
const dataHex = contract.transfer(recipientAddress, 1000000n)
const { txHash: tokenHash, wait: tokenWait } = await signer.sendLegacyTransactionAutoGasLimit(
  contractAddress,
  0n,
  dataHex
)
const tokenReceipt = await tokenWait()
console.log('Token transfer receipt:', tokenReceipt)
```

```typescript
// Monitor contract events via WebSocket
import { WebSocketContractMonitor } from "@interchainjs/ethereum/providers/WebSocketContractMonitor"
const wsUrl = 'ws://127.0.0.1:8546'
const monitor = new WebSocketContractMonitor(contractAddress, abi, wsUrl)
await monitor.connect()
monitor.on('Transfer', (event) => {
  console.log('Transfer event:', event)
})
```
See more usages in the [unit test](starship/__tests__/token.test.ts)

### In the frontend

``` typescript
import { SignerFromBrowser } from "@interchainjs/ethereum/signers/SignerFromBrowser"
const signer = new SignerFromBrowser(window.ethereum)
const tx = await signer.send({
  to: recipientAddress,
  value: BigInt(10**18),
})
const receipt = await tx.wait()
```
For more details, see this example: https://github.com/hyperweb-io/create-interchain-app/blob/main/examples/ethereum/app/page.tsx

## Implementations

- **SignerFromPrivateKey** from `@interchainjs/ethereum/signers/SignerFromPrivateKey`
- **SignerFromBrowser** from `@interchainjs/ethereum/signers/SignerFromBrowser`

## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category              | Tools                                                                                                                  | Description                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Chain Information**   | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**| [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit) | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface. |
| **Signing Clients**          | [**InterchainJS**](https://github.com/hyperweb-io/interchainjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs) | A single, universal signing interface for any network |
| **SDK Clients**              | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                          | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules. |
| **Starter Kits**     | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app) | Set up a modern Interchain app by running one command. |
| **UI Kits**          | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                   | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit. |
| **Testing Frameworks**          | [**Starship**](https://github.com/hyperweb-io/starship)                                                             | Unified Testing and Development for the Interchain. |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                              | Build and deploy full-stack blockchain applications with TypeScript |
| **CosmWasm Contracts** | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                   | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes. |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
