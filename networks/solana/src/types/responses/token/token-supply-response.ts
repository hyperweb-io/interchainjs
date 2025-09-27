/**
 * Token supply response types and codec
 */

import { createCodec, ensureNumber, apiToBigInt } from '../../codec';
import { TokenAmount, TokenAmountCodec } from './token-account-balance-response';

export interface TokenSupplyResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: TokenAmount;
}

// Codec for the full response
export const TokenSupplyResponseCodec = createCodec<TokenSupplyResponse>({
  context: {
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') {
        throw new Error('context is required');
      }
      
      const context = value as Record<string, unknown>;
      
      return {
        slot: (() => {
          const slot = ensureNumber(context.slot);
          if (slot === undefined) {
            const bigintSlot = apiToBigInt(context.slot);
            if (bigintSlot !== undefined) {
              return Number(bigintSlot);
            }
            throw new Error('slot is required');
          }
          return slot;
        })()
      };
    }
  },
  value: {
    converter: (value: unknown) => {
      return TokenAmountCodec.create(value);
    }
  }
});

export function createTokenSupplyResponse(data: unknown): TokenSupplyResponse {
  return TokenSupplyResponseCodec.create(data);
}
