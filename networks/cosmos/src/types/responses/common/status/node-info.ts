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
  protocolVersion: { 
    source: 'protocol_version',
    converter: (value: any) => ({
      p2p: ensureString(value?.p2p),
      block: ensureString(value?.block),
      app: ensureString(value?.app)
    })
  },
  id: ensureString,
  listenAddr: { source: 'listen_addr', converter: ensureString },
  network: ensureString,
  version: ensureString,
  channels: ensureString,
  moniker: ensureString,
  other: { 
    converter: (value: any) => ({
      txIndex: ensureString(value?.tx_index),
      rpcAddress: ensureString(value?.rpc_address)
    })
  }
});
