import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';

export interface Event {
  type: string;
  attributes: EventAttribute[];
}

export interface EventAttribute {
  key: string;
  value: string;
  index?: boolean;
}

export interface EncodedEvent {
  type: string;
  attributes: EncodedEventAttribute[];
}

export interface EncodedEventAttribute {
  key: string;
  value: string;
  index?: boolean;
}

export const EventAttributeCodec: BaseCodec<EventAttribute, EncodedEventAttribute> = createCodec({
  encode: (attr: EventAttribute): EncodedEventAttribute => ({
    key: attr.key,
    value: attr.value,
    index: attr.index
  }),
  decode: (encoded: EncodedEventAttribute): EventAttribute => ({
    key: encoded.key,
    value: encoded.value,
    index: encoded.index
  })
});

export const EventCodec: BaseCodec<Event, EncodedEvent> = createCodec({
  encode: (event: Event): EncodedEvent => ({
    type: event.type,
    attributes: event.attributes.map(attr => EventAttributeCodec.encode(attr))
  }),
  decode: (encoded: EncodedEvent): Event => ({
    type: encoded.type,
    attributes: encoded.attributes.map(attr => EventAttributeCodec.decode(attr))
  })
});

// Factory functions
export const createEvent = createConverter(EventCodec);
export const createEventAttribute = createConverter(EventAttributeCodec);