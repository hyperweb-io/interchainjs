import { resolveSignatureFormat, SignatureFormatFunction } from '@interchainjs/auth';
import { BaseCryptoBytes } from '@interchainjs/utils';

/**
 * Utility class for processing Injective signatures
 * Implements the configurable signature post-processing logic
 * that was previously hardcoded in EthSecp256k1Signature.toCompact()
 */
export class InjectiveSignatureProcessor {
  /**
   * Process a signature according to the specified format
   * @param signature - Raw signature bytes (typically 65 bytes with recovery)
   * @param format - Desired signature format (string or function)
   * @returns Processed signature bytes
   */
  static processSignature(
    signature: Uint8Array,
    format?: SignatureFormatFunction | string
  ): Uint8Array {
    const formatFn = resolveSignatureFormat(format, 'compact');
    return formatFn ? formatFn(signature) : signature;
  }



  /**
   * Split signature into components (r, s, recovery)
   * This implements the BytesUtils.splitSignature functionality mentioned in the requirements
   * @param signature - Signature bytes (65 bytes expected)
   * @returns Object with r, s, and recovery components
   */
  static splitSignature(signature: Uint8Array): {
    r: Uint8Array;
    s: Uint8Array;
    recovery?: number;
  } {
    if (signature.length === 64) {
      // Compact signature (no recovery byte)
      return {
        r: signature.slice(0, 32),
        s: signature.slice(32, 64)
      };
    } else if (signature.length === 65) {
      // Full signature with recovery byte
      return {
        r: signature.slice(0, 32),
        s: signature.slice(32, 64),
        recovery: signature[64]
      };
    } else {
      throw new Error(`Invalid signature length: ${signature.length}. Expected 64 or 65 bytes.`);
    }
  }

  /**
   * Combine signature components into a single byte array
   * @param r - R component (32 bytes)
   * @param s - S component (32 bytes)
   * @param recovery - Optional recovery byte
   * @returns Combined signature bytes
   */
  static combineSignature(r: Uint8Array, s: Uint8Array, recovery?: number): Uint8Array {
    if (r.length !== 32 || s.length !== 32) {
      throw new Error('R and S components must be 32 bytes each');
    }

    if (recovery !== undefined) {
      // Create 65-byte signature with recovery
      const signature = new Uint8Array(65);
      signature.set(r, 0);
      signature.set(s, 32);
      signature[64] = recovery;
      return signature;
    } else {
      // Create 64-byte signature without recovery
      const signature = new Uint8Array(64);
      signature.set(r, 0);
      signature.set(s, 32);
      return signature;
    }
  }

  /**
   * Convert signature to BaseCryptoBytes for use in workflows
   * @param signature - Signature bytes
   * @param format - Desired signature format
   * @returns BaseCryptoBytes instance
   */
  static toBaseCryptoBytes(
    signature: Uint8Array,
    format?: SignatureFormatFunction | string
  ): BaseCryptoBytes {
    const processedSignature = this.processSignature(signature, format);
    return new BaseCryptoBytes(processedSignature);
  }
}

/**
 * Legacy compatibility class that implements the EthSecp256k1Signature interface
 * This provides backward compatibility for code that expects the old toCompact() method
 */
export class EthSecp256k1Signature {
  constructor(public readonly signature: Uint8Array) {}

  /**
   * Convert signature to compact format
   * This method maintains backward compatibility with the original implementation
   * @returns Compact signature as BaseCryptoBytes (Key-like object)
   */
  toCompact(): BaseCryptoBytes {
    return InjectiveSignatureProcessor.toBaseCryptoBytes(
      this.signature,
      'compact'
    );
  }

  /**
   * Convert signature to full format
   * @returns Full signature as BaseCryptoBytes
   */
  toFull(): BaseCryptoBytes {
    return InjectiveSignatureProcessor.toBaseCryptoBytes(
      this.signature,
      'full'
    );
  }

  /**
   * Get raw signature
   * @returns Raw signature as BaseCryptoBytes
   */
  toRaw(): BaseCryptoBytes {
    return InjectiveSignatureProcessor.toBaseCryptoBytes(
      this.signature,
      'raw'
    );
  }

  /**
   * Process signature with configurable format
   * @param format - Desired signature format
   * @returns Processed signature as BaseCryptoBytes
   */
  process(format: SignatureFormatFunction | string): BaseCryptoBytes {
    return InjectiveSignatureProcessor.toBaseCryptoBytes(this.signature, format);
  }
}

/**
 * Type alias for backward compatibility
 * Represents the Key class mentioned in the original requirements
 */
export type Key = BaseCryptoBytes;

/**
 * Utility functions that implement the BytesUtils functionality mentioned in requirements
 */
export const BytesUtils = {
  /**
   * Split signature into components
   */
  splitSignature: InjectiveSignatureProcessor.splitSignature,

  /**
   * Combine signature components
   */
  combineSignature: InjectiveSignatureProcessor.combineSignature,

  /**
   * Convert to Uint8Array (arrayify equivalent)
   */
  arrayify: (data: Uint8Array): Uint8Array => data,

  /**
   * Concatenate byte arrays
   */
  concat: (arrays: Uint8Array[]): Uint8Array => {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
    }
    return result;
  }
};
