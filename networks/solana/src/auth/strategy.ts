/**
 * Solana Auth Strategy
 */

import { PublicKey } from '../types/common';

export interface SolanaAuthStrategy {
  generateAddress(publicKey: PublicKey): string;
  validateAddress(address: string): boolean;
  derivePublicKey(privateKey: Uint8Array): PublicKey;
}

export class DefaultSolanaAuthStrategy implements SolanaAuthStrategy {
  generateAddress(publicKey: PublicKey): string {
    return publicKey.toBase58();
  }

  validateAddress(address: string): boolean {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  }

  derivePublicKey(privateKey: Uint8Array): PublicKey {
    // This is a placeholder - actual implementation would use Ed25519
    throw new Error('Not implemented yet');
  }
}
