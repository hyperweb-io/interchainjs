import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';

export interface ConsensusStateResponse {
  roundState: RoundState;
}

export interface RoundState {
  height: string;
  round: number;
  step: number;
  startTime: string;
  commitTime: string;
  validators: ValidatorInfo;
  proposal?: Proposal;
  proposalBlock?: ProposalBlock;
  proposalBlockParts?: BlockParts;
  lockedRound: number;
  lockedBlock?: ProposalBlock;
  lockedBlockParts?: BlockParts;
  validRound: number;
  validBlock?: ProposalBlock;
  validBlockParts?: BlockParts;
  votes: VoteSet[];
  commitRound: number;
  lastCommit?: LastCommit;
  lastValidators: ValidatorInfo;
  triggeredTimeoutPrecommit: boolean;
}

export interface ValidatorInfo {
  validators: Validator[];
  proposer: Validator;
}

export interface Validator {
  address: Uint8Array;
  pubKey: {
    type: string;
    value: Uint8Array;
  };
  votingPower: bigint;
  proposerPriority: bigint;
}

export interface Proposal {
  type: string;
  height: string;
  round: number;
  polRound: number;
  blockId: {
    hash: Uint8Array;
    parts: {
      total: number;
      hash: Uint8Array;
    };
  };
  timestamp: string;
  signature: Uint8Array;
}

export interface ProposalBlock {
  header: {
    version: {
      block: bigint;
      app?: bigint;
    };
    chainId: string;
    height: string;
    time: string;
    lastBlockId?: {
      hash: Uint8Array;
      parts: {
        total: number;
        hash: Uint8Array;
      };
    };
    lastCommitHash?: Uint8Array;
    dataHash?: Uint8Array;
    validatorsHash: Uint8Array;
    nextValidatorsHash: Uint8Array;
    consensusHash: Uint8Array;
    appHash: Uint8Array;
    lastResultsHash?: Uint8Array;
    evidenceHash?: Uint8Array;
    proposerAddress: Uint8Array;
  };
  data: {
    txs: Uint8Array[];
  };
  evidence: {
    evidence: any[];
  };
  lastCommit?: {
    height: string;
    round: number;
    blockId: {
      hash: Uint8Array;
      parts: {
        total: number;
        hash: Uint8Array;
      };
    };
    signatures: CommitSig[];
  };
}

export interface BlockParts {
  count: number;
  total: number;
}

export interface VoteSet {
  round: number;
  prevotes: string[];
  prevotesBitArray: string;
  precommits: string[];
  precommitsBitArray: string;
}

export interface LastCommit {
  votes: string[];
  votesBitArray: string;
  peerMajorities: any;
}

export interface CommitSig {
  blockIdFlag: number;
  validatorAddress?: Uint8Array;
  timestamp: string;
  signature?: Uint8Array;
}

// Encoded types
export interface EncodedConsensusStateResponse {
  round_state: any;
}

export const ConsensusStateResponseCodec: BaseCodec<ConsensusStateResponse, EncodedConsensusStateResponse> = createCodec({
  encode: (response: ConsensusStateResponse): EncodedConsensusStateResponse => {
    // For now, just pass through the round_state as-is
    // A full implementation would encode all nested structures
    return {
      round_state: response.roundState as any
    };
  },
  decode: (encoded: EncodedConsensusStateResponse): ConsensusStateResponse => {
    const rs = encoded.round_state;
    
    // Basic decoding - a full implementation would decode all nested structures
    return {
      roundState: {
        height: rs.height || rs['height/round/step']?.split('/')[0] || '0',
        round: parseInt(rs.round || rs['height/round/step']?.split('/')[1] || '0', 10),
        step: parseInt(rs.step || rs['height/round/step']?.split('/')[2] || '0', 10),
        startTime: rs.start_time || '',
        commitTime: rs.commit_time || '',
        validators: rs.validators || { validators: [], proposer: null },
        proposal: rs.proposal,
        proposalBlock: rs.proposal_block,
        proposalBlockParts: rs.proposal_block_parts,
        lockedRound: parseInt(rs.locked_round || '-1', 10),
        lockedBlock: rs.locked_block,
        lockedBlockParts: rs.locked_block_parts,
        validRound: parseInt(rs.valid_round || '-1', 10),
        validBlock: rs.valid_block,
        validBlockParts: rs.valid_block_parts,
        votes: rs.votes || [],
        commitRound: parseInt(rs.commit_round || '-1', 10),
        lastCommit: rs.last_commit,
        lastValidators: rs.last_validators || { validators: [], proposer: null },
        triggeredTimeoutPrecommit: rs.triggered_timeout_precommit || false
      }
    };
  }
});

// Factory function
export const createConsensusStateResponse = createConverter(ConsensusStateResponseCodec);