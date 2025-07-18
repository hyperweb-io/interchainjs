/**
 * NewBlockEvent type for WebSocket block events
 * Represents a new block event from the blockchain
 */

import { createCodec } from '../../../codec';
import { createBlock } from './block';
import { createBlockResultsResponse } from './block-results-response';
import { Block } from './block';
import { BlockResultsResponse } from './block-results-response';

/**
 * Event emitted when a new block is committed to the blockchain
 */
export interface NewBlockEvent {
  readonly block: Block;
  readonly resultBeginBlock: {
    readonly events: readonly any[];
  };
  readonly resultEndBlock: {
    readonly events: readonly any[];
    readonly validatorUpdates: readonly any[];
    readonly consensusParamUpdates?: any;
  };
  readonly blockId: {
    readonly hash: Uint8Array;
    readonly parts: {
      readonly total: number;
      readonly hash: Uint8Array;
    };
  };
}

export const NewBlockEventCodec = createCodec<NewBlockEvent>({
  block: (v: unknown) => createBlock(v),
  resultBeginBlock: {
    source: 'result_begin_block',
    converter: (v: unknown) => v as { events: readonly any[] }
  },
  resultEndBlock: {
    source: 'result_end_block',
    converter: (v: unknown) => v as { 
      events: readonly any[]; 
      validatorUpdates: readonly any[]; 
      consensusParamUpdates?: any 
    }
  },
  blockId: {
    source: 'block_id',
    converter: (v: unknown) => v as NewBlockEvent['blockId']
  }
});

export function createNewBlockEvent(data: unknown): NewBlockEvent {
  return NewBlockEventCodec.create(data);
}