/**
 * Token account balance response types and codec
 */

import { createCodec, ensureString, ensureNumber, apiToBigInt } from '../../codec';

export interface TokenAmount {
  readonly amount: string;
  readonly decimals: number;
  readonly uiAmount: number | null;
  readonly uiAmountString: string;
}

export interface TokenAccountBalanceResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: TokenAmount;
}

// Codec for token amount
export const TokenAmountCodec = createCodec<TokenAmount>({
  amount: {
    converter: (value: unknown) => {
      const amount = ensureString(value);
      if (!amount) {
        throw new Error('amount is required');
      }
      return amount;
    }
  },
  decimals: {
    converter: (value: unknown) => {
      const decimals = ensureNumber(value);
      if (decimals === undefined) {
        throw new Error('decimals is required');
      }
      return decimals;
    }
  },
  uiAmount: {
    converter: (value: unknown) => {
      if (value === null || value === undefined) return null;
      const uiAmount = ensureNumber(value);
      return uiAmount ?? null;
    }
  },
  uiAmountString: {
    converter: (value: unknown) => {
      const uiAmountString = ensureString(value);
      if (!uiAmountString) {
        throw new Error('uiAmountString is required');
      }
      return uiAmountString;
    }
  }
});

// Codec for the full response
export const TokenAccountBalanceResponseCodec = createCodec<TokenAccountBalanceResponse>({
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

export function createTokenAccountBalanceResponse(data: unknown): TokenAccountBalanceResponse {
  return TokenAccountBalanceResponseCodec.create(data);
}
