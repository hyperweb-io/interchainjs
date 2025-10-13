import {
  decodeSolanaCompactLength,
  encodeSolanaCompactLength
} from "../encoding";

describe("compact length encoding", () => {
  it("round-trips representative length values", () => {
    const lengths = [0, 1, 127, 128, 1024, 16_383, 16_384, 65_535, 1_000_000, 0x1fffff];

    for (const length of lengths) {
      const encoded = encodeSolanaCompactLength(length);
      const { length: decoded, bytesConsumed } = decodeSolanaCompactLength(encoded);

      expect(decoded).toBe(length);
      expect(bytesConsumed).toBe(encoded.length);
    }
  });

  it("decodes length prefixes in serialized payloads", () => {
    const payloadLengths = [0, 10, 128, 16_384];

    for (const payloadLength of payloadLengths) {
      const payload = new Uint8Array(payloadLength).fill(0xab);
      const encodedLength = encodeSolanaCompactLength(payload.length);
      const buffer = new Uint8Array(encodedLength.length + payload.length);

      buffer.set(encodedLength, 0);
      buffer.set(payload, encodedLength.length);

      const { length, bytesConsumed } = decodeSolanaCompactLength(buffer);
      expect(length).toBe(payload.length);
      expect(bytesConsumed).toBe(encodedLength.length);
      expect(buffer.slice(bytesConsumed)).toEqual(payload);
    }
  });

  it("honours decode offsets within larger buffers", () => {
    const payloadLength = 512;
    const prefix = new Uint8Array([0x99, 0x88]);
    const encodedLength = encodeSolanaCompactLength(payloadLength);
    const payload = new Uint8Array(payloadLength).map((_, index) => index % 256);
    const buffer = new Uint8Array(prefix.length + encodedLength.length + payload.length);

    buffer.set(prefix, 0);
    buffer.set(encodedLength, prefix.length);
    buffer.set(payload, prefix.length + encodedLength.length);

    const { length, bytesConsumed } = decodeSolanaCompactLength(buffer, prefix.length);
    expect(length).toBe(payloadLength);
    expect(bytesConsumed).toBe(encodedLength.length);
  });

  it("throws when the encoded sequence is incomplete", () => {
    const encoded = encodeSolanaCompactLength(16_384);

    expect(() =>
      decodeSolanaCompactLength(encoded.slice(0, encoded.length - 1))
    ).toThrow(/3-byte compact length/);

    expect(() => decodeSolanaCompactLength(Uint8Array.of(0x80))).toThrow(
      /2-byte compact length/
    );
  });

  it("rejects invalid offsets", () => {
    const encoded = encodeSolanaCompactLength(10);

    expect(() => decodeSolanaCompactLength(encoded, -1)).toThrow(/non-negative integer/);
    expect(() => decodeSolanaCompactLength(encoded, 10)).toThrow(/Buffer too short/);
  });

  it("rejects decoded lengths beyond the compact-u16 limit", () => {
    const buffer = Uint8Array.of(0xff, 0xff, 0xff);

    expect(() => decodeSolanaCompactLength(buffer)).toThrow(/exceeds compact-u16/);
  });
});
