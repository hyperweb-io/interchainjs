/**
 * FeeForMessage response types and codec
 */

import { createCodec, ensureNumber } from '../../codec';

export interface FeeForMessageResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: number;
}

export const FeeForMessageResponseCodec = createCodec<FeeForMessageResponse>({
  context: {
    converter: (value: unknown) => {
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx?.slot)
      };
    }
  },
  value: ensureNumber
});

export function createFeeForMessageResponse(data: unknown): FeeForMessageResponse {
  return FeeForMessageResponseCodec.create(data);
}

