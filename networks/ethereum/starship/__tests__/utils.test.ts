import { isValidEthereumAddress, toChecksumAddress, utf8ToHex, hexToUtf8 } from '@interchainjs/ethereum';

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