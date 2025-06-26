# Query Client Architecture Implementation Plan

## Overview

This document refines the query client architecture thoughts with specific implementation details, type locations, and concrete examples using existing types from the codebase.

## Type Organization Strategy

### Common Types (Cross-Chain)
**Location**: `packages/types/src/`

These types should be protocol-agnostic and reusable across different blockchain networks:

```typescript
// packages/types/src/query-client.ts
export interface IQueryClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getEndpoint(): string;
}

export interface IEventClient extends IQueryClient {
  unsubscribeFromAll(): Promise<void>;
}

// packages/types/src/rpc.ts
export interface IRpcClient {
  call<TRequest, TResponse>(method: string, params?: TRequest): Promise<TResponse>;
  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  readonly endpoint: string;
}

export interface JsonRpcRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: any;
}

export interface JsonRpcResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

// Utility function for creating JSON-RPC requests
export function createJsonRpcRequest(
  method: string, 
  params?: unknown, 
  id?: string
): JsonRpcRequest {
  return {
    jsonrpc: '2.0',
    id: id || Math.random().toString(36).substring(7),
    method,
    params: params || {}
  };
}

// packages/types/src/errors.ts
export enum ErrorCode {
  NETWORK_ERROR = "NETWORK_ERROR",
  PROTOCOL_ERROR = "PROTOCOL_ERROR", 
  VALIDATION_ERROR = "VALIDATION_ERROR",
  TIMEOUT_ERROR = "TIMEOUT_ERROR",
  CONNECTION_ERROR = "CONNECTION_ERROR"
}

export enum ErrorCategory {
  TRANSPORT = "transport",
  PROTOCOL = "protocol",
  APPLICATION = "application"
}

export abstract class QueryClientError extends Error {
  abstract readonly code: ErrorCode;
  abstract readonly category: ErrorCategory;
  
  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = this.constructor.name;
  }
}
```

### Cosmos-Specific Types
**Location**: `networks/cosmos/src/types/`

These types are specific to Cosmos SDK chains and leverage existing cosmos-types:

