/**
 * CommitResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';
// TODO: Replace with proper types when dependencies are available
type fromBase64 = any;
type fromHex = any;

// Import dependencies from same module
import { Commit, CommitCodec } from '../commit/commit';
import { BlockHeader } from '../header/block-header';
import { BlockHeaderCodec } from '../header/block-header';

export interface CommitResponse {
  readonly signedHeader: {
    readonly header: BlockHeader;
    readonly commit: Commit;
  };
  readonly canonical: boolean;
}

export const CommitResponseCodec = createCodec<CommitResponse>({
  signedHeader: {
    source: 'signed_header',
    converter: (v: any) => ({
      header: BlockHeaderCodec.create(v?.header),
      commit: CommitCodec.create(v?.commit)
    })
  },
  canonical: { source: 'canonical', converter: (v: any) => v || false }
});

export function createCommitResponse(data: any): CommitResponse {
  return CommitResponseCodec.create(data);
}
