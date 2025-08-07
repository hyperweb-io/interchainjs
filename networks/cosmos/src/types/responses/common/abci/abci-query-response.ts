/**
 * AbciQueryResponse type and creator
 */

/**
 * Common ABCI response types using codec pattern
 */

import { createCodec } from '../../../codec';
import { 
  apiToNumber, 
  maybeBase64ToBytes, 
  base64ToBytes,
  ensureString,
  createArrayConverter
} from '../../../codec/converters';

// Import dependencies from same module
import { QueryProof, QueryProofCodec } from './query-proof';

export interface AbciQueryResponse {
  readonly key: Uint8Array;
  readonly value: Uint8Array;
  readonly proof?: QueryProof;
  readonly height: number;
  readonly index: number;
  readonly code: number;
  readonly codespace: string;
  readonly log: string;
  readonly info: string;
}

export const AbciQueryResponseCodec = createCodec<AbciQueryResponse>({
  key: { converter: (value: unknown) => value ? base64ToBytes(value) : new Uint8Array() },
  value: { converter: (value: unknown) => value ? base64ToBytes(value) : new Uint8Array() },
  proof: {
    source: 'proof_ops',
    converter: (value: unknown) => value ? QueryProofCodec.create(value) : undefined
  },
  height: apiToNumber,
  index: apiToNumber,
  code: apiToNumber,
  codespace: { converter: (value: unknown) => ensureString(value || '') },
  log: { converter: (value: unknown) => ensureString(value || '') },
  info: { converter: (value: unknown) => ensureString(value || '') }
});

export function createAbciQueryResponse(data: unknown): AbciQueryResponse {
  return AbciQueryResponseCodec.create(data);
}
