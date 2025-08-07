/**
 * ConsensusStateResponse type and creator
 */

import { createCodec } from '../../../codec';
import { RoundState, createRoundState } from './round-state';

export interface ConsensusStateResponse {
  readonly roundState: RoundState;
  readonly peers?: undefined; // Always undefined for regular consensus_state
}

export const ConsensusStateResponseCodec = createCodec<ConsensusStateResponse>({
  roundState: {
    source: 'round_state',
    converter: (value: unknown) => createRoundState(value)
  },
  peers: {
    converter: () => undefined // Always return undefined
  }
});

export function createConsensusStateResponse(data: unknown): ConsensusStateResponse {
  return ConsensusStateResponseCodec.create(data);
}

// Type alias for backward compatibility
export type ConsensusState = ConsensusStateResponse;