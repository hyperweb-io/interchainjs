/**
 * Ethereum denominations and conversion utilities
 */

// Denomination constants with their values in wei
export const DENOMINATIONS = {
  wei: '1',
  kwei: '1000',
  mwei: '1000000',
  gwei: '1000000000',
  microether: '1000000000000',
  milliether: '1000000000000000',
  ether: '1000000000000000000',
} as const;

export type EthDenomination = keyof typeof DENOMINATIONS;

// Unit type can be either a predefined denomination or a number representing decimal places
export type UnitType = EthDenomination | number;

/**
 * Gets the wei value for a given unit
 * @param unit - The unit (either a predefined denomination or a decimal precision number)
 * @returns The wei value as BigInt
 */
function getWeiValue(unit: UnitType): bigint {
  if (typeof unit === 'number') {
    return BigInt(10) ** BigInt(unit);
  }
  return BigInt(DENOMINATIONS[unit]);
}

/**
 * Converts from one unit to another
 * @param amount - The amount to convert
 * @param fromUnit - The source unit (denomination name or decimal precision)
 * @param toUnit - The target unit (denomination name or decimal precision)
 * @returns The converted amount as string
 */
export function convert(
  amount: string | number,
  fromUnit: UnitType,
  toUnit: UnitType
): string {
  const amountStr = typeof amount === 'string' ? amount : amount.toString();

  // Get wei values for each unit
  const fromWei = getWeiValue(fromUnit);
  const toWei = getWeiValue(toUnit);

  // Handle decimal points in the input
  let [whole, decimal] = amountStr.split('.');
  whole = whole || '0';
  decimal = decimal || '';

  // Calculate base-10 decimals in fromUnit
  const fromDecimals = typeof fromUnit === 'number'
    ? fromUnit
    : DENOMINATIONS[fromUnit].length - 1;

  // Convert to BigInt with proper decimal handling
  let valueInSmallestUnit;
  if (decimal) {
    // Scale the decimal part properly
    const scaledDecimal = decimal.padEnd(Number(fromDecimals), '0').slice(0, Number(fromDecimals));
    // Convert decimal part to equivalent wei value
    const decimalValue = BigInt(scaledDecimal) * BigInt(10) ** BigInt(Math.max(0, Number(fromDecimals) - decimal.length));
    valueInSmallestUnit = BigInt(whole) * fromWei + decimalValue;
  } else {
    valueInSmallestUnit = BigInt(whole) * fromWei;
  }

  // Convert to target unit using uniform division
  const result = valueInSmallestUnit / toWei;
  return result.toString();
}

/**
 * Converts from ETH to any unit
 * @param amount - The amount in ETH
 * @param toUnit - The target unit (denomination name or decimal precision)
 * @returns The converted amount as string
 */
export function ethToUnit(amount: string | number, toUnit: UnitType): string {
  return convert(amount, 'ether', toUnit);
}

/**
 * Converts from any unit to ETH
 * @param amount - The amount in the source unit
 * @param fromUnit - The source unit (denomination name or decimal precision)
 * @returns The amount in ETH as string
 */
export function unitToEth(amount: string | number, fromUnit: UnitType): string {
  return convert(amount, fromUnit, 'ether');
}
