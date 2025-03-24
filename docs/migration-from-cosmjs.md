# Migrating from CosmJS to @interchainjs/cosmos

This guide shows you how to migrate from CosmJS to the new InterchainJS SDK. The updated examples below follow the patterns used in our unit tests, with a special focus on wallet generation that completely removes any CosmJS dependency.

## 1. Overview

### Goal:
Replace CosmJS with @interchainjs/cosmos to sign, build, and broadcast transactions on Cosmos-based blockchains.

### Key Improvements:
- Wallet Generation: Create wallets using our own methods (using Secp256k1Auth and generateMnemonic) instead of CosmJS’s DirectSecp256k1HdWallet.
- Modular Imports: Import only the needed submodules to reduce bundle size.
- Unified Signer Interfaces: Use Direct (Protobuf) or Amino signing with a consistent API.


## 2. Installation

Remove CosmJS dependencies, then install the new SDK and its related packages:
``` shell
npm install @interchainjs/cosmos @interchainjs/auth @interchainjs/cosmos-types
```

## 3. Updated Wallet Generation

In the new SDK, you can generate a wallet using our own methods rather than relying on CosmJS. For example, the unit tests use:
- generateMnemonic – to create a mnemonic phrase.
- Secp256k1Auth.fromMnemonic – to derive authentication objects from the mnemonic.
- HDPath – to derive the correct HD paths for Cosmos.

Below is a sample code snippet illustrating the updated wallet generation:
``` typescript
// Import wallet and HD path utilities from the SDK packages
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { HDPath } from '@interchainjs/types';
// Assume generateMnemonic is exported from the SDK (or from a dedicated utility module)
import { generateMnemonic } from '@interchainjs/cosmos/utils';
// Import the DirectSigner from our SDK
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';

(async () => {
  // Generate a mnemonic using the SDK utility
  const mnemonic = generateMnemonic();

  // Derive authentication objects (wallet accounts) using the SDK's Secp256k1Auth
  // Here we derive the first account using the standard Cosmos HD path.
  const [auth] = Secp256k1Auth.fromMnemonic(mnemonic, [
    HDPath.cosmos(0, 0, 0).toString(),
  ]);

  // Prepare any encoders required for your message types; can be an empty array if not needed.
  const encoders = [];

  // Define your RPC endpoint (ensure it points to a working Cosmos RPC node)
  const rpcEndpoint = 'http://your-rpc-endpoint:26657';

  // Create a DirectSigner instance using the auth object and your RPC endpoint.
  // The options object can include chain-specific settings (like the bech32 prefix).
  const signer = new DirectSigner(auth, encoders, rpcEndpoint, {
    prefix: 'cosmos', // Replace with your chain's prefix if different
  });

  // Retrieve the wallet address from the signer
  const address = await signer.getAddress();
  console.log('Wallet address:', address);

  // ----- Transaction Example -----
  // Build your transaction message (e.g., a bank MsgSend). Refer to @interchainjs/cosmos-types for details.
  const msg = {
    // Example message object; adjust fields according to your chain and message type
    // For instance, if using bank.MsgSend, you would populate:
    // typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    // value: { fromAddress: address, toAddress: 'destination-address', amount: [{ denom: 'uatom', amount: '1000' }] }
  };

  // Sign and broadcast the transaction.
  // The signAndBroadcast method handles building the transaction and sending it over RPC.
  const result = await signer.signAndBroadcast([msg]);
  console.log('Transaction hash:', result.hash);
})();
```
Key Points:
- No CosmJS Dependency: The wallet is generated entirely using generateMnemonic and Secp256k1Auth.fromMnemonic.
- HDPath Usage: The HD path is derived using HDPath.cosmos(0, 0, 0).toString(), which follows the Cosmos standard.
- DirectSigner: Instantiated with the auth object and a set of encoders (which you can populate based on your message types).


## 4. Signer Usage & Transaction Construction

### Direct Signer Usage

Using the new DirectSigner to sign and broadcast transactions now follows this pattern:

``` typescript
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
// (Wallet generation code as shown above is assumed to have been run)

// Build your transaction message (e.g., a bank message)
const msg = {
  // Construct your message based on the schema from @interchainjs/cosmos-types
};

// Optionally, set fee and memo information
const fee = {
  amount: [
    {
      denom: 'uatom',
      amount: '5000',
    },
  ],
  gas: '200000',
};

// Sign and broadcast the transaction
const result = await signer.signAndBroadcast([msg], {
  fee,
  memo: 'migration transaction test',
});
console.log('Transaction hash:', result.hash);
```

### Amino Signer Usage

If you need Amino signing for legacy compatibility, the process is analogous:

``` typescript
import { AminoSigner } from '@interchainjs/cosmos/signers/amino';

(async () => {
  // Generate wallet using the same approach as above
  const mnemonic = generateMnemonic();
  const [auth] = Secp256k1Auth.fromMnemonic(mnemonic, [
    HDPath.cosmos(0, 0, 0).toString(),
  ]);
  const encoders = [];
  const rpcEndpoint = 'http://your-rpc-endpoint:26657';

  // Create an AminoSigner instance
  const aminoSigner = new AminoSigner(auth, encoders, rpcEndpoint, {
    prefix: 'cosmos',
  });

  // Build your message and set fee/memo if needed
  const msg = {
    // Your message fields here
  };

  const fee = {
    amount: [
      {
        denom: 'uatom',
        amount: '5000',
      },
    ],
    gas: '200000',
  };

  const result = await aminoSigner.signAndBroadcast([msg], {
    fee,
    memo: 'Amino transaction test',
  });
  console.log('Transaction hash:', result.hash);
})();
```

## 5. CosmJS Code Comparison
To highlight the migration improvements, here is a side-by-side comparison of the previous CosmJS implementation versus the new InterchainJS approach.
### Wallet Generation
#### CosmJS Implementation:
``` typescript
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { makeCosmoshubPath } from "@cosmjs/crypto";

(async () => {
  const mnemonic = "your mnemonic here";
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [makeCosmoshubPath(0)],
  });
  const [account] = await wallet.getAccounts();
  console.log("Wallet address:", account.address);
})();
```
#### InterchainJS Implementation:
``` typescript
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { HDPath } from '@interchainjs/types';
import { generateMnemonic } from '@interchainjs/cosmos/utils';

(async () => {
  const mnemonic = generateMnemonic();
  const [auth] = Secp256k1Auth.fromMnemonic(mnemonic, [
    HDPath.cosmos(0, 0, 0).toString(),
  ]);
  console.log("Wallet address:", await auth.getAddress());
})();
```
### Transaction Signing and Broadcasting
#### CosmJS Implementation:
``` typescript
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { makeCosmoshubPath } from "@cosmjs/crypto";

(async () => {
  const mnemonic = "your mnemonic here";
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [makeCosmoshubPath(0)],
  });
  const [account] = await wallet.getAccounts();
  const rpcEndpoint = 'http://your-rpc-endpoint:26657';
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);
  
  const msg = {
    // Construct your message here
  };
  const fee = {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000',
  };
  const memo = "CosmJS transaction test";
  
  const result = await client.signAndBroadcast(account.address, [msg], fee, memo);
  console.log("Transaction hash:", result.transactionHash);
})();
```
#### InterchainJS Implementation:
``` typescript
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';

(async () => {
  // Assume wallet generation using InterchainJS methods as shown earlier has been completed.
  
  const msg = {
    // Construct your message here using @interchainjs/cosmos-types
  };
  const fee = {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000',
  };
  const memo = "InterchainJS transaction test";
  
  const result = await signer.signAndBroadcast([msg], { fee, memo });
  console.log("Transaction hash:", result.hash);
})();
```

## 6. Migration Steps Summary
1. Update Dependencies:
  - Remove CosmJS dependencies.
  - Install @interchainjs/cosmos, @interchainjs/auth, and @interchainjs/cosmos-types.

2. Change Imports:
  - Replace any CosmJS imports with the new SDK sub-module imports.
  - For wallet generation, use:
``` typescript
import { generateMnemonic } from '@interchainjs/cosmos/utils';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { HDPath } from '@interchainjs/types';
```

3. Wallet Generation:
  - Generate a mnemonic using generateMnemonic().
  - Derive auth objects using Secp256k1Auth.fromMnemonic().
  - Note: This method completely avoids any dependency on CosmJS wallet implementations.
4. Adapt Signer Interfaces:
  - Use DirectSigner.fromWallet or create a new instance with your auth object.
  - If needed, use AminoSigner for legacy signing.
5. Rebuild Transaction Construction:
  - Replace CosmJS transaction building logic with the new SDK’s TxBuilder (accessed via signer.getTxBuilder()).
  - Use message constructors and encoders from @interchainjs/cosmos-types.
6. Test Thoroughly:
  - Validate transactions on testnets.
  - Compare fee, gas, memo, and signature details against expected values.

## 6. Conclusion

This updated migration guide demonstrates how to generate wallets and sign transactions using the new InterchainJS SDK without any dependency on CosmJS. By leveraging built-in utilities such as generateMnemonic, Secp256k1Auth.fromMnemonic, and HDPath, your application can fully transition to a modern, modular, and lightweight approach to interacting with Cosmos blockchains.

For further details, refer to the GitHub repository README and unit tests (e.g., [token.test.ts](../networks/cosmos/starship/__tests__/token.test.ts)).

Happy migrating!