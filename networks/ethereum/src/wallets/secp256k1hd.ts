import { IPrivateKey, IWallet, AddrDerivation, HDPath } from '@interchainjs/types';
import { IEthereumWalletConfig } from './types';
import * as bip39 from 'bip39';
import { BaseWallet, PrivateKey } from '@interchainjs/auth';
import { createEthereumConfig } from '../auth/config';
import deepmerge from 'deepmerge';

/**
 * HD Wallet implementation for secp256k1 on Ethereum
 * Extends BaseWallet for consistent wallet behavior across networks
 * Implements IWallet interface
 * Uses proper HD derivation with configurable derivation paths
 */
export class Secp256k1HDWallet extends BaseWallet implements IWallet {
  constructor(privateKeys: IPrivateKey[], config?: IEthereumWalletConfig) {
    const preset = createEthereumConfig(config?.derivations, config?.privateKeyConfig?.passphrase);
    config = deepmerge(preset, config || {});

    super(privateKeys, config);
  }

  /**
   * Create wallet from mnemonic with derivation paths from config
   * @param mnemonic BIP39 mnemonic phrase
   * @param config Wallet configuration including derivation paths and address prefix
   * @returns Promise<Secp256k1HDWallet> instance
   */
  static async fromMnemonic(
    mnemonic: string,
    config?: IEthereumWalletConfig
  ): Promise<Secp256k1HDWallet> {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic');
    }
    const presetEthereumConfig = createEthereumConfig(config?.derivations, config?.privateKeyConfig?.passphrase);

    // Use custom merge to avoid duplicating derivations array
    const walletConfig = deepmerge(presetEthereumConfig, config || {}, {
      arrayMerge: (destinationArray, sourceArray) => {
        // For derivations, use source array if provided, otherwise use destination
        return sourceArray.length > 0 ? sourceArray : destinationArray;
      }
    });
    const privateKeyConfig = walletConfig.privateKeyConfig;

    const hdPaths = walletConfig.derivations.map(
      (derivation: AddrDerivation) => HDPath.fromString(derivation.hdPath)
    );
    // Use PrivateKey.fromMnemonic to create private keys
    const privateKeys = await PrivateKey.fromMnemonic(
      mnemonic,
      hdPaths,
      privateKeyConfig
    );

    return new Secp256k1HDWallet(privateKeys, walletConfig);
  }



  /**
   * Get the Ethereum address for the account at the specified index
   * @param index The account index (default: 0)
   * @returns Promise<string> The Ethereum address with 0x prefix
   */
  async getAddress(index: number = 0): Promise<string> {
    const account = await this.getAccountByIndex(index);
    return account.address!;
  }

  /**
   * Get all Ethereum addresses for all accounts in the wallet
   * @returns Promise<string[]> Array of Ethereum addresses
   */
  async getAddresses(): Promise<string[]> {
    const accounts = await this.getAccounts();
    return accounts.map(account => account.address!);
  }
}
