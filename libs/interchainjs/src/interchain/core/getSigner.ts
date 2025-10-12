import { IWallet, IUniSigner } from '@interchainjs/types';
import {
  AminoSigner,
  DirectSigner,
  createCosmosSignerConfig,
  CosmosSignerConfig,
  OfflineSigner
} from '@interchainjs/cosmos';
import {
  LegacyEthereumSigner,
  EIP1559EthereumSigner,
  createEthereumSignerConfig,
  EthereumSignerConfig
} from '@interchainjs/ethereum';
import { Keypair, SolanaSigner, SolanaSignerConfig } from '@interchainjs/solana';

// Exported signer type constants
export const COSMOS_AMINO = 'cosmos_amino' as const;
export const COSMOS_DIRECT = 'cosmos_direct' as const;
export const ETHEREUM_LEGACY = 'ethereum_legacy' as const;
export const ETHEREUM_EIP1559 = 'ethereum_eip1559' as const;
export const SOLANA_STD = 'solana_std' as const;

// Type definitions for signer options
export type SignerType =
  | typeof COSMOS_AMINO
  | typeof COSMOS_DIRECT
  | typeof ETHEREUM_LEGACY
  | typeof ETHEREUM_EIP1559
  | typeof SOLANA_STD;

const SUPPORTED_SIGN_TYPES: SignerType[] = [
  COSMOS_AMINO,
  COSMOS_DIRECT,
  ETHEREUM_LEGACY,
  ETHEREUM_EIP1559,
  SOLANA_STD
];

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
 * @param walletOrSigner - Wallet instance, OfflineSigner, or Solana Keypair for signing
 * @param options - Configuration options including preferredSignType and signer-specific settings
 * @returns Configured signer instance of type T
 * @throws Error if the sign type is unsupported or required dependencies are missing
 *
 * @example
 * ```typescript
 * import {
 *   getSigner,
 *   COSMOS_DIRECT,
 *   COSMOS_AMINO,
 *   ETHEREUM_LEGACY,
 *   ETHEREUM_EIP1559,
 *   SOLANA_STD
 * } from '@interchainjs/interchain/core';
 *
 * // Create a Cosmos direct signer with specific type using IWallet
 * const directSigner = getSigner<DirectSigner>(myWallet, {
 *   preferredSignType: COSMOS_DIRECT,
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
 *   preferredSignType: COSMOS_AMINO,
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'osmosis-1',
 *     addressPrefix: 'osmo'
 *   }
 * });
 *
 * // Create an Ethereum legacy signer with specific type
 * const legacySigner = getSigner<LegacyEthereumSigner>(myWallet, {
 *   preferredSignType: ETHEREUM_LEGACY,
 *   signerOptions: {
 *     queryClient: ethereumQueryClient,
 *     gasMultiplier: 1.2
 *   }
 * });
 *
 * // Create a Solana signer using a Keypair
 * const solanaSigner = getSigner<SolanaSigner>(myKeypair, {
 *   preferredSignType: SOLANA_STD,
 *   signerOptions: {
 *     queryClient: solanaQueryClient,
 *     commitment: 'confirmed'
 *   }
 * });
 * ```
 */
export function getSigner<T extends IUniSigner>(
  walletOrSigner: IWallet | OfflineSigner | Keypair,
  options: GetSignerOptions
): T {
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
    case COSMOS_AMINO:
      return createAminoSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case COSMOS_DIRECT:
      return createDirectSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case SOLANA_STD:
      return createSolanaSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case ETHEREUM_LEGACY:
      return createLegacyEthereumSigner(walletOrSigner, options.signerOptions) as unknown as T;
    case ETHEREUM_EIP1559:
      return createEIP1559EthereumSigner(walletOrSigner, options.signerOptions) as unknown as T;
    default:
      throw new Error(
        `Unsupported sign type: ${options.preferredSignType}. Supported types: ${SUPPORTED_SIGN_TYPES.join(', ')}`
      );
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
    throw new Error(
      `Failed to create Amino signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/cosmos is installed.`
    );
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
    throw new Error(
      `Failed to create Direct signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/cosmos is installed.`
    );
  }
}

/**
 * Creates a Solana signer instance
 */
function createSolanaSigner(
  walletOrSigner: IWallet | OfflineSigner | Keypair,
  signerOptions: unknown
): SolanaSigner {
  const config = signerOptions as SolanaSignerConfig;

  if (!config?.queryClient) {
    throw new Error('Failed to create Solana signer: queryClient is required in signerOptions');
  }

  if (walletOrSigner instanceof Keypair) {
    return new SolanaSigner(walletOrSigner, config);
  }

  if (isWalletAuth(walletOrSigner)) {
    return new SolanaSigner(walletOrSigner, config);
  }

  throw new Error('Failed to create Solana signer: walletOrSigner must be a Solana Keypair or IWallet');
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
    throw new Error(
      `Failed to create Legacy Ethereum signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/ethereum is installed.`
    );
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
    throw new Error(
      `Failed to create EIP-1559 Ethereum signer: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure @interchainjs/ethereum is installed.`
    );
  }
}

function isWalletAuth(value: unknown): value is IWallet {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as IWallet;
  return typeof candidate.getAccounts === 'function' && typeof candidate.signByIndex === 'function';
}
