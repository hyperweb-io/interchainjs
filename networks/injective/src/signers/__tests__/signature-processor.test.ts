import { BytesUtils, InjectiveSignatureProcessor, EthSecp256k1Signature } from '../signature-processor';

describe('InjectiveSignatureProcessor', () => {
  describe('BytesUtils', () => {
    it('should split a 65-byte signature correctly', () => {
      // Create a mock 65-byte signature (32 bytes r + 32 bytes s + 1 byte recovery)
      const r = new Uint8Array(32).fill(1);
      const s = new Uint8Array(32).fill(2);
      const recovery = 27;
      const signature = new Uint8Array(65);
      signature.set(r, 0);
      signature.set(s, 32);
      signature[64] = recovery;

      const result = BytesUtils.splitSignature(signature);

      expect(result.r).toEqual(r);
      expect(result.s).toEqual(s);
      expect(result.recovery).toBe(recovery);
    });

    it('should split a 64-byte signature correctly', () => {
      // Create a mock 64-byte signature (32 bytes r + 32 bytes s)
      const r = new Uint8Array(32).fill(1);
      const s = new Uint8Array(32).fill(2);
      const signature = new Uint8Array(64);
      signature.set(r, 0);
      signature.set(s, 32);

      const result = BytesUtils.splitSignature(signature);

      expect(result.r).toEqual(r);
      expect(result.s).toEqual(s);
      expect(result.recovery).toBeUndefined();
    });

    it('should concatenate byte arrays correctly', () => {
      const array1 = new Uint8Array([1, 2, 3]);
      const array2 = new Uint8Array([4, 5, 6]);
      const array3 = new Uint8Array([7, 8]);

      const result = BytesUtils.concat([array1, array2, array3]);

      expect(result).toEqual(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]));
    });

    it('should combine signature components correctly', () => {
      const r = new Uint8Array(32).fill(1);
      const s = new Uint8Array(32).fill(2);
      const recovery = 27;

      const result = BytesUtils.combineSignature(r, s, recovery);

      expect(result.length).toBe(65);
      expect(result.slice(0, 32)).toEqual(r);
      expect(result.slice(32, 64)).toEqual(s);
      expect(result[64]).toBe(recovery);
    });
  });

  describe('Signature Processing', () => {
    it('should process signature with compact format using BytesUtils', () => {
      // Create a mock 65-byte signature
      const r = new Uint8Array(32).fill(1);
      const s = new Uint8Array(32).fill(2);
      const recovery = 27;
      const signature = new Uint8Array(65);
      signature.set(r, 0);
      signature.set(s, 32);
      signature[64] = recovery;

      const result = InjectiveSignatureProcessor.processSignature(signature, 'compact');

      // Should return 64-byte signature (r + s, no recovery)
      expect(result.length).toBe(64);
      expect(result.slice(0, 32)).toEqual(r);
      expect(result.slice(32, 64)).toEqual(s);
    });

    it('should process signature with full format', () => {
      // Create a mock 65-byte signature
      const signature = new Uint8Array(65).fill(1);

      const result = InjectiveSignatureProcessor.processSignature(signature, 'full');

      // Should return the same 65-byte signature
      expect(result).toEqual(signature);
    });

    it('should process signature with raw format', () => {
      const signature = new Uint8Array(65).fill(1);

      const result = InjectiveSignatureProcessor.processSignature(signature, 'raw');

      // Should return the same signature
      expect(result).toEqual(signature);
    });
  });

  describe('EthSecp256k1Signature', () => {
    it('should convert to compact format using BytesUtils', () => {
      // Create a mock 65-byte signature
      const r = new Uint8Array(32).fill(1);
      const s = new Uint8Array(32).fill(2);
      const recovery = 27;
      const signature = new Uint8Array(65);
      signature.set(r, 0);
      signature.set(s, 32);
      signature[64] = recovery;

      const ethSig = new EthSecp256k1Signature(signature);
      const result = ethSig.toCompact();

      // Should return BaseCryptoBytes with 64-byte signature
      expect(result.value.length).toBe(64);
      expect(result.value.slice(0, 32)).toEqual(r);
      expect(result.value.slice(32, 64)).toEqual(s);
    });

    it('should maintain backward compatibility with main branch behavior', () => {
      // This test verifies that the refactored implementation produces the same result
      // as the main branch EthSecp256k1Signature.toCompact() method
      const signature = new Uint8Array(65);
      // Fill with some test data
      signature.set(new Uint8Array(32).fill(0xaa), 0); // r component
      signature.set(new Uint8Array(32).fill(0xbb), 32); // s component
      signature[64] = 27; // recovery byte

      const ethSig = new EthSecp256k1Signature(signature);
      const result = ethSig.toCompact();

      // Verify the result matches expected compact format
      expect(result.value.length).toBe(64);
      expect(Array.from(result.value.slice(0, 32))).toEqual(new Array(32).fill(0xaa));
      expect(Array.from(result.value.slice(32, 64))).toEqual(new Array(32).fill(0xbb));
    });
  });
});
