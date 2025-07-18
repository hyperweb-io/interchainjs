# Cosmos Events Refactoring Plan

## Overview

This document outlines the comprehensive plan for refactoring the Cosmos event system to follow the established query structure pattern. The refactoring aims to improve type safety, maintainability, and consistency with the existing query system.

## Current State Analysis

### ✅ Working Components
- **WebSocket connections** confirmed working with starship environment
- **Event streaming** functional for NewBlock, Tx, and ValidatorSetUpdate events
- **Basic subscription management** in place

### ❌ Issues Identified
- **No type safety** - generic `subscribeToEvents<TEvent>` method
- **No codec pattern** - uses `encodeParams`/`decodeResponse` instead of specific codecs
- **Inconsistent structure** - doesn't follow query pattern conventions
- **Limited error handling** - basic error propagation without specific types

## Target Architecture

### Directory Structure
```
networks/cosmos/src/events/
├── cosmos-event-client.ts        # Refactored client implementation
├── types/
│   ├── requests/
│   │   └── common/
│   │       └── events/
│   │           ├── subscribe-params.ts
│   │           ├── encoded-subscribe-params.ts
│   │           └── index.ts
│   └── responses/
│       └── common/
│           └── events/
│               ├── new-block-event.ts
│               ├── tx-event.ts
│               ├── validator-set-update-event.ts
│               ├── block-header-event.ts
│               └── index.ts
```

### Core Event Types

#### 1. NewBlockEvent
- Block data and metadata
- Contains full block structure (header, data, evidence, last_commit)
- Used for monitoring new block creation

#### 2. TxEvent
- Transaction execution results
- Contains TxResult with logs, events, and response data
- Used for monitoring transaction lifecycle

#### 3. ValidatorSetUpdateEvent
- Validator set changes
- Contains validator updates and power changes
- Used for governance and staking monitoring

#### 4. BlockHeaderEvent
- Header-only updates
- Lightweight alternative to full NewBlockEvent
- Used for consensus monitoring

## Refactoring Phases

### Phase 1: Infrastructure Setup (High Priority)

#### 1.1 Create Response Types and Codecs
- [ ] Create `NewBlockEvent` type and codec
- [ ] Create `TxEvent` type and codec
- [ ] Create `ValidatorSetUpdateEvent` type and codec
- [ ] Create `BlockHeaderEvent` type and codec
- [ ] Add index exports for all event types

#### 1.2 Create Request Types and Codecs
- [ ] Create `SubscribeParams` type for subscription parameters
- [ ] Create `EncodedSubscribeParams` for RPC encoding
- [ ] Implement parameter encoding for query filters
- [ ] Add index exports for request types

#### 1.3 Update Adapter Interfaces
- [ ] Add `decodeNewBlockEvent` to `ResponseDecoder` interface
- [ ] Add `decodeTxEvent` to `ResponseDecoder` interface
- [ ] Add `decodeValidatorSetUpdateEvent` to `ResponseDecoder` interface
- [ ] Add `decodeBlockHeaderEvent` to `ResponseDecoder` interface
- [ ] Add `encodeSubscribe` to `RequestEncoder` interface

#### 1.4 Implement Adapter Methods
- [ ] Implement decoding methods in `BaseAdapter`
- [ ] Implement encoding method for subscription parameters
- [ ] Handle response wrapper structure in decoding
- [ ] Add proper type casting and validation

### Phase 2: Client Refactoring (Medium Priority)

#### 2.1 Update CosmosEventClient
- [ ] Replace generic `subscribeToEvents` with specific methods
- [ ] Implement `subscribeToNewBlocks(): AsyncIterable<NewBlockEvent>`
- [ ] Implement `subscribeToTxs(query?: TxQuery): AsyncIterable<TxEvent>`
- [ ] Implement `subscribeToValidatorSetUpdates(): AsyncIterable<ValidatorSetUpdateEvent>`
- [ ] Implement `subscribeToBlockHeaders(): AsyncIterable<BlockHeaderEvent>`

