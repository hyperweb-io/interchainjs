export { PublicKey } from './types';
export { Keypair } from './keypair';
export { Transaction } from './transaction';
export { SystemProgram } from './system-program';
export { Connection } from './connection';
export { DirectSigner, OfflineSigner } from './signer';
export { SolanaSigningClient } from './signing-client';
export { PhantomSigner, getPhantomWallet, isPhantomInstalled } from './phantom-signer';
export { PhantomSigningClient } from './phantom-client';
export { WebSocketConnection } from './websocket-connection';

// SPL Token exports
export { TokenProgram } from './token-program';
export { TokenInstructions } from './token-instructions';
export { AssociatedTokenAccount } from './associated-token-account';
export { TokenMath } from './token-math';
export * from './token-types';
export * from './token-constants';

export * from './types';

// Constants
export const LAMPORTS_PER_SOL = 1000000000;
export const DEVNET_ENDPOINT = 'https://api.devnet.solana.com';
export const TESTNET_ENDPOINT = 'https://api.testnet.solana.com';
export const MAINNET_ENDPOINT = 'https://api.mainnet-beta.solana.com';

// Utility functions
export function lamportsToSol(lamports: number): number {
  return lamports / LAMPORTS_PER_SOL;
}

export function solToLamports(sol: number): number {
  return Math.round(sol * LAMPORTS_PER_SOL);
}