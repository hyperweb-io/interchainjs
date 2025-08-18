/**
 * Solana Query Client Facade
 */

import {
  SolanaQueryClient as ISolanaQueryClient,
  ISolanaRpcClient,
  ISolanaProtocolAdapter,
  SolanaTokenAccount
} from '../../types/client';
import {
  SolanaBlock,
  SolanaAccount,
  SolanaTransaction,
  CommitmentLevel,
  SolanaMethod,
  GetBalanceParams,
  GetAccountInfoParams,
  TokenAccountFilter
} from '../../types/protocol';
import { PublicKey, AccountInfo } from '../../types/common';
import { mapToSolanaError } from '../../errors';

/**
 * High-level query client that provides a clean interface for read operations
 */
export class SolanaQueryClient implements ISolanaQueryClient {
  constructor(
    private rpcClient: ISolanaRpcClient,
    private adapter: ISolanaProtocolAdapter
  ) {}

  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  async getLatestBlock(): Promise<SolanaBlock> {
    try {
      const response = await this.rpcClient.call(SolanaMethod.GET_LATEST_BLOCKHASH);
      return this.adapter.decodeResponse(SolanaMethod.GET_LATEST_BLOCKHASH, response);
    } catch (error) {
      throw mapToSolanaError(error, 'getLatestBlock');
    }
  }

  async getBalance(address: string, commitment?: CommitmentLevel): Promise<number> {
    try {
      const params: GetBalanceParams = {
        publicKey: address,
        commitment
      };

      const encodedParams = this.adapter.encodeRequest(SolanaMethod.GET_BALANCE, params);
      const response = await this.rpcClient.call(SolanaMethod.GET_BALANCE, encodedParams);
      return this.adapter.decodeResponse(SolanaMethod.GET_BALANCE, response);
    } catch (error) {
      throw mapToSolanaError(error, 'getBalance');
    }
  }

  async getAccount(address: string, commitment?: CommitmentLevel): Promise<SolanaAccount> {
    try {
      const params: GetAccountInfoParams = {
        publicKey: address,
        commitment,
        encoding: 'base64'
      };

      const encodedParams = this.adapter.encodeRequest(SolanaMethod.GET_ACCOUNT_INFO, params);
      const response = await this.rpcClient.call(SolanaMethod.GET_ACCOUNT_INFO, encodedParams);
      const accountInfo = this.adapter.decodeResponse(SolanaMethod.GET_ACCOUNT_INFO, response) as any;

      if (!accountInfo) {
        throw new Error(`Account not found: ${address}`);
      }

      return {
        ...accountInfo,
        pubkey: new PublicKey(address)
      };
    } catch (error) {
      throw mapToSolanaError(error, 'getAccount');
    }
  }

  // Solana-specific query methods

  async getTokenAccountsByOwner(
    owner: string,
    filter: TokenAccountFilter,
    commitment?: CommitmentLevel
  ): Promise<SolanaTokenAccount[]> {
    try {
      const params = [
        owner,
        filter,
        {
          encoding: 'jsonParsed',
          commitment: commitment || 'confirmed'
        }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_TOKEN_ACCOUNTS_BY_OWNER, params) as any;
      return response.value || [];
    } catch (error) {
      throw mapToSolanaError(error, 'getTokenAccountsByOwner');
    }
  }

  async getTokenSupply(mint: string, commitment?: CommitmentLevel): Promise<any> {
    try {
      const params = [
        mint,
        { commitment: commitment || 'confirmed' }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_TOKEN_SUPPLY, params) as any;
      return response.value;
    } catch (error) {
      throw mapToSolanaError(error, 'getTokenSupply');
    }
  }

  async getMinimumBalanceForRentExemption(
    dataLength: number,
    commitment?: CommitmentLevel
  ): Promise<number> {
    try {
      const params = this.adapter.encodeRequest(
        SolanaMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
        dataLength
      );

      const response = await this.rpcClient.call(
        SolanaMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
        params
      );

      return this.adapter.decodeResponse(
        SolanaMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
        response
      );
    } catch (error) {
      throw mapToSolanaError(error, 'getMinimumBalanceForRentExemption');
    }
  }

