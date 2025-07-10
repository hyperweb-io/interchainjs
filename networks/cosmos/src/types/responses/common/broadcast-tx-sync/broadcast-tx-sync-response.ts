/**
 * BroadcastTxSyncResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Types
export interface BroadcastTxSyncResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly hash: Uint8Array;
}

// Codecs
export const BroadcastTxSyncResponseCodec = createCodec<BroadcastTxSyncResponse>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data' },
  log: { source: 'log' },
  hash: { source: 'hash' }
});

// Factory functions
export function createBroadcastTxSyncResponse(data: any): BroadcastTxSyncResponse {
  return BroadcastTxSyncResponseCodec.create(data);
}
