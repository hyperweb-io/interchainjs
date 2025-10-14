/**
 * Supply response types and codec
 */

import { createCodec, ensureNumber, apiToBigInt } from '../../codec';

export interface SupplyValue {
  readonly total: bigint;
  readonly circulating: bigint;
  readonly nonCirculating: bigint;
  readonly nonCirculatingAccounts: string[];
}

// Context wrapper for RPC response
export interface SupplyResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: SupplyValue;
}

// Codec for the supply value
const SupplyValueCodec = createCodec<SupplyValue>({
  total: {
    required: true,
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('total is required');
      }
      return bigintValue;
    }
  },
  circulating: {
    required: true,
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('circulating is required');
      }
      return bigintValue;
    }
  },
  nonCirculating: {
    required: true,
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('nonCirculating is required');
      }
      return bigintValue;
    }
  },
  nonCirculatingAccounts: {
    required: true,
    converter: (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new Error('nonCirculatingAccounts must be an array');
      }
      return value.map(account => {
        if (typeof account !== 'string') {
          throw new Error('nonCirculatingAccounts items must be strings');
        }
        return account;
      });
    }
  }
});

// Codec for the full response
export const SupplyResponseCodec = createCodec<SupplyResponse>({
  context: {
    required: true,
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') {
        throw new Error('context is required');
      }
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx.slot)
      };
    }
  },
  value: {
    required: true,
    converter: (value: unknown) => {
      return SupplyValueCodec.create(value);
    }
  }
});

/**
 * Creates a SupplyResponse from raw RPC data
 */
export function createSupplyResponse(raw: unknown): SupplyResponse {
  return SupplyResponseCodec.create(raw);
}
