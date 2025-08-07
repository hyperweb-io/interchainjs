// networks/ethereum/src/types/responses/log.ts

/**
 * Ethereum log entry
 */
export interface Log {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  blockHash: string;
  transactionHash: string;
  transactionIndex: string;
  logIndex: string;
  removed: boolean;
}

/**
 * Log with additional metadata
 */
export interface LogWithMetadata extends Log {
  timestamp?: string;
  gasUsed?: string;
  gasPrice?: string;
}

/**
 * Filter result containing logs
 */
export interface FilterResult {
  logs: Log[];
  fromBlock: string;
  toBlock: string;
  totalLogs: number;
}
