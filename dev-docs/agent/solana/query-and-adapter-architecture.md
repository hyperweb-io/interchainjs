# Solana Query and Adapter Architecture

## Overview

This document outlines the planned query and adapter functions for the Solana network implementation in interchainjs, following the established patterns from the Cosmos network implementation while adapting to Solana's unique blockchain characteristics.

## 1. Analysis of Existing Cosmos Architecture

### 1.1 Core Components

The Cosmos implementation provides a well-structured foundation with the following key components:

#### Query Client Interface (`ICosmosQueryClient`)
- Extends base `IQueryClient` interface
- Defines all RPC methods for blockchain interaction
- Organized by functional categories (blocks, transactions, chain queries, etc.)
- Provides protocol info and connection management

#### Protocol Adapters
- **Base Adapter**: Abstract class implementing common functionality
- **Version-specific adapters**: Tendermint 0.34, 0.37, CometBFT 0.38
- **Request/Response encoding/decoding**: Handles protocol-specific data transformations
- **Method support detection**: Each adapter declares supported RPC methods

#### Type System
- **Request types**: Strongly typed parameters for each RPC method
- **Response types**: Structured response objects with proper typing
- **Protocol definitions**: Enums for RPC methods, response types, and capabilities
- **Codec system**: Automatic encoding/decoding with field mapping

#### Client Factory
- Creates query and event clients with appropriate adapters
- Handles HTTP and WebSocket client instantiation
- Provides configuration options for timeouts, headers, etc.

### 1.2 Architectural Patterns

1. **Separation of Concerns**: Clear separation between transport (HTTP client), protocol adaptation, and business logic
2. **Version Abstraction**: Protocol adapters handle version-specific differences transparently
3. **Type Safety**: Comprehensive TypeScript types for all requests and responses
4. **Extensibility**: Easy to add new RPC methods or protocol versions
5. **Reusable Components**: HTTP client and base adapter logic shared across implementations

## 2. Solana RPC Methods Analysis

Based on the official Solana RPC documentation, the methods are organized into the following categories:

### 2.1 Account & Balance Methods (12 methods)
- `getAccountInfo` - Get complete account details including balance, owner, and data
- `getBalance` - Quick SOL balance lookup for any account
- `getMultipleAccounts` - Batch query multiple accounts efficiently
- `getProgramAccounts` - Find all accounts owned by a specific program
- `getLargestAccounts` - Get accounts with largest SOL balances
- `getSupply` - Get information about current supply
- `getTokenAccountsByOwner` - Get all token accounts for a wallet
- `getTokenAccountsByDelegate` - Query token accounts by delegate
- `getTokenAccountBalance` - Get balance of a specific token account
- `getTokenSupply` - Query total supply of an SPL token
- `getTokenLargestAccounts` - Find accounts with largest token holdings

### 2.2 Transaction Methods (8 methods)
- `getTransaction` - Get detailed information about a specific transaction
- `getSignaturesForAddress` - Get transaction signatures for an account
- `getSignatureStatuses` - Check confirmation status of transactions
- `getTransactionCount` - Get total number of transactions processed
- `requestAirdrop` - Request SOL airdrop on devnet/testnet
- `sendTransaction` - Submit a transaction to the cluster
- `simulateTransaction` - Simulate a transaction to check for errors
- `getRecentPrioritizationFees` - Get recent priority fees for optimal pricing
- `getFeeForMessage` - Calculate transaction fees before sending

### 2.3 Block & Slot Methods (11 methods)
- `getBlock` - Get complete block information including all transactions
- `getBlockHeight` - Get current block height of the network
- `getSlot` - Get current slot number
- `getBlocks` - Get list of confirmed blocks in a range
- `getBlocksWithLimit` - Get limited number of confirmed blocks
- `getBlockTime` - Get estimated production time of a block
- `getBlockCommitment` - Get commitment for a block
- `getBlockProduction` - Get block production information
- `getLatestBlockhash` - Get most recent blockhash for transactions
- `isBlockhashValid` - Validate if a blockhash is still valid
- `getSlotLeader` - Get current slot leader
- `getSlotLeaders` - Get slot leaders for a range of slots
- `getLeaderSchedule` - Get leader schedule for an epoch