```typescript
// networks/cosmos/src/types/protocol.ts
export interface IProtocolAdapter {
  readonly version: ProtocolVersion;
  encodeRequest<T>(method: RpcMethod, params?: T): RpcRequest;
  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T;
  decodeEvent<T>(event: RpcEvent, expectedType: EventType): T;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
}

export enum ProtocolVersion {
  TENDERMINT_034 = "tendermint-0.34",
  TENDERMINT_037 = "tendermint-0.37", 
  COMET_038 = "comet-0.38",
  COMET_100 = "comet-1.0"
}

export enum RpcMethod {
  // Basic info
  STATUS = "status",
  ABCI_INFO = "abci_info",
  HEALTH = "health",
  NET_INFO = "net_info",
  
  // Block queries
  BLOCK = "block",
  BLOCK_BY_HASH = "block_by_hash",
  BLOCK_RESULTS = "block_results",
  BLOCK_SEARCH = "block_search",
  BLOCKCHAIN = "blockchain",
  HEADER = "header",
  HEADER_BY_HASH = "header_by_hash",
  COMMIT = "commit",
  
  // Transaction queries
  TX = "tx",
  TX_SEARCH = "tx_search",
  CHECK_TX = "check_tx",
  UNCONFIRMED_TXS = "unconfirmed_txs",
  NUM_UNCONFIRMED_TXS = "num_unconfirmed_txs",
  
  // Chain queries
  VALIDATORS = "validators",
  CONSENSUS_PARAMS = "consensus_params",
  CONSENSUS_STATE = "consensus_state",
  DUMP_CONSENSUS_STATE = "dump_consensus_state",
  GENESIS = "genesis",
  GENESIS_CHUNKED = "genesis_chunked",
  
  // ABCI queries
  ABCI_QUERY = "abci_query",
  
  // Subscription
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
  UNSUBSCRIBE_ALL = "unsubscribe_all"
}

export enum ResponseType {
  // Basic info
  STATUS = "status",
  ABCI_INFO = "abci_info",
  HEALTH = "health",
  NET_INFO = "net_info",
  
  // Block queries
  BLOCK = "block",
  BLOCK_RESULTS = "block_results",
  BLOCK_SEARCH = "block_search",
  BLOCKCHAIN = "blockchain",
  HEADER = "header",
  COMMIT = "commit",
  
  // Transaction queries
  TX = "tx",
  TX_SEARCH = "tx_search",
  CHECK_TX = "check_tx",
  UNCONFIRMED_TXS = "unconfirmed_txs",
  NUM_UNCONFIRMED_TXS = "num_unconfirmed_txs",
  
  // Chain queries
  VALIDATORS = "validators",
  CONSENSUS_PARAMS = "consensus_params",
  CONSENSUS_STATE = "consensus_state",
  DUMP_CONSENSUS_STATE = "dump_consensus_state",
  GENESIS = "genesis",
  GENESIS_CHUNKED = "genesis_chunked",
  
  // ABCI queries
  ABCI_QUERY = "abci_query"
}

export enum EventType {
  NEW_BLOCK = "new_block",
  NEW_BLOCK_HEADER = "new_block_header",
  TX = "tx",
  GENERIC = "generic"
}

export interface ProtocolInfo {
  version: ProtocolVersion;
  capabilities: ProtocolCapabilities;
  supportedMethods: Set<RpcMethod>;
}

export interface ProtocolCapabilities {
  streaming: boolean;
  abciQuery: boolean;
  txSearch: boolean;
  blockSearch: boolean;
}

export interface RpcRequest {
  method: string;
  params: any;
}

export interface RpcResponse {
  result: any;
  error?: any;
}

export interface RpcEvent {
  data: any;
  query?: string;
}

// networks/cosmos/src/types/cosmos-client.ts
import { IQueryClient, IEventClient } from '@interchainjs/types';
import { 
  TxResponse, 
  SearchTxsResult, 
  SearchBlocksResult 
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Block } from '@interchainjs/cosmos-types/tendermint/types/block';
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';

export interface ICosmosQueryClient extends IQueryClient {
  // Basic info
  getStatus(): Promise<ChainStatus>;
  getAbciInfo(): Promise<AbciInfo>;
  getHealth(): Promise<HealthResult>;
  getNetInfo(): Promise<NetInfo>;

  // Block queries
  getBlock(height?: number): Promise<Block>;
  getBlockByHash(hash: Uint8Array): Promise<Block>;
  getBlockResults(height?: number): Promise<BlockResults>;
  searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>;
  getBlockchain(minHeight: number, maxHeight: number): Promise<BlockchainInfo>;
  getHeader(height?: number): Promise<BlockHeader>;
  getHeaderByHash(hash: Uint8Array): Promise<BlockHeader>;
  getCommit(height?: number): Promise<Commit>;

  // Transaction queries  
  getTx(hash: Uint8Array, prove?: boolean): Promise<TxResponse>;
  searchTxs(params: TxSearchParams): Promise<SearchTxsResult>;
  checkTx(tx: Uint8Array): Promise<CheckTxResult>;
  getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>;
  getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs>;

  // Chain queries
  getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>;
  getConsensusParams(height?: number): Promise<ConsensusParams>;
  getConsensusState(): Promise<ConsensusState>;
  dumpConsensusState(): Promise<ConsensusStateDump>;
  getGenesis(): Promise<Genesis>;
  getGenesisChunked(chunk: number): Promise<GenesisChunk>;

  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;

  // Protocol info
  getProtocolInfo(): ProtocolInfo;
}

export interface ICosmosEventClient extends IEventClient {
  // Event streams
  subscribeToBlocks(): AsyncIterable<Block>;
  subscribeToBlockHeaders(): AsyncIterable<BlockHeader>;
  subscribeToTxs(query?: string): AsyncIterable<TxEvent>;
  subscribeToEvents(query: string): AsyncIterable<Event>;

  // Protocol info
  getProtocolInfo(): ProtocolInfo;
}

// networks/cosmos/src/types/requests.ts
export interface BlockSearchParams {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: 'asc' | 'desc';
}

export interface TxSearchParams {
  query: string;
  prove?: boolean;
  page?: number;
  perPage?: number;
  orderBy?: 'asc' | 'desc';
}

export interface AbciQueryParams {
  path: string;
  data?: Uint8Array;
  height?: number;
  prove?: boolean;
}

// networks/cosmos/src/types/responses.ts
import { 
  TxResponse as CosmosSDKTxResponse,
  ABCIMessageLog 
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';

export interface BlockResults {
  height: number;
  results: TxResult[];
  validatorUpdates: ValidatorUpdate[];
  beginBlockEvents?: Event[];  // Tendermint 0.34/0.37
  endBlockEvents?: Event[];    // Tendermint 0.34/0.37
  finalizeBlockEvents?: Event[]; // CometBFT 0.38+
}

export interface TxResult {
  code: number;
  data?: Uint8Array;
  log: string;
  info: string;
  gasWanted: number;
  gasUsed: number;
  events: Event[];
  codespace: string;
}

export interface ChainStatus {
  nodeInfo: NodeInfo;
  syncInfo: SyncInfo;
  validatorInfo: ValidatorInfo;
}

export interface NodeInfo {
  protocolVersion: {
    p2p: string;
    block: string;
    app: string;
  };
  id: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: string;
  moniker: string;
  other: {
    txIndex: string;
    rpcAddress: string;
  };
}

export interface SyncInfo {
  latestBlockHash: string;
  latestAppHash: string;
  latestBlockHeight: string;
  latestBlockTime: string;
  earliestBlockHash: string;
  earliestAppHash: string;
  earliestBlockHeight: string;
  earliestBlockTime: string;
  catchingUp: boolean;
}

export interface ValidatorInfo {
  address: string;
  pubKey: {
    type: string;
    value: string;
  };
  votingPower: string;
}

export interface ValidatorSet {
  blockHeight: string;
  validators: Validator[];
  count: string;
  total: string;
}

export interface Validator {
  address: string;
  pubKey: {
    type: string;
    value: string;
  };
  votingPower: string;
  proposerPriority: string;
}

export interface ValidatorUpdate {
  pubKey: {
    type: string;
    value: string;
  };
  power: string;
}

export interface AbciQueryResult {
  code: number;
  log: string;
  info: string;
  index: number;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: number;
  codespace: string;
}

export interface ProofOps {
  ops: ProofOp[];
}

export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}

export interface BlockId {
  hash: Uint8Array;
  partSetHeader: {
    total: number;
    hash: Uint8Array;
  };
}

// Additional response types for missing APIs
export interface AbciInfo {
  data: string;
  version: string;
  appVersion: string;
  lastBlockHeight: string;
  lastBlockAppHash: Uint8Array;
}

export interface HealthResult {
  // Empty object for healthy node
}

export interface NetInfo {
  listening: boolean;
  listeners: string[];
  nPeers: string;
  peers: PeerInfo[];
}

export interface PeerInfo {
  nodeInfo: {
    protocolVersion: {
      p2p: string;
      block: string;
      app: string;
    };
    id: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: string;
    moniker: string;
    other: {
      txIndex: string;
      rpcAddress: string;
    };
  };
  isOutbound: boolean;
  connectionStatus: {
    duration: string;
    sendMonitor: {
      active: boolean;
      start: string;
      duration: string;
      idle: string;
      bytes: string;
      samples: string;
      instRate: string;
      curRate: string;
      avgRate: string;
      peakRate: string;
      bytesRem: string;
      timeRem: string;
      progress: number;
    };
    recvMonitor: {
      active: boolean;
      start: string;
      duration: string;
      idle: string;
      bytes: string;
      samples: string;
      instRate: string;
      curRate: string;
      avgRate: string;
      peakRate: string;
      bytesRem: string;
      timeRem: string;
      progress: number;
    };
    channels: Array<{
      id: number;
      sendQueueCapacity: string;
      sendQueueSize: string;
      priority: string;
      recentlySent: string;
    }>;
  };
  remoteIp: string;
}

export interface BlockchainInfo {
  lastHeight: string;
  blockMetas: BlockMeta[];
}

export interface BlockMeta {
  blockId: BlockId;
  blockSize: string;
  header: BlockHeader;
  numTxs: string;
}

export interface Commit {
  height: string;
  round: number;
  blockId: BlockId;
  signatures: CommitSig[];
}

export interface CommitSig {
  blockIdFlag: number;
  validatorAddress: Uint8Array;
  timestamp: string;
  signature: Uint8Array;
}

export interface CheckTxResult {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: string;
  gasUsed: string;
  events: Event[];
  codespace: string;
  sender: string;
  priority: string;
  mempoolError: string;
}

export interface UnconfirmedTxs {
  nTxs: string;
  total: string;
  totalBytes: string;
  txs: Uint8Array[];
}

export interface NumUnconfirmedTxs {
  nTxs: string;
  total: string;
  totalBytes: string;
}

export interface ConsensusParams {
  block: {
    maxBytes: string;
    maxGas: string;
    timeIotaMs: string;
  };
  evidence: {
    maxAgeNumBlocks: string;
    maxAgeDuration: string;
    maxBytes: string;
  };
  validator: {
    pubKeyTypes: string[];
  };
  version: {
    appVersion: string;
  };
}

export interface ConsensusState {
  height: string;
  round: number;
  step: number;
  startTime: string;
  commitTime: string;
  validators: {
    validators: Validator[];
    proposer: Validator;
  };
  proposal: any;
  proposalBlock: any;
  proposalBlockParts: any;
  lockedRound: number;
  lockedBlock: any;
  lockedBlockParts: any;
  validRound: number;
  validBlock: any;
  validBlockParts: any;
  votes: any[];
  commitRound: number;
  lastCommit: any;
  lastValidators: {
    validators: Validator[];
    proposer: Validator;
  };
  triggeredTimeoutPrecommit: boolean;
}

export interface ConsensusStateDump {
  roundState: ConsensusState;
  peers: Array<{
    nodeAddress: string;
    peerState: {
      height: string;
      round: number;
      step: number;
      startTime: string;
      proposal: boolean;
      proposalBlockPartsHeader: any;
      proposalBlockParts: any;
      proposalPOLRound: number;
      proposalPOL: any;
      prevotes: any;
      precommits: any;
      catchupCommitRound: number;
      catchupCommit: any;
    };
  }>;
}

export interface Genesis {
  genesisTime: string;
  chainId: string;
  initialHeight: string;
  consensusParams: ConsensusParams;
  validators: Array<{
    address: Uint8Array;
    pubKey: {
      type: string;
      value: string;
    };
    power: string;
    name: string;
  }>;
  appHash: Uint8Array;
  appState: any;
}

export interface GenesisChunk {
  chunk: number;
  total: number;
  data: string;
}

// Event types for streaming
export interface TxEvent {
  tx: TxResponse;
  result: TxResult;
}

export interface BlockHeader {
  version: {
    block: number;
    app: number;
  };
  chainId: string;
  height: number;
  time: Date;
  lastBlockId: BlockId;
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  validatorsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  consensusHash: Uint8Array;
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  evidenceHash: Uint8Array;
  proposerAddress: Uint8Array;
}
```

