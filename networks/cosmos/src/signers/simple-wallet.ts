import { ICryptoBytes } from '@interchainjs/types';
import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { fromHex, toHex, BaseCryptoBytes } from '@interchainjs/utils';
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { CosmosAccount } from '../workflows/types';
import { CosmosWallet } from './types';

/**
 * Simple wallet implementation for testing and development
 * Uses secp256k1 private key for signing
 */
export class SimpleWallet implements CosmosWallet {
  private privateKey: Uint8Array;
  private publicKey: Uint8Array;
  private addressPrefix: string;
  private _account?: CosmosAccount;

  constructor(privateKeyHex: string, addressPrefix: string = 'cosmos') {
    this.privateKey = fromHex(privateKeyHex);
    this.publicKey = secp256k1.getPublicKey(this.privateKey, true); // compressed
    this.addressPrefix = addressPrefix;
  }

  /**
   * Get account information
   */
  async getAccount(): Promise<CosmosAccount> {
    if (!this._account) {
      const address = this.getAddress();
      this._account = {
        address,
        publicKey: BaseCryptoBytes.from(this.publicKey),
        algo: 'secp256k1'
      };
    }
    return this._account;
  }

  /**
   * Sign arbitrary data
   */
  async signArbitrary(data: Uint8Array): Promise<ICryptoBytes> {
    const hash = sha256(data);
    const signature = secp256k1.sign(hash, this.privateKey);
    
    return BaseCryptoBytes.from(signature.toCompactRawBytes());
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
   * Create wallet from mnemonic (simplified implementation)
   */
  static fromMnemonic(
    mnemonic: string, 
    addressPrefix: string = 'cosmos',
    derivationPath: string = "m/44'/118'/0'/0/0"
  ): SimpleWallet {
    // This is a simplified implementation
    // In a real implementation, you would use BIP39 and BIP32 for proper key derivation
    const hash = sha256(new TextEncoder().encode(mnemonic + derivationPath));
    const privateKeyHex = toHex(hash);
    return new SimpleWallet(privateKeyHex, addressPrefix);
  }

  /**
   * Create wallet from private key
   */
  static fromPrivateKey(
    privateKeyHex: string, 
    addressPrefix: string = 'cosmos'
  ): SimpleWallet {
    return new SimpleWallet(privateKeyHex, addressPrefix);
  }

  /**
   * Generate a random wallet
   */
  static random(addressPrefix: string = 'cosmos'): SimpleWallet {
    const privateKey = secp256k1.utils.randomPrivateKey();
    const privateKeyHex = toHex(privateKey);
    return new SimpleWallet(privateKeyHex, addressPrefix);
  }

  /**
   * Get the private key (for testing purposes only)
   */
  getPrivateKeyHex(): string {
    return toHex(this.privateKey);
  }

  /**
   * Get the public key hex
   */
  getPublicKeyHex(): string {
    return toHex(this.publicKey);
  }
}