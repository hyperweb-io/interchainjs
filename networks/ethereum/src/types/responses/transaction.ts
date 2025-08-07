// networks/ethereum/src/types/responses/transaction.ts

import { AccessListEntry } from '../requests/transaction-params';

/**
 * Ethereum transaction structure
 */
export interface EthereumTransaction {
  hash: string;
  from: string;
  to: string | null;
  value: string;
  gas: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce: string;
  blockNumber: string | null;
  blockHash: string | null;
  transactionIndex: string | null;
  input: string;
  type?: string;
  chainId?: string;
  v?: string;
  r?: string;
  s?: string;
  accessList?: AccessListEntry[];
  maxFeePerBlobGas?: string;
  blobVersionedHashes?: string[];
}

/**
 * Pending transaction (not yet mined)
 */
export interface PendingTransaction extends Omit<EthereumTransaction, 'blockNumber' | 'blockHash' | 'transactionIndex'> {
  blockNumber: null;
  blockHash: null;
  transactionIndex: null;
}

/**
 * Transaction with additional metadata
 */
export interface TransactionWithMetadata extends EthereumTransaction {
  gasUsed?: string;
  cumulativeGasUsed?: string;
  effectiveGasPrice?: string;
  status?: string;
}
