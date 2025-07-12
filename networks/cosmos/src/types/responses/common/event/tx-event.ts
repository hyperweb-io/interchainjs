import { createCodec } from '../../../codec';
import { base64ToBytes } from '../../../codec/converters';

export interface TxEvent {
  readonly tx: Uint8Array;
  readonly result: unknown; // TODO: Define proper type for result
}

export const TxEventCodec = createCodec<TxEvent>({
  tx: base64ToBytes,
  result: (v: unknown) => v // Pass through for now
});

export function createTxEvent(data: unknown): TxEvent {
  return TxEventCodec.create(data);
}