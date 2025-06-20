# Transaction Builder Architecture

This document explains the refactored transaction builder architecture that provides a strict typing system with plugin-based modularity.

## Design Principles

1. **Strict Typing**: No `any` types, uses `unknown` when type is not determined
2. **Plugin-based**: Builders use a series of plugins to handle different aspects of transaction building
3. **Extensible**: Easy to add new signing modes or customize behavior
4. **Type-safe**: Full TypeScript support with proper generics
5. **Separation of Concerns**: Clear boundaries between orchestration and business logic

## Base Architecture

### Core Interfaces

#### IBaseBuilder Interface
The fundamental contract for all builders:

```typescript
interface IBaseBuilder<TReturnObj> {
  /**
   * Build and return the target object
   */
  build(): Promise<TReturnObj>;
}
```

#### IPlugin Interface
The contract for all plugins:

```typescript
interface IPlugin<TContext extends ITxBuilderContext<unknown> = ITxBuilderContext<unknown>> {
  /**
   * Set the builder context
   */
  setContext(context: TContext): void;

  /**
   * Get the builder context
   */
  getContext(): TContext;

  /**
   * Execute the plugin's build logic
   */
  build(): Promise<void>;
}
```

#### ITxBuilderContext Interface
The context object for sharing data between plugins:

```typescript
interface ITxBuilderContext<Signer = unknown> {
  signer?: Signer;

  /**
   * Set staging data
   */
  setStagingData(key: string, data: unknown): void;

  /**
   * Get staging data
   */
  getStagingData<TStaging>(key: string): TStaging;

  /**
   * Set the final result using the default staging key
   * Convenience method for setting the final result
   */
  setFinalResult<TResult>(result: TResult): void;
}
```

### Base Implementation Classes

#### BaseBuilder Class
The abstract base class for all builders:

```typescript
abstract class BaseBuilder<TSigner, TReturnObj> implements IBaseBuilder<TReturnObj> {
  protected context: BaseTxBuilderContext<TSigner>;
  protected plugins: IPlugin<BaseTxBuilderContext<TSigner>>[];
  protected resultStagingKey: string;

  constructor(
    signer: TSigner,
    plugins: IPlugin<BaseTxBuilderContext<TSigner>>[],
    options: { resultStagingKey?: string } = {}
  ) {
    this.context = new BaseTxBuilderContext(signer);
    this.plugins = plugins;
    this.resultStagingKey = options.resultStagingKey ?? DEFAULT_RESULT_STAGING_KEY;

    // Set context for all plugins
    this.plugins.forEach(plugin => plugin.setContext(this.context));
  }

  async build(): Promise<TReturnObj> {
    // Execute all plugins in order
    for (const plugin of this.plugins) {
      await plugin.build();
    }

    // Get the final result from staging data
    const result = this.context.getStagingData<TReturnObj>(this.resultStagingKey);

    if (!result) {
      throw new Error(`Final result not found in staging data at key: ${this.resultStagingKey}`);
    }

    return result;
  }
}
```

#### BasePlugin Class
The abstract base class for all plugins with common `retrieveParams()` implementation:

