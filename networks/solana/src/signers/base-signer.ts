import { ICryptoBytes, IWallet, isIWallet } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { PublicKey } from '../types';
import { Keypair } from '../keypair';
import { ISolanaQueryClient } from '../types/solana-client-interfaces';
import { GetLatestBlockhashRequest } from '../types/requests/block';
import { GetSignatureStatusesRequest } from '../types/requests/transaction';
import { SolanaCommitment } from '../types/requests/base';
import {
  ISolanaSigner,
  SolanaAccount,
  SolanaSignArgs,
  SolanaBroadcastOptions,
  SolanaBroadcastResponse,
  SolanaSignedTransaction,
  SolanaSignerConfig,
  SolanaTransactionResponse
} from './types';



/**
 * Base implementation for Solana signers
 * Provides common functionality for different signer types
 */
export abstract class BaseSolanaSigner implements ISolanaSigner {
  protected config: SolanaSignerConfig;
  protected auth: IWallet | Keypair;
  private readonly queryClientInstance: ISolanaQueryClient;

  constructor(auth: IWallet | Keypair, config: SolanaSignerConfig) {
    this.auth = auth;
    if (!config?.queryClient) {
      throw new Error('queryClient is required in signer configuration');
    }

    this.queryClientInstance = config.queryClient;
    this.config = {
      ...config,
      queryClient: this.queryClientInstance
    };
  }

  get queryClient(): ISolanaQueryClient {
    return this.queryClientInstance;
  }

  async getAccounts(): Promise<readonly SolanaAccount[]> {
    if (this.auth instanceof Keypair) {
      // Single keypair
      const keypair = this.auth as Keypair;
      return [{
        address: keypair.publicKey.toString(),
        publicKey: keypair.publicKey,
        algo: 'ed25519',
        getPublicKey: () => ({
          value: { value: new Uint8Array(keypair.publicKey.toBuffer()) } as any,
          algo: 'ed25519',
          compressed: false,
          toHex: () => keypair.publicKey.toString(),
          toBase64: () => Buffer.from(keypair.publicKey.toBuffer()).toString('base64'),
          verify: async () => false
        })
      }];
    } else if (isIWallet(this.auth)) {
      // IWallet interface
      const accounts = await this.auth.getAccounts();
      return accounts.map(account => ({
        address: account.address || '',
        publicKey: new PublicKey(account.getPublicKey().value.value),
        algo: account.algo,
        getPublicKey: account.getPublicKey.bind(account)
      })) as SolanaAccount[];
    } else {
      throw new Error('Invalid auth type');
    }
  }

  async getPublicKey(index: number = 0): Promise<PublicKey> {
    const accounts = await this.getAccounts();
    if (index >= accounts.length) {
      throw new Error(`Account index ${index} out of bounds`);
    }
    return accounts[index].publicKey;
  }

  async getAddresses(): Promise<string[]> {
    const accounts = await this.getAccounts();
    return accounts.map(account => account.address);
  }

  async signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes> {
    if (this.auth instanceof Keypair) {
      const signature = this.auth.sign(data);
      return BaseCryptoBytes.from(signature);
    } else if (isIWallet(this.auth)) {
      return this.auth.signByIndex(data, index);
    } else {
      throw new Error('Invalid auth type');
    }
  }

  abstract sign(args: SolanaSignArgs): Promise<SolanaSignedTransaction>;

  async broadcast(
    signed: SolanaSignedTransaction,
    options: SolanaBroadcastOptions = {}
  ): Promise<SolanaBroadcastResponse> {
    // Delegate to broadcastArbitrary to avoid duplicate logic
    return this.broadcastArbitrary(signed.txBytes, options);
  }

  async broadcastArbitrary(
    data: Uint8Array,
    options: SolanaBroadcastOptions = {}
  ): Promise<SolanaBroadcastResponse> {
    const client = this.queryClient;

    // Convert transaction bytes to base64 for RPC
    const txBase64 = Buffer.from(data).toString('base64');

    const rpcOptions = {
      skipPreflight: options.skipPreflight ?? this.config.skipPreflight ?? false,
      preflightCommitment: options.preflightCommitment ?? this.config.commitment ?? 'processed',
      maxRetries: options.maxRetries ?? this.config.maxRetries ?? 3,
      encoding: 'base64' as const
    };

    try {
      const signature = await client.sendTransactionBase64(txBase64, rpcOptions);
      return {
        signature,
        transactionHash: signature,
        rawResponse: signature,
        broadcastResponse: signature,
        wait: async () => this.waitForTransaction(signature)
      };
    } catch (error) {
      throw new Error(`Failed to broadcast transaction: ${(error as Error).message}`);
    }
  }

  async signAndBroadcast(
    args: SolanaSignArgs,
    options: SolanaBroadcastOptions = {}
  ): Promise<SolanaBroadcastResponse> {
    const signed = await this.sign(args);
    return this.broadcast(signed, options);
  }

  /**
   * Wait for transaction confirmation
   */
  private async waitForTransaction(signature: string): Promise<SolanaTransactionResponse> {
    const client = this.queryClient;
    const maxAttempts = 30;
    const delayMs = 1000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const request: GetSignatureStatusesRequest = {
          signatures: [signature],
          options: { searchTransactionHistory: true }
        };
        const statuses = await client.getSignatureStatuses(request);
        const status = statuses.value?.[0];
        if (status) {
          if (status.confirmationStatus === 'confirmed' || status.confirmationStatus === 'finalized') {
            return {
              signature,
              slot: status.slot || 0,
              confirmations: status.confirmations || 0,
              err: status.err
            };
          }
        }
        // Wait before next attempt
        await new Promise(resolve => setTimeout(resolve, delayMs));
      } catch (error) {
        // Continue trying on error
      }
    }

    throw new Error(`Transaction ${signature} not confirmed after ${maxAttempts} attempts`);
  }

  /**
   * Get recent blockhash for transactions
   */
  public async getRecentBlockhash(): Promise<string> {
    const client = this.queryClient;
    const commitmentOption = this.normalizeCommitment(this.config.commitment);
    const request: GetLatestBlockhashRequest = commitmentOption
      ? { options: { commitment: commitmentOption } }
      : {};
    const res = await client.getLatestBlockhash(request);
    return res.value.blockhash;
  }

  private normalizeCommitment(commitment?: string): SolanaCommitment | undefined {
    if (!commitment) {
      return undefined;
    }

    switch (commitment) {
      case SolanaCommitment.PROCESSED:
      case SolanaCommitment.CONFIRMED:
      case SolanaCommitment.FINALIZED:
        return commitment;
      default:
        return undefined;
    }
  }
}
