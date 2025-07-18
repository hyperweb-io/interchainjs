/**
 * HeaderEvent type for WebSocket block header events
 * Represents a new block header event from the blockchain
 */

import { createCodec } from '../../../codec';
import { createBlockHeader } from './block-header';
import { BlockHeader } from './block-header';

/**
 * Event emitted when a new block header is available
 */
export interface HeaderEvent {
  readonly header: BlockHeader;
  readonly height: number;
  readonly time: Date;
}

export const HeaderEventCodec = createCodec<HeaderEvent>({
  header: (v: unknown) => createBlockHeader(v),
  height: (v: unknown) => Number(v),
  time: {
    source: 'time',
    converter: (v: unknown) => new Date(String(v))
  }
});

export function createHeaderEvent(data: unknown): HeaderEvent {
  return HeaderEventCodec.create(data);
}