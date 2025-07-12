/**
 * Validator type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, ensureString, base64ToBytes } from '../../../codec/converters';

// Import nested types
import { PublicKey, PublicKeyCodec } from './public-key';

export interface Validator {
  readonly address: Uint8Array;
  readonly pubKey: PublicKey;
  readonly votingPower: number;
  readonly proposerPriority: number;
}

export const ValidatorCodec = createCodec<Validator>({
  address: base64ToBytes,
  pubKey: {
    source: 'pub_key',
    converter: (value: unknown) => PublicKeyCodec.create(value)
  },
  votingPower: {
    source: 'voting_power',
    converter: apiToNumber
  },
  proposerPriority: {
    source: 'proposer_priority',
    converter: apiToNumber
  }
});

export function createValidator(data: unknown): Validator {
  return ValidatorCodec.create(data);
}