## Implementation Structure

### 1. RPC Client Implementations
**Location**: `networks/cosmos/src/rpc/`

```typescript
// networks/cosmos/src/rpc/http-client.ts
import { IRpcClient, createJsonRpcRequest } from '@interchainjs/types';
import { QueryClientError, ErrorCode, ErrorCategory } from '@interchainjs/types';

export interface HttpEndpoint {
  url: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class HttpRpcClient implements IRpcClient {
  private connected = false;
  
  constructor(
    public readonly endpoint: string | HttpEndpoint,
    private readonly timeout: number = 10000
  ) {}

  async connect(): Promise<void> {
    // HTTP is stateless, just validate endpoint
    try {
      await this.call('status');
      this.connected = true;
    } catch (error) {
      throw new NetworkError(`Failed to connect to ${this.endpoint}`, error);
    }
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }

  async call<TRequest, TResponse>(
    method: string, 
    params?: TRequest
  ): Promise<TResponse> {
    const request = createJsonRpcRequest(method, params);
    
    try {
      const response = await fetch(this.getUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.getHeaders()
        },
        body: JSON.stringify(request),
        signal: AbortSignal.timeout(this.timeout)
      });

      if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`);
      }

      const jsonResponse = await response.json();
      
      if (jsonResponse.error) {
        throw new ProtocolError(`RPC Error: ${jsonResponse.error.message}`, jsonResponse.error);
      }

      return jsonResponse.result as TResponse;
    } catch (error) {
      if (error instanceof QueryClientError) {
        throw error;
      }
      throw new NetworkError(`Request failed: ${error.message}`, error);
    }
  }

  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    throw new Error('HTTP client does not support streaming operations');
  }

  private getUrl(): string {
    return typeof this.endpoint === 'string' ? this.endpoint : this.endpoint.url;
  }

  private getHeaders(): Record<string, string> {
    return typeof this.endpoint === 'object' ? this.endpoint.headers || {} : {};
  }
}

// networks/cosmos/src/rpc/websocket-client.ts
import { IRpcClient, createJsonRpcRequest } from '@interchainjs/types';
import { QueryClientError, ErrorCode, ErrorCategory } from '@interchainjs/types';

export interface ReconnectOptions {
  maxRetries?: number;
  retryDelay?: number;
  exponentialBackoff?: boolean;
}

export class WebSocketRpcClient implements IRpcClient {
  private socket?: WebSocket;
  private connected = false;
  private pendingRequests = new Map<string, { resolve: Function; reject: Function; timeout: NodeJS.Timeout }>();
  private subscriptions = new Map<string, { 
    query: string; 
    eventQueue: any[]; 
    listeners: Set<(event: any) => void> 
  }>();
  private messageId = 0;

  constructor(
    public readonly endpoint: string,
    private readonly reconnectOptions: ReconnectOptions = {}
  ) {}

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.socket = new WebSocket(this.endpoint);
        