### 2.4 Network & Cluster Methods (12 methods)
- `getHealth` - Check RPC node health status
- `getVersion` - Get Solana software version information
- `getClusterNodes` - Get information about cluster validators
- `getVoteAccounts` - Get current and delinquent vote accounts
- `getEpochInfo` - Get information about the current epoch
- `getEpochSchedule` - Get epoch schedule information
- `getRecentPerformanceSamples` - Get recent network performance metrics
- `getInflationGovernor` - Get current inflation parameters
- `getInflationRate` - Get current inflation rate
- `getInflationReward` - Calculate inflation rewards for accounts
- `getStakeMinimumDelegation` - Get minimum stake delegation amount

### 2.5 Utility & System Methods (8 methods)
- `getMinimumBalanceForRentExemption` - Calculate minimum balance for rent exemption
- `getGenesisHash` - Get genesis hash of the cluster
- `getIdentity` - Get identity public key of the RPC node
- `getFirstAvailableBlock` - Get slot of first available block
- `getHighestSnapshotSlot` - Get highest slot with a snapshot
- `minimumLedgerSlot` - Get minimum slot that node has ledger information
- `getMaxRetransmitSlot` - Get maximum slot seen from retransmit stage
- `getMaxShredInsertSlot` - Get maximum slot seen from shred insert

## 3. Solana Architecture Design

### 3.1 Core Interface Design

Following the Cosmos pattern, each method uses a dedicated request type:

```typescript
// networks/solana/src/types/solana-client-interfaces.ts
export interface ISolanaQueryClient extends IQueryClient {
  // Account & Balance Methods
  getAccountInfo(request: GetAccountInfoRequest): Promise<AccountInfo | null>;
  getBalance(request: GetBalanceRequest): Promise<number>;
  getMultipleAccounts(request: GetMultipleAccountsRequest): Promise<(AccountInfo | null)[]>;
  getProgramAccounts(request: GetProgramAccountsRequest): Promise<ProgramAccount[]>;
  getLargestAccounts(request: GetLargestAccountsRequest): Promise<LargestAccountsResponse>;
  getSupply(request: GetSupplyRequest): Promise<SupplyResponse>;

  // Token Account Methods
  getTokenAccountsByOwner(request: GetTokenAccountsByOwnerRequest): Promise<TokenAccount[]>;
  getTokenAccountsByDelegate(request: GetTokenAccountsByDelegateRequest): Promise<TokenAccount[]>;
  getTokenAccountBalance(request: GetTokenAccountBalanceRequest): Promise<TokenAccountBalance>;
  getTokenSupply(request: GetTokenSupplyRequest): Promise<TokenSupply>;
  getTokenLargestAccounts(request: GetTokenLargestAccountsRequest): Promise<TokenLargestAccountsResponse>;

  // Transaction Methods
  getTransaction(request: GetTransactionRequest): Promise<TransactionResponse | null>;
  getSignaturesForAddress(request: GetSignaturesForAddressRequest): Promise<SignatureInfo[]>;
  getSignatureStatuses(request: GetSignatureStatusesRequest): Promise<(SignatureStatus | null)[]>;
  getTransactionCount(request: GetTransactionCountRequest): Promise<number>;
  requestAirdrop(request: RequestAirdropRequest): Promise<string>;
  sendTransaction(request: SendTransactionRequest): Promise<string>;
  simulateTransaction(request: SimulateTransactionRequest): Promise<SimulateTransactionResponse>;

  // Fee Methods
  getRecentPrioritizationFees(request: GetRecentPrioritizationFeesRequest): Promise<PrioritizationFee[]>;
  getFeeForMessage(request: GetFeeForMessageRequest): Promise<FeeForMessageResponse>;

  // Block & Slot Methods
  getBlock(request: GetBlockRequest): Promise<BlockResponse | null>;
  getBlockHeight(request: GetBlockHeightRequest): Promise<number>;
  getSlot(request: GetSlotRequest): Promise<number>;
  getBlocks(request: GetBlocksRequest): Promise<number[]>;
  getBlocksWithLimit(request: GetBlocksWithLimitRequest): Promise<number[]>;
  getBlockTime(request: GetBlockTimeRequest): Promise<number | null>;
  getBlockCommitment(request: GetBlockCommitmentRequest): Promise<BlockCommitment>;
  getBlockProduction(request: GetBlockProductionRequest): Promise<BlockProductionResponse>;

  // Blockhash & Slot Information
  getLatestBlockhash(request: GetLatestBlockhashRequest): Promise<LatestBlockhashResponse>;
  isBlockhashValid(request: IsBlockhashValidRequest): Promise<boolean>;
  getSlotLeader(request: GetSlotLeaderRequest): Promise<string>;
  getSlotLeaders(request: GetSlotLeadersRequest): Promise<string[]>;
  getLeaderSchedule(request: GetLeaderScheduleRequest): Promise<LeaderSchedule | null>;

  // Network & Cluster Methods
  getHealth(request: GetHealthRequest): Promise<string>;
  getVersion(request: GetVersionRequest): Promise<VersionResponse>;
  getClusterNodes(request: GetClusterNodesRequest): Promise<ClusterNode[]>;
  getVoteAccounts(request: GetVoteAccountsRequest): Promise<VoteAccountsResponse>;
  getEpochInfo(request: GetEpochInfoRequest): Promise<EpochInfo>;
  getEpochSchedule(request: GetEpochScheduleRequest): Promise<EpochSchedule>;

  // Network Performance & Economics
  getRecentPerformanceSamples(request: GetRecentPerformanceSamplesRequest): Promise<PerformanceSample[]>;
  getInflationGovernor(request: GetInflationGovernorRequest): Promise<InflationGovernor>;
  getInflationRate(request: GetInflationRateRequest): Promise<InflationRate>;
  getInflationReward(request: GetInflationRewardRequest): Promise<(InflationReward | null)[]>;
  getStakeMinimumDelegation(request: GetStakeMinimumDelegationRequest): Promise<StakeMinimumDelegationResponse>;

  // Utility & System Methods
  getMinimumBalanceForRentExemption(request: GetMinimumBalanceForRentExemptionRequest): Promise<number>;
  getGenesisHash(request: GetGenesisHashRequest): Promise<string>;
  getIdentity(request: GetIdentityRequest): Promise<IdentityResponse>;
  getFirstAvailableBlock(request: GetFirstAvailableBlockRequest): Promise<number>;
  getHighestSnapshotSlot(request: GetHighestSnapshotSlotRequest): Promise<SnapshotSlotResponse>;
  minimumLedgerSlot(request: MinimumLedgerSlotRequest): Promise<number>;
  getMaxRetransmitSlot(request: GetMaxRetransmitSlotRequest): Promise<number>;
  getMaxShredInsertSlot(request: GetMaxShredInsertSlotRequest): Promise<number>;
}
```