```typescript
abstract class BasePlugin<TBuilderInput, TContext extends ITxBuilderContext<unknown>>
  implements IPlugin<TContext> {
  protected context: TContext | undefined;
  protected options: unknown;
  protected dependencies: readonly string[];

  constructor(
    dependencies: readonly string[],
    options: unknown = {}
  ) {
    this.dependencies = dependencies;
    this.options = options;
  }

  setContext(context: TContext): void {
    this.context = context;
  }

  getContext(): TContext {
    if (!this.context) {
      throw new Error('Context not set. Call setContext() before using the plugin.');
    }
    return this.context;
  }

  /**
   * Common implementation that handles dependency resolution, validation, and transformation
   */
  protected retrieveParams(): TBuilderInput {
    const ctx = this.getContext();
    const params: Record<string, unknown> = {};

    // Iterate through all dependency keys
    for (const key of this.dependencies) {
      const value = ctx.getStagingData<unknown>(key);

      // Validate the value
      this.onValidate(key, value);

      // Transform the value if needed
      const transformedValue = this.onParam(key, value);

      // Convert key to camelCase and store
      const camelKey = this.toCamelCase(key);
      params[camelKey] = transformedValue;
    }

    // Allow custom transformation of the complete params object
    return this.afterRetrieveParams(params);
  }

  /**
   * Validate a dependency value. Override for custom validation.
   * Default: checks if value exists (not null/undefined)
   */
  protected onValidate(key: string, value: unknown): void {
    if (value === null || value === undefined) {
      throw new Error(`Required dependency '${key}' not found in staging data`);
    }
  }

  /**
   * Transform a dependency value. Override for custom transformation.
   * Default: returns value unchanged
   */
  protected onParam(key: string, value: unknown): unknown {
    return value;
  }

  /**
   * Convert the params Record to TBuilderInput. Override for custom conversion.
   * Default: returns params as-is (assumes TBuilderInput extends Record<string, unknown>)
   */
  protected afterRetrieveParams(params: Record<string, unknown>): TBuilderInput {
    return params as TBuilderInput;
  }

  /**
   * Convert snake_case/kebab-case to camelCase
   */
  private toCamelCase(str: string): string {
    return str.replace(/[_-]([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  /**
   * Abstract method to handle the build logic with the retrieved parameters
   */
  protected abstract onBuild(ctx: TContext, params: TBuilderInput): Promise<void>;

  async build(): Promise<void> {
    const params = this.retrieveParams();
    await this.onBuild(this.getContext(), params);
  }
}

#### BaseTxBuilderContext Class
The default implementation of the context:

```typescript
class BaseTxBuilderContext<Signer> implements ITxBuilderContext<Signer> {
  private stagingData: Record<string, unknown> = {};

  constructor(public signer?: Signer) {}

  setStagingData(key: string, data: unknown): void {
    this.stagingData[key] = data;
  }

  getStagingData<TStaging>(key: string): TStaging {
    return this.stagingData[key] as TStaging;
  }

  setFinalResult<TResult>(result: TResult): void {
    this.setStagingData(DEFAULT_RESULT_STAGING_KEY, result);
  }
}
```

## How It Works

### 1. Builder Orchestration
The builder acts as an orchestrator that:
- Creates a context with the signer
- Passes the context to all plugins
- Executes plugins in sequence
- Retrieves the final result from staging data

### 2. Plugin Execution Flow
Each plugin follows this pattern:
1. **Retrieve Parameters**: Get data from staging data and options
2. **Process**: Perform its specific business logic
3. **Store Results**: Save outputs to staging data for other plugins

### 3. Staging Data System
Plugins communicate through a shared staging data system:
- Plugins store intermediate results with descriptive keys
- Later plugins can retrieve and use these results
- The final plugin stores the complete result

### 4. Type Safety
The architecture maintains strict typing through:
- Generic type parameters for signer and return types
- Proper interfaces for all components
- No use of `any` types

## Plugin File Organization

### Best Practices for Plugin Files

Each plugin should be self-contained in its own file with all related types and constants. A well-organized plugin file should include:

#### 1. Staging Data Key Constants
Import dependency keys from other plugins and export your own output keys:

```typescript
// fee-plugin.ts

// Import dependency keys from plugins that produce them
import { MESSAGE_PLUGIN_STAGING_KEYS } from './message-plugin';
import { SIGNER_INFO_PLUGIN_STAGING_KEYS } from './signer-info-plugin';

// Only export staging data keys that THIS plugin produces
export const FEE_PLUGIN_STAGING_KEYS = {
  FEE_INFO: 'fee_info',
  GAS_ESTIMATION: 'gas_estimation',
  CALCULATED_FEE: 'calculated_fee'
} as const;
```

#### 2. Plugin-Related Types
Define all types used by the plugin in the same file:

```typescript
// All interfaces related to this plugin
interface FeePluginParams {
  gas: string;
  amount: readonly Coin[];
  gasPrice: string | number;
}

interface FeePluginOptions {
  gasPrice?: 'low' | 'average' | 'high' | number;
  gasMultiplier?: number;
  maxGas?: string;
}

interface CalculatedFee {
  gas: string;
  amount: readonly Coin[];
  gasPrice: string;
}

