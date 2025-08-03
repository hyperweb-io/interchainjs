// networks/ethereum/src/types/responses/receipt.ts

import { Log } from './log';

/**
 * Ethereum transaction receipt
 */
export interface TransactionReceipt {
  transactionHash: string;
  blockNumber: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string | null;
  gasUsed: string;
  cumulativeGasUsed: string;
  status: string;
  logs: Log[];
  logsBloom: string;
  type?: string;
  effectiveGasPrice?: string;
  contractAddress?: string | null;
  root?: string;
  blobGasUsed?: string;
  blobGasPrice?: string;
}

/**
 * Receipt status values
 */
export enum ReceiptStatus {
  FAILED = '0x0',
  SUCCESS = '0x1'
}

/**
 * Receipt with additional computed fields
 */
export interface EnhancedTransactionReceipt extends TransactionReceipt {
  gasEfficiency?: number;
  logCount: number;
  success: boolean;
}
