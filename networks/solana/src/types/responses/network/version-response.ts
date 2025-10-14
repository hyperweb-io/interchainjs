/**
 * VersionResponse type for Solana getVersion RPC method
 */

import { createCodec, ensureString, ensureNumber } from '../../codec';

export interface VersionResponse {
  readonly 'solana-core': string;
  readonly 'feature-set'?: number;
}

// Codec for version response
export const VersionResponseCodec = createCodec<VersionResponse>({
  'solana-core': {
    source: 'solana-core',
    converter: ensureString
  },
  'feature-set': {
    source: 'feature-set',
    converter: (value: unknown) => value === undefined ? undefined : ensureNumber(value)
  }
});

// Maintain backward compatibility with existing function signature
export function createVersionResponse(data: unknown): VersionResponse {
  return VersionResponseCodec.create(data);
}
