// networks/cosmos/src/index.ts
export * from './types/index';
export * from './rpc/index';
export * from './query/index';
export * from './event/index';
export { IProtocolAdapter, createProtocolAdapter, getProtocolInfo } from './adapters/index';
export * from './client-factory';
export * from './workflows';

// Export signers
export * from './signers';

// Export wallets
export * from './wallets/secp256k1hd';

// Re-export for backward compatibility with simple-wallet
export { Secp256k1HDWallet as SimpleWallet } from './wallets/secp256k1hd';

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