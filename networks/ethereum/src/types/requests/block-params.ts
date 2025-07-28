// networks/ethereum/src/types/requests/block-params.ts

import { BlockTag } from '../protocol';

/**
 * Parameters for getting a block by number
 */
export interface BlockByNumberParams {
  blockNumber: BlockTag;
  includeTransactions?: boolean;
}

/**
 * Parameters for getting a block by hash
 */
export interface BlockByHashParams {
  blockHash: string;
  includeTransactions?: boolean;
}

/**
 * Generic block parameters (can be by number or hash)
 */
export interface BlockParams {
  blockNumber?: BlockTag;
  blockHash?: string;
  includeTransactions?: boolean;
}

/**
 * Parameters for getting block transaction count
 */
export interface BlockTransactionCountParams {
  blockNumber?: BlockTag;
  blockHash?: string;
}

/**
 * Parameters for getting the latest block number
 */
export interface BlockNumberParams {
  // No parameters needed for latest block number
}

/**
 * Encoded block parameters for RPC calls
 */
export interface EncodedBlockByNumberParams {
  blockNumber: string;
  includeTransactions: boolean;
}

export interface EncodedBlockByHashParams {
  blockHash: string;
  includeTransactions: boolean;
}

export interface EncodedBlockTransactionCountParams {
  block: string;
}
