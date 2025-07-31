// networks/cosmos/src/index.ts
export * from './types/index';
export * from './query/index';
export * from './event/index';

// Re-export shared RPC clients for convenience
export { HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint, ReconnectOptions } from '@interchainjs/utils';
export { IProtocolAdapter, createProtocolAdapter, getProtocolInfo } from './adapters/index';
export * from './client-factory';
export * from './workflows';

// Export signers
export * from './signers';

// Export wallets
export * from './wallets/secp256k1hd';

// Export auth
export * from './auth';

// Export utils
export * from './utils';

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