/**
 * Solana V1 Protocol Adapter Implementation
 */

import { 
  BaseSolanaProtocolAdapter, 
  ISolanaProtocolAdapter, 
  SolanaTransaction,
  DEFAULT_SOLANA_CAPABILITIES,
  mergeCapabilities
} from './base';
import { 
  SolanaVersion, 
  SolanaMethod, 
  SolanaCapabilities, 
  SolanaBlock,
  EncodedTransaction,
  SolanaAccount,
  RpcResponse,
  GetBalanceParams,
  GetAccountInfoParams,
  SendTransactionParams,
  CommitmentLevel
} from '../types/protocol';
import { TransactionInstruction, PublicKey, AccountInfo } from '../types/common';

/**
 * Concrete implementation of Solana V1 protocol adapter
 */
export class SolanaV1Adapter extends BaseSolanaProtocolAdapter {
  constructor(capabilities?: Partial<SolanaCapabilities>) {
    const defaultCapabilities = DEFAULT_SOLANA_CAPABILITIES[SolanaVersion.V1];
    const mergedCapabilities = capabilities 
      ? mergeCapabilities(defaultCapabilities, capabilities)
      : defaultCapabilities;
    
    super(SolanaVersion.V1, mergedCapabilities);
  }

  protected initializeSupportedMethods(): Set<SolanaMethod> {
    return new Set([
      SolanaMethod.GET_BALANCE,
      SolanaMethod.GET_ACCOUNT_INFO,
      SolanaMethod.GET_LATEST_BLOCKHASH,
      SolanaMethod.GET_BLOCK,
      SolanaMethod.GET_BLOCK_HEIGHT,
      SolanaMethod.GET_CLUSTER_NODES,
      SolanaMethod.GET_EPOCH_INFO,
      SolanaMethod.GET_EPOCH_SCHEDULE,
      SolanaMethod.GET_FEE_FOR_MESSAGE,
      SolanaMethod.GET_FIRST_AVAILABLE_BLOCK,
      SolanaMethod.GET_GENESIS_HASH,
      SolanaMethod.GET_HEALTH,
      SolanaMethod.GET_IDENTITY,
      SolanaMethod.GET_INFLATION_GOVERNOR,
      SolanaMethod.GET_INFLATION_RATE,
      SolanaMethod.GET_LARGEST_ACCOUNTS,
      SolanaMethod.GET_LEADER_SCHEDULE,
      SolanaMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
      SolanaMethod.GET_MULTIPLE_ACCOUNTS,
      SolanaMethod.GET_PROGRAM_ACCOUNTS,
      SolanaMethod.GET_SIGNATURES_FOR_ADDRESS,
      SolanaMethod.GET_SIGNATURE_STATUSES,
      SolanaMethod.GET_SLOT,
      SolanaMethod.GET_SLOT_LEADER,
      SolanaMethod.GET_SUPPLY,
      SolanaMethod.GET_TOKEN_ACCOUNTS_BY_OWNER,
      SolanaMethod.GET_TOKEN_LARGEST_ACCOUNTS,
      SolanaMethod.GET_TOKEN_SUPPLY,
      SolanaMethod.GET_TRANSACTION,
      SolanaMethod.GET_TRANSACTION_COUNT,
      SolanaMethod.GET_VERSION,
      SolanaMethod.GET_VOTE_ACCOUNTS,
      SolanaMethod.IS_BLOCKHASH_VALID,
      SolanaMethod.MINIMUM_LEDGER_SLOT,
      SolanaMethod.REQUEST_AIRDROP,
      SolanaMethod.SEND_TRANSACTION,
      SolanaMethod.SIMULATE_TRANSACTION,
      // WebSocket methods
      SolanaMethod.ACCOUNT_SUBSCRIBE,
      SolanaMethod.ACCOUNT_UNSUBSCRIBE,
      SolanaMethod.LOGS_SUBSCRIBE,
      SolanaMethod.LOGS_UNSUBSCRIBE,
      SolanaMethod.PROGRAM_SUBSCRIBE,
      SolanaMethod.PROGRAM_UNSUBSCRIBE,
      SolanaMethod.SIGNATURE_SUBSCRIBE,
      SolanaMethod.SIGNATURE_UNSUBSCRIBE,
      SolanaMethod.SLOT_SUBSCRIBE,
      SolanaMethod.SLOT_UNSUBSCRIBE
    ]);
  }

  encodeRequest<TParams>(method: SolanaMethod, params: TParams): unknown {
    if (!this.validateMethod(method)) {
      throw this.createError(`Unsupported method: ${method}`, method);
    }

    switch (method) {
      case SolanaMethod.GET_BALANCE:
        return this.encodeGetBalanceRequest(params as GetBalanceParams);
      
      case SolanaMethod.GET_ACCOUNT_INFO:
        return this.encodeGetAccountInfoRequest(params as GetAccountInfoParams);
      
      case SolanaMethod.SEND_TRANSACTION:
        return this.encodeSendTransactionRequest(params as SendTransactionParams);
      
      case SolanaMethod.GET_LATEST_BLOCKHASH:
        return this.encodeGetLatestBlockhashRequest(params);
      
      case SolanaMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION:
        return this.encodeGetMinimumBalanceRequest(params);
      
      default:
        // For methods without special encoding, return params as-is
        return params ? [params] : [];
    }
  }