interface GasEstimation {
  estimated: string;
  used: string;
  multiplier: number;
}
```

#### 3. Plugin Implementation
The actual plugin class using imported constants for dependencies:

```typescript
export class FeePlugin extends BasePlugin<
  FeePluginParams,
  BaseTxBuilderContext<MySigner>
> {
  constructor(options: FeePluginOptions = {}) {
    // Use imported constants from other plugins - best practice!
    const dependencies = [
      'sign_args', // From initial builder context
      MESSAGE_PLUGIN_STAGING_KEYS.TX_BODY,
      SIGNER_INFO_PLUGIN_STAGING_KEYS.SIGNER_INFO
    ];

    super(dependencies, options);
  }

  // Override validation for specific keys
  protected onValidate(key: string, value: unknown): void {
    if (key === 'sign_args') {
      const args = value as TransactionArgs;
      if (!args?.fee) {
        throw new Error('Fee is required for transaction');
      }
      if (BigInt(args.fee.gas) <= 0) {
        throw new Error('Gas amount must be positive');
      }
    } else {
      // Use default validation for other dependencies
      super.onValidate(key, value);
    }
  }

  // Override parameter transformation if needed
  protected onParam(key: string, value: unknown): unknown {
    if (key === 'sign_args') {
      const args = value as TransactionArgs;
      return args.fee; // Extract just the fee part
    }
    return value; // Return unchanged for other params
  }

  // Convert Record to typed params
  protected afterRetrieveParams(params: Record<string, unknown>): FeePluginParams {
    const options = this.options as FeePluginOptions;

    return {
      txBody: params.txBody as TransactionBody,
      fee: params.signArgs as Fee,
      gasPrice: options.gasPrice || 'average'
    };
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<MySigner>,
    params: FeePluginParams
  ): Promise<void> {
    const calculatedFee = await this.calculateFee(params);
    ctx.setStagingData(FEE_PLUGIN_STAGING_KEYS.CALCULATED_FEE, calculatedFee);
  }

  private async calculateFee(params: FeePluginParams): Promise<CalculatedFee> {
    // Fee calculation logic
    return {
      gas: params.fee.gas,
      amount: params.fee.amount,
      gasPrice: params.gasPrice.toString()
    };
  }
}
```

#### 4. Usage by Other Plugins
Other plugins import staging keys from dependencies and export their own:

```typescript
// signature-plugin.ts

// Import staging keys from plugins this depends on
import { DOCUMENT_PLUGIN_STAGING_KEYS } from './document-plugin';

// Export only what THIS plugin produces
export const SIGNATURE_PLUGIN_STAGING_KEYS = {
  SIGNATURE: 'signature'
} as const;

export class SignaturePlugin extends BasePlugin<SignatureParams, Context> {
  constructor() {
    // Use imported constants from other plugins
    const dependencies = [DOCUMENT_PLUGIN_STAGING_KEYS.SIGN_DOC];
    super(dependencies, {});
  }

  protected afterRetrieveParams(params: Record<string, unknown>): SignatureParams {
    return params.signDoc as SignatureParams;
  }

  protected async onBuild(ctx: Context, params: SignatureParams): Promise<void> {
    const signature = await ctx.signer!.signDoc(params);
    // Use own constants for output keys
    ctx.setStagingData(SIGNATURE_PLUGIN_STAGING_KEYS.SIGNATURE, signature);
  }
}
```

### File Structure Example
```
plugins/
├── message-plugin.ts       # Messages + TX body creation
├── fee-plugin.ts          # Fee calculation
├── auth-info-plugin.ts    # Auth info creation
├── signature-plugin.ts    # Transaction signing
└── index.ts              # Export all plugins
```

### Best Practices for Plugin Constants

#### Always Use Constants for Keys
- **Import dependency keys**: Import staging key constants from plugins that produce them
- **Export output keys**: Export constants for all staging data this plugin produces
- **Type safety**: Constants prevent typos and enable IDE autocompletion
- **Proper dependency chain**: Clear relationships between plugins

```typescript
// ✅ Good - Import constants from dependencies
import { MESSAGE_PLUGIN_STAGING_KEYS } from './message-plugin';
const dependencies = [MESSAGE_PLUGIN_STAGING_KEYS.TX_BODY];

