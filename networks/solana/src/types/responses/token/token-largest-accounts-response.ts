/**
 * Token largest accounts response types and codec
 */

import { createCodec, ensureString, ensureNumber, apiToBigInt, normalizePubkey } from '../../codec';
import { TokenAmount, TokenAmountCodec } from './token-account-balance-response';

export interface TokenLargestAccount extends TokenAmount {
  readonly address: string;
}

export interface TokenLargestAccountsResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: readonly TokenLargestAccount[];
}

// Codec for token largest account
export const TokenLargestAccountCodec = createCodec<TokenLargestAccount>({
  address: {
    converter: (value: unknown) => {
      const address = ensureString(value);
      if (!address) {
        throw new Error('address is required');
      }
      return normalizePubkey(address);
    }
  },
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
export const TokenLargestAccountsResponseCodec = createCodec<TokenLargestAccountsResponse>({
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
      if (!Array.isArray(value)) {
        throw new Error('value must be an array');
      }
      
      return value.map((item: unknown) => TokenLargestAccountCodec.create(item));
    }
  }
});

export function createTokenLargestAccountsResponse(data: unknown): TokenLargestAccountsResponse {
  return TokenLargestAccountsResponseCodec.create(data);
}
