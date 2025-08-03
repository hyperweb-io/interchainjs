// networks/ethereum/src/adapters/ethereum-adapter.ts

import { IEthereumProtocolAdapter } from './base';
import {
  EthereumBlock,
  EthereumTransaction,
  TransactionReceipt,
  Log,
  FeeHistory,
  SyncStatus
} from '../types/responses';
import {
  BlockByNumberParams,
  BlockByHashParams,
  TransactionCountParams,
  BalanceParams,
  EstimateGasParams,
  LogFilter,
  FeeHistoryParams
} from '../types/requests';
import {
  ProtocolInfo,
  EthereumRpcMethod,
  EthereumCapability,
  DEFAULT_ETHEREUM_PROTOCOL_INFO
} from '../types/protocol';
import {
  normalizeBlockTag,
  normalizeAddress,
  normalizeHash,
  hexToNumber,
  hexToBigint,
  ensureString,
  ensureNumber,
  ensureBoolean
} from '../types/codec';

/**
 * Ethereum protocol adapter implementation
 * Handles encoding/decoding for Ethereum JSON-RPC calls
 */
export class EthereumAdapter implements IEthereumProtocolAdapter {

  // Encoding methods
  encodeBlockByNumberParams(params: BlockByNumberParams): unknown[] {
    return [
      normalizeBlockTag(params.blockNumber),
      params.includeTransactions ?? false
    ];
  }

  encodeBlockByHashParams(params: BlockByHashParams): unknown[] {
    return [
      normalizeHash(params.blockHash),
      params.includeTransactions ?? false
    ];
  }

  encodeTransactionCountParams(params: TransactionCountParams): unknown[] {
    return [
      normalizeAddress(params.address),
      normalizeBlockTag(params.blockTag ?? 'latest')
    ];
  }

  encodeBalanceParams(params: BalanceParams): unknown[] {
    return [
      normalizeAddress(params.address),
      normalizeBlockTag(params.blockTag ?? 'latest')
    ];
  }

  encodeEstimateGasParams(params: EstimateGasParams): unknown[] {
    const txParams: any = {};

    if (params.transaction.from) txParams.from = normalizeAddress(params.transaction.from);
    if (params.transaction.to) txParams.to = normalizeAddress(params.transaction.to);
    if (params.transaction.value) txParams.value = params.transaction.value;
    if (params.transaction.data) txParams.data = params.transaction.data;
    if (params.transaction.gas) txParams.gas = params.transaction.gas;
    if (params.transaction.gasPrice) txParams.gasPrice = params.transaction.gasPrice;
    if (params.transaction.maxFeePerGas) txParams.maxFeePerGas = params.transaction.maxFeePerGas;
    if (params.transaction.maxPriorityFeePerGas) txParams.maxPriorityFeePerGas = params.transaction.maxPriorityFeePerGas;

    const result = [txParams];
    if (params.blockTag) {
      result.push(normalizeBlockTag(params.blockTag));
    }

    return result;
  }

  encodeLogFilter(filter: LogFilter): unknown {
    const encoded: any = {};

    if (filter.fromBlock !== undefined) {
      encoded.fromBlock = normalizeBlockTag(filter.fromBlock);
    }
    if (filter.toBlock !== undefined) {
      encoded.toBlock = normalizeBlockTag(filter.toBlock);
    }
    if (filter.address !== undefined) {
      if (Array.isArray(filter.address)) {
        encoded.address = filter.address.map(addr => normalizeAddress(addr));
      } else {
        encoded.address = normalizeAddress(filter.address);
      }
    }
    if (filter.topics !== undefined) {
      encoded.topics = filter.topics;
    }
    if (filter.blockHash !== undefined) {
      encoded.blockHash = normalizeHash(filter.blockHash);
    }

    return encoded;
  }

  encodeFeeHistoryParams(params: FeeHistoryParams): (string | number[])[] {
    const result: (string | number[])[] = [
      '0x' + params.blockCount.toString(16),
      normalizeBlockTag(params.newestBlock)
    ];

    if (params.rewardPercentiles) {
      result.push(params.rewardPercentiles);
    }

    return result;
  }

