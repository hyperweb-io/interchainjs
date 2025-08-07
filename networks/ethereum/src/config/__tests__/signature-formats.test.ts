import { describe, it, expect } from '@jest/globals';
import {
  EthereumSignatureFormatFunction,
  PRESET_ETHEREUM_SIGNATURE_FORMATS,
  resolveEthereumSignatureFormat
} from '../signature-formats';
import { EthereumSecp256k1Signature } from '../../crypto';

describe('Ethereum Signature Format Functions', () => {
  // Create a test signature
  const testR = new Uint8Array(32);
  testR.fill(1);
  const testS = new Uint8Array(32);
  testS.fill(2);
  const testRecovery = 0;

  const testSignature = EthereumSecp256k1Signature.fromComponents(testR, testS, testRecovery);
  const testChainId = 1;

  describe('PRESET_ETHEREUM_SIGNATURE_FORMATS', () => {
    it('should have eip155 format that calculates EIP-155 v value', () => {
      const eip155Fn = PRESET_ETHEREUM_SIGNATURE_FORMATS['eip155'];
      expect(eip155Fn).toBeDefined();

      const result = eip155Fn(testSignature, testChainId);
      expect(result).toBeInstanceOf(Uint8Array);
      // EIP-155: v = chainId * 2 + 35 + recovery = 1 * 2 + 35 + 0 = 37
      // Convert back to number to verify
      let vNumber = 0;
      for (let i = 0; i < result.length; i++) {
        vNumber = (vNumber << 8) + result[i];
      }
      expect(vNumber).toBe(37);
    });

    it('should have simple format that returns recovery as Uint8Array', () => {
      const simpleFn = PRESET_ETHEREUM_SIGNATURE_FORMATS['simple'];
      expect(simpleFn).toBeDefined();

      const result = simpleFn(testSignature);
      expect(result).toBeInstanceOf(Uint8Array);
    });

    it('should have raw format that returns recovery value', () => {
      const rawFn = PRESET_ETHEREUM_SIGNATURE_FORMATS['raw'];
      expect(rawFn).toBeDefined();

      const result = rawFn(testSignature);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(1);
      expect(result[0]).toBe(testRecovery);
    });
  });

  describe('resolveEthereumSignatureFormat', () => {
    it('should resolve string format to function', () => {
      const formatFn = resolveEthereumSignatureFormat('eip155');
      expect(formatFn).toBeDefined();

      const result = formatFn!(testSignature, testChainId);
      expect(result).toBeInstanceOf(Uint8Array);
    });

    it('should return function as-is when passed a function', () => {
      const customFn: EthereumSignatureFormatFunction = () => new Uint8Array([42]);
      const resolved = resolveEthereumSignatureFormat(customFn);
      expect(resolved).toBe(customFn);
    });

    it('should use default when format is undefined', () => {
      const formatFn = resolveEthereumSignatureFormat(undefined, 'simple');
      expect(formatFn).toBeDefined();

      const result = formatFn!(testSignature);
      expect(result).toBeInstanceOf(Uint8Array);
    });

    it('should return undefined when both format and default are undefined', () => {
      const formatFn = resolveEthereumSignatureFormat(undefined, undefined);
      expect(formatFn).toBeUndefined();
    });

    it('should throw error for unknown string format', () => {
      expect(() => {
        resolveEthereumSignatureFormat('unknown');
      }).toThrow('Unknown Ethereum signature format: unknown');
    });

    it('should use default when unknown string format is provided', () => {
      const formatFn = resolveEthereumSignatureFormat('unknown', 'raw');
      expect(formatFn).toBeDefined();

      const result = formatFn!(testSignature);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result[0]).toBe(testRecovery);
    });
  });
});