  decodeResponse<TResponse>(method: SolanaMethod, response: unknown): TResponse {
    if (!this.validateMethod(method)) {
      throw this.createError(`Unsupported method: ${method}`, method);
    }

    if (!this.validateResponse(method, response)) {
      throw this.createError(`Invalid response for method: ${method}`, method);
    }

    switch (method) {
      case SolanaMethod.GET_BALANCE:
        return this.decodeGetBalanceResponse(response) as TResponse;
      
      case SolanaMethod.GET_ACCOUNT_INFO:
        return this.decodeGetAccountInfoResponse(response) as TResponse;
      
      case SolanaMethod.GET_LATEST_BLOCKHASH:
        return this.decodeGetLatestBlockhashResponse(response) as TResponse;
      
      case SolanaMethod.SEND_TRANSACTION:
        return this.decodeSendTransactionResponse(response) as TResponse;
      
      default:
        // For methods without special decoding, return response as-is
        return response as TResponse;
    }
  }

  encodeTransaction(tx: SolanaTransaction): EncodedTransaction {
    try {
      // Serialize the transaction message
      const messageBytes = this.serializeTransactionMessage(tx.message);
      
      return {
        serialized: messageBytes,
        signatures: tx.signatures
      };
    } catch (error) {
      throw this.createError('Failed to encode transaction', undefined, error as Error);
    }
  }

  decodeBlock(block: unknown): SolanaBlock {
    try {
      const blockData = block as any;
      
      return {
        blockhash: blockData.blockhash,
        previousBlockhash: blockData.previousBlockhash,
        parentSlot: blockData.parentSlot,
        transactions: blockData.transactions || [],
        rewards: blockData.rewards || [],
        blockTime: blockData.blockTime,
        blockHeight: blockData.blockHeight
      };
    } catch (error) {
      throw this.createError('Failed to decode block', undefined, error as Error);
    }
  }

  encodeInstruction(instruction: TransactionInstruction): unknown {
    try {
      return {
        programId: instruction.programId.toBase58(),
        accounts: instruction.keys.map(key => ({
          pubkey: key.pubkey.toBase58(),
          isSigner: key.isSigner,
          isWritable: key.isWritable
        })),
        data: Array.from(instruction.data)
      };
    } catch (error) {
      throw this.createError('Failed to encode instruction', undefined, error as Error);
    }
  }

  decodeAccountInfo(data: unknown): SolanaAccount {
    try {
      const accountData = data as any;
      const rpcResponse = accountData as RpcResponse<AccountInfo>;
      
      return {
        ...rpcResponse.value,
        pubkey: new PublicKey(accountData.pubkey || '')
      };
    } catch (error) {
      throw this.createError('Failed to decode account info', undefined, error as Error);
    }
  }

  // Private encoding methods
  private encodeGetBalanceRequest(params: GetBalanceParams): unknown[] {
    if (!this.isValidPublicKey(params.publicKey)) {
      throw this.createError('Invalid public key in getBalance request');
    }

    const requestParams: unknown[] = [params.publicKey];
    
    if (params.commitment) {
      requestParams.push({
        commitment: params.commitment,
        encoding: 'base64'
      });
    }
    
    return requestParams;
  }

  private encodeGetAccountInfoRequest(params: GetAccountInfoParams): unknown[] {
    if (!this.isValidPublicKey(params.publicKey)) {
      throw this.createError('Invalid public key in getAccountInfo request');
    }

    const options: any = {};
    
    if (params.commitment) {
      options.commitment = params.commitment;
    }
    
    if (params.encoding) {
      options.encoding = params.encoding;
    } else {
      options.encoding = 'base64';
    }
    
    if (params.dataSlice) {
      options.dataSlice = params.dataSlice;
    }

    return [params.publicKey, options];
  }

  private encodeSendTransactionRequest(params: SendTransactionParams): unknown[] {
    const requestParams: unknown[] = [params.transaction];
    
    if (params.options) {
      requestParams.push(params.options);
    }
    
    return requestParams;
  }

  private encodeGetLatestBlockhashRequest(params: unknown): unknown[] {
    const options = params as { commitment?: CommitmentLevel };
    
    if (options?.commitment) {
      return [{ commitment: options.commitment }];
    }
    
    return [];
  }

  private encodeGetMinimumBalanceRequest(params: unknown): unknown[] {
    const dataLength = params as number;
    return [dataLength];
  }

  // Private decoding methods
  private decodeGetBalanceResponse(response: unknown): number {
    const rpcResponse = response as RpcResponse<number>;
    return rpcResponse.value;
  }

  private decodeGetAccountInfoResponse(response: unknown): AccountInfo | null {
    const rpcResponse = response as RpcResponse<AccountInfo | null>;
    return rpcResponse.value;
  }

  private decodeGetLatestBlockhashResponse(response: unknown): any {
    const rpcResponse = response as RpcResponse<any>;
    return rpcResponse.value;
  }

  private decodeSendTransactionResponse(response: unknown): string {
    return response as string;
  }

  // Helper method to serialize transaction message
  private serializeTransactionMessage(message: SolanaTransaction['message']): Uint8Array {
    // This is a simplified serialization - in a real implementation,
    // you would use the proper Solana transaction serialization format
    const encoder = new TextEncoder();
    const serialized = encoder.encode(JSON.stringify({
      accountKeys: message.accountKeys.map(key => key.toBase58()),
      recentBlockhash: message.recentBlockhash,
      instructions: message.instructions.map(ix => this.encodeInstruction(ix)),
      header: message.header
    }));
    
    return serialized;
  }
}
