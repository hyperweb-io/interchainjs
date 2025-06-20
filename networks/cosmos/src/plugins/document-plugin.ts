import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosSignArgs } from '../types/signer';
import { STAGING_KEYS, DocumentPluginOptions } from '../builders/types';

/**
 * Plugin for building the sign document
 */
export class DocumentPlugin<TSignDoc> extends BasePlugin<
  CosmosSignArgs,
  BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>
> {
  private buildDocBytes: (doc: TSignDoc) => Promise<Uint8Array>;
  private buildDoc: (args: CosmosSignArgs, txRaw: Partial<TxRaw>) => Promise<TSignDoc>;

  constructor(options: DocumentPluginOptions<TSignDoc>) {
    const dependencies = ['sign_args'];
    super(dependencies, options);
    this.buildDocBytes = options.buildDocBytes;
    this.buildDoc = options.buildDoc;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): CosmosSignArgs {
    return params.signArgs as CosmosSignArgs;
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>,
    params: CosmosSignArgs
  ): Promise<void> {
    // Build partial TxRaw from staged data
    const txBodyData = ctx.getStagingData<{ encode: () => Uint8Array }>('tx_body');
    const authInfoData = ctx.getStagingData<{ encode: () => Uint8Array }>('auth_info');
    const stdFee = ctx.getStagingData('fee');

    if (!txBodyData || !authInfoData || !stdFee) {
      throw new Error('Required transaction components not found in staging data');
    }

    const txRaw: Partial<TxRaw> & { fee: unknown } = {
      bodyBytes: txBodyData.encode(),
      authInfoBytes: authInfoData.encode(),
      fee: stdFee,
    };

    // Build the sign document
    const doc = await this.buildDoc(params, txRaw);

    ctx.setStagingData(STAGING_KEYS.SIGN_DOC, doc);
    ctx.setStagingData(STAGING_KEYS.TX_RAW, txRaw);
  }
}