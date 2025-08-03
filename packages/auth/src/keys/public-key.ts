import {
  IPublicKey,
  IPublicKeyConfig,
  IAddress,
  IAddressConfig,
  ICryptoBytes,
  IPrivateKey,
  IAlgo,
} from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { resolveAlgo } from '../config/algorithms';
import { Address } from './address';

export class PublicKey implements IPublicKey {
  private _algo: IAlgo;

  constructor(
    public readonly value: ICryptoBytes,
    public readonly algo: IAlgo | string,
    public readonly compressed: boolean
  ) {
    // Resolve algo once during construction
    this._algo = resolveAlgo(algo);
  }

  toAddress(config: IAddressConfig, prefix?: string): IAddress {
    // Note: This method is optional in the interface
    // Some chains (e.g., Solana) don't have separate addresses
    return Address.fromPublicKey(this, config, prefix);
  }

  async verify(data: Uint8Array, signature: ICryptoBytes): Promise<boolean> {
    // Note: The caller is responsible for hashing the data if needed
    // This should match the hashing used during signing
    return this._algo.verify(
      signature.value,
      data,
      this.value.value
    );
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }

  static fromPrivateKey(privateKey: IPrivateKey, config?: IPublicKeyConfig): IPublicKey {
    return privateKey.toPublicKey(config);
  }

  static fromBytes(bytes: ICryptoBytes, algo: IAlgo | string, compressed: boolean = true): IPublicKey {
    return new PublicKey(bytes, algo, compressed);
  }

  static fromHex(hex: string, algo: IAlgo | string, compressed: boolean = true): IPublicKey {
    return PublicKey.fromBytes(BaseCryptoBytes.fromHex(hex), algo, compressed);
  }
}