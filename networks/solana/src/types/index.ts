// Re-export all types from organized modules
export * from './common';
export * from './protocol';
export * from './transaction';

// Legacy types are available but not re-exported to avoid conflicts
// Import directly from './types/legacy' when needed

// Re-export client types, excluding conflicting names
export {
  IProtocolAdapter,
  IRpcClient,
  IQueryClient,
  IEventClient,
  IUniSigner,
  IWorkflowBuilder,
  IWorkflowPlugin,
  IClientFactory,
  ISolanaProtocolAdapter,
  ISolanaRpcClient,
  ISolanaSigner,
  ISolanaClientConfig,
  SolanaRpcConfig,
  SolanaWebSocketConfig,
  SolanaSignArgs,
  SolanaBroadcastOpts,
  SolanaBroadcastResponse,
  SolanaWorkflowOptions,
  SolanaWorkflowContext,
  Connection,
  SolanaTokenAccount,
  TransferParams,
  ISolanaWallet,
  PhantomWallet,
  SolanaQueryClient,
  SolanaEventClient,
  SolanaFullClient,
  SolanaAuthStrategy,
  SolanaNetworkConfig,
  SolanaEnvironmentConfig,
  SolanaConfigValidation
} from './client';

// Explicitly handle the SolanaAccount conflict
export { SolanaAccount as SolanaAccountClient } from './client';
