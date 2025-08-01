// Export Injective-specific configuration and types
export * from './config';
export * from './types';
export * from './signature-processor';

// Re-export commonly used types from Cosmos for convenience
export {
  ICosmosSigner,
  CosmosSignArgs,
  CosmosMessage,
  EncodedMessage,
  DocOptions,
  CosmosSignerConfig,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  OfflineSigner,
  AccountData
} from '@interchainjs/cosmos/signers/types';
