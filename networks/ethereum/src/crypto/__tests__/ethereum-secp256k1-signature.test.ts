import { describe, it, expect, beforeEach } from '@jest/globals';
import { EthereumSecp256k1Signature, createEthereumSignature, isEthereumSecp256k1Signature } from '../ethereum-secp256k1-signature';
import { BaseCryptoBytes } from '@interchainjs/utils';

describe('EthereumSecp256k1Signature', () => {
  // Test data - valid secp256k1 signature components
  const testR = new Uint8Array([
    0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0,
    0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0,
    0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0,
    0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0
  ]);

  const testS = new Uint8Array([
    0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10,
    0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10,
    0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10,
    0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10
  ]);

  const testRecovery = 1;

  describe('Constructor and validation', () => {
    it('should create signature with valid components', () => {
      const signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
      expect(signature).toBeDefined();
      expect(signature.recovery).toBe(testRecovery);
    });

    it('should throw error for invalid r component', () => {
      const invalidR = new Uint8Array([0x00, 0x12, 0x34]); // Leading zero
      expect(() => new EthereumSecp256k1Signature(invalidR, testS, testRecovery))
        .toThrow('Unsigned integer r must be encoded as unpadded big endian');
    });

    it('should throw error for invalid s component', () => {
      const invalidS = new Uint8Array([0x00, 0x12, 0x34]); // Leading zero
      expect(() => new EthereumSecp256k1Signature(testR, invalidS, testRecovery))
        .toThrow('Unsigned integer s must be encoded as unpadded big endian');
    });

    it('should throw error for invalid recovery parameter', () => {
      expect(() => new EthereumSecp256k1Signature(testR, testS, 5))
        .toThrow('The recovery parameter must be one of 0, 1, 2, 3');
    });

    it('should throw error for non-integer recovery parameter', () => {
      expect(() => new EthereumSecp256k1Signature(testR, testS, 1.5))
        .toThrow('The recovery parameter must be an integer');
    });
  });

  describe('Static factory methods', () => {
    it('should create from fixed length data', () => {
      const fixedLengthData = new Uint8Array(65);
      fixedLengthData.set(testR, 0);
      fixedLengthData.set(testS, 32);
      fixedLengthData[64] = testRecovery;

      const signature = EthereumSecp256k1Signature.fromFixedLength(fixedLengthData);
      expect(signature.recovery).toBe(testRecovery);
    });

    it('should throw error for invalid fixed length data', () => {
      const invalidData = new Uint8Array(64); // Wrong length
      expect(() => EthereumSecp256k1Signature.fromFixedLength(invalidData))
        .toThrow('Got invalid data length 64. Expected 32 + 32 + 1 bytes');
    });

    it('should create from components', () => {
      const signature = EthereumSecp256k1Signature.fromComponents(testR, testS, testRecovery);
      expect(signature.recovery).toBe(testRecovery);
    });

    it('should create from ICryptoBytes', () => {
      const fixedLengthData = new Uint8Array(65);
      fixedLengthData.set(testR, 0);
      fixedLengthData.set(testS, 32);
      fixedLengthData[64] = testRecovery;

      const cryptoBytes = BaseCryptoBytes.from(fixedLengthData);
      const signature = EthereumSecp256k1Signature.fromICryptoBytes(cryptoBytes);
      expect(signature.recovery).toBe(testRecovery);
    });

    it('should create from hex string', () => {
      const fixedLengthData = new Uint8Array(65);
      fixedLengthData.set(testR, 0);
      fixedLengthData.set(testS, 32);
      fixedLengthData[64] = testRecovery;

      const hexString = '0x' + Array.from(fixedLengthData).map(b => b.toString(16).padStart(2, '0')).join('');
      const signature = EthereumSecp256k1Signature.fromHex(hexString);
      expect(signature.recovery).toBe(testRecovery);
    });

    it('should throw error for invalid hex length', () => {
      const shortHex = '0x1234';
      expect(() => EthereumSecp256k1Signature.fromHex(shortHex))
        .toThrow('Invalid hex signature length: 4. Expected 130 characters');
    });
  });

  describe('ICryptoBytes interface implementation', () => {
    let signature: EthereumSecp256k1Signature;

    beforeEach(() => {
      signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
    });

    it('should return correct value', () => {
      const value = signature.value;
      expect(value).toBeInstanceOf(Uint8Array);
      expect(value.length).toBe(65);
    });

    it('should convert to hex', () => {
      const hex = signature.toHex();
      expect(hex).toMatch(/^[a-f0-9]{130}$/);
    });

    it('should convert to prefixed hex', () => {
      const prefixedHex = signature.toPrefixedHex();
      expect(prefixedHex).toMatch(/^0x[a-f0-9]{130}$/);
    });

    it('should convert to base64', () => {
      const base64 = signature.toBase64();
      expect(typeof base64).toBe('string');
      expect(base64.length).toBeGreaterThan(0);
    });

    it('should convert to bigint', () => {
      const bigint = signature.toBigInt();
      expect(typeof bigint).toBe('bigint');
    });

    it('should convert to number', () => {
      const number = signature.toNumber();
      expect(typeof number).toBe('number');
    });

    it('should throw error for bech32 encoding', () => {
      expect(() => signature.toBech32('cosmos')).toThrow('Bech32 encoding not implemented');
    });

    it('should slice correctly', () => {
      const sliced = signature.slice(0, 32);
      expect(sliced.value.length).toBe(32);
    });

    it('should concat with other crypto bytes', () => {
      const other = BaseCryptoBytes.from(new Uint8Array([0x01, 0x02, 0x03]));
      const concatenated = signature.concat(other);
      expect(concatenated.value.length).toBe(68); // 65 + 3
    });
  });

  describe('Signature component access', () => {
    let signature: EthereumSecp256k1Signature;

    beforeEach(() => {
      signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
    });

    it('should return r component', () => {
      const r = signature.r();
      expect(r).toEqual(testR);
    });

    it('should return s component', () => {
      const s = signature.s();
      expect(s).toEqual(testS);
    });

    it('should return padded r component', () => {
      const r = signature.r(32);
      expect(r.length).toBe(32);
    });

    it('should return padded s component', () => {
      const s = signature.s(32);
      expect(s.length).toBe(32);
    });

    it('should throw error for insufficient padding length', () => {
      expect(() => signature.r(10)).toThrow('Length too small to hold parameter r');
    });
  });

  describe('Ethereum format conversion', () => {
    let signature: EthereumSecp256k1Signature;

    beforeEach(() => {
      signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
    });

    it('should convert to legacy format with chain ID', () => {
      const chainId = 1;
      const format = signature.toEthereumFormat(chainId);

      expect(format.r.length).toBe(32);
      expect(format.s.length).toBe(32);
      expect(typeof format.v).toBe('number');
      expect(format.v).toBe(chainId * 2 + 35 + testRecovery);
    });

    it('should convert to EIP-1559 format without chain ID', () => {
      const format = signature.toEthereumFormat();

      expect(format.r.length).toBe(32);
      expect(format.s.length).toBe(32);
      expect(format.v).toBeInstanceOf(Uint8Array);
    });

    it('should convert to ethereum-cryptography format', () => {
      const format = signature.toEthereumCryptographyFormat();

      expect(typeof format.r).toBe('bigint');
      expect(typeof format.s).toBe('bigint');
      expect(typeof format.recovery).toBe('number');
      expect(format.recovery).toBe(testRecovery);
    });
  });

  describe('Utility functions', () => {
    let signature: EthereumSecp256k1Signature;

    beforeEach(() => {
      signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
    });

    it('should check equality correctly', () => {
      const signature2 = new EthereumSecp256k1Signature(testR, testS, testRecovery);
      expect(signature.equals(signature2)).toBe(true);

      const signature3 = new EthereumSecp256k1Signature(testR, testS, 0);
      expect(signature.equals(signature3)).toBe(false);
    });

    it('should create from createEthereumSignature helper', () => {
      const fixedLengthData = new Uint8Array(65);
      fixedLengthData.set(testR, 0);
      fixedLengthData.set(testS, 32);
      fixedLengthData[64] = testRecovery;

      const cryptoBytes = BaseCryptoBytes.from(fixedLengthData);
      const ethSignature = createEthereumSignature(cryptoBytes);

      expect(ethSignature).toBeInstanceOf(EthereumSecp256k1Signature);
      expect(ethSignature.recovery).toBe(testRecovery);
    });

    it('should identify EthereumSecp256k1Signature with type guard', () => {
      expect(isEthereumSecp256k1Signature(signature)).toBe(true);
      expect(isEthereumSecp256k1Signature({})).toBe(false);
      expect(isEthereumSecp256k1Signature(null)).toBe(false);
    });
  });

  describe('Fixed length encoding', () => {
    it('should encode to 65-byte fixed length format', () => {
      const signature = new EthereumSecp256k1Signature(testR, testS, testRecovery);
      const fixedLength = signature.toFixedLength();

      expect(fixedLength.length).toBe(65);
      expect(fixedLength.slice(0, 32)).toEqual(signature.r(32));
      expect(fixedLength.slice(32, 64)).toEqual(signature.s(32));
      expect(fixedLength[64]).toBe(testRecovery);
    });

    it('should round-trip through fixed length encoding', () => {
      const original = new EthereumSecp256k1Signature(testR, testS, testRecovery);
      const fixedLength = original.toFixedLength();
      const restored = EthereumSecp256k1Signature.fromFixedLength(fixedLength);

      expect(original.equals(restored)).toBe(true);
    });
  });
});
