import { isValidEthereumAddress, toChecksumAddress } from '../../src/utils/address';
import { convert, ethToUnit, unitToEth, DENOMINATIONS } from '../../src/utils/denominations';

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


describe('denominations utils', () => {
  test('DENOMINATIONS constants', () => {
    expect(DENOMINATIONS.wei).toBe('1');
    expect(DENOMINATIONS.ether).toBe('1000000000000000000');
  });

  test('convert wei to ether', () => {
    expect(convert('1000000000000000000', 'wei', 'ether')).toBe('1');
  });

  test('convert gwei to ether', () => {
    expect(convert('1000000000', 'gwei', 'ether')).toBe('1');
  });

  test('convert ether to ether', () => {
    expect(convert('2', 'ether', 'ether')).toBe('2');
  });

  test('ethToUnit and unitToEth coherence', () => {
    const amountEth = '3';
    const amountWei = DENOMINATIONS.ether;
    expect(ethToUnit(amountEth, 'wei')).toBe(convert(amountEth, 'ether', 'wei'));
    expect(unitToEth(amountWei, 'wei')).toBe(convert(amountWei, 'wei', 'ether'));
  });

  test('convert numeric unit (11) to wei and back', () => {
    // 1 * 10^11 = 100000000000 wei
    expect(convert('1', 11, 'wei')).toBe('100000000000');
    // 100000000000 wei / 10^11 = 1
    expect(convert('100000000000', 'wei', 11)).toBe('1');
  });

  test('convert using numeric unit (5) precision', () => {
    // 1.23456 * 10^5 = 123456
    expect(convert('1.23456', 5, 'wei')).toBe('123456');
    // 123456 wei / 10^5 = 1
    expect(convert('123456', 'wei', 5)).toBe('1');
  });

  test('truncate decimals beyond 18 places for ether to wei', () => {
    // Only first 18 decimal digits are used
    expect(convert('0.01234567890123456789', 'ether', 'wei')).toBe('12345678901234567');
  });

  test('convert truncated wei back to ether (floor)', () => {
    // Truncated wei divided by 1e18 yields 0 (integer division)
    expect(convert('12345678901234567', 'wei', 'ether')).toBe('0');
  });
});