### 3.2 Protocol Definitions

```typescript
// networks/solana/src/types/protocol.ts
export enum SolanaRpcMethod {
  // Account & Balance Methods
  GET_ACCOUNT_INFO = "getAccountInfo",
  GET_BALANCE = "getBalance",
  GET_MULTIPLE_ACCOUNTS = "getMultipleAccounts",
  GET_PROGRAM_ACCOUNTS = "getProgramAccounts",
  GET_LARGEST_ACCOUNTS = "getLargestAccounts",
  GET_SUPPLY = "getSupply",

  // Token Account Methods
  GET_TOKEN_ACCOUNTS_BY_OWNER = "getTokenAccountsByOwner",
  GET_TOKEN_ACCOUNTS_BY_DELEGATE = "getTokenAccountsByDelegate",
  GET_TOKEN_ACCOUNT_BALANCE = "getTokenAccountBalance",
  GET_TOKEN_SUPPLY = "getTokenSupply",
  GET_TOKEN_LARGEST_ACCOUNTS = "getTokenLargestAccounts",

  // Transaction Methods
  GET_TRANSACTION = "getTransaction",
  GET_SIGNATURES_FOR_ADDRESS = "getSignaturesForAddress",
  GET_SIGNATURE_STATUSES = "getSignatureStatuses",
  GET_TRANSACTION_COUNT = "getTransactionCount",
  REQUEST_AIRDROP = "requestAirdrop",
  SEND_TRANSACTION = "sendTransaction",
  SIMULATE_TRANSACTION = "simulateTransaction",

  // Fee Methods
  GET_RECENT_PRIORITIZATION_FEES = "getRecentPrioritizationFees",
  GET_FEE_FOR_MESSAGE = "getFeeForMessage",

  // Block & Slot Methods
  GET_BLOCK = "getBlock",
  GET_BLOCK_HEIGHT = "getBlockHeight",
  GET_SLOT = "getSlot",
  GET_BLOCKS = "getBlocks",
  GET_BLOCKS_WITH_LIMIT = "getBlocksWithLimit",
  GET_BLOCK_TIME = "getBlockTime",
  GET_BLOCK_COMMITMENT = "getBlockCommitment",
  GET_BLOCK_PRODUCTION = "getBlockProduction",

  // Blockhash & Slot Information
  GET_LATEST_BLOCKHASH = "getLatestBlockhash",
  IS_BLOCKHASH_VALID = "isBlockhashValid",
  GET_SLOT_LEADER = "getSlotLeader",
  GET_SLOT_LEADERS = "getSlotLeaders",
  GET_LEADER_SCHEDULE = "getLeaderSchedule",

  // Network & Cluster Methods
  GET_HEALTH = "getHealth",
  GET_VERSION = "getVersion",
  GET_CLUSTER_NODES = "getClusterNodes",
  GET_VOTE_ACCOUNTS = "getVoteAccounts",
  GET_EPOCH_INFO = "getEpochInfo",
  GET_EPOCH_SCHEDULE = "getEpochSchedule",

  // Network Performance & Economics
  GET_RECENT_PERFORMANCE_SAMPLES = "getRecentPerformanceSamples",
  GET_INFLATION_GOVERNOR = "getInflationGovernor",
  GET_INFLATION_RATE = "getInflationRate",
  GET_INFLATION_REWARD = "getInflationReward",
  GET_STAKE_MINIMUM_DELEGATION = "getStakeMinimumDelegation",

  // Utility & System Methods
  GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION = "getMinimumBalanceForRentExemption",
  GET_GENESIS_HASH = "getGenesisHash",
  GET_IDENTITY = "getIdentity",
  GET_FIRST_AVAILABLE_BLOCK = "getFirstAvailableBlock",
  GET_HIGHEST_SNAPSHOT_SLOT = "getHighestSnapshotSlot",
  MINIMUM_LEDGER_SLOT = "minimumLedgerSlot",
  GET_MAX_RETRANSMIT_SLOT = "getMaxRetransmitSlot",
  GET_MAX_SHRED_INSERT_SLOT = "getMaxShredInsertSlot"
}

export enum SolanaCommitment {
  PROCESSED = "processed",
  CONFIRMED = "confirmed",
  FINALIZED = "finalized"
}

export enum SolanaEncoding {
  BASE58 = "base58",
  BASE64 = "base64",
  BASE64_ZSTD = "base64+zstd",
  JSON_PARSED = "jsonParsed"
}

export interface SolanaProtocolInfo {
  version: string;
  supportedMethods: Set<SolanaRpcMethod>;
  capabilities: SolanaProtocolCapabilities;
}

export interface SolanaProtocolCapabilities {
  streaming: boolean;
  subscriptions: boolean;
  compression: boolean;
  jsonParsed: boolean;
}
```

