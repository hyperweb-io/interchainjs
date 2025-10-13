/**
 * AccountInfo response types and codec
 */

import { createCodec, ensureBoolean, ensureNumber, apiToBigInt, normalizePubkey, decodeAccountData } from '../../codec';

export interface AccountInfoResponse {
  readonly lamports: bigint;
  readonly owner: string;
  readonly data: Uint8Array | unknown; // Can be binary data or jsonParsed
  readonly executable: boolean;
  readonly rentEpoch: bigint;
}

// Context wrapper for RPC response
export interface AccountInfoRpcResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: AccountInfoResponse | null;
}

// Codec for account info
export const AccountInfoCodec = createCodec<AccountInfoResponse>({
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
    converter: normalizePubkey
  },
  data: {
    converter: decodeAccountData
  },
  executable: {
    converter: ensureBoolean
  },
  rentEpoch: {
    converter: (value: unknown) => {
      const bigintValue = apiToBigInt(value);
      if (bigintValue === undefined) {
        throw new Error('rentEpoch is required');
      }
      return bigintValue;
    }
  }
});

// Codec for RPC response wrapper
export const AccountInfoRpcResponseCodec = createCodec<AccountInfoRpcResponse>({
  context: {
    converter: (value: unknown) => {
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx?.slot)
      };
    }
  },
  value: {
    converter: (value: unknown) => {
      if (value === null) return null;
      return AccountInfoCodec.create(value);
    }
  }
});

export function createAccountInfoResponse(data: unknown): AccountInfoRpcResponse {
  return AccountInfoRpcResponseCodec.create(data);
}
