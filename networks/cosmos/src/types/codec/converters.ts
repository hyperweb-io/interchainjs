/**
 * Common converter functions for API response transformation
 */

import { fromBase64, fromHex } from '@interchainjs/encoding';

/**
 * Convert API value to number (handles string numbers)
 */
export const apiToNumber = (value: unknown): number | undefined => {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const num = parseInt(value, 10);
    return isNaN(num) ? undefined : num;
  }
  return undefined;
};

/**
 * Convert API value to bigint (handles string numbers)
 */
export const apiToBigInt = (value: unknown): bigint | undefined => {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'bigint') return value;
  if (typeof value === 'string' || typeof value === 'number') {
    try {
      return BigInt(value);
    } catch {
      return undefined;
    }
  }
  return undefined;
};

/**
 * Convert base64 string to Uint8Array
 */
export const base64ToBytes = (value: unknown): Uint8Array => {
  if (typeof value !== 'string') {
    throw new Error('Expected base64 string');
  }
  return fromBase64(value);
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
 * Convert hex string to Uint8Array
 */
export const hexToBytes = (value: unknown): Uint8Array => {
  if (typeof value !== 'string') {
    throw new Error('Expected hex string');
  }
  return fromHex(value);
};

/**
 * Convert hex string to Uint8Array, returns undefined if invalid
 */
export const maybeHexToBytes = (value: unknown): Uint8Array | undefined => {
  if (!value || typeof value !== 'string') return undefined;
  try {
    return fromHex(value);
  } catch {
    return undefined;
  }
};

/**
 * Convert API value to boolean
 */
export const apiToBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return Boolean(value);
};

/**
 * Convert API value to Date
 */
export const apiToDate = (value: unknown): Date | undefined => {
  if (value === null || value === undefined) return undefined;
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    return isNaN(date.getTime()) ? undefined : date;
  }
  return undefined;
};

/**
 * Convert timestamp string to Date
 */
export const timestampToDate = (value: unknown): Date => {
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    if (isNaN(date.getTime())) throw new Error(`Invalid timestamp: ${value}`);
    return date;
  }
  throw new Error(`Expected timestamp, got ${typeof value}`);
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
 * Ensure value is a Date
 */
export const ensureDate = (value: unknown): Date => {
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    if (isNaN(date.getTime())) throw new Error(`Invalid date: ${value}`);
    return date;
  }
  throw new Error(`Expected date, got ${typeof value}`);
};

/**
 * Ensure value is a bigint
 */
export const ensureBigInt = (value: unknown): bigint => {
  if (typeof value === 'bigint') return value;
  if (typeof value === 'string' || typeof value === 'number') {
    try {
      return BigInt(value);
    } catch (e) {
      throw new Error(`Invalid bigint: ${value}`);
    }
  }
  throw new Error(`Expected bigint, got ${typeof value}`);
};

/**
 * Ensure value is a Uint8Array (converts from hex string if needed)
 */
export const ensureBytes = (value: unknown): Uint8Array => {
  if (value instanceof Uint8Array) return value;
  if (typeof value === 'string') {
    try {
      return fromHex(value);
    } catch (e) {
      throw new Error(`Invalid hex string: ${value}`);
    }
  }
  throw new Error(`Expected Uint8Array or hex string, got ${typeof value}`);
};

/**
 * Convert API value to Uint8Array (handles base64 strings)
 */
export const ensureBytesFromBase64 = (value: unknown): Uint8Array => {
  if (value instanceof Uint8Array) return value;
  if (typeof value === 'string') {
    // Handle empty string
    if (value === '') return new Uint8Array();
    try {
      return fromBase64(value);
    } catch (e) {
      throw new Error(`Invalid base64 string: ${value}`);
    }
  }
  // Handle null/undefined/empty object
  if (!value || (typeof value === 'object' && Object.keys(value).length === 0)) {
    return new Uint8Array();
  }
  throw new Error(`Expected Uint8Array or base64 string, got ${typeof value}`);
};

/**
 * Create a converter that maps values using a lookup table
 */
export function createEnumConverter<T>(enumMap: Record<string, T>): (value: unknown) => T | undefined {
  return (value: unknown): T | undefined => {
    if (typeof value !== 'string') return undefined;
    return enumMap[value];
  };
}

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