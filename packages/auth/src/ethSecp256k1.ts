import * as BytesUtils from '@ethersproject/bytes';
import { AuthOptions, ByteAuth, ISignatureWraper } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { secp256k1 } from '@noble/curves/secp256k1';
import { HDKey } from '@scure/bip32';
import { HDNodeWallet, Signature as EthSignature, Wallet } from 'ethers';

/**
 * secp256k1 Auth for Ethereum
 */
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

  /**
   * Create new Auths from mnemonic
   */
  static fromMnemonic(
    mnemonic: string,
    hdPaths: string[],
    options?: AuthOptions
  ) {
    return hdPaths.map((hdPath) => {
      const derived = HDNodeWallet.fromPhrase(mnemonic, options?.bip39Password, hdPath);

      return new EthSecp256k1Auth(Key.fromHex(derived.privateKey), hdPath);
    });
  }

  /**
   * Get public key generated from private key
   */
  getPublicKey = (isCompressed?: boolean) => {
    return Key.from(
      secp256k1.getPublicKey(this.privateKey!.value, isCompressed)
    );
  };

  /**
   * Sign data in bytes
   */
  sign(data: Uint8Array): ISignatureWraper<EthSignature> {
    const { ethWallet } = this;

    return new EthSecp256k1Signature(ethWallet.signingKey.sign(data));
  }
}

/**
 * secp256k1 Signature for Ethereum
 */
export class EthSecp256k1Signature implements ISignatureWraper<EthSignature> {
  constructor(public readonly signature: EthSignature) {}

  /**
   * Convert signature to compact format
   */
  toCompact(): Key {
    const splitSignature = BytesUtils.splitSignature(this.signature);

    const result = BytesUtils.arrayify(
      BytesUtils.concat([splitSignature.r, splitSignature.s])
    );

    return Key.from(result);
  }
}
