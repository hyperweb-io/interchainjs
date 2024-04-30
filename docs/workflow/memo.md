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

###

### SignerOptions

## Procedures

### Cosmos

#### DirectSigner

constructor(auth: Auth, encoders, endpoint, options: SignerOptions)
