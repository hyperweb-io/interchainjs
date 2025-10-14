export function encodeSolanaCompactLength(length: number): Uint8Array {
  if (length < 0x80) {
    return new Uint8Array([length]);
  }

  if (length < 0x4000) {
    return new Uint8Array([
      (length & 0x7f) | 0x80,
      (length >> 7) & 0xff
    ]);
  }

  if (length < 0x200000) {
    return new Uint8Array([
      (length & 0x7f) | 0x80,
      ((length >> 7) & 0x7f) | 0x80,
      (length >> 14) & 0xff
    ]);
  }

  throw new Error("Length too large for compact encoding");
}

export function decodeSolanaCompactLength(
  buffer: Uint8Array,
  offset: number = 0
): { length: number; bytesConsumed: number } {
  if (!Number.isInteger(offset) || offset < 0) {
    throw new Error("Offset must be a non-negative integer");
  }
  if (offset >= buffer.length) {
    throw new Error("Buffer too short for compact length");
  }

  const firstByte = buffer[offset];

  if ((firstByte & 0x80) === 0) {
    return { length: firstByte, bytesConsumed: 1 };
  }

  if (offset + 1 >= buffer.length) {
    throw new Error("Buffer too short for 2-byte compact length");
  }

  const secondByte = buffer[offset + 1];

  if ((secondByte & 0x80) === 0) {
    const length = (firstByte & 0x7f) | (secondByte << 7);
    return { length, bytesConsumed: 2 };
  }

  if (offset + 2 >= buffer.length) {
    throw new Error("Buffer too short for 3-byte compact length");
  }

  const thirdByte = buffer[offset + 2];
  const length =
    (firstByte & 0x7f) |
    ((secondByte & 0x7f) << 7) |
    (thirdByte << 14);

  if (length >= 0x200000) {
    throw new Error("Decoded length exceeds compact-u16 maximum");
  }

  return { length, bytesConsumed: 3 };
}
