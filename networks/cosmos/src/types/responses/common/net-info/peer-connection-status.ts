/**
 * PeerConnectionStatus type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean, ensureDate } from '../../../codec/converters';

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
