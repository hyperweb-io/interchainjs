import { DocOptions, CosmosSignerConfig, EndpointOptions } from './types';
import deepmerge from 'deepmerge';

/**
 * Default configuration for Cosmos signers
 * Provides sensible defaults for fee calculation, signing options, and transaction options
 */
export const DEFAULT_COSMOS_SIGNER_CONFIG: Partial<DocOptions> = {
  // FeeOptions - Gas and fee calculation defaults
  multiplier: 1.3, // 30% gas multiplier for safety margin
  gasPrice: 'average', // Use average gas price from network

  // SignOptions - Signing and address defaults
  addressPrefix: 'cosmos', // Default Cosmos Hub prefix
  message: {
    hash: 'sha256' // Standard Cosmos hash function
  },

  // TxOptions - Transaction-level defaults
  unordered: false, // Ordered transactions by default
  extensionOptions: [], // No extension options by default
  nonCriticalExtensionOptions: [] // No non-critical extension options by default
};

/**
 * Creates a complete Cosmos signer configuration by merging user-provided config with defaults
 * @param userConfig - User-provided configuration (must include required EndpointOptions)
 * @returns Complete CosmosSignerConfig with defaults applied
 */
export function createCosmosSignerConfig(userConfig: CosmosSignerConfig): CosmosSignerConfig {
  // Ensure required EndpointOptions are present
  if (!userConfig.queryClient) {
    throw new Error('queryClient is required in signer configuration');
  }

  const queryClient = userConfig.queryClient;

  // Deep merge user config with defaults, giving priority to user config
  const mergedConfig = deepmerge(DEFAULT_COSMOS_SIGNER_CONFIG, userConfig, {
    // Custom merge function to handle arrays properly
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
    // Clone to avoid mutations
    clone: true
  }) as CosmosSignerConfig;

  mergedConfig.queryClient = queryClient;

  return mergedConfig;
}

/**
 * Creates a partial configuration for use in sign operations
 * Merges the base signer config with operation-specific options
 * @param baseConfig - Base signer configuration
 * @param operationOptions - Operation-specific options (from sign args)
 * @returns Merged configuration for the operation
 */
export function mergeSignerOptions(
  baseConfig: CosmosSignerConfig,
  operationOptions: Partial<DocOptions> = {}
): DocOptions {
  return deepmerge(baseConfig, operationOptions, {
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
    clone: true
  }) as DocOptions;
}