// ❌ Bad - String literals or defining your own constants for imports
const dependencies = ['tx_body']; // prone to typos
const dependencies = [OWN_PLUGIN_DEPENDENCIES.TX_BODY]; // duplicate definition
```

#### Naming Convention
- **Imports**: Import `OTHER_PLUGIN_STAGING_KEYS` from dependencies
- **Exports**: Export `THIS_PLUGIN_STAGING_KEYS` for outputs only
- **No dependency constants**: Don't define constants for keys you import

### Benefits of This Organization

1. **Self-contained**: Each plugin file has everything needed for that plugin
2. **Type safety**: All related types and constants are co-located with the implementation
3. **Discoverability**: Easy to find what staging data keys a plugin needs and produces
4. **Maintainability**: Changes to a plugin only affect its own file
5. **Reusability**: Other developers can easily understand and reuse plugins
6. **IDE support**: Better autocompletion, refactoring, and error detection
7. **No typos**: Constants prevent runtime errors from misspelled keys

## Common retrieveParams() Implementation

The `BasePlugin` class provides a common implementation of `retrieveParams()` that dramatically reduces boilerplate code:

### Simple Plugin Example
For plugins with minimal customization needs:

```typescript
// auth-info-plugin.ts

// Define dependency and output constants
export const AUTH_INFO_PLUGIN_DEPENDENCIES = {
  CALCULATED_FEE: 'calculated_fee',
  SIGNER_INFO: 'signer_info'
} as const;

export const AUTH_INFO_PLUGIN_STAGING_KEYS = {
  AUTH_INFO: 'auth_info'
} as const;

export class SimpleAuthInfoPlugin extends BasePlugin<AuthInfoParams, Context> {
  constructor() {
    // Use constants for dependencies - best practice!
    const dependencies = [
      AUTH_INFO_PLUGIN_DEPENDENCIES.CALCULATED_FEE,
      AUTH_INFO_PLUGIN_DEPENDENCIES.SIGNER_INFO
    ];
    super(dependencies);
  }

  // No need to override retrieveParams() - the base implementation:
  // 1. Gets staging data using the dependency constants
  // 2. Validates they exist (throws if not)
  // 3. Converts keys to camelCase: calculatedFee, signerInfo
  // 4. Returns { calculatedFee, signerInfo } as AuthInfoParams

  protected async onBuild(ctx: Context, params: AuthInfoParams): Promise<void> {
    const authInfo = this.createAuthInfo(params.calculatedFee, params.signerInfo);
    // Use constants for output keys too
    ctx.setStagingData(AUTH_INFO_PLUGIN_STAGING_KEYS.AUTH_INFO, authInfo);
  }
}
```

### Custom Validation Example
For plugins that need custom validation:

```typescript
// signature-plugin.ts

export const SIGNATURE_PLUGIN_DEPENDENCIES = {
  SIGN_DOC: 'sign_doc',
  SIGNER_INFO: 'signer_info'
} as const;

export const SIGNATURE_PLUGIN_STAGING_KEYS = {
  SIGNATURE: 'signature'
} as const;

export class SignaturePlugin extends BasePlugin<SignatureParams, Context> {
  constructor() {
    const dependencies = [
      SIGNATURE_PLUGIN_DEPENDENCIES.SIGN_DOC,
      SIGNATURE_PLUGIN_DEPENDENCIES.SIGNER_INFO
    ];
    super(dependencies);
  }

  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Basic null check

    if (key === SIGNATURE_PLUGIN_DEPENDENCIES.SIGN_DOC) {
      const doc = value as SignDoc;
      if (!doc.bodyBytes || doc.bodyBytes.length === 0) {
        throw new Error('Sign doc body cannot be empty');
      }
    }
  }

  protected async onBuild(ctx: Context, params: SignatureParams): Promise<void> {
    // params.signDoc and params.signerInfo are automatically available
    const signature = await ctx.signer!.sign(params.signDoc);
    ctx.setStagingData(SIGNATURE_PLUGIN_STAGING_KEYS.SIGNATURE, signature);
  }
}
```

### Real-world Examples from Cosmos Implementation

Here are examples of plugins using the common `retrieveParams()` implementation:

```typescript
// tx-body-plugin.ts

