/**
 * Transaction response types and codec
 */

import { createCodec, ensureNumber, ensureString, apiToBigInt } from '../../codec';

export interface TransactionResponse {
  readonly blockTime: number | null;
  readonly meta: unknown | null;
  readonly slot: number;
  readonly transaction: unknown;
  readonly version: string | number | undefined;
}

// Codec for transaction response
export const TransactionResponseCodec = createCodec<TransactionResponse>({
  blockTime: {
    converter: (value: unknown) => {
      if (value === null || value === undefined) return null;
      const bigintValue = apiToBigInt(value);
      if (bigintValue !== undefined) {
        return Number(bigintValue);
      }
      return ensureNumber(value) ?? null;
    }
  },
  meta: {
    converter: (value: unknown) => value
  },
  slot: {
    converter: (value: unknown) => {
      const slot = ensureNumber(value);
      if (slot === undefined) {
        throw new Error('slot is required');
      }
      return slot;
    }
  },
  transaction: {
    converter: (value: unknown) => value
  },
  version: {
    converter: (value: unknown) => {
      if (value === null || value === undefined) return undefined;
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return value;
      return ensureString(value);
    }
  }
});

export function createTransactionResponse(data: unknown): TransactionResponse | null {
  if (data === null || data === undefined) return null;
  return TransactionResponseCodec.create(data);
}
