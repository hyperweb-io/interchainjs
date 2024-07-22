import * as BytesUtils from '@ethersproject/bytes';
import { AuthOptions, ByteAuth, ISignatureWraper } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { secp256k1 } from '@noble/curves/secp256k1';
import { HDKey } from '@scure/bip32';
import { Signature as EthSignature, Wallet } from 'ethers';
import { HDNode } from 'ethers/lib/utils';

export class EthSecp256k1Auth implements ByteAuth<EthSignature> {
  protected privateKey: Key = null;
  protected ethWallet: Wallet;

  readonly algo = 'eth_secp256k1';

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

    if (this.privateKey) {
      this.ethWallet = new Wallet(this.privateKey.toHex());
    }
  }

  static fromMnemonic(
    mnemonic: string,
    hdPaths: string[],
    options?: AuthOptions
  ) {
    const node = HDNode.fromMnemonic(mnemonic, options.bip39Password);

    return hdPaths.map((hdPath) => {
      const derived = node.derivePath(hdPath);

      return new EthSecp256k1Auth(Key.fromHex(derived.privateKey), hdPath);
    });
  }

  getPublicKey = (isCompressed?: boolean) => {
    return Key.from(
      secp256k1.getPublicKey(this.privateKey!.value, isCompressed)
    );
  };

  sign(data: Uint8Array): ISignatureWraper<EthSignature> {
    const { ethWallet } = this;

    return new EthSecp256k1Signature(ethWallet.signingKey.sign(data));
  }
}

export class EthSecp256k1Signature implements ISignatureWraper<EthSignature> {
  constructor(public readonly signature: EthSignature) {}

  toCompact(): Key {
    const splitSignature = BytesUtils.splitSignature(this.signature);

    const result = BytesUtils.arrayify(
      BytesUtils.concat([splitSignature.r, splitSignature.s])
    );

    return Key.from(result);
  }
}
