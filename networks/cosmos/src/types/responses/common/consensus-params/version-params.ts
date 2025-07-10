/**
 * VersionParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

export interface VersionParams {
  readonly appVersion?: number;
}
