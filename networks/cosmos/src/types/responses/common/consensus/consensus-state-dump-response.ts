/**
 * ConsensusStateDumpResponse type and creator
 * Response type for dump_consensus_state RPC method
 * 
 * This method returns a more detailed consensus state than getConsensusState(),
 * including information about all connected peers and their individual states.
 * Used primarily for debugging consensus issues.
 */

import { createCodec } from '../../../codec';
import { createArrayConverter } from '../../../codec/converters';
import { RoundState, createRoundState } from '../consensus-state/round-state';
import { PeerState, createPeerState } from '../consensus-state/peer-state';

/**
 * Response from dump_consensus_state RPC method
 * Contains the node's current consensus state and information about all connected peers
 */
export interface ConsensusStateDumpResponse {
  /** The current round state of this node */
  readonly roundState: RoundState;
  /** Array of connected peers with their individual consensus states */
  readonly peers: readonly PeerState[];
}

export const ConsensusStateDumpResponseCodec = createCodec<ConsensusStateDumpResponse>({
  roundState: {
    source: 'round_state',
    converter: (value: unknown) => createRoundState(value)
  },
  peers: createArrayConverter({ create: createPeerState })
});

/**
 * Creates a ConsensusStateDumpResponse from raw data
 * @param data - Raw response data from dump_consensus_state RPC method
 * @returns Typed ConsensusStateDumpResponse object
 */
export function createConsensusStateDumpResponse(data: unknown): ConsensusStateDumpResponse {
  return ConsensusStateDumpResponseCodec.create(data);
}