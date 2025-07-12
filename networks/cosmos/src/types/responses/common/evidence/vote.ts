/**
 * Vote type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, ensureString, timestampToDate, base64ToBytes } from '../../../codec/converters';

// Import nested types
import { BlockId, BlockIdCodec } from '../header/block-id';

export interface Vote {
  readonly type: number;
  readonly height: number;
  readonly round: number;
  readonly blockId: BlockId;
  readonly timestamp: Date;
  readonly validatorAddress: Uint8Array;
  readonly validatorIndex: number;
  readonly signature: Uint8Array;
}

export const VoteCodec = createCodec<Vote>({
  type: apiToNumber,
  height: apiToNumber,
  round: apiToNumber,
  blockId: {
    source: 'block_id',
    converter: (value: unknown) => BlockIdCodec.create(value)
  },
  timestamp: timestampToDate,
  validatorAddress: {
    source: 'validator_address',
    converter: base64ToBytes
  },
  validatorIndex: {
    source: 'validator_index',
    converter: apiToNumber
  },
  signature: base64ToBytes
});

export function createVote(data: unknown): Vote {
  return VoteCodec.create(data);
}