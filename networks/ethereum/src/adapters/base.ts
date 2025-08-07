// networks/ethereum/src/adapters/base.ts

import {
  EthereumBlock,
  EthereumTransaction,
  TransactionReceipt,
  Log,
  FeeHistory,
  SyncStatus
} from '../types/responses';
import {
  BlockParams,
  TransactionParams,
  BalanceParams,
  LogFilter,
  BlockByNumberParams,
  BlockByHashParams,
  TransactionCountParams,
  EstimateGasParams,
  FeeHistoryParams
} from '../types/requests';
import { ProtocolInfo } from '../types/protocol';

/**
 * Base interface for Ethereum protocol adapters
 * Handles encoding/decoding between application types and RPC format
 */
export interface IEthereumProtocolAdapter {
  // Encoding methods (application params -> RPC format)
  encodeBlockByNumberParams(params: BlockByNumberParams): unknown[];
  encodeBlockByHashParams(params: BlockByHashParams): unknown[];
  encodeTransactionCountParams(params: TransactionCountParams): unknown[];
  encodeBalanceParams(params: BalanceParams): unknown[];
  encodeEstimateGasParams(params: EstimateGasParams): unknown[];
  encodeLogFilter(filter: LogFilter): unknown;
  encodeFeeHistoryParams(params: FeeHistoryParams): unknown[];
  
  // Decoding methods (RPC response -> application types)
  decodeBlock(response: unknown): EthereumBlock;
  decodeTransaction(response: unknown): EthereumTransaction;
  decodeTransactionReceipt(response: unknown): TransactionReceipt;
  decodeBalance(response: unknown): string;
  decodeCode(response: unknown): string;
  decodeStorageAt(response: unknown): string;
  decodeGasPrice(response: unknown): string;
  decodeGasEstimate(response: unknown): string;
  decodeLogs(response: unknown): Log[];
  decodeFeeHistory(response: unknown): FeeHistory;
  decodeSyncStatus(response: unknown): SyncStatus | boolean;
  decodeChainId(response: unknown): number;
  decodeNetworkVersion(response: unknown): string;
  decodeProtocolVersion(response: unknown): string;
  decodeBlockNumber(response: unknown): number;
  decodeTransactionCount(response: unknown): number;
  decodeBlockTransactionCount(response: unknown): number;
  decodeFilterId(response: unknown): string;
  decodeTransactionHash(response: unknown): string;
  decodeUninstallFilter(response: unknown): boolean;
  
  // Protocol info
  getVersion(): string;
  getSupportedMethods(): string[];
  getCapabilities(): string[];
  getProtocolInfo(): ProtocolInfo;
}
