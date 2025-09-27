/**
 * LatestBlockhash response types and codec
 */

import { createCodec, ensureString, ensureNumber } from '../../codec';

export interface LatestBlockhashResponse {
  readonly blockhash: string;
  readonly lastValidBlockHeight: number;
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
    converter: ensureNumber
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
