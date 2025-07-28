// networks/ethereum/src/types/requests/transaction-params.ts

import { BlockTag } from '../protocol';

/**
 * Parameters for Ethereum transactions
 */
export interface TransactionParams {
  from?: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  value?: string;
  data?: string;
  nonce?: string;
  type?: string;
  accessList?: AccessListEntry[];
  chainId?: string;
}

/**
 * Access list entry for EIP-2930 transactions
 */
export interface AccessListEntry {
  address: string;
  storageKeys: string[];
}

/**
 * Parameters for getting a transaction by hash
 */
export interface TransactionByHashParams {
  transactionHash: string;
}

/**
 * Parameters for getting transaction receipt
 */
export interface TransactionReceiptParams {
  transactionHash: string;
}

/**
 * Parameters for getting transaction count (nonce)
 */
export interface TransactionCountParams {
  address: string;
  blockTag?: BlockTag;
}

/**
 * Parameters for sending raw transaction
 */
export interface SendRawTransactionParams {
  signedTransaction: string;
}

/**
 * Parameters for gas estimation
 */
export interface EstimateGasParams {
  transaction: TransactionParams;
  blockTag?: BlockTag;
}

/**
 * Encoded transaction parameters for RPC calls
 */
export interface EncodedTransactionParams {
  from?: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  value?: string;
  data?: string;
  nonce?: string;
  type?: string;
  accessList?: AccessListEntry[];
  chainId?: string;
}

export interface EncodedTransactionCountParams {
  address: string;
  blockTag: string;
}

export interface EncodedEstimateGasParams {
  transaction: EncodedTransactionParams;
  blockTag?: string;
}
