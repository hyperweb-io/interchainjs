/**
 * PeerState type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';
import { PeerRoundState, createPeerRoundState } from './peer-round-state';

export interface PeerState {
  readonly nodeAddress: string;
  readonly peerRoundState?: PeerRoundState;
}

export const PeerStateCodec = createCodec<PeerState>({
  nodeAddress: { source: 'node_address', converter: ensureString },
  peerRoundState: {
    source: 'peer_round_state',
    converter: (value: unknown) => value ? createPeerRoundState(value) : undefined
  }
});

export function createPeerState(data: unknown): PeerState {
  return PeerStateCodec.create(data);
}