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
  latestBlockHash: { source: 'latest_block_hash', converter: base64ToBytes },
  latestAppHash: { source: 'latest_app_hash', converter: base64ToBytes },
  latestBlockHeight: { source: 'latest_block_height', converter: ensureNumber },
  latestBlockTime: { source: 'latest_block_time', converter: ensureDate },
  earliestBlockHash: { source: 'earliest_block_hash', converter: base64ToBytes },
  earliestAppHash: { source: 'earliest_app_hash', converter: base64ToBytes },
  earliestBlockHeight: { source: 'earliest_block_height', converter: ensureNumber },
  earliestBlockTime: { source: 'earliest_block_time', converter: ensureDate },
  catchingUp: { source: 'catching_up', converter: ensureBoolean }
});
