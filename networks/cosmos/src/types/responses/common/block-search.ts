import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

// Type definitions for BlockMeta
export interface BlockMeta {
  block_id: {
    hash: string;
    parts: {
      total: number;
      hash: string;
    };
  };
  block_size: string;
  header: {
    version: {
      block: string;
      app: string;
    };
    chain_id: string;
    height: string;
    time: string;
    last_block_id: {
      hash: string;
      parts: {
        total: number;
        hash: string;
      };
    };
    last_commit_hash: string;
    data_hash: string;
    validators_hash: string;
    next_validators_hash: string;
    consensus_hash: string;
    app_hash: string;
    last_results_hash: string;
    evidence_hash: string;
    proposer_address: string;
  };
  num_txs: string;
}

const BlockMetaCodec = createCodec<BlockMeta>({
  block_id: { source: 'block_id' },
  block_size: { source: 'block_size' },
  header: { source: 'header' },
  num_txs: { source: 'num_txs' }
});

// Types
export interface BlockSearchResponse {
  readonly blocks: readonly BlockMeta[];
  readonly totalCount: number;
}

// Codecs
export const BlockSearchResponseCodec = createCodec<BlockSearchResponse>({
  blocks: { 
    source: 'blocks',
    converter: (value: any) => (value || []).map((block: any) => BlockMetaCodec.create(block))
  },
  totalCount: { source: 'total_count', converter: ensureNumber }
});

// Factory functions
export function createBlockSearchResponse(data: any): BlockSearchResponse {
  return BlockSearchResponseCodec.create(data);
}