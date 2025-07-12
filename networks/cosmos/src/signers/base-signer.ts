import { ICryptoBytes, StdFee, Message } from '@interchainjs/types';
import { TxBody, SignerInfo, Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { TxResponse } from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { 
  ICosmosSigner, 
  CosmosSignArgs, 
  CosmosAccount, 
  EncodedMessage,
  CosmosMessage,
  CosmosSignOptions
} from '../workflows/types';
import { 
  CosmosSignerConfig, 
  CosmosWallet, 
  CosmosBroadcastOptions, 
  CosmosBroadcastResponse,
  CosmosSignedTransaction,
  Auth,
  OfflineSigner,
  isAuth
} from './types';
import { ISigningClient, AminoConverter, Encoder } from '../types/signing-client';
import { toBase64, fromBase64, toHex, fromHex, BaseCryptoBytes } from '@interchainjs/utils';
import { WalletAdapter } from './wallet-adapter';
import { sha256 } from '@noble/hashes/sha256';
import { sha512 } from '@noble/hashes/sha512';
import { secp256k1 } from '@noble/curves/secp256k1';
import { ed25519 } from '@noble/curves/ed25519';

/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export abstract class BaseCosmosSignerImpl implements ICosmosSigner {
  protected wallet: CosmosWallet;
  protected config: CosmosSignerConfig;
  protected authOrSigner: Auth | OfflineSigner;
  protected encoders: Encoder[] = [];

  constructor(authOrSigner: Auth | OfflineSigner, config: CosmosSignerConfig) {
    this.authOrSigner = authOrSigner;
    this.wallet = WalletAdapter.fromAuthOrSigner(authOrSigner, config.addressPrefix);
    this.config = config;
  }

  /**
   * Get the underlying auth or offline signer
   */
  getAuthOrSigner(): Auth | OfflineSigner {
    return this.authOrSigner;
  }

  // IUniSigner interface methods
  async getAccount(): Promise<CosmosAccount> {
    return this.wallet.getAccount();
  }

  async signArbitrary(data: Uint8Array, options?: CosmosSignOptions): Promise<ICryptoBytes> {
    // If we have an Auth (private key), handle signing directly in the signer
    if (isAuth(this.authOrSigner)) {
      const auth = this.authOrSigner as Auth;
      
      // Apply hash function based on configuration
      let dataToSign = data;
      const hashConfig = options?.sign?.hash;
      
      if (hashConfig !== 'none') {
        if (typeof hashConfig === 'function') {
          dataToSign = hashConfig(data);
        } else if (hashConfig === 'sha512') {
          dataToSign = sha512(data);
        } else {
          // Default to sha256
          dataToSign = sha256(data);
        }
      }
      
      // Get the signing function based on the algorithm
      const privateKey = fromHex(auth.privateKey);
      let signature: Uint8Array;
      
      switch (auth.algo) {
        case 'secp256k1': {
          const sig = secp256k1.sign(dataToSign, privateKey);
          signature = sig.toCompactRawBytes();
          break;
        }
        case 'ed25519': {
          signature = ed25519.sign(dataToSign, privateKey);
          break;
        }
        default:
          throw new Error(`Unsupported signing algorithm: ${auth.algo}`);
      }
      
      return BaseCryptoBytes.from(signature);
    } else {
      // For OfflineSigner, we can't handle arbitrary signing
      throw new Error('Arbitrary signing not supported with OfflineSigner');
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
      const account = await this.getAccount();
      if (signerAddress !== account.address) {
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
  async getAddress(): Promise<string> {
    const account = await this.getAccount();
    return account.address;
  }

  async getChainId(): Promise<string> {
    return this.config.chainId;
  }

  async getAccountNumber(address: string): Promise<bigint> {
    // Query account information from the chain
    try {
      const accountQuery = await this.config.queryClient.queryAbci({
        path: `/cosmos/auth/v1beta1/accounts/${address}`,
        data: new Uint8Array(),
        prove: false
      });
      
      // Parse the account response (this would need proper protobuf decoding)
      // For now, return a default value
      // TODO: Implement proper account querying with protobuf decoding
      return BigInt(0);
    } catch (error) {
      console.warn('Failed to get account number, using default:', error);
      return BigInt(0);
    }
  }

  async getSequence(address: string): Promise<bigint> {
    // Query account information from the chain
    try {
      const accountQuery = await this.config.queryClient.queryAbci({
        path: `/cosmos/auth/v1beta1/accounts/${address}`,
        data: new Uint8Array(),
        prove: false
      });
      
      // Parse the account response (this would need proper protobuf decoding)
      // For now, return a default value
      // TODO: Implement proper account querying with protobuf decoding
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

  getEncoder(typeUrl: string): { encode: (value: any) => Uint8Array } {
    // This would typically use a registry of encoders
    // For now, return a basic implementation
    return {
      encode: (value: any) => {
        // TODO: Implement proper message encoding based on typeUrl
        return new Uint8Array();
      }
    };
  }

  getConverterFromTypeUrl(typeUrl: string): {
    aminoType: string;
    toAmino: (value: any) => any;
    fromAmino: (value: any) => any;
  } {
    // This would typically use a registry of converters
    // For now, return a basic implementation
    return {
      aminoType: typeUrl.replace(/^\//, ''),
      toAmino: (value: any) => value,
      fromAmino: (value: any) => value
    };
  }

  async simulateByTxBody(
    txBody: TxBody, 
    signerInfos: SignerInfo[]
  ): Promise<{ gasInfo: { gasUsed: bigint } }> {
    // TODO: Implement transaction simulation
    // This would typically involve creating a simulation transaction and querying the chain
    return {
      gasInfo: {
        gasUsed: BigInt(200000) // Default gas estimate
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