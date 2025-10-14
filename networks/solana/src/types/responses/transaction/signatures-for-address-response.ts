/**
 * SignaturesForAddress response types and codec
 */

import { createCodec, ensureNumber, ensureString } from '../../codec';

export interface SignatureForAddressInfo {
  readonly signature: string;
  readonly slot: number;
  readonly err: unknown | null;
  readonly memo: string | null;
  readonly blockTime: number | null;
  readonly confirmationStatus?: string;
}

export type SignaturesForAddressResponse = SignatureForAddressInfo[];

export const SignatureForAddressInfoCodec = createCodec<SignatureForAddressInfo>({
  signature: ensureString,
  slot: ensureNumber,
  err: (v: unknown) => v ?? null,
  memo: {
    converter: (v: unknown) => (v === null || v === undefined ? null : ensureString(v))
  },
  blockTime: {
    converter: (v: unknown) => (v === null || v === undefined ? null : ensureNumber(v))
  },
  confirmationStatus: {
    converter: (v: unknown) => (v === null || v === undefined ? undefined : ensureString(v))
  }
});

export function createSignaturesForAddressResponse(data: unknown): SignaturesForAddressResponse {
  if (!Array.isArray(data)) return [];
  return data.map(item => SignatureForAddressInfoCodec.create(item));
}

