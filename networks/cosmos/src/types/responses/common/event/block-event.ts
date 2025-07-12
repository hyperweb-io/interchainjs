import { createCodec } from '../../../codec';
import { createBlock } from '../block/block';
import { Block } from '../block/block';

export interface BlockEvent {
  readonly block: Block;
}

export const BlockEventCodec = createCodec<BlockEvent>({
  block: (v: unknown) => createBlock(v)
});

export function createBlockEvent(data: unknown): BlockEvent {
  return BlockEventCodec.create(data);
}