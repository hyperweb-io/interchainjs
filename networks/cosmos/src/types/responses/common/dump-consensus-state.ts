import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';

export interface DumpConsensusStateResponse {
  roundState: any; // Complex nested structure
  peers: PeerState[];
}

export interface PeerState {
  nodeAddress: string;
  peerState: any; // Complex nested structure
}

// Encoded types
export interface EncodedDumpConsensusStateResponse {
  round_state: any;
  peers: any[];
}

export const DumpConsensusStateResponseCodec: BaseCodec<DumpConsensusStateResponse, EncodedDumpConsensusStateResponse> = createCodec({
  encode: (response: DumpConsensusStateResponse): EncodedDumpConsensusStateResponse => ({
    round_state: response.roundState,
    peers: response.peers.map(peer => ({
      node_address: peer.nodeAddress,
      peer_state: peer.peerState
    }))
  }),
  decode: (encoded: EncodedDumpConsensusStateResponse): DumpConsensusStateResponse => ({
    roundState: encoded.round_state,
    peers: (encoded.peers || []).map(peer => ({
      nodeAddress: peer.node_address || '',
      peerState: peer.peer_state || {}
    }))
  })
});

// Factory function
export const createDumpConsensusStateResponse = createConverter(DumpConsensusStateResponseCodec);