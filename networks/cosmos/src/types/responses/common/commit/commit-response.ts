/**
 * CommitResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';

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
    converter: (v: unknown) => {
      const value = v as Record<string, unknown> | undefined;
      return {
        header: BlockHeaderCodec.create(value?.header),
        commit: CommitCodec.create(value?.commit)
      };
    }
  },
  canonical: { source: 'canonical', converter: (v: unknown) => !!v }
});

export function createCommitResponse(data: unknown): CommitResponse {
  return CommitResponseCodec.create(data);
}
