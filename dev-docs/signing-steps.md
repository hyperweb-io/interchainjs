# Cosmos Chain Signing Steps - Detailed Code Breakdown

This document provides an extremely detailed, line-by-line breakdown of the Cosmos chain signing process in InterchainJS, with specific code references and method call flows.

## Architecture Overview

The signing process involves multiple classes working together:

- **`CosmosBaseSigner<SignDoc>`** (`base-signer.ts:89-420`): Main orchestrator
- **`BaseCosmosTxBuilder<SignDoc>`** (`tx-builder.ts:57-229`): Transaction building logic
- **`DirectTxBuilder`** (`direct-tx-builder.ts:25-64`): Direct signing implementation
- **`AminoTxBuilder`** (`amino-tx-builder.ts:22-76`): Amino signing implementation

## Detailed Step-by-Step Flow

### Phase 1: Signer Initialization

```typescript
const signer = new CosmosBaseSigner(auth, encoders, endpoint, options, broadcastOptions);
```

**Code Flow:**
1. **Constructor** (`base-signer.ts:135-155`):
   ```typescript
   constructor(auth: Auth, encoders: Encoder[], endpoint?: string | HttpEndpoint,
              options?: SignerOptions, broadcastOptions?: BroadcastOptions)
   ```
   - Line 146: `super(auth, { ...defaultSignerOptions, ...options })`
   - Line 147: `this.encoders = encoders`
   - Line 148-151: Set parseAccount and _encodePublicKey from options
   - Line 152: `this.prefix = options?.prefix`
   - Line 153: `this.broadcastOptions = broadcastOptions`
   - Line 154-156: Call `setEndpoint()` if endpoint provided
   - Line 158: `this.txBuilder = this.getTxBuilder()` (calls abstract method)

2. **setEndpoint()** (`base-signer.ts:241-244`):
   ```typescript
   setEndpoint(endpoint: string | HttpEndpoint) {
     this._queryClient = new RpcClient(endpoint, this.prefix);
     (this._queryClient as RpcClient).setAccountParser(this.parseAccount);
   }
   ```

### Phase 2: Sign Method Entry Point

```typescript
const result = await signer.sign(args);
```

**Code Flow:**
1. **sign()** method (`base-signer.ts:258-268`):
   ```typescript
   async sign(args: CosmosSignArgs): Promise<SignResponse<TxRaw, SignDoc, DeliverTxResponse>> {
     const signed = await this.txBuilder.buildSignedTxDoc(args); // Line 259

     return {                    // Line 261-267
       ...signed,
       broadcast: async (options?: BroadcastOptions) => {
         return this.broadcast(signed.tx, options);
       },
     };
   }
   ```

### Phase 3: Transaction Building (`buildSignedTxDoc`)

**Entry Point:** `BaseCosmosTxBuilder.buildSignedTxDoc()` (`tx-builder.ts:194-211`)

```typescript
async buildSignedTxDoc({ messages, fee, memo, options }: CosmosSignArgs): Promise<CosmosCreateDocResponse<SignDoc>> {
  // create partial TxRaw
  const txRaw = await this.buildTxRaw({ messages, fee, memo, options }); // Line 199

  // buildDoc
  const doc = await this.buildDoc({ messages, fee: fee ?? txRaw.fee, memo, options }, txRaw); // Line 202

  // sign signature to the doc bytes
  const signResp = await this.ctx.signer.signDoc(doc); // Line 205

  // build TxRaw and sync with signed doc
  const signedTxRaw = await this.syncSignedDoc(TxRaw.fromPartial(txRaw), signResp); // Line 208

  return { tx: signedTxRaw, doc: doc }; // Line 210
}
```

#### Step 3.1: Build TxRaw (`buildTxRaw`)

**Method:** `BaseCosmosTxBuilder.buildTxRaw()` (`tx-builder.ts:87-125`)

