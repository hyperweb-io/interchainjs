/**
 * An event attribute.
 *
 * This is the same attribute type as tendermint34.Attribute and tendermint35.EventAttribute
 * but `key` and `value` are unified to strings. The conversion
 * from bytes to string in the Tendermint 0.34 case should be done by performing
 * [lossy] UTF-8 decoding.
 *
 * [lossy]: https://doc.rust-lang.org/stable/std/string/struct.String.html#method.from_utf8_lossy
 */
export interface Attribute {
  readonly key: string;
  readonly value: string;
}

/**
 * The same event type as tendermint34.Event and tendermint35.Event
 * but attribute keys and values are unified to strings. The conversion
 * from bytes to string in the Tendermint 0.34 case should be done by performing
 * [lossy] UTF-8 decoding.
 *
 * [lossy]: https://doc.rust-lang.org/stable/std/string/struct.String.html#method.from_utf8_lossy
 */
export interface Event {
  readonly type: string;
  readonly attributes: readonly Attribute[];
}

export interface DecodedEventAttribute {
  key: Uint8Array;
  value: Uint8Array;
  index?: boolean;
}

export interface DecodedEvent {
  type: string;
  attributes: DecodedEventAttribute[];
}

export function decodeEventAttributeValue(value: string, safeFromBase64Fn: (v: string) => Uint8Array): Uint8Array {
  if (!value) return new Uint8Array(0);
  const isBase64Like = /^[A-Za-z0-9+/]*={0,2}$/.test(value) && value.length % 4 === 0;
  if (isBase64Like) {
    try {
      const decoded = safeFromBase64Fn(value);
      const text = new TextDecoder().decode(decoded);
      if (text.length > 0 && /^[\x20-\x7E\s]*$/.test(text)) {
        return decoded;
      }
    } catch {/* fall through */}
  }
  return new TextEncoder().encode(value);
}

export function decodeEvent(event: any, safeFromBase64Fn: (v: string) => Uint8Array): DecodedEvent {
  return {
    type: event.type || '',
    attributes: (event.attributes || []).map((attr: any) => ({
      key: decodeEventAttributeValue(attr.key || '', safeFromBase64Fn),
      value: decodeEventAttributeValue(attr.value || '', safeFromBase64Fn),
      index: attr.index || false,
    })),
  };
}

export function decodeEvents(events: any[], safeFromBase64Fn: (v: string) => Uint8Array): DecodedEvent[] {
  return (events || []).map(e => decodeEvent(e, safeFromBase64Fn));
}
