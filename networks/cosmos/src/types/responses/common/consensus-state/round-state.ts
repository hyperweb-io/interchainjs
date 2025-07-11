/**
 * RoundState type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, createArrayConverter } from '../../../codec/converters';
import { Proposer, createProposer } from './proposer';
import { HeightVoteSet, createHeightVoteSet } from './height-vote-set';

export interface RoundState {
  readonly height: number;
  readonly round: number;
  readonly step: number;
  readonly startTime: string;
  readonly commitTime?: string;
  readonly validators?: any;
  readonly proposal?: any;
  readonly proposalBlock?: any;
  readonly proposalBlockParts?: any;
  readonly lockedRound?: number;
  readonly lockedBlock?: any;
  readonly lockedBlockParts?: any;
  readonly validRound?: number;
  readonly validBlock?: any;
  readonly validBlockParts?: any;
  readonly votes?: any;
  readonly commitRound?: number;
  readonly lastCommit?: any;
  readonly lastValidators?: any;
  readonly proposer?: Proposer;
  readonly heightVoteSet?: readonly HeightVoteSet[];
  readonly proposalBlockHash?: string;
  readonly lockedBlockHash?: string;
  readonly validBlockHash?: string;
}

export const RoundStateCodec = createCodec<RoundState>({
  height: {
    source: 'height/round/step',
    converter: (value: unknown) => {
      if (typeof value !== 'string') return 0;
      const parts = value.split('/');
      return parseInt(parts[0], 10) || 0;
    }
  },
  round: {
    source: 'height/round/step',
    converter: (value: unknown) => {
      if (typeof value !== 'string') return 0;
      const parts = value.split('/');
      return parseInt(parts[1], 10) || 0;
    }
  },
  step: {
    source: 'height/round/step',
    converter: (value: unknown) => {
      if (typeof value !== 'string') return 0;
      const parts = value.split('/');
      return parseInt(parts[2], 10) || 0;
    }
  },
  startTime: { source: 'start_time', converter: ensureString },
  commitTime: { source: 'commit_time', converter: ensureString },
  validators: (value: unknown) => value,
  proposal: (value: unknown) => value,
  proposalBlock: { source: 'proposal_block', converter: (value: unknown) => value },
  proposalBlockParts: { source: 'proposal_block_parts', converter: (value: unknown) => value },
  lockedRound: { source: 'locked_round', converter: ensureNumber },
  lockedBlock: { source: 'locked_block', converter: (value: unknown) => value },
  lockedBlockParts: { source: 'locked_block_parts', converter: (value: unknown) => value },
  validRound: { source: 'valid_round', converter: ensureNumber },
  validBlock: { source: 'valid_block', converter: (value: unknown) => value },
  validBlockParts: { source: 'valid_block_parts', converter: (value: unknown) => value },
  votes: (value: unknown) => value,
  commitRound: { source: 'commit_round', converter: ensureNumber },
  lastCommit: { source: 'last_commit', converter: (value: unknown) => value },
  lastValidators: { source: 'last_validators', converter: (value: unknown) => value },
  proposer: {
    converter: (value: unknown) => value ? createProposer(value) : undefined
  },
  heightVoteSet: {
    source: 'height_vote_set',
    converter: (value: unknown) => {
      if (!value || !Array.isArray(value)) return undefined;
      return value.map(v => createHeightVoteSet(v));
    }
  },
  proposalBlockHash: { source: 'proposal_block_hash', converter: ensureString },
  lockedBlockHash: { source: 'locked_block_hash', converter: ensureString },
  validBlockHash: { source: 'valid_block_hash', converter: ensureString }
});

export function createRoundState(data: unknown): RoundState {
  return RoundStateCodec.create(data);
}