### 3.3 Request/Response Type System

Following the Cosmos pattern, we'll create comprehensive type definitions with dedicated request types:

```typescript
// networks/solana/src/types/requests/base.ts
export interface BaseSolanaRequest<TOpt = {}> {
  readonly options?: TOpt;
}

// Common option types
export interface SolanaCommitmentOptions {
  readonly commitment?: SolanaCommitment;
  readonly minContextSlot?: number;
}

export interface SolanaEncodingOptions {
  readonly encoding?: SolanaEncoding;
}

export interface SolanaDataSliceOptions {
  readonly dataSlice?: {
    readonly offset: number;
    readonly length: number;
  };
}

// networks/solana/src/types/requests/account/get-account-info-request.ts
export interface GetAccountInfoRequest extends BaseSolanaRequest<
  SolanaCommitmentOptions & SolanaEncodingOptions & SolanaDataSliceOptions
> {
  readonly pubkey: string;
}

// networks/solana/src/types/requests/account/get-balance-request.ts
export interface GetBalanceRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {
  readonly pubkey: string;
}

// networks/solana/src/types/requests/account/get-multiple-accounts-request.ts
export interface GetMultipleAccountsRequest extends BaseSolanaRequest<
  SolanaCommitmentOptions & SolanaEncodingOptions & SolanaDataSliceOptions
> {
  readonly pubkeys: string[];
}

// networks/solana/src/types/requests/transaction/get-transaction-request.ts
export interface GetTransactionRequest extends BaseSolanaRequest<
  SolanaCommitmentOptions & SolanaEncodingOptions & {
    readonly maxSupportedTransactionVersion?: number;
  }
> {
  readonly signature: string;
}

// networks/solana/src/types/requests/block/get-block-request.ts
export interface GetBlockRequest extends BaseSolanaRequest<
  SolanaCommitmentOptions & SolanaEncodingOptions & {
    readonly transactionDetails?: 'full' | 'accounts' | 'signatures' | 'none';
    readonly rewards?: boolean;
    readonly maxSupportedTransactionVersion?: number;
  }
> {
  readonly slot: number;
}

// Simple requests that only need base options
export interface GetHealthRequest extends BaseSolanaRequest {}
export interface GetVersionRequest extends BaseSolanaRequest {}
export interface GetGenesisHashRequest extends BaseSolanaRequest {}
export interface GetEpochScheduleRequest extends BaseSolanaRequest {}

// networks/solana/src/types/responses/account/account-info-response.ts
export interface AccountInfo {
  readonly lamports: number;
  readonly owner: string;
  readonly executable: boolean;
  readonly rentEpoch: number;
  readonly data: string | object | null;
  readonly space?: number;
}

export interface AccountInfoResponse {
  readonly context: {
    readonly apiVersion: string;
    readonly slot: number;
  };
  readonly value: AccountInfo | null;
}
```

