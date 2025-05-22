# @interchainjs/bitcoin

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

Transaction codec and client to communicate with bitcoin blockchain.

## Usage

```sh
npm install @interchainjs/bitcoin
```

### Using the Bitcoin Signer

```ts
import { SignerFromPrivateKey } from '@interchainjs/bitcoin';
import { BITCOIN_TESTNET, AddressType, RpcClientOptions } from '@interchainjs/bitcoin';

// Initialize the signer with a private key and RPC endpoint
const rpcOptions: RpcClientOptions = {
  url: 'http://localhost:18443',
  username: 'user',
  password: 'password'
};

const signer = new SignerFromPrivateKey(
  'your-private-key', 
  rpcOptions,
  BITCOIN_TESTNET // optional, defaults to BITCOIN_MAINNET
);

// Get the Bitcoin address (defaults to P2WPKH)
const address = signer.getAddress();
console.log('Bitcoin Address:', address);

// Get address for a specific type
const p2pkhAddress = signer.getAddress(AddressType.P2PKH);
console.log('P2PKH Address:', p2pkhAddress);

// Send Bitcoin to another address
const { txid, wait } = await signer.signAndBroadcast({
  outputs: [{
    address: 'recipient-address',
    value: 1000000 // 0.01 BTC in satoshis
  }],
  feeRate: 10, // satoshis per byte (optional, defaults to 10)
  changeAddressType: AddressType.P2WPKH // optional, defaults to P2WPKH
});

console.log('Transaction Hash:', txid);

// Wait for confirmation
const receipt = await wait();
console.log('Transaction confirmed in block:', receipt.blockHeight);

// Sign a message
const signature = await signer.signMessage('Hello, Bitcoin!');
console.log('Signature:', signature);

// Verify a message signature
const isValid = signer.verifyMessage('Hello, Bitcoin!', signature, address);
console.log('Is valid signature:', isValid);

// Create a PSBT
const psbt = signer.createPSBT({
  outputs: [{
    address: 'recipient-address',
    value: 1000000 // 0.01 BTC in satoshis
  }]
});

// Sign the PSBT
const signedPsbt = signer.signPSBT(psbt);

// Finalize and extract the transaction
const finalizedPsbt = signedPsbt.finalize();
const tx = finalizedPsbt.extractTransaction();

// Broadcast the transaction
const txResponse = await signer.broadcastTransaction(tx);
console.log('Transaction Hash:', txResponse.txid);
```

### Using the RPC Client

```ts
import { BitcoinRpcClient, BITCOIN_MAINNET } from '@interchainjs/bitcoin';

const client = new BitcoinRpcClient({
  url: 'http://localhost:8332',
  username: 'user',
  password: 'password'
}, BITCOIN_MAINNET);

// Get blockchain info
const info = await client.getBlockchainInfo();
console.log('Chain:', info.chain);
console.log('Blocks:', info.blocks);

// Get a block
const block = await client.getBlock(680000);
console.log('Block hash:', block.hash);
console.log('Block time:', new Date(block.time * 1000));

// Get a transaction
const tx = await client.getRawTransaction('txid', true);
console.log('Transaction:', tx);

// Estimate fee
const feeEstimate = await client.estimateSmartFee(6);
console.log('Estimated fee rate:', feeEstimate.feerate);
```

### Utility Functions

```ts
import { 
  isValidAddress, 
  getAddressType, 
  toSatoshis, 
  toBTC
} from '@interchainjs/bitcoin';

// Validate a Bitcoin address
const isValid = isValidAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
console.log('Is valid address:', isValid);

// Get the type of a Bitcoin address
const addressType = getAddressType('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4');
console.log('Address type:', addressType); // 'p2wpkh'

// Convert BTC to satoshis
const satoshis = toSatoshis(0.01);
console.log('Satoshis:', satoshis); // 1000000n

// Convert satoshis to BTC
const btc = toBTC(1000000);
console.log('BTC:', btc); // 0.01
```

## Supported Address Types

- **P2PKH** - Legacy addresses (1...)
- **P2SH** - Script hash addresses (3...)
- **P2WPKH** - Native SegWit addresses (bc1q...)
- **P2WSH** - Native SegWit script hash (bc1q...)
- **P2TR** - Taproot addresses (bc1p...)

## Supported Networks

- **BITCOIN_MAINNET** - Bitcoin mainnet
- **BITCOIN_TESTNET** - Bitcoin testnet
- **BITCOIN_REGTEST** - Bitcoin regtest
- **BITCOIN_SIGNET** - Bitcoin signet

## RPC Methods

The following RPC methods are supported:

### Basic RPC Methods
- `getblock`
- `getblockchaininfo`
- `getrawtransaction`
- `sendrawtransaction`
- `decoderawtransaction`

### Wallet & Address Handling
- `getnewaddress`
- `getaddressinfo`
- `listaddressgroupings`

### Transaction Signing / Construction
- `createrawtransaction`
- `signrawtransactionwithkey`
- `fundrawtransaction`
- `sendtoaddress`

### UTXO & Funding Utilities
- `listunspent`
- `gettxout`
- `getbalance`

### Fee Estimation & Mempool
- `estimatesmartfee`
- `getmempoolinfo`

### PSBT Support
- `createpsbt`
- `walletcreatefundedpsbt`
- `finalizepsbt`
- `decodepsbt`
- `combinepsbt`
- `walletprocesspsbt`
