/**
 * Tests for Solana codec converters
 */

import {
  ensureString,
  ensureNumber,
  ensureBoolean,
  base58ToBytes,
  maybeBase58ToBytes,
  bytesToBase58,
  base64ToBytes,
  maybeBase64ToBytes,
  bytesToBase64,
  normalizePubkey,
  normalizeSignature,
  decodeAccountData,
  apiToNumber,
  apiToBigInt
} from '../converters';

describe('Solana Codec Converters', () => {
  describe('ensureString', () => {
    it('should return string as-is', () => {
      expect(ensureString('test')).toBe('test');
    });

    it('should convert number to string', () => {
      expect(ensureString(123)).toBe('123');
    });

    it('should return empty string for null/undefined', () => {
      expect(ensureString(null)).toBe('');
      expect(ensureString(undefined)).toBe('');
    });
  });

  describe('ensureNumber', () => {
    it('should return number as-is', () => {
      expect(ensureNumber(123)).toBe(123);
    });

    it('should convert string to number', () => {
      expect(ensureNumber('123')).toBe(123);
    });

    it('should throw for invalid number string', () => {
      expect(() => ensureNumber('abc')).toThrow('Invalid number: abc');
    });
  });

  describe('ensureBoolean', () => {
    it('should return boolean as-is', () => {
      expect(ensureBoolean(true)).toBe(true);
      expect(ensureBoolean(false)).toBe(false);
    });

    it('should convert string to boolean', () => {
      expect(ensureBoolean('true')).toBe(true);
      expect(ensureBoolean('false')).toBe(false);
      expect(ensureBoolean('TRUE')).toBe(true);
    });

    it('should throw for invalid boolean string', () => {
      expect(() => ensureBoolean('abc')).toThrow('Expected boolean, got string');
    });
  });

  describe('base58 operations', () => {
    const testBytes = new Uint8Array([1, 2, 3, 4, 5]);
    const testBase58 = '7bWpTW';

    it('should convert base58 to bytes', () => {
      const result = base58ToBytes(testBase58);
      expect(result).toEqual(testBytes);
    });

    it('should convert bytes to base58', () => {
      const result = bytesToBase58(testBytes);
      expect(result).toBe(testBase58);
    });

    it('should handle invalid base58', () => {
      expect(() => base58ToBytes('invalid!')).toThrow('Invalid base58 string');
    });

    it('should return undefined for invalid base58 with maybe function', () => {
      expect(maybeBase58ToBytes('invalid!')).toBeUndefined();
      expect(maybeBase58ToBytes(null)).toBeUndefined();
    });
  });

  describe('base64 operations', () => {
    const testBytes = new Uint8Array([1, 2, 3, 4, 5]);
    const testBase64 = 'AQIDBAU=';

    it('should convert base64 to bytes', () => {
      const result = base64ToBytes(testBase64);
      expect(result).toEqual(testBytes);
    });

    it('should convert bytes to base64', () => {
      const result = bytesToBase64(testBytes);
      expect(result).toBe(testBase64);
    });

    it('should handle invalid base64', () => {
      expect(() => base64ToBytes('invalid!')).toThrow('Invalid base64 string');
    });

    it('should return undefined for invalid base64 with maybe function', () => {
      expect(maybeBase64ToBytes('invalid!')).toBeUndefined();
      expect(maybeBase64ToBytes(null)).toBeUndefined();
    });
  });

  describe('normalizePubkey', () => {
    // Valid Solana pubkey (32 bytes in base58)
    const validPubkey = '11111111111111111111111111111112';

    it('should accept valid pubkey', () => {
      expect(normalizePubkey(validPubkey)).toBe(validPubkey);
    });

    it('should throw for non-string', () => {
      expect(() => normalizePubkey(123)).toThrow('Expected pubkey string');
    });

    it('should throw for invalid base58', () => {
      expect(() => normalizePubkey('invalid!')).toThrow('Invalid pubkey');
    });
  });

  describe('decodeAccountData', () => {
    it('should decode base58 tuple', () => {
      const data = ['7bWpTW', 'base58'];
      const result = decodeAccountData(data);
      expect(result).toEqual(new Uint8Array([1, 2, 3, 4, 5]));
    });

    it('should decode base64 tuple', () => {
      const data = ['AQIDBAU=', 'base64'];
      const result = decodeAccountData(data);
      expect(result).toEqual(new Uint8Array([1, 2, 3, 4, 5]));
    });

    it('should return jsonParsed data as-is', () => {
      const data = { parsed: { info: { mint: 'test' } } };
      const result = decodeAccountData(data);
      expect(result).toEqual(data);
    });

    it('should throw for unsupported encoding', () => {
      const data = ['test', 'unsupported'];
      expect(() => decodeAccountData(data)).toThrow('Unsupported encoding: unsupported');
    });
  });

  describe('apiToNumber', () => {
    it('should convert string to number', () => {
      expect(apiToNumber('123')).toBe(123);
    });

    it('should return number as-is', () => {
      expect(apiToNumber(123)).toBe(123);
    });
  });

  describe('apiToBigInt', () => {
    it('should convert string to bigint', () => {
      expect(apiToBigInt('123')).toBe(123n);
    });

    it('should return undefined for null/undefined', () => {
      expect(apiToBigInt(null)).toBeUndefined();
      expect(apiToBigInt(undefined)).toBeUndefined();
    });
  });
});
