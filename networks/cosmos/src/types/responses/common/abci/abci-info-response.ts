/**
 * AbciInfoResponse type and creator
 */

/**
 * Common ABCI response types using codec pattern
 */

import { createCodec } from '../../../codec';
import { 
  apiToNumber, 
  maybeBase64ToBytes, 
  base64ToBytes,
  ensureString,
  createArrayConverter
} from '../../../codec/converters';

export interface AbciInfoResponse {
  readonly data?: string;
  readonly lastBlockHeight?: number;
  readonly lastBlockAppHash?: Uint8Array;
}

export const AbciInfoResponseCodec = createCodec<AbciInfoResponse>({
  data: ensureString,
  lastBlockHeight: {
    source: 'last_block_height',
    converter: apiToNumber
  },
  lastBlockAppHash: {
    source: 'last_block_app_hash',
    converter: maybeBase64ToBytes
  }
});

export function createAbciInfoResponse(data: unknown): AbciInfoResponse {
  return AbciInfoResponseCodec.create(data);
}
