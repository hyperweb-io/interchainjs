/**
 * Main exports for @interchainjs/solana
 */

export * from './types/index';
export * from './query/index';
export * from './adapters/index';
export * from './client-factory';
export * from './signers';
export * from './workflows';
export * from './keypair';
export * from './transaction';
export * from './utils';
export * from './helpers';
export * from './events';

// Re-export shared RPC clients for convenience
export { HttpRpcClient, HttpEndpoint } from '@interchainjs/utils';

// Main exports for easy usage
export {
  createSolanaQueryClient,
  SolanaClientFactory,
  type SolanaClientOptions,
  createSolanaEventClient,
  createSolanaClients,
  createSolanaUnifiedClient,
  type SolanaWebSocketClientOptions
} from './client-factory';
