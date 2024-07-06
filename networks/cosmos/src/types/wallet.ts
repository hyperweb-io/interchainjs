import { SignerConfig } from '@interchainjs/types';

import { AccountData, CosmosAminoDoc, CosmosDirectDoc } from './signer';

export interface WalletOptions {
  bip39Password?: string;
  signerConfig: SignerConfig;
}

export interface Pubkey {
  type: string;
  value: any;
}

export interface StdSignature {
  pub_key: Pubkey;
  signature: string;
}

export interface AminoSignResponse {
  signed: CosmosAminoDoc;
  signature: StdSignature;
}

export interface OfflineAminoSigner {
  getAccounts: () => Promise<AccountData[]>;
  signAmino: (
    signerAddress: string,
    signDoc: CosmosAminoDoc
  ) => Promise<AminoSignResponse>;
}

export interface DirectSignResponse {
  signed: CosmosDirectDoc;
  signature: StdSignature;
}

export interface OfflineDirectSigner {
  getAccounts: () => Promise<AccountData[]>;
  signDirect: (
    signerAddress: string,
    signDoc: CosmosDirectDoc
  ) => Promise<DirectSignResponse>;
}

export function isOfflineAminoSigner(
  signer: OfflineSigner
): signer is OfflineAminoSigner {
  return 'signAmino' in signer;
}

export function isOfflineDirectSigner(
  signer: OfflineSigner
): signer is OfflineDirectSigner {
  return 'signDirect' in signer;
}

export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;
