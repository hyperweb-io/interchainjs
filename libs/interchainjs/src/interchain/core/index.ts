export * from './getSigner';

/**
 * @fileoverview
 *
 * # InterchainJS Core Utilities
 *
 * This module provides core utilities for working with multiple blockchain networks
 * through a unified interface.
 *
 * ## getSigner Utility
 *
 * The `getSigner` function is a factory that creates appropriate signer instances
 * based on the preferred signing method and network type.
 *
 * ### Usage Examples
 *
 * ```typescript
 * import {
 *   getSigner,
 *   COSMOS_DIRECT,
 *   COSMOS_AMINO,
 *   ETHEREUM_LEGACY,
 *   ETHEREUM_EIP1559,
 *   SOLANA_STD
 * } from '@interchainjs/interchain/core';
 * import { Secp256k1HDWallet } from '@interchainjs/cosmos';
 * import { CosmosQueryClient } from '@interchainjs/cosmos';
 *
 * // Create a Cosmos Direct signer
 * const directSigner = getSigner(myWallet, {
 *   preferredSignType: COSMOS_DIRECT,
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'cosmoshub-4',
 *     addressPrefix: 'cosmos',
 *     gasMultiplier: 1.3
 *   }
 * });
 *
 * // Create a Cosmos Amino signer
 * const aminoSigner = getSigner(myWallet, {
 *   preferredSignType: COSMOS_AMINO,
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'osmosis-1',
 *     addressPrefix: 'osmo'
 *   }
 * });
 *
 * // Create an Ethereum Legacy signer
 * const legacySigner = getSigner(myWallet, {
 *   preferredSignType: ETHEREUM_LEGACY,
 *   signerOptions: {
 *     queryClient: ethereumQueryClient,
 *     gasMultiplier: 1.2,
 *     gasPrice: BigInt('20000000000') // 20 gwei
 *   }
 * });
 *
 * // Create an Ethereum EIP-1559 signer
 * const eip1559Signer = getSigner(myWallet, {
 *   preferredSignType: ETHEREUM_EIP1559,
 *   signerOptions: {
 *     queryClient: ethereumQueryClient,
 *     maxFeePerGas: BigInt('30000000000'), // 30 gwei
 *     maxPriorityFeePerGas: BigInt('2000000000') // 2 gwei
 *   }
 * });
 * ```
 *
 * ### Supported Signer Types
 *
 * - **`'cosmos_amino'`** (`COSMOS_AMINO`): Cosmos Amino (JSON) signer for legacy compatibility
 * - **`'cosmos_direct'`** (`COSMOS_DIRECT`): Cosmos Direct (protobuf) signer for modern transactions
 * - **`'solana_std'`** (`SOLANA_STD`): Solana signer that works with `Keypair` or `IWallet` for web3 workflows
 * - **`'ethereum_legacy'`** (`ETHEREUM_LEGACY`): Ethereum Legacy signer for pre-EIP-1559 transactions
 * - **`'ethereum_eip1559'`** (`ETHEREUM_EIP1559`): Ethereum EIP-1559 signer for modern transactions with priority fees
 *
 * ### Error Handling
 *
 * The function will throw errors for:
 * - Unsupported `preferredSignType` values
 * - Missing required options (`wallet`, `queryClient`)
 * - Missing dependencies (signer packages not installed)
 * - Invalid configuration options
 */
