import BN from 'bn.js';
import * as bs58 from 'bs58';

/**
 * Common types shared across the Solana implementation
 */

export interface PublicKeyInitData {
  _bn: BN;
}

export interface KeypairData {
  publicKey: Uint8Array;
  secretKey: Uint8Array;
}

export interface TransactionInstruction {
  keys: Array<{
    pubkey: PublicKey;
    isSigner: boolean;
    isWritable: boolean;
  }>;
  programId: PublicKey;
  data: Uint8Array;
}

export interface TransactionMessage {
  accountKeys: PublicKey[];
  recentBlockhash: string;
  instructions: TransactionInstruction[];
}

export interface TransactionSignature {
  signature: string;
}

export interface AccountInfo {
  executable: boolean;
  lamports: number;
  owner: string;
  rentEpoch: number;
  data: string[];
}

/**
 * Solana PublicKey implementation
 */
export class PublicKey {
  private _bn: BN;

  constructor(value: string | number[] | Uint8Array | Buffer) {
    if (typeof value === 'string') {
      this._bn = this.fromBase58(value);
    } else if (Array.isArray(value) || value instanceof Uint8Array || Buffer.isBuffer(value)) {
      this._bn = new BN(value);
    } else {
      throw new Error('Invalid public key input');
    }
  }

  private fromBase58(base58: string): BN {
    const decoded = bs58.decode(base58);
    return new BN(decoded);
  }

  toBase58(): string {
    const array = this._bn.toArray();
    if (array.length < 32) {
      const buffer = Buffer.alloc(32);
      Buffer.from(array).copy(buffer, 32 - array.length);
      return bs58.encode(buffer);
    }
    return bs58.encode(array);
  }

  toBuffer(): Buffer {
    const array = this._bn.toArray();
    if (array.length < 32) {
      const buffer = Buffer.alloc(32);
      Buffer.from(array).copy(buffer, 32 - array.length);
      return buffer;
    }
    return Buffer.from(array);
  }

  equals(other: PublicKey): boolean {
    return this._bn.eq(other._bn);
  }

  toString(): string {
    return this.toBase58();
  }

  static unique(): PublicKey {
    const crypto = require('crypto');
    const randomBytes = crypto.randomBytes(32);
    return new PublicKey(randomBytes);
  }

  static async findProgramAddress(seeds: Uint8Array[], programId: PublicKey): Promise<[PublicKey, number]> {
    const MAX_SEED_LENGTH = 32;

    // Validate seed length
    for (const seed of seeds) {
      if (seed.length > MAX_SEED_LENGTH) {
        throw new Error(`Max seed length exceeded: ${seed.length} > ${MAX_SEED_LENGTH}`);
      }
    }

    let nonce = 255;
    while (nonce >= 0) {
      try {
        // Create buffer for hashing: seeds + nonce + programId + marker
        let totalLength = 0;
        for (const seed of seeds) {
          totalLength += seed.length;
        }
        totalLength += 1; // nonce byte
        totalLength += 32; // program ID
        totalLength += 21; // "ProgramDerivedAddress" marker length

        const toHash = new Uint8Array(totalLength);
        let offset = 0;

        // Add all seeds
        for (const seed of seeds) {
          toHash.set(seed, offset);
          offset += seed.length;
        }

        // Add nonce as single byte
        toHash[offset] = nonce;
        offset += 1;

        // Add program ID
        const programIdBuffer = programId.toBuffer();
        toHash.set(programIdBuffer, offset);
        offset += 32;

        // Add the PDA marker string
        const markerBytes = new TextEncoder().encode('ProgramDerivedAddress');
        toHash.set(markerBytes, offset);

        // Hash with SHA256
        const crypto = require('crypto');
        const hash = crypto.createHash('sha256').update(toHash).digest();

        // Check if point is on the Ed25519 curve - if not, it's a valid PDA
        if (!this.isOnEd25519Curve(hash)) {
          return [new PublicKey(hash), nonce];
        }
      } catch (error) {
        // Continue to next nonce on any error
      }

      nonce--;
    }

    throw new Error('Unable to find a viable program address nonce');
  }

