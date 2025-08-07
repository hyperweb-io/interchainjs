/**
 * ValidatorPubkey type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString, base64ToBytes } from '../../../codec/converters';

export interface ValidatorPubkey {
  readonly type: string;
  readonly value: Uint8Array;
}

export const ValidatorPubkeyCodec = createCodec<ValidatorPubkey>({
  type: ensureString,
  value: base64ToBytes
});

export function createValidatorPubkey(data: unknown): ValidatorPubkey {
  return ValidatorPubkeyCodec.create(data);
}
