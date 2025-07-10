/**
 * Commit type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';

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
  round: { source: 'round', converter: (v: unknown) => ensureNumber(v ?? 0) },
  blockId: { source: 'block_id', converter: (v: unknown) => BlockIdCodec.create(v) },
  signatures: { source: 'signatures', converter: (v: unknown) => {
    const arr = v as unknown[] | undefined;
    return (arr || []).map((sig: unknown) => CommitSignatureCodec.create(sig));
  }}
});

export function createCommit(data: unknown): Commit {
  return CommitCodec.create(data);
}
