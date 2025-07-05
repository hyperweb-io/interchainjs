import { createCodec } from '../../codec/base';
import { ensureNumber, ensureBoolean, ensureDate } from '../../codec/converters';

// Response types
export interface PeerConnectionStatus {
  readonly duration: number;
  readonly sendMonitor: {
    readonly active: boolean;
    readonly start: Date;
    readonly duration: number;
    readonly idle: number;
    readonly bytes: number;
    readonly samples: number;
    readonly instRate: number;
    readonly curRate: number;
    readonly avgRate: number;
    readonly peakRate: number;
    readonly bytesRem: number;
    readonly timeRem: number;
    readonly progress: number;
  };
  readonly recvMonitor: {
    readonly active: boolean;
    readonly start: Date;
    readonly duration: number;
    readonly idle: number;
    readonly bytes: number;
    readonly samples: number;
    readonly instRate: number;
    readonly curRate: number;
    readonly avgRate: number;
    readonly peakRate: number;
    readonly bytesRem: number;
    readonly timeRem: number;
    readonly progress: number;
  };
  readonly channels: Array<{
    readonly id: number;
    readonly sendQueueCapacity: number;
    readonly sendQueueSize: number;
    readonly priority: number;
    readonly recentlySent: number;
  }>;
}

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

export interface NetInfoResponse {
  readonly listening: boolean;
  readonly listeners: readonly string[];
  readonly nPeers: number;
  readonly peers: readonly Peer[];
}

// Codecs
const MonitorCodec = {
  active: { source: 'active', converter: ensureBoolean },
  start: { source: 'start', converter: ensureDate },
  duration: { source: 'duration', converter: ensureNumber },
  idle: { source: 'idle', converter: ensureNumber },
  bytes: { source: 'bytes', converter: ensureNumber },
  samples: { source: 'samples', converter: ensureNumber },
  instRate: { source: 'inst_rate', converter: ensureNumber },
  curRate: { source: 'cur_rate', converter: ensureNumber },
  avgRate: { source: 'avg_rate', converter: ensureNumber },
  peakRate: { source: 'peak_rate', converter: ensureNumber },
  bytesRem: { source: 'bytes_rem', converter: ensureNumber },
  timeRem: { source: 'time_rem', converter: ensureNumber },
  progress: { source: 'progress', converter: ensureNumber }
};

const PeerConnectionStatusCodec = createCodec<PeerConnectionStatus>({
  duration: { source: 'duration', converter: ensureNumber },
  sendMonitor: { 
    source: 'send_monitor',
    converter: (value: any) => createCodec(MonitorCodec).create(value || {})
  },
  recvMonitor: { 
    source: 'recv_monitor',
    converter: (value: any) => createCodec(MonitorCodec).create(value || {})
  },
  channels: { 
    source: 'channels',
    converter: (value: any) => (value || []).map((ch: any) => ({
      id: ensureNumber(ch.id),
      sendQueueCapacity: ensureNumber(ch.send_queue_capacity || 0),
      sendQueueSize: ensureNumber(ch.send_queue_size || 0),
      priority: ensureNumber(ch.priority || 0),
      recentlySent: ensureNumber(ch.recently_sent || 0)
    }))
  }
});

const PeerCodec = createCodec<Peer>({
  nodeInfo: { source: 'node_info' },
  isOutbound: { source: 'is_outbound', converter: ensureBoolean },
  connectionStatus: { 
    source: 'connection_status',
    converter: (value: any) => PeerConnectionStatusCodec.create(value)
  },
  remoteIp: { source: 'remote_ip', converter: (value: any) => value || '' }
});

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