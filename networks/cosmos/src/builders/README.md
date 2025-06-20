# Cosmos Transaction Builders

This directory contains the refactored transaction builders for Cosmos chains using a strict typing system and plugin-based architecture.

## Architecture Overview

The new builder architecture follows these principles:

1. **Strict Typing**: No `any` types, uses `unknown` when type is not known
2. **Plugin-based**: Builders use a series of plugins to handle different aspects of transaction building
3. **Extensible**: Easy to add new signing modes or customize behavior
4. **Type-safe**: Full TypeScript support with proper generics

## Base Types

### BaseBuilder Interface
```typescript
interface IBaseBuilder<TReturnObj> {
  build(): Promise<TReturnObj>;
}
```

### Plugin Interface
```typescript
interface IPlugin<TContext> {
  setContext(context: TContext): void;
  getContext(): TContext;
  build(): Promise<void>;
}
```

### Base Plugin Class
```typescript
abstract class BasePlugin<TBuilderInput, TContext> {
  protected abstract retrieveParams(): TBuilderInput;
  protected abstract onBuild(ctx: TContext, params: TBuilderInput): Promise<void>;
}
```

## Cosmos-Specific Implementation

### Available Builders

#### AminoTxBuilder
For Amino (JSON) signing:

```typescript
import { createAminoBuilder } from './builders';

// Create an Amino builder
const aminoBuilder = createAminoBuilder(aminoSigner);

// Build and sign a transaction
const result = await aminoBuilder.buildSignedTxDoc({
  messages: [{ typeUrl: '/cosmos.bank.v1beta1.MsgSend', value: msgSend }],
  fee: { gas: '200000', amount: [] },
  memo: 'Test transaction',
  options: { chainId: 'osmosis-1' }
});

console.log('Signed transaction:', result.tx);
console.log('Sign document:', result.doc);
```

#### DirectTxBuilder
For Direct (Protobuf) signing:

```typescript
import { createDirectBuilder } from './builders';

// Create a Direct builder
const directBuilder = createDirectBuilder(directSigner);

// Build and sign a transaction
const result = await directBuilder.buildSignedTxDoc({
  messages: [{ typeUrl: '/cosmos.bank.v1beta1.MsgSend', value: msgSend }],
  fee: { gas: '200000', amount: [] },
  memo: 'Test transaction',
  options: { chainId: 'osmosis-1' }
});
```

## Plugin Architecture (Planned)

The plugin architecture is designed to break down transaction building into discrete, composable steps:

1. **TxBodyPlugin**: Builds the transaction body from messages
2. **SignerInfoPlugin**: Creates signer information with public key and sequence
3. **FeePlugin**: Calculates or validates transaction fees
4. **AuthInfoPlugin**: Combines signer info and fee into auth info
5. **DocumentPlugin**: Creates the sign document from components
6. **SignaturePlugin**: Signs the document and creates final transaction

### Example Plugin Usage (Future)
```typescript
import {
  AminoBuilder,
  TxBodyPlugin,
  SignerInfoPlugin,
  FeePlugin,
  // ... other plugins
} from './builders';

const aminoBuilder = new AminoBuilder(signer, [
  new TxBodyPlugin({}),
  new SignerInfoPlugin({}),
  new FeePlugin({ gasPrice: 'average' }),
  // ... configure plugins as needed
]);
```

## Migration from BaseCosmosTxBuilder

The old `BaseCosmosTxBuilder` can be replaced with the new builders:

### Before (Old)
```typescript
// Old approach
class MyTxBuilder extends BaseCosmosTxBuilder<SignDoc> {
  constructor(signMode: SignMode, ctx: BaseCosmosTxBuilderContext) {
    super(signMode, ctx);
  }
  // ... implement abstract methods
}
```

### After (New)
```typescript
// New approach - use factory functions
const builder = createDirectBuilder(signer);
// or
const builder = createAminoBuilder(signer);

// Then use the builder
const result = await builder.buildSignedTxDoc(signArgs);
```

## Benefits

1. **Type Safety**: Strict typing prevents runtime errors
2. **Modularity**: Plugin architecture allows for easy customization
3. **Testability**: Each plugin can be tested independently
4. **Maintainability**: Clear separation of concerns
5. **Extensibility**: Easy to add new signing modes or features

## Current Status

- ✅ Base builder interfaces and types
- ✅ Cosmos-specific types and interfaces
- ✅ AminoTxBuilder implementation
- ✅ DirectTxBuilder implementation
- 🚧 Plugin architecture (in progress - type issues being resolved)
- ⏳ Full integration with existing codebase
- ⏳ Comprehensive test coverage

## TODO

1. Fix plugin architecture type issues
2. Implement proper transaction body and auth info encoding
3. Add comprehensive test coverage
4. Migrate existing builders to use new architecture
5. Add support for additional signing modes (e.g., textual)
6. Performance optimization and benchmarking