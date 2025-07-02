import { ICryptoBytes } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { 
  CosmosSignArgs, 
  EncodedMessage 
} from '../workflows/types';
import { DirectWorkflow } from '../workflows/direct-workflow';
import { BaseCosmosSignerImpl } from './base-signer';
import { 
  CosmosSignerConfig, 
  CosmosWallet, 
  CosmosSignedTransaction 
} from './types';

/**
 * Direct (protobuf) signer for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export class DirectSigner extends BaseCosmosSignerImpl {
  private _encodedPublicKey?: EncodedMessage;

  constructor(wallet: CosmosWallet, config: CosmosSignerConfig) {
    super(wallet, config);
  }

  /**
   * Sign transaction using direct (protobuf) workflow
   */
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    // Ensure we have the encoded public key
    if (!this._encodedPublicKey) {
      const pubKey = await this.wallet.getPublicKey();
      this._encodedPublicKey = pubKey;
    }

    // Get account information
    const account = await this.getAccount();
    const address = account.address;

    // Prepare signing options with chain-specific information
    const signingOptions = {
      chainId: this.config.chainId,
      accountNumber: await this.getAccountNumber(address),
      sequence: await this.getSequence(address),
      signMode: SignMode.SIGN_MODE_DIRECT,
      gasPrice: this.config.gasPrice,
      multiplier: this.config.gasMultiplier,
      ...args.options
    };

    // Create the direct workflow
    const workflow = new DirectWorkflow(this, {
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
      broadcast: this.createBroadcastFunction(txBytes)
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
      const pubKey = await this.wallet.getPublicKey();
      this._encodedPublicKey = pubKey;
    }
  }

  /**
   * Static factory method for convenience
   */
  static create(wallet: CosmosWallet, config: CosmosSignerConfig): DirectSigner {
    return new DirectSigner(wallet, config);
  }

  /**
   * Static method to sign a transaction directly
   */
  static async signTransaction(
    wallet: CosmosWallet,
    config: CosmosSignerConfig,
    args: CosmosSignArgs
  ): Promise<CosmosSignedTransaction> {
    const signer = new DirectSigner(wallet, config);
    return signer.sign(args);
  }
}