# Workflow Builder and Plugins Architecture

This guide provides comprehensive documentation for the plugin-based transaction workflow architecture in InterchainJS. This system enables modular, extensible, and type-safe transaction building across different blockchain networks.

## Table of Contents

1. [Design Principles](#design-principles)
2. [Core Architecture](#core-architecture)
3. [Base Implementation Classes](#base-implementation-classes)
4. [Workflow Selection Patterns](#workflow-selection-patterns)
5. [Plugin Development](#plugin-development)
6. [File Organization](#file-organization)
7. [Usage Examples](#usage-examples)
8. [Best Practices](#best-practices)

## Design Principles

The workflow builder architecture follows these core principles:

### 1. **Strict Typing**
- No `any` types - uses `unknown` when type is not determined
- Full TypeScript support with proper generics
- Type-safe plugin interfaces and context sharing

### 2. **Plugin-Based Modularity**
- Builders use a series of plugins to handle different aspects of transaction building
- Each plugin has a single responsibility
- Plugins can be composed into different workflows

### 3. **Extensibility**
- Easy to add new signing modes or customize behavior
- Support for multiple workflows within a single builder
- Pluggable architecture allows for network-specific customizations

### 4. **Separation of Concerns**
- Clear boundaries between orchestration and business logic
- Workflow selection logic separated from plugin execution
- Context management isolated from plugin implementation

### 5. **Type Safety**
- Proper generic type parameters for signer and return types
- Strongly typed interfaces for all components
- Compile-time validation of plugin dependencies

## Core Architecture

### Architectural Overview

The workflow system follows a layered approach with clear separation between orchestration, workflow management, and plugin execution:

```text
┌─────────────────────────────────────┐
│         Builder Interface           │  ← Public API
├─────────────────────────────────────┤
│       Workflow Orchestrator        │  ← Business Logic
├─────────────────────────────────────┤
│         Plugin Pipeline             │  ← Modular Processing
├─────────────────────────────────────┤
│      Context & Data Sharing         │  ← State Management
└─────────────────────────────────────┘
```

### Core Interfaces

#### IWorkflowBuilder Interface

The fundamental contract for all builders:

```typescript
interface IWorkflowBuilder<TReturnObj> {
  /**
   * Build and return the target object
   */
  build(): Promise<TReturnObj>;
}
```

#### IWorkflowBuilderPlugin Interface

The contract for all plugins:

```typescript
interface IWorkflowBuilderPlugin<TContext extends IWorkflowBuilderContext<unknown> = IWorkflowBuilderContext<unknown>> {
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

#### IWorkflowBuilderContext Interface

The context object for sharing data between plugins:

```typescript
interface IWorkflowBuilderContext<Signer = unknown> {
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

### How It Works

#### 1. Workflow Orchestration
The builder acts as an orchestrator that:
- Creates a context with the signer
- Defines multiple named workflows, each containing a sequence of plugins
- Passes the context to all plugins across all workflows
- Determines which workflow to execute based on implementation logic
- Executes the selected workflow's plugins in sequence
- Retrieves the final result from staging data

#### 2. Workflow Execution Flow
The system follows this pattern:
1. **Workflow Selection**: The builder calls `selectWorkflow()` to determine which workflow to execute
2. **Plugin Execution**: Each plugin in the selected workflow follows this pattern:
   - **Retrieve Parameters**: Get data from staging data and options
   - **Process**: Perform its specific business logic
   - **Store Results**: Save outputs to staging data for other plugins
3. **Result Retrieval**: Get the final result from staging data

#### 3. Staging Data System
Plugins communicate through a shared staging data system:
- Plugins store intermediate results with descriptive keys
- Later plugins can retrieve and use these results
- The final plugin stores the complete result

#### 4. Type Safety
The architecture maintains strict typing through:
- Generic type parameters for signer and return types
- Proper interfaces for all components
- No use of `any` types

## Integration with InterchainJS

This workflow system is designed to work seamlessly with InterchainJS signers and the universal signer interface:

```typescript
// Example integration with DirectSigner
class CosmosTransactionBuilder extends WorkflowBuilder<DirectSigner, CosmosTransaction> {
  constructor(signer: DirectSigner, signingMode: SigningMode) {
    const workflows = {
      'direct': [
        new MessagePlugin(),
        new FeePlugin(),
        new AuthInfoPlugin(),
        new SignDocPlugin(),
        new SignaturePlugin(),
        new FinalResultPlugin()
      ],
      'amino': [
        new MessagePlugin(),
        new AminoFeePlugin(),
        new AminoSignDocPlugin(),
        new AminoSignaturePlugin(),
        new FinalResultPlugin()
      ]
    };

    super(signer, workflows);
    this.signingMode = signingMode;
  }

  protected selectWorkflow(): string {
    return this.signingMode === SigningMode.DIRECT ? 'direct' : 'amino';
  }
}
```

## Quick Start

### 1. Define Your Builder

```typescript
class MyTransactionBuilder extends WorkflowBuilder<MySigner, MyTransaction> {
  constructor(signer: MySigner) {
    const workflows = {
      'standard': [
        new MessagePlugin(),
        new FeePlugin(),
        new SignaturePlugin(),
        new FinalResultPlugin()
      ]
    };

    super(signer, workflows);
  }

  protected selectWorkflow(): string {
    return 'standard';
  }
}
```

### 2. Create Plugins

```typescript
class MessagePlugin extends BaseWorkflowBuilderPlugin<MessageParams, Context> {
  constructor() {
    super(['transaction_args'], {});
  }

  protected async onBuild(ctx: Context, params: MessageParams): Promise<void> {
    const encodedMessages = await this.encodeMessages(params.messages);
    ctx.setStagingData('encoded_messages', encodedMessages);
  }
}
```

### 3. Use the Builder

```typescript
const builder = new MyTransactionBuilder(signer);
builder.context.setStagingData('transaction_args', args);
const transaction = await builder.build();
```

## Next Sections

This guide continues with detailed implementation patterns for each component of the workflow system. The following sections provide comprehensive examples and best practices for building production-ready transaction workflows.

## Related Documentation

- [Network Implementation Guide](./network-implementation-guide.md) - Overall architecture for implementing blockchain networks
- [Auth vs. Wallet vs. Signer](./auth-wallet-signer.md) - Understanding the three-layer architecture
- [Tutorial](./tutorial.md) - Using and extending signers in InterchainJS

## Base Implementation Classes

### WorkflowBuilder Class

The abstract base class for all builders:

```typescript
abstract class WorkflowBuilder<TSigner, TReturnObj> implements IWorkflowBuilder<TReturnObj> {
  protected context: WorkflowBuilderContext<TSigner>;
  protected workflows: Record<string, IWorkflowBuilderPlugin<WorkflowBuilderContext<TSigner>>[]>;
  protected resultStagingKey: string;

  constructor(
    signer: TSigner,
    workflows: Record<string, IWorkflowBuilderPlugin<WorkflowBuilderContext<TSigner>>[]>,
    options: { resultStagingKey?: string } = {}
  ) {
    this.context = new WorkflowBuilderContext(signer);
    this.workflows = workflows;
    this.resultStagingKey = options.resultStagingKey ?? DEFAULT_RESULT_STAGING_KEY;

    // Set context for all plugins in all workflows
    Object.values(this.workflows).flat().forEach(plugin => plugin.setContext(this.context));
  }

  /**
   * Abstract method to determine which workflow to execute
   * Implementations should return the workflow name based on context, options, or other criteria
   */
  protected abstract selectWorkflow(): string;

  async build(): Promise<TReturnObj> {
    // Determine which workflow to execute
    const workflowName = this.selectWorkflow();
    const selectedWorkflow = this.workflows[workflowName];

    if (!selectedWorkflow) {
      throw new Error(`Workflow '${workflowName}' not found. Available workflows: ${Object.keys(this.workflows).join(', ')}`);
    }

    // Execute all plugins in the selected workflow in order
    for (const plugin of selectedWorkflow) {
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

### BaseWorkflowBuilderPlugin Class

The abstract base class for all plugins with common `retrieveParams()` implementation:

```typescript
// Type for dependency configuration
type DependencyConfig = string | {
  dependency: string;
  optional?: boolean;
}

abstract class BaseWorkflowBuilderPlugin<TBuilderInput, TContext extends IWorkflowBuilderContext<unknown>>
  implements IWorkflowBuilderPlugin<TContext> {
  protected context: TContext | undefined;
  protected options: unknown;
  protected dependencies: readonly DependencyConfig[];

  constructor(
    dependencies: readonly DependencyConfig[],
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

    // Iterate through all dependency configurations
    for (const depConfig of this.dependencies) {
      const { key, isOptional } = this.parseDependencyConfig(depConfig);
      const value = ctx.getStagingData<unknown>(key);

      // Handle optional dependencies - skip if not present
      if (isOptional && (value === null || value === undefined)) {
        continue;
      }

      // Validate the value (will throw for required dependencies)
      this.onValidate(key, value, isOptional);

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
   * Parse dependency configuration to extract key and optional flag
   */
  private parseDependencyConfig(depConfig: DependencyConfig): { key: string; isOptional: boolean } {
    if (typeof depConfig === 'string') {
      return { key: depConfig, isOptional: false };
    } else {
      return { key: depConfig.dependency, isOptional: depConfig.optional ?? false };
    }
  }

  /**
   * Validate a dependency value. Override for custom validation.
   * Default: checks if value exists (not null/undefined) for required dependencies
   */
  protected onValidate(key: string, value: unknown, isOptional: boolean = false): void {
    if (!isOptional && (value === null || value === undefined)) {
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
```

### WorkflowBuilderContext Class

The default implementation of the context:

```typescript
class WorkflowBuilderContext<Signer> implements IWorkflowBuilderContext<Signer> {
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

## Workflow Selection Patterns

The `selectWorkflow()` method is the key decision point in the builder architecture. Here are common patterns for implementing workflow selection:

### Context-Based Selection

Select workflow based on transaction context or arguments:

```typescript
class ContextAwareBuilder extends WorkflowBuilder<DirectSigner, CosmosTransaction> {
  protected selectWorkflow(): string {
    const args = this.context.getStagingData<CosmosSignArgs>('transaction_args');

    if (args.messages.length > 10) {
      return 'batch';
    } else if (args.fee && args.fee.amount.some(coin => BigInt(coin.amount) > BigInt('1000000'))) {
      return 'high-value';
    } else {
      return 'standard';
    }
  }
}
```

### Signer-Based Selection

Choose workflow based on signer capabilities:

```typescript
class SignerAwareBuilder extends WorkflowBuilder<IUniSigner, Transaction> {
  protected selectWorkflow(): string {
    const signer = this.context.signer;

    if (signer?.supportsMultisig?.()) {
      return 'multisig';
    } else if (signer?.isHardwareWallet?.()) {
      return 'hardware';
    } else {
      return 'standard';
    }
  }
}
```

### Configuration-Based Selection

Use builder options to determine workflow:

```typescript
interface BuilderOptions {
  workflowType?: 'fast' | 'secure' | 'offline';
  enableEncryption?: boolean;
}

class ConfigurableBuilder extends WorkflowBuilder<DirectSigner, Transaction> {
  constructor(
    signer: DirectSigner,
    private options: BuilderOptions = {}
  ) {
    const workflows = {
      'fast': [
        new MessagePlugin(),
        new FastFeePlugin(),
        new SignaturePlugin(),
        new FinalResultPlugin()
      ],
      'secure': [
        new MessagePlugin(),
        new SecureFeePlugin(),
        new EncryptionPlugin(),
        new SignaturePlugin(),
        new FinalResultPlugin()
      ],
      'offline': [
        new MessagePlugin(),
        new StaticFeePlugin(),
        new OfflineSignaturePlugin(),
        new FinalResultPlugin()
      ],
    };

    super(signer, workflows);
  }

  protected selectWorkflow(): string {
    return this.options.workflowType || 'fast';
  }
}
```

### Signing Mode Selection

Common pattern for Cosmos-based networks:

```typescript
class CosmosTransactionBuilder extends WorkflowBuilder<DirectSigner, CosmosTransaction> {
  constructor(signer: DirectSigner, private signingMode: SigningMode) {
    const workflows = {
      'direct': [
        new TxBodyPlugin(),
        new AuthInfoPlugin(),
        new SignDocPlugin(),
        new DirectSignaturePlugin(),
        new TxRawPlugin()
      ],
      'amino': [
        new TxBodyPlugin(),
        new AminoAuthInfoPlugin(),
        new AminoSignDocPlugin(),
        new AminoSignaturePlugin(),
        new TxRawPlugin()
      ]
    };

    super(signer, workflows);
  }

  protected selectWorkflow(): string {
    switch (this.signingMode) {
      case SigningMode.DIRECT:
        return 'direct';
      case SigningMode.AMINO:
        return 'amino';
      default:
        throw new Error(`Unsupported signing mode: ${this.signingMode}`);
    }
  }
}
```

## Plugin Development

### Plugin Structure

Every plugin should follow this structure:

```typescript
// 1. Define staging data key constants
export const MY_PLUGIN_STAGING_KEYS = {
  OUTPUT_KEY: 'my_plugin_output'
} as const;

// 2. Define plugin-specific types
interface MyPluginParams {
  inputData: string;
  options?: MyPluginOptions;
}

interface MyPluginOptions {
  enableFeature?: boolean;
  customValue?: number;
}

// 3. Implement the plugin
export class MyPlugin extends BaseWorkflowBuilderPlugin<MyPluginParams, WorkflowBuilderContext<MySigner>> {
  constructor(options: MyPluginOptions = {}) {
    const dependencies = ['input_data']; // Dependencies this plugin needs
    super(dependencies, options);
  }

  protected async onBuild(ctx: WorkflowBuilderContext<MySigner>, params: MyPluginParams): Promise<void> {
    // Plugin business logic here
    const result = await this.processData(params.inputData);

    // Store result for other plugins
    ctx.setStagingData(MY_PLUGIN_STAGING_KEYS.OUTPUT_KEY, result);
  }

  private async processData(data: string): Promise<ProcessedData> {
    // Implementation specific logic
    return { processed: data };
  }
}
```

### Plugin Dependencies

Plugins can have both required and optional dependencies:

```typescript
export class AdvancedPlugin extends BaseWorkflowBuilderPlugin<AdvancedParams, Context> {
  constructor() {
    const dependencies: DependencyConfig[] = [
      // Required dependencies (string format)
      'required_data',

      // Optional dependencies (object format)
      {
        dependency: 'optional_enhancement',
        optional: true
      },
      {
        dependency: 'user_preferences',
        optional: true
      }
    ];

    super(dependencies, {});
  }

  protected afterRetrieveParams(params: Record<string, unknown>): AdvancedParams {
    return {
      requiredData: params.requiredData as RequiredData,
      optionalEnhancement: params.optionalEnhancement as Enhancement | undefined,
      userPreferences: params.userPreferences as UserPrefs | undefined
    };
  }

  protected async onBuild(ctx: Context, params: AdvancedParams): Promise<void> {
    // Use optional data if available, fall back to defaults
    const enhancement = params.optionalEnhancement || this.getDefaultEnhancement();
    const preferences = params.userPreferences || this.getDefaultPreferences();

    const result = await this.processWithEnhancements(
      params.requiredData,
      enhancement,
      preferences
    );

    ctx.setStagingData('advanced_result', result);
  }
}
```

## File Organization

### Best Practices for Plugin Files

Each plugin should be self-contained in its own file with all related types and constants:

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
```

#### 3. Plugin Implementation

The actual plugin class using imported constants for dependencies:

```typescript
export class FeePlugin extends BaseWorkflowBuilderPlugin<
  FeePluginParams,
  WorkflowBuilderContext<DirectSigner>
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
      const args = value as CosmosSignArgs;
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
      const args = value as CosmosSignArgs;
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
    ctx: WorkflowBuilderContext<DirectSigner>,
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

### File Structure Example

```text
src/workflows/
├── plugins/
│   ├── message-plugin.ts       # Messages + TX body creation
│   ├── fee-plugin.ts          # Fee calculation
│   ├── auth-info-plugin.ts    # Auth info creation
│   ├── signature-plugin.ts    # Transaction signing
│   └── index.ts              # Export all plugins
├── builders/
│   ├── cosmos-builder.ts      # Cosmos transaction builder
│   ├── ethereum-builder.ts    # Ethereum transaction builder
│   └── index.ts              # Export all builders
└── types/
    ├── workflow-types.ts      # Common workflow types
    └── plugin-types.ts        # Common plugin types
```

### Naming Conventions

- **Directories**: `kebab-case` for multi-word concepts
- **Files**: `camelCase.ts` for implementations, `PascalCase.ts` for classes
- **Constants**: `SCREAMING_SNAKE_CASE` for staging keys
- **Imports**: Import `OTHER_PLUGIN_STAGING_KEYS` from dependencies
- **Exports**: Export `THIS_PLUGIN_STAGING_KEYS` for outputs only

## Best Practices

### 1. Always Use Constants for Keys

**Critical**: Always use exported constants for dependency and staging data keys instead of string literals:

```typescript
// ✅ Always do this
const dependencies = [MESSAGE_PLUGIN_STAGING_KEYS.TX_BODY];
ctx.setStagingData(FEE_PLUGIN_STAGING_KEYS.CALCULATED_FEE, fee);

// ❌ Never do this
const dependencies = ['tx_body']; // Prone to typos
ctx.setStagingData('calculated_fee', fee); // Hard to refactor
```

### 2. Plugin Responsibility

Each plugin should have a single, well-defined responsibility:

- **MessagePlugin**: Encode messages and create transaction body
- **FeePlugin**: Calculate or validate transaction fees
- **SignaturePlugin**: Sign the transaction document
- **AuthInfoPlugin**: Create authentication information

### 3. Error Handling

Implement proper error handling in plugins:

```typescript
protected onValidate(key: string, value: unknown): void {
  super.onValidate(key, value); // Basic existence check

  if (key === 'transaction_args') {
    const args = value as TransactionArgs;
    if (!args.messages || args.messages.length === 0) {
      throw new Error('At least one message is required');
    }

    for (const message of args.messages) {
      if (!message.typeUrl) {
        throw new Error('Message typeUrl is required');
      }
    }
  }
}
```

### 4. Type Safety

Maintain strict typing throughout:

```typescript
// Define specific types for your plugin
interface MyPluginParams {
  requiredField: string;
  optionalField?: number;
}

// Use proper generic types
export class MyPlugin extends BaseWorkflowBuilderPlugin<
  MyPluginParams,
  WorkflowBuilderContext<DirectSigner>
> {
  // Implementation with full type safety
}
```

### 5. Testing

Each plugin should be unit testable:

```typescript
describe('FeePlugin', () => {
  let plugin: FeePlugin;
  let mockContext: jest.Mocked<WorkflowBuilderContext<DirectSigner>>;

  beforeEach(() => {
    plugin = new FeePlugin({ gasPrice: 'average' });
    mockContext = {
      getStagingData: jest.fn(),
      setStagingData: jest.fn(),
      signer: mockSigner
    } as any;

    plugin.setContext(mockContext);
  });

  it('should calculate fee correctly', async () => {
    mockContext.getStagingData.mockReturnValue({
      fee: { gas: '200000', amount: [] }
    });

    await plugin.build();

    expect(mockContext.setStagingData).toHaveBeenCalledWith(
      FEE_PLUGIN_STAGING_KEYS.CALCULATED_FEE,
      expect.objectContaining({
        gas: '200000',
        gasPrice: 'average'
      })
    );
  });
});
```

## Usage Examples

### Complete Transaction Builder Implementation

Here's a comprehensive example of implementing a transaction builder for Cosmos networks:

```typescript
// cosmos-transaction-builder.ts

import { DirectSigner } from '@interchainjs/cosmos';
import { CosmosSignArgs, CosmosTransaction } from '@interchainjs/cosmos/types';

class CosmosTransactionBuilder extends WorkflowBuilder<DirectSigner, CosmosTransaction> {
  private signingMode: SigningMode;

  constructor(signer: DirectSigner, signingMode: SigningMode = SigningMode.DIRECT) {
    // Define multiple workflows for different signing scenarios
    const workflows = {
      // Standard direct signing workflow
      'direct': [
        new TxBodyPlugin(),
        new AuthInfoPlugin(),
        new SignDocPlugin(),
        new DirectSignaturePlugin(),
        new TxRawPlugin()
      ],

      // Amino signing workflow for legacy compatibility
      'amino': [
        new TxBodyPlugin(),
        new AminoAuthInfoPlugin(),
        new AminoSignDocPlugin(),
        new AminoSignaturePlugin(),
        new TxRawPlugin()
      ],

      // Multisig workflow with additional auth steps
      'multisig': [
        new TxBodyPlugin(),
        new MultisigAuthInfoPlugin(),
        new SignDocPlugin(),
        new MultisigSignaturePlugin(),
        new TxRawPlugin()
      ]
    };

    super(signer, workflows);
    this.signingMode = signingMode;
  }

  // Implement the abstract method to select workflow based on signing mode
  protected selectWorkflow(): string {
    switch (this.signingMode) {
      case SigningMode.DIRECT:
        return 'direct';
      case SigningMode.AMINO:
        return 'amino';
      case SigningMode.MULTISIG:
        return 'multisig';
      default:
        throw new Error(`Unsupported signing mode: ${this.signingMode}`);
    }
  }

  async buildTransaction(args: CosmosSignArgs): Promise<CosmosTransaction> {
    // Store transaction arguments for plugins to access
    this.context.setStagingData('sign_args', args);

    // Execute the selected workflow via common base implementation
    return this.build();
  }
}
```

### Plugin Implementation Example

Here's a complete plugin implementation:

```typescript
// tx-body-plugin.ts

// Import dependency keys from other plugins
import { MESSAGE_ENCODER_STAGING_KEYS } from './message-encoder-plugin';

// Export staging keys that this plugin produces
export const TX_BODY_PLUGIN_STAGING_KEYS = {
  TX_BODY: 'tx_body'
} as const;

// Plugin-specific types
interface TxBodyPluginParams {
  messages: readonly EncodeObject[];
  memo?: string;
  timeoutHeight?: bigint;
  extensionOptions?: readonly Any[];
  nonCriticalExtensionOptions?: readonly Any[];
}

interface TxBodyPluginOptions {
  defaultMemo?: string;
  allowEmptyMemo?: boolean;
}

export class TxBodyPlugin extends BaseWorkflowBuilderPlugin<
  TxBodyPluginParams,
  WorkflowBuilderContext<DirectSigner>
> {
  constructor(options: TxBodyPluginOptions = {}) {
    // Use constants for dependencies
    const dependencies = [
      'sign_args', // From initial context
      MESSAGE_ENCODER_STAGING_KEYS.ENCODED_MESSAGES // From message encoder plugin
    ];

    super(dependencies, options);
  }

  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Basic existence check

    if (key === 'sign_args') {
      const signArgs = value as CosmosSignArgs;
      if (signArgs.options?.timeoutHeight?.type === 'relative') {
        throw new Error("timeoutHeight type shouldn't be 'relative'.");
      }
    }
  }

  protected onParam(key: string, value: unknown): unknown {
    if (key === 'sign_args') {
      const signArgs = value as CosmosSignArgs;
      const { messages, memo, options } = signArgs;
      return {
        messages,
        memo,
        timeoutHeight: options?.timeoutHeight?.value,
        extensionOptions: options?.extensionOptions,
        nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
      };
    }
    return value;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TxBodyPluginParams {
    const signArgsData = params.signArgs as any;
    const encodedMessages = params.encodedMessages as readonly EncodeObject[];
    const options = this.options as TxBodyPluginOptions;

    return {
      messages: encodedMessages,
      memo: signArgsData.memo || options.defaultMemo || '',
      timeoutHeight: signArgsData.timeoutHeight,
      extensionOptions: signArgsData.extensionOptions,
      nonCriticalExtensionOptions: signArgsData.nonCriticalExtensionOptions
    };
  }

  protected async onBuild(
    ctx: WorkflowBuilderContext<DirectSigner>,
    params: TxBodyPluginParams
  ): Promise<void> {
    // Business logic: create transaction body
    const txBody = TxBody.fromPartial({
      messages: params.messages,
      memo: params.memo,
      timeoutHeight: params.timeoutHeight,
      extensionOptions: params.extensionOptions,
      nonCriticalExtensionOptions: params.nonCriticalExtensionOptions
    });

    // Store result using exported constants
    ctx.setStagingData(TX_BODY_PLUGIN_STAGING_KEYS.TX_BODY, txBody);
  }
}
```

### Using the Builder

```typescript
// Example usage in a signer implementation
class DirectSigner implements IUniSigner<CosmosAccount, CosmosSignArgs, CosmosSignOptions, CosmosSignResponse> {
  private builder: CosmosTransactionBuilder;

  constructor(wallet: IWallet, options: DirectSignerOptions) {
    this.builder = new CosmosTransactionBuilder(this, SigningMode.DIRECT);
  }

  async signAndBroadcast(
    args: CosmosSignArgs,
    options?: CosmosSignOptions
  ): Promise<CosmosSignResponse> {
    // Use the workflow builder to create the transaction
    const transaction = await this.builder.buildTransaction(args);

    // Broadcast the transaction
    return this.broadcast(transaction, options);
  }

  private async broadcast(
    transaction: CosmosTransaction,
    options?: CosmosSignOptions
  ): Promise<CosmosSignResponse> {
    // Implementation specific broadcasting logic
    const result = await this.queryClient.broadcast(transaction.txRaw);

    return {
      transactionHash: result.transactionHash,
      code: result.code,
      height: result.height,
      wait: () => this.waitForTransaction(result.transactionHash)
    };
  }
}
```

## Benefits

### For Library Users
- **Simple API**: Factory functions hide complexity
- **Type Safety**: Full TypeScript support with autocompletion
- **Flexibility**: Easy to customize behavior through options and workflow selection
- **Multiple Execution Paths**: Different workflows for different scenarios

### For Plugin Developers
- **Clear Contract**: Well-defined interfaces for plugins
- **Isolated Logic**: Each plugin handles one responsibility
- **Testability**: Plugins can be unit tested independently
- **Reusability**: Plugins can be shared across different builders

### For Framework Maintainers
- **Modularity**: Easy to add new features without changing existing code
- **Extensibility**: New blockchain support can reuse base architecture
- **Maintainability**: Clear separation of concerns and single responsibility principle
- **Workflow Flexibility**: Add new execution paths without modifying existing workflows

## Related Documentation

- [Network Implementation Guide](./network-implementation-guide.md) - Overall architecture for implementing blockchain networks
- [Auth vs. Wallet vs. Signer](./auth-wallet-signer.md) - Understanding the three-layer architecture
- [Tutorial](./tutorial.md) - Using and extending signers in InterchainJS

## Summary

The workflow builder and plugins architecture provides a robust foundation for building maintainable, testable, and extensible transaction builders for any blockchain ecosystem. Key benefits include:

1. **Modular Design**: Each plugin handles a single responsibility
2. **Type Safety**: Full TypeScript support with strict typing
3. **Extensibility**: Easy to add new workflows and plugins
4. **Testability**: Each component can be tested independently
5. **Reusability**: Plugins can be shared across different implementations
6. **Flexibility**: Multiple workflows support different execution scenarios

By following the patterns and best practices outlined in this guide, developers can create robust transaction building systems that are easy to maintain, extend, and test.