### 3.4 Adapter Architecture

```typescript
// networks/solana/src/adapters/base.ts
export abstract class BaseSolanaAdapter implements ISolanaProtocolAdapter {
  constructor(protected version: string) {}

  abstract getSupportedMethods(): Set<SolanaRpcMethod>;
  abstract getCapabilities(): SolanaProtocolCapabilities;

  // Request encoders - transform TypeScript request objects to RPC format
  encodeGetAccountInfo(request: GetAccountInfoRequest): EncodedGetAccountInfoRequest {
    const params = [request.pubkey];
    const options = this.buildOptions(request.options);

    if (Object.keys(options).length > 0) {
      params.push(options);
    }

    return params;
  }

  encodeGetBalance(request: GetBalanceRequest): EncodedGetBalanceRequest {
    const params = [request.pubkey];
    const options = this.buildOptions(request.options);

    if (Object.keys(options).length > 0) {
      params.push(options);
    }

    return params;
  }

  encodeGetBlock(request: GetBlockRequest): EncodedGetBlockRequest {
    const params = [request.slot];
    const options = this.buildOptions(request.options);

    if (Object.keys(options).length > 0) {
      params.push(options);
    }

    return params;
  }

  // Helper method to build options object from request options
  protected buildOptions(options?: any): Record<string, any> {
    if (!options) return {};

    const result: Record<string, any> = {};

    // Add all defined options
    Object.keys(options).forEach(key => {
      if (options[key] !== undefined) {
        result[key] = options[key];
      }
    });

    return result;
  }

  // Response decoders - transform RPC response to TypeScript types
  decodeAccountInfo<T extends AccountInfoResponse = AccountInfoResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    return createAccountInfoResponse(resp.result || resp) as T;
  }

  // Common utility methods
  protected transformKeys(obj: any): any {
    return snakeCaseRecursive(obj);
  }

  protected validateResponse(response: unknown): void {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid response format');
    }
  }
}

// networks/solana/src/adapters/solana-1_18.ts
export class Solana118Adapter extends BaseSolanaAdapter {
  constructor() {
    super('1.18');
  }

  getSupportedMethods(): Set<SolanaRpcMethod> {
    return new Set([
      // All current Solana RPC methods
      SolanaRpcMethod.GET_ACCOUNT_INFO,
      SolanaRpcMethod.GET_BALANCE,
      // ... all other methods
    ]);
  }

  getCapabilities(): SolanaProtocolCapabilities {
    return {
      streaming: true,
      subscriptions: true,
      compression: true,
      jsonParsed: true
    };
  }
}
```

## 4. Implementation Plan

### 4.1 Module Structure

```text
networks/solana/
├── src/
│   ├── adapters/
│   │   ├── base.ts                 # Base adapter with common functionality
│   │   ├── solana-1_18.ts         # Current Solana version adapter
│   │   └── index.ts               # Adapter exports and factory
│   ├── query/
│   │   ├── solana-query-client.ts # Main query client implementation
│   │   └── index.ts               # Query exports
│   ├── types/
│   │   ├── solana-client-interfaces.ts # Main client interfaces
│   │   ├── protocol.ts            # Protocol definitions and enums
│   │   ├── requests/              # Request parameter types
│   │   │   ├── account/           # Account-related requests
│   │   │   ├── transaction/       # Transaction-related requests
│   │   │   ├── block/             # Block-related requests
│   │   │   ├── network/           # Network-related requests
│   │   │   └── utility/           # Utility requests
│   │   ├── responses/             # Response types
│   │   │   ├── account/           # Account-related responses
│   │   │   ├── transaction/       # Transaction-related responses
│   │   │   ├── block/             # Block-related responses
│   │   │   ├── network/           # Network-related responses
│   │   │   └── utility/           # Utility responses
│   │   └── index.ts               # Type exports
│   ├── client-factory.ts          # Client factory for creating instances
│   ├── utils.ts                   # Solana-specific utilities
│   └── index.ts                   # Main package exports
├── package.json
├── tsconfig.json
└── README.md
```