```typescript
async buildTxRaw({ messages, fee, memo, options }: CosmosSignArgs): Promise<Partial<TxRaw> & { fee: StdFee }> {
  const { txBody, encode: txBodyEncode } = await this.buildTxBody({
    messages, memo, options,
  }); // Lines 92-95

  const { signerInfo } = await this.buildSignerInfo(
    this.ctx.signer.encodedPublicKey,
    options?.sequence ?? (await this.ctx.signer.queryClient.getSequence(
      await this.ctx.signer.getAddress()
    )),
    this.signMode
  ); // Lines 96-103

  const stdFee = await this.getFee(fee, txBody, [signerInfo], options); // Line 105

  const { authInfo, encode: authEncode} = await this.buildAuthInfo([signerInfo], toFee(stdFee)); // Line 107

  this.ctx.setStagingData(STAGING_AUTH_INFO, authInfo); // Line 109

  return {
    bodyBytes: txBodyEncode(),
    authInfoBytes: authEncode(),
    fee: stdFee,
  }; // Lines 111-115
}
```

##### Step 3.1.1: Build TxBody (`buildTxBody`)

**Method:** `BaseCosmosTxBuilder.buildTxBody()` (`tx-builder.ts:127-148`)

```typescript
async buildTxBody({ messages, memo, options }: CosmosSignArgs): Promise<{
  txBody: TxBody; encode: () => Uint8Array;
}> {
  if (options?.timeoutHeight?.type === 'relative') { // Lines 130-134
    throw new Error("timeoutHeight type shouldn't be `relative`");
  }

  const encoded = messages.map(({ typeUrl, value }) => { // Lines 135-140
    return {
      typeUrl,
      value: this.ctx.signer.getEncoder(typeUrl).encode(value),
    };
  });

  const txBody = TxBody.fromPartial({ // Lines 141-147
    messages: encoded,
    memo,
    timeoutHeight: options?.timeoutHeight?.value,
    extensionOptions: options?.extensionOptions,
    nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
  });

  return {
    txBody,
    encode: () => TxBody.encode(txBody).finish(),
  };
}
```

**Detailed Sub-steps:**
1. **Message Encoding** (Lines 135-140):
   - For each message in `messages` array
   - Call `this.ctx.signer.getEncoder(typeUrl)` (`base-signer.ts:199-210`)
   - Execute `encoder.encode(value)` to serialize message to bytes

2. **TxBody Creation** (Lines 141-147):
   - Create `TxBody` protobuf object with:
     - `messages`: Array of encoded messages
     - `memo`: Transaction memo string
     - `timeoutHeight`: Absolute timeout height
     - Extension options (if any)

##### Step 3.1.2: Build SignerInfo (`buildSignerInfo`)

**Method:** `BaseCosmosTxBuilder.buildSignerInfo()` (`tx-builder.ts:150-164`)

```typescript
async buildSignerInfo(publicKey: EncodedMessage, sequence: bigint, signMode: SignMode): Promise<{
  signerInfo: SignerInfo; encode: () => Uint8Array;
}> {
  const signerInfo = SignerInfo.fromPartial({ // Lines 155-159
    publicKey,
    sequence,
    modeInfo: { single: { mode: signMode } },
  });

  return { signerInfo, encode: () => SignerInfo.encode(signerInfo).finish() }; // Line 161
}
```

**Key Details:**
- **Public Key**: Retrieved from `this.ctx.signer.encodedPublicKey` (`base-signer.ts:162-164`)
- **Sequence**: Either from options or fetched via `queryClient.getSequence(address)`
- **Sign Mode**: Default is `SignMode.SIGN_MODE_DIRECT`

##### Step 3.1.3: Fee Handling (`getFee`)

**Method:** `BaseCosmosTxBuilder.getFee()` (`tx-builder.ts:175-190`)

```typescript
async getFee(fee: StdFee, txBody: TxBody, signerInfos: SignerInfo[], options: DocOptions) {
  if (fee) {        // Line 180
    return fee;     // If fee provided, use it directly
  }

  const { gasInfo } = await this.ctx.signer.simulateByTxBody(txBody, signerInfos); // Lines 181-184
  if (typeof gasInfo === 'undefined') { // Line 185
    throw new Error('Fail to estimate gas by simulate tx.');
  }

  return await calculateFee(gasInfo, options, async () => { // Lines 188-190
    return this.ctx.signer.queryClient.getChainId();
  });
}
```

**Gas Simulation Flow:**
1. **simulateByTxBody()** (`base-signer.ts:382-384`):
   ```typescript
   async simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]) {
     return await this.queryClient.simulate(txBody, signerInfos);
   }
   ```

