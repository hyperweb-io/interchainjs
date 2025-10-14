import bs58 from "bs58";

export const DEFAULT_LAMPORTS_PER_BYTE_YEAR = 3_480;
export const DEFAULT_RENT_EXEMPTION_MULTIPLIER = 2;

export function calculateRentExemption(
  accountSize: number,
  lamportsPerByteYear: number = DEFAULT_LAMPORTS_PER_BYTE_YEAR,
  exemptionMultiplier: number = DEFAULT_RENT_EXEMPTION_MULTIPLIER
): number {
  if (!Number.isInteger(accountSize) || accountSize < 0) {
    throw new Error("Account size must be a non-negative integer");
  }
  if (!Number.isFinite(lamportsPerByteYear) || lamportsPerByteYear <= 0) {
    throw new Error("lamportsPerByteYear must be a positive finite number");
  }
  if (!Number.isFinite(exemptionMultiplier) || exemptionMultiplier <= 0) {
    throw new Error("exemptionMultiplier must be a positive finite number");
  }

  const estimatedRent = accountSize * lamportsPerByteYear * exemptionMultiplier;
  return Math.ceil(estimatedRent);
}

const BASE58_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]+$/;
const SOLANA_PUBKEY_BYTE_LENGTH = 32;

export function isValidSolanaAddress(address: string): boolean {
  if (typeof address !== "string" || address.length < 32 || address.length > 44) {
    return false;
  }
  if (!BASE58_ADDRESS_REGEX.test(address)) {
    return false;
  }

  try {
    const decoded = bs58.decode(address);
    return decoded.length === SOLANA_PUBKEY_BYTE_LENGTH;
  } catch {
    return false;
  }
}

export function formatSolanaAddress(
  address: string,
  startChars: number = 4,
  endChars: number = 4,
  ellipsis: string = "..."
): string {
  if (!Number.isInteger(startChars) || startChars < 0) {
    throw new Error("startChars must be a non-negative integer");
  }
  if (!Number.isInteger(endChars) || endChars < 0) {
    throw new Error("endChars must be a non-negative integer");
  }
  if (ellipsis.length === 0) {
    throw new Error("ellipsis must not be empty");
  }

  if (address.length <= startChars + endChars + ellipsis.length) {
    return address;
  }

  return `${address.slice(0, startChars)}${ellipsis}${address.slice(-endChars)}`;
}
