import { IPrivateKey, AddrDerivation, HDPath } from '@interchainjs/types';
import { ICosmosWalletConfig } from '@interchainjs/cosmos/wallets/types';
import { Secp256k1HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';
import * as bip39 from 'bip39';
import { PrivateKey } from '@interchainjs/auth';
import { createInjectiveEthConfig } from '../auth/config';
import deepmerge from 'deepmerge';

/**
 * HD Wallet implementation for secp256k1 with Ethereum-style address derivation for Injective
 * Extends Secp256k1HDWallet from Cosmos for consistent wallet behavior
 * Uses proper HD derivation with configurable derivation paths
 * Uses keccak256 hashing for address generation instead of standard Cosmos approach
 */
export class EthSecp256k1HDWallet extends Secp256k1HDWallet {
  constructor(privateKeys: IPrivateKey[], config?: ICosmosWalletConfig) {
    const preset = createInjectiveEthConfig(config?.derivations, config?.privateKeyConfig?.passphrase);
    const mergedConfig = deepmerge(preset, config || {});

    super(privateKeys, mergedConfig);
  }




  /**
   * Create wallet from mnemonic with derivation paths from config
   * @param mnemonic BIP39 mnemonic phrase
   * @param config Wallet configuration including derivation paths and address prefix
   * @returns Promise<EthSecp256k1HDWallet> instance
   */
  static async fromMnemonic(
    mnemonic: string,
    config?: ICosmosWalletConfig
  ): Promise<EthSecp256k1HDWallet> {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic');
    }
    const presetInjectiveConfig = createInjectiveEthConfig(config?.derivations, config?.privateKeyConfig?.passphrase);

    const walletConfig = deepmerge(presetInjectiveConfig, config || {});
    const privateKeyConfig = walletConfig.privateKeyConfig;

    const hdPaths = config?.derivations?.map(
      (derivation: AddrDerivation) => HDPath.fromString(derivation.hdPath)
    ) || [HDPath.eth(0, 0, 0)];

    // Use PrivateKey.fromMnemonic to create private keys
    const privateKeys = await PrivateKey.fromMnemonic(
      mnemonic,
      hdPaths,
      privateKeyConfig
    );

    return new EthSecp256k1HDWallet(privateKeys, walletConfig);
  }
}
