/**
 * SignatureStatuses response types and codec
 */

import { createCodec, ensureNumber, ensureString, ensureBoolean } from '../../codec';

export interface SignatureStatus {
  readonly slot: number;
  readonly confirmations: number | null;
  readonly err: unknown | null;
  readonly status: unknown;
  readonly confirmationStatus: string | null;
}

export interface SignatureStatusesResponse {
  readonly context: {
    readonly slot: number;
  };
  readonly value: (SignatureStatus | null)[];
}

// Codec for individual signature status
export const SignatureStatusCodec = createCodec<SignatureStatus>({
  slot: {
    converter: (value: unknown) => {
      const slot = ensureNumber(value);
      if (slot === undefined) {
        throw new Error('slot is required');
      }
      return slot;
    }
  },
  confirmations: {
    converter: (value: unknown) => {
      if (value === null || value === undefined) return null;
      return ensureNumber(value) ?? null;
    }
  },
  err: {
    converter: (value: unknown) => value
  },
  status: {
    converter: (value: unknown) => value
  },
  confirmationStatus: {
    converter: (value: unknown) => {
      if (value === null || value === undefined) return null;
      return ensureString(value) ?? null;
    }
  }
});

// Codec for signature statuses response
export const SignatureStatusesResponseCodec = createCodec<SignatureStatusesResponse>({
  context: {
    converter: (value: unknown) => {
      const ctx = value as any;
      return {
        slot: ensureNumber(ctx?.slot) ?? 0
      };
    }
  },
  value: {
    converter: (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new Error('value must be an array');
      }
      return value.map(item => {
        if (item === null) return null;
        return SignatureStatusCodec.create(item);
      });
    }
  }
});

export function createSignatureStatusesResponse(data: unknown): SignatureStatusesResponse {
  return SignatureStatusesResponseCodec.create(data);
}
