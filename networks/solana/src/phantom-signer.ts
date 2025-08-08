import { PublicKey } from './types';
import { Transaction } from './transaction';

declare var window: any;

// Phantom wallet interface types
interface PhantomProvider {
  isPhantom: boolean;
  connect(): Promise<{ publicKey: { toString(): string } }>;
  disconnect(): Promise<void>;
  signTransaction(transaction: any): Promise<any>;
  signAllTransactions(transactions: any[]): Promise<any[]>;
  publicKey: { toString(): string } | null;
  isConnected: boolean;
}

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}

export class PhantomSigner {
  private provider: PhantomProvider | null = null;
  private _publicKey: PublicKey | null = null;

  constructor() {
    if (typeof window !== 'undefined' && (window as any).solana?.isPhantom) {
      this.provider = (window as any).solana;
    }
  }

  get publicKey(): PublicKey {
    if (!this._publicKey) {
      throw new Error('Wallet not connected');
    }
    return this._publicKey;
  }

  get isAvailable(): boolean {
    return !!this.provider;
  }

  get isConnected(): boolean {
    return !!(this.provider?.isConnected && this._publicKey);
  }

  async connect(): Promise<void> {
    if (!this.provider) {
      throw new Error('Phantom wallet not found. Please install Phantom wallet extension.');
    }

    try {
      const response = await this.provider.connect();
      this._publicKey = new PublicKey(response.publicKey.toString());
    } catch (error) {
      throw new Error(`Failed to connect to Phantom wallet: ${(error as Error).message}`);
    }
  }

  async disconnect(): Promise<void> {
    if (!this.provider) {
      throw new Error('Phantom wallet not found');
    }

    try {
      await this.provider.disconnect();
      this._publicKey = null;
    } catch (error) {
      throw new Error(`Failed to disconnect from Phantom wallet: ${(error as Error).message}`);
    }
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    throw new Error('Direct message signing not supported with Phantom wallet. Use signTransaction instead.');
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    if (!this.provider) {
      throw new Error('Phantom wallet not found');
    }

    if (!this.isConnected) {
      throw new Error('Wallet not connected');
    }

    try {
      // For now, throw an error as we need to use Phantom's sendTransaction instead
      throw new Error('Please use sendTransaction method with Phantom wallet for complete transaction signing and sending.');
    } catch (error) {
      throw new Error(`Failed to sign transaction: ${(error as Error).message}`);
    }
  }

  // Method to send transaction directly via Phantom
  async sendTransaction(transaction: Transaction, connection: any): Promise<string> {
    if (!this.provider) {
      throw new Error('Phantom wallet not found');
    }

    if (!this.isConnected) {
      throw new Error('Wallet not connected');
    }

    try {
      // Use Phantom's signAndSendTransaction if available
      if ('signAndSendTransaction' in this.provider) {
        const result = await (this.provider as any).signAndSendTransaction(transaction);
        return result.signature;
      }
      
      // Fallback: sign transaction and send via our connection
      const signedTx = await this.provider.signTransaction(transaction);
      // This would need to be implemented properly with signature extraction
      throw new Error('Transaction signing with Phantom requires additional implementation');
    } catch (error) {
      throw new Error(`Failed to send transaction: ${(error as Error).message}`);
    }
  }
}

// Utility functions for Phantom wallet
export const getPhantomWallet = (): PhantomProvider | null => {
  if (typeof window !== 'undefined' && (window as any).solana?.isPhantom) {
    return (window as any).solana;
  }
  return null;
};

export const isPhantomInstalled = (): boolean => {
  return !!(typeof window !== 'undefined' && (window as any).solana?.isPhantom);
};