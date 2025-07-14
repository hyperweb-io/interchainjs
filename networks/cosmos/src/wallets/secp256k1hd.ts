import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { fromHex, toHex } from '@interchainjs/utils';
import { toBech32 } from '@interchainjs/encoding';
import { CosmosAccount } from '../workflows/types';
import { CosmosWallet, Auth, AccountData, DirectSignResponse, AminoSignResponse, OfflineDirectSigner, OfflineAminoSigner } from '../signers/types';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { StdSignDoc } from '@interchainjs/types';
import * as bip39 from 'bip39';
import { HDKey } from '@scure/bip32';

/**
 * HD Wallet implementation for secp256k1
 * This class provides compatibility with simple-wallet.ts functionality
 * while using proper HD derivation
 */
export class Secp256k1HDWallet implements CosmosWallet, OfflineDirectSigner, OfflineAminoSigner {
  private privateKey: Uint8Array;
  private publicKey: Uint8Array;
  private addressPrefix: string;
  private hdPath: string;
  private _account?: CosmosAccount;

  constructor(privateKey: Uint8Array, addressPrefix: string = 'cosmos', hdPath: string = "m/44'/118'/0'/0/0") {
    this.privateKey = privateKey;
    this.publicKey = secp256k1.getPublicKey(privateKey, true); // compressed
    this.addressPrefix = addressPrefix;
    this.hdPath = hdPath;
  }

  /**
   * Get account information
   */
  async getAccount(): Promise<CosmosAccount> {
    if (!this._account) {
      const address = this.getAddress();
      this._account = {
        address,
        pubkey: this.publicKey,
        algo: 'secp256k1'
      };
    }
    return this._account;
  }

  /**
   * Get the public key in encoded format
   */
  async getPublicKey(): Promise<{ typeUrl: string; value: Uint8Array }> {
    return {
      typeUrl: '/cosmos.crypto.secp256k1.PubKey',
      value: this.publicKey
    };
  }

  /**
   * Get the bech32 address
   */
  getAddress(): string {
    // Create address from public key using standard Cosmos method
    const hash1 = sha256(this.publicKey);
    const hash2 = ripemd160(hash1);
    return toBech32(this.addressPrefix, hash2);
  }

  /**
   * Get all accounts (for offline signer interface)
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    const address = this.getAddress();
    return [{
      address,
      algo: 'secp256k1',
      pubkey: this.publicKey
    }];
  }

  /**
   * Sign a transaction in direct mode
   */
  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const address = this.getAddress();
    if (signerAddress !== address) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    // Serialize the sign doc
    const signBytes = SignDoc.encode(signDoc).finish();

    // Sign the bytes
    const hash = sha256(signBytes);
    const signature = secp256k1.sign(hash, this.privateKey);
    const signatureBytes = signature.toCompactRawBytes();

    return {
      signed: signDoc,
      signature: signatureBytes
    };
  }

  /**
   * Sign a transaction in amino mode
   */
  async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    const address = this.getAddress();
    if (signerAddress !== address) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    // Serialize the sign doc to canonical JSON
    const signBytes = new TextEncoder().encode(this.serializeSignDoc(signDoc));

    // Sign the bytes
    const hash = sha256(signBytes);
    const signature = secp256k1.sign(hash, this.privateKey);
    const signatureBytes = signature.toCompactRawBytes();

    return {
      signed: signDoc,
      signature: signatureBytes
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
  private sortObject(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObject(item));
    } else if (obj !== null && typeof obj === 'object') {
      const sorted: any = {};
      Object.keys(obj).sort().forEach(key => {
        sorted[key] = this.sortObject(obj[key]);
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
  static fromMnemonic(
    mnemonic: string,
    addressPrefix: string = 'cosmos',
    hdPath: string = "m/44'/118'/0'/0/0"
  ): Secp256k1HDWallet {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic');
    }

    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdKey = HDKey.fromMasterSeed(seed);
    const derivedKey = hdKey.derive(hdPath);

    if (!derivedKey.privateKey) {
      throw new Error('Failed to derive private key');
    }

    return new Secp256k1HDWallet(derivedKey.privateKey, addressPrefix, hdPath);
  }

  /**
   * Create wallet from private key
   * @param privateKeyHex Private key in hex format
   * @param addressPrefix Bech32 address prefix (default: 'cosmos')
   * @param hdPath HD derivation path (default: "m/44'/118'/0'/0/0")
   * @returns Secp256k1HDWallet instance
   */
  static fromPrivateKey(
    privateKeyHex: string,
    addressPrefix: string = 'cosmos',
    hdPath: string = "m/44'/118'/0'/0/0"
  ): Secp256k1HDWallet {
    const privateKey = fromHex(privateKeyHex);
    return new Secp256k1HDWallet(privateKey, addressPrefix, hdPath);
  }

  /**
   * Generate a random wallet
   * @param addressPrefix Bech32 address prefix (default: 'cosmos')
   * @returns Secp256k1HDWallet instance
   */
  static random(addressPrefix: string = 'cosmos'): Secp256k1HDWallet {
    const privateKey = secp256k1.utils.randomPrivateKey();
    return new Secp256k1HDWallet(privateKey, addressPrefix);
  }

  /**
   * Get the public key in hex format
   */
  getPublicKeyHex(): string {
    return toHex(this.publicKey);
  }

  /**
   * Get the private key in hex format
   * WARNING: This exposes the private key and should only be used for testing
   */
  getPrivateKeyHex(): string {
    return toHex(this.privateKey);
  }

  /**
   * Convert to Auth interface
   */
  toAuth(): Auth {
    return {
      algo: 'secp256k1',
      hdPath: this.hdPath,
      privateKey: this.getPrivateKeyHex()
    };
  }

  /**
   * Create Secp256k1HDWallet from Auth
   */
  static fromAuth(auth: Auth, addressPrefix: string = 'cosmos'): Secp256k1HDWallet {
    return Secp256k1HDWallet.fromPrivateKey(auth.privateKey, addressPrefix, auth.hdPath);
  }
}

/**
 * Alias for backward compatibility
 */
export { Secp256k1HDWallet as HDWallet };