import {
  DocAuth,
  IKey,
  SignDoc,
  SignDocResponse,
  StdSignDoc,
} from '@interchainjs/types';
import { Key } from '@interchainjs/utils';

import { OfflineAminoSigner, OfflineDirectSigner } from './wallet';

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

export class AminoDocAuth extends BaseDocAuth<OfflineAminoSigner, StdSignDoc> {
  async signDoc(doc: StdSignDoc): Promise<SignDocResponse<StdSignDoc>> {
    let resp = await this.offlineSigner.signAmino(this.address, doc);

    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: doc,
    };
  }
}

export class DirectDocAuth extends BaseDocAuth<OfflineDirectSigner, SignDoc> {
  async signDoc(doc: SignDoc): Promise<SignDocResponse<SignDoc>> {
    let resp = await this.offlineSigner.signDirect(this.address, doc);

    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: doc,
    };
  }
}
