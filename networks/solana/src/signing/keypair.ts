import { PublicKey } from '../types/legacy';
import * as nacl from 'tweetnacl';
import * as bs58 from 'bs58';

export class Keypair {
  private _keypair: nacl.SignKeyPair;

  constructor(keypair?: nacl.SignKeyPair) {
    if (keypair) {
      this._keypair = keypair;
    } else {
      this._keypair = nacl.sign.keyPair();
    }
  }

  static generate(): Keypair {
    return new Keypair();
  }

  static fromSecretKey(secretKey: Uint8Array): Keypair {
    if (secretKey.length !== 64) {
      throw new Error('Secret key must be 64 bytes');
    }
    const keypair = nacl.sign.keyPair.fromSecretKey(secretKey);
    return new Keypair(keypair);
  }

  static fromSeed(seed: Uint8Array): Keypair {
    if (seed.length !== 32) {
      throw new Error('Seed must be 32 bytes');
    }
    const keypair = nacl.sign.keyPair.fromSeed(seed);
    return new Keypair(keypair);
  }

  static fromBase58(base58PrivateKey: string): Keypair {
    const decoded = bs58.decode(base58PrivateKey);
    return Keypair.fromSecretKey(decoded);
  }

  get publicKey(): PublicKey {
    return new PublicKey(this._keypair.publicKey);
  }

  get secretKey(): Uint8Array {
    return this._keypair.secretKey;
  }

  sign(message: Uint8Array): Uint8Array {
    return nacl.sign.detached(message, this._keypair.secretKey);
  }

  verify(message: Uint8Array, signature: Uint8Array): boolean {
    return nacl.sign.detached.verify(message, signature, this._keypair.publicKey);
  }
}