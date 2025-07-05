/**
 * ValidatorPubkey type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt, ensureBoolean, ensureBytes, ensureDate, base64ToBytes } from '../../../codec/converters';

export interface ValidatorPubkey {
  readonly type: string;
  readonly value: Uint8Array;
}