2. **Fee Calculation**: Use `calculateFee()` utility with gas info and chain parameters

##### Step 3.1.4: Build AuthInfo (`buildAuthInfo`)

**Method:** `BaseCosmosTxBuilder.buildAuthInfo()` (`tx-builder.ts:166-173`)

```typescript
async buildAuthInfo(signerInfos: SignerInfo[], fee: Fee): Promise<{
  authInfo: AuthInfo; encode: () => Uint8Array;
}> {
  const authInfo = AuthInfo.fromPartial({ signerInfos, fee }); // Line 171

  return { authInfo, encode: () => AuthInfo.encode(authInfo).finish() }; // Line 173
}
```

#### Step 3.2: Build Sign Document (`buildDoc`)

This is **abstract method implemented differently** for Direct vs Amino signing:

##### For Direct Signing (`DirectTxBuilder.buildDoc`)

**Method:** `DirectTxBuilder.buildDoc()` (`direct-tx-builder.ts:32-50`)

```typescript
async buildDoc({ options }: CosmosSignArgs, txRaw: Partial<TxRaw>): Promise<CosmosDirectDoc> {
  const signDoc: CosmosDirectDoc = SignDoc.fromPartial({ // Lines 36-46
    bodyBytes: txRaw.bodyBytes,
    authInfoBytes: txRaw.authInfoBytes,
    chainId: options?.chainId ?? (await this.ctx.signer.queryClient.getChainId()),
    accountNumber: options?.accountNumber ??
      (await this.ctx.signer.queryClient.getAccountNumber(
        await this.ctx.signer.getAddress()
      )),
  });
  return signDoc; // Line 47
}
```

**Chain Data Fetching:**
- **Chain ID**: From options OR `queryClient.getChainId()`
- **Account Number**: From options OR `queryClient.getAccountNumber(address)`

##### For Amino Signing (`AminoTxBuilder.buildDoc`)

**Method:** `AminoTxBuilder.buildDoc()` (`amino-tx-builder.ts:28-51`)

```typescript
async buildDoc({ messages, fee, memo, options }: CosmosSignArgs): Promise<CosmosAminoDoc> {
  const signDoc: CosmosAminoDoc = { // Lines 32-45
    chain_id: options?.chainId ?? (await this.ctx.signer.queryClient.getChainId()),
    account_number: (options?.accountNumber ??
      (await this.ctx.signer.queryClient.getAccountNumber(
        await this.ctx.signer.getAddress()
      ))
    ).toString(),
    sequence: (options?.sequence ??
      (await this.ctx.signer.queryClient.getSequence(
        await this.ctx.signer.getAddress()
      ))
    ).toString(),
    fee,
    msgs: toAminoMsgs(messages, this.ctx.signer.getConverterFromTypeUrl),
    memo: memo ?? '',
  };
  return signDoc; // Line 46
}
```

#### Step 3.3: Document Signing (`signDoc`)

**Entry Point:** `CosmosDocSigner.signDoc()` (`base-signer.ts:72-84`)

```typescript
async signDoc(doc: TDoc): Promise<SignDocResponse<TDoc>> {
  if (isDocAuth<TDoc>(this.auth)) {      // Line 73
    return await this.auth.signDoc(doc); // Line 74 - Delegate to auth
  } else {
    const sig = await this.txBuilder.buildSignature(doc); // Line 76

    return {          // Line 78-81
      signature: sig,
      signDoc: doc,
    };
  }
}
```

**Two Paths:**
1. **DocAuth Path**: If auth implements `signDoc`, delegate to it
2. **Builder Path**: Use transaction builder's signature building

##### Signature Building (`buildSignature`)

**Method:** `BaseCosmosSigBuilder.buildSignature()` (`tx-builder.ts:45-53`)

```typescript
async buildSignature(doc: SignDoc): Promise<IKey> {
  // get doc bytes
  const docBytes = await this.buildDocBytes(doc); // Line 47

  // sign signature to the doc bytes
  return this.ctx.signer.signArbitrary(docBytes); // Line 50
}
```

##### Document Bytes Generation (`buildDocBytes`)

**Implementation varies by signing mode:**

