import { createCodec, ensureBoolean, ensureNumber, apiToBigInt, normalizePubkey, decodeAccountData } from '../../codec';

interface AccountInfo {
  readonly lamports: bigint;
  readonly owner: string;
  readonly data: Uint8Array | unknown; // Can be binary data or jsonParsed
  readonly executable: boolean;
  readonly rentEpoch: number;
}

// Context wrapper for RPC response
export interface MultipleAccountsResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: (AccountInfo | null)[];
}

// Codec for individual account info
const AccountInfoCodec = createCodec<AccountInfo>({
  lamports: {
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('lamports is required');
      }
      return bigintValue;
    }
  },
  owner: {
    converter: (value: unknown) => {
      if (typeof value !== 'string') {
        throw new Error('owner must be a string');
      }
      return normalizePubkey(value);
    }
  },
  data: {
    converter: (value: unknown) => {
      return decodeAccountData(value);
    }
  },
  executable: {
    converter: ensureBoolean
  },
  rentEpoch: {
    converter: ensureNumber
  }
});

// Codec for the full response
export const MultipleAccountsResponseCodec = createCodec<MultipleAccountsResponse>({
  context: {
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
    converter: (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new Error('value must be an array');
      }
      return value.map(account => {
        if (account === null) {
          return null;
        }
        return AccountInfoCodec.create(account);
      });
    }
  }
});

/**
 * Creates a MultipleAccountsResponse from raw RPC data
 */
export function createMultipleAccountsResponse(raw: unknown): MultipleAccountsResponse {
  return MultipleAccountsResponseCodec.create(raw);
}
