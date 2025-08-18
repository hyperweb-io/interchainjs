import { fromBase64, fromHex } from './index';

export function apiToNumber(value: string | number | undefined | null): number {
  if (value === undefined || value === null) return 0;
  if (typeof value === 'number') return value;
  const num = parseInt(String(value), 10);
  return Number.isNaN(num) ? 0 : num;
}

export function apiToBigInt(value: string | number | undefined | null): bigint {
  if (value === undefined || value === null) return 0n;
  try {
    return BigInt(value);
  } catch {
    return 0n;
  }
}

export function safeFromBase64(value: string): Uint8Array {
  if (!value) return new Uint8Array(0);
  let padded = value;
  const rem = value.length % 4;
  if (rem === 2) padded += '==';
  else if (rem === 3) padded += '=';
  try {
    return fromBase64(padded);
  } catch {
    return new Uint8Array(0);
  }
}

export function maybeFromBase64(value: string | undefined | null): Uint8Array | undefined {
  if (!value) return undefined;
  return safeFromBase64(value);
}

export function maybeFromHex(value: string | undefined | null): Uint8Array | undefined {
  if (!value) return undefined;
  return fromHex(value);
}

