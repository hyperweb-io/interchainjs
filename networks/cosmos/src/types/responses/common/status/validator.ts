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
  address: { converter: ensureBytes },
  pubKey: { source: 'pub_key' },
  votingPower: { source: 'voting_power', converter: ensureBigInt },
  proposerPriority: { source: 'proposer_priority', converter: ensureBigInt }
});

export function createValidator(data: unknown): Validator {
  return ValidatorCodec.create(data);
}
