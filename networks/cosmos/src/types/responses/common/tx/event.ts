/**
 * Event type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureString } from '../../../codec/converters';

// Type definitions for Event
export interface Event {
  type: string;
  attributes: Array<{
    key: string;
    value: string;
    index?: boolean;
  }>;
}
