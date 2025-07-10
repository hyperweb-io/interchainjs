/**
 * ValidatorSet type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, createArrayConverter } from '../../../codec/converters';

// Import nested types
import { Validator, ValidatorCodec } from './validator';

export interface ValidatorSet {
  readonly validators: readonly Validator[];
  readonly proposer?: Validator;
  readonly totalVotingPower: number;
}

export const ValidatorSetCodec = createCodec<ValidatorSet>({
  validators: createArrayConverter(ValidatorCodec),
  proposer: {
    converter: (value: unknown) => value ? ValidatorCodec.create(value) : undefined
  },
  totalVotingPower: {
    source: 'total_voting_power',
    converter: apiToNumber
  }
});

export function createValidatorSet(data: unknown): ValidatorSet {
  return ValidatorSetCodec.create(data);
}