/**
 * BlockHeader type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

// Import dependencies from same module
import { BlockVersion, BlockVersionCodec } from './block-version';
import { BlockId, BlockIdCodec } from './block-id';

export interface BlockHeader {
  readonly version: BlockVersion;
  readonly chainId: string;
  readonly height: number;
  readonly time: Date;
  readonly lastBlockId: BlockId | null;
  readonly lastCommitHash: Uint8Array;
  readonly dataHash: Uint8Array;
  readonly validatorsHash: Uint8Array;
  readonly nextValidatorsHash: Uint8Array;
  readonly consensusHash: Uint8Array;
  readonly appHash: Uint8Array;
  readonly lastResultsHash: Uint8Array;
  readonly evidenceHash: Uint8Array;
  readonly proposerAddress: Uint8Array;
}

export const BlockHeaderCodec = createCodec<BlockHeader>({
  version: (value: unknown) => BlockVersionCodec.create(value),
  chainId: {
    source: 'chain_id',
    converter: ensureString
  },
  height: ensureNumber,
  time: ensureDate,
  lastBlockId: {
    source: 'last_block_id',
    converter: (value: unknown) => value ? BlockIdCodec.create(value) : null
  },
  lastCommitHash: {
    source: 'last_commit_hash',
    converter: ensureBytes
  },
  dataHash: {
    source: 'data_hash',
    converter: ensureBytes
  },
  validatorsHash: {
    source: 'validators_hash',
    converter: ensureBytes
  },
  nextValidatorsHash: {
    source: 'next_validators_hash',
    converter: ensureBytes
  },
  consensusHash: {
    source: 'consensus_hash',
    converter: ensureBytes
  },
  appHash: {
    source: 'app_hash',
    converter: ensureBytes
  },
  lastResultsHash: {
    source: 'last_results_hash',
    converter: ensureBytes
  },
  evidenceHash: {
    source: 'evidence_hash',
    converter: ensureBytes
  },
  proposerAddress: {
    source: 'proposer_address',
    converter: ensureBytes
  }
});

export function createBlockHeader(data: unknown): BlockHeader {
  return BlockHeaderCodec.create(data);
}