export const TX_BODY_PLUGIN_DEPENDENCIES = {
  SIGN_ARGS: 'sign_args'
} as const;

export const TX_BODY_PLUGIN_STAGING_KEYS = {
  TX_BODY: 'tx_body'
} as const;

// Complex plugin with validation and transformation
export class TxBodyPlugin extends BasePlugin<TxBodyParams, Context> {
  constructor(options: TxBodyPluginOptions = {}) {
    const dependencies = [TX_BODY_PLUGIN_DEPENDENCIES.SIGN_ARGS];
    super(dependencies, options);
  }

    protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Check exists first

    if (key === TX_BODY_PLUGIN_DEPENDENCIES.SIGN_ARGS) {
      const signArgs = value as CosmosSignArgs;
      if (signArgs.options?.timeoutHeight?.type === 'relative') {
        throw new Error("timeoutHeight type shouldn't be 'relative'.");
      }
    }
  }

  protected onParam(key: string, value: unknown): unknown {
    if (key === TX_BODY_PLUGIN_DEPENDENCIES.SIGN_ARGS) {
      const signArgs = value as CosmosSignArgs;
      const { messages, memo, options } = signArgs;
      return {
        messages, memo,
        timeoutHeight: options?.timeoutHeight?.value,
        extensionOptions: options?.extensionOptions,
        nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
      };
    }
    return value;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TxBodyParams {
    return params.signArgs as TxBodyParams;
  }

  protected async onBuild(ctx: Context, params: TxBodyParams): Promise<void> {
    // Business logic here - params are already validated and transformed
    const txBody = this.createTxBody(params);
    ctx.setStagingData(TX_BODY_PLUGIN_STAGING_KEYS.TX_BODY, txBody);
  }
}

// signature-plugin.ts

export const SIGNATURE_PLUGIN_DEPENDENCIES = {
  SIGN_DOC: 'sign_doc'
} as const;

export const SIGNATURE_PLUGIN_STAGING_KEYS = {
  SIGNATURE: 'signature'
} as const;

// Simple plugin - just declare dependencies
export class SignaturePlugin extends BasePlugin<SignDoc, Context> {
  constructor() {
    const dependencies = [SIGNATURE_PLUGIN_DEPENDENCIES.SIGN_DOC];
    super(dependencies, {});
  }

  protected afterRetrieveParams(params: Record<string, unknown>): SignDoc {
    return params.signDoc as SignDoc; // Convert record to your type
  }

  protected async onBuild(ctx: Context, params: SignDoc): Promise<void> {
    const signature = await ctx.signer!.signDoc(params);
    ctx.setStagingData(SIGNATURE_PLUGIN_STAGING_KEYS.SIGNATURE, signature);
  }
}

// auth-info-plugin.ts

export const AUTH_INFO_PLUGIN_DEPENDENCIES = {
  SIGNER_INFO: 'signer_info',
  CALCULATED_FEE: 'calculated_fee'
} as const;

export const AUTH_INFO_PLUGIN_STAGING_KEYS = {
  AUTH_INFO: 'auth_info'
} as const;

// Multi-dependency plugin
export class AuthInfoPlugin extends BasePlugin<AuthInfoParams, Context> {
  constructor() {
    const dependencies = [
      AUTH_INFO_PLUGIN_DEPENDENCIES.SIGNER_INFO,
      AUTH_INFO_PLUGIN_DEPENDENCIES.CALCULATED_FEE
    ];
    super(dependencies, {});
  }

  protected afterRetrieveParams(params: Record<string, unknown>): AuthInfoParams {
    const signerInfoData = params.signerInfo as { signerInfo: SignerInfo };
    const feeData = params.calculatedFee as { fee: Fee };

    return {
      signerInfos: [signerInfoData.signerInfo],
      fee: feeData.fee,
    };
  }

