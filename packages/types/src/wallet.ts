import { ISignature } from './auth';

/**
 * BaseWalletAccount is a base class for wallet account
 */
export interface BaseWalletAccount {
  // algorithm used to derive the key
  algo: string;
  // public key
  publicKey: ISignature;
}

/**
 * properties for deriving address
 */
export interface AddrDerivation {
  readonly hdPath: string;
  readonly prefix: string;
}
