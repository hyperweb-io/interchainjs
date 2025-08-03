import { describe, it, expect } from '@jest/globals';
import { 
  SignatureFormatFunction, 
  PRESET_SIGNATURE_FORMATS, 
  resolveSignatureFormat 
} from '../signature-formats';

describe('Signature Format Functions', () => {
  const testSignature65 = new Uint8Array(65);
  testSignature65.fill(1, 0, 32); // r
  testSignature65.fill(2, 32, 64); // s
  testSignature65[64] = 27; // recovery

  const testSignature64 = new Uint8Array(64);
  testSignature64.fill(1, 0, 32); // r
  testSignature64.fill(2, 32, 64); // s

  describe('PRESET_SIGNATURE_FORMATS', () => {
    it('should have compact format that trims recovery byte', () => {
      const compactFn = PRESET_SIGNATURE_FORMATS['compact'];
      expect(compactFn).toBeDefined();
      
      const result = compactFn(testSignature65);
      expect(result.length).toBe(64);
      expect(result).toEqual(testSignature64);
    });

    it('should have full format that returns signature as-is', () => {
      const fullFn = PRESET_SIGNATURE_FORMATS['full'];
      expect(fullFn).toBeDefined();
      
      const result = fullFn(testSignature65);
      expect(result.length).toBe(65);
      expect(result).toEqual(testSignature65);
    });

    it('should have raw format that returns signature as-is', () => {
      const rawFn = PRESET_SIGNATURE_FORMATS['raw'];
      expect(rawFn).toBeDefined();
      
      const result = rawFn(testSignature65);
      expect(result.length).toBe(65);
      expect(result).toEqual(testSignature65);
    });
  });

  describe('resolveSignatureFormat', () => {
    it('should resolve string format to function', () => {
      const formatFn = resolveSignatureFormat('compact');
      expect(formatFn).toBeDefined();
      
      const result = formatFn!(testSignature65);
      expect(result.length).toBe(64);
    });

    it('should return function as-is when passed a function', () => {
      const customFn: SignatureFormatFunction = (sig) => sig.slice(0, 32);
      const resolved = resolveSignatureFormat(customFn);
      expect(resolved).toBe(customFn);
    });

    it('should use default when format is undefined', () => {
      const formatFn = resolveSignatureFormat(undefined, 'full');
      expect(formatFn).toBeDefined();
      
      const result = formatFn!(testSignature65);
      expect(result.length).toBe(65);
    });

    it('should return undefined when both format and default are undefined', () => {
      const formatFn = resolveSignatureFormat(undefined, undefined);
      expect(formatFn).toBeUndefined();
    });

    it('should throw error for unknown string format', () => {
      expect(() => {
        resolveSignatureFormat('unknown');
      }).toThrow('Unknown signature format: unknown');
    });

    it('should use default when unknown string format is provided', () => {
      const formatFn = resolveSignatureFormat('unknown', 'compact');
      expect(formatFn).toBeDefined();
      
      const result = formatFn!(testSignature65);
      expect(result.length).toBe(64);
    });
  });
});
