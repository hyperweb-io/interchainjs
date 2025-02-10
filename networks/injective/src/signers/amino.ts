import {
  AminoConverter,
  Encoder,
  SignerOptions,
} from '@interchainjs/cosmos/types';
import { AminoDocSigner as CosmosAminoDocSigner, AminoSigner as CosmosAminoSigner } from '@interchainjs/cosmos/signers/amino';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { defaultSignerOptions } from '../defaults';

/**
 * AminoDocSigner is a signer for Amino document.
 */
export class AminoDocSigner extends CosmosAminoDocSigner {}

/**
 * AminoDocSigner is a signer for inj Amino document.
 */
export class AminoSigner
  extends CosmosAminoSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, converters, endpoint, opt);
  }
}
