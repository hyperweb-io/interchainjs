import {
  IAccount,
  IPublicKey,
  IPublicKeyConfig,
  IPrivateKey,
  IHDPath,
  IWalletConfig,
} from '@interchainjs/types';

/**
 * Account implementation that provides access to public key with configurable compression
 */
export class Account implements IAccount {
  private _privateKey: IPrivateKey;
  private _walletConfig: IWalletConfig;
  private _address?: string;
  private _hdPath?: IHDPath;
  private _algo: string;

  constructor(
    privateKey: IPrivateKey,
    walletConfig: IWalletConfig,
    address?: string,
    hdPath?: IHDPath
  ) {
    this._privateKey = privateKey;
    this._walletConfig = walletConfig;
    this._address = address;
    this._hdPath = hdPath;
    this._algo = typeof privateKey.config.algo === 'string'
      ? privateKey.config.algo
      : privateKey.config.algo.name;
  }

  /**
   * Get public key with optional compression override
   * @param isCompressed - Optional compression setting. If not provided, uses wallet's publicKeyConfig.compressed (defaults to true)
   * @returns IPublicKey instance with the requested compression
   */
  getPublicKey(isCompressed?: boolean): IPublicKey {
    // Determine compression setting
    const compressed = isCompressed ?? this._walletConfig.publicKeyConfig?.compressed ?? true;
    
    // Create public key with the desired compression
    const publicKeyConfig: IPublicKeyConfig = { compressed };
    return this._privateKey.toPublicKey(publicKeyConfig);
  }

  get address(): string | undefined {
    return this._address;
  }

  get hdPath(): IHDPath | undefined {
    return this._hdPath;
  }

  get algo(): string {
    return this._algo;
  }
}
