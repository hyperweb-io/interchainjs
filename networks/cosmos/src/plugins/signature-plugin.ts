import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { STAGING_KEYS } from '../builders/types';

/**
 * Plugin for building the signature
 */
export class SignaturePlugin<TSignDoc> extends BasePlugin<
  TSignDoc,
  BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>
> {
  constructor() {
    const dependencies = ['sign_doc'];
    super(dependencies, {});
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TSignDoc {
    return params.signDoc as TSignDoc;
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>,
    params: TSignDoc
  ): Promise<void> {
    const signer = ctx.signer as CosmosBaseSigner<TSignDoc>;
    const signResp = await signer.signDoc(params);

    ctx.setStagingData(STAGING_KEYS.SIGNATURE, signResp);
  }
}