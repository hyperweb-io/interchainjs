/**
 * PeerState type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';
import { PeerRoundState, createPeerRoundState } from './peer-round-state';

export interface PeerStateData {
  readonly roundState: PeerRoundState;
  readonly stats?: {
    readonly votes: string;
    readonly blockParts: string;
  };
}

export interface PeerState {
  readonly nodeAddress: string;
  readonly peerState?: PeerStateData;
}

const PeerStateDataCodec = createCodec<PeerStateData>({
  roundState: {
    source: 'round_state',
    converter: (value: unknown) => createPeerRoundState(value)
  },
  stats: {
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') return undefined;
      const stats = value as Record<string, unknown>;
      return {
        votes: String(stats.votes || ''),
        blockParts: String(stats.block_parts || '')
      };
    }
  }
});

function createPeerStateData(data: unknown): PeerStateData {
  return PeerStateDataCodec.create(data);
}

export const PeerStateCodec = createCodec<PeerState>({
  nodeAddress: { source: 'node_address', converter: ensureString },
  peerState: {
    source: 'peer_state',
    converter: (value: unknown) => value ? createPeerStateData(value) : undefined
  }
});

export function createPeerState(data: unknown): PeerState {
  return PeerStateCodec.create(data);
}