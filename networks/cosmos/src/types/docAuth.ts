import {
  BaseDocAuth,
  IKey,
  SIGN_MODE,
  SignDoc,
  SignDocResponse,
  StdSignDoc,
} from '@interchainjs/types';
import { Key } from '@interchainjs/utils';

import { AminoSignResponse, DirectSignResponse, IAminoGenericOfflineSigner, IDirectGenericOfflineSigner, isOfflineAminoSigner, isOfflineDirectSigner, OfflineAminoSigner, OfflineDirectSigner } from './wallet';
import { CosmosAminoDoc, CosmosDirectDoc } from './signer';

/**
 * a helper class to sign the StdSignDoc with Amino encoding using offline signer.
 */
export class AminoDocAuth extends BaseDocAuth<OfflineAminoSigner | IAminoGenericOfflineSigner, StdSignDoc> {
  getPublicKey(): IKey {
    return Key.from(this.pubkey);
  }

  async signDoc(doc: StdSignDoc): Promise<SignDocResponse<StdSignDoc>> {
    let resp;
    if(isOfflineAminoSigner(this.offlineSigner)) {
      resp = await this.offlineSigner.signAmino(this.address, doc);
    } else {
      resp = await this.offlineSigner.sign({
        signerAddress: this.address,
        signDoc: doc,
      })
    }

    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: resp.signed,
    };
  }

  static async fromOfflineSigner(offlineSigner: OfflineAminoSigner) {
    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new AminoDocAuth(
        offlineSigner,
        account.address,
        account.algo,
        account.pubkey,
      );
    });
  }

  static async fromGenericOfflineSigner(offlineSigner: IAminoGenericOfflineSigner) {
    if(offlineSigner.signMode !== SIGN_MODE.AMINO) {
      throw new Error('not an amino general offline signer');
    }

    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new AminoDocAuth(
        {
          getAccounts: offlineSigner.getAccounts,
          signAmino(signerAddress: string, signDoc: CosmosAminoDoc) {
            return offlineSigner.sign({ signerAddress, signDoc }) as Promise<AminoSignResponse>;
          }
        },
        account.address,
        account.algo,
        account.pubkey,
      );
    });
  }
}

/**
 * a helper class to sign the SignDoc with Direct encoding using offline signer.
 */
export class DirectDocAuth extends BaseDocAuth<OfflineDirectSigner | IDirectGenericOfflineSigner, SignDoc> {
  getPublicKey(): IKey {
    return Key.from(this.pubkey);
  }

  async signDoc(doc: SignDoc): Promise<SignDocResponse<SignDoc>> {
    // let resp = await this.offlineSigner.signDirect(this.address, doc);
    let resp;
    if(isOfflineDirectSigner(this.offlineSigner)) {
      resp = await this.offlineSigner.signDirect(this.address, doc);
    } else {
      resp = await this.offlineSigner.sign({
        signerAddress: this.address,
        signDoc: doc,
      })
    }


    return {
      signature: Key.fromBase64(resp.signature.signature),
      signDoc: resp.signed,
    };
  }

  static async fromOfflineSigner(offlineSigner: OfflineDirectSigner) {
    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new DirectDocAuth(
        offlineSigner,
        account.address,
        account.algo,
        account.pubkey,
      );
    });
  }

  static async fromGenericOfflineSigner(offlineSigner: IDirectGenericOfflineSigner) {
    if(offlineSigner.signMode !== SIGN_MODE.DIRECT) {
      throw new Error('not a direct general offline signer');
    }

    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new DirectDocAuth(
        {
          getAccounts: offlineSigner.getAccounts,
          signDirect(signerAddress: string, signDoc: CosmosDirectDoc) {
            return offlineSigner.sign({ signerAddress, signDoc }) as Promise<DirectSignResponse>;
          }
        },
        account.address,
        account.algo,
        account.pubkey,
      );
    });
  }
}
