import { InjectiveDocOptions, InjectiveSignerConfig } from './types';
import deepmerge from 'deepmerge';

/**
 * Default configuration for Injective signers
 * Provides Injective-specific defaults for fee calculation, signing options, and transaction options
 */
export const DEFAULT_INJECTIVE_SIGNER_CONFIG: Partial<InjectiveDocOptions> = {
  // FeeOptions - Gas and fee calculation defaults for Injective
  multiplier: 1.5, // Higher gas multiplier for Injective due to EVM compatibility
  gasPrice: 'average', // Use average gas price from network

  // SignOptions - Injective-specific signing and address defaults
  addressPrefix: 'inj', // Injective address prefix
  message: {
    hash: 'keccak256' // Injective uses keccak256 for Ethereum compatibility
  },

  // Signature format options - Injective-specific signature processing
  signature: {
    format: 'compact' // Default to compact format for Cosmos compatibility
  },

  // TxOptions - Transaction-level defaults
  unordered: false, // Ordered transactions by default
  extensionOptions: [], // No extension options by default
  nonCriticalExtensionOptions: [] // No non-critical extension options by default
};

/**
 * Creates a complete Injective signer configuration by merging user-provided config with defaults
 * @param userConfig - User-provided configuration (must include required EndpointOptions)
 * @returns Complete CosmosSignerConfig with Injective defaults applied
 */
export function createInjectiveSignerConfig(userConfig: InjectiveSignerConfig): InjectiveSignerConfig {
  // Ensure required EndpointOptions are present
  if (!userConfig.queryClient) {
    throw new Error('queryClient is required in signer configuration');
  }

  // Deep merge user config with Injective defaults, giving priority to user config
  return deepmerge(DEFAULT_INJECTIVE_SIGNER_CONFIG, userConfig, {
    // Custom merge function to handle arrays properly
    arrayMerge: (_destinationArray, sourceArray) => sourceArray,
    // Clone to avoid mutations
    clone: true
  }) as InjectiveSignerConfig;
}

/**
 * Creates a partial configuration for use in sign operations
 * Merges the base signer config with operation-specific options
 * @param baseConfig - Base signer configuration
 * @param operationOptions - Operation-specific options (from sign args)
 * @returns Merged configuration for the operation
 */
export function mergeInjectiveSignerOptions(
  baseConfig: InjectiveSignerConfig,
  operationOptions: Partial<InjectiveDocOptions> = {}
): InjectiveDocOptions {
  return deepmerge(baseConfig, operationOptions, {
    arrayMerge: (_destinationArray, sourceArray) => sourceArray,
    clone: true
  }) as InjectiveDocOptions;
}
