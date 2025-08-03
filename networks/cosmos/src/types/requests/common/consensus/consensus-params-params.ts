/**
 * ConsensusParamsParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedConsensusParamsParams } from './encoded-consensus-params-params';

export interface ConsensusParamsParams {
  readonly height?: number;
}

// Codec for encoding consensus params parameters
export const ConsensusParamsParamsCodec = createCodec<EncodedConsensusParamsParams>({
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

// Creator function that encodes the parameters
export function encodeConsensusParamsParams(params: ConsensusParamsParams): EncodedConsensusParamsParams {
  return ConsensusParamsParamsCodec.create(params);
}