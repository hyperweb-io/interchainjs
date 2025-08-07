/**
 * PublicKey type and creator
 */

import { createCodec } from '../../../codec';
import { ensureString, base64ToBytes } from '../../../codec/converters';

export interface PublicKey {
  readonly type: string;
  readonly value: Uint8Array;
}

export const PublicKeyCodec = createCodec<PublicKey>({
  type: ensureString,
  value: base64ToBytes
});

export function createPublicKey(data: unknown): PublicKey {
  return PublicKeyCodec.create(data);
}