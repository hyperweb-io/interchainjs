/**
 * ConsensusParamsResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { ConsensusParams, createConsensusParams } from './consensus-params';

export interface ConsensusParamsResponse {
  readonly blockHeight: number;
  readonly consensusParams: ConsensusParams;
}

export const ConsensusParamsResponseCodec = createCodec<ConsensusParamsResponse>({
  blockHeight: { source: 'block_height', converter: ensureNumber },
  consensusParams: { 
    source: 'consensus_params',
    converter: createConsensusParams
  }
});

// Factory functions
export function createConsensusParamsResponse(data: any): ConsensusParamsResponse {
  return ConsensusParamsResponseCodec.create(data);
}
