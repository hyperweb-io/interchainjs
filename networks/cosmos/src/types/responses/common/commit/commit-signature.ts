/**
 * CommitSignature type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';
import { fromBase64, fromHex } from '@interchainjs/encoding';

// BlockIdFlag enum
export enum BlockIdFlag {
  Unknown = 0,
  Absent = 1,
  Commit = 2,
  Nil = 3
}

export interface CommitSignature {
  readonly blockIdFlag: BlockIdFlag;
  readonly validatorAddress: Uint8Array;
  readonly timestamp: Date;
  readonly signature: Uint8Array;
}

// Codecs
export const CommitSignatureCodec = createCodec<CommitSignature>({
  blockIdFlag: { source: 'block_id_flag', converter: (v: any) => v || 0 },
  validatorAddress: { source: 'validator_address', converter: (v: any) => v ? fromHex(v) : new Uint8Array() },
  timestamp: { source: 'timestamp', converter: ensureDate },
  signature: { source: 'signature', converter: (v: any) => v ? fromBase64(v) : new Uint8Array() }
});

// Creator functions


export function createCommitSignature(data: any): CommitSignature {
  return CommitSignatureCodec.create(data);
}