        this.socket.onopen = () => {
          this.connected = true;
          resolve();
        };

        this.socket.onerror = (error) => {
          reject(new ConnectionError(`WebSocket connection failed`, error));
        };

        this.socket.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            this.handleMessage(message);
          } catch (error) {
            console.warn('Failed to parse WebSocket message:', error);
          }
        };

        this.socket.onclose = () => {
          this.connected = false;
          this.handleDisconnection();
        };
      } catch (error) {
        reject(new ConnectionError(`Failed to create WebSocket`, error));
      }
    });
  }

  async disconnect(): Promise<void> {
    // Clean up pending requests
    for (const [id, { reject, timeout }] of this.pendingRequests) {
      clearTimeout(timeout);
      reject(new ConnectionError('Connection closed'));
    }
    this.pendingRequests.clear();

    // Clean up subscriptions
    this.subscriptions.clear();

    if (this.socket) {
      this.socket.close();
      this.socket = undefined;
    }
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected && this.socket?.readyState === WebSocket.OPEN;
  }

  async call<TRequest, TResponse>(
    method: string, 
    params?: TRequest
  ): Promise<TResponse> {
    if (!this.isConnected()) {
      throw new ConnectionError('WebSocket not connected');
    }

    return new Promise((resolve, reject) => {
      const id = (++this.messageId).toString();
      const request = createJsonRpcRequest(method, params, id);

      // Set up timeout
      const timeout = setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new TimeoutError(`Request ${method} timed out`));
        }
      }, 30000);

      this.pendingRequests.set(id, { resolve, reject, timeout });
      
      try {
        this.socket!.send(JSON.stringify(request));
      } catch (error) {
        this.pendingRequests.delete(id);
        clearTimeout(timeout);
        reject(new NetworkError(`Failed to send request: ${error.message}`, error));
      }
    });
  }

  async* subscribe<TEvent>(
    method: string, 
    params?: unknown
  ): AsyncIterable<TEvent> {
    if (!this.isConnected()) {
      throw new ConnectionError('WebSocket not connected');
    }

    // For Tendermint/CometBFT, subscription method is always 'subscribe'
    // and the actual subscription query is in params
    const subscriptionResponse = await this.call(method, params);
    const query = params?.query || subscriptionResponse.query;
    
    if (!query) {
      throw new ProtocolError('No subscription query returned');
    }

    // Set up subscription tracking
    if (!this.subscriptions.has(query)) {
      this.subscriptions.set(query, {
        query,
        eventQueue: [],
        listeners: new Set()
      });
    }

    const subscription = this.subscriptions.get(query)!;
    
    try {
      // Create an async iterator for this subscription
      let eventIndex = 0;
      
      while (this.isConnected()) {
        // Check if there are new events in the queue
        if (eventIndex < subscription.eventQueue.length) {
          const event = subscription.eventQueue[eventIndex++];
          yield event as TEvent;
        } else {
          // Wait for new events
          await new Promise<void>((resolve) => {
            const listener = () => resolve();
            subscription.listeners.add(listener);
            
            // Also resolve after a timeout to check connection status
            setTimeout(() => {
              subscription.listeners.delete(listener);
              resolve();
            }, 1000);
          });
        }
      }
    } finally {
      // Clean up subscription when iterator is done
      await this.cleanupSubscription(query);
    }
  }

  private async cleanupSubscription(query: string): Promise<void> {
    try {
      await this.call('unsubscribe', { query });
      this.subscriptions.delete(query);
    } catch (error) {
      // Log but don't throw - cleanup is best effort
      console.warn('Failed to cleanup subscription:', error);
    }
  }

  private handleMessage(message: any): void {
    // Handle JSON-RPC responses (for call method)
    if (message.id && this.pendingRequests.has(message.id)) {
      const { resolve, reject, timeout } = this.pendingRequests.get(message.id)!;
      this.pendingRequests.delete(message.id);
      clearTimeout(timeout);
      
      if (message.error) {
        reject(new ProtocolError(`RPC Error: ${message.error.message}`, message.error));
      } else {
        resolve(message.result);
      }
      return;
    }

    // Handle subscription events
    if (message.result?.query && message.result?.data) {
      const query = message.result.query;
      const subscription = this.subscriptions.get(query);
      
      if (subscription) {
        // Add event to queue
        subscription.eventQueue.push(message.result.data);
        
        // Notify all listeners
        subscription.listeners.forEach(listener => listener());
      }
      return;
    }

    // Handle other message types (like subscription confirmations)
    console.debug('Unhandled WebSocket message:', message);
  }

  private handleDisconnection(): void {
    // Reject all pending requests
    for (const [id, { reject, timeout }] of this.pendingRequests) {
      clearTimeout(timeout);
      reject(new ConnectionError('WebSocket disconnected'));
    }
    this.pendingRequests.clear();

    // TODO: Implement reconnection logic based on reconnectOptions
    if (this.reconnectOptions.maxRetries && this.reconnectOptions.maxRetries > 0) {
      // Implement exponential backoff reconnection
      console.log('WebSocket disconnected, reconnection not implemented yet');
    }
  }

}

// Error implementations
class NetworkError extends QueryClientError {
  readonly code = ErrorCode.NETWORK_ERROR;
  readonly category = ErrorCategory.TRANSPORT;
}

class ProtocolError extends QueryClientError {
  readonly code = ErrorCode.PROTOCOL_ERROR;
  readonly category = ErrorCategory.PROTOCOL;
}

class ConnectionError extends QueryClientError {
  readonly code = ErrorCode.CONNECTION_ERROR;
  readonly category = ErrorCategory.TRANSPORT;
}

class TimeoutError extends QueryClientError {
  readonly code = ErrorCode.TIMEOUT_ERROR;
  readonly category = ErrorCategory.TRANSPORT;
}
```

### 2. Protocol Adapters
**Location**: `networks/cosmos/src/adapters/`

```typescript
// networks/cosmos/src/adapters/base-adapter.ts
import { IProtocolAdapter, ProtocolVersion, RpcMethod, ResponseType, EventType } from '@interchainjs/types';
import { 
  TxResponse,
  SearchTxsResult,
  SearchBlocksResult 
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Block } from '@interchainjs/cosmos-types/tendermint/types/block';
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';

