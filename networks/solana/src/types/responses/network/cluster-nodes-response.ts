/**
 * Response type for getClusterNodes RPC method
 */

import { createCodec, ensureNumber } from '../../codec';

export interface ClusterNodeInfo {
  pubkey: string;
  gossip?: string;
  tpu?: string;
  tpuQuic?: string;
  rpc?: string;
  pubsub?: string;
  shredVersion?: number;
  featureSet?: number;
  softwareVersion?: string;
}

export type ClusterNodesResponse = ClusterNodeInfo[];

const ClusterNodeInfoCodec = createCodec<ClusterNodeInfo>({
  pubkey: { required: true, converter: (v: unknown) => {
    if (typeof v !== 'string') throw new Error('pubkey must be string');
    return v;
  } },
  gossip: { converter: (v: unknown) => (typeof v === 'string' ? v : undefined) },
  tpu: { converter: (v: unknown) => (typeof v === 'string' ? v : undefined) },
  tpuQuic: { source: 'tpu-quic', converter: (v: unknown) => (typeof v === 'string' ? v : undefined) },
  rpc: { converter: (v: unknown) => (typeof v === 'string' ? v : undefined) },
  pubsub: { converter: (v: unknown) => (typeof v === 'string' ? v : undefined) },
  shredVersion: { source: 'shredVersion', converter: (v: unknown) => (v === undefined ? undefined : ensureNumber(v)) },
  featureSet: { source: 'feature-set', converter: (v: unknown) => (v === undefined ? undefined : ensureNumber(v)) },
  softwareVersion: { source: 'software-version', converter: (v: unknown) => (typeof v === 'string' ? v : undefined) }
});

export function createClusterNodesResponse(data: unknown): ClusterNodesResponse {
  if (!Array.isArray(data)) {
    throw new Error('Invalid cluster nodes response');
  }
  return data.map((n) => ClusterNodeInfoCodec.create(n));
}

