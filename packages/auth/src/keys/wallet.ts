import {
  IWallet,
  IWalletConfig,
  IPrivateKey,
  IAccount,
  ICryptoBytes,
  IHDPath,
} from '@interchainjs/types';
import { PrivateKey } from './private-key';

export class Wallet implements IWallet {
  private _privateKeys: IPrivateKey[];

  constructor(
    privateKeys: IPrivateKey[],
    public readonly config: IWalletConfig
  ) {
    this._privateKeys = [...privateKeys]; // Create a copy for safety
  }

  get privateKeys(): IPrivateKey[] {
    return [...this._privateKeys]; // Return a copy to prevent external modification
  }

  toAccounts(): IAccount[] {
    return this._privateKeys.map((privateKey, index) => this.getAccountByIndex(index));
  }

  getAccountByIndex(index: number): IAccount {
    if (index < 0 || index >= this._privateKeys.length) {
      throw new Error(`Invalid key index: ${index}`);
    }

    const privateKey = this._privateKeys[index];
    const publicKey = privateKey.toPublicKey(this.config.publicKeyConfig);
    const address = publicKey.toAddress!(
      this.config.addressConfig,
      this.config.addressPrefix
    );

    return {
      pubkey: publicKey.value.value,
      address: address.value,
      hdPath: privateKey.hdPath,
      algo: typeof privateKey.config.algo === 'string'
        ? privateKey.config.algo
        : privateKey.config.algo.name
    };
  }

  async signByIndex(keyIndex: number, data: Uint8Array): Promise<ICryptoBytes> {
    if (keyIndex < 0 || keyIndex >= this._privateKeys.length) {
      throw new Error(`Invalid key index: ${keyIndex}`);
    }

    return this._privateKeys[keyIndex].sign(data);
  }

  static async fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],
    config: IWalletConfig
  ): Promise<IWallet> {
    const privateKeys = await PrivateKey.fromMnemonic(
      mnemonic,
      hdPaths,
      config.privateKeyConfig
    );

    return new Wallet(privateKeys, config);
  }
}