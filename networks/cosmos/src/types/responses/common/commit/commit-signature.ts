/**
 * CommitSignature type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureDate } from '../../../codec/converters';
import { fromHex } from '@interchainjs/encoding';
import { fromBase64 } from '@interchainjs/encoding/base64';

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
  blockIdFlag: { source: 'block_id_flag', converter: (v: unknown) => ensureNumber(v ?? 0) },
  validatorAddress: { source: 'validator_address', converter: (v: unknown) => {
    const str = v as string | undefined;
    return str ? fromHex(str) : new Uint8Array();
  }},
  timestamp: { source: 'timestamp', converter: ensureDate },
  signature: { source: 'signature', converter: (v: unknown) => {
    const str = v as string | undefined;
    return str ? fromBase64(str) : new Uint8Array();
  }}
});

// Creator functions


export function createCommitSignature(data: unknown): CommitSignature {
  return CommitSignatureCodec.create(data);
}