  private static isOnEd25519Curve(point: Buffer): boolean {
    if (point.length !== 32) {
      return false;
    }

    try {
      // Ed25519 uses the twisted Edwards curve equation: -x² + y² = 1 + dx²y² 
      // where d = -121665/121666 mod p, and p = 2^255 - 19
      
      // Extract the y-coordinate and sign bit
      const yBytes = new Uint8Array(point);
      const signBit = (yBytes[31] & 0x80) !== 0;
      yBytes[31] &= 0x7f; // Clear the sign bit
      
      // Convert y-coordinate to BigInt (little-endian)
      let y = BigInt(0);
      for (let i = 0; i < 32; i++) {
        y += BigInt(yBytes[i]) << BigInt(8 * i);
      }

      // Ed25519 field prime: p = 2^255 - 19
      const p = (BigInt(1) << BigInt(255)) - BigInt(19);
      
      // Check if y >= p (invalid field element)
      if (y >= p) {
        return false;
      }

      // Ed25519 curve parameter: d = -121665/121666 mod p
      // Precomputed: d = 37095705934669439343138083508754565189542113879843219016388785533085940283555
      const d = BigInt('37095705934669439343138083508754565189542113879843219016388785533085940283555');

      // Calculate x² from the curve equation: x² = (y² - 1) / (d * y² + 1)
      const y_squared = (y * y) % p;
      const numerator = (y_squared - BigInt(1) + p) % p; // Ensure positive
      const denominator = (d * y_squared + BigInt(1)) % p;

      // Check if denominator is zero (invalid point)
      if (denominator === BigInt(0)) {
        return false;
      }

      // Calculate modular inverse of denominator
      const denominatorInv = this.modInverse(denominator, p);
      if (denominatorInv === null) {
        return false;
      }

      const x_squared = (numerator * denominatorInv) % p;

      // Check if x² is a quadratic residue (has a square root)
      if (!this.isQuadraticResidue(x_squared, p)) {
        return false;
      }

      // Calculate x from x²
      const x = this.modSqrt(x_squared, p);
      if (x === null) {
        return false;
      }

      // Check if the sign bit matches the computed x coordinate's parity
      const computedSignBit = (x & BigInt(1)) !== BigInt(0);
      if (signBit !== computedSignBit) {
        // Try the negative x
        const negX = (p - x) % p;
        const negSignBit = (negX & BigInt(1)) !== BigInt(0);
        if (signBit !== negSignBit) {
          return false;
        }
      }

      return true;
    } catch (error) {
      // If any computation fails, assume not on curve
      return false;
    }
  }

  // Helper function to compute modular inverse using extended Euclidean algorithm
  private static modInverse(a: bigint, m: bigint): bigint | null {
    if (a < 0) a = (a % m + m) % m;
    
    const originalM = m;
    let [oldR, r] = [a, m];
    let [oldS, s] = [BigInt(1), BigInt(0)];

    while (r !== BigInt(0)) {
      const quotient = oldR / r;
      [oldR, r] = [r, oldR - quotient * r];
      [oldS, s] = [s, oldS - quotient * s];
    }

    if (oldR > BigInt(1)) return null; // No inverse exists
    if (oldS < 0) oldS += originalM;

    return oldS;
  }

  // Helper function to check if a number is a quadratic residue modulo p
  private static isQuadraticResidue(n: bigint, p: bigint): boolean {
    if (n === BigInt(0)) return true;
    // Use Legendre symbol: n^((p-1)/2) mod p should be 1
    const exponent = (p - BigInt(1)) / BigInt(2);
    return this.modPow(n, exponent, p) === BigInt(1);
  }

  // Helper function for modular square root using Tonelli-Shanks algorithm
  private static modSqrt(n: bigint, p: bigint): bigint | null {
    if (n === BigInt(0)) return BigInt(0);
    if (!this.isQuadraticResidue(n, p)) return null;

    // For p = 2^255 - 19, we can use the fact that p ≡ 3 (mod 4)
    // So sqrt(n) = n^((p+1)/4) mod p
    const exponent = (p + BigInt(1)) / BigInt(4);
    return this.modPow(n, exponent, p);
  }

  // Helper function for modular exponentiation
  private static modPow(base: bigint, exponent: bigint, modulus: bigint): bigint {
    let result = BigInt(1);
    base = base % modulus;
    
    while (exponent > BigInt(0)) {
      if (exponent & BigInt(1)) {
        result = (result * base) % modulus;
      }
      exponent = exponent >> BigInt(1);
      base = (base * base) % modulus;
    }
    
    return result;
  }
}