**For Direct Signing** (`DirectTxBuilder.buildDocBytes`) (`direct-tx-builder.ts:52-54`):
```typescript
async buildDocBytes(doc: CosmosDirectDoc): Promise<Uint8Array> {
  return SignDoc.encode(doc).finish(); // Protobuf encoding
}
```

**For Amino Signing** (`AminoTxBuilder.buildDocBytes`) (`amino-tx-builder.ts:53-55`):
```typescript
async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
  return encodeStdSignDoc(doc); // JSON deterministic encoding
}
```

##### Cryptographic Signing (`signArbitrary`)

This calls the underlying auth's `signArbitrary(docBytes)` method, which:
1. Takes the document bytes
2. Applies the cryptographic signature algorithm (e.g., ECDSA with secp256k1)
3. Returns signature as `IKey` object

#### Step 3.4: Sync Signed Document (`syncSignedDoc`)

**Purpose**: Combine the partial `TxRaw` with the signature to create final `TxRaw`

##### For Direct Signing (`DirectTxBuilder.syncSignedDoc`)

**Method:** `DirectTxBuilder.syncSignedDoc()` (`direct-tx-builder.ts:56-62`)

```typescript
async syncSignedDoc(txRaw: TxRaw, signResp: SignDocResponse<CosmosDirectDoc>): Promise<TxRaw> {
  return {
    bodyBytes: signResp.signDoc.bodyBytes,      // Line 58
    authInfoBytes: signResp.signDoc.authInfoBytes, // Line 59
    signatures: [signResp.signature.value],      // Line 60
  };
}
```

##### For Amino Signing (`AminoTxBuilder.syncSignedDoc`)

**Method:** `AminoTxBuilder.syncSignedDoc()` (`amino-tx-builder.ts:57-70`)

```typescript
async syncSignedDoc(txRaw: TxRaw, signResp: SignDocResponse<CosmosAminoDoc>): Promise<TxRaw> {
  const authFee = toFee(signResp.signDoc.fee);  // Line 58
  const authInfo = this.ctx.getStagingData<AuthInfo>(STAGING_AUTH_INFO); // Line 59

  const { encode: authEncode } = await this.buildAuthInfo(authInfo.signerInfos, authFee); // Line 61
  const authInfoBytes = authEncode(); // Line 62

  return {
    bodyBytes: txRaw.bodyBytes,       // Line 64
    authInfoBytes: authInfoBytes,     // Line 65
    signatures: [ signResp.signature.value ] // Line 66
  };
}
```

**Key Difference**: Amino signing must rebuild `AuthInfo` with the fee from the signed document.

### Phase 4: Response Preparation

**Final Result** (`tx-builder.ts:210`):
```typescript
return {
  tx: signedTxRaw,  // Complete TxRaw ready for broadcasting
  doc: doc,         // Original sign document
};
```

**Wrapped in Sign Response** (`base-signer.ts:261-267`):
```typescript
return {
  ...signed,        // tx and doc
  broadcast: async (options?: BroadcastOptions) => {
    return this.broadcast(signed.tx, options);
  },
};
```

### Phase 5: Broadcasting (Optional)

If `broadcast()` method is called:

#### Step 5.1: Encode TxRaw (`broadcast`)

**Method:** `CosmosBaseSigner.broadcast()` (`base-signer.ts:275-280`)

```typescript
async broadcast(txRaw: TxRaw, options?: BroadcastOptions) {
  return this.broadcastArbitrary(
    TxRaw.encode(TxRaw.fromPartial(txRaw)).finish(), // Line 277
    options
  );
}
```

#### Step 5.2: Submit to Chain (`broadcastArbitrary`)

**Method:** `CosmosBaseSigner.broadcastArbitrary()` (`base-signer.ts:285-288`)

```typescript
async broadcastArbitrary(message: Uint8Array, options?: BroadcastOptions) {
  const result = await this.queryClient.broadcast(message, options); // Line 286
  return result;
}
```

## Error Handling Points

### Common Failure Points:

1. **Missing Encoder** (`base-signer.ts:199-210`):
   ```typescript
   getEncoder = (typeUrl: string) => {
     const encoder = this.encoders.find((encoder) => encoder.typeUrl === typeUrl);
     if (!encoder) {
       throw new Error(`No such Encoder for typeUrl ${typeUrl}`);
     }
     return encoder;
   }
   ```

