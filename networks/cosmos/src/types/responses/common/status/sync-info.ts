/**
 * SyncInfo type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes } from '../../../codec/converters';

export interface SyncInfo {
  readonly latestBlockHash: Uint8Array;
  readonly latestAppHash: Uint8Array;
  readonly latestBlockHeight: number;
  readonly latestBlockTime: Date;
  readonly earliestBlockHash: Uint8Array;
  readonly earliestAppHash: Uint8Array;
  readonly earliestBlockHeight: number;
  readonly earliestBlockTime: Date;
  readonly catchingUp: boolean;
}

export const SyncInfoCodec = createCodec<SyncInfo>({
  latest_block_hash: { source: 'latest_block_hash', converter: ensureBytes },
  latest_app_hash: { source: 'latest_app_hash', converter: ensureBytes },
  latest_block_height: { source: 'latest_block_height', converter: ensureNumber },
  latest_block_time: { source: 'latest_block_time', converter: ensureDate },
  earliest_block_hash: { source: 'earliest_block_hash', converter: ensureBytes },
  earliest_app_hash: { source: 'earliest_app_hash', converter: ensureBytes },
  earliest_block_height: { source: 'earliest_block_height', converter: ensureNumber },
  earliest_block_time: { source: 'earliest_block_time', converter: ensureDate },
  catching_up: { source: 'catching_up', converter: ensureBoolean }
});
