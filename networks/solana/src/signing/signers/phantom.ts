/**
 * Phantom Signer Implementation
 */

import {
  ISolanaSigner,
  SolanaAccount,
  SolanaSignArgs,
  SolanaBroadcastOpts,
  SolanaBroadcastResponse
} from '../../types/client';
import { PublicKey } from '../../types/common';
import { PhantomWallet } from '../../wallets/implementations/phantom';
import { SolanaWorkflowBuilder } from '../workflows/builder';
import { SolanaSigningError, SolanaWalletError } from '../../errors';

/**
 * Phantom signer that uses Phantom wallet for signing and broadcasting
 */
export class PhantomSigner implements ISolanaSigner {
  private wallet: PhantomWallet;

  constructor() {
    this.wallet = new PhantomWallet();
  }

  get address(): string {
    const publicKey = this.wallet.publicKey;
    if (!publicKey) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }
    return publicKey.toBase58();
  }

  get publicKey(): PublicKey {
    const publicKey = this.wallet.publicKey;
    if (!publicKey) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }
    return publicKey;
  }

  async getAccount(): Promise<SolanaAccount> {
    return {
      address: this.address,
      publicKey: this.publicKey
    };
  }

  async connect(): Promise<void> {
    await this.wallet.connect();
  }

  async disconnect(): Promise<void> {
    await this.wallet.disconnect();
  }

  isConnected(): boolean {
    return this.wallet.isConnected();
  }

  async signAndBroadcast(
    args: SolanaSignArgs,
    opts?: SolanaBroadcastOpts
  ): Promise<SolanaBroadcastResponse> {
    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      // Build transaction using workflow
      const workflowBuilder = SolanaWorkflowBuilder.create(this, args);
      const transaction = await workflowBuilder.build();

      // Use Phantom's signAndSendTransaction for direct broadcasting
      const signature = await this.wallet.signAndSendTransaction(transaction);

      return {
        transactionHash: signature,
        rawLog: 'Transaction signed and broadcasted via Phantom wallet'
      };
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign and broadcast transaction with Phantom: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      return await this.wallet.signMessage(message);
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign message with Phantom: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  async signTransaction(transaction: any): Promise<any> {
    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      return await this.wallet.signTransaction(transaction);
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transaction with Phantom: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  /**
   * Sign multiple transactions
   */
  async signAllTransactions(transactions: any[]): Promise<any[]> {
    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      return await this.wallet.signAllTransactions(transactions);
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transactions with Phantom: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  /**
   * Check if Phantom wallet is available
   */
  static isAvailable(): boolean {
    return new PhantomWallet().isAvailable;
  }

  /**
   * Get the underlying Phantom wallet instance
   */
  getWallet(): PhantomWallet {
    return this.wallet;
  }
}

/**
 * Factory function to create a PhantomSigner
 */
export function createPhantomSigner(): PhantomSigner {
  return new PhantomSigner();
}

/**
 * Utility functions for backward compatibility
 */
export const getPhantomWallet = () => {
  return new PhantomWallet();
};

export const isPhantomInstalled = (): boolean => {
  return PhantomSigner.isAvailable();
};
