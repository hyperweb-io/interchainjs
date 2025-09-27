/**
 * TransactionCount response types and codec
 */

import { createCodec, ensureNumber } from '../../codec';

// Simple number response for transaction count
export type TransactionCountResponse = number;

// Codec for transaction count
export const TransactionCountCodec = createCodec<TransactionCountResponse>({
  value: {
    converter: (value: unknown) => {
      const count = ensureNumber(value);
      if (count === undefined) {
        throw new Error('Transaction count is required');
      }
      return count;
    }
  }
});

export function createTransactionCountResponse(data: unknown): TransactionCountResponse {
  // For simple number responses, the data is the number itself
  if (data === null || data === undefined) return 0;
  return ensureNumber(data);
}
