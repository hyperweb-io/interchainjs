import { createCodec } from '../../codec/base';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../codec/converters';

// Types
export interface BlockVersion {
  readonly block: number;
  readonly app: number;
}

export interface BlockId {
  readonly hash: Uint8Array;
  readonly parts: {
    readonly total: number;
    readonly hash: Uint8Array;
  };
}

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

export interface HeaderResponse {
  readonly header: BlockHeader;
}

// Codecs
const BlockVersionCodec = createCodec<BlockVersion>({
  block: { source: 'block', converter: ensureNumber },
  app: { source: 'app', converter: ensureNumber }
});

const BlockIdCodec = createCodec<BlockId>({
  hash: { source: 'hash', converter: ensureBytes },
  parts: {
    source: 'parts',
    converter: (value: any) => ({
      total: ensureNumber(value?.total || 0),
      hash: ensureBytes(value?.hash || '')
    })
  }
});

const BlockHeaderCodec = createCodec<BlockHeader>({
  version: { 
    source: 'version',
    converter: (value: any) => BlockVersionCodec.create(value || {})
  },
  chainId: { source: 'chain_id', converter: ensureString },
  height: { source: 'height', converter: ensureNumber },
  time: { source: 'time', converter: ensureDate },
  lastBlockId: { 
    source: 'last_block_id',
    converter: (value: any) => value ? BlockIdCodec.create(value) : null
  },
  lastCommitHash: { source: 'last_commit_hash', converter: ensureBytes },
  dataHash: { source: 'data_hash', converter: ensureBytes },
  validatorsHash: { source: 'validators_hash', converter: ensureBytes },
  nextValidatorsHash: { source: 'next_validators_hash', converter: ensureBytes },
  consensusHash: { source: 'consensus_hash', converter: ensureBytes },
  appHash: { source: 'app_hash', converter: ensureBytes },
  lastResultsHash: { source: 'last_results_hash', converter: ensureBytes },
  evidenceHash: { source: 'evidence_hash', converter: ensureBytes },
  proposerAddress: { source: 'proposer_address', converter: ensureBytes }
});

export const HeaderResponseCodec = createCodec<HeaderResponse>({
  header: { 
    source: 'header',
    converter: (value: any) => BlockHeaderCodec.create(value || {})
  }
});

// Factory functions
export function createBlockId(data: any): BlockId {
  return BlockIdCodec.create(data);
}

export function createBlockHeader(data: any): BlockHeader {
  return BlockHeaderCodec.create(data);
}

export function createHeaderResponse(data: any): HeaderResponse {
  return HeaderResponseCodec.create(data);
}

// Export codecs for advanced usage
export { BlockVersionCodec, BlockIdCodec, BlockHeaderCodec };