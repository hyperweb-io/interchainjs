/**
 * Token accounts by owner response types and codec
 */

import { createCodec, ensureString, ensureNumber, ensureBoolean, apiToBigInt } from '../../codec';

export interface TokenAccount {
  readonly pubkey: string;
  readonly account: {
    readonly data: unknown;
    readonly executable: boolean;
    readonly lamports: number;
    readonly owner: string;
    readonly rentEpoch: number;
    readonly space: number;
  };
}

export interface TokenAccountsByOwnerResponse {
  readonly context: {
    readonly apiVersion: string;
    readonly slot: number;
  };
  readonly value: TokenAccount[];
}

// Codec for individual token account
export const TokenAccountCodec = createCodec<TokenAccount>({
  pubkey: {
    converter: (value: unknown) => {
      const pubkey = ensureString(value);
      if (!pubkey) {
        throw new Error('pubkey is required');
      }
      return pubkey;
    }
  },
  account: {
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') {
        throw new Error('account is required');
      }
      
      const account = value as Record<string, unknown>;
      
      return {
        data: account.data,
        executable: ensureBoolean(account.executable) ?? false,
        lamports: (() => {
          const lamports = ensureNumber(account.lamports);
          if (lamports === undefined) {
            const bigintLamports = apiToBigInt(account.lamports);
            if (bigintLamports !== undefined) {
              return Number(bigintLamports);
            }
            throw new Error('lamports is required');
          }
          return lamports;
        })(),
        owner: ensureString(account.owner) ?? '',
        rentEpoch: (() => {
          const rentEpoch = ensureNumber(account.rentEpoch);
          if (rentEpoch === undefined) {
            const bigintRentEpoch = apiToBigInt(account.rentEpoch);
            if (bigintRentEpoch !== undefined) {
              return Number(bigintRentEpoch);
            }
            return 0;
          }
          return rentEpoch;
        })(),
        space: ensureNumber(account.space) ?? 0
      };
    }
  }
});

// Codec for the full response
export const TokenAccountsByOwnerResponseCodec = createCodec<TokenAccountsByOwnerResponse>({
  context: {
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') {
        throw new Error('context is required');
      }
      
      const context = value as Record<string, unknown>;
      
      return {
        apiVersion: ensureString(context.apiVersion) ?? '',
        slot: (() => {
          const slot = ensureNumber(context.slot);
          if (slot === undefined) {
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
      
      return value.map(item => TokenAccountCodec.create(item));
    }
  }
});

export function createTokenAccountsByOwnerResponse(data: unknown): TokenAccountsByOwnerResponse {
  return TokenAccountsByOwnerResponseCodec.create(data);
}
