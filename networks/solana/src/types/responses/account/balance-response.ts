/**
 * Balance response types and codec
 */

import { createCodec, ensureNumber, apiToBigInt } from '../../codec';

export interface BalanceResponse {
  readonly value: bigint;
}

// Context wrapper for RPC response
export interface BalanceRpcResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: bigint;
}

// Codec for RPC response wrapper
export const BalanceRpcResponseCodec = createCodec<BalanceRpcResponse>({
  context: {
    converter: (value: unknown) => {
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx?.slot)
      };
    }
  },
  value: {
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('balance value is required');
      }
      return bigintValue;
    }
  }
});

export function createBalanceResponse(data: unknown): BalanceRpcResponse {
  return BalanceRpcResponseCodec.create(data);
}
