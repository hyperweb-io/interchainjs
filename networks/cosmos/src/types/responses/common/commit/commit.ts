/**
 * Commit type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';
// TODO: Replace with proper types when dependencies are available
type fromBase64 = any;
type fromHex = any;

// Import dependencies from same module
import { CommitSignature, CommitSignatureCodec } from './commit-signature';
import { BlockId } from '../header/block-id';
import { BlockIdCodec } from '../header/block-id';

export interface Commit {
  readonly height: number;
  readonly round: number;
  readonly blockId: BlockId;
  readonly signatures: readonly CommitSignature[];
}

export const CommitCodec = createCodec<Commit>({
  height: { source: 'height', converter: ensureNumber },
  round: { source: 'round', converter: (v: any) => v || 0 },
  blockId: { source: 'block_id', converter: (v: any) => BlockIdCodec.create(v) },
  signatures: { source: 'signatures', converter: (v: any) => (v || []).map((sig: any) => CommitSignatureCodec.create(sig)) }
});

export function createCommit(data: any): Commit {
  return CommitCodec.create(data);
}
