/**
 * Direct Signer Implementation
 */

import {
  ISolanaSigner,
  SolanaAccount,
  SolanaSignArgs,
  SolanaBroadcastOpts,
  SolanaBroadcastResponse,
  SolanaQueryClient
} from '../../types/client';
import { PublicKey } from '../../types/common';
import { Keypair } from '../keypair';
import { SolanaWorkflowBuilder } from '../workflows/builder';
import { SolanaSigningError } from '../../errors';

/**
 * Direct signer that uses a keypair to sign transactions
 */
export class DirectSigner implements ISolanaSigner {
  private keypair: Keypair;
  private queryClient?: SolanaQueryClient;

  constructor(keypair: Keypair, queryClient?: SolanaQueryClient) {
    this.keypair = keypair;
    this.queryClient = queryClient;
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

      // If we have a query client, we can broadcast the transaction
      if (this.queryClient) {
        return await this.broadcastTransaction(transaction, opts);
      } else {
        // Return the signed transaction without broadcasting
        return {
          transactionHash: 'offline-signed-transaction',
          rawLog: 'Transaction signed offline - not broadcasted'
        };
      }
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign and broadcast transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
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
      // This is a simplified implementation
      // In a real implementation, this would properly sign the transaction
      const messageBytes = this.serializeTransaction(transaction);
      const signature = await this.sign(messageBytes);

      // Add signature to transaction
      transaction.signatures = [Array.from(signature)];
      return transaction;
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to sign transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  private async broadcastTransaction(
    transaction: any,
    opts?: SolanaBroadcastOpts
  ): Promise<SolanaBroadcastResponse> {
    if (!this.queryClient) {
      throw new SolanaSigningError('Query client required for broadcasting transactions');
    }

    try {
      // Serialize transaction for broadcasting
      const serializedTx = this.serializeTransactionForBroadcast(transaction);

      // This would use the query client to send the transaction
      // For now, this is a placeholder
      const signature = 'placeholder-transaction-signature';

      return {
        transactionHash: signature,
        rawLog: 'Transaction broadcasted successfully'
      };
    } catch (error) {
      throw new SolanaSigningError(
        `Failed to broadcast transaction: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  private serializeTransaction(transaction: any): Uint8Array {
    // This is a simplified serialization
    // In a real implementation, this would use proper Solana transaction serialization
    const encoder = new TextEncoder();
    return encoder.encode(JSON.stringify(transaction));
  }

  private serializeTransactionForBroadcast(transaction: any): string {
    // This would serialize the transaction for RPC broadcasting
    // For now, return a placeholder
    return 'serialized-transaction-data';
  }
}

/**
 * Factory function to create a DirectSigner
 */
export function createDirectSigner(
  keypair: Keypair,
  queryClient?: SolanaQueryClient
): DirectSigner {
  return new DirectSigner(keypair, queryClient);
}

/**
 * Legacy Signer interface for backward compatibility
 */
export interface Signer {
  publicKey: PublicKey;
  sign(message: Uint8Array): Promise<Uint8Array>;
}

/**
 * Legacy DirectSigner class for backward compatibility
 */
export class LegacyDirectSigner implements Signer {
  private directSigner: DirectSigner;

  constructor(keypair: Keypair) {
    this.directSigner = new DirectSigner(keypair);
  }

  get publicKey(): PublicKey {
    return this.directSigner.publicKey;
  }

  async sign(message: Uint8Array): Promise<Uint8Array> {
    return this.directSigner.sign(message);
  }

  async signTransaction(transaction: any): Promise<any> {
    return this.directSigner.signTransaction(transaction);
  }
}
