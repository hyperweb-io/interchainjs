/**
 * Peer type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean, ensureDate } from '../../../codec/converters';

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
