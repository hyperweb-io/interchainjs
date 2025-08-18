/**
 * Solana-specific constants and utilities
 * Local utilities for the Solana network package
 */

// Core Solana constants
export const LAMPORTS_PER_SOL = 1000000000;

// Network endpoints
export const SOLANA_DEVNET_ENDPOINT = 'https://api.devnet.solana.com';
export const SOLANA_TESTNET_ENDPOINT = 'https://api.testnet.solana.com';
export const SOLANA_MAINNET_ENDPOINT = 'https://api.mainnet-beta.solana.com';

// Conversion utilities
export function lamportsToSol(lamports: number | bigint): number {
  return Number(lamports) / LAMPORTS_PER_SOL;
}

export function solToLamports(sol: number): number {
  return Math.round(sol * LAMPORTS_PER_SOL);
}

export function solToLamportsBigInt(sol: number): bigint {
  return BigInt(Math.round(sol * LAMPORTS_PER_SOL));
}

export function lamportsToSolString(lamports: number | bigint, precision: number = 9): string {
  const sol = lamportsToSol(lamports);
  return sol.toFixed(precision).replace(/\.?0+$/, '');
}

// Validation utilities
export function isValidLamports(lamports: number | bigint): boolean {
  const value = typeof lamports === 'bigint' ? lamports : BigInt(lamports);
  return value >= 0n && value <= 18446744073709551615n; // u64 max
}

export function isValidSol(sol: number): boolean {
  return sol >= 0 && sol <= 18446744073.709551615; // u64 max in SOL
}

// Account size constants (useful for rent calculations)
export const SOLANA_ACCOUNT_SIZES = {
  MINT: 82,
  TOKEN_ACCOUNT: 165,
  MULTISIG: 355,
} as const;

// Rent exempt balances (approximate, may vary by network)
export const SOLANA_RENT_EXEMPT_BALANCES = {
  MINT: 1461600,
  TOKEN_ACCOUNT: 2039280,
} as const;

// Common program IDs (as strings to avoid circular dependencies)
export const SOLANA_PROGRAM_IDS = {
  SYSTEM: '11111111111111111111111111111111',
  TOKEN: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TOKEN_2022: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  ASSOCIATED_TOKEN: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  NATIVE_MINT: 'So11111111111111111111111111111111111111112',
} as const;

// Transaction limits
export const SOLANA_TRANSACTION_LIMITS = {
  MAX_TRANSACTION_SIZE: 1232,
  MAX_INSTRUCTIONS_PER_TRANSACTION: 64,
  MAX_ACCOUNTS_PER_TRANSACTION: 64,
} as const;

// Slot and block constants
export const SOLANA_TIMING = {
  AVERAGE_SLOT_TIME_MS: 400,
  SLOTS_PER_EPOCH: 432000,
  AVERAGE_BLOCK_TIME_MS: 400,
} as const;

/**
 * Calculate rent for a given account size
 * @param accountSize - Size of the account in bytes
 * @param lamportsPerByteYear - Rent rate (varies by network)
 * @returns Minimum lamports needed for rent exemption
 */
export function calculateRentExemption(
  accountSize: number,
  lamportsPerByteYear: number = 3480
): number {
  // Simplified calculation - actual calculation involves more factors
  // This is an approximation for common use cases
  return Math.ceil(accountSize * lamportsPerByteYear * 2);
}

/**
 * Format Solana address for display (truncate middle)
 * @param address - Full Solana address
 * @param startChars - Number of characters to show at start
 * @param endChars - Number of characters to show at end
 * @returns Formatted address string
 */
export function formatSolanaAddress(
  address: string,
  startChars: number = 4,
  endChars: number = 4
): string {
  if (address.length <= startChars + endChars) {
    return address;
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Validate Solana address format (basic check)
 * @param address - Address to validate
 * @returns True if address format is valid
 */
export function isValidSolanaAddress(address: string): boolean {
  // Basic validation - Solana addresses are base58 encoded and typically 32-44 characters
  if (typeof address !== 'string' || address.length < 32 || address.length > 44) {
    return false;
  }

  // Check for valid base58 characters
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/;
  return base58Regex.test(address);
}

/**
 * Encode length using Solana's compact-u16 encoding
 * Used in transaction serialization and other Solana data structures
 * @param length - Length to encode
 * @returns Encoded length as Uint8Array
 */
export function encodeSolanaCompactLength(length: number): Uint8Array {
  if (length < 0) {
    throw new Error('Length cannot be negative');
  }

  if (length < 0x80) {
    const buffer = new Uint8Array(1);
    buffer[0] = length;
    return buffer;
  } else if (length < 0x4000) {
    const buffer = new Uint8Array(2);
    const view = new DataView(buffer.buffer);
    view.setUint16(0, length | 0x8000, true);
    return buffer;
  } else if (length < 0x200000) {
    const buffer = new Uint8Array(3);
    const view = new DataView(buffer.buffer);
    buffer[0] = (length & 0x7f) | 0x80;
    view.setUint16(1, (length >> 7) | 0x8000, true);
    return buffer;
  } else {
    throw new Error('Length too large for compact encoding');
  }
}

/**
 * Decode Solana compact-u16 encoded length
 * @param buffer - Buffer containing encoded length
 * @param offset - Offset to start reading from
 * @returns Object with decoded length and bytes consumed
 */
export function decodeSolanaCompactLength(buffer: Uint8Array, offset: number = 0): {
  length: number;
  bytesConsumed: number;
} {
  if (offset >= buffer.length) {
    throw new Error('Buffer too short for compact length');
  }

  const firstByte = buffer[offset];

  if ((firstByte & 0x80) === 0) {
    // Single byte encoding
    return { length: firstByte, bytesConsumed: 1 };
  } else if ((firstByte & 0x40) === 0) {
    // Two byte encoding
    if (offset + 1 >= buffer.length) {
      throw new Error('Buffer too short for 2-byte compact length');
    }
    const view = new DataView(buffer.buffer, buffer.byteOffset + offset, 2);
    const length = view.getUint16(0, true) & 0x3fff;
    return { length, bytesConsumed: 2 };
  } else {
    // Three byte encoding
    if (offset + 2 >= buffer.length) {
      throw new Error('Buffer too short for 3-byte compact length');
    }
    const view = new DataView(buffer.buffer, buffer.byteOffset + offset, 3);
    const length = (firstByte & 0x7f) | ((view.getUint16(1, true) & 0x3fff) << 7);
    return { length, bytesConsumed: 3 };
  }
}

/**
 * Concatenate multiple Uint8Arrays into a single array
 * Utility function commonly used in Solana transaction serialization
 * @param arrays - Arrays to concatenate
 * @returns Concatenated array
 */
export function concatUint8Arrays(arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }

  return result;
}
