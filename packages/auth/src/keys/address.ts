import {
  IAddress,
  IAddressConfig,
  IPublicKey,
  ICryptoBytes,
  IAddressStrategy,
} from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { resolveAddressStrategy } from '../strategies';
import { resolveAlgo } from '../config/algorithms';

export class Address implements IAddress {
  private _strategy: IAddressStrategy;

  constructor(
    public readonly value: string,
    public readonly config: IAddressConfig,
    public readonly prefix?: string
  ) {
    this._strategy = resolveAddressStrategy(config.strategy);
  }

  toBytes(): ICryptoBytes {
    const decoded = this._strategy.decode(this.value);
    return BaseCryptoBytes.from(decoded.bytes);
  }

  isValid(): boolean {
    try {
      this.toBytes();
      // Validate checksum if strategy supports it
      if (this._strategy.validateChecksum) {
        return this._strategy.validateChecksum(this.value);
      }
      return true;
    } catch {
      return false;
    }
  }

  static fromPublicKey(
    publicKey: IPublicKey,
    config: IAddressConfig,
    prefix?: string
  ): IAddress {
    const strategy = resolveAddressStrategy(config.strategy);

    // Get algorithm from the public key
    const algo = resolveAlgo(publicKey.algo);

    // Preprocess public key if needed
    let processedBytes = publicKey.value.value;
    if (strategy.preprocessPublicKey) {
      processedBytes = strategy.preprocessPublicKey(
        publicKey.value.value,
        publicKey.compressed,
        algo
      );
    }

    // Hash the bytes
    const hashedBytes = strategy.hash(processedBytes);

    // Encode the address
    let addressString = strategy.encode(hashedBytes, prefix);

    // Apply checksum if available
    if (strategy.checksum) {
      addressString = strategy.checksum(addressString);
    }

    return new Address(addressString, config, prefix);
  }

  static fromString(address: string, config: IAddressConfig): IAddress {
    const strategy = resolveAddressStrategy(config.strategy);

    // Extract prefix using strategy
    const prefix = strategy.extractPrefix(address);

    // Validate the address format
    try {
      strategy.decode(address);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Invalid ${strategy.name} address format: ${message}`);
    }

    return new Address(address, config, prefix);
  }
}