import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import { QueryClient } from '@interchainjs/cosmos/types';
import { OfflineSigner } from '@interchainjs/cosmos/types/wallet';
import { CosmWasmMsgs } from '@interchainjs/cosmos-types/cosmwasm';
import { CosmWasmStargateImpl as TxImpl } from '@interchainjs/cosmos-types/service-ops';
import { StargateMsgs } from '@interchainjs/cosmos-types/stargate';
import { HttpEndpoint } from '@interchainjs/types';

import { SigningClient } from './signing-client';
import { SignerOptions } from './types/signing-client';

export class CosmWasmSigningClient extends SigningClient {
  readonly helpers: TxImpl;

  constructor(
    client: QueryClient | null | undefined,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    const msgs = [...StargateMsgs, ...CosmWasmMsgs];
    options.registry = options.registry || [];
    options.registry = options.registry.concat(msgs.map((g) => [g.typeUrl, g]));

    options.aminoConverters = options.aminoConverters || {};

    msgs.forEach((g) => {
      options.aminoConverters[g.typeUrl] = g;
    });

    super(client, offlineSigner, options);
    this.helpers = new TxImpl();
    this.helpers.init(this.txRpc);
  }

  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): Promise<CosmWasmSigningClient> {
    const signingClient = new CosmWasmSigningClient(
      new RpcClient(endpoint, undefined, options.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }
}
