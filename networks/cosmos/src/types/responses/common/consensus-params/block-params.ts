/**
 * BlockParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Types
export interface BlockParams {
  readonly maxBytes: number;
  readonly maxGas: number;
  readonly timeIotaMs?: number;
}
