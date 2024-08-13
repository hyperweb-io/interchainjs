import {
  DocAuth,
  IKey,
  SignDoc,
  SignDocResponse,
  StdSignDoc,
} from '@interchainjs/types';
import { Key } from '@interchainjs/utils';

import { OfflineAminoSigner, OfflineDirectSigner } from './wallet';

/**
 * Base class for Doc Auth.
 */
export abstract class BaseDocAuth<Signer, Doc> implements DocAuth<Doc> {
  constructor(
    public readonly algo: string,
    public readonly address: string,
    public readonly pubkey: Uint8Array,
    public readonly offlineSigner: Signer
  ) {
    this.algo = algo;
    this.address = address;
    this.pubkey = pubkey;
  }

  getPublicKey(): IKey {
    return Key.from(this.pubkey);
  }
  abstract signDoc(doc: Doc): Promise<SignDocResponse<Doc>>;
}

/**
 * a helper class to sign the StdSignDoc with Amino encoding using offline signer.
 */
export class AminoDocAuth extends BaseDocAuth<OfflineAminoSigner, StdSignDoc> {
  async signDoc(doc: StdSignDoc): Promise<SignDocResponse<StdSignDoc>> {
    let resp = await this.offlineSigner.signAmino(this.address, doc);

    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: doc,
    };
  }

  static async fromOfflineSigner(offlineSigner: OfflineAminoSigner) {
    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new AminoDocAuth(
        account.algo,
        account.address,
        account.pubkey,
        offlineSigner
      );
    });
  }
}

/**
 * a helper class to sign the SignDoc with Direct encoding using offline signer.
 */
export class DirectDocAuth extends BaseDocAuth<OfflineDirectSigner, SignDoc> {
  async signDoc(doc: SignDoc): Promise<SignDocResponse<SignDoc>> {
    let resp = await this.offlineSigner.signDirect(this.address, doc);

    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: doc,
    };
  }

  static async fromOfflineSigner(offlineSigner: OfflineDirectSigner) {
    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new DirectDocAuth(
        account.algo,
        account.address,
        account.pubkey,
        offlineSigner
      );
    });
  }
}
