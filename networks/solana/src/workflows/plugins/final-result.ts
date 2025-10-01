import { BaseWorkflowBuilderPlugin, ICryptoBytes } from '@interchainjs/types';
import { Transaction } from '../../transaction';
import { SolanaSignedTransaction, SolanaBroadcastOptions, SolanaBroadcastResponse } from '../../signers/types';
import { SolanaWorkflowBuilderContext } from '../context';
import { SIGNATURE_STAGING_KEYS } from './signature';

// Staging keys for final result plugin
export const FINAL_RESULT_STAGING_KEYS = {
  FINAL_RESULT: '__final_result__'
} as const;

/**
 * Input parameters for FinalResultPlugin
 */
export interface FinalResultParams {
  signature: ICryptoBytes;
  signedTransaction: Transaction;
}

/**
 * Plugin to create the final signed transaction result
 */
export class FinalResultPlugin extends BaseWorkflowBuilderPlugin<
  FinalResultParams,
  SolanaWorkflowBuilderContext
> {
  constructor() {
    super([
      SIGNATURE_STAGING_KEYS.SIGNATURE,
      SIGNATURE_STAGING_KEYS.SIGNED_TRANSACTION
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): FinalResultParams {
    return {
      signature: params.signature as ICryptoBytes,
      signedTransaction: params.signedTransaction as Transaction
    };
  }

  protected async onBuild(
    ctx: SolanaWorkflowBuilderContext,
    params: FinalResultParams
  ): Promise<void> {
    const { signature, signedTransaction } = params;
    const signer = ctx.getSigner();

    // Serialize the signed transaction
    const txBytes = signedTransaction.serialize();

    // Create the final signed transaction result
    const result: SolanaSignedTransaction = {
      signature,
      txBytes,
      broadcast: async (options?: SolanaBroadcastOptions) => {
        return signer.broadcast(result, options);
      }
    };

    // Store the final result
    ctx.setStagingData(FINAL_RESULT_STAGING_KEYS.FINAL_RESULT, result);
  }
}
