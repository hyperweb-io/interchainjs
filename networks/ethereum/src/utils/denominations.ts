/**
 * Utility functions for handling Ethereum denominations
 * Provides conversion between ETH/tokens and their smallest units (wei/base units)
 */

// Constants
const ETHER_DECIMALS = 18;

/**
 * Converts a string or number representing ETH to wei (the smallest unit)
 * @param etherStr - The ETH amount as a string or number
 * @returns The amount in wei as BigInt
 */
export function parseEther(etherStr: string | number): bigint {
  return parseUnits(etherStr, ETHER_DECIMALS);
}

/**
 * Converts wei (the smallest unit) to a string representing ETH
 * @param wei - The amount in wei as BigInt or string
 * @returns The amount in ETH as a decimal string
 */
export function formatEther(wei: bigint | string): string {
  return formatUnits(wei, ETHER_DECIMALS);
}

/**
 * Converts a human-readable token amount to its smallest unit
 * @param amount - The token amount as a string or number
 * @param decimals - The number of decimals the token uses
 * @returns The amount in the smallest unit as BigInt
 */
export function parseUnits(amount: string | number, decimals: number): bigint {
  // Validate inputs
  if (decimals < 0 || !Number.isInteger(decimals)) {
    throw new Error('Decimals must be a non-negative integer');
  }

  // Convert amount to string
  const amountStr = amount.toString();

  // Handle scientific notation if present
  if (amountStr.includes('e')) {
    // Parse scientific notation directly without recursion
    const [mantissa, exponentStr] = amountStr.split('e');
    const exponent = parseInt(exponentStr);

    // Handle the mantissa with its own decimal places
    let [intPart, fracPart = ''] = mantissa.split('.');

    if (exponent >= 0) {
      // Positive exponent - shift decimal point to the right
      if (fracPart.length <= exponent) {
        // Pad with zeros as needed
        const result = intPart + fracPart.padEnd(exponent, '0');
        return parseUnits(result, decimals);
      } else {
        // Move decimal point within the fraction
        const result = intPart + fracPart.substring(0, exponent) + '.' + fracPart.substring(exponent);
        return parseUnits(result, decimals);
      }
    } else {
      // Negative exponent - shift decimal point to the left
      const absExponent = Math.abs(exponent);
      if (intPart.length <= absExponent) {
        // Result is < 1
        const padding = '0'.repeat(absExponent - intPart.length);
        const result = '0.' + padding + intPart + fracPart;
        return parseUnits(result, decimals);
      } else {
        // Insert decimal point in the integer part
        const splitPoint = intPart.length - absExponent;
        const result = intPart.substring(0, splitPoint) + '.' + intPart.substring(splitPoint) + fracPart;
        return parseUnits(result, decimals);
      }
    }
  }

  // Split the decimal string
  let [integerPart, fractionPart = ''] = amountStr.split('.');

  // Remove leading zeros from the integer part (but keep at least one digit)
  integerPart = integerPart.replace(/^0+(?=\d)/, '');
  if (integerPart === '') integerPart = '0';

  // Pad or truncate the fraction part according to decimals
  if (fractionPart.length > decimals) {
    fractionPart = fractionPart.slice(0, decimals);
  } else {
    fractionPart = fractionPart.padEnd(decimals, '0');
  }

  // Combine integer and fraction parts without decimal point
  const result = integerPart + fractionPart;

  // Convert to BigInt - remove leading zeros to prevent octal interpretation
  return BigInt(result.replace(/^0+(?=\d)/, '') || '0');
}

/**
 * Converts an amount in smallest units to a human-readable token amount
 * @param amount - The amount in the smallest units as BigInt or string
 * @param decimals - The number of decimals the token uses
 * @returns The human-readable token amount as a decimal string
 */
export function formatUnits(amount: bigint | string, decimals: number): string {
  // Validate inputs
  if (decimals < 0 || !Number.isInteger(decimals)) {
    throw new Error('Decimals must be a non-negative integer');
  }

  // Convert amount to string
  const amountStr = amount.toString();

  // If amount is 0, return "0"
  if (amountStr === '0') return '0';

  // Pad with leading zeros to ensure we have at least 'decimals' digits
  const padded = amountStr.padStart(decimals, '0');

  // Calculate the integer part and fractional part positions
  const integerPartLength = Math.max(0, padded.length - decimals);

  // Extract the integer and fraction parts
  const integerPart = integerPartLength > 0 ? padded.slice(0, integerPartLength) : '0';
  const fractionPart = padded.slice(integerPartLength);

  // Trim trailing zeros from fraction part
  const trimmedFraction = fractionPart.replace(/0+$/, '');

  // Combine the parts with a decimal point if necessary
  return trimmedFraction.length > 0
    ? `${integerPart}.${trimmedFraction}`
    : integerPart;
}
