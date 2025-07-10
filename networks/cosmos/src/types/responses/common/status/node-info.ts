/**
 * NodeInfo type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes, ensureString } from '../../../codec/converters';

// Response types
export interface NodeInfo {
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
}

export const NodeInfoCodec = createCodec<NodeInfo>({
  protocol_version: { source: 'protocol_version' },
  id: { source: 'id', converter: ensureString },
  listen_addr: { source: 'listen_addr', converter: ensureString },
  network: { source: 'network', converter: ensureString },
  version: { source: 'version', converter: ensureString },
  channels: { source: 'channels', converter: ensureString },
  moniker: { source: 'moniker', converter: ensureString },
  other: { source: 'other' }
});
