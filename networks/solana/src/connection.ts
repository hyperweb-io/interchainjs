import { PublicKey, AccountInfo, RpcResponse } from './types';
import { Transaction } from './transaction';

export interface ConnectionConfig {
  endpoint: string;
  commitment?: 'processed' | 'confirmed' | 'finalized';
  timeout?: number;
}

export class Connection {
  private endpoint: string;
  private commitment: string;
  private timeout: number;

  constructor(config: ConnectionConfig) {
    this.endpoint = config.endpoint;
    this.commitment = config.commitment || 'finalized';
    this.timeout = config.timeout || 30000;
  }

  private async rpcRequest<T>(method: string, params: any[] = []): Promise<T> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Math.random().toString(36).substring(7),
        method,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`RPC request failed: ${response.statusText}`);
    }

    const data: any = await response.json();
    
    if (data.error) {
      throw new Error(`RPC error: ${data.error.message}`);
    }

    return data.result;
  }

  async getAccountInfo(publicKey: PublicKey): Promise<AccountInfo | null> {
    try {
      const result = await this.rpcRequest<RpcResponse<AccountInfo | null>>('getAccountInfo', [
        publicKey.toString(),
        { encoding: 'base64', commitment: this.commitment },
      ]);
      return result.value;
    } catch (error) {
      console.error('Error getting account info:', error);
      return null;
    }
  }

  async getBalance(publicKey: PublicKey): Promise<number> {
    try {
      const result = await this.rpcRequest<RpcResponse<number>>('getBalance', [
        publicKey.toString(),
        { commitment: this.commitment },
      ]);
      return result.value;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  async getRecentBlockhash(): Promise<string> {
    const result = await this.rpcRequest<RpcResponse<{ blockhash: string; feeCalculator: any }>>('getLatestBlockhash', [
      { commitment: this.commitment },
    ]);
    return result.value.blockhash;
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    const serializedTransaction = transaction.serialize();
    const base64Transaction = Buffer.from(serializedTransaction).toString('base64');
    
    const result = await this.rpcRequest<string>('sendTransaction', [
      base64Transaction,
      { 
        encoding: 'base64',
        skipPreflight: false,
        preflightCommitment: this.commitment,
      },
    ]);
    
    return result;
  }

  async sendRawTransaction(signedTransactionBytes: Uint8Array): Promise<string> {
    // Convert Uint8Array to base64 for RPC
    const base64Transaction = Buffer.from(signedTransactionBytes).toString('base64');
    
    const result = await this.rpcRequest<string>('sendTransaction', [
      base64Transaction,
      { 
        encoding: 'base64',
        skipPreflight: false,
        preflightCommitment: this.commitment,
      },
    ]);
    
    return result;
  }

  async confirmTransaction(signature: string): Promise<boolean> {
    try {
      const result = await this.rpcRequest<RpcResponse<Array<{ confirmations: number | null } | null>>>('getSignatureStatuses', [
        [signature],
        { searchTransactionHistory: true },
      ]);
      
      const status = result.value[0];
      return status !== null && status.confirmations !== null;
    } catch (error) {
      console.error('Error confirming transaction:', error);
      return false;
    }
  }

  async getTransactionCount(): Promise<number> {
    const result = await this.rpcRequest<number>('getTransactionCount', [
      { commitment: this.commitment },
    ]);
    return result;
  }

  async requestAirdrop(publicKey: PublicKey, lamports: number): Promise<string> {
    const result = await this.rpcRequest<string>('requestAirdrop', [
      publicKey.toString(),
      lamports,
      { commitment: this.commitment },
    ]);
    return result;
  }
}