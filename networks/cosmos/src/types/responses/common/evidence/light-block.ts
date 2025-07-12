/**
 * LightBlock type and creator
 */

import { createCodec } from '../../../codec';

// Import nested types
import { SignedHeader, SignedHeaderCodec } from './signed-header';
import { ValidatorSet, ValidatorSetCodec } from './validator-set';

export interface LightBlock {
  readonly signedHeader?: SignedHeader;
  readonly validatorSet?: ValidatorSet;
}

export const LightBlockCodec = createCodec<LightBlock>({
  signedHeader: {
    source: 'signed_header',
    converter: (value: unknown) => value ? SignedHeaderCodec.create(value) : undefined
  },
  validatorSet: {
    source: 'validator_set',
    converter: (value: unknown) => value ? ValidatorSetCodec.create(value) : undefined
  }
});

export function createLightBlock(data: unknown): LightBlock {
  return LightBlockCodec.create(data);
}