import { PublicKey, AccountInfo, RpcResponse } from './types';
import { Transaction } from './transaction';
import { TokenProgram } from './token-program';
import { 
  TokenAccount, 
  TokenMint, 
  ParsedTokenAccount,
  TokenLargestAccount,
  TokenSupply,
  TokenBalance
} from './token-types';
import { TOKEN_PROGRAM_ID } from './token-constants';

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
      // Use getTransaction to check if the transaction exists and succeeded
      const result = await this.rpcRequest<any>('getTransaction', [
        signature,
        {
          encoding: 'json',
          commitment: 'finalized',
          maxSupportedTransactionVersion: 0,
        },
      ]);
      
      // If transaction exists and has no error, it's confirmed
      return result && !result.meta?.err;
    } catch (error) {
      // Transaction not found yet or other error
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

  // SPL Token Methods
  
  /**
   * Get parsed token account information
   */
  async getParsedTokenAccountsByOwner(
    ownerAddress: PublicKey,
    filter?: { mint?: PublicKey; programId?: PublicKey }
  ): Promise<ParsedTokenAccount[]> {
    const filterParam = filter?.mint
      ? { mint: filter.mint.toString() }
      : filter?.programId
        ? { programId: filter.programId.toString() }
        : { programId: TOKEN_PROGRAM_ID.toString() };

    const result = await this.rpcRequest<RpcResponse<ParsedTokenAccount[]>>('getTokenAccountsByOwner', [
      ownerAddress.toString(),
      filterParam,
      {
        encoding: 'jsonParsed',
        commitment: this.commitment,
      },
    ]);
    
    return result.value;
  }

  /**
   * Get token account balance
   */
  async getTokenAccountBalance(tokenAccount: PublicKey): Promise<{ amount: string; decimals: number; uiAmount: number }> {
    const result = await this.rpcRequest<RpcResponse<{ amount: string; decimals: number; uiAmount: number }>>('getTokenAccountBalance', [
      tokenAccount.toString(),
      { commitment: this.commitment },
    ]);
    
    return result.value;
  }

  /**
   * Get token supply information
   */
  async getTokenSupply(mint: PublicKey): Promise<TokenSupply> {
    const result = await this.rpcRequest<RpcResponse<TokenSupply>>('getTokenSupply', [
      mint.toString(),
      { commitment: this.commitment },
    ]);
    
    return result.value;
  }

  /**
   * Get token largest accounts
   */
  async getTokenLargestAccounts(mint: PublicKey): Promise<TokenLargestAccount[]> {
    const result = await this.rpcRequest<RpcResponse<TokenLargestAccount[]>>('getTokenLargestAccounts', [
      mint.toString(),
      { commitment: this.commitment },
    ]);
    
    return result.value;
  }

  /**
   * Parse token mint account data from raw account info
   */
  async getTokenMintInfo(mint: PublicKey): Promise<TokenMint | null> {
    const accountInfo = await this.getAccountInfo(mint);
    
    if (!accountInfo || !accountInfo.data) {
      return null;
    }
    
    // Decode base64 data - accountInfo.data is [data, encoding] format
    const buffer = Buffer.from(accountInfo.data[0], 'base64');
    
    try {
      return TokenProgram.parseMintData(buffer);
    } catch (error) {
      console.error('Error parsing mint data:', error);
      return null;
    }
  }

  /**
   * Parse token account data from raw account info
   */
  async getTokenAccountInfo(tokenAccount: PublicKey): Promise<TokenAccount | null> {
    const accountInfo = await this.getAccountInfo(tokenAccount);
    
    if (!accountInfo || !accountInfo.data) {
      return null;
    }
    
    // Decode base64 data - accountInfo.data is [data, encoding] format
    const buffer = Buffer.from(accountInfo.data[0], 'base64');
    
    try {
      return TokenProgram.parseAccountData(buffer);
    } catch (error) {
      console.error('Error parsing token account data:', error);
      return null;
    }
  }

  /**
   * Get all token accounts for a specific mint
   */
  async getTokenAccountsByMint(mint: PublicKey): Promise<ParsedTokenAccount[]> {
    const result = await this.rpcRequest<RpcResponse<ParsedTokenAccount[]>>('getProgramAccounts', [
      TOKEN_PROGRAM_ID.toString(),
      {
        encoding: 'jsonParsed',
        commitment: this.commitment,
        filters: [
          {
            dataSize: 165, // Token account size
          },
          {
            memcmp: {
              offset: 0,
              bytes: mint.toString(),
            },
          },
        ],
      },
    ]);
    
    return result.value;
  }

  /**
   * Get token balances for a transaction
   */
  async getTokenBalances(signature: string): Promise<{
    preTokenBalances: TokenBalance[];
    postTokenBalances: TokenBalance[];
  }> {
    const result = await this.rpcRequest<{
      meta: {
        preTokenBalances: TokenBalance[];
        postTokenBalances: TokenBalance[];
      };
    }>('getTransaction', [
      signature,
      {
        encoding: 'jsonParsed',
        commitment: this.commitment,
        maxSupportedTransactionVersion: 0,
      },
    ]);
    
    return {
      preTokenBalances: result.meta.preTokenBalances || [],
      postTokenBalances: result.meta.postTokenBalances || [],
    };
  }
}