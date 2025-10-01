import { BaseWorkflowBuilderPlugin, ICryptoBytes } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { Keypair } from '../../keypair';
import { Transaction } from '../../transaction';
import { SolanaWorkflowBuilderContext } from '../context';
import { TRANSACTION_BUILDING_STAGING_KEYS } from './transaction-building';

// Staging keys for signature plugin
export const SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature',
  SIGNED_TRANSACTION: 'signed_transaction'
} as const;

/**
 * Input parameters for SignaturePlugin
 */
export interface SignatureParams {
  transaction: Transaction;
  messageBytes: Uint8Array;
}

/**
 * Plugin to sign Solana transactions
 */
export class SignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureParams,
  SolanaWorkflowBuilderContext
> {
  constructor() {
    super([
      TRANSACTION_BUILDING_STAGING_KEYS.TRANSACTION,
      TRANSACTION_BUILDING_STAGING_KEYS.MESSAGE_BYTES
    ]);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): SignatureParams {
    return {
      transaction: params.transaction as Transaction,
      messageBytes: params.messageBytes as Uint8Array
    };
  }

  protected async onBuild(
    ctx: SolanaWorkflowBuilderContext,
    params: SignatureParams
  ): Promise<void> {
    const { transaction, messageBytes } = params;
    const signer = ctx.getSigner();
    const auth = (signer as any).auth; // Access the auth property

    let signature: ICryptoBytes;

    if (auth instanceof Keypair) {
      // Direct keypair signing
      const sig = auth.sign(messageBytes);
      signature = BaseCryptoBytes.from(sig);

      // Sign the transaction with the keypair
      transaction.sign(auth);
    } else {
      // IWallet - use signArbitrary
      signature = await signer.signArbitrary(messageBytes);

      // Manually add signature to transaction
      transaction.signatures = [{
        signature: signature.value,
        publicKey: (await signer.getAccounts())[0].publicKey
      }];
    }

    // Store results
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    ctx.setStagingData(SIGNATURE_STAGING_KEYS.SIGNED_TRANSACTION, transaction);
  }
}
