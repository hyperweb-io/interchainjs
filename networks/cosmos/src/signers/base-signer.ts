import { ICryptoBytes, StdFee, Message, IWallet, isIWallet } from '@interchainjs/types';
import { Tx, TxBody, SignerInfo, AuthInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { TxResponse } from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { TxResponse as QueryTxResponse } from '../types';
import {
  CosmosSignerConfig,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  CosmosSignedTransaction,
  OfflineSigner,
  AccountData,
  isOfflineAminoSigner,
  isOfflineDirectSigner,
  ICosmosSigner,
  CosmosSignArgs,
  EncodedMessage
} from './types';
import { ISigningClient, Encoder } from '../types/signing-client';
import { getSimulate, SimulationResponse } from '@interchainjs/cosmos-types';
import { toHex } from '@interchainjs/utils';
import deepmerge from 'deepmerge';

/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export abstract class BaseCosmosSigner implements ICosmosSigner, ISigningClient {
  protected config: CosmosSignerConfig;
  protected auth: OfflineSigner | IWallet;
  protected encoders: Encoder[] = [];

  constructor(auth: OfflineSigner | IWallet, config: CosmosSignerConfig) {
    this.auth = auth;
    this.config = config;
  }

  // IUniSigner interface methods
  async getAccounts(): Promise<readonly AccountData[]> {
    if (isOfflineAminoSigner(this.auth) || isOfflineDirectSigner(this.auth)) {
      return this.auth.getAccounts();
    } else if (isIWallet(this.auth)) {
      return (await this.auth.getAccounts()).map(account => ({
        address: account.address!,
        pubkey: account.pubkey,
        algo: account.algo
      }));
    } else {
      throw new Error('Invalid auth type');
    }
  }

  async signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes> {
    if (isIWallet(this.auth)) {
      return this.auth.signByIndex(data, index);
    } else if (isOfflineAminoSigner(this.auth) || isOfflineDirectSigner(this.auth)) {
      throw new Error('Offline signers do not support signArbitrary');
    } else {
      throw new Error('Invalid auth type');
    }
  }

  abstract sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction>;

  async broadcast(
    signed: CosmosSignedTransaction,
    options: CosmosBroadcastOptions = {}
  ): Promise<CosmosBroadcastResponse> {
    const { mode = 'sync', timeoutMs = 30000, pollIntervalMs = 3000 } = options;

    const response = await this.broadcastArbitrary(signed.txBytes, { mode });

    // Create the broadcast response with wait function
    const broadcastResponse: CosmosBroadcastResponse = {
      transactionHash: response.transactionHash,
      rawResponse: response.rawResponse,
      broadcastResponse: response.broadcastResponse,
      wait: async (waitTimeoutMs?: number, waitPollIntervalMs?: number) => {
        const timeout = waitTimeoutMs ?? timeoutMs;
        const poll = waitPollIntervalMs ?? pollIntervalMs;

        return await this.waitForTransaction(response.transactionHash, timeout, poll);
      }
    };

    return broadcastResponse;
  }

  /**
   * Sign and broadcast with function overloading
   * Supports both base class signature and ISigningClient signature
   */
  async signAndBroadcast(
    args: CosmosSignArgs,
    options?: CosmosBroadcastOptions
  ): Promise<CosmosBroadcastResponse>;

  async signAndBroadcast(
    signerAddress: string,
    messages: readonly Message<any>[],
    fee: StdFee | 'auto',
    memo?: string
  ): Promise<CosmosBroadcastResponse>;

  async signAndBroadcast(
    argsOrSignerAddress: CosmosSignArgs | string,
    messagesOrOptions?: CosmosBroadcastOptions | readonly Message<any>[],
    fee?: StdFee | 'auto',
    memo?: string
  ): Promise<CosmosBroadcastResponse> {
    if (typeof argsOrSignerAddress === 'string') {
      // ISigningClient interface: individual parameters
      const signerAddress = argsOrSignerAddress;
      const messages = messagesOrOptions as readonly Message<any>[];

      // Verify signer address matches
      const accounts = await this.getAccounts();
      const account = accounts.find(acc => acc.address === signerAddress);
      if (!account) {
        throw new Error('Signer address does not match');
      }

      // Convert Message<any>[] to CosmosMessage[]
      const cosmosMessages = messages;

      const cosmosSignArgs: CosmosSignArgs = {
        messages: cosmosMessages,
        fee: fee === 'auto' ? undefined : fee as StdFee,
        memo: memo || '',
        options: {
          signerAddress: signerAddress,
          ...this.config
        }
      };

      // Sign and broadcast the transaction
      const signed = await this.sign(cosmosSignArgs);
      const response = await this.broadcast(signed, {});

      // Convert CosmosBroadcastResponse to TxResponse for ISigningClient
      return response;
    } else {
      // Base class interface: CosmosSignArgs
      const args = argsOrSignerAddress;
      args.options = deepmerge(this.config, args.options || {});
      const options = (messagesOrOptions as CosmosBroadcastOptions) || {};
      const signed = await this.sign(args);
      return this.broadcast(signed, options);
    }
  }

  async broadcastArbitrary(
    data: Uint8Array,
    options: CosmosBroadcastOptions = {}
  ): Promise<CosmosBroadcastResponse> {
    const { mode = 'sync' } = options;

    let response;
    switch (mode) {
      case 'sync':
        response = await this.config.queryClient.broadcastTxSync({ tx: data });
        break;
      case 'async':
        response = await this.config.queryClient.broadcastTxAsync({ tx: data });
        break;
      case 'commit':
        response = await this.config.queryClient.broadcastTxCommit({ tx: data });
        break;
      default:
        throw new Error(`Unsupported broadcast mode: ${mode}`);
    }

    return {
      transactionHash: toHex(response.hash),
      rawResponse: response,
      broadcastResponse: response,
      wait: async (timeoutMs?: number, pollIntervalMs?: number) => {
        const txResult = await this.waitForTransaction(toHex(response.hash), timeoutMs || 30000, pollIntervalMs || 3000);
        return txResult;
      }
    };
  }

  // ICosmosSigner specific methods
  async getAddresses(): Promise<string[]> {
    const accounts = await this.getAccounts();
    return accounts.map(acc => acc.address);
  }

  async getChainId(): Promise<string> {
    // First, try to return from config (fastest)
    if (this.config.chainId) {
      return this.config.chainId;
    }

    // Fallback: get from query client (network verification)
    try {
      const status = await this.config.queryClient.getStatus();
      if (status && status.nodeInfo && status.nodeInfo.network) {
        return status.nodeInfo.network;
      }
    } catch (error) {
      console.warn('Failed to get chain ID from query client:', error);
    }

    // Fallback: get from latest block header
    try {
      const header = await this.config.queryClient.getHeader();
      if (header && header.chainId) {
        return header.chainId;
      }
    } catch (error) {
      console.warn('Failed to get chain ID from header:', error);
    }

    // Final fallback: throw error if no method works
    throw new Error('Unable to determine chain ID from any available source');
  }

  async getAccountNumber(address: string): Promise<bigint> {
    // Use the getBaseAccount method for proper account querying
    try {
      const baseAccount = await this.config.queryClient.getBaseAccount(address);
      if (baseAccount) {
        return baseAccount.accountNumber;
      }
      console.warn('Account not found, using default account number');
      return BigInt(0);
    } catch (error) {
      console.warn('Failed to get account number, using default:', error);
      return BigInt(0);
    }
  }

  async getSequence(address: string): Promise<bigint> {
    // Use the getBaseAccount method for proper account querying
    try {
      const baseAccount = await this.config.queryClient.getBaseAccount(address);
      if (baseAccount) {
        return baseAccount.sequence;
      }
      console.warn('Account not found, using default sequence');
      return BigInt(0);
    } catch (error) {
      console.warn('Failed to get sequence, using default:', error);
      return BigInt(0);
    }
  }

  private async waitForTransaction(hash: string, timeoutMs: number = 30000, pollIntervalMs = 3000): Promise<TxResponse> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      try {
        const txResponse = await this.config.queryClient.getTx(hash);
        if (txResponse) {
          return this.convertToTxResponse(txResponse);
        }
      } catch (error) {
        // Transaction not found yet, continue waiting
      }

      // Wait 1 second before trying again
      await new Promise(resolve => setTimeout(resolve, pollIntervalMs));
    }

    throw new Error(`Transaction ${hash} not found within timeout period`);
  }

  getEncoder(typeUrl: string): Encoder {
    return this.encoders.find(encoder => encoder.typeUrl === typeUrl);
  }

  async simulateByTxBody(
    txBody: TxBody,
    signerInfos: SignerInfo[]
  ): Promise<SimulationResponse> {
    // Build AuthInfo with signerInfos and empty fee for simulation
    const authInfo = AuthInfo.fromPartial({
      signerInfos: signerInfos,
      fee: {
        amount: [], // Empty for simulation
        gasLimit: BigInt(0), // Will be determined by simulation
      },
    });

    // Build the complete transaction
    const tx = Tx.fromPartial({
      body: txBody,
      authInfo: authInfo,
      signatures: [], // Empty signatures for simulation
    });

    // Encode transaction to bytes
    const txBytes = Tx.encode(tx).finish();

    // Create simulation request
    const simulateRequest = {
      txBytes: txBytes,
    };

    // Use getSimulate from cosmos-types service
    const response = await getSimulate(this.config.queryClient, simulateRequest);

    // Map response to SimulationResponse
    if (response.gasInfo) {
      return {
        gasInfo: {
          gasUsed: response.gasInfo.gasUsed || BigInt(0),
          gasWanted: response.gasInfo.gasWanted || BigInt(0),
        },
        result: response.result,
      };
    }

    // Return empty gas info if no gas info in response
    return {
      gasInfo: {
        gasUsed: BigInt(0),
        gasWanted: BigInt(0),
      },
    };
  }

  // ISigningClient implementation methods

  /**
   * Register encoders
   */
  addEncoders(encoders: Encoder[]): void {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.encoders.map(e => e.typeUrl));

    // Filter out encoders with duplicate typeUrls
    const newEncoders = encoders.filter(encoder => !existingTypeUrls.has(encoder.typeUrl));

    // Add only the unique encoders
    this.encoders.push(...newEncoders);
  }

  /**
   * Convert QueryTxResponse to TxResponse
   * Transforms transaction query response into standard TxResponse format
   */
  protected convertToTxResponse(response: QueryTxResponse): TxResponse | null {
    if (!response) return null;

    try {
      // Create the Cosmos SDK TxResponse format
      const result: TxResponse = {
        height: BigInt(response.height || 0),
        txhash: Buffer.from(response.hash).toString('hex').toUpperCase(),
        codespace: response.txResult?.codespace || '',
        code: response.txResult?.code || 0,
        data: response.txResult?.data ? Buffer.from(response.txResult.data).toString('base64') : '',
        rawLog: response.txResult?.log || '',
        logs: [], // TODO: Convert events to proper log format
        info: response.txResult?.info || '',
        gasWanted: response.txResult?.gasWanted || BigInt(0),
        gasUsed: response.txResult?.gasUsed || BigInt(0),
        tx: {
          typeUrl: '/cosmos.tx.v1beta1.Tx',
          value: response.tx,
        },
        timestamp: '', // This should be populated by the caller
        events: response.txResult?.events ? response.txResult.events as any[] : [],
      };

      return result;
    } catch (error) {
      console.error('Error converting QueryTxResponse to TxResponse:', error);
      return null;
    }
  }
}
