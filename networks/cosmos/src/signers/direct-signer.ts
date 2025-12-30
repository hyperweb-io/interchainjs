import { ICryptoBytes, IWallet, StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { SignMode, TxRaw, SignDoc } from '@interchainjs/cosmos-types';
import {
  CosmosSignArgs,
  EncodedMessage
} from './types';
import { DirectWorkflow } from '../workflows/direct-workflow';
import { BaseCosmosSigner } from './base-signer';
import {
  CosmosSignerConfig,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  OfflineSigner
} from './types';
import { ISigningClient } from '../types/signing-client';
import { mergeSignerOptions } from './config';

/**
 * Direct (protobuf) signer for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export class DirectSigner extends BaseCosmosSigner implements ISigningClient {
  constructor(authOrSigner: OfflineSigner | IWallet, config: CosmosSignerConfig) {
    super(authOrSigner, config);
  }

  /**
   * Sign transaction using direct (protobuf) workflow
   */
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    const accounts = await this.getAccounts();
    const account = args.options?.signerAddress ? accounts.find(acc => acc.address === args.options.signerAddress) : accounts[0];
    if (!account) {
      throw new Error('Signer address does not match');
    }

    if (!!!args.options?.signerAddress) {
      args.options.signerAddress = account.address;
    }
    

    // Create the direct workflow
    const workflow = new DirectWorkflow(this, {
      messages: args.messages,
      fee: args.fee,
      memo: args.memo || '',
      options: mergeSignerOptions(this.config, args.options || {}),
    });

    // Build and sign the transaction
    const txRaw: TxRaw = await workflow.build();

    // Serialize the transaction
    const txBytes = TxRaw.encode(txRaw).finish();

    // Extract signature from the transaction
    const signature: ICryptoBytes = BaseCryptoBytes.from(txRaw.signatures[0]);

    // Create the signed transaction result
    const signedTx: CosmosSignedTransaction = {
      signature,
      txBytes,
      broadcast: (options?: CosmosBroadcastOptions) => this.broadcast(signedTx, options)
    };

    return signedTx;
  }
}