import { fromUtf8, toUtf8, fromHex, toHex } from '@interchainjs/utils';

/**
 * Convert a UTF-8 string to hex (without 0x prefix)
 */
export function utf8ToHex(str: string): string {
  const bytes = fromUtf8(str);
  return toHex(bytes);
}

/**
 * Convert a hex string to UTF-8 string
 */
export function hexToUtf8(hex: string): string {
  // Remove 0x prefix if present
  const cleanHex = hex.startsWith('0x') ? hex.slice(2) : hex;
  
  // Validate hex string
  if (!/^[a-fA-F0-9]*$/.test(cleanHex)) {
    throw new Error(`Invalid hex string: ${hex}`);
  }

  // Ensure even length
  if (cleanHex.length % 2 !== 0) {
    throw new Error(`Invalid hex string: ${hex}`);
  }

  const bytes = fromHex(cleanHex);
  return toUtf8(bytes);
}
