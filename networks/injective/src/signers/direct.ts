import { Encoder, SignerOptions } from '@interchainjs/cosmos/types';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { defaultSignerOptions } from '../defaults';
import { DirectDocSigner as CosmosDirectDocSigner, DirectSigner as CosmosDirectSigner } from '@interchainjs/cosmos/signers/direct';

/**
 * DirectDocSigner is a signer for Direct document.
 */
export class DirectDocSigner extends CosmosDirectDocSigner {
}


/**
 * DirectDocSigner is a signer for inj Direct document.
 */
export class DirectSigner
  extends CosmosDirectSigner {
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, endpoint, opt);
  }
}
