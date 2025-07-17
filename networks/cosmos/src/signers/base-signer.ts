import { ICryptoBytes, StdFee, Message, IWallet, isIWallet } from '@interchainjs/types';
import { TxBody, SignerInfo, Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { TxResponse } from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import {
  ICosmosSigner,
  CosmosSignArgs,
  EncodedMessage,
  CosmosMessage,
  CosmosSignOptions
} from '../workflows/types';
import {
  CosmosSignerConfig,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  CosmosSignedTransaction,
  OfflineSigner,
  AccountData,
  isOfflineAminoSigner,
  isOfflineDirectSigner
} from './types';
import { ISigningClient, AminoConverter, Encoder } from '../types/signing-client';
import { SimulationResponse } from '@interchainjs/cosmos-types';
import { toBase64, fromBase64, toHex, fromHex, BaseCryptoBytes } from '@interchainjs/utils';
import { sha256 } from '@noble/hashes/sha256';
import { sha512 } from '@noble/hashes/sha512';
import { secp256k1 } from '@noble/curves/secp256k1';
import { ed25519 } from '@noble/curves/ed25519';

/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export abstract class BaseCosmosSigner implements ICosmosSigner {
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
    if (isOfflineAminoSigner(this.auth) || isOfflineDirectSigner(this.auth)) {
      throw new Error('Offline signers do not support signArbitrary');
    } else if (isIWallet(this.auth)) {
      return this.auth.signByIndex(data, index);
    } else {
      throw new Error('Invalid auth type');
    }
  }

  abstract sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction>;

  async broadcast(
    signed: CosmosSignedTransaction,
    options: CosmosBroadcastOptions = {}
  ): Promise<CosmosBroadcastResponse> {
    const { mode = 'sync', checkTx = true, timeout = 30000 } = options;

    let response;
    switch (mode) {
      case 'sync':
        response = await this.config.queryClient.broadcastTxSync({ tx: signed.txBytes });
        break;
      case 'async':
        response = await this.config.queryClient.broadcastTxAsync({ tx: signed.txBytes });
        break;
      case 'commit':
        response = await this.config.queryClient.broadcastTxCommit({ tx: signed.txBytes });
        break;
      default:
        throw new Error(`Unsupported broadcast mode: ${mode}`);
    }

    const result: CosmosBroadcastResponse = {
      transactionHash: toHex(response.hash),
      rawResponse: response
    };

    // For sync and async modes, optionally check transaction result
    if (checkTx && (mode === 'sync' || mode === 'async')) {
      try {
        // Wait for transaction to be included in a block
        const txResult = await this.waitForTransaction(toHex(response.hash), timeout);
        result.height = txResult.height;
        result.gasUsed = BigInt(txResult.gasUsed || 0);
        result.gasWanted = BigInt(txResult.gasWanted || 0);
        result.code = txResult.code;
        result.events = txResult.events;
      } catch (error) {
        // If we can't get the transaction result, still return the hash
        console.warn('Failed to get transaction result:', error);
      }
    }

    // For commit mode, extract additional information
    if (mode === 'commit') {
      const commitResponse = response as any;
      result.height = commitResponse.height;

      // Handle both deliverTx (Tendermint 0.34 & 0.37) and txResult (CometBFT 0.38)
      const txData = commitResponse.deliverTx || commitResponse.txResult;
      if (txData) {
        result.gasUsed = BigInt(txData.gasUsed || 0);
        result.gasWanted = BigInt(txData.gasWanted || 0);
        result.code = txData.code;
        result.events = txData.events;
      }
    }

    return result;
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
  ): Promise<TxResponse>;

  async signAndBroadcast(
    argsOrSignerAddress: CosmosSignArgs | string,
    messagesOrOptions?: CosmosBroadcastOptions | readonly Message<any>[],
    fee?: StdFee | 'auto',
    memo?: string
  ): Promise<CosmosBroadcastResponse | TxResponse> {
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
      const cosmosMessages = messages.map(msg => ({
        typeUrl: msg.typeUrl,
        value: msg.value
      }));

      const cosmosSignArgs: CosmosSignArgs = {
        messages: cosmosMessages,
        fee: fee === 'auto' ? undefined : fee as StdFee,
        memo: memo || ''
      };

      // Sign and broadcast the transaction
      const signed = await this.sign(cosmosSignArgs);
      const response = await this.broadcast(signed, {});

      // Convert CosmosBroadcastResponse to TxResponse for ISigningClient
      return this.convertToTxResponse(response);
    } else {
      // Base class interface: CosmosSignArgs
      const args = argsOrSignerAddress;
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
      rawResponse: response
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

  private async waitForTransaction(hash: string, timeout: number = 30000): Promise<any> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      try {
        const txResponse = await this.config.queryClient.getTx(hash);
        if (txResponse) {
          return {
            height: txResponse.height,
            gasUsed: txResponse.txResult.gasUsed,
            gasWanted: txResponse.txResult.gasWanted,
            code: txResponse.txResult.code,
            events: txResponse.txResult.events
          };
        }
      } catch (error) {
        // Transaction not found yet, continue waiting
      }

      // Wait 1 second before trying again
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    throw new Error(`Transaction ${hash} not found within timeout period`);
  }

  getEncoder(typeUrl: string): Encoder {
    // This would typically use a registry of encoders
    // For now, return a basic implementation
    return {
      typeUrl,
      encode: (value: any) => {
        // TODO: Implement proper message encoding based on typeUrl
        return new Uint8Array();
      },
      fromPartial: (value: any) => value
    };
  }

  getConverterFromTypeUrl(typeUrl: string): AminoConverter {
    // This would typically use a registry of converters
    // For now, return a basic implementation
    return {
      typeUrl,
      aminoType: typeUrl.replace(/^\//, ''),
      toAmino: (value: any) => value,
      fromAmino: (value: any) => value
    };
  }

  async simulateByTxBody(
    txBody: TxBody,
    signerInfos: SignerInfo[]
  ): Promise<SimulationResponse> {
    // TODO: Implement transaction simulation
    // This would typically involve creating a simulation transaction and querying the chain
    return {
      gasInfo: {
        gasUsed: BigInt(200000), // Default gas estimate
        gasWanted: BigInt(200000)
      }
    };
  }

  get encodedPublicKey(): EncodedMessage {
    // This should be implemented by subclasses or cached from wallet
    throw new Error('encodedPublicKey must be implemented by subclass');
  }

  // Helper methods

  protected createBroadcastFunction(
    txBytes: Uint8Array
  ): (options?: CosmosBroadcastOptions) => Promise<CosmosBroadcastResponse> {
    return async (options: CosmosBroadcastOptions = {}) => {
      return this.broadcastArbitrary(txBytes, options);
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
   * Register converters (required by ICosmosSigner interface)
   * Base implementation - subclasses can override if they use amino converters
   */
  addConverters(converters: AminoConverter[]): void {
    // Base class doesn't use amino converters
    // This is a no-op implementation to satisfy the interface
  }

  /**
   * Convert CosmosBroadcastResponse to TxResponse
   */
  protected convertToTxResponse(response: any): TxResponse {
    // Extract the raw response data
    const rawResponse = response.rawResponse || response;

    return {
      height: BigInt(response.height || rawResponse.height || 0),
      txhash: response.transactionHash || rawResponse.hash || '',
      codespace: rawResponse.codespace || '',
      code: response.code || rawResponse.code || 0,
      data: rawResponse.data || '',
      rawLog: rawResponse.raw_log || rawResponse.rawLog || '',
      logs: rawResponse.logs || [],
      info: rawResponse.info || '',
      gasWanted: BigInt(response.gasWanted || rawResponse.gas_wanted || rawResponse.gasWanted || 0),
      gasUsed: BigInt(response.gasUsed || rawResponse.gas_used || rawResponse.gasUsed || 0),
      tx: rawResponse.tx || undefined,
      timestamp: rawResponse.timestamp || '',
      events: response.events || rawResponse.events || []
    };
  }
}
