import { AccountData, SignerConfig } from '@interchainjs/types';

import { CosmosAminoDoc, CosmosDirectDoc } from './signer';

/**
 * Wallet options
 */
export interface WalletOptions {
  bip39Password?: string;
  signerConfig: SignerConfig;
}

export interface Pubkey {
  type: string;
  value: any;
}

/**
 * Standard signature
 */
export interface StdSignature {
  pub_key: Pubkey;
  signature: string;
}

/**
 * Offline signer response
 */
export interface AminoSignResponse {
  signed: CosmosAminoDoc;
  signature: StdSignature;
}

/**
 * Offline amino signer
 */
export interface OfflineAminoSigner {
  getAccounts: () => Promise<AccountData[]>;
  signAmino: (
    signerAddress: string,
    signDoc: CosmosAminoDoc
  ) => Promise<AminoSignResponse>;
}

/**
 * Direct signature response
 */
export interface DirectSignResponse {
  signed: CosmosDirectDoc;
  signature: StdSignature;
}

/**
 * Offline direct signer
 */
export interface OfflineDirectSigner {
  getAccounts: () => Promise<AccountData[]>;
  signDirect: (
    signerAddress: string,
    signDoc: CosmosDirectDoc
  ) => Promise<DirectSignResponse>;
}

/**
 * Check if signer is offline amino signer
 */
export function isOfflineAminoSigner(
  signer: OfflineSigner
): signer is OfflineAminoSigner {
  return 'signAmino' in signer;
}

/**
 * Check if signer is offline direct signer
 */
export function isOfflineDirectSigner(
  signer: OfflineSigner
): signer is OfflineDirectSigner {
  return 'signDirect' in signer;
}

/**
 * Offline signer can be either amino or direct signer or both
 */
export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;
