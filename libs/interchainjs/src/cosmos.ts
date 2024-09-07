import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import { QueryClient } from '@interchainjs/cosmos/types';
import { OfflineSigner } from '@interchainjs/cosmos/types/wallet';
import { StargateImpl as TxImpl } from '@interchainjs/cosmos-types/service-ops';
import { Msgs } from '@interchainjs/cosmos-types/cosmos';
import { HttpEndpoint } from '@interchainjs/types';

import { SigningClient } from './signing-client';
import { SignerOptions } from './types/signing-client';

export class CosmosSigningClient extends SigningClient {
  readonly helpers: TxImpl;

  constructor(
    client: QueryClient | null | undefined,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    options.registry = options.registry || [];
    options.registry = options.registry.concat(
      Msgs.map((g) => [g.typeUrl, g])
    );

    options.aminoConverters = options.aminoConverters || {};

    Msgs.forEach((g) => {
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
  ): Promise<CosmosSigningClient> {
    const signingClient = new CosmosSigningClient(
      new RpcClient(endpoint, options.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }
}
