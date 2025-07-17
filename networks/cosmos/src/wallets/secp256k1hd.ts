import { AccountData, DirectSignResponse, AminoSignResponse, OfflineDirectSigner, OfflineAminoSigner } from '../signers/types';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { StdSignDoc, IPrivateKey, IHDPath, IWalletConfig, IWallet, IAccount } from '@interchainjs/types';
import * as bip39 from 'bip39';
import { BaseWallet, PrivateKey, registerAddressStrategy } from '@interchainjs/auth';
import { createCosmosConfig } from '../auth/config';
import { COSMOS_ADDRESS_STRATEGY } from '../auth/strategy';

// Register the cosmos address strategy
registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);

/**
 * HD Wallet implementation for secp256k1
 * This class provides compatibility with simple-wallet.ts functionality
 * while using proper HD derivation
 */
export class Secp256k1HDWallet extends BaseWallet implements IWallet, OfflineDirectSigner, OfflineAminoSigner {
  constructor(privateKeys: IPrivateKey[], addressPrefix: string = 'cosmos') {
    const config = createCosmosConfig(addressPrefix);
    super(privateKeys, config);
  }


  /**
   * Get all accounts (for offline signer interface)
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    const accounts = await super.getAccounts();
    return accounts.map((account: IAccount) => ({
      address: account.address!,
      algo: account.algo as string,
      pubkey: account.pubkey
    }));
  }

  /**
   * Sign a transaction in direct mode
   */
  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    // Find the account index for the given address
    const accounts = await super.getAccounts();
    const accountIndex = accounts.findIndex((acc: IAccount) => acc.address === signerAddress);

    if (accountIndex === -1) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    // Serialize the sign doc
    const signBytes = SignDoc.encode(signDoc).finish();

    // Sign using BaseWallet's signByIndex method
    const signatureResult = await this.signByIndex(signBytes, accountIndex);

    return {
      signed: signDoc,
      signature: signatureResult.value
    };
  }

  /**
   * Sign a transaction in amino mode
   */
  async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    // Find the account index for the given address
    const accounts = await super.getAccounts();
    const accountIndex = accounts.findIndex((acc: IAccount) => acc.address === signerAddress);

    if (accountIndex === -1) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    // Serialize the sign doc to canonical JSON and hash it
    const signBytes = new TextEncoder().encode(this.serializeSignDoc(signDoc));

    // Hash the message using SHA256 (standard for Cosmos amino signing)
    const { Sha256 } = await import('@interchainjs/crypto');
    const hash = new Sha256(signBytes).digest();

    // Sign the hash using BaseWallet's signByIndex method
    const signatureResult = await this.signByIndex(hash, accountIndex);

    return {
      signed: signDoc,
      signature: signatureResult.value
    };
  }

  /**
   * Serialize StdSignDoc to canonical JSON (sorted keys)
   */
  private serializeSignDoc(doc: StdSignDoc): string {
    return JSON.stringify(this.sortObject(doc));
  }

  /**
   * Sort object keys recursively for canonical JSON
   */
  private sortObject(obj: unknown): unknown {
    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObject(item));
    } else if (obj !== null && typeof obj === 'object') {
      const sorted: Record<string, unknown> = {};
      Object.keys(obj as Record<string, unknown>).sort().forEach(key => {
        sorted[key] = this.sortObject((obj as Record<string, unknown>)[key]);
      });
      return sorted;
    }
    return obj;
  }

  /**
   * Create wallet from mnemonic with single derivation path
   * @param mnemonic BIP39 mnemonic phrase
   * @param addressPrefix Bech32 address prefix (default: 'cosmos')
   * @param hdPath HD derivation path (default: "m/44'/118'/0'/0/0")
   * @returns Secp256k1HDWallet instance
   */
  static async fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],
    config?: IWalletConfig,
  ): Promise<Secp256k1HDWallet> {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic');
    }

    const addressPrefix = config?.addressPrefix || 'cosmos';

    const presetCosmosConfig = createCosmosConfig(addressPrefix);

    const walletConfig = config ?? presetCosmosConfig;
    const privateKeyConfig = walletConfig.privateKeyConfig ?? presetCosmosConfig.privateKeyConfig;
    const prefix = addressPrefix || walletConfig.addressPrefix || presetCosmosConfig.addressPrefix;

    // Use PrivateKey.fromMnemonic to create private keys
    const privateKeys = await PrivateKey.fromMnemonic(
      mnemonic,
      hdPaths,
      privateKeyConfig
    );

    return new Secp256k1HDWallet(privateKeys, prefix);
  }
}