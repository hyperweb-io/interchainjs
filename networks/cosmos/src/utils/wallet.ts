import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Auth, SignDocResponse, SignerConfig } from '@interchainjs/types';

import { defaultSignerConfig } from '../defaults';
import { CosmosAminoDoc } from '../types';
import { encodeStdSignDoc } from './amino';

export class SignResponseFromAuth {
  static signDirect(
    auth: Auth,
    doc: SignDoc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<SignDoc> {
    const signDoc = SignDoc.fromPartial(doc);
    const signature = auth.sign(
      config.message.hash(SignDoc.encode(signDoc).finish())
    );
    return {
      signature: signature.toCompact(),
      signDoc: signDoc,
    };
  }

  static signAmino(
    auth: Auth,
    doc: CosmosAminoDoc,
    config: SignerConfig = defaultSignerConfig
  ): SignDocResponse<CosmosAminoDoc> {
    const encoded = encodeStdSignDoc(doc);
    const signature = auth.sign(config.message.hash(encoded));
    return {
      signature: signature.toCompact(),
      signDoc: doc,
    };
  }
}
