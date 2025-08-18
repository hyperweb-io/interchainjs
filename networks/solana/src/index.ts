// Legacy exports for backward compatibility
export { PublicKey } from './types/legacy';
export { Keypair } from './signing/keypair';
export { Transaction } from './types/transaction';
export { SystemProgram } from './adapters/system-program';

// New refactored exports
export * from './adapters';
export * from './communication/rpc';
export * from './communication/query';
export * from './communication/event';
export * from './signing';
export * from './wallets/implementations';
export * from './config';
export * from './errors';

// Additional exports are now included in the main module exports above

// Re-export Solana constants and utilities from local utils
export {
  LAMPORTS_PER_SOL,
  SOLANA_DEVNET_ENDPOINT as DEVNET_ENDPOINT,
  SOLANA_TESTNET_ENDPOINT as TESTNET_ENDPOINT,
  SOLANA_MAINNET_ENDPOINT as MAINNET_ENDPOINT,
  lamportsToSol,
  solToLamports,
  solToLamportsBigInt,
  lamportsToSolString,
  isValidLamports,
  isValidSol,
  SOLANA_ACCOUNT_SIZES,
  SOLANA_RENT_EXEMPT_BALANCES,
  SOLANA_PROGRAM_IDS,
  SOLANA_TRANSACTION_LIMITS,
  SOLANA_TIMING,
  calculateRentExemption,
  formatSolanaAddress,
  isValidSolanaAddress,
  encodeSolanaCompactLength,
  decodeSolanaCompactLength,
  concatUint8Arrays
} from './config/constants';