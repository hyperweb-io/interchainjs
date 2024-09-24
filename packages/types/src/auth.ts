import { SignDocResponse } from './wallet';

export type Algo = 'secp256k1' | 'eth_secp256k1';

export interface IKey {
  value: Uint8Array;
  toHex(): string;
  toPrefixedHex(): string;
  toBase64(): string;
  toBigInt(): bigint;
  toNumber(): number;
  toBech32(prefix: string, limit?: number): string;
  slice(start?: number, end?: number): IKey;
  concat(key: IKey): IKey;
}

/**
 * Auth is an interface that represents the authentication method of an account.
 */
export interface Auth {
  /**
   * The algorithm of the authentication method.
   */
  readonly algo: string;
  /**
   * The HD path of the authentication method.
   */
  readonly hdPath?: string;

  /**
   * Get the public key of the authentication method.
   * @param isCompressed Whether the public key should be compressed.
   * @returns The public key.
   */
  getPublicKey: (isCompressed?: boolean) => IKey;
}

/**
 * ByteAuth is an interface that represents the authentication method of an account that can sign bytes.
 * Use some specific algorithm like secp256k1, eth_secp256k1 to implement this interface.
 * This interface is usually used by signAbitrary method.
 * @template Sig The type of the signature.
 */
export interface ByteAuth<Sig> extends Auth {
  /**
   * Sign the data in bytes.
   * @param data The data in bytes to sign.
   * @returns The signature.
   */
  sign: (data: Uint8Array) => ISignatureWraper<Sig>;
}

/**
 * Check if the authentication object is a ByteAuth.
 * @param auth The object to check
 * @returns Whether the object is a ByteAuth.
 */
export function isByteAuth<Sig>(auth: Auth): auth is ByteAuth<Sig> {
  return 'sign' in auth;
}

/**
 * DocAuth is an interface that represents the authentication method of an account that can sign a document using OfflineSigners.
 * DocAuth is actually a wrapper for offline signers.
 * DocAuth is usually used by signers built from offline signers.
 * @template TArgs The type of the args(type of document or including the type of doc).
 * @template TAddr The type of the address.
 */
export interface DocAuth<TArgs, TAddr = string> extends Auth {
  address: TAddr;
  signDoc(doc: TArgs): SignDocResponse<TArgs> | Promise<SignDocResponse<TArgs>>;
}

/**
 * Check if the authentication object is a DocAuth.
 * @param auth The object to check
 * @returns Whether the object is a DocAuth.
 */
export function isDocAuth<TArgs>(auth: Auth): auth is DocAuth<TArgs> {
  return 'signDoc' in auth;
}

/**
 * AuthOptions is an interface that represents the options for creating an authentication method.
 */
export interface AuthOptions {
  /**
   * The password for the BIP39 mnemonic.
   */
  bip39Password?: string;
}

/**
 * ISignatureWraper is an interface that wraps the signature and provides methods to convert the signature to different formats.
 */
export interface ISignatureWraper<Sig> {
  signature: Sig;
  toCompact(): IKey;
}

/**
 * IAccount is an interface that represents an account based on an authentication object.
 */
export interface IAccount<TAddr = string> {
  /**
   * The public key of the account.
   */
  publicKey: IKey;
  /**
   * The address of the account.
   */
  address: TAddr;
  /**
   * auth is the authentication method of the account.
   */
  auth: Auth;
  /**
   * toAccountData converts the account to an AccountData object.
   */
  toAccountData(): AccountData;
}

/**
 * AccountData is an interface that represents the public data of an account.
 */
export interface AccountData {
  address: string;
  algo: Algo;
  pubkey: Uint8Array;
}