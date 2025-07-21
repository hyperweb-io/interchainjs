import { ICryptoBytes, StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw, SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
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

/**
 * Direct (protobuf) signer for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export class DirectSigner extends BaseCosmosSigner implements ISigningClient {
  private _encodedPublicKey?: EncodedMessage;

  constructor(authOrSigner: OfflineSigner, config: CosmosSignerConfig) {
    super(authOrSigner, config);
  }

  /**
   * Sign transaction using direct (protobuf) workflow
   */
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    // Ensure we have the encoded public key
    if (!this._encodedPublicKey) {
      const accounts = await this.getAccounts();
      const account = accounts[0];
      if (!account) {
        throw new Error('No accounts available');
      }
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
  static create(authOrSigner: OfflineSigner, config: CosmosSignerConfig): DirectSigner {
    return new DirectSigner(authOrSigner, config);
  }

  /**
   * Static method to sign a transaction directly
   */
  static async signTransaction(
    authOrSigner: OfflineSigner,
    config: CosmosSignerConfig,
    args: CosmosSignArgs
  ): Promise<CosmosSignedTransaction> {
    const signer = new DirectSigner(authOrSigner, config);
    return signer.sign(args);
  }


}