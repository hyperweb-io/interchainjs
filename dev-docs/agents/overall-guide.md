# Development Best Practices Guide

This document captures the key lessons learned and best practices discovered during the implementation of the Cosmos Query Client, serving as a guide for future development work.

## 🏗️ Architecture & Design Patterns

### 1. Modular Client Architecture
**Pattern**: Separate concerns into distinct, focused clients
- **Query Client**: Read-only operations (blocks, transactions, chain state)
- **Event Client**: Real-time subscriptions and streaming
- **RPC Clients**: Transport layer abstraction (HTTP/WebSocket)
- **Protocol Adapter**: Version-specific protocol handling

**Benefits**:
- Clear separation of concerns
- Easier testing and maintenance
- Flexible composition for different use cases
- Protocol version independence

### 2. Factory Pattern for Client Creation
```typescript
// Good: Centralized client creation with shared configuration
const factory = new CosmosClientFactory({
  httpEndpoint: 'https://rpc.osmosis.zone',
  wsEndpoint: 'wss://rpc.osmosis.zone/websocket'
});

const queryClient = factory.createQueryClient();
const eventClient = factory.createEventClient();
```

**Benefits**:
- Consistent configuration across clients
- Easier endpoint management
- Simplified client instantiation

### 3. Interface-Driven Development
**Pattern**: Define interfaces first, implement later
- Common interfaces in `packages/types/` for cross-chain compatibility
- Network-specific interfaces in `networks/{chain}/src/types/`
- Implementation follows interface contracts

**Benefits**:
- Clear API contracts
- Better TypeScript support
- Easier mocking for tests
- Future-proof for multiple chains

## 🔧 Implementation Best Practices

### 1. Type Organization Strategy
```
packages/types/src/           # Cross-chain common types
├── query.ts                  # IQueryClient, IEventClient
├── rpc.ts                    # IRpcClient, JsonRpc types
└── errors.ts                 # Error hierarchies

networks/cosmos/src/types/    # Cosmos-specific types
├── protocol.ts               # RpcMethod, ResponseType enums
├── responses.ts              # Chain-specific response types
└── cosmos-client-interfaces.ts # ICosmosQueryClient
```

**Key Principles**:
- Common types are protocol-agnostic
- Chain-specific types extend common interfaces
- Enums for method/response type safety
- Leverage existing cosmos-types when possible

### 2. Error Handling Strategy
```typescript
// Hierarchical error types with categories
export abstract class QueryClientError extends Error {
  abstract readonly code: ErrorCode;
  abstract readonly category: ErrorCategory;
}

export class NetworkError extends QueryClientError {
  readonly code = ErrorCode.NETWORK_ERROR;
  readonly category = ErrorCategory.TRANSPORT;
}
```

**Benefits**:
- Structured error handling
- Easy error categorization
- Better debugging experience
- Consistent error responses

### 3. Async Iterator Patterns
```typescript
// Correct: Get iterator from AsyncIterable
const blockIterable = eventClient.subscribeToBlocks();
const blockIterator = blockIterable[Symbol.asyncIterator]();
const { value: block, done } = await blockIterator.next();

// Or use for-await-of
for await (const block of eventClient.subscribeToBlocks()) {
  // Process block
}
```

**Common Mistake**: Calling `.next()` directly on AsyncIterable

## 🧪 Testing Best Practices

### 1. Testing Strategy
**Approach**: Comprehensive test coverage with proper mocking and integration scenarios

**Benefits**:
- Validates implementation correctness
- Catches protocol version differences
- Tests error handling scenarios
- Verifies response structure assumptions

**Setup**:
```typescript
// Configure appropriate test timeouts
testTimeout: 60000

// Use proper mocking for external dependencies
// Test both success and failure scenarios
```

### 2. Test Structure Organization
```
networks/cosmos/starship/__tests__/queryclient/
├── query-client.test.ts      # Core query functionality
├── event-client.test.ts      # Event subscriptions
├── rpc-clients.test.ts       # Transport layer testing
├── protocol-adapter.test.ts  # Protocol handling
├── integration.test.ts       # End-to-end workflows
├── jest.config.js           # Test configuration
└── test-setup.ts            # Global test utilities
```

**Key Principles**:
- Separate test files by component
- **Use package names in imports** - `@interchainjs/cosmos`, `@interchainjs/types`
- Integration tests for end-to-end workflows
- Comprehensive coverage of error scenarios
- Performance testing for parallel operations

