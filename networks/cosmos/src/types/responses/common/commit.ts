import { createCodec } from '../../codec/base';
import { ensureNumber, ensureDate } from '../../codec/converters';
import { fromBase64, fromHex } from '@interchainjs/encoding';

// Response types
export interface BlockId {
  readonly hash: Uint8Array;
  readonly parts: {
    readonly total: number;
    readonly hash: Uint8Array;
  };
}

export interface CommitSignature {
  readonly blockIdFlag: BlockIdFlag;
  readonly validatorAddress: Uint8Array;
  readonly timestamp: Date;
  readonly signature: Uint8Array;
}

export enum BlockIdFlag {
  Unknown = 0,
  Absent = 1,
  Commit = 2,
  Nil = 3,
}

export interface Commit {
  readonly height: number;
  readonly round: number;
  readonly blockId: BlockId;
  readonly signatures: readonly CommitSignature[];
}

export interface BlockHeader {
  readonly version: {
    readonly block: number;
    readonly app: number;
  };
  readonly chainId: string;
  readonly height: number;
  readonly time: Date;
  readonly lastBlockId: BlockId;
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

export interface CommitResponse {
  readonly signedHeader: {
    readonly header: BlockHeader;
    readonly commit: Commit;
  };
  readonly canonical: boolean;
}

// Codecs
export const BlockIdCodec = createCodec<BlockId>({
  hash: { source: 'hash', converter: (v: any) => fromHex(v) },
  parts: {
    source: 'parts',
    converter: (v: any) => ({
      total: ensureNumber(v?.total || 0),
      hash: fromHex(v?.hash || '')
    })
  }
});

export const CommitSignatureCodec = createCodec<CommitSignature>({
  blockIdFlag: { source: 'block_id_flag', converter: (v: any) => v || 0 },
  validatorAddress: { source: 'validator_address', converter: (v: any) => v ? fromHex(v) : new Uint8Array() },
  timestamp: { source: 'timestamp', converter: ensureDate },
  signature: { source: 'signature', converter: (v: any) => v ? fromBase64(v) : new Uint8Array() }
});

export const CommitCodec = createCodec<Commit>({
  height: { source: 'height', converter: ensureNumber },
  round: { source: 'round', converter: (v: any) => v || 0 },
  blockId: { source: 'block_id', converter: (v: any) => BlockIdCodec.create(v) },
  signatures: { source: 'signatures', converter: (v: any) => (v || []).map((sig: any) => CommitSignatureCodec.create(sig)) }
});

export const BlockHeaderCodec = createCodec<BlockHeader>({
  version: {
    source: 'version',
    converter: (v: any) => ({
      block: ensureNumber(v?.block || 0),
      app: ensureNumber(v?.app || 0)
    })
  },
  chainId: { source: 'chain_id' },
  height: { source: 'height', converter: ensureNumber },
  time: { source: 'time', converter: ensureDate },
  lastBlockId: { source: 'last_block_id', converter: (v: any) => BlockIdCodec.create(v) },
  lastCommitHash: { source: 'last_commit_hash', converter: (v: any) => fromHex(v) },
  dataHash: { source: 'data_hash', converter: (v: any) => fromHex(v) },
  validatorsHash: { source: 'validators_hash', converter: (v: any) => fromHex(v) },
  nextValidatorsHash: { source: 'next_validators_hash', converter: (v: any) => fromHex(v) },
  consensusHash: { source: 'consensus_hash', converter: (v: any) => fromHex(v) },
  appHash: { source: 'app_hash', converter: (v: any) => fromHex(v) },
  lastResultsHash: { source: 'last_results_hash', converter: (v: any) => fromHex(v) },
  evidenceHash: { source: 'evidence_hash', converter: (v: any) => fromHex(v) },
  proposerAddress: { source: 'proposer_address', converter: (v: any) => fromHex(v) }
});

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

// Creator functions
export function createBlockId(data: any): BlockId {
  return BlockIdCodec.create(data);
}

export function createCommitSignature(data: any): CommitSignature {
  return CommitSignatureCodec.create(data);
}

export function createCommit(data: any): Commit {
  return CommitCodec.create(data);
}

export function createBlockHeader(data: any): BlockHeader {
  return BlockHeaderCodec.create(data);
}

export function createCommitResponse(data: any): CommitResponse {
  return CommitResponseCodec.create(data);
}