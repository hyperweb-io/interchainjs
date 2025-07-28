// networks/ethereum/src/types/ethereum-client-interfaces.ts

import { IQueryClient, IEventClient } from '@interchainjs/types';
import {
  EthereumBlock,
  EthereumTransaction,
  TransactionReceipt,
  Log,
  FeeHistory,
  SyncStatus
} from './responses';
import {
  TransactionParams,
  LogFilter
} from './requests';
import { BlockTag } from './protocol';
import { ProtocolInfo } from './protocol';

/**
 * Ethereum Query Client Interface
 * Extends the base IQueryClient with Ethereum-specific methods
 */
export interface IEthereumQueryClient extends IQueryClient {
  // Basic Info Methods
  getChainId(): Promise<number>;
  getNetworkVersion(): Promise<string>;
  getProtocolVersion(): Promise<string>;
  isSyncing(): Promise<boolean | SyncStatus>;
  getBlockNumber(): Promise<number>;

  // Block Methods
  getBlock(blockNumber?: BlockTag): Promise<EthereumBlock>;
  getBlockByHash(hash: string, includeTransactions?: boolean): Promise<EthereumBlock>;
  getBlockByNumber(blockNumber: BlockTag, includeTransactions?: boolean): Promise<EthereumBlock>;
  getLatestBlock(): Promise<EthereumBlock>;
  getBlockTransactionCount(blockNumber?: BlockTag): Promise<number>;
  getBlockTransactionCountByHash(hash: string): Promise<number>;

  // Transaction Methods
  getTransaction(hash: string): Promise<EthereumTransaction>;
  getTransactionReceipt(hash: string): Promise<TransactionReceipt>;
  getTransactionCount(address: string, blockTag?: BlockTag): Promise<number>;
  sendRawTransaction(signedTx: string): Promise<string>;
  estimateGas(txParams: TransactionParams, blockTag?: BlockTag): Promise<bigint>;

  // Account/Balance Methods
  getBalance(address: string, blockTag?: BlockTag): Promise<bigint>;
  getCode(address: string, blockTag?: BlockTag): Promise<string>;
  getStorageAt(address: string, position: string, blockTag?: BlockTag): Promise<string>;

  // Gas/Fee Methods
  getGasPrice(): Promise<bigint>;
  getMaxPriorityFeePerGas(): Promise<bigint>;
  getFeeHistory(blockCount: number, newestBlock: BlockTag, rewardPercentiles?: number[]): Promise<FeeHistory>;

  // Filter/Log Methods
  getLogs(filter: LogFilter): Promise<Log[]>;
  newFilter(filter: LogFilter): Promise<string>;
  newBlockFilter(): Promise<string>;
  newPendingTransactionFilter(): Promise<string>;
  getFilterLogs(filterId: string): Promise<Log[]>;
  getFilterChanges(filterId: string): Promise<Log[] | string[]>;
  uninstallFilter(filterId: string): Promise<boolean>;

  // Protocol info
  getProtocolInfo(): ProtocolInfo;
}

/**
 * Ethereum Event Client Interface
 * For WebSocket-based event subscriptions
 */
export interface IEthereumEventClient extends IEventClient {
  // Block subscriptions
  subscribeToNewBlocks(): AsyncIterable<EthereumBlock>;
  subscribeToNewBlockHeaders(): AsyncIterable<any>;

  // Transaction subscriptions
  subscribeToPendingTransactions(): AsyncIterable<string>;
  subscribeToTransactions(): AsyncIterable<EthereumTransaction>;

  // Log subscriptions
  subscribeToLogs(filter?: LogFilter): AsyncIterable<Log>;

  // Sync subscriptions
  subscribeToSyncing(): AsyncIterable<SyncStatus | boolean>;

  // Unsubscribe methods
  unsubscribe(subscriptionId: string): Promise<boolean>;
  unsubscribeFromAll(): Promise<void>;
}
