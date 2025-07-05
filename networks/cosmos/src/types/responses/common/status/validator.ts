/**
 * Validator type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes } from '../../../codec/converters';

// Import dependencies from same module
import { ValidatorPubkey } from './validator-pubkey';


export interface Validator {
  readonly address: Uint8Array;
  readonly pubKey: ValidatorPubkey;
  readonly votingPower: bigint;
  readonly proposerPriority: bigint;
}

export const ValidatorCodec = createCodec<Validator>({
  address: { source: 'address', converter: ensureBytes },
  pub_key: { source: 'pub_key' },
  voting_power: { source: 'voting_power', converter: ensureBigInt },
  proposer_priority: { source: 'proposer_priority', converter: ensureNumber }
});
