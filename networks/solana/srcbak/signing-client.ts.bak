import { Connection, ConnectionConfig } from './connection';
import { DirectSigner, OfflineSigner } from './signer';
import { Transaction } from './transaction';
import { SystemProgram } from './system-program';
import { PublicKey } from './types';

export interface SigningClientConfig {
  endpoint?: string;
  commitment?: 'processed' | 'confirmed' | 'finalized';
  timeout?: number;
  broadcast?: {
    checkTx?: boolean;
    timeout?: number;
  };
}

export class SolanaSigningClient {
  private connection: Connection;
  private signer: DirectSigner | OfflineSigner;
  private config: SigningClientConfig;

  constructor(connection: Connection, signer: DirectSigner | OfflineSigner, config: SigningClientConfig = {}) {
    this.connection = connection;
    this.signer = signer;
    this.config = { endpoint: '', ...config };
  }

  static async connectWithSigner(
    endpoint: string,
    signer: DirectSigner | OfflineSigner,
    config: SigningClientConfig = {}
  ): Promise<SolanaSigningClient> {
    const connection = new Connection({
      endpoint,
      commitment: config.commitment,
      timeout: config.timeout,
    });

    return new SolanaSigningClient(connection, signer, { endpoint, ...config });
  }

  get signerAddress(): PublicKey {
    return this.signer.publicKey;
  }

  async getBalance(address?: PublicKey): Promise<number> {
    const publicKey = address || this.signer.publicKey;
    return await this.connection.getBalance(publicKey);
  }

  async getAccountInfo(address: PublicKey) {
    return await this.connection.getAccountInfo(address);
  }

  async transfer(params: {
    recipient: PublicKey;
    amount: number;
    memo?: string;
  }): Promise<string> {
    const { recipient, amount } = params;
    
    const transaction = new Transaction({
      feePayer: this.signer.publicKey,
      recentBlockhash: await this.connection.getRecentBlockhash(),
    });

    const transferInstruction = SystemProgram.transfer({
      fromPubkey: this.signer.publicKey,
      toPubkey: recipient,
      lamports: amount,
    });

    transaction.add(transferInstruction);

    const signedTransaction = await this.signer.signTransaction(transaction);
    
    const signature = await this.connection.sendTransaction(signedTransaction);

    if (this.config.broadcast?.checkTx) {
      await this.waitForConfirmation(signature);
    }

    return signature;
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    transaction.recentBlockhash = await this.connection.getRecentBlockhash();
    transaction.feePayer = this.signer.publicKey;
    
    const signedTransaction = await this.signer.signTransaction(transaction);
    const signature = await this.connection.sendTransaction(signedTransaction);

    if (this.config.broadcast?.checkTx) {
      await this.waitForConfirmation(signature);
    }

    return signature;
  }

  async requestAirdrop(lamports: number): Promise<string> {
    return await this.connection.requestAirdrop(this.signer.publicKey, lamports);
  }

  private async waitForConfirmation(signature: string): Promise<void> {
    const timeout = this.config.broadcast?.timeout || 30000;
    const start = Date.now();
    
    while (Date.now() - start < timeout) {
      const confirmed = await this.connection.confirmTransaction(signature);
      if (confirmed) {
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    throw new Error(`Transaction confirmation timeout: ${signature}`);
  }
}