import { resolveSignatureFormat, SignatureFormatFunction } from '@interchainjs/auth';
import { BaseCryptoBytes } from '@interchainjs/utils';

/**
 * Utility functions that implement the BytesUtils functionality mentioned in requirements
 * Defined first to avoid forward reference issues
 */
export const BytesUtils = {
  /**
   * Split signature into components
   */
  splitSignature: (signature: Uint8Array): {
    r: Uint8Array;
    s: Uint8Array;
    recovery?: number;
  } => {
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
  },

  /**
   * Combine signature components
   */
  combineSignature: (r: Uint8Array, s: Uint8Array, recovery?: number): Uint8Array => {
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
  },

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

/**
 * Injective signature format function type
 * Takes raw signature bytes and returns processed signature bytes
 */
export type InjectiveSignatureFormatFunction = (signature: Uint8Array) => Uint8Array;

/**
 * Injective signature format implementations using BytesUtils
 * These implement the main branch EthSecp256k1Signature.toCompact() behavior
 */
const compactFormat: InjectiveSignatureFormatFunction = (signature: Uint8Array) => {
  // Split signature into components using BytesUtils
  const splitSig = BytesUtils.splitSignature(signature);

  // Concatenate r and s components (excluding recovery byte) using BytesUtils
  const result = BytesUtils.concat([splitSig.r, splitSig.s]);

  // Ensure it's a proper Uint8Array using BytesUtils
  return BytesUtils.arrayify(result);
};

const fullFormat: InjectiveSignatureFormatFunction = (signature: Uint8Array) => {
  // For full format, return the signature as-is but ensure it includes recovery byte
  if (signature.length === 64) {
    // If no recovery byte, we can't create a full signature without additional info
    throw new Error('Cannot create full signature format from compact signature without recovery information');
  }
  return BytesUtils.arrayify(signature);
};

const rawFormat: InjectiveSignatureFormatFunction = (signature: Uint8Array) => {
  // Raw format returns the signature exactly as provided
  return BytesUtils.arrayify(signature);
};

/**
 * Preset Injective signature format functions mapping
 * These implement the InjectiveSignatureFormat enum (COMPACT, FULL, RAW) mentioned in requirements
 */
export const PRESET_INJECTIVE_SIGNATURE_FORMATS: Record<string, InjectiveSignatureFormatFunction> = {
  'compact': compactFormat,
  'full': fullFormat,
  'raw': rawFormat,
};

/**
 * Resolve Injective signature format function
 * @param formatFn - Format function or string identifier
 * @param defaultFn - Default format to use if formatFn is not provided
 * @returns Resolved signature format function
 */
export function resolveInjectiveSignatureFormat(
  formatFn?: InjectiveSignatureFormatFunction | string,
  defaultFn?: InjectiveSignatureFormatFunction | string
): InjectiveSignatureFormatFunction | undefined {
  if (!formatFn) {
    if (!defaultFn) return undefined;
    return resolveInjectiveSignatureFormat(defaultFn);
  }
  if (typeof formatFn === 'string') {
    if (!PRESET_INJECTIVE_SIGNATURE_FORMATS[formatFn]) {
      if (defaultFn) {
        return resolveInjectiveSignatureFormat(defaultFn);
      } else {
        throw new Error(`Unknown Injective signature format: ${formatFn}`);
      }
    }
    return PRESET_INJECTIVE_SIGNATURE_FORMATS[formatFn];
  }
  return formatFn;
}

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
    // First try to resolve as Injective-specific format
    if (typeof format === 'string' && PRESET_INJECTIVE_SIGNATURE_FORMATS[format]) {
      const injectiveFormatFn = resolveInjectiveSignatureFormat(format, 'compact');
      return injectiveFormatFn ? injectiveFormatFn(signature) : signature;
    }

    // Fall back to generic signature format resolution
    const formatFn = resolveSignatureFormat(format, 'compact');
    return formatFn ? formatFn(signature) : signature;
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


