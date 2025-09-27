import { PublicKey } from './types';
import { Keypair } from './keypair';
import { Transaction } from './transaction';

export interface Signer {
  publicKey: PublicKey;
  sign(message: Uint8Array): Promise<Uint8Array>;
}

export class DirectSigner implements Signer {
  private keypair: Keypair;

  constructor(keypair: Keypair) {
    this.keypair = keypair;
  }

  get publicKey(): PublicKey {
    return this.keypair.publicKey;
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    return this.keypair.sign(message);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    transaction.sign(this.keypair);
    return transaction;
  }
}

export class OfflineSigner implements Signer {
  private keypair: Keypair;

  constructor(keypair: Keypair) {
    this.keypair = keypair;
  }

  get publicKey(): PublicKey {
    return this.keypair.publicKey;
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    return this.keypair.sign(message);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    const clone = new Transaction({
      feePayer: transaction.feePayer,
      recentBlockhash: transaction.recentBlockhash,
    });
    
    for (const instruction of transaction.instructions) {
      clone.add(instruction);
    }
    
    clone.sign(this.keypair);
    return clone;
  }
}