import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { Transaction } from '../../transaction';
import { PublicKey } from '../../types';
import { SolanaSignArgs, ISolanaSigner } from '../../signers/types';
import { SolanaWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

// Staging keys for transaction building plugin
export const TRANSACTION_BUILDING_STAGING_KEYS = {
  TRANSACTION: 'transaction',
  MESSAGE_BYTES: 'message_bytes'
} as const;

/**
 * Input parameters for TransactionBuildingPlugin
 */
export interface TransactionBuildingParams {
  signArgs: SolanaSignArgs;
  options: any;
}

/**
 * Plugin to build Solana transaction from instructions
 */
export class TransactionBuildingPlugin extends BaseWorkflowBuilderPlugin<
  TransactionBuildingParams,
  SolanaWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.VALIDATED_ARGS,
      INPUT_VALIDATION_STAGING_KEYS.OPTIONS
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TransactionBuildingParams {
    return {
      signArgs: params.validatedArgs as SolanaSignArgs,
      options: params.options as any
    };
  }

  protected async onBuild(
    ctx: SolanaWorkflowBuilderContext,
    params: TransactionBuildingParams
  ): Promise<void> {
    const { signArgs, options } = params;
    const signer = ctx.getSigner();

    // Get recent blockhash if not provided
    let recentBlockhash = signArgs.recentBlockhash;
    if (!recentBlockhash) {
      recentBlockhash = await this.getRecentBlockhash(signer);
    }

    // Determine fee payer
    let feePayer = signArgs.feePayer;
    if (!feePayer) {
      const accounts = await signer.getAccounts();
      if (accounts.length === 0) {
        throw new Error('No accounts available for fee payer');
      }
      feePayer = accounts[0].publicKey;
    }

    // Create transaction
    const transaction = new Transaction({
      feePayer,
      recentBlockhash
    });

    // Add all instructions
    for (const instruction of signArgs.instructions) {
      transaction.add(instruction);
    }

    // Serialize message for signing
    const messageBytes = transaction.serializeMessage();

    // Store results
    ctx.setStagingData(TRANSACTION_BUILDING_STAGING_KEYS.TRANSACTION, transaction);
    ctx.setStagingData(TRANSACTION_BUILDING_STAGING_KEYS.MESSAGE_BYTES, messageBytes);
  }

  private async getRecentBlockhash(signer: ISolanaSigner): Promise<string> {
    // Delegate to signer's query-backed helper
    if (typeof (signer as any).getRecentBlockhash === 'function') {
      return (signer as any).getRecentBlockhash();
    }
    throw new Error('Signer does not support getRecentBlockhash');
  }
}
