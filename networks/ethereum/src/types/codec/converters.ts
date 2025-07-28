// networks/ethereum/src/types/codec/converters.ts

import { BlockTag } from '../protocol';

/**
 * Utility functions for converting between different data types
 * Used by protocol adapters for encoding/decoding
 */

/**
 * Ensure a value is a string
 */
export function ensureString(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number') {
    return value.toString();
  }
  if (typeof value === 'bigint') {
    return value.toString();
  }
  throw new Error(`Expected string, got ${typeof value}`);
}

/**
 * Ensure a value is a number
 */
export function ensureNumber(value: unknown): number {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) {
      throw new Error(`Cannot convert "${value}" to number`);
    }
    return parsed;
  }
  throw new Error(`Expected number, got ${typeof value}`);
}

/**
 * Ensure a value is a boolean
 */
export function ensureBoolean(value: unknown): boolean {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }
  throw new Error(`Expected boolean, got ${typeof value}`);
}

/**
 * Convert a number to hex string
 */
export function numberToHex(value: number): string {
  return '0x' + value.toString(16);
}

/**
 * Convert hex string to number
 */
export function hexToNumber(hex: string): number {
  return parseInt(hex, 16);
}

/**
 * Convert bigint to hex string
 */
export function bigintToHex(value: bigint): string {
  return '0x' + value.toString(16);
}

/**
 * Convert hex string to bigint
 */
export function hexToBigint(hex: string): bigint {
  return BigInt(hex);
}

/**
 * Normalize block tag to string format for RPC calls
 */
export function normalizeBlockTag(blockTag: BlockTag): string {
  if (typeof blockTag === 'string') {
    // Handle named tags
    if (['latest', 'earliest', 'pending', 'safe', 'finalized'].includes(blockTag)) {
      return blockTag;
    }
    // Handle hex strings
    if (blockTag.startsWith('0x')) {
      return blockTag;
    }
    // Handle decimal strings
    const num = parseInt(blockTag, 10);
    if (!isNaN(num)) {
      return numberToHex(num);
    }
    throw new Error(`Invalid block tag: ${blockTag}`);
  }

  if (typeof blockTag === 'number') {
    return numberToHex(blockTag);
  }

  throw new Error(`Invalid block tag type: ${typeof blockTag}`);
}

/**
 * Normalize address to lowercase hex format
 */
export function normalizeAddress(address: string): string {
  if (!address.startsWith('0x')) {
    throw new Error(`Invalid address format: ${address}`);
  }
  if (address.length !== 42) {
    throw new Error(`Invalid address length: ${address}`);
  }
  return address.toLowerCase();
}

/**
 * Normalize transaction hash to lowercase hex format
 */
export function normalizeHash(hash: string): string {
  if (!hash.startsWith('0x')) {
    throw new Error(`Invalid hash format: ${hash}`);
  }
  if (hash.length !== 66) {
    throw new Error(`Invalid hash length: ${hash}`);
  }
  return hash.toLowerCase();
}

/**
 * Validate and normalize hex data
 */
export function normalizeHexData(data: string): string {
  if (!data.startsWith('0x')) {
    throw new Error(`Invalid hex data format: ${data}`);
  }
  // Remove 0x prefix, ensure even length, add back 0x
  const hex = data.slice(2);
  const normalizedHex = hex.length % 2 === 0 ? hex : '0' + hex;
  return '0x' + normalizedHex.toLowerCase();
}

/**
 * Convert array of values to array of strings
 */
export function arrayToStringArray(arr: unknown[]): string[] {
  return arr.map(item => ensureString(item));
}

/**
 * Safely parse JSON with error handling
 */
export function safeJsonParse<T>(json: string): T {
  try {
    return JSON.parse(json);
  } catch (error) {
    throw new Error(`Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
}
