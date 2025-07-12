/**
 * ValidatorsResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureBigInt } from '../../../codec/converters';

// Import dependencies from same module
import { ValidatorInfo, ValidatorInfoCodec } from './validator-info';

export interface ValidatorsResponse {
  readonly blockHeight: number;
  readonly validators: readonly ValidatorInfo[];
  readonly count: number;
  readonly total: number;
}

export const ValidatorsResponseCodec = createCodec<ValidatorsResponse>({
  blockHeight: { source: 'block_height', converter: ensureNumber },
  validators: { 
    source: 'validators',
    converter: (value: any) => (value || []).map((v: any) => ValidatorInfoCodec.create(v))
  },
  count: { source: 'count', converter: ensureNumber },
  total: { source: 'total', converter: ensureNumber }
});

// Factory functions
export function createValidatorsResponse(data: any): ValidatorsResponse {
  return ValidatorsResponseCodec.create(data);
}
