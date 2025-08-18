/**
 * Base protocol adapter interface for Solana
 */

import { 
  SolanaVersion, 
  SolanaMethod, 
  SolanaCapabilities, 
  SolanaBlock,
  EncodedTransaction,
  SolanaAccount
} from '../types/protocol';
import { TransactionInstruction, PublicKey } from '../types/common';
import { IProtocolAdapter } from '../types/client';

/**
 * Solana-specific protocol adapter interface
 */
export interface ISolanaProtocolAdapter extends IProtocolAdapter<SolanaVersion, SolanaMethod, SolanaCapabilities> {
  // Core protocol methods
  getVersion(): SolanaVersion;
  getSupportedMethods(): Set<SolanaMethod>;
  getCapabilities(): SolanaCapabilities;

  // Request/response transformation
  encodeRequest<TParams>(method: SolanaMethod, params: TParams): unknown;
  decodeResponse<TResponse>(method: SolanaMethod, response: unknown): TResponse;

  // Solana-specific encoding/decoding
  encodeTransaction(tx: SolanaTransaction): EncodedTransaction;
  decodeBlock(block: unknown): SolanaBlock;
  encodeInstruction(instruction: TransactionInstruction): unknown;
  decodeAccountInfo(data: unknown): SolanaAccount;
  
  // Validation methods
  validateMethod(method: SolanaMethod): boolean;
  validateParams(method: SolanaMethod, params: unknown): boolean;
  validateResponse(method: SolanaMethod, response: unknown): boolean;
}

/**
 * Base abstract class for Solana protocol adapters
 */
export abstract class BaseSolanaProtocolAdapter implements ISolanaProtocolAdapter {
  protected readonly version: SolanaVersion;
  protected readonly capabilities: SolanaCapabilities;
  protected readonly supportedMethods: Set<SolanaMethod>;

  constructor(version: SolanaVersion, capabilities: SolanaCapabilities) {
    this.version = version;
    this.capabilities = capabilities;
    this.supportedMethods = this.initializeSupportedMethods();
  }

  getVersion(): SolanaVersion {
    return this.version;
  }

  getSupportedMethods(): Set<SolanaMethod> {
    return new Set(this.supportedMethods);
  }

  getCapabilities(): SolanaCapabilities {
    return { ...this.capabilities };
  }

  validateMethod(method: SolanaMethod): boolean {
    return this.supportedMethods.has(method);
  }

  validateParams(method: SolanaMethod, params: unknown): boolean {
    if (!this.validateMethod(method)) {
      return false;
    }
    
    // Basic validation - can be overridden by concrete implementations
    return params !== undefined;
  }

  validateResponse(method: SolanaMethod, response: unknown): boolean {
    if (!this.validateMethod(method)) {
      return false;
    }
    
    // Basic validation - can be overridden by concrete implementations
    return response !== undefined && response !== null;
  }

  // Abstract methods that must be implemented by concrete adapters
  abstract encodeRequest<TParams>(method: SolanaMethod, params: TParams): unknown;
  abstract decodeResponse<TResponse>(method: SolanaMethod, response: unknown): TResponse;
  abstract encodeTransaction(tx: SolanaTransaction): EncodedTransaction;
  abstract decodeBlock(block: unknown): SolanaBlock;
  abstract encodeInstruction(instruction: TransactionInstruction): unknown;
  abstract decodeAccountInfo(data: unknown): SolanaAccount;

  // Protected helper methods
  protected abstract initializeSupportedMethods(): Set<SolanaMethod>;

  protected createError(message: string, method?: SolanaMethod, cause?: Error): Error {
    const errorMessage = method ? `${method}: ${message}` : message;
    return new Error(errorMessage, { cause });
  }

  protected isValidPublicKey(value: unknown): value is string {
    if (typeof value !== 'string') {
      return false;
    }
    
    try {
      new PublicKey(value);
      return true;
    } catch {
      return false;
    }
  }

  protected isValidCommitment(value: unknown): value is string {
    return typeof value === 'string' && 
           ['processed', 'confirmed', 'finalized'].includes(value);
  }

  protected isValidEncoding(value: unknown): value is string {
    return typeof value === 'string' && 
           ['base58', 'base64', 'base64+zstd', 'jsonParsed'].includes(value);
  }
}

/**
 * Solana transaction interface for adapter
 */
export interface SolanaTransaction {
  signatures: string[];
  message: {
    accountKeys: PublicKey[];
    recentBlockhash: string;
    instructions: TransactionInstruction[];
    header: {
      numRequiredSignatures: number;
      numReadonlySignedAccounts: number;
      numReadonlyUnsignedAccounts: number;
    };
  };
}

/**
 * Adapter factory function type
 */
export type SolanaAdapterFactory = (
  version: SolanaVersion, 
  capabilities?: Partial<SolanaCapabilities>
) => Promise<ISolanaProtocolAdapter>;

/**
 * Default capabilities for different Solana versions
 */
export const DEFAULT_SOLANA_CAPABILITIES: Record<SolanaVersion, SolanaCapabilities> = {
  [SolanaVersion.V1]: {
    supportsVersionedTransactions: true,
    supportsComputeBudget: true,
    supportsTokenExtensions: false,
    maxTransactionSize: 1232,
    supportedCommitmentLevels: ['processed', 'confirmed', 'finalized']
  },
  [SolanaVersion.V2]: {
    supportsVersionedTransactions: true,
    supportsComputeBudget: true,
    supportsTokenExtensions: true,
    maxTransactionSize: 1232,
    supportedCommitmentLevels: ['processed', 'confirmed', 'finalized']
  }
};

/**
 * Utility function to merge capabilities
 */
export function mergeCapabilities(
  base: SolanaCapabilities, 
  override: Partial<SolanaCapabilities>
): SolanaCapabilities {
  return {
    ...base,
    ...override,
    supportedCommitmentLevels: override.supportedCommitmentLevels || base.supportedCommitmentLevels
  };
}

/**
 * Utility function to validate adapter configuration
 */
export function validateAdapterConfig(
  version: SolanaVersion, 
  capabilities: SolanaCapabilities
): boolean {
  // Validate version
  if (!Object.values(SolanaVersion).includes(version)) {
    return false;
  }

  // Validate capabilities
  if (!capabilities.supportedCommitmentLevels || capabilities.supportedCommitmentLevels.length === 0) {
    return false;
  }

  if (capabilities.maxTransactionSize <= 0) {
    return false;
  }

  return true;
}
