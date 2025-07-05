/**
 * Peer type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean, ensureDate, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { PeerConnectionStatus } from './peer-connection-status';

export interface Peer {
  readonly nodeInfo: {
    readonly protocolVersion: {
      readonly p2p: string;
      readonly block: string;
      readonly app: string;
    };
    readonly id: string;
    readonly listenAddr: string;
    readonly network: string;
    readonly version: string;
    readonly channels: string;
    readonly moniker: string;
    readonly other: {
      readonly txIndex: string;
      readonly rpcAddress: string;
    };
  };
  readonly isOutbound: boolean;
  readonly connectionStatus: PeerConnectionStatus;
  readonly remoteIp: string;
}

export const PeerCodec = createCodec<Peer>({
  node_info: { source: 'node_info' },
  is_outbound: { source: 'is_outbound', converter: ensureBoolean },
  connection_status: { source: 'connection_status' },
  remote_ip: { source: 'remote_ip', converter: ensureString }
});