export abstract class BaseCosmosAdapter implements IProtocolAdapter {
  abstract readonly version: ProtocolVersion;

  encodeRequest<T>(method: RpcMethod, params?: T): RpcRequest {
    return {
      method: method.toString(),
      params: this.encodeParams(method, params)
    };
  }

  abstract decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T;
  abstract decodeEvent<T>(event: RpcEvent, expectedType: EventType): T;

  protected encodeParams<T>(method: RpcMethod, params?: T): any {
    switch (method) {
      case RpcMethod.BLOCK:
        return params ? { height: params.height?.toString() } : {};
      case RpcMethod.BLOCK_RESULTS:
        return params ? { height: params.height?.toString() } : {};
      case RpcMethod.TX:
        return { hash: this.encodeHash(params.hash) };
      case RpcMethod.TX_SEARCH:
        return {
          query: params.query,
          prove: params.prove || false,
          page: params.page?.toString() || "1",
          per_page: params.perPage?.toString() || "30",
          order_by: params.orderBy || "asc"
        };
      default:
        return params || {};
    }
  }

  protected encodeHash(hash: Uint8Array): string {
    return Array.from(hash)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  protected decodeHash(hash: string): Uint8Array {
    const bytes = [];
    for (let i = 0; i < hash.length; i += 2) {
      bytes.push(parseInt(hash.substr(i, 2), 16));
    }
    return new Uint8Array(bytes);
  }

  getSupportedMethods(): Set<RpcMethod> {
    return new Set([
      // Basic info
      RpcMethod.STATUS,
      RpcMethod.ABCI_INFO,
      RpcMethod.HEALTH,
      RpcMethod.NET_INFO,
      
      // Block queries
      RpcMethod.BLOCK,
      RpcMethod.BLOCK_BY_HASH,
      RpcMethod.BLOCK_RESULTS,
      RpcMethod.BLOCK_SEARCH,
      RpcMethod.BLOCKCHAIN,
      RpcMethod.HEADER,
      RpcMethod.HEADER_BY_HASH,
      RpcMethod.COMMIT,
      
      // Transaction queries
      RpcMethod.TX,
      RpcMethod.TX_SEARCH,
      RpcMethod.CHECK_TX,
      RpcMethod.UNCONFIRMED_TXS,
      RpcMethod.NUM_UNCONFIRMED_TXS,
      
      // Chain queries
      RpcMethod.VALIDATORS,
      RpcMethod.CONSENSUS_PARAMS,
      RpcMethod.CONSENSUS_STATE,
      RpcMethod.DUMP_CONSENSUS_STATE,
      RpcMethod.GENESIS,
      RpcMethod.GENESIS_CHUNKED,
      
      // ABCI queries
      RpcMethod.ABCI_QUERY,
      
      // Subscription
      RpcMethod.SUBSCRIBE,
      RpcMethod.UNSUBSCRIBE,
      RpcMethod.UNSUBSCRIBE_ALL
    ]);
  }

  getCapabilities(): ProtocolCapabilities {
    return {
      streaming: true,
      abciQuery: true,
      txSearch: true,
      blockSearch: true
    };
  }
}

// networks/cosmos/src/adapters/tendermint-34.ts
export class Tendermint34Adapter extends BaseCosmosAdapter {
  readonly version = ProtocolVersion.TENDERMINT_034;

  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T {
    switch (expectedType) {
      case ResponseType.BLOCK:
        return this.decodeBlock(response) as T;
      case ResponseType.BLOCK_RESULTS:
        return this.decodeBlockResults(response) as T;
      case ResponseType.TX:
        return this.decodeTx(response) as T;
      case ResponseType.TX_SEARCH:
        return this.decodeTxSearch(response) as T;

      default:
        throw new ProtocolError(`Unsupported response type: ${expectedType}`);
    }
  }

  decodeEvent<T>(event: RpcEvent, expectedType: EventType): T {
    switch (expectedType) {
      case EventType.NEW_BLOCK:
        return this.decodeNewBlockEvent(event) as T;
      case EventType.NEW_BLOCK_HEADER:
        return this.decodeNewBlockHeaderEvent(event) as T;
      case EventType.TX:
        return this.decodeTxEvent(event) as T;
      default:
        return event.data as T;
    }
  }

  private decodeBlock(response: RpcResponse): Block {
    const data = response.result.block;
    
    // Use cosmos-types Block decoder
    return Block.fromPartial({
      header: {
        version: data.header.version,
        chainId: data.header.chain_id,
        height: BigInt(data.header.height),
        time: new Date(data.header.time),
        lastBlockId: data.header.last_block_id,
        lastCommitHash: this.decodeHash(data.header.last_commit_hash),
        dataHash: this.decodeHash(data.header.data_hash),
        validatorsHash: this.decodeHash(data.header.validators_hash),
        nextValidatorsHash: this.decodeHash(data.header.next_validators_hash),
        consensusHash: this.decodeHash(data.header.consensus_hash),
        appHash: this.decodeHash(data.header.app_hash),
        lastResultsHash: this.decodeHash(data.header.last_results_hash),
        evidenceHash: this.decodeHash(data.header.evidence_hash),
        proposerAddress: this.decodeHash(data.header.proposer_address)
      },
      data: {
        txs: data.data.txs?.map(tx => this.decodeHash(tx)) || []
      },
      evidence: {
        evidence: data.evidence?.evidence || []
      },
      lastCommit: data.last_commit ? {
        height: BigInt(data.last_commit.height),
        round: data.last_commit.round,
        blockId: data.last_commit.block_id,
        signatures: data.last_commit.signatures || []
      } : undefined
    });
  }

