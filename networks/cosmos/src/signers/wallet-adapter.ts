import { ICryptoBytes } from '@interchainjs/types';
import { secp256k1 } from '@noble/curves/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { fromHex, toHex, BaseCryptoBytes } from '@interchainjs/utils';
import { fromBech32, toBech32 } from '@interchainjs/encoding';

import {
  CosmosWallet,
  Auth,
  OfflineSigner,
  AccountData
} from './types';

/**
 * Adapter that creates a CosmosWallet from either Auth or OfflineSigner
 */
export class WalletAdapter implements CosmosWallet {
  private auth?: Auth;
  private offlineSigner?: OfflineSigner;
  private addressPrefix: string;
  private _account?: AccountData;

  private constructor(
    authOrSigner: Auth | OfflineSigner,
    addressPrefix: string = 'cosmos'
  ) {
    this.addressPrefix = addressPrefix;

    if ('privateKey' in authOrSigner) {
      this.auth = authOrSigner;
    } else {
      this.offlineSigner = authOrSigner;
    }
  }

  /**
   * Create a wallet adapter from Auth or OfflineSigner
   */
  static fromAuthOrSigner(
    authOrSigner: Auth | OfflineSigner,
    addressPrefix: string = 'cosmos'
  ): WalletAdapter {
    return new WalletAdapter(authOrSigner, addressPrefix);
  }

  /**
   * Get account information
   */
  async getAccount(): Promise<AccountData> {
    if (!this._account) {
      if (this.auth) {
        // Create account from Auth
        const privateKey = fromHex(this.auth.privateKey);
        const publicKey = secp256k1.getPublicKey(privateKey, true); // compressed
        const address = this.getAddressFromPublicKey(publicKey);

        this._account = {
          address,
          algo: this.auth.algo,
          pubkey: publicKey
        };
      } else if (this.offlineSigner) {
        // Get account from OfflineSigner
        const accounts = await this.offlineSigner.getAccounts();
        if (accounts.length === 0) {
          throw new Error('No accounts found in offline signer');
        }

        // Use the first account
        this._account = accounts[0];
      } else {
        throw new Error('No auth or offline signer provided');
      }
    }

    return this._account;
  }

  /**
   * Get the public key in encoded format
   */
  async getPublicKey(): Promise<{ typeUrl: string; value: Uint8Array }> {
    // Get public key based on the source
    let publicKey: Uint8Array;
    let algo: string;

    if (this.auth) {
      const privateKey = fromHex(this.auth.privateKey);
      publicKey = secp256k1.getPublicKey(privateKey, true); // compressed
      algo = this.auth.algo;
    } else if (this._account) {
      publicKey = this._account.pubkey;
      algo = this._account.algo;
    } else {
      // Ensure account is loaded
      await this.getAccount();
      if (this._account) {
        publicKey = this._account.pubkey;
        algo = this._account.algo;
      } else {
        throw new Error('Unable to get public key');
      }
    }

    // Determine the type URL based on the algorithm
    let typeUrl: string;
    switch (algo) {
      case 'secp256k1':
        typeUrl = '/cosmos.crypto.secp256k1.PubKey';
        break;
      case 'ed25519':
        typeUrl = '/cosmos.crypto.ed25519.PubKey';
        break;
      default:
        throw new Error(`Unsupported algorithm: ${algo}`);
    }

    return {
      typeUrl,
      value: publicKey
    };
  }

  /**
   * Get the address from public key
   */
  private getAddressFromPublicKey(publicKey: Uint8Array): string {
    const hash1 = sha256(publicKey);
    const hash2 = ripemd160(hash1);
    return toBech32(this.addressPrefix, hash2);
  }

  /**
   * Check if this adapter has an Auth (private key)
   */
  hasAuth(): boolean {
    return !!this.auth;
  }

  /**
   * Check if this adapter has an OfflineSigner
   */
  hasOfflineSigner(): boolean {
    return !!this.offlineSigner;
  }

  /**
   * Get the Auth if available
   */
  getAuth(): Auth | undefined {
    return this.auth;
  }

  /**
   * Get the OfflineSigner if available
   */
  getOfflineSigner(): OfflineSigner | undefined {
    return this.offlineSigner;
  }
}