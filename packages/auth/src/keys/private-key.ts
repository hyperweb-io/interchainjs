import {
  IPrivateKey,
  IPrivateKeyConfig,
  IPublicKeyConfig,
  IPublicKey,
  ICryptoBytes,
  IHDPath,
  IAlgo,
} from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { Bip39, EnglishMnemonic, Slip10, Slip10RawIndex, Slip10Curve } from '@interchainjs/crypto';
import { resolveAlgo } from '../config/algorithms';
import { PublicKey } from './public-key';

// Helper function to convert HD path to Slip10 format
function hdPathToSlip10(hdPath: string): Slip10RawIndex[] {
  const parts = hdPath.split('/').slice(1); // Remove 'm'
  return parts.map(part => {
    const isHardened = part.endsWith("'");
    const index = parseInt(isHardened ? part.slice(0, -1) : part, 10);
    return isHardened ? Slip10RawIndex.hardened(index) : Slip10RawIndex.normal(index);
  });
}

export class PrivateKey implements IPrivateKey {
  private _algo: IAlgo;

  constructor(
    public readonly value: ICryptoBytes,
    public readonly config: IPrivateKeyConfig,
    public readonly hdPath?: IHDPath
  ) {
    // Resolve algo once during construction
    this._algo = resolveAlgo(config.algo);
  }

  toPublicKey(config?: IPublicKeyConfig): IPublicKey {
    // Only compression can be configured, algorithm is inherited
    const compressed = config?.compressed ?? true;  // default to compressed

    const keyPair = this._algo.makeKeypair(this.value.value);
    const pubKeyBytes = compressed
      ? this._algo.compress(keyPair.pubkey)
      : keyPair.pubkey;

    return new PublicKey(
      BaseCryptoBytes.from(pubKeyBytes),
      this.config.algo,  // Pass the same algorithm
      compressed
    );
  }

  async sign(data: Uint8Array): Promise<ICryptoBytes> {
    // Note: The caller is responsible for hashing the data if needed
    // This allows flexibility for different signing schemes
    const signature = await this._algo.sign(
      data,
      this.value.value
    );

    return BaseCryptoBytes.from(signature);
  }

  toHex(): string {
    return this.value.toHex();
  }

  toBase64(): string {
    return this.value.toBase64();
  }

  static async fromMnemonic(
    mnemonic: string,
    hdPaths: IHDPath[],
    config: IPrivateKeyConfig
  ): Promise<IPrivateKey[]> {
    const mnemonicObj = new EnglishMnemonic(mnemonic);
    const seed = await Bip39.mnemonicToSeed(
      mnemonicObj,
      config.passphrase || ''
    );

    return hdPaths.map(hdPath => {
      // Determine curve based on algorithm
      const algo = resolveAlgo(config.algo);
      const curve = algo.name === 'ed25519' ? Slip10Curve.Ed25519 : Slip10Curve.Secp256k1;

      const slip10Result = Slip10.derivePath(
        curve,
        seed,
        hdPathToSlip10(hdPath.toString())
      );

      return new PrivateKey(
        BaseCryptoBytes.from(slip10Result.privkey),
        config,
        hdPath
      );
    });
  }

  static fromBytes(bytes: ICryptoBytes, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey {
    return new PrivateKey(bytes, config, hdPath);
  }

  static fromHex(hex: string, config: IPrivateKeyConfig, hdPath?: IHDPath): IPrivateKey {
    return PrivateKey.fromBytes(BaseCryptoBytes.fromHex(hex), config, hdPath);
  }
}