import { IWallet, IUniSigner } from '@interchainjs/types';
import { AminoSigner, DirectSigner, createCosmosSignerConfig, CosmosSignerConfig, OfflineSigner } from '@interchainjs/cosmos';
import { LegacyEthereumSigner, EIP1559EthereumSigner, createEthereumSignerConfig, EthereumSignerConfig } from '@interchainjs/ethereum';

// Type definitions for signer options
export type SignerType = 'amino' | 'direct' | 'legacy' | 'eip1559';

/**
 * Options for getSigner function
 */
export interface GetSignerOptions {
  /** The preferred signing method */
  preferredSignType: SignerType;
  /** Signer-specific configuration options */
  signerOptions: unknown;
}

/**
 * Signer factory function that returns the appropriate signer instance
 * based on the preferred sign type and configuration options.
 *
 * @template T - The specific signer type that extends IUniSigner
 * @param walletOrSigner - Wallet instance or OfflineSigner for signing
 * @param options - Configuration options including preferredSignType and signer-specific settings
 * @returns Configured signer instance of type T
 * @throws Error if the sign type is unsupported or required dependencies are missing
 *
 * @example
 * ```typescript
 * // Create a Cosmos direct signer with specific type using IWallet
 * const directSigner = getSigner<DirectSigner>(myWallet, {
 *   preferredSignType: 'direct',
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'cosmoshub-4',
 *     addressPrefix: 'cosmos'
 *   }
 * });
 *
 * // Create an Amino signer with specific type using OfflineAminoSigner
 * const aminoOfflineSigner = await wallet.toOfflineAminoSigner();
 * const aminoSigner = getSigner<AminoSigner>(aminoOfflineSigner, {
 *   preferredSignType: 'amino',
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'osmosis-1',
 *     addressPrefix: 'osmo'
 *   }
 * });
 *
 * // Create an Ethereum legacy signer with specific type
 * const legacySigner = getSigner<LegacyEthereumSigner>(myWallet, {
 *   preferredSignType: 'legacy',
 *   signerOptions: {
 *     queryClient: ethereumQueryClient,
 *     gasMultiplier: 1.2
 *   }
 * });
 * ```
 */
export function getSigner<T extends IUniSigner>(walletOrSigner: IWallet | OfflineSigner, options: GetSignerOptions): T {
  // Validate required parameters
  if (!walletOrSigner) {
    throw new Error('walletOrSigner is required');
  }
  if (!options) {
    throw new Error('options are required');
  }
  if (!options.signerOptions) {
    throw new Error('signerOptions are required');
  }

  switch (options.preferredSignType) {
    case 'amino':
      return createAminoSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case 'direct':
      return createDirectSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case 'legacy':
      return createLegacyEthereumSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case 'eip1559':
      return createEIP1559EthereumSigner(walletOrSigner, options.signerOptions) as unknown as T;
    default:
      throw new Error(`Unsupported sign type: ${options.preferredSignType}. Supported types: amino, direct, legacy, eip1559`);
  }
}

/**
 * Creates a Cosmos Amino signer instance
 */
function createAminoSigner(walletOrSigner: IWallet | OfflineSigner, signerOptions: unknown): AminoSigner {
  try {
    // Build configuration object from signerOptions
    const config = createCosmosSignerConfig(signerOptions as CosmosSignerConfig);

    return new AminoSigner(walletOrSigner, config);
  } catch (error) {
    throw new Error(`Failed to create Amino signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/cosmos is installed.`);
  }
}

/**
 * Creates a Cosmos Direct signer instance
 */
function createDirectSigner(walletOrSigner: IWallet | OfflineSigner, signerOptions: unknown): IUniSigner {
  try {
    // Build configuration object from signerOptions
    const config = createCosmosSignerConfig(signerOptions as CosmosSignerConfig);

    return new DirectSigner(walletOrSigner, config);
  } catch (error) {
    throw new Error(`Failed to create Direct signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/cosmos is installed.`);
  }
}

/**
 * Creates an Ethereum Legacy signer instance
 */
function createLegacyEthereumSigner(walletOrSigner: IWallet | OfflineSigner, signerOptions: unknown): IUniSigner {
  // Ethereum signers only work with IWallet, not OfflineSigner
  if (!('privateKeys' in walletOrSigner)) {
    throw new Error('Ethereum signers require IWallet, OfflineSigner is not supported');
  }

  try {
    // Build configuration object from signerOptions
    const config = createEthereumSignerConfig(signerOptions as EthereumSignerConfig);

    return new LegacyEthereumSigner(walletOrSigner as IWallet, config);
  } catch (error) {
    throw new Error(`Failed to create Legacy Ethereum signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/ethereum is installed.`);
  }
}

/**
 * Creates an Ethereum EIP-1559 signer instance
 */
function createEIP1559EthereumSigner(walletOrSigner: IWallet | OfflineSigner, signerOptions: unknown): IUniSigner {
  // Ethereum signers only work with IWallet, not OfflineSigner
  if (!('privateKeys' in walletOrSigner)) {
    throw new Error('Ethereum signers require IWallet, OfflineSigner is not supported');
  }

  try {
    // Build configuration object from signerOptions
    const config = createEthereumSignerConfig(signerOptions as EthereumSignerConfig);

    return new EIP1559EthereumSigner(walletOrSigner as IWallet, config);
  } catch (error) {
    throw new Error(`Failed to create EIP-1559 Ethereum signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/ethereum is installed.`);
  }
}
