import { Buffer } from 'buffer';

export function fromUtf8(str: string): Uint8Array {
  return Uint8Array.from(Buffer.from(str, 'utf-8'));
}

export function toUtf8(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString('utf-8');
}

export function fromBase64(str: string): Uint8Array {
  return Uint8Array.from(Buffer.from(str, 'base64'));
}

export function toBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString('base64');
}

export function fromHex(str: string): Uint8Array {
  return str.startsWith('0x')
    ? Uint8Array.from(Buffer.from(str.slice(2), 'hex'))
    : Uint8Array.from(Buffer.from(str, 'hex'));
}

export function toHex(bytes: Uint8Array, trimmed: boolean = false): string {
  const hexString = Buffer.from(bytes).toString('hex');
  if (trimmed) {
    const nonZeroIndex = hexString.match(/[1-9a-f]/i).index;
    const trimmedHexString = hexString.slice(nonZeroIndex);
    return trimmedHexString;
  }
  return hexString;
}

export function toPrefixedHex(
  bytes: Uint8Array,
  trimmed: boolean = false
): string {
  return `0x${toHex(bytes, trimmed)}`;
}

export function toBigInt(bytes: Uint8Array): bigint {
  return BigInt(`0x${toHex(bytes)}`);
}

export function fromBigInt(i: bigint): Uint8Array {
  const hexString = i.toString(16);
  const paddedHexString =
    hexString.length % 2 === 0 ? hexString : '0' + hexString;
  return fromHex(paddedHexString);
}

export function toNumber(bytes: Uint8Array) {
  const buffer = Buffer.from(bytes);
  const number = buffer.readUInt32BE(0); // Big-endian byte order
  return number;
}

export function fromNumber(i: number): Uint8Array {
  const buffer = Buffer.allocUnsafe(4); // Assuming a 32-bit number (4 bytes)
  buffer.writeUInt32BE(i, 0); // Big-endian byte order
  const uint8Array = new Uint8Array(buffer);
  return uint8Array;
}

export function fromAscii(str: string): Uint8Array {
  return Uint8Array.from(Buffer.from(str, 'ascii'));
}

export function toAscii(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString('ascii');
}
