/**
 * ProofOp type and creator
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

// Interfaces
export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

// Codecs
export const ProofOpCodec = createCodec<ProofOp>({
  type: ensureString,
  key: base64ToBytes,
  data: base64ToBytes
});

// Creator functions that use the codecs
export function createProofOp(data: unknown): ProofOp {
  return ProofOpCodec.create(data);
}
