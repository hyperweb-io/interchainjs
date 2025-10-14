import { TokenMath as BaseTokenMath } from '@interchainjs/math';
import { MAX_DECIMALS, MAX_LAMPORTS } from './constants';

/**
 * Solana-specific token math helpers extending the shared math package.
 */
export class TokenMath extends BaseTokenMath {
  private static assertDecimals(decimals: number): void {
    if (!Number.isInteger(decimals) || decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }
  }

  static uiAmountToRaw(uiAmount: number | string, decimals: number): bigint {
    this.assertDecimals(decimals);
    return super.uiAmountToRaw(uiAmount, decimals);
  }

  static rawToUiAmount(rawAmount: bigint, decimals: number, precision?: number): string {
    this.assertDecimals(decimals);
    return super.rawToUiAmount(rawAmount, decimals, precision);
  }

  static getMaxAmount(decimals: number): bigint {
    this.assertDecimals(decimals);
    return MAX_LAMPORTS;
  }

  static calculateFeeImpact(tokenAmount: bigint, feeAmount: bigint, lamportsPerToken: number): number {
    if (tokenAmount <= 0n || feeAmount < 0n || lamportsPerToken <= 0) {
      return 0;
    }

    const feeInTokens = Number(feeAmount) / lamportsPerToken;
    const tokenAmountNum = Number(tokenAmount);
    if (!Number.isFinite(feeInTokens) || !Number.isFinite(tokenAmountNum) || tokenAmountNum === 0) {
      return 0;
    }

    return (feeInTokens / tokenAmountNum) * 100;
  }
}
