import { sha256 } from '@noble/hashes/sha256';

/**
 * Convert a hex string to a Uint8Array
 */
export function hexToBytes(hex: string): Uint8Array {
  if (hex.startsWith('0x')) {
    hex = hex.slice(2);
  }
  
  if (hex.length % 2 !== 0) {
    throw new Error('Hex string must have an even number of characters');
  }
  
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

/**
 * Convert a Uint8Array to a hex string
 */
export function bytesToHex(bytes: Uint8Array, withPrefix = false): string {
  const hex = Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return withPrefix ? `0x${hex}` : hex;
}

/**
 * Convert BTC to satoshis
 */
export function toSatoshis(btc: number | string): bigint {
  const value = typeof btc === 'string' ? parseFloat(btc) : btc;
  return BigInt(Math.floor(value * 100000000));
}

/**
 * Convert satoshis to BTC
 */
export function toBTC(satoshis: number | bigint | string): number {
  const value = typeof satoshis === 'string' 
    ? BigInt(satoshis) 
    : typeof satoshis === 'number' 
      ? BigInt(Math.floor(satoshis)) 
      : satoshis;
  
  return Number(value) / 100000000;
}

/**
 * Reverse a buffer (used for Bitcoin's little-endian txid)
 */
export function reverseBuffer(buffer: Uint8Array): Uint8Array {
  const reversed = new Uint8Array(buffer.length);
  for (let i = 0; i < buffer.length; i++) {
    reversed[i] = buffer[buffer.length - 1 - i];
  }
  return reversed;
}

/**
 * Compute a Bitcoin transaction hash
 */
export function txidFromHex(txHex: string): string {
  const txBytes = hexToBytes(txHex);
  const hash = sha256(sha256(txBytes));
  return bytesToHex(reverseBuffer(hash));
}
