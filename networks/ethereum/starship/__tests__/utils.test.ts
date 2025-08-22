import { isValidEthereumAddress, toChecksumAddress } from '../../src/utils/address';
import { fromUtf8, toUtf8, fromHex, toHex } from '@interchainjs/encoding';

describe('address utils', () => {
  const validChecksum = '0x6f43F827bb07458dB45D23c6Dc3408FA4D2f8777';
  const validLower = validChecksum.toLowerCase();
  const validUpper = '0x' + validChecksum.slice(2).toUpperCase();

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
  test('toHex(toUtf8) should encode a UTF-8 string to hex', () => {
    expect(toHex(toUtf8('hello'))).toBe('68656c6c6f');
  });

  test('fromUtf8(fromHex) should decode a hex string to UTF-8', () => {
    expect(fromUtf8(fromHex('68656c6c6f'))).toBe('hello');
  });

  test('fromUtf8(fromHex) should decode a hex string with 0x prefix removed', () => {
    const hexWithPrefix = '0x68656c6c6f';
    const hexWithoutPrefix = hexWithPrefix.startsWith('0x') ? hexWithPrefix.slice(2) : hexWithPrefix;
    expect(fromUtf8(fromHex(hexWithoutPrefix))).toBe('hello');
  });

  test('fromHex should throw an error for invalid hex string with odd length', () => {
    expect(() => fromHex('0x123')).toThrow();
  });
});