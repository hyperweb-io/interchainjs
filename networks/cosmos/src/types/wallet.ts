import { AccountData, IGeneralOfflineSignArgs, IGeneralOfflineSigner, SIGN_MODE, SignerConfig } from '@interchainjs/types';

import { CosmosAminoDoc, CosmosDirectDoc, ICosmosGeneralOfflineSigner } from './signer';

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
  getAccounts: () => Promise<readonly AccountData[]>;
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
  getAccounts: () => Promise<readonly AccountData[]>;
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
export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner | ICosmosGeneralOfflineSigner;

/**
 * Amino general offline signer.
 * This is a wrapper for offline amino signer.
 */
export class AminoGeneralOfflineSigner implements IGeneralOfflineSigner<string, CosmosAminoDoc, AminoSignResponse> {
  constructor(public offlineSigner: OfflineAminoSigner) {

  }

  readonly signMode: string = SIGN_MODE.SIGN_MODE_LEGACY_AMINO_JSON;
  getAccounts(): Promise<readonly AccountData[]> {
    return this.offlineSigner.getAccounts();
  }
  sign({ signerAddress, signDoc }: IGeneralOfflineSignArgs<string, CosmosAminoDoc>) {
    return this.offlineSigner.signAmino(signerAddress, signDoc);
  }
}

/**
 * Direct general offline signer.
 * This is a wrapper for offline direct signer.
 */
export class DirectGeneralOfflineSigner implements IGeneralOfflineSigner<string, CosmosDirectDoc, DirectSignResponse> {
  constructor(public offlineSigner: OfflineDirectSigner) {

  }

  readonly signMode: string = SIGN_MODE.SIGN_MODE_DIRECT;
  getAccounts(): Promise<readonly AccountData[]> {
    return this.offlineSigner.getAccounts();
  }
  sign({ signerAddress, signDoc }: IGeneralOfflineSignArgs<string, CosmosDirectDoc>) {
    return this.offlineSigner.signDirect(signerAddress, signDoc);
  }
}