/**
 * Keypair Wallet Implementation
 */

import { ISolanaWallet } from '../../types/client';
import { PublicKey } from '../../types/common';
import { Keypair } from '../../signing/keypair';
import { SolanaWalletError } from '../../errors';

/**
 * Simple keypair-based wallet implementation
 */
export class KeypairWallet implements ISolanaWallet {
  private keypair: Keypair;
  private connected: boolean = false;

  constructor(keypair: Keypair) {
    this.keypair = keypair;
  }

  async connect(): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }

  async getPublicKey(): Promise<PublicKey> {
    if (!this.connected) {
      throw new SolanaWalletError('Wallet not connected', 'keypair');
    }
    return new PublicKey(this.keypair.publicKey.toBase58());
  }

  async signTransaction(transaction: any): Promise<any> {
    if (!this.connected) {
      throw new SolanaWalletError('Wallet not connected', 'keypair');
    }

    try {
      // Sign the transaction with the keypair
      const messageBytes = this.serializeTransaction(transaction);
      const signature = await this.keypair.sign(messageBytes);

      // Add signature to transaction
      transaction.signatures = [Array.from(signature)];
      return transaction;
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'keypair',
        error as Error
      );
    }
  }

  async signAllTransactions(transactions: any[]): Promise<any[]> {
    if (!this.connected) {
      throw new SolanaWalletError('Wallet not connected', 'keypair');
    }

    const signedTransactions: any[] = [];

    for (const transaction of transactions) {
      try {
        const signedTx = await this.signTransaction(transaction);
        signedTransactions.push(signedTx);
      } catch (error) {
        throw new SolanaWalletError(
          `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
          'keypair',
          error as Error
        );
      }
    }

    return signedTransactions;
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    if (!this.connected) {
      throw new SolanaWalletError('Wallet not connected', 'keypair');
    }

    try {
      return await this.keypair.sign(message);
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'keypair',
        error as Error
      );
    }
  }

  /**
   * Get the underlying keypair (use with caution)
   */
  getKeypair(): Keypair {
    return this.keypair;
  }

  private serializeTransaction(transaction: any): Uint8Array {
    // This is a simplified serialization
    // In a real implementation, this would use proper Solana transaction serialization
    const encoder = new TextEncoder();
    return encoder.encode(JSON.stringify(transaction));
  }
}

/**
 * Factory function to create a KeypairWallet
 */
export function createKeypairWallet(keypair: Keypair): KeypairWallet {
  return new KeypairWallet(keypair);
}