  protected async onBuild(ctx: Context, params: AuthInfoParams): Promise<void> {
    const authInfo = AuthInfo.fromPartial({
      signerInfos: params.signerInfos,
      fee: params.fee,
    });
    ctx.setStagingData(AUTH_INFO_PLUGIN_STAGING_KEYS.AUTH_INFO, { authInfo });
  }
}
```

### Benefits of Common Implementation

1. **Declarative Dependencies**: Dependencies are explicit in constructor
2. **Minimal Boilerplate**: Automatic `retrieveParams()` implementation for common cases
3. **Consistent Patterns**: Standardized validation and transformation hooks
4. **Automatic Key Conversion**: snake_case → camelCase conversion built-in
5. **Type Safety**: Full TypeScript support with proper generics
6. **Easy Testing**: Dependencies are clear and mockable
7. **Flexible Customization**: Three levels of customization (validation, transformation, final conversion)

## Usage Examples

### Example 1: Basic Transaction Builder

```typescript
// Define your specific builder using the plugin architecture
class MyTransactionBuilder extends BaseBuilder<MySigner, MyTransaction> {
  constructor(signer: MySigner, signMode: SignMode) {
    const plugins = [
      new MessagePlugin(),
      new FeePlugin({ gasPrice: 'average' }),
      new SignaturePlugin(),
      new FinalResultPlugin({
        syncSignedDoc: (txRaw, signResp) => this.syncTransaction(txRaw, signResp)
      })
    ];

    super(signer, plugins);

    // Store initial data for plugins to use
    this.context.setStagingData('sign_mode', signMode);
  }

  async buildTransaction(args: TransactionArgs): Promise<MyTransaction> {
    // Store transaction arguments for plugins to access
    this.context.setStagingData('transaction_args', args);

    // Execute all plugins in sequence via common base implementation
    return this.build();
  }

  private async syncTransaction(txRaw: TxRaw, signResp: SignResponse): Promise<MyTransaction> {
    // Combine raw transaction with signature response
    return new MyTransaction(txRaw, signResp);
  }
}
```

### Example 2: Complete Plugin Implementation

```typescript
// message-plugin.ts

// 1. Dependency and staging data key constants
export const MESSAGE_PLUGIN_DEPENDENCIES = {
  TRANSACTION_ARGS: 'transaction_args'
} as const;

export const MESSAGE_PLUGIN_STAGING_KEYS = {
  TX_BODY: 'tx_body',
  ENCODED_MESSAGES: 'encoded_messages'
} as const;

// 2. Types related to this plugin
interface MessagePluginParams {
  messages: readonly Message[];
  memo?: string;
  timeoutHeight?: bigint;
}

interface MessagePluginOptions {
  allowEmptyMemo?: boolean;
  defaultMemo?: string;
}

interface EncodedMessage {
  typeUrl: string;
  value: Uint8Array;
}

interface TransactionBody {
  messages: EncodedMessage[];
  memo: string;
  timeoutHeight?: bigint;
}

// 3. The plugin implementation
export class MessagePlugin extends BasePlugin<
  MessagePluginParams,
  BaseTxBuilderContext<MySigner>