2. **Gas Estimation Failure** (`tx-builder.ts:185-187`):
   ```typescript
   if (typeof gasInfo === 'undefined') {
     throw new Error('Fail to estimate gas by simulate tx.');
   }
   ```

3. **Account Resolution** (`base-signer.ts:233-239`):
   ```typescript
   if (opts.createAccount) {
     return new opts.createAccount(/* ... */);
   } else {
     throw new Error('No account creator is provided');
   }
   ```

## Key Data Structures

### TxRaw Structure
```typescript
interface TxRaw {
  bodyBytes: Uint8Array;     // Encoded TxBody
  authInfoBytes: Uint8Array; // Encoded AuthInfo
  signatures: Uint8Array[];  // Array of signatures
}
```

### SignDoc Structure (Direct)
```typescript
interface SignDoc {
  bodyBytes: Uint8Array;     // Same as TxRaw.bodyBytes
  authInfoBytes: Uint8Array; // Same as TxRaw.authInfoBytes
  chainId: string;           // Chain identifier
  accountNumber: bigint;     // Account number from chain
}
```

### StdSignDoc Structure (Amino)
```typescript
interface StdSignDoc {
  chain_id: string;
  account_number: string;
  sequence: string;
  fee: StdFee;
  msgs: AminoMsg[];
  memo: string;
}
```

This detailed breakdown shows the exact method call flow, line numbers, and data transformations that occur during Cosmos transaction signing in InterchainJS.

# Implementation Changes Summary

## What Was Changed

### 1. Base Plugin Architecture (`packages/types/src/base-builder.ts`)
- **Before**: Abstract `retrieveParams()` method required manual implementation in every plugin
- **After**: Common `retrieveParams()` implementation with customization hooks

### 2. Constructor Changes
```typescript
// Before
constructor(options: PluginOptions = {}) {
  super(options);
}

// After
constructor(options: PluginOptions = {}) {
  const dependencies = ['dependency1', 'dependency2'];
  super(dependencies, options);
}
```

### 3. Plugin Customization Hooks
- **`onValidate(key, value)`**: Custom validation per dependency
- **`onParam(key, value)`**: Transform dependency values
- **`afterRetrieveParams(params)`**: Convert Record to typed params

### 4. All Cosmos Plugins Updated
Updated 7 plugins in `networks/cosmos/src/plugins/`:
- `tx-body-plugin.ts`
- `signer-info-plugin.ts`
- `fee-plugin.ts`
- `auth-info-plugin.ts`
- `document-plugin.ts`
- `signature-plugin.ts`
- `final-result-plugin.ts`

## Results

### ✅ Working Implementation
- All plugins compile successfully
- Full monorepo builds without errors
- Cosmos builders work correctly
- Existing functionality preserved

### ✅ Reduced Boilerplate
- **Simple plugins**: 8 lines vs 15+ lines
- **Complex plugins**: 15 lines vs 24+ lines
- **Declarative dependencies**: Clear in constructor
- **Automatic key conversion**: snake_case → camelCase

### ✅ Better Architecture
- **Consistent patterns**: Same hooks across all plugins
- **Type safety**: Full TypeScript support maintained
- **Easier testing**: Dependencies are explicit
- **Clear separation**: Validation, transformation, business logic

## Developer Experience

### For Simple Plugins
```typescript
export class SimplePlugin extends BasePlugin<MyParams, Context> {
  constructor() {
    super(['dependency1', 'dependency2'], {});
  }

  // retrieveParams() automatically implemented!
  // Results in: { dependency1, dependency2 }
}
```

### For Complex Plugins
```typescript
export class ComplexPlugin extends BasePlugin<MyParams, Context> {
  constructor(options: Options = {}) {
    super(['raw_data'], options);
  }

  protected onValidate(key: string, value: unknown): void {
    // Custom validation
  }

  protected onParam(key: string, value: unknown): unknown {
    // Transform raw data
  }

  protected afterRetrieveParams(params: Record<string, unknown>): MyParams {
    // Convert to typed params
  }
}
```

This implementation successfully demonstrates the viability of the common `retrieveParams()` pattern for real-world plugin development.
