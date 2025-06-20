import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext, SignDocResponse } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { STAGING_KEYS, CosmosTxBuildResult, FinalResultPluginOptions } from '../builders/types';

/**
 * Plugin for building the final result by syncing signature with transaction
 */
export class FinalResultPlugin<TSignDoc> extends BasePlugin<
  { txRaw: Partial<TxRaw>; doc: TSignDoc; signature: SignDocResponse<TSignDoc> },
  BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>
> {
  private syncSignedDoc: (txRaw: TxRaw, signResp: SignDocResponse<TSignDoc>) => Promise<TxRaw>;

  constructor(options: FinalResultPluginOptions<TSignDoc>) {
    const dependencies = ['tx_raw', 'sign_doc', 'signature'];
    super(dependencies, options);
    this.syncSignedDoc = options.syncSignedDoc;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): { txRaw: Partial<TxRaw>; doc: TSignDoc; signature: SignDocResponse<TSignDoc> } {
    return {
      txRaw: params.txRaw as Partial<TxRaw>,
      doc: params.signDoc as TSignDoc,
      signature: params.signature as SignDocResponse<TSignDoc>
    };
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>,
    params: { txRaw: Partial<TxRaw>; doc: TSignDoc; signature: SignDocResponse<TSignDoc> }
  ): Promise<void> {
    // Sync the signature with the transaction
    const signedTxRaw = await this.syncSignedDoc(TxRaw.fromPartial(params.txRaw), params.signature);

    const finalResult: CosmosTxBuildResult<TSignDoc> = {
      tx: signedTxRaw,
      doc: params.doc,
    };

    ctx.setFinalResult(finalResult);
  }
}
