// Cross-network token math helpers migrated from Solana's TokenMath
// Enhanced with comprehensive token operations for all blockchain networks

const MAX_DECIMALS = 20; // Reasonable limit for cross-network compatibility

export class TokenMath {
  /**
   * Convert UI amount to raw token amount
   * @param uiAmount - The amount in UI format (e.g., 1.5 for 1.5 tokens)
   * @param decimals - Number of decimals for the token
   * @returns Raw token amount as bigint
   */
  static uiAmountToRaw(uiAmount: number | string, decimals: number): bigint {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }

    const amount = typeof uiAmount === 'string' ? parseFloat(uiAmount) : uiAmount;

    if (isNaN(amount) || amount < 0) {
      throw new Error(`Invalid UI amount: ${uiAmount}`);
    }

    // Use string manipulation to avoid floating point precision issues
    const multiplier = BigInt(10 ** decimals);
    const amountStr = amount.toFixed(decimals);
    const [wholePart, decimalPart = ''] = amountStr.split('.');

    const wholeAmount = BigInt(wholePart) * multiplier;
    const decimalAmount = BigInt(decimalPart.padEnd(decimals, '0'));

    return wholeAmount + decimalAmount;
  }

  /**
   * Convert raw token amount to UI amount
   * @param rawAmount - Raw token amount as bigint
   * @param decimals - Number of decimals for the token
   * @param precision - Number of decimal places to show (default: all)
   * @returns UI amount as string
   */
  static rawToUiAmount(rawAmount: bigint, decimals: number, precision?: number): string {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }

    if (rawAmount < 0n) {
      throw new Error(`Invalid raw amount: ${rawAmount}. Must be non-negative`);
    }

    const divisor = BigInt(10 ** decimals);
    const wholePart = rawAmount / divisor;
    const fractionalPart = rawAmount % divisor;

    if (decimals === 0) {
      return wholePart.toString();
    }

    const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
    let result = `${wholePart}.${fractionalStr}`;

    // Remove trailing zeros
    result = result.replace(/\.?0+$/, '');

    // Apply precision if specified
    if (precision !== undefined && precision >= 0) {
      const decimalIndex = result.indexOf('.');
      if (decimalIndex !== -1) {
        result = result.substring(0, decimalIndex + precision + 1);
      }
      // Remove trailing zeros again after precision cut
      result = result.replace(/\.?0+$/, '');
    }

    return result || '0';
  }

  /**
   * Parse token amount from string, handling various formats
   * @param amountStr - Amount string (can include commas, symbols)
   * @param decimals - Number of decimals for the token
   * @returns Raw token amount as bigint
   */
  static parseTokenAmount(amountStr: string, decimals: number): bigint {
    if (!amountStr || typeof amountStr !== 'string') {
      throw new Error('Invalid amount string');
    }

    // Remove commas, spaces, and common currency symbols
    const cleanAmount = amountStr
      .replace(/,/g, '')
      .replace(/\s/g, '')
      .replace(/[^\d.-]/g, '');

    if (!cleanAmount || cleanAmount === '.' || cleanAmount === '-') {
      throw new Error(`Invalid amount format: ${amountStr}`);
    }

    return this.uiAmountToRaw(cleanAmount, decimals);
  }

  /**
   * Format token amount with proper decimal places
   * @param rawAmount - Raw token amount as bigint
   * @param decimals - Number of decimals for the token
   * @param options - Formatting options
   * @returns Formatted token amount string
   */
  static formatTokenAmount(
    rawAmount: bigint,
    decimals: number,
    options: {
      precision?: number;
      commas?: boolean;
      symbol?: string;
    } = {}
  ): string {
    const { precision, commas = false, symbol } = options;

    let amount = this.rawToUiAmount(rawAmount, decimals, precision);

    // Add commas for thousands separator
    if (commas && amount.length > 3) {
      const [wholePart, decimalPart] = amount.split('.');
      const formattedWhole = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      amount = decimalPart ? `${formattedWhole}.${decimalPart}` : formattedWhole;
    }

    // Add symbol suffix
    if (symbol) {
      amount += ` ${symbol}`;
    }

    return amount;
  }

  /**
   * Calculate percentage of a token amount
   * @param amount - Raw token amount as bigint
   * @param percentage - Percentage as number (0-100)
   * @returns Percentage of the amount as bigint
   */
  static calculatePercentage(amount: bigint, percentage: number): bigint {
    if (percentage < 0 || percentage > 100) {
      throw new Error(`Invalid percentage: ${percentage}. Must be between 0 and 100`);
    }

    if (amount < 0n) {
      throw new Error(`Invalid amount: ${amount}. Must be non-negative`);
    }

    // Use integer arithmetic to avoid precision issues
    return (amount * BigInt(Math.floor(percentage * 100))) / 10000n;
  }

  /**
   * Check if two token amounts are equal within a tolerance
   * @param amount1 - First amount as bigint
   * @param amount2 - Second amount as bigint
   * @param tolerance - Tolerance as bigint (default: 0)
   * @returns True if amounts are equal within tolerance
   */
  static isAmountEqual(amount1: bigint, amount2: bigint, tolerance: bigint = 0n): boolean {
    const diff = amount1 > amount2 ? amount1 - amount2 : amount2 - amount1;
    return diff <= tolerance;
  }

  /**
   * Get the maximum possible token amount for given decimals
   * @param decimals - Number of decimals
   * @returns Maximum token amount as bigint
   */
  static getMaxAmount(decimals: number): bigint {
    if (decimals < 0 || decimals > MAX_DECIMALS) {
      throw new Error(`Invalid decimals: ${decimals}. Must be between 0 and ${MAX_DECIMALS}`);
    }

    // Maximum u64 value (commonly used in blockchain networks)
    return 18446744073709551615n;
  }

  /**
   * Validate that a raw amount doesn't exceed maximum
   * @param amount - Raw amount to validate
   * @param decimals - Number of decimals
   * @returns True if amount is valid
   */
  static isValidAmount(amount: bigint, decimals: number): boolean {
    if (amount < 0n) {
      return false;
    }

    try {
      const maxAmount = this.getMaxAmount(decimals);
      return amount <= maxAmount;
    } catch {
      return false;
    }
  }

  /**
   * Convert between different decimal precisions
   * @param amount - Raw amount in source decimals
   * @param sourceDecimals - Current number of decimals
   * @param targetDecimals - Target number of decimals
   * @returns Amount converted to target decimals
   */
  static convertDecimals(
    amount: bigint,
    sourceDecimals: number,
    targetDecimals: number
  ): bigint {
    if (sourceDecimals === targetDecimals) {
      return amount;
    }

    if (sourceDecimals < targetDecimals) {
      // Increase precision
      const multiplier = BigInt(10 ** (targetDecimals - sourceDecimals));
      return amount * multiplier;
    } else {
      // Decrease precision (may lose precision)
      const divisor = BigInt(10 ** (sourceDecimals - targetDecimals));
      return amount / divisor;
    }
  }

  // Basic arithmetic operations
  static add(a: bigint, b: bigint): bigint {
    return a + b;
  }

  static subtract(a: bigint, b: bigint): bigint {
    if (a < b) {
      throw new Error('Insufficient balance: cannot subtract larger amount from smaller amount');
    }
    return a - b;
  }

  static multiply(a: bigint, b: bigint): bigint {
    return a * b;
  }

  static divide(a: bigint, b: bigint): bigint {
    if (b === 0n) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  /**
   * Get human-readable amount with appropriate unit scaling
   * @param rawAmount - Raw token amount
   * @param decimals - Number of decimals
   * @returns Object with scaled amount and unit
   */
  static getScaledAmount(rawAmount: bigint, decimals: number): {
    amount: string;
    unit: string;
    scale: number;
  } {
    const uiAmount = parseFloat(this.rawToUiAmount(rawAmount, decimals));

    if (uiAmount >= 1e12) {
      return {
        amount: (uiAmount / 1e12).toFixed(2),
        unit: 'T',
        scale: 12,
      };
    } else if (uiAmount >= 1e9) {
      return {
        amount: (uiAmount / 1e9).toFixed(2),
        unit: 'B',
        scale: 9,
      };
    } else if (uiAmount >= 1e6) {
      return {
        amount: (uiAmount / 1e6).toFixed(2),
        unit: 'M',
        scale: 6,
      };
    } else if (uiAmount >= 1e3) {
      return {
        amount: (uiAmount / 1e3).toFixed(2),
        unit: 'K',
        scale: 3,
      };
    } else {
      return {
        amount: uiAmount.toFixed(Math.min(decimals, 6)),
        unit: '',
        scale: 0,
      };
    }
  }
}