  // Decoding methods
  decodeBlock(response: unknown): EthereumBlock {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid block response');
    }

    const block = response as any;
    return {
      number: ensureString(block.number),
      hash: ensureString(block.hash),
      parentHash: ensureString(block.parentHash),
      nonce: ensureString(block.nonce),
      sha3Uncles: ensureString(block.sha3Uncles),
      logsBloom: ensureString(block.logsBloom),
      transactionsRoot: ensureString(block.transactionsRoot),
      stateRoot: ensureString(block.stateRoot),
      receiptsRoot: ensureString(block.receiptsRoot),
      miner: ensureString(block.miner),
      difficulty: ensureString(block.difficulty),
      totalDifficulty: ensureString(block.totalDifficulty),
      extraData: ensureString(block.extraData),
      size: ensureString(block.size),
      gasLimit: ensureString(block.gasLimit),
      gasUsed: ensureString(block.gasUsed),
      timestamp: ensureString(block.timestamp),
      transactions: block.transactions || [],
      uncles: block.uncles || [],
      mixHash: block.mixHash ? ensureString(block.mixHash) : undefined,
      baseFeePerGas: block.baseFeePerGas ? ensureString(block.baseFeePerGas) : undefined,
      withdrawalsRoot: block.withdrawalsRoot ? ensureString(block.withdrawalsRoot) : undefined,
      blobGasUsed: block.blobGasUsed ? ensureString(block.blobGasUsed) : undefined,
      excessBlobGas: block.excessBlobGas ? ensureString(block.excessBlobGas) : undefined,
      parentBeaconBlockRoot: block.parentBeaconBlockRoot ? ensureString(block.parentBeaconBlockRoot) : undefined
    };
  }

  decodeTransaction(response: unknown): EthereumTransaction {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid transaction response');
    }

    const tx = response as any;
    return {
      hash: ensureString(tx.hash),
      from: ensureString(tx.from),
      to: tx.to ? ensureString(tx.to) : null,
      value: ensureString(tx.value),
      gas: ensureString(tx.gas),
      gasPrice: tx.gasPrice ? ensureString(tx.gasPrice) : undefined,
      maxFeePerGas: tx.maxFeePerGas ? ensureString(tx.maxFeePerGas) : undefined,
      maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? ensureString(tx.maxPriorityFeePerGas) : undefined,
      nonce: ensureString(tx.nonce),
      blockNumber: tx.blockNumber ? ensureString(tx.blockNumber) : null,
      blockHash: tx.blockHash ? ensureString(tx.blockHash) : null,
      transactionIndex: tx.transactionIndex ? ensureString(tx.transactionIndex) : null,
      input: ensureString(tx.input),
      type: tx.type ? ensureString(tx.type) : undefined,
      chainId: tx.chainId ? ensureString(tx.chainId) : undefined,
      v: tx.v ? ensureString(tx.v) : undefined,
      r: tx.r ? ensureString(tx.r) : undefined,
      s: tx.s ? ensureString(tx.s) : undefined,
      accessList: tx.accessList || undefined,
      maxFeePerBlobGas: tx.maxFeePerBlobGas ? ensureString(tx.maxFeePerBlobGas) : undefined,
      blobVersionedHashes: tx.blobVersionedHashes || undefined
    };
  }

  decodeTransactionReceipt(response: unknown): TransactionReceipt {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid transaction receipt response');
    }

    const receipt = response as any;
    return {
      transactionHash: ensureString(receipt.transactionHash),
      blockNumber: ensureString(receipt.blockNumber),
      blockHash: ensureString(receipt.blockHash),
      transactionIndex: ensureString(receipt.transactionIndex),
      from: ensureString(receipt.from),
      to: receipt.to ? ensureString(receipt.to) : null,
      gasUsed: ensureString(receipt.gasUsed),
      cumulativeGasUsed: ensureString(receipt.cumulativeGasUsed),
      status: ensureString(receipt.status),
      logs: (receipt.logs || []).map((log: any) => this.decodeLog(log)),
      logsBloom: ensureString(receipt.logsBloom),
      type: receipt.type ? ensureString(receipt.type) : undefined,
      effectiveGasPrice: receipt.effectiveGasPrice ? ensureString(receipt.effectiveGasPrice) : undefined,
      contractAddress: receipt.contractAddress ? ensureString(receipt.contractAddress) : null,
      root: receipt.root ? ensureString(receipt.root) : undefined,
      blobGasUsed: receipt.blobGasUsed ? ensureString(receipt.blobGasUsed) : undefined,
      blobGasPrice: receipt.blobGasPrice ? ensureString(receipt.blobGasPrice) : undefined
    };
  }

  private decodeLog(logData: any): Log {
    return {
      address: ensureString(logData.address),
      topics: logData.topics || [],
      data: ensureString(logData.data),
      blockNumber: ensureString(logData.blockNumber),
      blockHash: ensureString(logData.blockHash),
      transactionHash: ensureString(logData.transactionHash),
      transactionIndex: ensureString(logData.transactionIndex),
      logIndex: ensureString(logData.logIndex),
      removed: ensureBoolean(logData.removed)
    };
  }

  decodeBalance(response: unknown): string {
    return ensureString(response);
  }

  decodeCode(response: unknown): string {
    return ensureString(response);
  }

  decodeStorageAt(response: unknown): string {
    return ensureString(response);
  }

  decodeGasPrice(response: unknown): string {
    return ensureString(response);
  }

  decodeGasEstimate(response: unknown): string {
    return ensureString(response);
  }

  decodeLogs(response: unknown): Log[] {
    if (!Array.isArray(response)) {
      throw new Error('Invalid logs response');
    }

    return response.map(log => this.decodeLog(log));
  }

  decodeFeeHistory(response: unknown): FeeHistory {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid fee history response');
    }

    const feeHistory = response as any;
    return {
      baseFeePerGas: feeHistory.baseFeePerGas || [],
      gasUsedRatio: feeHistory.gasUsedRatio || [],
      oldestBlock: ensureString(feeHistory.oldestBlock),
      reward: feeHistory.reward || undefined
    };
  }

  decodeSyncStatus(response: unknown): SyncStatus | boolean {
    if (typeof response === 'boolean') {
      return response;
    }

    if (!response || typeof response !== 'object') {
      throw new Error('Invalid sync status response');
    }

    const syncStatus = response as any;
    return {
      startingBlock: ensureString(syncStatus.startingBlock),
      currentBlock: ensureString(syncStatus.currentBlock),
      highestBlock: ensureString(syncStatus.highestBlock),
      pulledStates: syncStatus.pulledStates ? ensureString(syncStatus.pulledStates) : undefined,
      knownStates: syncStatus.knownStates ? ensureString(syncStatus.knownStates) : undefined
    };
  }

  decodeChainId(response: unknown): number {
    return hexToNumber(ensureString(response));
  }

  decodeNetworkVersion(response: unknown): string {
    return ensureString(response);
  }

  decodeProtocolVersion(response: unknown): string {
    return ensureString(response);
  }

  decodeBlockNumber(response: unknown): number {
    return hexToNumber(ensureString(response));
  }

  decodeTransactionCount(response: unknown): number {
    return hexToNumber(ensureString(response));
  }

  decodeBlockTransactionCount(response: unknown): number {
    return hexToNumber(ensureString(response));
  }

  decodeFilterId(response: unknown): string {
    return ensureString(response);
  }

  decodeTransactionHash(response: unknown): string {
    return ensureString(response);
  }

  decodeUninstallFilter(response: unknown): boolean {
    return ensureBoolean(response);
  }

  // Protocol info methods
  getVersion(): string {
    return DEFAULT_ETHEREUM_PROTOCOL_INFO.version;
  }

  getSupportedMethods(): string[] {
    return DEFAULT_ETHEREUM_PROTOCOL_INFO.supportedMethods;
  }

  getCapabilities(): string[] {
    return DEFAULT_ETHEREUM_PROTOCOL_INFO.capabilities;
  }

  getProtocolInfo(): ProtocolInfo {
    return DEFAULT_ETHEREUM_PROTOCOL_INFO;
  }
}
