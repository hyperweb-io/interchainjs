# workflows

## Types

### Auth

```ts
export interface Auth {
  algo: string;
  getPublicKey: (isCompressed?: boolean) => IKey;
  sign: (data: Uint8Array) => Signature;
  verify?: (data: Uint8Array, signature: Signature) => boolean;
}
```

### SignerOptions

```ts
cosmos signer options
export interface SignerOptions extends Partial<SignerConfig> {
  parseAccount?: (encodedAccount: EncodedMessage) => BaseAccount;
  encodePublicKey?: (key: IKey) => EncodedMessage;
}

export interface SignerConfig {
  publicKey: {
    isCompressed: boolean;
    hash(publicKey: IKey): IKey;
  };
  message: {
    /**
     * method to hash arbitrary message in methods with `Arbitrary` in name. i.e.
     * - signArbitrary
     * - verifyArbitrary
     * - broadcastArbitrary
     */
    hash(data: Uint8Array): Uint8Array;
  };
  signature: {
    fromCompact(key: IKey, algo: string): Signature;
    toCompact(signature: Signature, algo: string): IKey;
  };
}
```

## Procedures

### Cosmos

#### DirectSigner

##### constructors

constructor(auth: Auth, encoders, endpoint, options: SignerOptions)

fromWallet

toWallet

##### sign

- createDoc, to get signDoc and tx
- signDoc, to get signature and signDoc
- get tx content, to return signature, signDoc, tx content, and broadcast func

##### broadcast

- broadcastArbitrary, to broadcast uint8array

##### misc
