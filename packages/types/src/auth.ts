import { IHDPath } from './hdpath';

export interface ICryptoBytes {
  value: Uint8Array;
  toHex(): string;
  toPrefixedHex(): string;
  toBase64(): string;
  toBigInt(): bigint;
  toNumber(): number;
  toBech32(prefix: string, limit?: number): string;
  slice(start?: number, end?: number): ICryptoBytes;
  concat(key: ICryptoBytes): ICryptoBytes;
}

/**
 * Auth is an interface that represents the authentication method of an account.
 * means based on the private key, using the algo, we can get the public key, address, and sign the data.
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
  getPublicKey: (isCompressed?: boolean) => ICryptoBytes;
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

// Algorithm interface for key operations
export interface IAlgo {
  name: string;
  makeKeypair(privateKey: Uint8Array): { privkey: Uint8Array; pubkey: Uint8Array };
  compress(pubkey: Uint8Array): Uint8Array;
  uncompress(pubkey: Uint8Array): Uint8Array;
  sign(message: Uint8Array, privateKey: Uint8Array): Promise<Uint8Array>;
  verify(signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array): Promise<boolean>;
}

// Hash function type
export type HashFunction = (data: Uint8Array) => Uint8Array;

// Private key specific configuration
export interface IPrivateKeyConfig {
  algo: IAlgo | string;  // Accept both IAlgo instance or preset string
  passphrase?: string;   // BIP39 passphrase
}

// Public key specific configuration
export interface IPublicKeyConfig {
  compressed?: boolean;  // Only compression can be configured
}

// Address specific configuration
export interface IAddressConfig {
  strategy: IAddressStrategy | string;  // Required: e.g., 'cosmos', 'ethereum', or custom strategy
}

// Wallet configuration combines all configs
export interface IWalletConfig {
  privateKeyConfig: IPrivateKeyConfig;
  publicKeyConfig?: IPublicKeyConfig;  // Optional, only for compression setting
  addressConfig: IAddressConfig;
  addressPrefix?: string;
}

// Address generation strategies
export interface IAddressStrategy {
  name: string;
  // Process public key bytes before hashing
  preprocessPublicKey?(pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo): Uint8Array;
  // Hash the processed bytes
  hash(bytes: Uint8Array): Uint8Array;
  // Encode the hashed bytes
  encode(hashedBytes: Uint8Array, prefix?: string): string;
  // Decode address to bytes
  decode(address: string): { bytes: Uint8Array; prefix?: string };
  // Apply checksum (optional)
  checksum?(address: string): string;
  // Validate checksum (optional)
  validateChecksum?(address: string): boolean;
  // Extract prefix from address
  extractPrefix(address: string): string | undefined;
}

// Core Interfaces

export interface IPrivateKey {
  // Core properties
  readonly value: ICryptoBytes;  // Using cryptobytes.ts as abstracted key
  readonly hdPath?: IHDPath;     // Using hdpath.ts as abstracted HD path
  readonly config: IPrivateKeyConfig;   // Configuration for crypto operations

  // Methods
  toPublicKey(config?: IPublicKeyConfig): IPublicKey;  // Can override config
  sign(data: Uint8Array): Promise<ICryptoBytes>;
  toHex(): string;
  toBase64(): string;
}

export interface IPublicKey {
  // Core properties
  readonly value: ICryptoBytes;
  readonly algo: IAlgo | string;  // Algorithm is inherited from private key
  readonly compressed: boolean;

  // Methods
  toAddress?(config: IAddressConfig, prefix?: string): IAddress;  // Optional - not all chains have addresses
  verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean>;
  toHex(): string;
  toBase64(): string;
}

export interface IAddress {
  // Core properties
  readonly value: string;      // The address string
  readonly prefix?: string;    // Address prefix (e.g., 'cosmos', 'osmo', '0x')
  readonly config: IAddressConfig;

  // Methods
  toBytes(): ICryptoBytes;     // Raw bytes without encoding
  isValid(): boolean;          // Validate address format and checksum
}

export interface IWallet {
  // Core properties
  readonly privateKeys: IPrivateKey[];
  readonly config: IWalletConfig;

  // Methods
  toAccounts(): IAccount[];              // Get all accounts (public info only)
  getAccount(index: number): IAccount;   // Get specific account
  sign(keyIndex: number, data: Uint8Array): Promise<ICryptoBytes>;

  // Key management
  addPrivateKey(privateKey: IPrivateKey): void;
  removePrivateKey(index: number): void;
}

// Update IAccount interface to match the new structure
export interface IAccount {
  readonly pubkey: Uint8Array;
  readonly address: string;
  readonly hdPath?: IHDPath;
  readonly algo: string;        // Algorithm name for reference
}