  private decodeBlockResults(response: RpcResponse): BlockResults {
    const data = response.result;
    
    return {
      height: parseInt(data.height),
      results: data.results?.map(r => this.decodeTxResult(r)) || [],
      validatorUpdates: data.validator_updates?.map(v => this.decodeValidatorUpdate(v)) || [],
      beginBlockEvents: data.begin_block_events?.map(e => this.decodeEvent(e)) || [],
      endBlockEvents: data.end_block_events?.map(e => this.decodeEvent(e)) || []
    };
  }

  private decodeTx(response: RpcResponse): TxResponse {
    const data = response.result;
    
    // Use cosmos-types TxResponse
    return TxResponse.fromPartial({
      height: BigInt(data.height),
      txhash: data.hash,
      codespace: data.tx_result.codespace || "",
      code: data.tx_result.code || 0,
      data: data.tx_result.data || "",
      rawLog: data.tx_result.log || "",
      logs: data.tx_result.log ? this.parseABCILogs(data.tx_result.log) : [],
      info: data.tx_result.info || "",
      gasWanted: BigInt(data.tx_result.gas_wanted || 0),
      gasUsed: BigInt(data.tx_result.gas_used || 0),
      tx: data.tx ? { typeUrl: "", value: this.decodeHash(data.tx) } : undefined,
      timestamp: data.timestamp || "",
      events: data.tx_result.events?.map(e => this.decodeEvent(e)) || []
    });
  }

  private decodeTxSearch(response: RpcResponse): SearchTxsResult {
    const data = response.result;
    
    return SearchTxsResult.fromPartial({
      totalCount: BigInt(data.total_count || 0),
      count: BigInt(data.txs?.length || 0),
      pageNumber: BigInt(1), // Would need to track from request
      pageTotal: BigInt(Math.ceil((data.total_count || 0) / 30)),
      limit: BigInt(30),
      txs: data.txs?.map(tx => this.decodeTx({ result: tx })) || []
    });
  }

  private decodeEvent(eventData: any): Event {
    return {
      type: eventData.type,
      attributes: eventData.attributes?.map(attr => ({
        key: attr.key,
        value: attr.value,
        index: attr.index || false
      })) || []
    };
  }

  private parseABCILogs(logString: string): ABCIMessageLog[] {
    try {
      const logs = JSON.parse(logString);
      return logs.map((log, index) => ({
        msgIndex: index,
        log: log.log || "",
        events: log.events?.map(event => ({
          type: event.type,
          attributes: event.attributes?.map(attr => ({
            key: attr.key,
            value: attr.value
          })) || []
        })) || []
      }));
    } catch {
      return [];
    }
  }
}

// networks/cosmos/src/adapters/comet-38.ts
export class Comet38Adapter extends BaseCosmosAdapter {
  readonly version = ProtocolVersion.COMET_038;

  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T {
    // Similar to Tendermint34Adapter but with CometBFT 0.38 specific changes
    switch (expectedType) {
      case ResponseType.BLOCK_RESULTS:
        return this.decodeBlockResults(response) as T;
      // ... other cases similar to Tendermint34Adapter
    }
  }

  private decodeBlockResults(response: RpcResponse): BlockResults {
    const data = response.result;
    
    return {
      height: parseInt(data.height),
      results: data.results?.map(r => this.decodeTxResult(r)) || [],
      validatorUpdates: data.validator_updates?.map(v => this.decodeValidatorUpdate(v)) || [],
      // CometBFT 0.38+ uses finalize_block_events instead of begin/end block events
      finalizeBlockEvents: data.finalize_block_events?.map(e => this.decodeEvent(e)) || []
    };
  }
}
```

### 3. Client Implementations
**Location**: `networks/cosmos/src/clients/`

```typescript
// networks/cosmos/src/clients/query-client.ts
import { ICosmosQueryClient } from '../types/cosmos-client';
import { IRpcClient, IProtocolAdapter } from '@interchainjs/types';
import { 
  TxResponse,
  SearchTxsResult,
  SearchBlocksResult 
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Block } from '@interchainjs/cosmos-types/tendermint/types/block';

export class CosmosQueryClient implements ICosmosQueryClient {
  constructor(
    private readonly rpcClient: IRpcClient,
    private readonly adapter: IProtocolAdapter
  ) {}

  async getBlock(height?: number): Promise<Block> {
    const request = this.adapter.encodeRequest(RpcMethod.BLOCK, { height });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BLOCK);
  }

  async getBlockResults(height?: number): Promise<BlockResults> {
    const request = this.adapter.encodeRequest(RpcMethod.BLOCK_RESULTS, { height });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BLOCK_RESULTS);
  }

  async getTx(hash: Uint8Array): Promise<TxResponse> {
    const request = this.adapter.encodeRequest(RpcMethod.TX, { hash });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.TX);
  }

  async searchTxs(params: TxSearchParams): Promise<SearchTxsResult> {
    const request = this.adapter.encodeRequest(RpcMethod.TX_SEARCH, params);
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.TX_SEARCH);
  }

  async searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult> {
    const request = this.adapter.encodeRequest(RpcMethod.BLOCK_SEARCH, params);
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BLOCK_SEARCH);
  }



  async getStatus(): Promise<ChainStatus> {
    const request = this.adapter.encodeRequest(RpcMethod.STATUS);
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.STATUS);
  }

  async getValidators(height?: number): Promise<ValidatorSet> {
    const request = this.adapter.encodeRequest(RpcMethod.VALIDATORS, { height });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.VALIDATORS);
  }

  async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
    const request = this.adapter.encodeRequest(RpcMethod.ABCI_QUERY, params);
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.ABCI_QUERY);
  }

  // Connection management
  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  getEndpoint(): string {
    return this.rpcClient.endpoint;
  }

  getProtocolInfo(): ProtocolInfo {
    return {
      version: this.adapter.version,
      capabilities: this.adapter.getCapabilities(),
      supportedMethods: this.adapter.getSupportedMethods()
    };
  }


}

// networks/cosmos/src/clients/event-client.ts
export class CosmosEventClient implements ICosmosEventClient {
  private readonly activeStreams = new Set<AsyncIterableIterator<unknown>>();

  constructor(
    private readonly rpcClient: IRpcClient,
    private readonly adapter: IProtocolAdapter
  ) {}

