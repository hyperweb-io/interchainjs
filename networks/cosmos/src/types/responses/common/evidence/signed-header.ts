/**
 * SignedHeader type and creator
 */

import { createCodec } from '../../../codec';

// Import nested types
import { BlockHeader, BlockHeaderCodec } from '../header/block-header';
import { Commit, CommitCodec } from '../commit/commit';

export interface SignedHeader {
  readonly header?: BlockHeader;
  readonly commit?: Commit;
}

export const SignedHeaderCodec = createCodec<SignedHeader>({
  header: {
    converter: (value: unknown) => value ? BlockHeaderCodec.create(value) : undefined
  },
  commit: {
    converter: (value: unknown) => value ? CommitCodec.create(value) : undefined
  }
});

export function createSignedHeader(data: unknown): SignedHeader {
  return SignedHeaderCodec.create(data);
}