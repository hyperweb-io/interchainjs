# Auth and OfflineSigner Integration

## Overview

The Cosmos signers have been updated to accept either an `Auth` object (containing a private key) or an `OfflineSigner` interface (for external wallet integration) in their constructors. The workflow automatically detects which type is being used and routes to the appropriate signing method.

## Changes Made

### 1. Updated Base Signer Constructor

The `BaseCosmosSignerImpl` constructor now accepts `Auth | OfflineSigner` instead of `CosmosWallet`:

```typescript
constructor(authOrSigner: Auth | OfflineSigner, config: CosmosSignerConfig) {
  this.authOrSigner = authOrSigner;
  this.wallet = WalletAdapter.fromAuthOrSigner(authOrSigner, config.addressPrefix);
  this.config = config;
}
```

### 2. Added Type Guards

Added type guard functions in `types.ts`:

```typescript
export function isAuth(obj: any): obj is Auth {
  return obj && typeof obj.algo === 'string' && typeof obj.privateKey === 'string';
}

export function isOfflineDirectSigner(obj: any): obj is OfflineDirectSigner {
  return obj && typeof obj.signDirect === 'function' && typeof obj.getAccounts === 'function';
}

export function isOfflineAminoSigner(obj: any): obj is OfflineAminoSigner {
  return obj && typeof obj.signAmino === 'function' && typeof obj.getAccounts === 'function';
}
```

### 3. Created Separate Signature Plugins

Created two separate signature plugins for direct and amino signing:

#### DirectSignaturePlugin

```typescript
export class DirectSignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureInput,
  CosmosWorkflowBuilderContext
> {
  protected async onBuild(ctx: CosmosWorkflowBuilderContext, params: SignatureInput): Promise<void> {
    const signer = ctx.getSigner();
    const authOrSigner = signer.getAuthOrSigner();
    
    if (isAuth(authOrSigner)) {
      // Auth path: sign bytes directly
      const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);
      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else if (isOfflineDirectSigner(authOrSigner)) {
      // OfflineDirectSigner path: use signDirect with SignDoc
      const signDoc = ctx.getStagingData<SignDoc>(STAGING_KEYS.SIGN_DOC);
      const account = await signer.getAccount();
      const response = await authOrSigner.signDirect(account.address, signDoc);
      
      // Update staging data with values from the response
      // The offline signer might have modified the transaction
      if (response.signed.bodyBytes) {
        ctx.setStagingData(STAGING_KEYS.TX_BODY_BYTES, response.signed.bodyBytes);
      }
      if (response.signed.authInfoBytes) {
        ctx.setStagingData(STAGING_KEYS.AUTH_INFO_BYTES, response.signed.authInfoBytes);
      }
      
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, BaseCryptoBytes.from(response.signature));
    }
  }
}
```

#### AminoSignaturePlugin

```typescript
export class AminoSignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureInput,
  CosmosWorkflowBuilderContext
> {
  protected async onBuild(ctx: CosmosWorkflowBuilderContext, params: SignatureInput): Promise<void> {
    const signer = ctx.getSigner();
    const authOrSigner = signer.getAuthOrSigner();
    
    if (isAuth(authOrSigner)) {
      // Auth path: sign bytes directly
      const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);
      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else if (isOfflineAminoSigner(authOrSigner)) {
      // OfflineAminoSigner path: use signAmino with StdSignDoc
      const signDoc = ctx.getStagingData<StdSignDoc>(STAGING_KEYS.SIGN_DOC);
      const account = await signer.getAccount();
      const response = await authOrSigner.signAmino(account.address, signDoc);
      
      // Update fee if it was modified by the offline signer
      if (response.signed.fee) {
        // Convert StdFee to Fee protobuf and update auth info
        const fee: Fee = {
          amount: response.signed.fee.amount.map(coin => ({
            denom: coin.denom,
            amount: coin.amount
          })),
          gasLimit: BigInt(response.signed.fee.gas),
          payer: '',
          granter: ''
        };
        ctx.setStagingData(STAGING_KEYS.FEE, fee);
        
        // Recalculate auth info with the new fee
        const signerInfo = ctx.getStagingData<SignerInfo>(STAGING_KEYS.SIGNER_INFO);
        const authInfo: AuthInfo = {
          signerInfos: [signerInfo],
          fee,
          tip: undefined
        };
        
        // Update auth info and its bytes
        ctx.setStagingData(STAGING_KEYS.AUTH_INFO, authInfo);
        const authInfoBytes = AuthInfo.encode(authInfo).finish();
        ctx.setStagingData(STAGING_KEYS.AUTH_INFO_BYTES, authInfoBytes);
      }
      
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, BaseCryptoBytes.from(response.signature));
    }
  }
}
```

### 4. Added getAuthOrSigner Method

Added a public method to access the underlying auth or signer:

```typescript
getAuthOrSigner(): Auth | OfflineSigner {
  return this.authOrSigner;
}
```

## Usage Examples

### Using Auth (Private Key)

```typescript
const auth: Auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: '0x...'
};

const directSigner = new DirectSigner(auth, config);
const aminoSigner = new AminoSigner(auth, config);
```

### Using OfflineSigner (External Wallet)

```typescript
// For direct signing
const offlineDirectSigner: OfflineDirectSigner = {
  getAccounts: async () => [...],
  signDirect: async (address, signDoc) => {...}
};

const directSigner = new DirectSigner(offlineDirectSigner, config);

// For amino signing
const offlineAminoSigner: OfflineAminoSigner = {
  getAccounts: async () => [...],
  signAmino: async (address, signDoc) => {...}
};

const aminoSigner = new AminoSigner(offlineAminoSigner, config);
```

## Implementation Details

### Workflow Integration

The signing logic is handled by separate signature plugins in the workflow:

1. **DirectSignaturePlugin**: Used in the direct workflow
   - For Auth: Uses `signArbitrary` to sign the serialized sign doc bytes
   - For OfflineDirectSigner: 
     - Calls `signDirect` with the SignDoc object
     - Updates `TX_BODY_BYTES` and `AUTH_INFO_BYTES` in staging data from the response
     - This allows the offline signer to modify the transaction if needed

2. **AminoSignaturePlugin**: Used in the amino workflow
   - For Auth: Uses `signArbitrary` to sign the serialized sign doc bytes
   - For OfflineAminoSigner: 
     - Calls `signAmino` with the StdSignDoc object
     - If the fee was modified, recalculates and updates the auth info
     - Updates `FEE`, `AUTH_INFO`, and `AUTH_INFO_BYTES` in staging data
     - This ensures the final transaction uses the fee approved by the user

This separation ensures that each workflow uses the appropriate signing method and properly handles any modifications made by the offline signer.

### Type Safety

The implementation uses TypeScript type guards to ensure type safety at runtime when determining which signing path to use.

## Benefits

1. **Flexibility**: Supports both direct key management and external wallet integration
2. **Backward Compatibility**: Existing workflows continue to work unchanged
3. **Type Safety**: Strong typing ensures correct usage
4. **Clean Architecture**: Clear separation between Auth-based and OfflineSigner-based signing