import { ICryptoBytes } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { hexToBytes } from 'ethereum-cryptography/utils';

/**
 * Utility function to trim leading null bytes from a Uint8Array
 */
function trimLeadingNullBytes(inData: Uint8Array): Uint8Array {
  let numberOfLeadingNullBytes = 0;
  for (const byte of inData) {
    if (byte === 0x00) {
      numberOfLeadingNullBytes++;
    } else {
      break;
    }
  }
  return inData.slice(numberOfLeadingNullBytes);
}

/**
 * Helper method to convert values to padded hex strings
 */
function toHexPadded(value: number | bigint): string {
  const hex = value.toString(16);
  return hex.length % 2 === 0 ? hex : '0' + hex;
}

/**
 * A secp256k1 signature for Ethereum transactions
 * Similar to Cosmos ExtendedSecp256k1Signature but optimized for Ethereum use cases
 */
export class EthereumSecp256k1Signature implements ICryptoBytes {
  /**
   * Decode signature from the 65-byte fixed length encoding
   * r (32 bytes) | s (32 bytes) | recovery (1 byte)
   */
  public static fromFixedLength(data: Uint8Array): EthereumSecp256k1Signature {
    if (data.length !== 65) {
      throw new Error(`Got invalid data length ${data.length}. Expected 32 + 32 + 1 bytes for r, s, and recovery`);
    }
    return new EthereumSecp256k1Signature(
      trimLeadingNullBytes(data.slice(0, 32)),
      trimLeadingNullBytes(data.slice(32, 64)),
      data[64],
    );
  }

  /**
   * Create signature from r, s, and recovery components
   */
  public static fromComponents(r: Uint8Array, s: Uint8Array, recovery: number): EthereumSecp256k1Signature {
    return new EthereumSecp256k1Signature(r, s, recovery);
  }

  /**
   * Create signature from an existing ICryptoBytes object
   */
  public static fromICryptoBytes(signature: ICryptoBytes): EthereumSecp256k1Signature {
    return EthereumSecp256k1Signature.fromFixedLength(signature.value);
  }

  private readonly data: {
    readonly r: Uint8Array;
    readonly s: Uint8Array;
  };
  public readonly recovery: number;

  public constructor(r: Uint8Array, s: Uint8Array, recovery: number) {
    // Validate r component
    if (r.length > 32 || r.length === 0 || (r.length > 1 && r[0] === 0x00)) {
      throw new Error("Unsigned integer r must be encoded as unpadded big endian.");
    }

    // Validate s component
    if (s.length > 32 || s.length === 0 || (s.length > 1 && s[0] === 0x00)) {
      throw new Error("Unsigned integer s must be encoded as unpadded big endian.");
    }

    // Validate recovery parameter
    if (!Number.isInteger(recovery)) {
      throw new Error("The recovery parameter must be an integer.");
    }

    if (recovery < 0 || recovery > 3) {
      throw new Error("The recovery parameter must be one of 0, 1, 2, 3.");
    }

    this.data = {
      r: r,
      s: s,
    };
    this.recovery = recovery;
  }

  // ICryptoBytes interface implementation
  public get value(): Uint8Array {
    return this.toFixedLength();
  }

