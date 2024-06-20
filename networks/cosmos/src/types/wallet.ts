import { SignerConfig } from '@interchainjs/types';

import { CosmosAminoDoc, CosmosDirectDoc, ICosmosAccount } from './signer';

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
  getAccounts: () => Promise<ICosmosAccount[]>;
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
  getAccounts: () => Promise<ICosmosAccount[]>;
  signDirect: (
    signerAddress: string,
    signDoc: CosmosDirectDoc
  ) => Promise<DirectSignResponse>;
}

export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner;
