/**
 * ConsensusStateResponse type and creator
 */

import { createCodec } from '../../../codec';
import { createArrayConverter } from '../../../codec/converters';
import { RoundState, createRoundState } from './round-state';
import { PeerState, createPeerState } from './peer-state';

export interface ConsensusStateResponse {
  readonly roundState: RoundState;
  readonly peers?: readonly PeerState[];
}

export const ConsensusStateResponseCodec = createCodec<ConsensusStateResponse>({
  roundState: {
    source: 'round_state',
    converter: (value: unknown) => createRoundState(value)
  },
  peers: {
    converter: (value: unknown) => {
      if (!value || !Array.isArray(value)) return undefined;
      return value.map(v => createPeerState(v));
    }
  }
});

export function createConsensusStateResponse(data: unknown): ConsensusStateResponse {
  return ConsensusStateResponseCodec.create(data);
}

// Type alias for backward compatibility
export type ConsensusState = ConsensusStateResponse;