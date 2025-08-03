// networks/ethereum/src/types/requests/log-filter-params.ts

import { BlockTag } from '../protocol';

/**
 * Log filter parameters for eth_getLogs
 */
export interface LogFilter {
  fromBlock?: BlockTag;
  toBlock?: BlockTag;
  address?: string | string[];
  topics?: (string | string[] | null)[];
  blockHash?: string;
}

/**
 * Parameters for creating a new filter
 */
export interface NewFilterParams {
  filter: LogFilter;
}

/**
 * Parameters for getting filter logs
 */
export interface FilterLogsParams {
  filterId: string;
}

/**
 * Parameters for getting filter changes
 */
export interface FilterChangesParams {
  filterId: string;
}

/**
 * Parameters for uninstalling a filter
 */
export interface UninstallFilterParams {
  filterId: string;
}

/**
 * Parameters for fee history
 */
export interface FeeHistoryParams {
  blockCount: number;
  newestBlock: BlockTag;
  rewardPercentiles?: number[];
}

/**
 * Encoded log filter parameters for RPC calls
 */
export interface EncodedLogFilter {
  fromBlock?: string;
  toBlock?: string;
  address?: string | string[];
  topics?: (string | string[] | null)[];
  blockHash?: string;
}

export interface EncodedFeeHistoryParams {
  blockCount: string;
  newestBlock: string;
  rewardPercentiles?: number[];
}