### 3. Type-Safe Testing Patterns
```typescript
// Always use package names in imports
import { CosmosQueryClient } from '@interchainjs/cosmos';
import { NetworkError } from '@interchainjs/types';

// Use proper type assertions for unknown responses
expect((result as any).node_info.network).toBe('osmosis-1');

// Handle optional properties gracefully
expect(status.nodeInfo?.moniker).toBeDefined();

// Test async iterables correctly
const iterator = asyncIterable[Symbol.asyncIterator]();
const { value, done } = await iterator.next();
```

## 🔄 Development Workflow

### 1. Incremental Implementation
1. **Define interfaces first** - Clear API contracts
2. **Implement core functionality** - Basic operations working
3. **Add comprehensive tests** - Validate implementation correctness
4. **Fix type issues iteratively** - Address TypeScript errors
5. **Optimize and refine** - Performance and error handling

### 2. Build System Integration
```bash
# Use Lerna for monorepo management (can be very slow)
npx lerna run build

# Verify implementation structure
node verify-implementation.js

# Run comprehensive tests
npm test
```

**Important Notes**:
- **Build times can be very long** - Lerna builds all packages sequentially
- **Test execution can be very slow** - Network tests may take 20+ minutes to complete
- Consider using `--scope` flag to build specific packages during development
- Use package names (`@interchainjs/cosmos`) in all imports, not relative paths

### 3. Type System Alignment
**Challenge**: Aligning test expectations with actual cosmos-types structure

**Solution**:
- Check actual type definitions in `libs/cosmos-types/`
- Use cosmos-types directly instead of custom types where possible
- Update test expectations to match real API responses

**Example**:
```typescript
// cosmos-types Block structure
interface Block {
  header: Header;      // Direct property
  data: Data;
  evidence: EvidenceList;
  lastCommit?: Commit;
}

// Not: block.block.header (common mistake)
// Correct: block.header
```

## 🚀 Performance Considerations

### 1. Connection Management
- **HTTP**: Stateless, good for simple queries
- **WebSocket**: Persistent, required for subscriptions
- **Connection pooling**: Reuse connections when possible

### 2. Parallel Operations
```typescript
// Efficient parallel requests
const [status, validators, latestBlock] = await Promise.all([
  queryClient.getStatus(),
  queryClient.getValidators(),
  queryClient.getBlock()
]);
```

### 3. Error Recovery
- Implement timeout handling
- Graceful degradation for optional features
- Retry logic for transient failures

## 📊 Success Metrics

### Implementation Quality
- **Type Safety**: 100% TypeScript compilation
- **Test Coverage**: Comprehensive test suite with proper mocking
- **Protocol Compatibility**: Supports multiple Cosmos SDK versions
- **Error Handling**: Comprehensive error management

### Production Readiness
- ✅ **HTTP Operations**: Fully functional
- ✅ **Core Queries**: Block, transaction, validator queries working
- ✅ **Error Handling**: Proper error types and recovery
- 🔄 **WebSocket Operations**: Implementation complete, connection issues
- 🔄 **Event Streaming**: Basic functionality working

## 🎯 Key Takeaways

1. **Start with interfaces** - Define clear contracts before implementation
2. **Comprehensive testing** - Validates implementation correctness
3. **Leverage existing types** - Use cosmos-types instead of reinventing
4. **Modular architecture** - Separate concerns for maintainability
5. **Comprehensive error handling** - Plan for failure scenarios
6. **Iterative development** - Build incrementally, test frequently
7. **Type system alignment** - Ensure tests match actual API structure
8. **Use package names** - Always import with `@interchainjs/cosmos`, `@interchainjs/types`
9. **Expect long build times** - Lerna builds can be very slow, plan accordingly

## 🔮 Future Considerations

### Multi-Chain Support
- Abstract common patterns into base classes
- Chain-specific implementations extend base functionality
- Shared configuration and error handling

### Advanced Features
- Connection pooling and load balancing
- Caching strategies for frequently accessed data
- Metrics and monitoring integration
- Rate limiting and backoff strategies

### Developer Experience
- Auto-generated documentation from interfaces
- CLI tools for testing and validation
- Development environment setup automation
- Debugging and troubleshooting guides

This guide serves as a foundation for future blockchain client implementations, capturing the lessons learned from real-world development and testing scenarios.