> {
  constructor(options: MessagePluginOptions = {}) {
    // Use constants for dependencies - best practice!
    const dependencies = [MESSAGE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS];
    super(dependencies, options);
  }

  // Custom validation for message-specific requirements
  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Basic existence check

    if (key === MESSAGE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS) {
      const args = value as TransactionArgs;
      if (!args.messages || args.messages.length === 0) {
        throw new Error('At least one message is required');
      }
    }
  }

  // Extract and transform relevant data from transaction args
  protected onParam(key: string, value: unknown): unknown {
    if (key === MESSAGE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS) {
      const args = value as TransactionArgs;
      const options = this.options as MessagePluginOptions;

      return {
        messages: args.messages,
        memo: args.memo || options.defaultMemo || '',
        timeoutHeight: args.options?.timeoutHeight
      };
    }
    return value;
  }

  // Convert the Record to typed params
  protected afterRetrieveParams(params: Record<string, unknown>): MessagePluginParams {
    return params.transactionArgs as MessagePluginParams;
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<MySigner>,
    params: MessagePluginParams
  ): Promise<void> {
    // Business logic: encode messages and create transaction body
    const encodedMessages: EncodedMessage[] = params.messages.map(msg => ({
      typeUrl: msg.typeUrl,
      value: ctx.signer!.getEncoder(msg.typeUrl).encode(msg.value)
    }));

    const txBody: TransactionBody = {
      messages: encodedMessages,
      memo: params.memo || '',
      timeoutHeight: params.timeoutHeight,
    };

    // Store results using exported constants
    ctx.setStagingData(MESSAGE_PLUGIN_STAGING_KEYS.TX_BODY, txBody);
    ctx.setStagingData(MESSAGE_PLUGIN_STAGING_KEYS.ENCODED_MESSAGES, encodedMessages);
  }
}
```

## Benefits

### For Library Users
- **Simple API**: Factory functions hide complexity
- **Type Safety**: Full TypeScript support with autocompletion
- **Flexibility**: Easy to customize behavior through options

### For Plugin Developers
- **Clear Contract**: Well-defined interfaces for plugins
- **Isolated Logic**: Each plugin handles one responsibility
- **Testability**: Plugins can be unit tested independently

### For Framework Maintainers
- **Modularity**: Easy to add new features without changing existing code
- **Extensibility**: New blockchain support can reuse base architecture
- **Maintainability**: Clear separation of concerns and single responsibility principle

## Builder Implementation Pattern

### Modular Plugin-Based Architecture
The builder pattern uses a series of specialized plugins to handle different aspects of transaction building:

```typescript
class TransactionBuilder extends BaseBuilder {
  constructor(signer: Signer) {
    // Define the transaction building pipeline using plugins
    super(signer, [
      new MessagePlugin(),        // Encode messages and create TX body
      new FeePlugin(),           // Calculate or validate fees
      new DocumentPlugin(),      // Create sign document
      new SignaturePlugin(),     // Sign the document
      new FinalResultPlugin()    // Combine into final transaction
    ]);
  }

  async buildTransaction(args: TransactionArgs): Promise<Transaction> {
    // Store initial arguments for plugins
    this.context.setStagingData('transaction_args', args);

    // Execute plugin pipeline
    return this.build();
  }
}
```

### Adding Custom Features
```typescript
// memo-encryption-plugin.ts

// Define constants for this custom plugin
export const MEMO_ENCRYPTION_PLUGIN_DEPENDENCIES = {
  TX_BODY: 'tx_body'
} as const;

export const MEMO_ENCRYPTION_PLUGIN_STAGING_KEYS = {
  ENCRYPTED_TX_BODY: 'encrypted_tx_body'
} as const;

// Example: Add a memo encryption plugin for enhanced privacy
interface MemoEncryptionParams {
  memo: string;
  encryptionKey?: string;
  shouldEncrypt: boolean;
}

interface MemoEncryptionOptions {
  defaultEncryptionKey?: string;
  encryptionMethod?: 'aes' | 'rsa';
}

class MemoEncryptionPlugin extends BasePlugin<
  MemoEncryptionParams,
  BaseTxBuilderContext<MySigner>
> {
  constructor(options: MemoEncryptionOptions = {}) {
    // Use constants for dependencies - best practice!
    const dependencies = [MEMO_ENCRYPTION_PLUGIN_DEPENDENCIES.TX_BODY];
    super(dependencies, options);
  }

    protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value);

    if (key === MEMO_ENCRYPTION_PLUGIN_DEPENDENCIES.TX_BODY) {
      const txBody = value as TransactionBody;
      if (!txBody.memo) {
        throw new Error('No memo found to encrypt');
      }
    }
  }

  protected onParam(key: string, value: unknown): unknown {
    if (key === MEMO_ENCRYPTION_PLUGIN_DEPENDENCIES.TX_BODY) {
      const txBody = value as TransactionBody;
      const options = this.options as MemoEncryptionOptions;

      return {
        memo: txBody.memo,
        encryptionKey: options.defaultEncryptionKey,
        shouldEncrypt: txBody.memo.length > 0
      };
    }
    return value;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): MemoEncryptionParams {
    return params.txBody as MemoEncryptionParams;
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<MySigner>,
    params: MemoEncryptionParams
  ): Promise<void> {
    if (!params.shouldEncrypt || !params.encryptionKey) {
      return; // Skip encryption
    }

    // Encrypt the memo
    const encryptedMemo = await this.encryptMemo(params.memo, params.encryptionKey);

    // Update the transaction body with encrypted memo
    const txBody = ctx.getStagingData<TransactionBody>(MEMO_ENCRYPTION_PLUGIN_DEPENDENCIES.TX_BODY);
    const updatedTxBody = {
      ...txBody,
      memo: encryptedMemo
    };

    // Use constants for output staging keys
    ctx.setStagingData(MEMO_ENCRYPTION_PLUGIN_STAGING_KEYS.ENCRYPTED_TX_BODY, updatedTxBody);
  }

  private async encryptMemo(memo: string, key: string): Promise<string> {
    // Implementation specific encryption logic
    return `encrypted:${memo}`;
  }
}

