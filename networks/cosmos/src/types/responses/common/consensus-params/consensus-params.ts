/**
 * ConsensusParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { BlockParams, createBlockParams } from './block-params';
import { EvidenceParams, createEvidenceParams } from './evidence-params';
import { ValidatorParams, createValidatorParams } from './validator-params';
import { VersionParams, createVersionParams } from './version-params';

export interface ConsensusParams {
  readonly block?: BlockParams;
  readonly evidence?: EvidenceParams;
  readonly validator?: ValidatorParams;
  readonly version?: VersionParams;
}

export const ConsensusParamsCodec = createCodec<ConsensusParams>({
  block: { source: 'block', converter: createBlockParams },
  evidence: { source: 'evidence', converter: createEvidenceParams },
  validator: { source: 'validator', converter: createValidatorParams },
  version: { source: 'version', converter: createVersionParams }
});

export function createConsensusParams(data: unknown): ConsensusParams {
  return ConsensusParamsCodec.create(data);
}
