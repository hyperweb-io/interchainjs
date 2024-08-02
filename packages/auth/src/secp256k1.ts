import { AuthOptions, ByteAuth, ISignatureWraper } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { RecoveredSignatureType } from '@noble/curves/abstract/weierstrass';
import { secp256k1 } from '@noble/curves/secp256k1';
import { HDKey } from '@scure/bip32';

import { getSeedFromMnemonic } from './utils';

export class Secp256k1Auth implements ByteAuth<RecoveredSignatureType> {
  protected privateKey: Key = null;

  readonly algo = 'secp256k1';

  constructor(
    privateKey: Uint8Array | HDKey | Key,
    public readonly hdPath?: string
  ) {
    if (privateKey instanceof HDKey) {
      this.privateKey = Key.from(privateKey.privateKey);
    } else if (privateKey instanceof Key) {
      this.privateKey = privateKey;
    } else if (privateKey) {
      this.privateKey = Key.from(privateKey);
    }
  }

  static fromMnemonic(
    mnemonic: string,
    hdPaths: string[],
    options?: AuthOptions
  ) {
    const masterSeed = HDKey.fromMasterSeed(
      getSeedFromMnemonic(mnemonic, options?.bip39Password)
    );

    return hdPaths.map((hdPath) => {
      return new Secp256k1Auth(masterSeed.derive(hdPath), hdPath);
    });
  }

  getPublicKey = (isCompressed?: boolean) => {
    return Key.from(
      secp256k1.getPublicKey(this.privateKey!.value, isCompressed)
    );
  };

  sign(data: Uint8Array): ISignatureWraper<RecoveredSignatureType> {
    if (!this.privateKey) {
      throw new Error('No privateKey set!');
    }
    const signature = secp256k1.sign(data, this.privateKey.toBigInt());
    return new Secp256k1Signature(signature);
  }
}

export class Secp256k1Signature
implements ISignatureWraper<RecoveredSignatureType>
{
  constructor(public readonly signature: RecoveredSignatureType) {}

  toCompact(): Key {
    return Key.from(this.signature.toCompactRawBytes());
  }
}
