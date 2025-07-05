/**
 * ValidatorParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

export interface ValidatorParams {
  readonly pubKeyTypes: readonly string[];
}
