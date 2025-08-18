/**
 * Solana protocol-specific types and interfaces
 */

import { PublicKey, AccountInfo, TransactionInstruction } from './common';

/**
 * RPC Response wrapper
 */
export interface RpcResponse<T> {
  context: {
    slot: number;
  };
  value: T;
}

/**
 * WebSocket notification types
 */
export interface WebSocketNotification<T> {
  method: string;
  params: {
    subscription: number;
    result: T;
  };
}

export interface AccountNotification {
  context: {
    slot: number;
  };
  value: AccountInfo | null;
}

export interface ProgramNotification {
  context: {
    slot: number;
  };
  value: {
    account: AccountInfo;
    pubkey: string;
  };
}

export interface LogsNotification {
  context: {
    slot: number;
  };
  value: {
    signature: string;
    err: any;
    logs: string[];
  };
}

export interface WebSocketSubscriptionResponse {
  jsonrpc: string;
  id: string;
  result: number;
}

export interface WebSocketErrorResponse {
  jsonrpc: string;
  id: string;
  error: {
    code: number;
    message: string;
  };
}

/**
 * Solana protocol versions
 */
export enum SolanaVersion {
  V1 = "1.0",
  V2 = "2.0" // Future versions
}

/**
 * Solana RPC methods
 */
export enum SolanaMethod {
  GET_BALANCE = "getBalance",
  GET_ACCOUNT_INFO = "getAccountInfo",
  GET_LATEST_BLOCKHASH = "getLatestBlockhash",
  GET_BLOCK = "getBlock",
  GET_BLOCK_HEIGHT = "getBlockHeight",
  GET_BLOCK_PRODUCTION = "getBlockProduction",
  GET_BLOCK_COMMITMENT = "getBlockCommitment",
  GET_BLOCKS = "getBlocks",
  GET_BLOCKS_WITH_LIMIT = "getBlocksWithLimit",
  GET_CLUSTER_NODES = "getClusterNodes",
  GET_EPOCH_INFO = "getEpochInfo",
  GET_EPOCH_SCHEDULE = "getEpochSchedule",
  GET_FEE_FOR_MESSAGE = "getFeeForMessage",
  GET_FIRST_AVAILABLE_BLOCK = "getFirstAvailableBlock",
  GET_GENESIS_HASH = "getGenesisHash",
  GET_HEALTH = "getHealth",
  GET_HIGHEST_SNAPSHOT_SLOT = "getHighestSnapshotSlot",
  GET_IDENTITY = "getIdentity",
  GET_INFLATION_GOVERNOR = "getInflationGovernor",
  GET_INFLATION_RATE = "getInflationRate",
  GET_INFLATION_REWARD = "getInflationReward",
  GET_LARGEST_ACCOUNTS = "getLargestAccounts",
  GET_LEADER_SCHEDULE = "getLeaderSchedule",
  GET_MAX_RETRANSMIT_SLOT = "getMaxRetransmitSlot",
  GET_MAX_SHRED_INSERT_SLOT = "getMaxShredInsertSlot",
  GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION = "getMinimumBalanceForRentExemption",
  GET_MULTIPLE_ACCOUNTS = "getMultipleAccounts",
  GET_PROGRAM_ACCOUNTS = "getProgramAccounts",
  GET_RECENT_PERFORMANCE_SAMPLES = "getRecentPerformanceSamples",
  GET_SIGNATURES_FOR_ADDRESS = "getSignaturesForAddress",
  GET_SIGNATURE_STATUSES = "getSignatureStatuses",
  GET_SLOT = "getSlot",
  GET_SLOT_LEADER = "getSlotLeader",
  GET_SLOT_LEADERS = "getSlotLeaders",
  GET_STAKE_ACTIVATION = "getStakeActivation",
  GET_SUPPLY = "getSupply",
  GET_TOKEN_ACCOUNTS_BY_DELEGATE = "getTokenAccountsByDelegate",
  GET_TOKEN_ACCOUNTS_BY_OWNER = "getTokenAccountsByOwner",
  GET_TOKEN_LARGEST_ACCOUNTS = "getTokenLargestAccounts",
  GET_TOKEN_SUPPLY = "getTokenSupply",
  GET_TRANSACTION = "getTransaction",
  GET_TRANSACTION_COUNT = "getTransactionCount",
  GET_VERSION = "getVersion",
  GET_VOTE_ACCOUNTS = "getVoteAccounts",
  IS_BLOCKHASH_VALID = "isBlockhashValid",
  MINIMUM_LEDGER_SLOT = "minimumLedgerSlot",
  REQUEST_AIRDROP = "requestAirdrop",
  SEND_TRANSACTION = "sendTransaction",
  SIMULATE_TRANSACTION = "simulateTransaction",
  // WebSocket subscription methods
  ACCOUNT_SUBSCRIBE = "accountSubscribe",
  ACCOUNT_UNSUBSCRIBE = "accountUnsubscribe",
  LOGS_SUBSCRIBE = "logsSubscribe",
  LOGS_UNSUBSCRIBE = "logsUnsubscribe",
  PROGRAM_SUBSCRIBE = "programSubscribe",
  PROGRAM_UNSUBSCRIBE = "programUnsubscribe",
  ROOT_SUBSCRIBE = "rootSubscribe",
  ROOT_UNSUBSCRIBE = "rootUnsubscribe",
  SIGNATURE_SUBSCRIBE = "signatureSubscribe",
  SIGNATURE_UNSUBSCRIBE = "signatureUnsubscribe",
  SLOT_SUBSCRIBE = "slotSubscribe",
  SLOT_UNSUBSCRIBE = "slotUnsubscribe"
}

