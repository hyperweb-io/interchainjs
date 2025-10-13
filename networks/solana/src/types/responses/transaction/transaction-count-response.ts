/**
 * TransactionCount response types and codec
 */

import { createCodec, apiToBigInt } from '../../codec';

// Simple number response for transaction count
export type TransactionCountResponse = bigint;

// Codec for transaction count
export const TransactionCountCodec = createCodec<TransactionCountResponse>({
  value: {
    converter: (value: unknown) => {
      const count = apiToBigInt(value);
      if (count === undefined) {
        throw new Error('Transaction count is required');
      }
      return count;
    }
  }
});

export function createTransactionCountResponse(data: unknown): TransactionCountResponse {
  // For simple number responses, the data is the number itself
  if (data === null || data === undefined) return 0n;
  return apiToBigInt(data);
}
