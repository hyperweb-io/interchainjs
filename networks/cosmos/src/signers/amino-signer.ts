import { ICryptoBytes, StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
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

/**
 * Amino (JSON) signer for Cosmos transactions
 * Uses SIGN_MODE_LEGACY_AMINO_JSON for JSON-based signing
 */
export class AminoSigner extends BaseCosmosSigner implements ISigningClient {
  private _encodedPublicKey?: EncodedMessage;
  private converters: AminoConverter[] = [];

  constructor(authOrSigner: OfflineSigner, config: CosmosSignerConfig) {
    super(authOrSigner, config);
  }

  /**
   * Sign transaction using amino (JSON) workflow
   */
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    // Ensure we have the encoded public key
    if (!this._encodedPublicKey) {
      const accounts = await this.getAccounts();
      const account = accounts[0];
      if (!account) {
        throw new Error('No accounts available');
      }
      // In a real implementation, we'd get the public key from the account
      // For now, we'll use a placeholder
      this._encodedPublicKey = { typeUrl: '/cosmos.crypto.secp256k1.PubKey', value: account.pubkey };
    }

    // Get account information
    const accounts = await this.getAccounts();
    const account = accounts[0];
    if (!account) {
      throw new Error('No accounts available');
    }
    const address = account.address;

    // Prepare signing options
    const signingOptions = {
      chainId: await this.getChainId(),
      accountNumber: await this.getAccountNumber(address),
      sequence: await this.getSequence(address),
      signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      gasPrice: this.config.gasPrice,
      multiplier: this.config.gasMultiplier,
      ...args.options
    };

    // Create the amino workflow
    const workflow = new AminoWorkflow(this, {
      messages: args.messages,
      fee: args.fee,
      memo: args.memo || '',
      options: signingOptions
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



  /**
   * Get the encoded public key
   */
  get encodedPublicKey(): EncodedMessage {
    if (!this._encodedPublicKey) {
      throw new Error('Public key not initialized. Call sign() first or initialize manually.');
    }
    return this._encodedPublicKey;
  }

  /**
   * Initialize the public key (optional, will be done automatically on first sign)
   */
  async initializePublicKey(): Promise<void> {
    if (!this._encodedPublicKey) {
      const accounts = await this.getAccounts();
      const account = accounts[0];
      if (!account) {
        throw new Error('No accounts available');
      }
      this._encodedPublicKey = { typeUrl: '/cosmos.crypto.secp256k1.PubKey', value: account.pubkey };
    }
  }

  /**
   * Static factory method for convenience
   */
  static create(authOrSigner: OfflineSigner, config: CosmosSignerConfig): AminoSigner {
    return new AminoSigner(authOrSigner, config);
  }

  /**
   * Static method to sign a transaction directly
   */
  static async signTransaction(
    authOrSigner: OfflineSigner,
    config: CosmosSignerConfig,
    args: CosmosSignArgs
  ): Promise<CosmosSignedTransaction> {
    const signer = new AminoSigner(authOrSigner, config);
    return signer.sign(args);
  }

  // ISigningClient implementation

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