### 4.2 HTTP Client Integration

The existing `HttpRpcClient` from `packages/utils/src/clients/http-client.ts` will be reused without modification:

```typescript
// networks/solana/src/client-factory.ts
import { HttpRpcClient, HttpEndpoint } from '@interchainjs/utils';
import { SolanaQueryClient } from './query/index';
import { createSolanaAdapter, ISolanaProtocolAdapter } from './adapters/index';

export interface SolanaClientOptions {
  version?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export function createSolanaQueryClient(
  endpoint: string | HttpEndpoint,
  options: SolanaClientOptions = {}
): SolanaQueryClient {
  const rpcClient = new HttpRpcClient(endpoint, {
    timeout: options.timeout,
    headers: options.headers
  });

  const adapter = createSolanaAdapter(options.version || '1.18');

  return new SolanaQueryClient(rpcClient, adapter);
}
```

### 4.3 Query Client Implementation

```typescript
// networks/solana/src/query/solana-query-client.ts
import { IRpcClient } from '@interchainjs/types';
import { ISolanaQueryClient } from '../types/solana-client-interfaces';
import { SolanaRpcMethod } from '../types/protocol';
import { ISolanaProtocolAdapter } from '../adapters/base';
import {
  GetAccountInfoRequest,
  GetBalanceRequest,
  GetBlockRequest,
  GetTransactionRequest
} from '../types/requests';

export class SolanaQueryClient implements ISolanaQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: ISolanaProtocolAdapter
  ) {}

  get endpoint(): string {
    return this.rpcClient.endpoint;
  }

  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  // Account & Balance Methods
  async getAccountInfo(request: GetAccountInfoRequest): Promise<AccountInfo | null> {
    const encodedParams = this.protocolAdapter.encodeGetAccountInfo(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_ACCOUNT_INFO, encodedParams);
    const response = this.protocolAdapter.decodeAccountInfo(result);
    return response.value;
  }

  async getBalance(request: GetBalanceRequest): Promise<number> {
    const encodedParams = this.protocolAdapter.encodeGetBalance(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BALANCE, encodedParams);
    const response = this.protocolAdapter.decodeBalance(result);
    return response.value;
  }

  async getBlock(request: GetBlockRequest): Promise<BlockResponse | null> {
    const encodedParams = this.protocolAdapter.encodeGetBlock(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK, encodedParams);
    const response = this.protocolAdapter.decodeBlock(result);
    return response;
  }

  async getTransaction(request: GetTransactionRequest): Promise<TransactionResponse | null> {
    const encodedParams = this.protocolAdapter.encodeGetTransaction(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TRANSACTION, encodedParams);
    const response = this.protocolAdapter.decodeTransaction(result);
    return response;
  }

  // ... implement all other methods following the same pattern
}
```

## 5. Concrete Examples

### 5.1 Cosmos vs Solana Query Patterns

**Cosmos Pattern:**
```typescript
// Get block in Cosmos - uses simple parameters
const block = await cosmosClient.getBlock(12345);
console.log(block.header.height); // Block height
console.log(block.data.txs.length); // Number of transactions

// Search blocks in Cosmos - uses request object
const searchResult = await cosmosClient.searchBlocks({
  query: "block.height >= 100 AND block.height <= 200",
  page: 1,
  perPage: 10
});
```

**Solana Equivalent:**
```typescript
// Get block in Solana - uses request object following Cosmos pattern
const block = await solanaClient.getBlock({
  slot: 12345,
  options: {
    encoding: 'json',
    transactionDetails: 'full',
    rewards: false,
    commitment: 'finalized'
  }
});
console.log(block.blockHeight); // Block height
console.log(block.transactions.length); // Number of transactions

// Get account in Solana - uses request object
const account = await solanaClient.getAccountInfo({
  pubkey: '11111111111111111111111111111112',
  options: {
    encoding: 'base64',
    commitment: 'finalized'
  }
});
console.log(account.lamports); // Account balance in lamports
console.log(account.owner); // Program that owns this account
```

### 5.2 Request/Response Flow Example

