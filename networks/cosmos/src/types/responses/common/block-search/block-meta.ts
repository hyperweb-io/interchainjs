/**
 * BlockMeta type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

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
  block_id: {
    source: 'block_id',
    converter: (value: any) => ({
      hash: value?.hash || '',
      parts: {
        total: ensureNumber(value?.parts?.total),
        hash: value?.parts?.hash || ''
      }
    })
  },
  block_size: { source: 'block_size' },
  header: { source: 'header' },
  num_txs: { source: 'num_txs' }
});

export { BlockMetaCodec };
