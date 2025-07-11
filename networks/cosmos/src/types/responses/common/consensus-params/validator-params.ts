/**
 * ValidatorParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

export interface ValidatorParams {
  readonly pubKeyTypes: readonly string[];
}

// Codec
export const ValidatorParamsCodec = createCodec<ValidatorParams>({
  pubKeyTypes: { source: 'pub_key_types' }
});

// Factory function
export function createValidatorParams(data: unknown): ValidatorParams {
  return ValidatorParamsCodec.create(data);
}