#### 2.2 Improve Subscription Management
- [ ] Add proper subscription lifecycle management
- [ ] Implement efficient cleanup on unsubscribe
- [ ] Add subscription ID tracking
- [ ] Handle WebSocket reconnection logic

#### 2.3 Error Handling Enhancement
- [ ] Create specific error types for event system
- [ ] Add proper error propagation in async iterators
- [ ] Implement timeout handling for subscriptions
- [ ] Add connection state management

### Phase 3: Testing (Medium Priority)

#### 3.1 Create E2E Tests
- [ ] Test NewBlockEvent subscription with starship
- [ ] Test TxEvent subscription with real transactions
- [ ] Test ValidatorSetUpdateEvent with governance actions
- [ ] Test BlockHeaderEvent with consensus monitoring

#### 3.2 Test Infrastructure
- [ ] Create test utilities for event generation
- [ ] Mock WebSocket server for unit tests
- [ ] Create integration tests with starship environment
- [ ] Add performance benchmarks for high-frequency events

#### 3.3 Edge Case Testing
- [ ] Test subscription with complex query parameters
- [ ] Test unsubscribe from multiple active subscriptions
- [ ] Test error recovery after connection drops
- [ ] Test memory leaks with long-running subscriptions

### Phase 4: Integration (Low Priority)

#### 4.1 Export Updates
- [ ] Update main index.ts exports
- [ ] Ensure backward compatibility
- [ ] Add deprecation notices for old methods
- [ ] Create migration guide documentation

#### 4.2 Documentation
- [ ] Create comprehensive API documentation
- [ ] Add usage examples for each event type
- [ ] Document starship testing procedures
- [ ] Create troubleshooting guide

#### 4.3 Performance Optimization
- [ ] Profile memory usage with large event streams
- [ ] Optimize codec performance for high-throughput scenarios
- [ ] Add batch processing capabilities
- [ ] Implement event filtering at the codec level

## Implementation Details

### Method Signature Changes

#### Before (Current)
```typescript
class CosmosEventClient {
  async* subscribeToEvents<TEvent>(
    eventType: string, 
    filter?: unknown
  ): AsyncIterable<TEvent>
  
  async* subscribeToBlocks(): AsyncIterable<Block>
  async* subscribeToBlockHeaders(): AsyncIterable<BlockHeader>
  async* subscribeToTxs(query?: string): AsyncIterable<TxEvent>
}
```

#### After (Refactored)
```typescript
class CosmosEventClient {
  subscribeToNewBlocks(): AsyncIterable<NewBlockEvent>
  subscribeToTxs(query?: TxQuery): AsyncIterable<TxEvent>
  subscribeToValidatorSetUpdates(): AsyncIterable<ValidatorSetUpdateEvent>
  subscribeToBlockHeaders(): AsyncIterable<BlockHeaderEvent>
}
```

### Type Safety Improvements

#### Event Data Structure
```typescript
interface NewBlockEvent {
  readonly block: Block;
  readonly resultBeginBlock: ResultBeginBlock;
  readonly resultEndBlock: ResultEndBlock;
  readonly events: readonly Event[];
}

interface TxEvent {
  readonly tx: Uint8Array;
  readonly result: TxResult;
  readonly height: bigint;
  readonly index: number;
  readonly hash: string;
}

interface ValidatorSetUpdateEvent {
  readonly validatorUpdates: readonly ValidatorUpdate[];
  readonly height: bigint;
  readonly time: Date;
}

interface BlockHeaderEvent {
  readonly header: BlockHeader;
  readonly height: bigint;
  readonly time: Date;
}
```

### Codec Implementation Pattern

Following the query pattern exactly:

#### Response Codec Example
```typescript
// types/responses/common/events/new-block-event.ts
export interface NewBlockEvent {
  readonly block: Block;
  readonly resultBeginBlock: ResultBeginBlock;
  readonly resultEndBlock: ResultEndBlock;
}

export const NewBlockEventCodec = createCodec<NewBlockEvent>({
  block: (v) => createBlock(v),
  resultBeginBlock: {
    source: 'result_begin_block',
    converter: (v) => createResultBeginBlock(v)
  },
  resultEndBlock: {
    source: 'result_end_block',
    converter: (v) => createResultEndBlock(v)
  }
});

export function createNewBlockEvent(data: unknown): NewBlockEvent {
  return NewBlockEventCodec.create(data);
}
```

