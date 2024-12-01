import { AccountData, IGenericOfflineSignArgs, IGenericOfflineSigner, SIGN_MODE, SignerConfig } from '@interchainjs/types';

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
 * general offline signer for cosmos chains
 */
export type ICosmosGenericOfflineSigner = IAminoGenericOfflineSigner | IDirectGenericOfflineSigner;

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
export type OfflineSigner = OfflineAminoSigner | OfflineDirectSigner | ICosmosGenericOfflineSigner;

/**
 * Amino general offline signer.
 */
export interface IAminoGenericOfflineSigner extends IGenericOfflineSigner<string, CosmosAminoDoc, AminoSignResponse> {

}

/**
 * Direct general offline signer.
 */
export interface IDirectGenericOfflineSigner extends IGenericOfflineSigner<string, CosmosDirectDoc, DirectSignResponse> {

}

export type IAminoGenericOfflineSignArgs = IGenericOfflineSignArgs<string, CosmosAminoDoc>;
export type IDirectGenericOfflineSignArgs = IGenericOfflineSignArgs<string, CosmosDirectDoc>;

/**
 * Amino general offline signer.
 * This is a wrapper for offline amino signer.
 */
export class AminoGenericOfflineSigner implements IAminoGenericOfflineSigner {
  constructor(public offlineSigner: OfflineAminoSigner) {

  }

  readonly signMode: string = SIGN_MODE.AMINO;
  getAccounts(): Promise<readonly AccountData[]> {
    return this.offlineSigner.getAccounts();
  }
  sign({ signerAddress, signDoc }: IAminoGenericOfflineSignArgs) {
    return this.offlineSigner.signAmino(signerAddress, signDoc);
  }
}

/**
 * Direct general offline signer.
 * This is a wrapper for offline direct signer.
 */
export class DirectGenericOfflineSigner implements IDirectGenericOfflineSigner {
  constructor(public offlineSigner: OfflineDirectSigner) {

  }

  readonly signMode: string = SIGN_MODE.DIRECT;
  getAccounts(): Promise<readonly AccountData[]> {
    return this.offlineSigner.getAccounts();
  }
  sign({ signerAddress, signDoc }: IDirectGenericOfflineSignArgs) {
    return this.offlineSigner.signDirect(signerAddress, signDoc);
  }
}