// Use in builder - insert after MessagePlugin but before SignaturePlugin
const builder = new TransactionBuilder(signer, [
  new MessagePlugin(),
  new MemoEncryptionPlugin({ encryptionMethod: 'aes' }), // Custom building phase
  new FeePlugin(),
  new SignaturePlugin(),
  new FinalResultPlugin()
]);
```

### Validation in Plugins
```typescript
// fee-plugin.ts

export const FEE_PLUGIN_DEPENDENCIES = {
  TRANSACTION_ARGS: 'transaction_args'
} as const;

export const FEE_PLUGIN_STAGING_KEYS = {
  FEE_INFO: 'fee_info'
} as const;

// How to add validation using the common retrieveParams implementation
class FeePlugin extends BasePlugin<FeeParams, BaseTxBuilderContext<MySigner>> {
  constructor(options: FeeOptions = {}) {
    const dependencies = [FEE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS];
    super(dependencies, options);
  }

  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Basic existence check

    if (key === FEE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS) {
      const args = value as TransactionArgs;

      if (!args?.fee) {
        throw new Error('Fee is required for transaction');
      }

      if (BigInt(args.fee.gas) <= 0) {
        throw new Error('Gas amount must be positive');
      }

      if (args.fee.amount.some(coin => BigInt(coin.amount) < 0)) {
        throw new Error('Fee amounts cannot be negative');
      }
    }
  }

  protected onParam(key: string, value: unknown): unknown {
    if (key === FEE_PLUGIN_DEPENDENCIES.TRANSACTION_ARGS) {
      const args = value as TransactionArgs;
      const options = this.options as FeeOptions;

      return {
        gas: args.fee.gas,
        amount: args.fee.amount,
        gasPrice: options.gasPrice || 'average'
      };
    }
    return value;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): FeeParams {
    return params.transactionArgs as FeeParams;
  }

  protected async onBuild(ctx: Context, params: FeeParams): Promise<void> {
    // Business logic here - validation already complete
    const calculatedFee = await this.calculateFee(params);
    ctx.setStagingData(FEE_PLUGIN_STAGING_KEYS.FEE_INFO, calculatedFee);
  }
}
```

This plugin-based architecture provides a solid foundation for building maintainable, testable, and extensible transaction builders for any blockchain ecosystem. The common `retrieveParams()` implementation dramatically reduces boilerplate while maintaining full flexibility through the customization hooks.

## Key Best Practice: Always Use Constants

**Critical**: Always use exported constants for dependency and staging data keys instead of string literals. This provides:

- **Type Safety**: Prevents runtime errors from typos
- **IDE Support**: Full autocompletion and refactoring support
- **Maintainability**: Key changes are automatically reflected everywhere
- **Discoverability**: Easy to see plugin dependencies and outputs
- **Consistency**: Enforces standardized naming across all plugins

```typescript
// ✅ Always do this
const dependencies = [MESSAGE_PLUGIN_DEPENDENCIES.TX_ARGS];
ctx.setStagingData(MESSAGE_PLUGIN_STAGING_KEYS.TX_BODY, txBody);

// ❌ Never do this
const dependencies = ['tx_args']; // Prone to typos
ctx.setStagingData('tx_body', txBody); // Hard to refactor
```
