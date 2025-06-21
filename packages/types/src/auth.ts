export interface ISignature {
  value: Uint8Array;
  toHex(): string;
  toPrefixedHex(): string;
  toBase64(): string;
  toBigInt(): bigint;
  toNumber(): number;
  toBech32(prefix: string, limit?: number): string;
  slice(start?: number, end?: number): ISignature;
  concat(key: ISignature): ISignature;
}

/**
 * Auth is an interface that represents the authentication method of an account.
 * means around the private key, using the algo, we can get the public key, address, and sign the data.
 */
export interface Auth {
  /**
   * The algorithm of the authentication method.
   */
  readonly algo?: string;
  /**
   * The HD path of the authentication method.
   */
  readonly hdPath?: string;

  /**
   * Get the public key of the authentication method.
   * @param isCompressed Whether the public key should be compressed.
   * @returns The public key.
   */
  getPublicKey: (isCompressed?: boolean) => ISignature;
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
 * IAccount is an interface that represents an account.
 * An account is a safe wrapper representing the auth without exposing the private key.
 */
export interface IAccount {
  address: string;
  publicKey: ISignature;
  algo: string;
}