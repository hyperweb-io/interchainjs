/**
 * Event type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureString, ensureBoolean, createArrayConverter } from '../../../codec/converters';

// Type definitions for Event
export interface EventAttribute {
  key: string;
  value: string;
  index?: boolean;
}

export interface Event {
  type: string;
  attributes: Array<EventAttribute>;
}

const EventAttributeCodec = createCodec<EventAttribute>({
  key: ensureString,
  value: ensureString,
  index: ensureBoolean
});

export const EventCodec = createCodec<Event>({
  type: { source: 'type', converter: ensureString },
  attributes: {
    source: 'attributes',
    converter: createArrayConverter(EventAttributeCodec)
  }
});

export function createEvent(data: unknown): Event {
  return EventCodec.create(data);
}
