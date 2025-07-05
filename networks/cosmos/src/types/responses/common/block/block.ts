/**
 * Block type and creator
 */

import { createCodec } from '../../../codec';
import { ensureBytes, ensureNumber, createArrayConverter } from '../../../codec/converters';
import { BlockHeader, BlockHeaderCodec } from '../header/block-header';
import { Commit, CommitCodec } from '../commit/commit';

// Response types
export interface Block {
  readonly header: BlockHeader;
  readonly data: {
    readonly txs: readonly Uint8Array[];
  };
  readonly evidence: {
    readonly evidence: readonly any[];
  };
  readonly lastCommit: Commit | null;
}

// BlockData codec
export const BlockDataCodec = createCodec<{ readonly txs: readonly Uint8Array[] }>({
  txs: {
    source: 'txs',
    converter: createArrayConverter(ensureBytes)
  }
});

// BlockEvidence codec
export const BlockEvidenceCodec = createCodec<{ readonly evidence: readonly unknown[] }>({
  evidence: {
    source: 'evidence',
    converter: createArrayConverter((v: any) => v)
  }
});

export const BlockCodec = createCodec<Block>({
  header: {
    source: 'header',
    converter: (value: any) => BlockHeaderCodec.create(value)
  },
  data: {
    source: 'data',
    converter: (value: any) => BlockDataCodec.create(value || { txs: [] })
  },
  evidence: {
    source: 'evidence',
    converter: (value: any) => BlockEvidenceCodec.create(value || { evidence: [] })
  },
  lastCommit: {
    source: 'last_commit',
    converter: (value: any) => value ? CommitCodec.create(value) : null
  }
});

// Factory functions
export function createBlock(data: any): Block {
  return BlockCodec.create(data);
}
