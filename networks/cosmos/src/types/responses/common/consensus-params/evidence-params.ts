/**
 * EvidenceParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

export interface EvidenceParams {
  readonly maxAgeNumBlocks: number;
  readonly maxAgeDuration: number;
  readonly maxBytes?: number;
}

// Codec
export const EvidenceParamsCodec = createCodec<EvidenceParams>({
  maxAgeNumBlocks: { source: 'max_age_num_blocks', converter: ensureNumber },
  maxAgeDuration: { source: 'max_age_duration', converter: ensureNumber },
  maxBytes: { source: 'max_bytes', converter: ensureNumber }
});

// Factory function
export function createEvidenceParams(data: unknown): EvidenceParams {
  return EvidenceParamsCodec.create(data);
}
