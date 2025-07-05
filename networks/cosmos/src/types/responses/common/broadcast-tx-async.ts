import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

// Types
export interface BroadcastTxAsyncResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly hash: Uint8Array;
}

// Codecs
export const BroadcastTxAsyncResponseCodec = createCodec<BroadcastTxAsyncResponse>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data' },
  log: { source: 'log' },
  hash: { source: 'hash' }
});

// Factory functions
export function createBroadcastTxAsyncResponse(data: any): BroadcastTxAsyncResponse {
  return BroadcastTxAsyncResponseCodec.create(data);
}