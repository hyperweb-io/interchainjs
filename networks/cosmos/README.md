# @interchainjs/cosmos

<p
  align="center"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
  }}
>
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

Transaction codec and client to communicate with any cosmos blockchain.

## Usage

```sh
npm install @interchainjs/cosmos
```

Example for signing client here:

```ts
import { SigningClient as CosmosSigningClient } from "@interchainjs/cosmos/signing-client";

const signingClient = await CosmosSigningClient.connectWithSigner(
  await getRpcEndpoint(),
  new DirectGenericOfflineSigner(directSigner),
  {
    registry: [
      // as many as possible encoders registered here.
      MsgDelegate,
      MsgSend,
    ],
    broadcast: {
      checkTx: true,
    },
  }
);

// sign and broadcast
const result = await signingClient.signAndBroadcast(<MESSAGE>[]);
console.log(result.hash); // the hash of TxRaw
```

Or use the tree shakable helper functions (**Most Recommended**) we generate in interchainjs libs:

```ts
import { SigningClient as CosmosSigningClient } from "@interchainjs/cosmos/signing-client";
import { submitProposal } from "interchainjs/cosmos/gov/v1beta1/tx.rpc.func";

const signingClient = await CosmosSigningClient.connectWithSigner(
  await getRpcEndpoint(),
  new DirectGenericOfflineSigner(directSigner),
  {
    // no registry needed here anymore
    // registry: [
    // ],
    broadcast: {
      checkTx: true,
    },
  }
);

// Necessary typeurl and codecs will be registered automatically in the helper functions. Meaning users don't have to register them all at once.
const result = await submitProposal(
  signingClient,
  directAddress,
  {
    proposer: directAddress,
    initialDeposit: [
      {
        amount: "1000000",
        denom: denom,
      },
    ],
    content: {
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode(contentMsg).finish(),
    },
  },
  fee,
  "submit proposal"
);
console.log(result.hash); // the hash of TxRaw
```

Examples for direct and amino signers here:

```ts
import { DirectSigner } from "@interchainjs/cosmos/signers/direct";

// const signer = new DirectSigner(<AUTH>, <ENCODER>[], <RPC_ENDPOINT>); // **ONLY** rpc endpoint is supported for now
const signer = new DirectSigner(
  directAuth,
  // as many as possible encoders registered here.
  [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
  rpcEndpoint,
  { prefix: chainInfo.chain.bech32_prefix }
);
const aminoSigner = new AminoSigner(
  aminoAuth,
  // as many as possible encoders registered here.
  [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
  // as many as possible converters registered here.
  [MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote],
  rpcEndpoint,
  { prefix: chainInfo.chain.bech32_prefix }
);
const result = await signer.signAndBroadcast(<MESSAGE>[]);
console.log(result.hash); // the hash of TxRaw
```

- See [@interchainjs/auth](/packages/auth/README.md) to construct `<AUTH>`
- See [@interchainjs/cosmos-types](/networks/cosmos-msgs/README.md) to construct `<ENCODER>`s and `<CONVERTER>`s, and also different message types.

### Using InterchanJS in the `Frontend`
```sh
npm install interchainjs @interchainjs/cosmos @interchainjs/math @chain-registry/v2
```
```ts
import { SigningClient } from "@interchainjs/cosmos/signing-client";
import { AminoGenericOfflineSigner, OfflineAminoSigner, OfflineDirectSigner, DirectGenericOfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx'
import { send } from "interchainjs/cosmos/bank/v1beta1/tx.rpc.func";

// Get Keplr offline signer
const keplrOfflineSigner = window.keplr.getOfflineSigner(chainId);
const offlineSigner = new DirectGenericOfflineSigner(keplrOfflineSigner);

// Create signing client
const signingClient = await SigningClient.connectWithSigner(
  rpcEndpoint,
  offlineSigner,
  {
    broadcast: {
      checkTx: true,
      deliverTx: true
    }
  }
);
signingClient.addEncoders([MsgSend])
signingClient.addConverters([MsgSend])

// Get account info
const accounts = await offlineSigner.getAccounts();
const senderAddress = accounts[0].address;

// Build transfer message
const amount = [{
  denom: "uatom",
  amount: (parseFloat(form.amount) * 1000000).toString() // Convert to uatom
}]
const transferMsg = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: {
    fromAddress: senderAddress,
    toAddress: form.toAddress,
    amount
  }
};

// Set fee
const fee = {
  amount: [{
    denom: "uatom",
    amount: "5000" // 0.005 ATOM fee
  }],
  gas: "200000"
};

// Sign and broadcast transaction
const result = await signingClient.signAndBroadcast(
  senderAddress,
  [transferMsg],
  fee,
  form.memo || "Transfer ATOM via InterchainJS"
);

// or use the send function
// const result = await send(
//   signingClient,
//   senderAddress,
//   { fromAddress: senderAddress, toAddress: form.toAddress, amount },
//   fee,
//   form.memo || "Transfer ATOM via InterchainJS"
// );

console.log(result.transactionHash);
```

## Implementations

- **direct signer** from `@interchainjs/cosmos/signers/direct`
- **amino signer** from `@interchainjs/cosmos/signers/amino`

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

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
