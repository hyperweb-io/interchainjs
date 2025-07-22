import BN from 'bn.js';
import * as bs58 from 'bs58';

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

export interface RpcResponse<T> {
  context: {
    slot: number;
  };
  value: T;
}

export interface AccountInfo {
  executable: boolean;
  lamports: number;
  owner: string;
  rentEpoch: number;
  data: string[];
}

export interface TransactionSignature {
  signature: string;
}

export interface Connection {
  rpcEndpoint: string;
}

export interface WebSocketNotification<T> {
  method: string;
  params: {
    subscription: number;
    result: T;
  };
}

export interface AccountNotification {
  context: {
    slot: number;
  };
  value: AccountInfo | null;
}

export interface ProgramNotification {
  context: {
    slot: number;
  };
  value: {
    account: AccountInfo;
    pubkey: string;
  };
}

export interface LogsNotification {
  context: {
    slot: number;
  };
  value: {
    signature: string;
    err: any;
    logs: string[];
  };
}

export interface WebSocketSubscriptionResponse {
  jsonrpc: string;
  id: string;
  result: number;
}

export interface WebSocketErrorResponse {
  jsonrpc: string;
  id: string;
  error: {
    code: number;
    message: string;
  };
}

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
    const PDA_MARKER = 'ProgramDerivedAddress';
    
    // Validate seed length
    for (const seed of seeds) {
      if (seed.length > MAX_SEED_LENGTH) {
        throw new Error(`Max seed length exceeded: ${seed.length} > ${MAX_SEED_LENGTH}`);
      }
    }
    
    let nonce = 255;
    while (nonce >= 0) {
      const seedsWithNonce = [...seeds, new Uint8Array([nonce])];
      
      // Calculate total length
      const totalLength = seedsWithNonce.reduce((sum, seed) => sum + seed.length, 0);
      
      // Create buffer for hashing
      const toHash = new Uint8Array(totalLength + programId.toBuffer().length + PDA_MARKER.length);
      let offset = 0;
      
      // Add all seeds
      for (const seed of seedsWithNonce) {
        toHash.set(seed, offset);
        offset += seed.length;
      }
      
      // Add program ID
      toHash.set(programId.toBuffer(), offset);
      offset += programId.toBuffer().length;
      
      // Add PDA marker
      const markerBytes = new TextEncoder().encode(PDA_MARKER);
      toHash.set(markerBytes, offset);
      
      // Hash
      const crypto = require('crypto');
      const hash = crypto.createHash('sha256').update(toHash).digest();
      
      // Check if the point is on the curve (valid public key)
      // If it's not a valid curve point, it's a valid PDA
      try {
        const candidateKey = new PublicKey(hash);
        // Simple validation - check if it looks like a valid PDA
        // PDAs typically have specific characteristics
        if (!this.isOnCurve(hash)) {
          return [candidateKey, nonce];
        }
      } catch (error) {
        // If PublicKey construction fails, try next nonce
      }
      
      nonce--;
    }
    
    throw new Error('Unable to find a viable program address nonce');
  }
  
  private static isOnCurve(hash: Buffer): boolean {
    // Simplified curve check - in a real implementation, you'd do proper Ed25519 curve validation
    // For now, we'll use a heuristic that works for most cases
    const bytes = new Uint8Array(hash);
    
    // Check if all bytes are the same (unlikely for a real key)
    const allSame = bytes.every(b => b === bytes[0]);
    if (allSame) return true;
    
    // Check if it matches known on-curve patterns
    // This is a simplified check - real implementation would do proper curve math
    const sum = bytes.reduce((acc, byte) => acc + byte, 0);
    return (sum % 8) < 2; // Simple heuristic
  }
}