/**
 * Utility functions for Solana operations
 */

/**
 * Encode a length value using Solana's compact-u16 encoding
 */
export function encodeSolanaCompactLength(length: number): Uint8Array {
  if (length < 0x80) {
    return new Uint8Array([length]);
  } else if (length < 0x4000) {
    return new Uint8Array([
      (length & 0x7f) | 0x80,
      (length >> 7) & 0xff
    ]);
  } else if (length < 0x200000) {
    return new Uint8Array([
      (length & 0x7f) | 0x80,
      ((length >> 7) & 0x7f) | 0x80,
      (length >> 14) & 0xff
    ]);
  } else {
    throw new Error('Length too large for compact encoding');
  }
}

/**
 * Concatenate multiple Uint8Array instances
 */
export function concatUint8Arrays(arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  
  for (const array of arrays) {
    result.set(array, offset);
    offset += array.length;
  }
  
  return result;
}

/**
 * Convert a string to Uint8Array
 */
export function stringToUint8Array(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

/**
 * Convert Uint8Array to string
 */
export function uint8ArrayToString(arr: Uint8Array): string {
  return new TextDecoder().decode(arr);
}

/**
 * Generate a random Uint8Array of specified length
 */
export function randomBytes(length: number): Uint8Array {
  const crypto = require('crypto');
  return crypto.randomBytes(length);
}
