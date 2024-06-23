import { AminoSigner } from '@interchainjs/cosmos/amino';
import { OfflineSigner } from '@interchainjs/cosmos/types/wallet';
import { toConverter, toEncoder } from '@interchainjs/cosmos/utils';
import { CosmWasmMsgs } from '@interchainjs/cosmos-types/cosmwasm';
import { CosmWasmStargateImpl as TxImpl } from '@interchainjs/cosmos-types/service-ops';
import { StargateMsgs } from '@interchainjs/cosmos-types/stargate';
import { HttpEndpoint } from '@interchainjs/types';

import { SigningClient } from './signing-client';
import { SignerOptions } from './types/signing-client';
import { defaultAuth } from './utils';

export class CosmWasmSigningClient extends SigningClient {
  readonly helpers: TxImpl;

  constructor(
    aminoSigner: AminoSigner,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    super(aminoSigner, offlineSigner, options);
    this.aminoSigner.addEncoders(
      [...StargateMsgs, ...CosmWasmMsgs].map((g) => toEncoder(g))
    );
    this.aminoSigner.addConverters(
      [...StargateMsgs, ...CosmWasmMsgs].map((g) => toConverter(g))
    );
    this.helpers = new TxImpl();
    this.helpers.init(this.txRpc);
  }

  static connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): CosmWasmSigningClient {
    const aminoSigner = new AminoSigner(defaultAuth, [], []);
    const signingClient = new CosmWasmSigningClient(
      aminoSigner,
      signer,
      options
    );
    signingClient.setEndpoint(endpoint);
    return signingClient;
  }
}
