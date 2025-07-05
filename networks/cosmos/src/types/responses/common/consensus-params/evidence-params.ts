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
