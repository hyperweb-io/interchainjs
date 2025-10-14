/**
 * Response types for getLargestAccounts RPC method
 */

import { BaseCodec, createCodec } from '../../codec/base';
import { apiToBigInt, ensureNumber } from '../../codec/converters';

/**
 * Individual account entry in the largest accounts response
 */
export interface LargestAccountEntry {
  /** Base58 encoded public key of the account */
  address: string;
  /** Number of lamports in the account, as a bigint */
  lamports: bigint;
}

/**
 * Response from getLargestAccounts RPC method
 */
export interface LargestAccountsResponse {
  /** Context information */
  context: {
    /** The slot this value is valid for */
    slot: number;
  };
  /** Array of largest accounts */
  value: LargestAccountEntry[];
}

// Codec for individual account entry
const LargestAccountEntryCodec = createCodec<LargestAccountEntry>({
  address: {
    required: true,
    converter: (value: unknown) => {
      if (typeof value !== 'string') {
        throw new Error('address must be a string');
      }
      return value;
    }
  },
  lamports: {
    required: true,
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('lamports is required');
      }
      return bigintValue;
    }
  }
});

// Codec for the full response
export const LargestAccountsResponseCodec = createCodec<LargestAccountsResponse>({
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
      if (!Array.isArray(value)) {
        throw new Error('value must be an array');
      }
      return value.map(entry => LargestAccountEntryCodec.create(entry));
    }
  }
});

/**
 * Create a LargestAccountsResponse from unknown data
 */
export function createLargestAccountsResponse(data: unknown): LargestAccountsResponse {
  return LargestAccountsResponseCodec.create(data);
}
