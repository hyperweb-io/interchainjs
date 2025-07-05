import { createCodec } from '../../codec/base';
import { ensureNumber, ensureDate } from '../../codec/converters';
import { fromBase64, fromHex } from '@interchainjs/encoding';
import { BlockId, BlockIdCodec, BlockHeader, BlockHeaderCodec } from './header';

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

export interface CommitResponse {
  readonly signedHeader: {
    readonly header: BlockHeader;
    readonly commit: Commit;
  };
  readonly canonical: boolean;
}

// Codecs
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


export function createCommitSignature(data: any): CommitSignature {
  return CommitSignatureCodec.create(data);
}

export function createCommit(data: any): Commit {
  return CommitCodec.create(data);
}

export function createCommitResponse(data: any): CommitResponse {
  return CommitResponseCodec.create(data);
}