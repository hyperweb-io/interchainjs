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
}