/**
 * Solana network capabilities
 */
export interface SolanaCapabilities {
  supportsVersionedTransactions: boolean;
  supportsComputeBudget: boolean;
  supportsTokenExtensions: boolean;
  maxTransactionSize: number;
  supportedCommitmentLevels: CommitmentLevel[];
}

/**
 * Commitment levels
 */
export type CommitmentLevel = 'processed' | 'confirmed' | 'finalized';

/**
 * Solana block information
 */
export interface SolanaBlock {
  blockhash: string;
  previousBlockhash: string;
  parentSlot: number;
  transactions: SolanaTransaction[];
  rewards: any[];
  blockTime: number | null;
  blockHeight: number | null;
}

/**
 * Solana transaction
 */
export interface SolanaTransaction {
  signatures: string[];
  message: SolanaTransactionMessage;
}

/**
 * Solana transaction message
 */
export interface SolanaTransactionMessage {
  accountKeys: PublicKey[];
  recentBlockhash: string;
  instructions: TransactionInstruction[];
  header: {
    numRequiredSignatures: number;
    numReadonlySignedAccounts: number;
    numReadonlyUnsignedAccounts: number;
  };
}

/**
 * Solana account
 */
export interface SolanaAccount extends AccountInfo {
  pubkey: PublicKey;
}

/**
 * Encoded transaction for protocol adapter
 */
export interface EncodedTransaction {
  serialized: Uint8Array;
  signatures: string[];
}

/**
 * RPC request parameters
 */
export interface GetBalanceParams {
  publicKey: string;
  commitment?: CommitmentLevel;
}

export interface GetAccountInfoParams {
  publicKey: string;
  commitment?: CommitmentLevel;
  encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
  dataSlice?: {
    offset: number;
    length: number;
  };
}

export interface SendTransactionParams {
  transaction: string; // base64 encoded
  options?: {
    skipPreflight?: boolean;
    preflightCommitment?: CommitmentLevel;
    encoding?: 'base58' | 'base64';
    maxRetries?: number;
  };
}

export interface SimulateTransactionParams {
  transaction: string; // base64 encoded
  options?: {
    sigVerify?: boolean;
    commitment?: CommitmentLevel;
    encoding?: 'base58' | 'base64';
    replaceRecentBlockhash?: boolean;
    accounts?: {
      encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
      addresses: string[];
    };
  };
}

/**
 * Token account filter for getTokenAccountsByOwner
 */
export interface TokenAccountFilter {
  mint?: string;
  programId?: string;
}

/**
 * Subscription parameters
 */
export interface AccountSubscribeParams {
  publicKey: string;
  commitment?: CommitmentLevel;
  encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
}

export interface ProgramSubscribeParams {
  programId: string;
  commitment?: CommitmentLevel;
  encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
  filters?: Array<{
    memcmp?: {
      offset: number;
      bytes: string;
    };
    dataSize?: number;
  }>;
}

export interface LogsSubscribeParams {
  filter: 'all' | 'allWithVotes' | { mentions: string[] };
  commitment?: CommitmentLevel;
}

export interface SignatureSubscribeParams {
  signature: string;
  commitment?: CommitmentLevel;
  enableReceivedNotification?: boolean;
}
