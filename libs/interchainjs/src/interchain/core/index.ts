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
 * import { getSigner } from '@interchainjs/interchain/core';
 * import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
 * import { CosmosQueryClient } from '@interchainjs/cosmos';
 *
 * // Create a Cosmos Direct signer
 * const directSigner = getSigner(myWallet, {
 *   preferredSignType: 'direct',
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
 *   preferredSignType: 'amino',
 *   signerOptions: {
 *     queryClient: cosmosQueryClient,
 *     chainId: 'osmosis-1',
 *     addressPrefix: 'osmo'
 *   }
 * });
 *
 * // Create an Ethereum Legacy signer
 * const legacySigner = getSigner(myWallet, {
 *   preferredSignType: 'legacy',
 *   signerOptions: {
 *     queryClient: ethereumQueryClient,
 *     gasMultiplier: 1.2,
 *     gasPrice: BigInt('20000000000') // 20 gwei
 *   }
 * });
 *
 * // Create an Ethereum EIP-1559 signer
 * const eip1559Signer = getSigner(myWallet, {
 *   preferredSignType: 'eip1559',
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
 * - **`'amino'`**: Cosmos Amino (JSON) signer for legacy compatibility
 * - **`'direct'`**: Cosmos Direct (protobuf) signer for modern transactions
 * - **`'legacy'`**: Ethereum Legacy signer for pre-EIP-1559 transactions
 * - **`'eip1559'`**: Ethereum EIP-1559 signer for modern transactions with priority fees
 *
 * ### Error Handling
 *
 * The function will throw errors for:
 * - Unsupported `preferredSignType` values
 * - Missing required options (`wallet`, `queryClient`)
 * - Missing dependencies (signer packages not installed)
 * - Invalid configuration options
 */
