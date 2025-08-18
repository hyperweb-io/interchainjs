/**
 * Phantom Wallet Implementation
 */

import {
  ISolanaWallet,
  PhantomWallet as IPhantomWallet
} from '../../types/client';
import { PublicKey } from '../../types/common';
import { SolanaWalletError } from '../../errors';

// Browser-specific types
declare var window: any;

interface PhantomProvider {
  isPhantom: boolean;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
  signTransaction(transaction: any): Promise<any>;
  signAllTransactions(transactions: any[]): Promise<any[]>;
  signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
  signAndSendTransaction?(transaction: any): Promise<{ signature: string }>;
  publicKey: { toString(): string } | null;
  isConnected: boolean;
}

// Global Window interface is already declared in phantom-signer.ts

/**
 * Phantom wallet implementation
 */
export class PhantomWallet implements ISolanaWallet, IPhantomWallet {
  private provider: PhantomProvider | null = null;
  private _publicKey: PublicKey | null = null;

  constructor() {
    if (typeof window !== 'undefined' && window.solana?.isPhantom) {
      this.provider = window.solana;
    }
  }

  get isPhantom(): boolean {
    return true;
  }

  get publicKey(): PublicKey | null {
    return this._publicKey;
  }

  get isAvailable(): boolean {
    return !!this.provider;
  }

  async connect(): Promise<void> {
    if (!this.provider) {
      throw new SolanaWalletError(
        'Phantom wallet not found. Please install Phantom wallet extension.',
        'phantom'
      );
    }

    try {
      const response = await this.provider.connect();
      this._publicKey = new PublicKey(response.publicKey.toString());
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to connect to Phantom wallet: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }

  async disconnect(): Promise<void> {
    if (!this.provider) {
      throw new SolanaWalletError('Phantom wallet not found', 'phantom');
    }

    try {
      await this.provider.disconnect();
      this._publicKey = null;
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to disconnect from Phantom wallet: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }

  isConnected(): boolean {
    return !!(this.provider?.isConnected && this._publicKey);
  }

  async getPublicKey(): Promise<PublicKey> {
    if (!this._publicKey) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }
    return this._publicKey;
  }

  async signTransaction(transaction: any): Promise<any> {
    if (!this.provider) {
      throw new SolanaWalletError('Phantom wallet not found', 'phantom');
    }

    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      return await this.provider.signTransaction(transaction);
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }

  async signAllTransactions(transactions: any[]): Promise<any[]> {
    if (!this.provider) {
      throw new SolanaWalletError('Phantom wallet not found', 'phantom');
    }

    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      return await this.provider.signAllTransactions(transactions);
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign transactions: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    if (!this.provider) {
      throw new SolanaWalletError('Phantom wallet not found', 'phantom');
    }

    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      if ('signMessage' in this.provider) {
        const result = await this.provider.signMessage(message);
        return result.signature;
      } else {
        throw new SolanaWalletError('Message signing not supported by this version of Phantom', 'phantom');
      }
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }

  /**
   * Send transaction directly via Phantom (sign and broadcast)
   */
  async signAndSendTransaction(transaction: any): Promise<string> {
    if (!this.provider) {
      throw new SolanaWalletError('Phantom wallet not found', 'phantom');
    }

    if (!this.isConnected()) {
      throw new SolanaWalletError('Wallet not connected', 'phantom');
    }

    try {
      if ('signAndSendTransaction' in this.provider) {
        const result = await this.provider.signAndSendTransaction!(transaction);
        return result.signature;
      } else {
        throw new SolanaWalletError('signAndSendTransaction not supported by this version of Phantom', 'phantom');
      }
    } catch (error) {
      throw new SolanaWalletError(
        `Failed to sign and send transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'phantom',
        error as Error
      );
    }
  }
}
