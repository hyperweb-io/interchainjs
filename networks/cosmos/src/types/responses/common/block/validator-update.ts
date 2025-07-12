/**
 * ValidatorUpdate type and creator for BlockResults
 */

import { createCodec } from '../../../codec';
import { apiToBigInt, ensureString, base64ToBytes } from '../../../codec/converters';

// Import ValidatorPubkey from status module to avoid duplication
import { ValidatorPubkey, createValidatorPubkey } from '../status/validator-pubkey';

export interface ValidatorUpdate {
  readonly pubKey: ValidatorPubkey;
  readonly power: bigint;
}

export const ValidatorUpdateCodec = createCodec<ValidatorUpdate>({
  pubKey: {
    source: 'pub_key',
    converter: (v) => v ? createValidatorPubkey(v) : undefined
  },
  power: apiToBigInt
});

export function createValidatorUpdate(data: unknown): ValidatorUpdate {
  return ValidatorUpdateCodec.create(data);
}