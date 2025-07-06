# Signing with Auth or OfflineSigner

The Cosmos signers in InterchainJS support two modes of operation:

1. **Auth-based signing**: You provide a private key directly
2. **OfflineSigner-based signing**: You provide an external signer interface (e.g., from Keplr, Leap, or other wallets)

## Auth-based Signing

When you have direct access to the private key, you can create signers using an `Auth` object:

```typescript
import { DirectSigner, AminoSigner } from '@interchainjs/cosmos';
import { Auth } from '@interchainjs/cosmos/types';

// Define your auth object
const auth: Auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: 'your-private-key-hex'
};

// Configuration for the chain
const config = {
  chainId: 'cosmoshub-4',
  addressPrefix: 'cosmos',
  gasPrice: { amount: '0.025', denom: 'uatom' },
  gasMultiplier: 1.3
};

// Create signers
const directSigner = new DirectSigner(auth, config);
const aminoSigner = new AminoSigner(auth, config);

// Sign a transaction
const signedTx = await directSigner.sign({
  messages: [...],
  fee: { amount: [{ amount: '5000', denom: 'uatom' }], gas: '200000' },
  memo: 'Test transaction'
});

// Broadcast the transaction
const result = await signedTx.broadcast();
```

## OfflineSigner-based Signing

When integrating with external wallets like Keplr, you can use the OfflineSigner interface:

```typescript
import { DirectSigner, AminoSigner } from '@interchainjs/cosmos';
import { OfflineDirectSigner, OfflineAminoSigner } from '@interchainjs/cosmos/types';

// Get the offline signer from Keplr (or other wallet)
await window.keplr.enable(chainId);
const offlineDirectSigner = window.keplr.getOfflineSigner(chainId);
const offlineAminoSigner = window.keplr.getOfflineSignerOnlyAmino(chainId);

// Create signers
const directSigner = new DirectSigner(offlineDirectSigner, config);
const aminoSigner = new AminoSigner(offlineAminoSigner, config);

// Sign and broadcast transactions the same way
const signedTx = await directSigner.sign({
  messages: [...],
  fee: { amount: [{ amount: '5000', denom: 'uatom' }], gas: '200000' },
  memo: 'Test transaction'
});
```

## Custom OfflineSigner Implementation

You can also implement your own OfflineSigner:

```typescript
import { OfflineDirectSigner, DirectSignResponse } from '@interchainjs/cosmos/types';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

const customOfflineSigner: OfflineDirectSigner = {
  getAccounts: async () => {
    return [{
      address: 'cosmos1...',
      algo: 'secp256k1',
      pubkey: new Uint8Array([...]) // Your public key bytes
    }];
  },
  
  signDirect: async (signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> => {
    // Your custom signing logic here
    // This could call out to a hardware wallet, remote signer, etc.
    
    return {
      signed: signDoc,
      signature: new Uint8Array([...]) // The signature bytes
    };
  }
};

const directSigner = new DirectSigner(customOfflineSigner, config);
```

## Checking the Signer Type

You can check what type of signer is being used:

```typescript
const authOrSigner = directSigner.getAuthOrSigner();

if ('algo' in authOrSigner && 'privateKey' in authOrSigner) {
  console.log('Using Auth-based signer');
} else if ('getAccounts' in authOrSigner) {
  console.log('Using OfflineSigner');
}
```

## Benefits

- **Security**: OfflineSigner keeps private keys secure in external wallets
- **Flexibility**: Switch between direct key management and wallet integration
- **Compatibility**: Works with popular Cosmos wallets like Keplr, Leap, etc.
- **Consistency**: Same API for signing regardless of the underlying implementation