  async* subscribeToBlocks(): AsyncIterable<Block> {
    const stream = this.rpcClient.subscribe('subscribe', {
      query: "tm.event='NewBlock'"
    });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.NEW_BLOCK);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToBlockHeaders(): AsyncIterable<BlockHeader> {
    const stream = this.rpcClient.subscribe('subscribe', {
      query: "tm.event='NewBlockHeader'"
    });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.NEW_BLOCK_HEADER);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToTxs(query?: string): AsyncIterable<TxEvent> {
    const txQuery = query || "tm.event='Tx'";
    const stream = this.rpcClient.subscribe('subscribe', { query: txQuery });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.TX);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToEvents(query: string): AsyncIterable<Event> {
    const stream = this.rpcClient.subscribe('subscribe', { query });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.GENERIC);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async unsubscribeFromAll(): Promise<void> {
    const promises = Array.from(this.activeStreams).map(async (stream) => {
      if (typeof stream.return === 'function') {
        await stream.return();
      }
    });
    
    await Promise.all(promises);
    this.activeStreams.clear();
  }

  // Connection management (same as query client)
  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.unsubscribeFromAll();
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  getEndpoint(): string {
    return this.rpcClient.endpoint;
  }

  getProtocolInfo(): ProtocolInfo {
    return {
      version: this.adapter.version,
      capabilities: this.adapter.getCapabilities(),
      supportedMethods: this.adapter.getSupportedMethods()
    };
  }
}
```

### 4. Factory Implementation
**Location**: `networks/cosmos/src/factory/`

```typescript
// networks/cosmos/src/factory/cosmos-client-factory.ts
import { ICosmosQueryClient, ICosmosEventClient } from '../types/cosmos-client';
import { IProtocolAdapter } from '@interchainjs/types';
import { CosmosQueryClient } from '../clients/query-client';
import { CosmosEventClient } from '../clients/event-client';
import { HttpRpcClient } from '../rpc/http-client';
import { WebSocketRpcClient } from '../rpc/websocket-client';
import { Tendermint34Adapter } from '../adapters/tendermint-34';
import { Comet38Adapter } from '../adapters/comet-38';

export interface ICosmosClientFactory {
  createQueryClient(endpoint: string | HttpEndpoint): Promise<ICosmosQueryClient>;
  createEventClient(endpoint: string | HttpEndpoint): Promise<ICosmosEventClient>;
  createQueryClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosQueryClient>;
  createEventClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosEventClient>;
}

export class CosmosClientFactory implements ICosmosClientFactory {
  async createQueryClient(endpoint: string | HttpEndpoint): Promise<ICosmosQueryClient> {
    const adapter = await this.detectProtocolAdapter(endpoint);
    return this.createQueryClientWithAdapter(endpoint, adapter);
  }

  async createEventClient(endpoint: string | HttpEndpoint): Promise<ICosmosEventClient> {
    const adapter = await this.detectProtocolAdapter(endpoint);
    return this.createEventClientWithAdapter(endpoint, adapter);
  }

  async createQueryClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosQueryClient> {
    const rpcClient = this.createRpcClient(endpoint);
    await rpcClient.connect();

    return new CosmosQueryClient(rpcClient, adapter);
  }

  async createEventClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosEventClient> {
    const rpcClient = this.createRpcClient(endpoint);
    await rpcClient.connect();

    // Validate that RpcClient supports streaming
    if (!this.supportsStreaming(rpcClient)) {
      throw new ValidationError(
        `RPC client for endpoint ${endpoint} does not support streaming operations`
      );
    }

    return new CosmosEventClient(rpcClient, adapter);
  }

  private async detectProtocolAdapter(
    endpoint: string | HttpEndpoint
  ): Promise<IProtocolAdapter> {
    // Use a temporary client to detect version
    const tempClient = this.createRpcClient(endpoint);
    await tempClient.connect();

    try {
      const response = await tempClient.call('status');
      const version = response.node_info.version;

      if (version.startsWith('0.34.')) {
        return new Tendermint34Adapter();
      } else if (version.startsWith('0.37.')) {
        return new Tendermint37Adapter();
      } else if (version.startsWith('0.38.') || version.startsWith('1.0.')) {
        return new Comet38Adapter();
      } else {
        // Fallback to oldest supported version
        console.warn(`Unknown version ${version}, falling back to Tendermint 0.34 adapter`);
        return new Tendermint34Adapter();
      }
    } finally {
      await tempClient.disconnect();
    }
  }

  private createRpcClient(endpoint: string | HttpEndpoint): IRpcClient {
    if (typeof endpoint === 'object') {
      return new HttpRpcClient(endpoint);
    }

    const useHttp = endpoint.startsWith('http://') || endpoint.startsWith('https://');
    return useHttp
      ? new HttpRpcClient(endpoint)
      : new WebSocketRpcClient(endpoint);
  }

  private supportsStreaming(rpcClient: IRpcClient): boolean {
    // HTTP clients don't support streaming
    return !(rpcClient instanceof HttpRpcClient);
  }
}

// Convenience factory functions
export async function createCosmosQueryClient(
  endpoint: string | HttpEndpoint
): Promise<ICosmosQueryClient> {
  const factory = new CosmosClientFactory();
  return factory.createQueryClient(endpoint);
}

export async function createCosmosEventClient(
  endpoint: string | HttpEndpoint
): Promise<ICosmosEventClient> {
  const factory = new CosmosClientFactory();
  return factory.createEventClient(endpoint);
}
```

## Usage Examples

### Basic Query Client Usage

```typescript
import { createCosmosQueryClient } from '@interchainjs/cosmos';

// HTTP endpoint
const queryClient = await createCosmosQueryClient('https://rpc.cosmos.network');

// Get latest block
const latestBlock = await queryClient.getBlock();
console.log('Latest block height:', latestBlock.header.height);

// Get specific block
const block100 = await queryClient.getBlock(100);

// Search for transactions
const txs = await queryClient.searchTxs({
  query: "message.sender='cosmos1...'",
  page: 1,
  perPage: 10
});