```typescript
// Example: Getting account balance using request object pattern
// 1. User calls high-level method with request object
const balance = await solanaClient.getBalance({
  pubkey: '11111111111111111111111111111112',
  options: {
    commitment: 'finalized'
  }
});

// 2. Query client passes request to adapter for encoding
const request: GetBalanceRequest = {
  pubkey: '11111111111111111111111111111112',
  options: {
    commitment: 'finalized'
  }
};
const encodedParams = adapter.encodeGetBalance(request);
// Result: ['11111111111111111111111111111112', { commitment: 'finalized' }]

// 3. HTTP client makes RPC call
const rpcResponse = await httpClient.call('getBalance', encodedParams);
// RPC Response: { context: { slot: 123456 }, value: 1000000000 }

// 4. Adapter decodes response
const decodedResponse = adapter.decodeBalance(rpcResponse);
// Result: { context: { slot: 123456 }, value: 1000000000 }

// 5. Query client returns final value
return decodedResponse.value; // 1000000000 (lamports)
```

### 5.3 Error Handling Pattern

```typescript
// Following Cosmos error handling patterns
export class SolanaRpcError extends Error {
  constructor(
    message: string,
    public readonly code: number,
    public readonly data?: any
  ) {
    super(message);
    this.name = 'SolanaRpcError';
  }
}

// In adapter
decodeResponse(response: unknown): any {
  const resp = response as any;

  if (resp.error) {
    throw new SolanaRpcError(
      resp.error.message,
      resp.error.code,
      resp.error.data
    );
  }

  return resp.result;
}
```

## 6. Key Differences from Cosmos

### 6.1 Data Model Differences

| Aspect | Cosmos | Solana |
|--------|--------|--------|
| **Account Model** | Account-based with sequences | Account-based with rent |
| **Address Format** | Bech32 (cosmos1...) | Base58 (44+ characters) |
| **Native Token** | Various (ATOM, etc.) | SOL (lamports) |
| **Block Structure** | Height-based | Slot-based |
| **Finality** | Instant finality | Probabilistic finality |
| **Transaction Format** | Protobuf messages | Compact binary format |

### 6.2 RPC Method Differences

| Category | Cosmos | Solana |
|----------|--------|--------|
| **Block Queries** | Height-based (getBlock) | Slot-based (getBlock) |
| **Account Queries** | getBaseAccount | getAccountInfo |
| **Balance Queries** | Via bank module | getBalance (lamports) |
| **Transaction Queries** | getTx | getTransaction |
| **Network Info** | getStatus | getHealth, getVersion |

### 6.3 Commitment Levels

Solana introduces commitment levels that don't exist in Cosmos:
- **processed**: Query the most recent block which has reached 1 confirmation
- **confirmed**: Query the most recent block which has reached ~66% cluster confirmation
- **finalized**: Query the most recent block which has been finalized by the cluster

## 7. Integration with Existing Architecture

### 7.1 Shared Components

The Solana implementation will reuse these existing components:
- `HttpRpcClient` from `@interchainjs/utils` - No changes needed
- `IRpcClient` interface - Compatible with Solana RPC
- Error handling patterns - Extend existing error types
- Configuration patterns - Similar client options structure

### 7.2 Package Dependencies

```json
{
  "dependencies": {
    "@interchainjs/types": "workspace:*",
    "@interchainjs/utils": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```

### 7.3 Export Structure

```typescript
// networks/solana/src/index.ts
export * from './types/index';
export * from './query/index';
export * from './adapters/index';
export * from './client-factory';

// Re-export shared RPC clients for convenience
export { HttpRpcClient, HttpEndpoint } from '@interchainjs/utils';

// Main exports for easy usage
export {
  createSolanaQueryClient,
  SolanaQueryClient,
  type ISolanaQueryClient,
  type SolanaClientOptions
} from './client-factory';
```

## 8. Testing Strategy

### 8.1 Unit Tests

Following the Cosmos testing patterns:
- Mock RPC client for isolated adapter testing
- Test request encoding/decoding for each method
- Validate error handling scenarios
- Test client factory functionality

### 8.2 Integration Tests

- Real Solana devnet/testnet integration tests
- End-to-end query functionality validation
- Performance benchmarking against direct RPC calls
- Compatibility testing across Solana versions

### 8.3 Example Test Structure

