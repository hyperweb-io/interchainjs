import { TransactionOptions, EthereumSignerConfig, EndpointOptions } from './types';
import deepmerge from 'deepmerge';

/**
 * Default configuration for Ethereum signers
 * Provides sensible defaults for gas calculation, transaction options, and network settings
 */
export const DEFAULT_ETHEREUM_SIGNER_CONFIG: Partial<TransactionOptions> = {
  // Gas calculation defaults
  gasMultiplier: 1.5, // 50% gas multiplier for safety margin

  // Legacy transaction defaults (pre-EIP-1559)
  gasPrice: BigInt('20000000000'), // 20 gwei default gas price

  // EIP-1559 transaction defaults
  maxFeePerGas: BigInt('30000000000'), // 30 gwei max fee per gas
  maxPriorityFeePerGas: BigInt('2000000000'), // 2 gwei priority fee

  // Chain ID will be auto-detected from query client if not provided
  chainId: undefined
};

/**
 * Creates a complete Ethereum signer configuration by merging user-provided config with defaults
 * @param userConfig - User-provided configuration (must include required EndpointOptions)
 * @returns Complete EthereumSignerConfig with defaults applied
 */
export function createEthereumSignerConfig(userConfig: EthereumSignerConfig): EthereumSignerConfig {
  // Ensure required EndpointOptions are present
  if (!userConfig.queryClient) {
    throw new Error('queryClient is required in signer configuration');
  }

  // Deep merge user config with defaults, giving priority to user config
  // Use customMerge to preserve queryClient object without cloning
  return deepmerge(DEFAULT_ETHEREUM_SIGNER_CONFIG, userConfig, {
    // Custom merge function to handle arrays properly
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
    // Custom merge to preserve queryClient object
    customMerge: (key) => {
      if (key === 'queryClient') {
        // Don't merge queryClient, just use the source value directly
        return (target, source) => source;
      }
    },
    // Clone to avoid mutations, but queryClient will be preserved by customMerge
    clone: true
  }) as EthereumSignerConfig;
}

/**
 * Creates a partial configuration for use in sign operations
 * Merges the base signer config with operation-specific options
 * @param baseConfig - Base signer configuration
 * @param operationOptions - Operation-specific options (from sign args)
 * @returns Merged configuration for the operation
 */
export function mergeEthereumSignerOptions(
  baseConfig: EthereumSignerConfig,
  operationOptions: Partial<TransactionOptions> = {}
): TransactionOptions {
  return deepmerge(baseConfig, operationOptions, {
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
    clone: true
  }) as TransactionOptions;
}

/**
 * Network-specific default configurations for common Ethereum networks
 */
export const NETWORK_DEFAULTS = {
  // Ethereum Mainnet
  mainnet: {
    chainId: 1,
    gasPrice: BigInt('20000000000'), // 20 gwei
    maxFeePerGas: BigInt('30000000000'), // 30 gwei
    maxPriorityFeePerGas: BigInt('2000000000'), // 2 gwei
    gasMultiplier: 1.2
  },

  // Ethereum Goerli Testnet
  goerli: {
    chainId: 5,
    gasPrice: BigInt('10000000000'), // 10 gwei
    maxFeePerGas: BigInt('20000000000'), // 20 gwei
    maxPriorityFeePerGas: BigInt('1000000000'), // 1 gwei
    gasMultiplier: 1.5
  },

  // Ethereum Sepolia Testnet
  sepolia: {
    chainId: 11155111,
    gasPrice: BigInt('10000000000'), // 10 gwei
    maxFeePerGas: BigInt('20000000000'), // 20 gwei
    maxPriorityFeePerGas: BigInt('1000000000'), // 1 gwei
    gasMultiplier: 1.5
  },

  // Polygon Mainnet
  polygon: {
    chainId: 137,
    gasPrice: BigInt('30000000000'), // 30 gwei
    maxFeePerGas: BigInt('50000000000'), // 50 gwei
    maxPriorityFeePerGas: BigInt('30000000000'), // 30 gwei
    gasMultiplier: 1.3
  },

  // Arbitrum One
  arbitrum: {
    chainId: 42161,
    gasPrice: BigInt('1000000000'), // 1 gwei
    maxFeePerGas: BigInt('2000000000'), // 2 gwei
    maxPriorityFeePerGas: BigInt('100000000'), // 0.1 gwei
    gasMultiplier: 1.1
  }
} as const;

/**
 * Creates a network-specific configuration by merging network defaults with user config
 * @param network - Network name from NETWORK_DEFAULTS
 * @param userConfig - User-provided configuration
 * @returns Complete EthereumSignerConfig with network-specific defaults
 */
export function createNetworkSignerConfig(
  network: keyof typeof NETWORK_DEFAULTS,
  userConfig: EthereumSignerConfig
): EthereumSignerConfig {
  const networkDefaults = NETWORK_DEFAULTS[network];

  // First merge network defaults with global defaults
  const configWithNetworkDefaults = deepmerge(
    DEFAULT_ETHEREUM_SIGNER_CONFIG,
    networkDefaults,
    { clone: true }
  );

  // Then merge with user config
  return createEthereumSignerConfig(
    deepmerge(configWithNetworkDefaults, userConfig, { clone: true }) as EthereumSignerConfig
  );
}
