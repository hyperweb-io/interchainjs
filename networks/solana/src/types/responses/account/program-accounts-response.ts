/**
 * Program accounts response types and codec
 */

import { createCodec, ensureString, ensureBoolean, ensureNumber, apiToBigInt, normalizePubkey, decodeAccountData } from '../../codec';

// Extended account info that includes space field (used by getProgramAccounts)
export interface ProgramAccountInfo {
  readonly lamports: bigint;
  readonly owner: string;
  readonly data: Uint8Array | unknown; // Can be binary data or jsonParsed
  readonly executable: boolean;
  readonly rentEpoch: number;
  readonly space: number;
}

// Individual program account entry
export interface ProgramAccount {
  readonly pubkey: string;
  readonly account: ProgramAccountInfo;
}

// Response can be either array or context-wrapped
export interface ProgramAccountsResponse {
  readonly accounts: readonly ProgramAccount[];
}

export interface ProgramAccountsContextResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: readonly ProgramAccount[];
}

// Codec for program account info (extends AccountInfo with space field)
export const ProgramAccountInfoCodec = createCodec<ProgramAccountInfo>({
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
    converter: ensureNumber
  },
  space: {
    converter: (value: unknown) => {
      const space = ensureNumber(value);
      if (space === undefined) {
        throw new Error('space is required');
      }
      return space;
    }
  }
});

// Codec for individual program account
export const ProgramAccountCodec = createCodec<ProgramAccount>({
  pubkey: {
    converter: (value: unknown) => {
      const pubkey = ensureString(value);
      if (!pubkey) {
        throw new Error('pubkey is required');
      }
      return normalizePubkey(pubkey);
    }
  },
  account: {
    converter: (value: unknown) => {
      return ProgramAccountInfoCodec.create(value);
    }
  }
});

// Codec for array response
export const ProgramAccountsResponseCodec = createCodec<ProgramAccountsResponse>({
  accounts: {
    converter: (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new Error('accounts must be an array');
      }
      
      return value.map((item: unknown) => ProgramAccountCodec.create(item));
    }
  }
});

// Codec for context-wrapped response
export const ProgramAccountsContextResponseCodec = createCodec<ProgramAccountsContextResponse>({
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
      
      return value.map((item: unknown) => ProgramAccountCodec.create(item));
    }
  }
});

export function createProgramAccountsResponse(data: unknown, withContext: boolean = false): ProgramAccountsResponse | ProgramAccountsContextResponse {
  if (withContext) {
    return ProgramAccountsContextResponseCodec.create(data);
  } else {
    // For non-context response, data is directly an array
    return ProgramAccountsResponseCodec.create({ accounts: data });
  }
}
