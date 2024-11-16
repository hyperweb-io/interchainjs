import { IKey } from './auth';

/**
 * BaseWalletAccount is a base class for wallet account
 */
export interface BaseWalletAccount {
  // algorithm used to derive the key
  algo: string;
  // public key
  publicKey: IKey;
}

/**
 * SignDocResponse is a response object that contains the signature and the sign doc.
 */
export interface SignDocResponse<SignDoc, TSig = IKey> {
  signature: TSig;
  signDoc: SignDoc;
}

/**
 * properties for deriving address
 */
export interface AddrDerivation {
  readonly hdPath: string;
  readonly prefix: string;
}
