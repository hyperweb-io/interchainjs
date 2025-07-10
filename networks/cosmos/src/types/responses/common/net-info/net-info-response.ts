/**
 * NetInfoResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean, ensureDate } from '../../../codec/converters';

// Import dependencies from same module
import { Peer, PeerCodec } from './peer';

export interface NetInfoResponse {
  readonly listening: boolean;
  readonly listeners: readonly string[];
  readonly nPeers: number;
  readonly peers: readonly Peer[];
}

export const NetInfoResponseCodec = createCodec<NetInfoResponse>({
  listening: { source: 'listening', converter: ensureBoolean },
  listeners: { source: 'listeners', converter: (value: unknown) => {
    const arr = value as string[] | undefined;
    return arr || [];
  }},
  nPeers: { source: 'n_peers', converter: ensureNumber },
  peers: { 
    source: 'peers',
    converter: (value: unknown) => {
      const arr = value as unknown[] | undefined;
      return (arr || []).map((peer: unknown) => PeerCodec.create(peer));
    }
  }
});

// Creator function
export function createNetInfoResponse(data: unknown): NetInfoResponse {
  return NetInfoResponseCodec.create(data);
}
