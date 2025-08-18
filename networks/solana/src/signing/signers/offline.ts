/**
 * Offline Signer Implementation
 */

import {
  ISolanaSigner,
  SolanaAccount,
  SolanaSignArgs,
  SolanaBroadcastOpts,
  SolanaBroadcastResponse
} from '../../types/client';
import { PublicKey } from '../../types/common';
import { Keypair } from '../keypair';
import { Transaction } from '../../types/transaction';
import { SolanaWorkflowBuilder } from '../workflows/builder';
import { SolanaSigningError } from '../../errors';

/**
 * Offline signer that creates signed transactions without broadcasting
 */
export class OfflineSigner implements ISolanaSigner {
  private keypair: Keypair;

  constructor(keypair: Keypair) {
    this.keypair = keypair;
  }

  get address(): string {
    return this.keypair.publicKey.toBase58();
  }

  get publicKey(): PublicKey {
    return new PublicKey(this.keypair.publicKey.toBase58());
  }

  async getAccount(): Promise<SolanaAccount> {
    return {
      address: this.address,
      publicKey: this.publicKey
    };
  }

  async signAndBroadcast(
    args: SolanaSignArgs,
    opts?: SolanaBroadcastOpts
  ): Promise<SolanaBroadcastResponse> {
    try {
      // Build transaction using workflow
      const workflowBuilder = SolanaWorkflowBuilder.create(this, args);
      const transaction = await workflowBuilder.build();

      // For offline signer, we don't broadcast - just return the signed transaction
      const serializedTx = this.serializeTransaction(transaction);

      return {
        transactionHash: 'offline-signed-transaction',
        rawLog: `Transaction signed offline. Serialized transaction: ${serializedTx}`,
        // Include the serialized transaction for manual broadcasting
        serializedTransaction: serializedTx
      };
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transaction offline: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    try {
      return await this.keypair.sign(message);
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  async signTransaction(transaction: any): Promise<any> {
    try {
      // Create a clone of the transaction to avoid modifying the original
      const clonedTransaction = this.cloneTransaction(transaction);

      // Sign the cloned transaction
      const messageString = this.serializeTransaction(clonedTransaction);
      const messageBytes = new TextEncoder().encode(messageString);
      const signature = await this.sign(messageBytes);

      // Add signature to cloned transaction
      clonedTransaction.signatures = [Array.from(signature)];
      return clonedTransaction;
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  /**
   * Get the signed transaction as a serialized string for manual broadcasting
   */
  async getSignedTransactionForBroadcast(args: SolanaSignArgs): Promise<string> {
    const response = await this.signAndBroadcast(args);
    return response.serializedTransaction || '';
  }

  /**
   * Sign multiple transactions offline
   */
  async signMultipleTransactions(transactions: SolanaSignArgs[]): Promise<SolanaBroadcastResponse[]> {
    const results: SolanaBroadcastResponse[] = [];

    for (const txArgs of transactions) {
      try {
        const result = await this.signAndBroadcast(txArgs);
        results.push(result);
      } catch (error) {
        results.push({
          transactionHash: 'failed',
          rawLog: `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`
        });
      }
    }

    return results;
  }

  private cloneTransaction(transaction: any): any {
    // Deep clone the transaction object
    return JSON.parse(JSON.stringify(transaction));
  }

  private serializeTransaction(transaction: any): string {
    // This is a simplified serialization
    // In a real implementation, this would use proper Solana transaction serialization
    return JSON.stringify(transaction);
  }
}

/**
 * Factory function to create an OfflineSigner
 */
export function createOfflineSigner(keypair: Keypair): OfflineSigner {
  return new OfflineSigner(keypair);
}

/**
 * Legacy OfflineSigner class for backward compatibility
 */
export class LegacyOfflineSigner {
  private offlineSigner: OfflineSigner;

  constructor(keypair: Keypair) {
    this.offlineSigner = new OfflineSigner(keypair);
  }

  get publicKey(): PublicKey {
    return this.offlineSigner.publicKey;
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    return this.offlineSigner.sign(message);
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    // Convert to legacy Transaction format
    const signedTx = await this.offlineSigner.signTransaction(transaction);

    // Create a new Transaction instance with the signed data
    const result = new Transaction({
      feePayer: transaction.feePayer,
      recentBlockhash: transaction.recentBlockhash,
    });

    for (const instruction of transaction.instructions) {
      result.add(instruction);
    }

    // Apply signatures (simplified)
    if (signedTx.signatures && signedTx.signatures.length > 0) {
      // This would properly apply signatures in a real implementation
      result.signatures = signedTx.signatures;
    }

    return result;
  }
}
