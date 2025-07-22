import {
  IWallet,
  IWalletConfig,
  IPrivateKey,
  IAccount,
  ICryptoBytes,
  IHDPath,
  AddrDerivation,
  HDPath,
} from '@interchainjs/types';
import { PrivateKey } from './private-key';

export class BaseWallet implements IWallet {
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

  async getAccounts(): Promise<readonly IAccount[]> {
    return Promise.all(this._privateKeys.map((_, index) => this.getAccountByIndex(index)));
  }

  async getAccountByIndex(index: number): Promise<IAccount> {
    if (index < 0 || index >= this._privateKeys.length) {
      throw new Error(`Invalid key index: ${index}`);
    }

    const privateKey = this._privateKeys[index];
    const publicKey = privateKey.toPublicKey(this.config.publicKeyConfig);
    const address = publicKey.toAddress!(
      this.config.addressConfig,
      this.config.derivations[index].prefix
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

  async signByIndex(data: Uint8Array, index?: number): Promise<ICryptoBytes> {
    const keyIndex = index || 0;
    if (keyIndex < 0 || keyIndex >= this._privateKeys.length) {
      throw new Error(`Invalid key index: ${keyIndex}`);
    }

    return this._privateKeys[keyIndex].sign(data);
  }

  static async fromMnemonic(
    mnemonic: string,
    config?: IWalletConfig
  ): Promise<IWallet> {
    if(!config?.derivations || config?.derivations.length === 0) {
      throw new Error("Wallet configuration must include at least one derivation path.");
    }

    const hdPaths = config.derivations.map(
      (derivation: AddrDerivation) => HDPath.fromString(derivation.hdPath)
    );
    const privateKeys = await PrivateKey.fromMnemonic(
      mnemonic,
      hdPaths,
      config.privateKeyConfig
    );

    return new BaseWallet(privateKeys, config);
  }
}