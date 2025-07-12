/**
 * LightClientAttackEvidence type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, timestampToDate, createArrayConverter } from '../../../codec/converters';

// Import nested types
import { LightBlock, LightBlockCodec } from './light-block';
import { Validator, ValidatorCodec } from './validator';

export interface LightClientAttackEvidence {
  readonly conflictingBlock?: LightBlock;
  readonly commonHeight: number;
  readonly byzantineValidators: readonly Validator[];
  readonly totalVotingPower: number;
  readonly timestamp: Date;
}

export const LightClientAttackEvidenceCodec = createCodec<LightClientAttackEvidence>({
  conflictingBlock: {
    source: 'conflicting_block',
    converter: (value: unknown) => value ? LightBlockCodec.create(value) : undefined
  },
  commonHeight: {
    source: 'common_height',
    converter: apiToNumber
  },
  byzantineValidators: {
    source: 'byzantine_validators',
    converter: createArrayConverter(ValidatorCodec)
  },
  totalVotingPower: {
    source: 'total_voting_power',
    converter: apiToNumber
  },
  timestamp: timestampToDate
});

export function createLightClientAttackEvidence(data: unknown): LightClientAttackEvidence {
  return LightClientAttackEvidenceCodec.create(data);
}