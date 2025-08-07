/**
 * Evidence type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';

// Import nested types
import { DuplicateVoteEvidence, DuplicateVoteEvidenceCodec } from './duplicate-vote-evidence';
import { LightClientAttackEvidence, LightClientAttackEvidenceCodec } from './light-client-attack-evidence';

export interface Evidence {
  readonly type: string;
  readonly duplicateVoteEvidence?: DuplicateVoteEvidence;
  readonly lightClientAttackEvidence?: LightClientAttackEvidence;
}

export const EvidenceCodec = createCodec<Evidence>({
  type: ensureString,
  duplicateVoteEvidence: {
    source: 'duplicate_vote_evidence',
    converter: (value: unknown) => value ? DuplicateVoteEvidenceCodec.create(value) : undefined
  },
  lightClientAttackEvidence: {
    source: 'light_client_attack_evidence',
    converter: (value: unknown) => value ? LightClientAttackEvidenceCodec.create(value) : undefined
  }
});

export function createEvidence(data: unknown): Evidence {
  return EvidenceCodec.create(data);
}