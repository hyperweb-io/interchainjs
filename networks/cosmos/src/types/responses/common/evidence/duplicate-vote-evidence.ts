/**
 * DuplicateVoteEvidence type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, ensureString, timestampToDate } from '../../../codec/converters';

// Import nested types
import { Vote, VoteCodec } from './vote';

export interface DuplicateVoteEvidence {
  readonly voteA?: Vote;
  readonly voteB?: Vote;
  readonly totalVotingPower: number;
  readonly validatorPower: number;
  readonly timestamp: Date;
}

export const DuplicateVoteEvidenceCodec = createCodec<DuplicateVoteEvidence>({
  voteA: {
    source: 'vote_a',
    converter: (value: unknown) => value ? VoteCodec.create(value) : undefined
  },
  voteB: {
    source: 'vote_b',
    converter: (value: unknown) => value ? VoteCodec.create(value) : undefined
  },
  totalVotingPower: {
    source: 'total_voting_power',
    converter: apiToNumber
  },
  validatorPower: {
    source: 'validator_power',
    converter: apiToNumber
  },
  timestamp: timestampToDate
});

export function createDuplicateVoteEvidence(data: unknown): DuplicateVoteEvidence {
  return DuplicateVoteEvidenceCodec.create(data);
}