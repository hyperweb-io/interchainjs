import { IWallet } from '@interchainjs/types';
import { Keypair } from '../keypair';
import { BaseSolanaSigner } from './base-signer';
import { SolanaStdWorkflow } from '../workflows/solana-std-workflow';
import {
  SolanaSignArgs,
  SolanaSignedTransaction,
  SolanaSignerConfig
} from './types';

/**
 * Primary Solana signer implementing IUniSigner via workflow builder.
 * Supports Keypair and IWallet authentication methods.
 */
export class SolanaSigner extends BaseSolanaSigner {
  constructor(auth: IWallet | Keypair, config: SolanaSignerConfig) {
    super(auth, config);
  }

  /**
   * Sign transaction using standard workflow
   */
  async sign(args: SolanaSignArgs): Promise<SolanaSignedTransaction> {
    const accounts = await this.getAccounts();
    if (accounts.length === 0) {
      throw new Error('No accounts available for signing');
    }

    // Ensure we have a fee payer
    if (!args.feePayer && accounts.length > 0) {
      args = {
        ...args,
        feePayer: accounts[0].publicKey
      };
    }

    // Create the standard Solana workflow
    const workflow = new SolanaStdWorkflow(this, args);

    // Build and sign the transaction
    return workflow.build();
  }
}

