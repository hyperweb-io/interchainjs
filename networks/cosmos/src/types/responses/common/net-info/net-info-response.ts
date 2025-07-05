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
  listeners: { source: 'listeners', converter: (value: any) => value || [] },
  nPeers: { source: 'n_peers', converter: ensureNumber },
  peers: { 
    source: 'peers',
    converter: (value: any) => (value || []).map((peer: any) => PeerCodec.create(peer))
  }
});

// Creator function
export function createNetInfoResponse(data: any): NetInfoResponse {
  return NetInfoResponseCodec.create(data);
}
