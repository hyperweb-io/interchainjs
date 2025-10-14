/**
 * LatestBlockhash response types and codec
 */

import { createCodec, ensureString, apiToBigInt, ensureNumber } from '../../codec';

export interface LatestBlockhashResponse {
  readonly blockhash: string;
  readonly lastValidBlockHeight: bigint;
}

// Context wrapper for RPC response
export interface LatestBlockhashRpcResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: LatestBlockhashResponse;
}

// Codec for latest blockhash
export const LatestBlockhashCodec = createCodec<LatestBlockhashResponse>({
  blockhash: {
    converter: ensureString
  },
  lastValidBlockHeight: {
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('lastValidBlockHeight is required');
      }
      return bigintValue;
    }
  }
});

// Codec for RPC response wrapper
export const LatestBlockhashRpcResponseCodec = createCodec<LatestBlockhashRpcResponse>({
  context: {
    converter: (value: unknown) => {
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx?.slot)
      };
    }
  },
  value: {
    converter: (value: unknown) => LatestBlockhashCodec.create(value)
  }
});

export function createLatestBlockhashResponse(data: unknown): LatestBlockhashRpcResponse {
  return LatestBlockhashRpcResponseCodec.create(data);
}
