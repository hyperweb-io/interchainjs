// networks/ethereum/src/query/ethereum-query-client.ts

import { IRpcClient, NetworkError, TimeoutError } from '@interchainjs/types';
import { IEthereumQueryClient } from '../types/ethereum-client-interfaces';
import { IEthereumProtocolAdapter } from '../adapters/base';
import { EthereumRpcMethod, BlockTag, ProtocolInfo } from '../types/protocol';
import {
  EthereumBlock,
  EthereumTransaction,
  TransactionReceipt,
  Log,
  FeeHistory,
  SyncStatus
} from '../types/responses';
import {
  TransactionParams,
  LogFilter,
  BlockByNumberParams,
  BlockByHashParams,
  TransactionCountParams,
  BalanceParams,
  EstimateGasParams,
  FeeHistoryParams
} from '../types/requests';

/**
 * Ethereum Query Client Implementation
 * Provides methods for querying Ethereum blockchain data
 */
export class EthereumQueryClient implements IEthereumQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: IEthereumProtocolAdapter
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

  // Basic Info Methods
  async getChainId(): Promise<number> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_CHAIN_ID, []);
      return this.protocolAdapter.decodeChainId(result);
    } catch (error) {
      this.handleError('getChainId', error);
    }
  }

  async getNetworkVersion(): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.NET_VERSION, []);
      return this.protocolAdapter.decodeNetworkVersion(result);
    } catch (error) {
      this.handleError('getNetworkVersion', error);
    }
  }

  async getProtocolVersion(): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_PROTOCOL_VERSION, []);
      return this.protocolAdapter.decodeProtocolVersion(result);
    } catch (error) {
      this.handleError('getProtocolVersion', error);
    }
  }

  async isSyncing(): Promise<boolean | SyncStatus> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_SYNCING, []);
      return this.protocolAdapter.decodeSyncStatus(result);
    } catch (error) {
      this.handleError('isSyncing', error);
    }
  }

  async getBlockNumber(): Promise<number> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_BLOCK_NUMBER, []);
      return this.protocolAdapter.decodeBlockNumber(result);
    } catch (error) {
      this.handleError('getBlockNumber', error);
    }
  }

  // Block Methods
  async getBlock(blockNumber?: BlockTag): Promise<EthereumBlock> {
    const blockTag = blockNumber ?? 'latest';
    return this.getBlockByNumber(blockTag, true);
  }

  async getBlockByHash(hash: string, includeTransactions: boolean = true): Promise<EthereumBlock> {
    try {
      const params: BlockByHashParams = { blockHash: hash, includeTransactions };
      const encodedParams = this.protocolAdapter.encodeBlockByHashParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_BLOCK_BY_HASH, encodedParams);
      return this.protocolAdapter.decodeBlock(result);
    } catch (error) {
      this.handleError('getBlockByHash', error);
    }
  }

  async getBlockByNumber(blockNumber: BlockTag, includeTransactions: boolean = true): Promise<EthereumBlock> {
    try {
      const params: BlockByNumberParams = { blockNumber, includeTransactions };
      const encodedParams = this.protocolAdapter.encodeBlockByNumberParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_BLOCK_BY_NUMBER, encodedParams);
      return this.protocolAdapter.decodeBlock(result);
    } catch (error) {
      this.handleError('getBlockByNumber', error);
    }
  }

  async getLatestBlock(): Promise<EthereumBlock> {
    return this.getBlockByNumber('latest', true);
  }

  async getBlockTransactionCount(blockNumber?: BlockTag): Promise<number> {
    try {
      const blockTag = blockNumber ?? 'latest';
      const encodedParams = this.protocolAdapter.encodeBlockByNumberParams({
        blockNumber: blockTag,
        includeTransactions: false
      });
      const result = await this.rpcClient.call(
        EthereumRpcMethod.ETH_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER,
        [encodedParams[0]] // Only need the block number
      );
      return this.protocolAdapter.decodeBlockTransactionCount(result);
    } catch (error) {
      this.handleError('getBlockTransactionCount', error);
    }
  }

  async getBlockTransactionCountByHash(hash: string): Promise<number> {
    try {
      const result = await this.rpcClient.call(
        EthereumRpcMethod.ETH_GET_BLOCK_TRANSACTION_COUNT_BY_HASH,
        [hash]
      );
      return this.protocolAdapter.decodeBlockTransactionCount(result);
    } catch (error) {
      this.handleError('getBlockTransactionCountByHash', error);
    }
  }

  // Transaction Methods
  async getTransaction(hash: string): Promise<EthereumTransaction> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_TRANSACTION_BY_HASH, [hash]);
      return this.protocolAdapter.decodeTransaction(result);
    } catch (error) {
      this.handleError('getTransaction', error);
    }
  }

  async getTransactionReceipt(hash: string): Promise<TransactionReceipt> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_TRANSACTION_RECEIPT, [hash]);
      return this.protocolAdapter.decodeTransactionReceipt(result);
    } catch (error) {
      this.handleError('getTransactionReceipt', error);
    }
  }

  async getTransactionCount(address: string, blockTag: BlockTag = 'latest'): Promise<number> {
    try {
      const params: TransactionCountParams = { address, blockTag };
      const encodedParams = this.protocolAdapter.encodeTransactionCountParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_TRANSACTION_COUNT, encodedParams);
      return this.protocolAdapter.decodeTransactionCount(result);
    } catch (error) {
      this.handleError('getTransactionCount', error);
    }
  }

  async sendRawTransaction(signedTx: string): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_SEND_RAW_TRANSACTION, [signedTx]);
      return this.protocolAdapter.decodeTransactionHash(result);
    } catch (error) {
      this.handleError('sendRawTransaction', error);
    }
  }

  async estimateGas(txParams: TransactionParams, blockTag?: BlockTag): Promise<bigint> {
    try {
      const params: EstimateGasParams = { transaction: txParams, blockTag };
      const encodedParams = this.protocolAdapter.encodeEstimateGasParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_ESTIMATE_GAS, encodedParams);
      const gasHex = this.protocolAdapter.decodeGasEstimate(result);
      return BigInt(gasHex);
    } catch (error) {
      this.handleError('estimateGas', error);
    }
  }

  // Account/Balance Methods
  async getBalance(address: string, blockTag: BlockTag = 'latest'): Promise<bigint> {
    try {
      const params: BalanceParams = { address, blockTag };
      const encodedParams = this.protocolAdapter.encodeBalanceParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_BALANCE, encodedParams);
      const balanceHex = this.protocolAdapter.decodeBalance(result);
      return BigInt(balanceHex);
    } catch (error) {
      this.handleError('getBalance', error);
    }
  }

  async getCode(address: string, blockTag: BlockTag = 'latest'): Promise<string> {
    try {
      const params: BalanceParams = { address, blockTag }; // Reuse BalanceParams structure
      const encodedParams = this.protocolAdapter.encodeBalanceParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_CODE, encodedParams);
      return this.protocolAdapter.decodeCode(result);
    } catch (error) {
      this.handleError('getCode', error);
    }
  }

  async getStorageAt(address: string, position: string, blockTag: BlockTag = 'latest'): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_STORAGE_AT, [address, position, blockTag]);
      return this.protocolAdapter.decodeStorageAt(result);
    } catch (error) {
      this.handleError('getStorageAt', error);
    }
  }

  // Gas/Fee Methods
  async getGasPrice(): Promise<bigint> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GAS_PRICE, []);
      const gasPriceHex = this.protocolAdapter.decodeGasPrice(result);
      return BigInt(gasPriceHex);
    } catch (error) {
      this.handleError('getGasPrice', error);
    }
  }

  async getMaxPriorityFeePerGas(): Promise<bigint> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_MAX_PRIORITY_FEE_PER_GAS, []);
      const feeHex = this.protocolAdapter.decodeGasPrice(result); // Reuse gas price decoder
      return BigInt(feeHex);
    } catch (error) {
      this.handleError('getMaxPriorityFeePerGas', error);
    }
  }

  async getFeeHistory(blockCount: number, newestBlock: BlockTag, rewardPercentiles?: number[]): Promise<FeeHistory> {
    try {
      const params: FeeHistoryParams = { blockCount, newestBlock, rewardPercentiles };
      const encodedParams = this.protocolAdapter.encodeFeeHistoryParams(params);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_FEE_HISTORY, encodedParams);
      return this.protocolAdapter.decodeFeeHistory(result);
    } catch (error) {
      this.handleError('getFeeHistory', error);
    }
  }

  // Filter/Log Methods
  async getLogs(filter: LogFilter): Promise<Log[]> {
    try {
      const encodedFilter = this.protocolAdapter.encodeLogFilter(filter);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_LOGS, [encodedFilter]);
      return this.protocolAdapter.decodeLogs(result);
    } catch (error) {
      this.handleError('getLogs', error);
    }
  }

  async newFilter(filter: LogFilter): Promise<string> {
    try {
      const encodedFilter = this.protocolAdapter.encodeLogFilter(filter);
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_NEW_FILTER, [encodedFilter]);
      return this.protocolAdapter.decodeFilterId(result);
    } catch (error) {
      this.handleError('newFilter', error);
    }
  }

  async newBlockFilter(): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_NEW_BLOCK_FILTER, []);
      return this.protocolAdapter.decodeFilterId(result);
    } catch (error) {
      this.handleError('newBlockFilter', error);
    }
  }

  async newPendingTransactionFilter(): Promise<string> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_NEW_PENDING_TRANSACTION_FILTER, []);
      return this.protocolAdapter.decodeFilterId(result);
    } catch (error) {
      this.handleError('newPendingTransactionFilter', error);
    }
  }

  async getFilterLogs(filterId: string): Promise<Log[]> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_FILTER_LOGS, [filterId]);
      return this.protocolAdapter.decodeLogs(result);
    } catch (error) {
      this.handleError('getFilterLogs', error);
    }
  }

  async getFilterChanges(filterId: string): Promise<Log[] | string[]> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_FILTER_CHANGES, [filterId]);
      // Result can be either logs or block/transaction hashes
      if (Array.isArray(result) && result.length > 0 && typeof result[0] === 'object') {
        return this.protocolAdapter.decodeLogs(result);
      }
      return result as string[];
    } catch (error) {
      this.handleError('getFilterChanges', error);
    }
  }

  async uninstallFilter(filterId: string): Promise<boolean> {
    try {
      const result = await this.rpcClient.call(EthereumRpcMethod.ETH_UNINSTALL_FILTER, [filterId]);
      return this.protocolAdapter.decodeUninstallFilter(result);
    } catch (error) {
      this.handleError('uninstallFilter', error);
    }
  }

  // Protocol info
  getProtocolInfo(): ProtocolInfo {
    return this.protocolAdapter.getProtocolInfo();
  }

  // Error handling
  private handleError(method: string, error: any): never {
    if (error instanceof NetworkError || error instanceof TimeoutError) {
      throw error;
    }
    throw new NetworkError(`${method} failed: ${error.message}`, error);
  }
}
