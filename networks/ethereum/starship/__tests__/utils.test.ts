import { isValidEthereumAddress, toChecksumAddress } from '../../src/utils/address';
import { parseEther, formatEther, parseUnits, formatUnits } from '../../src/utils/denominations';
import { utf8ToHex, hexToUtf8 } from '../../src/utils/encoding';

describe('address utils', () => {
  const validChecksum = '0x6f43F827bb07458dB45D23c6Dc3408FA4D2f8777';
  const validLower = validChecksum.toLowerCase();
  const validUpper = validChecksum.toUpperCase();

  test('valid checksummed address', () => {
    expect(isValidEthereumAddress(validChecksum)).toBe(true);
  });

  test('valid lowercase address', () => {
    expect(isValidEthereumAddress(validLower)).toBe(true);
  });

  test('valid uppercase address', () => {
    expect(isValidEthereumAddress(validUpper)).toBe(true);
  });

  test('invalid checksum address', () => {
    const badChecksum = validChecksum.slice(0, -1) + (validChecksum.slice(-1) === '7' ? '8' : '7');
    expect(isValidEthereumAddress(badChecksum)).toBe(false);
  });

  test('invalid format', () => {
    expect(isValidEthereumAddress('0x123')).toBe(false);
    expect(() => toChecksumAddress('0x123')).toThrow('Invalid Ethereum address format');
  });

  test('toChecksumAddress converts lowercase to checksum', () => {
    expect(toChecksumAddress(validLower)).toBe(validChecksum);
  });
});

describe('parseEther', () => {
  test('should convert ETH to wei', () => {
    expect(parseEther('1.0').toString()).toBe('1000000000000000000');
    expect(parseEther('2.5').toString()).toBe('2500000000000000000');
    expect(parseEther('0.000000000000000001').toString()).toBe('1');
  });

  test('should handle zero', () => {
    expect(parseEther('0').toString()).toBe('0');
    expect(parseEther('0.0').toString()).toBe('0');
  });

  test('should handle string and number inputs', () => {
    expect(parseEther('5').toString()).toBe(parseEther(5).toString());
  });

  test('should handle scientific notation', () => {
    expect(parseEther('1e18').toString()).toBe('1000000000000000000000000000000000000');
    expect(parseEther('2e-18').toString()).toBe('2');
  });

  test('should truncate excess decimals beyond 18 places', () => {
    // Should truncate, not round
    expect(parseEther('1.0000000000000000005').toString()).toBe('1000000000000000000');
    expect(parseEther('0.0000000000000000001').toString()).toBe('0');
  });
});

describe('formatEther', () => {
  test('should convert wei to ETH', () => {
    expect(formatEther(BigInt('1000000000000000000'))).toBe('1');
    expect(formatEther('1000000000000000000')).toBe('1');
    expect(formatEther(BigInt('2500000000000000000'))).toBe('2.5');
  });

  test('should handle zero', () => {
    expect(formatEther(BigInt('0'))).toBe('0');
    expect(formatEther('0')).toBe('0');
  });

  test('should format with correct precision', () => {
    expect(formatEther(BigInt('1'))).toBe('0.000000000000000001');
    expect(formatEther(BigInt('100000000'))).toBe('0.0000000001');
  });

  test('should remove trailing zeros', () => {
    expect(formatEther(BigInt('1000000000000000000'))).toBe('1');  // Not '1.000000000000000000'
    expect(formatEther(BigInt('1100000000000000000'))).toBe('1.1'); // Not '1.100000000000000000'
  });
});

describe('parseUnits', () => {
  test('should convert amount to smallest units with custom decimals', () => {
    expect(parseUnits('1.0', 6).toString()).toBe('1000000'); // 6 decimals (USDC)
    expect(parseUnits('2.5', 8).toString()).toBe('250000000'); // 8 decimals (WBTC)
    expect(parseUnits('1', 0).toString()).toBe('1'); // 0 decimals
  });

  test('should handle more decimal places than specified', () => {
    expect(parseUnits('1.123456789', 6).toString()).toBe('1123456'); // Truncate to 6 decimals
    expect(parseUnits('0.1234567890123456789', 10).toString()).toBe('1234567890'); // Truncate to 10 decimals
  });

  test('should handle leading and trailing zeros', () => {
    expect(parseUnits('01.100', 6).toString()).toBe('1100000');
    expect(parseUnits('000.0010', 6).toString()).toBe('1000');
  });

  test('should throw for negative decimals', () => {
    expect(() => parseUnits('1.0', -1)).toThrow('Decimals must be a non-negative integer');
  });

  test('should handle very large values', () => {
    expect(parseUnits('1000000000000000000', 18).toString()).toBe('1000000000000000000000000000000000000');
  });
});

describe('formatUnits', () => {
  test('should convert smallest units to human-readable form with custom decimals', () => {
    expect(formatUnits(BigInt('1000000'), 6)).toBe('1');
    expect(formatUnits(BigInt('250000000'), 8)).toBe('2.5');
    expect(formatUnits(BigInt('1'), 0)).toBe('1');
  });

  test('should handle string inputs', () => {
    expect(formatUnits('1000000', 6)).toBe('1');
    expect(formatUnits('250000000', 8)).toBe('2.5');
  });

  test('should handle zero values', () => {
    expect(formatUnits(BigInt('0'), 18)).toBe('0');
    expect(formatUnits('0', 6)).toBe('0');
  });

  test('should handle small values', () => {
    expect(formatUnits(BigInt('1'), 18)).toBe('0.000000000000000001');
    expect(formatUnits(BigInt('10'), 18)).toBe('0.00000000000000001');
  });

  test('should throw for negative decimals', () => {
    expect(() => formatUnits(BigInt('1'), -1)).toThrow('Decimals must be a non-negative integer');
  });
});


describe('encoding utils', () => {
  test('utf8ToHex should encode a UTF-8 string to hex', () => {
    expect(utf8ToHex('hello')).toBe('68656c6c6f');
  });

  test('hexToUtf8 should decode a hex string to UTF-8', () => {
    expect(hexToUtf8('68656c6c6f')).toBe('hello');
  });

  test('hexToUtf8 should decode a hex string with 0x prefix', () => {
    expect(hexToUtf8('0x68656c6c6f')).toBe('hello');
  });

  test('hexToUtf8 should throw an error for invalid hex string', () => {
    expect(() => hexToUtf8('0x123')).toThrow('Invalid hex string: 0x123');
  });
});