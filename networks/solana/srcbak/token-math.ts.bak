import { TokenMath as BaseTokenMath } from '@interchainjs/math';
import { MAX_DECIMALS } from './token-constants';

/**
 * Solana-specific TokenMath class that extends the base TokenMath from @interchainjs/math
 * Inherits all cross-network token math functionality and adds Solana-specific methods
 */
export class TokenMath extends BaseTokenMath {
  /**
   * Convert UI amount to raw token amount with Solana-specific decimal bounds
   */
  static uiAmountToRaw(uiAmount: number | string, decimals: number): bigint {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }
    return super.uiAmountToRaw(uiAmount, decimals);
  }

  /**
   * Convert raw token amount to UI amount with Solana-specific decimal bounds
   */
  static rawToUiAmount(rawAmount: bigint, decimals: number, precision?: number): string {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }
    return super.rawToUiAmount(rawAmount, decimals, precision);
  }
  /**
   * Override getMaxAmount to use Solana-specific MAX_DECIMALS
   * @param decimals - Number of decimals
   * @returns Maximum token amount as bigint
   */
  static getMaxAmount(decimals: number): bigint {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }

    // Maximum u64 value (Solana-specific)
    return 18446744073709551615n;
  }

  /**
   * Calculate transaction fee impact on token balance (Solana-specific)
   * @param tokenAmount - Token amount being transferred
   * @param feeAmount - Fee amount in lamports
   * @param lamportsPerToken - Exchange rate (lamports per token)
   * @returns Fee impact as percentage
   */
  static calculateFeeImpact(
    tokenAmount: bigint,
    feeAmount: bigint,
    lamportsPerToken: number
  ): number {
    if (tokenAmount <= 0n || feeAmount < 0n || lamportsPerToken <= 0) {
      return 0;
    }

    // Convert fee to token equivalent
    const feeInTokens = Number(feeAmount) / lamportsPerToken;
    const tokenAmountNum = Number(tokenAmount);

    return (feeInTokens / tokenAmountNum) * 100;
  }
}
