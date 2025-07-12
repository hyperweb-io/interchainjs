/**
 * ValidatorInfo type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureBigInt } from '../../../codec/converters';
import { ValidatorPubkey } from '../status/validator-pubkey';

// Types
export interface ValidatorInfo {
  readonly address: Uint8Array;
  readonly pubKey: ValidatorPubkey;
  readonly votingPower: bigint;
  readonly proposerPriority?: number;
}

// Codecs
export const ValidatorInfoCodec = createCodec<ValidatorInfo>({
  address: { source: 'address', converter: ensureBytes },
  pubKey: { source: 'pub_key' },
  votingPower: { source: 'voting_power', converter: ensureBigInt },
  proposerPriority: { source: 'proposer_priority', converter: ensureNumber, required: false }
});
