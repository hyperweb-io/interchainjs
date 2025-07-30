// networks/ethereum/src/index.ts

// Export types
export * from './types/index';

// Export query client
export * from './query/index';

// Export adapters
export * from './adapters/index';

// Export client factory
export * from './client-factory';

// Re-export shared RPC clients for convenience
export { HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint, ReconnectOptions } from '@interchainjs/utils/clients';

// Export signers
export * from './signers';

// Export auth
export * from './auth';

// Export wallets
export * from './wallets';

// Export utils
export * from './utils';

// Export providers
export * from './providers';

// Re-export common error types for convenience
export {
  QueryClientError,
  NetworkError,
  TimeoutError,
  ConnectionError,
  ParseError,
  InvalidResponseError,
  SubscriptionError,
  ProtocolError,
  ErrorCode,
  ErrorCategory
} from '@interchainjs/types';