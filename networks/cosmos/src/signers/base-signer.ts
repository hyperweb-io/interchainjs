import { ICryptoBytes } from '@interchainjs/types';
import { TxBody, SignerInfo, Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
import { 
  ICosmosSigner, 
  CosmosSignArgs, 
  CosmosAccount, 
  EncodedMessage,
  CosmosMessage
} from '../workflows/types';
import { 
  CosmosSignerConfig, 
  CosmosWallet, 
  CosmosBroadcastOptions, 
  CosmosBroadcastResponse,
  CosmosSignedTransaction 
} from './types';
import { toBase64, fromBase64, toHex, fromHex } from '@interchainjs/utils';

/**
 * Base implementation for Cosmos signers
 * Provides common functionality for both Amino and Direct signers
 */
export abstract class BaseCosmosSignerImpl implements ICosmosSigner {
  protected wallet: CosmosWallet;
  protected config: CosmosSignerConfig;

  constructor(wallet: CosmosWallet, config: CosmosSignerConfig) {
    this.wallet = wallet;
    this.config = config;
  }

  // IUniSigner interface methods
  async getAccount(): Promise<CosmosAccount> {
    return this.wallet.getAccount();
  }

  async signArbitrary(data: Uint8Array): Promise<ICryptoBytes> {
    return this.wallet.signArbitrary(data);
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

  async signAndBroadcast(
    args: CosmosSignArgs, 
    options: CosmosBroadcastOptions = {}
  ): Promise<CosmosBroadcastResponse> {
    const signed = await this.sign(args);
    return this.broadcast(signed, options);
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
            gasUsed: txResponse.result.gasUsed,
            gasWanted: txResponse.result.gasWanted,
            code: txResponse.result.code,
            events: txResponse.result.events
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
}