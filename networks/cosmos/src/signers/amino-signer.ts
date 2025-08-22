import { ICryptoBytes, IWallet, StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { SignMode, TxRaw } from '@interchainjs/cosmos-types';
import {
  CosmosSignArgs,
  EncodedMessage
} from './types';
import { AminoWorkflow } from '../workflows/amino-workflow';
import { BaseCosmosSigner } from './base-signer';
import {
  CosmosSignerConfig,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  OfflineSigner
} from './types';
import { ISigningClient, AminoConverter } from '../types/signing-client';
import { mergeSignerOptions } from './config';

/**
 * Amino (JSON) signer for Cosmos transactions
 * Uses SIGN_MODE_LEGACY_AMINO_JSON for JSON-based signing
 */
export class AminoSigner extends BaseCosmosSigner implements ISigningClient {
  private converters: AminoConverter[] = [];

  constructor(authOrSigner: OfflineSigner | IWallet, config: CosmosSignerConfig) {
    super(authOrSigner, config);
  }

  /**
   * Sign transaction using amino (JSON) workflow
   */
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    const accounts = await this.getAccounts();
    const account = args.options?.signerAddress ? accounts.find(acc => acc.address === args.options.signerAddress) : accounts[0];
    if (!account) {
      throw new Error('Signer address does not match');
    }

    // Create the amino workflow
    const workflow = new AminoWorkflow(this, {
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

  // ISigningClient implementation

  getConverterFromTypeUrl?(typeUrl: string): AminoConverter | undefined {
    return this.converters.find(converter => converter.typeUrl === typeUrl);
  }

  /**
   * Register amino converters
   */
  addConverters(converters: AminoConverter[]): void {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.converters.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newConverters = converters.filter(converter => !existingTypeUrls.has(converter.typeUrl));

    // Add only the unique converters
    this.converters.push(...newConverters);
  }
}