  public toHex(): string {
    const bytes = this.toFixedLength();
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  public toPrefixedHex(): string {
    return '0x' + this.toHex();
  }

  public toBase64(): string {
    const bytes = this.toFixedLength();
    return btoa(String.fromCharCode(...bytes));
  }

  public toBigInt(): bigint {
    const bytes = this.toFixedLength();
    let result = 0n;
    for (const byte of bytes) {
      result = (result << 8n) + BigInt(byte);
    }
    return result;
  }

  public toNumber(): number {
    return Number(this.toBigInt());
  }

  public toBech32(prefix: string, limit?: number): string {
    // For signatures, bech32 encoding is not typically used, but we implement it for completeness
    const bytes = this.toFixedLength();
    // This would require bech32 library, but for now we'll throw an error
    throw new Error('Bech32 encoding not implemented for signatures');
  }

  public slice(start?: number, end?: number): ICryptoBytes {
    const bytes = this.toFixedLength();
    const sliced = bytes.slice(start, end);
    return BaseCryptoBytes.from(sliced);
  }

  public concat(other: ICryptoBytes): ICryptoBytes {
    const thisBytes = this.toFixedLength();
    const otherBytes = other.value;
    const combined = new Uint8Array(thisBytes.length + otherBytes.length);
    combined.set(thisBytes);
    combined.set(otherBytes, thisBytes.length);
    return BaseCryptoBytes.from(combined);
  }

  /**
   * Get the r component with optional padding
   */
  public r(length?: number): Uint8Array {
    if (length === undefined) {
      return this.data.r;
    } else {
      const paddingLength = length - this.data.r.length;
      if (paddingLength < 0) {
        throw new Error("Length too small to hold parameter r");
      }
      const padding = new Uint8Array(paddingLength);
      return new Uint8Array([...padding, ...this.data.r]);
    }
  }

  /**
   * Get the s component with optional padding
   */
  public s(length?: number): Uint8Array {
    if (length === undefined) {
      return this.data.s;
    } else {
      const paddingLength = length - this.data.s.length;
      if (paddingLength < 0) {
        throw new Error("Length too small to hold parameter s");
      }
      const padding = new Uint8Array(paddingLength);
      return new Uint8Array([...padding, ...this.data.s]);
    }
  }

  /**
   * Encode signature as 65-byte fixed length format
   * r (32 bytes) | s (32 bytes) | recovery (1 byte)
   */
  public toFixedLength(): Uint8Array {
    return new Uint8Array([...this.r(32), ...this.s(32), this.recovery]);
  }

  /**
   * Get the signature in the format expected by Ethereum transactions
   * For legacy transactions: v = chainId * 2 + 35 + recovery (encoded as bytes)
   * For EIP-1559 transactions: v = recovery (0 or 1)
   * R and S values are trimmed of leading zeros for proper RLP encoding
   */
  public toEthereumFormat(chainId?: number): { r: Uint8Array; s: Uint8Array; v: Uint8Array } {
    // Trim leading zeros from R and S for proper RLP encoding
    const r = trimLeadingNullBytes(this.r(32));
    const s = trimLeadingNullBytes(this.s(32));

    if (chainId !== undefined) {
      // Legacy transaction format (EIP-155)
      const vNumber = chainId * 2 + 35 + this.recovery;
      const v = hexToBytes(toHexPadded(vNumber));
      return { r, s, v };
    } else {
      // EIP-1559 format - v is just the recovery bit
      const v = this.recovery === 0 ? new Uint8Array([]) : new Uint8Array([this.recovery]);
      return { r, s, v };
    }
  }

  /**
   * Convert to a format compatible with ethereum-cryptography library
   */
  public toEthereumCryptographyFormat(): { r: bigint; s: bigint; recovery: number } {
    const rBigInt = BigInt('0x' + Array.from(this.r(32)).map(b => b.toString(16).padStart(2, '0')).join(''));
    const sBigInt = BigInt('0x' + Array.from(this.s(32)).map(b => b.toString(16).padStart(2, '0')).join(''));

    return {
      r: rBigInt,
      s: sBigInt,
      recovery: this.recovery
    };
  }

  /**
   * Check if this signature is equal to another signature
   */
  public equals(other: EthereumSecp256k1Signature): boolean {
    return (
      this.recovery === other.recovery &&
      this.r().every((byte, index) => byte === other.r()[index]) &&
      this.s().every((byte, index) => byte === other.s()[index])
    );
  }



  /**
   * Create signature from hex string
   */
  public static fromHex(hex: string): EthereumSecp256k1Signature {
    const cleanHex = hex.startsWith('0x') ? hex.slice(2) : hex;
    if (cleanHex.length !== 130) { // 65 bytes * 2 hex chars
      throw new Error(`Invalid hex signature length: ${cleanHex.length}. Expected 130 characters.`);
    }

    const bytes = new Uint8Array(65);
    for (let i = 0; i < 65; i++) {
      bytes[i] = parseInt(cleanHex.substring(i * 2, i * 2 + 2), 16);
    }

    return EthereumSecp256k1Signature.fromFixedLength(bytes);
  }
}

/**
 * Create an EthereumSecp256k1Signature from a generic ICryptoBytes signature
 * This is useful for converting signatures from wallet implementations
 */
export function createEthereumSignature(signature: ICryptoBytes): EthereumSecp256k1Signature {
  return EthereumSecp256k1Signature.fromICryptoBytes(signature);
}

/**
 * Type guard to check if an object is an EthereumSecp256k1Signature
 */
export function isEthereumSecp256k1Signature(obj: any): obj is EthereumSecp256k1Signature {
  return obj instanceof EthereumSecp256k1Signature;
}
