/**
 * PeerRoundState type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBoolean } from '../../../codec/converters';

export interface PeerRoundState {
  readonly height: number;
  readonly round: number;
  readonly step: number;
  readonly startTime?: string;
  readonly proposal?: boolean;
  readonly proposalBlockPartSetHeader?: any;
  readonly proposalBlockParts?: any;
  readonly proposalPOLRound?: number;
  readonly proposalPOL?: any;
  readonly prevotes?: any;
  readonly precommits?: any;
  readonly lastCommitRound?: number;
  readonly lastCommit?: any;
  readonly catchupCommitRound?: number;
  readonly catchupCommit?: any;
}

export const PeerRoundStateCodec = createCodec<PeerRoundState>({
  height: ensureNumber,
  round: ensureNumber,
  step: ensureNumber,
  startTime: { source: 'start_time', converter: ensureString },
  proposal: ensureBoolean,
  proposalBlockPartSetHeader: { 
    source: 'proposal_block_part_set_header', 
    converter: (value: unknown) => value 
  },
  proposalBlockParts: { 
    source: 'proposal_block_parts', 
    converter: (value: unknown) => value 
  },
  proposalPOLRound: { 
    source: 'proposal_pol_round', 
    converter: ensureNumber 
  },
  proposalPOL: { 
    source: 'proposal_pol', 
    converter: (value: unknown) => value 
  },
  prevotes: (value: unknown) => value,
  precommits: (value: unknown) => value,
  lastCommitRound: { 
    source: 'last_commit_round', 
    converter: ensureNumber 
  },
  lastCommit: { 
    source: 'last_commit', 
    converter: (value: unknown) => value 
  },
  catchupCommitRound: { 
    source: 'catchup_commit_round', 
    converter: ensureNumber 
  },
  catchupCommit: { 
    source: 'catchup_commit', 
    converter: (value: unknown) => value 
  }
});

export function createPeerRoundState(data: unknown): PeerRoundState {
  return PeerRoundStateCodec.create(data);
}