```typescript
// networks/solana/src/adapters/__tests__/solana-1_18.test.ts
describe('Solana118Adapter', () => {
  let adapter: Solana118Adapter;

  beforeEach(() => {
    adapter = new Solana118Adapter();
  });

  describe('encodeGetAccountInfo', () => {
    it('should encode basic request correctly', () => {
      const request: GetAccountInfoRequest = {
        pubkey: '11111111111111111111111111111112'
      };
      const encoded = adapter.encodeGetAccountInfo(request);
      expect(encoded).toEqual(['11111111111111111111111111111112']);
    });

    it('should encode request with options correctly', () => {
      const request: GetAccountInfoRequest = {
        pubkey: '11111111111111111111111111111112',
        options: {
          commitment: 'finalized' as SolanaCommitment,
          encoding: 'base64' as SolanaEncoding,
          dataSlice: { offset: 0, length: 32 }
        }
      };
      const encoded = adapter.encodeGetAccountInfo(request);
      expect(encoded).toEqual([
        '11111111111111111111111111111112',
        {
          commitment: 'finalized',
          encoding: 'base64',
          dataSlice: { offset: 0, length: 32 }
        }
      ]);
    });
  });

  describe('encodeGetBalance', () => {
    it('should encode balance request correctly', () => {
      const request: GetBalanceRequest = {
        pubkey: '11111111111111111111111111111112',
        options: {
          commitment: 'confirmed'
        }
      };
      const encoded = adapter.encodeGetBalance(request);
      expect(encoded).toEqual([
        '11111111111111111111111111111112',
        { commitment: 'confirmed' }
      ]);
    });
  });
});
```

## 9. Migration and Adoption Path

### 9.1 Phased Implementation

**Phase 1: Core Infrastructure**
- Base adapter and protocol definitions
- HTTP client integration
- Basic account and balance queries

**Phase 2: Transaction Support**
- Transaction querying methods
- Signature status checking
- Fee calculation methods

**Phase 3: Block and Network Queries**
- Block and slot information
- Network health and performance
- Validator and epoch information

**Phase 4: Advanced Features**
- Token account methods
- Program account queries
- Utility and system methods

### 9.2 Documentation and Examples

- Comprehensive API documentation
- Migration guide from direct Solana RPC usage
- Code examples for common use cases
- Performance optimization guidelines

## 10. Key Architectural Decisions

### 10.1 Request Object Pattern

Following the Cosmos implementation, all Solana query methods use dedicated request objects instead of individual parameters:

**Benefits:**
- **Consistency**: Matches the established Cosmos pattern exactly
- **Type Safety**: Each request type is strongly typed with required and optional fields
- **Extensibility**: Easy to add new optional fields without breaking existing code
- **Validation**: Request objects can be validated before encoding
- **Documentation**: Self-documenting through TypeScript interfaces

**Pattern Comparison:**
```typescript
// ❌ Individual parameters (not following Cosmos pattern)
getAccountInfo(pubkey: string, options?: AccountInfoOptions)

// ✅ Request object (following Cosmos pattern)
getAccountInfo(request: GetAccountInfoRequest)
```

### 10.2 Base Request Interface with Generic Options

The `BaseSolanaRequest<TOpt>` interface provides a flexible foundation:

```typescript
export interface BaseSolanaRequest<TOpt = {}> {
  readonly options?: TOpt;
}
```

This allows each request type to specify its own option types while maintaining consistency:

```typescript
// Account info with encoding and commitment options
export interface GetAccountInfoRequest extends BaseSolanaRequest<
  SolanaCommitmentOptions & SolanaEncodingOptions & SolanaDataSliceOptions
> {
  readonly pubkey: string;
}

// Simple requests with no additional options
export interface GetHealthRequest extends BaseSolanaRequest {}
```

### 10.3 Adapter Encoding Strategy

The adapter uses a consistent encoding strategy that builds RPC parameter arrays:

1. **Required parameters** are always included as positional arguments
2. **Optional parameters** are combined into an options object when present
3. **Empty options** are omitted to keep RPC calls clean

## 11. Conclusion

This architecture provides a robust foundation for Solana network support in interchainjs while maintaining consistency with the existing Cosmos implementation. The design emphasizes:

- **Consistency**: Following established request object patterns from Cosmos implementation
- **Type Safety**: Comprehensive TypeScript types for all operations with dedicated request interfaces
- **Extensibility**: Easy to add new methods or protocol versions using the established patterns
- **Performance**: Efficient HTTP client reuse and minimal overhead
- **Developer Experience**: Intuitive API that abstracts RPC complexity while maintaining familiar patterns

The implementation will provide developers with a familiar, type-safe interface for interacting with Solana networks while leveraging the proven architecture patterns established in the Cosmos implementation. The request object pattern ensures consistency across the entire interchainjs ecosystem.
