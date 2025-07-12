/**
 * QueryProof type and creator
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
import { ProofOp, ProofOpCodec } from './proof-op';

export interface QueryProof {
  readonly ops: readonly ProofOp[];
}

export const QueryProofCodec = createCodec<QueryProof>({
  ops: createArrayConverter(ProofOpCodec)
});

export function createQueryProof(data: unknown): QueryProof {
  return QueryProofCodec.create(data);
}
