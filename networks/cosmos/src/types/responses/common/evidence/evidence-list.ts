/**
 * EvidenceList type and creator
 */

import { createCodec } from '../../../codec';
import { createArrayConverter } from '../../../codec/converters';

// Import nested types
import { Evidence, EvidenceCodec } from './evidence';

export interface EvidenceList {
  readonly evidence: readonly Evidence[];
}

export const EvidenceListCodec = createCodec<EvidenceList>({
  evidence: createArrayConverter(EvidenceCodec)
});

export function createEvidenceList(data: unknown): EvidenceList {
  return EvidenceListCodec.create(data);
}