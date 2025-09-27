/**
 * Solana-specific converter functions for API response transformation
 */

import { fromBase64, toBase64, apiToNumber as encApiToNumber, apiToBigInt as encApiToBigInt } from '@interchainjs/encoding';
import * as bs58 from 'bs58';

// Re-export common converters from @interchainjs/encoding for consistency
export const apiToNumber = (value: unknown): number => {
  return encApiToNumber(value as string | number | undefined | null);
};

export const apiToBigInt = (value: unknown): bigint | undefined => {
  if (value === null || value === undefined) return undefined;
  try {
    return encApiToBigInt(value as string | number | undefined | null);
  } catch {
    return undefined;
  }
};

/**
 * Ensure value is a string
 */
export const ensureString = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return String(value);
};

/**
 * Ensure value is a number
 */
export const ensureNumber = (value: unknown): number => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const num = Number(value);
    if (isNaN(num)) throw new Error(`Invalid number: ${value}`);
    return num;
  }
  throw new Error(`Expected number, got ${typeof value}`);
};

/**
 * Ensure value is a boolean
 */
export const ensureBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }
  throw new Error(`Expected boolean, got ${typeof value}`);
};

/**
 * Convert base58 string to Uint8Array
 */
export const base58ToBytes = (value: unknown): Uint8Array => {
  if (typeof value !== 'string') {
    throw new Error('Expected base58 string');
  }
  try {
    return bs58.decode(value);
  } catch (error) {
    throw new Error(`Invalid base58 string: ${value}`);
  }
};

/**
 * Convert base58 string to Uint8Array, returns undefined if invalid
 */
export const maybeBase58ToBytes = (value: unknown): Uint8Array | undefined => {
  if (!value || typeof value !== 'string') return undefined;
  try {
    return bs58.decode(value);
  } catch {
    return undefined;
  }
};

/**
 * Convert Uint8Array to base58 string
 */
export const bytesToBase58 = (bytes: Uint8Array): string => {
  return bs58.encode(bytes);
};

/**
 * Convert base64 string to Uint8Array
 */
export const base64ToBytes = (value: unknown): Uint8Array => {
  if (typeof value !== 'string') {
    throw new Error('Expected base64 string');
  }
  try {
    return fromBase64(value);
  } catch (error) {
    throw new Error(`Invalid base64 string: ${value}`);
  }
};

/**
 * Convert base64 string to Uint8Array, returns undefined if invalid
 */
export const maybeBase64ToBytes = (value: unknown): Uint8Array | undefined => {
  if (!value || typeof value !== 'string') return undefined;
  try {
    return fromBase64(value);
  } catch {
    return undefined;
  }
};

/**
 * Convert Uint8Array to base64 string
 */
export const bytesToBase64 = (bytes: Uint8Array): string => {
  return toBase64(bytes);
};

/**
 * Normalize Solana public key (validate base58 and length = 32 bytes)
 */
export const normalizePubkey = (pubkey: unknown): string => {
  if (typeof pubkey !== 'string') {
    throw new Error('Expected pubkey string');
  }
  
  try {
    const decoded = bs58.decode(pubkey);
    if (decoded.length !== 32) {
      throw new Error(`Invalid pubkey length: expected 32 bytes, got ${decoded.length}`);
    }
    return pubkey;
  } catch (error) {
    throw new Error(`Invalid pubkey: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Normalize Solana signature (validate base58)
 */
export const normalizeSignature = (signature: unknown): string => {
  if (typeof signature !== 'string') {
    throw new Error('Expected signature string');
  }
  
  try {
    const decoded = bs58.decode(signature);
    if (decoded.length !== 64) {
      throw new Error(`Invalid signature length: expected 64 bytes, got ${decoded.length}`);
    }
    return signature;
  } catch (error) {
    throw new Error(`Invalid signature: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Decode Solana account data which can be in different formats
 * Handles both tuple format [data, encoding] and jsonParsed format
 */
export const decodeAccountData = (value: unknown): Uint8Array | unknown => {
  // Handle tuple format: [data, encoding]
  if (Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && typeof value[1] === 'string') {
    const [data, encoding] = value as [string, string];
    
    switch (encoding) {
      case 'base58':
        return base58ToBytes(data);
      case 'base64':
      case 'base64+zstd':
        return base64ToBytes(data);
      default:
        throw new Error(`Unsupported encoding: ${encoding}`);
    }
  }
  
  // Handle jsonParsed or other formats - return as-is
  return value;
};

/**
 * Create a converter for nested objects
 */
export function createNestedConverter<T>(codec: { create: (data: unknown) => T }): (value: unknown) => T {
  return (value: unknown): T => codec.create(value);
}

/**
 * Create a converter for arrays of nested objects
 */
export function createArrayConverter<T>(codec: { create: (data: unknown) => T }): (value: unknown) => T[] {
  return (value: unknown): T[] => {
    if (!Array.isArray(value)) return [];
    return value.map(item => codec.create(item));
  };
}
