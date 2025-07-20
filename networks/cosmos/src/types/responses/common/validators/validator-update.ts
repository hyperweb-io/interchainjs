/**
 * Validator update types for validator set changes
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, apiToBigInt } from '../../../codec/converters';

export interface ValidatorUpdate {
  readonly pubKey: {
    readonly type: string;
    readonly value: Uint8Array;
  };
  readonly power: bigint;
}

export const ValidatorUpdateCodec = createCodec<ValidatorUpdate>({
  pubKey: {
    source: 'pub_key',
    converter: (v: any) => ({
      type: v?.type || '',
      value: typeof v?.value === 'string' ? Buffer.from(v.value, 'base64') : new Uint8Array()
    })
  },
  power: {
    source: 'power',
    converter: apiToBigInt
  }
});

export function createValidatorUpdate(data: unknown): ValidatorUpdate {
  return ValidatorUpdateCodec.create(data);
}