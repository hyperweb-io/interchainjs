import { MAX_LAMPORTS } from '../token/constants';

/** Number of lamports per SOL */
export const LAMPORTS_PER_SOL = 1_000_000_000;

/** Maximum representable SOL amount derived from {@link MAX_LAMPORTS} */
export const MAX_SOL = Number(MAX_LAMPORTS) / LAMPORTS_PER_SOL;

/** Default precision used when stringifying SOL balances */
export const DEFAULT_SOL_STRING_PRECISION = 9;

/**
 * Convert lamports to SOL as a JavaScript number.
 */
export function lamportsToSol(lamports: number | bigint): number {
  return Number(lamports) / LAMPORTS_PER_SOL;
}

/**
 * Convert SOL to lamports, clamping to the maximum u64 range.
 */
export function solToLamports(sol: number): number {
  if (!Number.isFinite(sol) || sol < 0) {
    throw new Error('SOL amount must be a non-negative finite number');
  }

  const lamports = Math.round(sol * LAMPORTS_PER_SOL);
  if (!isValidLamports(lamports)) {
    throw new Error(`SOL amount exceeds maximum lamport range (${MAX_LAMPORTS}n)`);
  }
  return lamports;
}

/**
 * Convert SOL to lamports as bigint, preserving the full range.
 */
export function solToLamportsBigInt(sol: number): bigint {
  if (!Number.isFinite(sol) || sol < 0) {
    throw new Error('SOL amount must be a non-negative finite number');
  }

  const lamports = BigInt(Math.round(sol * LAMPORTS_PER_SOL));
  if (!isValidLamports(lamports)) {
    throw new Error(`SOL amount exceeds maximum lamport range (${MAX_LAMPORTS}n)`);
  }
  return lamports;
}

/**
 * Convert lamports to a formatted SOL string while trimming trailing zeros.
 */
export function lamportsToSolString(
  lamports: number | bigint,
  precision: number = DEFAULT_SOL_STRING_PRECISION
): string {
  if (!Number.isInteger(precision) || precision < 0) {
    throw new Error('Precision must be a non-negative integer');
  }
  const sol = lamportsToSol(lamports);
  return sol.toFixed(precision).replace(/\.?0+$/, '');
}

/**
 * Validate lamport amounts fit within the Solana u64 range.
 */
export function isValidLamports(lamports: number | bigint): boolean {
  const value = typeof lamports === 'bigint' ? lamports : BigInt(lamports);
  return value >= 0n && value <= MAX_LAMPORTS;
}

/**
 * Validate SOL amounts are within the representable range.
 */
export function isValidSol(sol: number): boolean {
  return Number.isFinite(sol) && sol >= 0 && sol <= MAX_SOL;
}