  async waitForTransaction(
    signature: string,
    commitment: CommitmentLevel = 'confirmed',
    timeout: number = 60000
  ): Promise<any> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      try {
        const response = await this.rpcClient.call(SolanaMethod.GET_TRANSACTION, [
          signature,
          {
            encoding: 'json',
            commitment,
            maxSupportedTransactionVersion: 0
          }
        ]);

        if (response) {
          return response;
        }
      } catch (error) {
        // Transaction not found yet, continue waiting
      }

      // Wait 1 second before next check
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    throw mapToSolanaError(
      new Error(`Transaction ${signature} not confirmed within ${timeout}ms`),
      'waitForTransaction'
    );
  }

  // Additional utility methods

  async getBlockHeight(commitment?: CommitmentLevel): Promise<number> {
    try {
      const params = commitment ? [{ commitment }] : [];
      const response = await this.rpcClient.call(SolanaMethod.GET_BLOCK_HEIGHT, params);
      return response as number;
    } catch (error) {
      throw mapToSolanaError(error, 'getBlockHeight');
    }
  }

  async getSlot(commitment?: CommitmentLevel): Promise<number> {
    try {
      const params = commitment ? [{ commitment }] : [];
      const response = await this.rpcClient.call(SolanaMethod.GET_SLOT, params);
      return response as number;
    } catch (error) {
      throw mapToSolanaError(error, 'getSlot');
    }
  }

  async getEpochInfo(commitment?: CommitmentLevel): Promise<any> {
    try {
      const params = commitment ? [{ commitment }] : [];
      const response = await this.rpcClient.call(SolanaMethod.GET_EPOCH_INFO, params);
      return response;
    } catch (error) {
      throw mapToSolanaError(error, 'getEpochInfo');
    }
  }

  async getHealth(): Promise<string> {
    try {
      const response = await this.rpcClient.call(SolanaMethod.GET_HEALTH);
      return response as string;
    } catch (error) {
      throw mapToSolanaError(error, 'getHealth');
    }
  }

  async getVersion(): Promise<any> {
    try {
      const response = await this.rpcClient.call(SolanaMethod.GET_VERSION);
      return response;
    } catch (error) {
      throw mapToSolanaError(error, 'getVersion');
    }
  }

  async getSignatureStatuses(
    signatures: string[],
    searchTransactionHistory: boolean = false
  ): Promise<any> {
    try {
      const params = [
        signatures,
        { searchTransactionHistory }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_SIGNATURE_STATUSES, params) as any;
      return response.value;
    } catch (error) {
      throw mapToSolanaError(error, 'getSignatureStatuses');
    }
  }

  async getTransaction(
    signature: string,
    commitment?: CommitmentLevel,
    encoding: 'json' | 'jsonParsed' | 'base58' | 'base64' = 'json'
  ): Promise<any> {
    try {
      const params = [
        signature,
        {
          encoding,
          commitment: commitment || 'confirmed',
          maxSupportedTransactionVersion: 0
        }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_TRANSACTION, params);
      return response;
    } catch (error) {
      throw mapToSolanaError(error, 'getTransaction');
    }
  }

  async getProgramAccounts(
    programId: string,
    commitment?: CommitmentLevel,
    encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed' = 'base64',
    filters?: Array<{
      memcmp?: { offset: number; bytes: string };
      dataSize?: number;
    }>
  ): Promise<any[]> {
    try {
      const params = [
        programId,
        {
          commitment: commitment || 'confirmed',
          encoding,
          ...(filters && { filters })
        }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_PROGRAM_ACCOUNTS, params) as any[];
      return response || [];
    } catch (error) {
      throw mapToSolanaError(error, 'getProgramAccounts');
    }
  }

  async getMultipleAccounts(
    publicKeys: string[],
    commitment?: CommitmentLevel,
    encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed' = 'base64'
  ): Promise<(AccountInfo | null)[]> {
    try {
      const params = [
        publicKeys,
        {
          commitment: commitment || 'confirmed',
          encoding
        }
      ];

      const response = await this.rpcClient.call(SolanaMethod.GET_MULTIPLE_ACCOUNTS, params) as any;
      return response.value || [];
    } catch (error) {
      throw mapToSolanaError(error, 'getMultipleAccounts');
    }
  }
}
