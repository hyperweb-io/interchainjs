// networks/ethereum/src/types/responses/fee-history.ts

/**
 * Fee history response from eth_feeHistory
 */
export interface FeeHistory {
  baseFeePerGas: string[];
  gasUsedRatio: number[];
  oldestBlock: string;
  reward?: string[][];
}

/**
 * Enhanced fee history with computed statistics
 */
export interface EnhancedFeeHistory extends FeeHistory {
  averageBaseFee: string;
  maxBaseFee: string;
  minBaseFee: string;
  averageGasUsedRatio: number;
  maxGasUsedRatio: number;
  minGasUsedRatio: number;
  recommendedGasPrice?: string;
  recommendedMaxFeePerGas?: string;
  recommendedMaxPriorityFeePerGas?: string;
}

/**
 * Gas price recommendation
 */
export interface GasPriceRecommendation {
  slow: {
    gasPrice: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
  };
  standard: {
    gasPrice: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
  };
  fast: {
    gasPrice: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
  };
}
