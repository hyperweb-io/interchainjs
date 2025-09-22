import Decimal from 'decimal.js';
import { StdFee } from '@interchainjs/types';

/**
 * Minimal denom checker similar to CosmJS, permissive with basic safety.
 */
function checkDenom(denom: string): void {
  if (!denom) throw new Error('denom must not be empty');
  if (denom.length < 3 || denom.length > 128) {
    throw new Error('Denom must be between 3 and 128 characters');
  }
}

/**
 * A gas price, i.e. the price of a single unit of gas. Typically a fraction of the smallest fee token unit.
 */
export class GasPrice {
  public readonly amount: Decimal;
  public readonly denom: string;

  constructor(amount: Decimal, denom: string) {
    checkDenom(denom);
    this.amount = amount;
    this.denom = denom;
  }

  /**
   * Parses a gas price formatted as `<amount><denom>`, e.g. "0.012uatom".
   * Separators are not supported.
   */
  public static fromString(gasPrice: string): GasPrice {
    const match = gasPrice.match(/^([0-9]+(?:\.[0-9]+)?)([a-zA-Z][a-zA-Z0-9/:._-]*)$/);
    if (!match) {
      throw new Error('Invalid gas price string');
    }
    const [, amountStr, denom] = match;
    checkDenom(denom);
    const amount = new Decimal(amountStr);
    return new GasPrice(amount, denom);
  }

  /** Returns a string representation such as "0.025uatom". */
  public toString(): string {
    return this.amount.toString() + this.denom;
  }
}

/**
 * Calculate StdFee from a gas limit and gas price. Rounds amount up to the nearest integer unit.
 */
export function calculateFee(gasLimit: number | bigint, gasPrice: GasPrice | string): StdFee {
  const processed = typeof gasPrice === 'string' ? GasPrice.fromString(gasPrice) : gasPrice;
  const gasLimitDec = new Decimal(typeof gasLimit === 'bigint' ? gasLimit.toString() : gasLimit);
  const amount = processed.amount.mul(gasLimitDec).ceil();
  return {
    amount: [{ denom: processed.denom, amount: amount.toFixed(0) }],
    gas: (typeof gasLimit === 'bigint' ? gasLimit.toString() : String(gasLimit)),
  };
}