// Get transaction by hash
const tx = await queryClient.getTx(txHash);
console.log('Transaction result:', tx.code === 0 ? 'Success' : 'Failed');

// Get chain status
const status = await queryClient.getStatus();
console.log('Chain ID:', status.nodeInfo.network);

// Query ABCI
const abciResult = await queryClient.queryAbci({
  path: '/cosmos.bank.v1beta1.Query/Balance',
  data: encodedQueryData,
  height: 100
});

await queryClient.disconnect();
```

### Event Client Usage

```typescript
import { createCosmosEventClient } from '@interchainjs/cosmos';

// WebSocket endpoint required for events
const eventClient = await createCosmosEventClient('wss://rpc.cosmos.network/websocket');

// Subscribe to new blocks
for await (const block of eventClient.subscribeToBlocks()) {
  console.log('New block:', block.header.height);
  
  // Process block data
  if (block.data.txs.length > 0) {
    console.log(`Block contains ${block.data.txs.length} transactions`);
  }
}

// Subscribe to transactions
for await (const txEvent of eventClient.subscribeToTxs()) {
  console.log('New transaction:', txEvent.tx.txhash);
  
  if (txEvent.result.code === 0) {
    console.log('Transaction succeeded');
  } else {
    console.log('Transaction failed:', txEvent.result.log);
  }
}

await eventClient.disconnect();
```

### Custom Protocol Adapter

```typescript
import { CosmosClientFactory } from '@interchainjs/cosmos';
import { CustomProtocolAdapter } from './custom-adapter';

const factory = new CosmosClientFactory();
const customAdapter = new CustomProtocolAdapter();

const queryClient = await factory.createQueryClientWithAdapter(
  'https://custom-chain-rpc.com',
  customAdapter
);

// Use client with custom protocol handling
const status = await queryClient.getStatus();
```

## Testing Strategy

### Unit Tests
**Location**: `networks/cosmos/src/__tests__/`

```typescript
// networks/cosmos/src/__tests__/adapters/tendermint-34.test.ts
import { Tendermint34Adapter } from '../../adapters/tendermint-34';
import { ResponseType, RpcMethod } from '@interchainjs/types';

describe('Tendermint34Adapter', () => {
  let adapter: Tendermint34Adapter;

  beforeEach(() => {
    adapter = new Tendermint34Adapter();
  });

  describe('decodeBlock', () => {
    it('should decode block response correctly', () => {
      const mockResponse = {
        result: {
          block: {
            header: {
              version: { block: "11", app: "0" },
              chain_id: "cosmoshub-4",
              height: "12345",
              time: "2023-01-01T00:00:00Z",
              // ... other header fields
            },
            data: {
              txs: ["dGVzdA=="] // base64 encoded "test"
            },
            evidence: { evidence: [] },
            last_commit: null
          }
        }
      };

      const block = adapter.decodeResponse(mockResponse, ResponseType.BLOCK);
      
      expect(block.header.chainId).toBe("cosmoshub-4");
      expect(block.header.height).toBe(BigInt(12345));
      expect(block.data.txs).toHaveLength(1);
    });
  });

  describe('encodeRequest', () => {
    it('should encode block request correctly', () => {
      const request = adapter.encodeRequest(RpcMethod.BLOCK, { height: 100 });
      
      expect(request.method).toBe('block');
      expect(request.params).toEqual({ height: "100" });
    });
  });
});
```

### Integration Tests
**Location**: `networks/cosmos/src/__tests__/integration/`

```typescript
// networks/cosmos/src/__tests__/integration/query-client.test.ts
import { createCosmosQueryClient } from '../../factory/cosmos-client-factory';

describe('CosmosQueryClient Integration', () => {
  let queryClient: ICosmosQueryClient;

  beforeAll(async () => {
    // Use testnet or local node for integration tests
    queryClient = await createCosmosQueryClient(process.env.COSMOS_RPC_URL || 'http://localhost:26657');
  });

  afterAll(async () => {
    await queryClient.disconnect();
  });

  it('should get chain status', async () => {
    const status = await queryClient.getStatus();
    
    expect(status.nodeInfo).toBeDefined();
    expect(status.syncInfo).toBeDefined();
    expect(status.validatorInfo).toBeDefined();
  });

  it('should get latest block', async () => {
    const block = await queryClient.getBlock();
    
    expect(block.header).toBeDefined();
    expect(block.header.height).toBeGreaterThan(0);
    expect(block.header.chainId).toBeTruthy();
  });

  it('should handle errors gracefully', async () => {
    await expect(queryClient.getBlock(999999999)).rejects.toThrow();
  });
});
```

## Migration Path

### From Existing Clients

```typescript
// Before (existing client)
import { StargateClient } from '@cosmjs/stargate';

const client = await StargateClient.connect('https://rpc.cosmos.network');
const block = await client.getBlock(100);
const status = await client.getChainId();

// After (new architecture)
import { createCosmosQueryClient } from '@interchainjs/cosmos';

const client = await createCosmosQueryClient('https://rpc.cosmos.network');
const block = await client.getBlock(100);
const status = await client.getStatus();
```

### Gradual Adoption

1. **Phase 1**: Implement new architecture alongside existing clients
2. **Phase 2**: Add compatibility layer for existing APIs
3. **Phase 3**: Migrate existing code to use new clients
4. **Phase 4**: Deprecate old clients

## Benefits of This Implementation

1. **Type Safety**: Leverages existing cosmos-types for strong typing
2. **Separation of Concerns**: Clear boundaries between transport, protocol, and application layers
3. **Extensibility**: Easy to add new protocols and RPC methods
4. **Testability**: Each component can be tested in isolation
5. **Performance**: Efficient resource management and connection handling
6. **Developer Experience**: Simple factory pattern for client creation

## Next Steps

1. Implement base interfaces in `packages/types`
2. Create RPC client implementations
3. Implement protocol adapters for different versions
4. Build client implementations using adapters
5. Create factory for easy client instantiation
6. Add comprehensive tests
7. Write documentation and examples
8. Create migration guides