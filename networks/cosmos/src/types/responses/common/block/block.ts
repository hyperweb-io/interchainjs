/**
 * Block type and creator
 */

import { createCodec } from '../../../codec';
import { ensureBytes, ensureNumber, createArrayConverter, base64ToBytes } from '../../../codec/converters';
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

// Helper codec for bytes conversion (base64 for txs)
const BytesCodec = {
  create: (data: unknown) => base64ToBytes(data)
};

// Helper codec for any type
const AnyCodec = {
  create: (data: unknown) => data
};

// BlockData codec
export const BlockDataCodec = createCodec<{ readonly txs: readonly Uint8Array[] }>({
  txs: {
    source: 'txs',
    converter: createArrayConverter(BytesCodec)
  }
});

// BlockEvidence codec
export const BlockEvidenceCodec = createCodec<{ readonly evidence: readonly unknown[] }>({
  evidence: {
    source: 'evidence',
    converter: createArrayConverter(AnyCodec)
  }
});

export const BlockCodec = createCodec<Block>({
  header: {
    source: 'header',
    converter: (value: unknown) => BlockHeaderCodec.create(value)
  },
  data: {
    source: 'data',
    converter: (value: unknown) => BlockDataCodec.create(value || { txs: [] })
  },
  evidence: {
    source: 'evidence',
    converter: (value: unknown) => BlockEvidenceCodec.create(value || { evidence: [] })
  },
  lastCommit: {
    source: 'last_commit',
    converter: (value: unknown) => value ? CommitCodec.create(value) : null
  }
});

// Factory functions
export function createBlock(data: unknown): Block {
  return BlockCodec.create(data);
}
