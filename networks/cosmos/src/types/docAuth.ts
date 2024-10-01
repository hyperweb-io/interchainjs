import {
  DocAuth,
  IKey,
  SIGN_MODE,
  SignDoc,
  SignDocResponse,
  StdSignDoc,
} from '@interchainjs/types';
import { Key } from '@interchainjs/utils';

import { AminoSignResponse, DirectSignResponse, IAminoGeneralOfflineSigner, IDirectGeneralOfflineSigner, isOfflineAminoSigner, isOfflineDirectSigner, OfflineAminoSigner, OfflineDirectSigner } from './wallet';
import { CosmosAminoDoc, CosmosDirectDoc } from './signer';

/**
 * Base class for Doc Auth.
 */
export abstract class BaseDocAuth<TSigner, TDoc, TArgs = unknown, TAddr = string> implements DocAuth<TDoc, TArgs, TAddr> {
  constructor(
    public readonly algo: string,
    public readonly address: TAddr,
    public readonly pubkey: Uint8Array,
    public readonly offlineSigner: TSigner
  ) {
    this.algo = algo;
    this.address = address;
    this.pubkey = pubkey;
  }

  getPublicKey(): IKey {
    return Key.from(this.pubkey);
  }
  abstract signDoc(doc: TDoc, args?: TArgs): Promise<SignDocResponse<TDoc>>;
}

/**
 * a helper class to sign the StdSignDoc with Amino encoding using offline signer.
 */
export class AminoDocAuth extends BaseDocAuth<OfflineAminoSigner | IAminoGeneralOfflineSigner, StdSignDoc> {
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
        account.algo,
        account.address,
        account.pubkey,
        offlineSigner
      );
    });
  }

  static async fromGeneralOfflineSigner(offlineSigner: IAminoGeneralOfflineSigner) {
    if(offlineSigner.signMode !== SIGN_MODE.SIGN_MODE_LEGACY_AMINO_JSON) {
      throw new Error('not an amino general offline signer');
    }

    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new AminoDocAuth(
        account.algo,
        account.address,
        account.pubkey,
        {
          getAccounts: offlineSigner.getAccounts,
          signAmino(signerAddress: string, signDoc: CosmosAminoDoc) {
            return offlineSigner.sign({ signerAddress, signDoc }) as Promise<AminoSignResponse>;
          }
        }
      );
    });
  }
}

/**
 * a helper class to sign the SignDoc with Direct encoding using offline signer.
 */
export class DirectDocAuth extends BaseDocAuth<OfflineDirectSigner | IDirectGeneralOfflineSigner, SignDoc> {
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
        account.algo,
        account.address,
        account.pubkey,
        offlineSigner
      );
    });
  }

  static async fromGeneralOfflineSigner(offlineSigner: IDirectGeneralOfflineSigner) {
    if(offlineSigner.signMode !== SIGN_MODE.SIGN_MODE_DIRECT) {
      throw new Error('not a direct general offline signer');
    }

    const accounts = await offlineSigner.getAccounts();

    return accounts.map((account) => {
      return new DirectDocAuth(
        account.algo,
        account.address,
        account.pubkey,
        {
          getAccounts: offlineSigner.getAccounts,
          signDirect(signerAddress: string, signDoc: CosmosDirectDoc) {
            return offlineSigner.sign({ signerAddress, signDoc }) as Promise<DirectSignResponse>;
          }
        }
      );
    });
  }
}
