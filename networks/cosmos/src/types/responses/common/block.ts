import { createCodec } from '../../codec/base';
import { ensureBytes, ensureNumber, createArrayConverter } from '../../codec/converters';
import { BlockHeader, BlockId, BlockHeaderCodec, BlockIdCodec, createBlockHeader, createBlockId } from './header';
import { Commit, CommitCodec, createCommit } from './commit';

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

export interface BlockResponse {
  readonly blockId: BlockId;
  readonly block: Block;
}

// Codecs
const BlockDataCodec = createCodec<Block['data']>({
  txs: {
    source: 'txs',
    converter: (value: any) => (value || []).map((tx: any) => ensureBytes(tx))
  }
});

const BlockEvidenceCodec = createCodec<Block['evidence']>({
  evidence: {
    source: 'evidence',
    converter: (value: any) => value || []
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

export const BlockResponseCodec = createCodec<BlockResponse>({
  blockId: {
    source: 'block_id',
    converter: (value: any) => BlockIdCodec.create(value)
  },
  block: {
    source: 'block',
    converter: (value: any) => BlockCodec.create(value)
  }
});

// Factory functions
export function createBlock(data: any): Block {
  return BlockCodec.create(data);
}

export function createBlockResponse(data: any): BlockResponse {
  return BlockResponseCodec.create(data);
}