#### Request Codec Example
```typescript
// types/requests/common/events/subscribe-params.ts
export interface SubscribeParams {
  readonly query?: string;
  readonly eventType?: string;
}

export const SubscribeParamsCodec = createCodec<EncodedSubscribeParams>({
  query: (value: unknown) => String(value),
  eventType: {
    source: 'event_type',
    converter: (value: unknown) => String(value)
  }
});

export function encodeSubscribeParams(params: SubscribeParams): EncodedSubscribeParams {
  return SubscribeParamsCodec.create(params);
}
```

## Testing Strategy

### Starship E2E Tests
```typescript
describe('CosmosEventClient E2E', () => {
  it('should subscribe to NewBlock events', async () => {
    const client = new CosmosEventClient(rpcClient, adapter);
    const blocks = client.subscribeToNewBlocks();
    
    const block = await blocks.next();
    expect(block.value).toBeInstanceOf(NewBlockEvent);
    expect(block.value.height).toBeGreaterThan(0n);
  });
  
  it('should subscribe to Tx events with query', async () => {
    const client = new CosmosEventClient(rpcClient, adapter);
    const txs = client.subscribeToTxs({ query: "message.action='send'" });
    
    const tx = await txs.next();
    expect(tx.value).toBeInstanceOf(TxEvent);
    expect(tx.value.hash).toBeDefined();
  });
});
```

### Debug Utilities
- **starship-events-test.js** - WebSocket connection testing
- **event-generator.ts** - Mock event creation utilities
- **performance-monitor.ts** - Event throughput benchmarking

## Migration Path

### Phase 1: Parallel Implementation
- Keep existing methods for backward compatibility
- Add new typed methods alongside old ones
- Mark old methods as deprecated

### Phase 2: Migration Support
- Provide migration utilities
- Create compatibility layer if needed
- Update documentation with migration guide

### Phase 3: Cleanup
- Remove deprecated methods
- Clean up generic encoding/decoding
- Finalize new API

## Success Criteria

### Functional Requirements
- [ ] All event types working with starship environment
- [ ] Type-safe subscription methods
- [ ] Proper error handling and cleanup
- [ ] Performance equivalent or better than current implementation

### Quality Requirements
- [ ] 100% type safety across all event operations
- [ ] Comprehensive test coverage (unit + e2e)
- [ ] Clear and complete documentation
- [ ] Backward compatibility during transition

### Performance Requirements
- [ ] No memory leaks in long-running subscriptions
- [ ] Efficient codec performance for high-throughput scenarios
- [ ] Graceful handling of connection failures
- [ ] Proper resource cleanup on unsubscribe

## Timeline

### Week 1: Infrastructure Setup
- Create all type definitions and codecs
- Update adapter interfaces and implementations
- Set up testing infrastructure

### Week 2: Client Refactoring
- Refactor CosmosEventClient implementation
- Implement new subscription methods
- Add comprehensive error handling

### Week 3: Testing & Integration
- Create e2e tests with starship
- Performance testing and optimization
- Documentation and migration guide

### Week 4: Final Review
- Code review and feedback incorporation
- Final testing and bug fixes
- Deployment preparation

## Risk Mitigation

### Technical Risks
- **WebSocket stability**: Comprehensive reconnection handling
- **Type compatibility**: Extensive testing with real chain data
- **Performance impact**: Benchmarking and optimization

### Project Risks
- **Scope creep**: Strict phase boundaries and review gates
- **Backward compatibility**: Parallel implementation approach
- **Testing complexity**: Starship-based testing strategy

## Conclusion

This refactoring will transform the Cosmos event system from a generic, type-unsafe implementation to a robust, type-safe, and maintainable system that follows the established query pattern conventions. The systematic approach ensures minimal disruption while providing significant improvements in developer experience and system reliability.