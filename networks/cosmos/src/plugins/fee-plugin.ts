import { SignerInfo, TxBody } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { calculateFee, toFee } from '../utils';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosSignArgs } from '../types/signer';
import { STAGING_KEYS, FeeParams, FeePluginOptions } from '../builders/types';

/**
 * Plugin for calculating and handling fees
 */
export class FeePlugin extends BasePlugin<
  FeeParams,
  BaseTxBuilderContext<CosmosBaseSigner<unknown>>
> {
  constructor(options: FeePluginOptions = {}) {
    const dependencies = ['sign_args', 'tx_body', 'signer_info'];
    super(dependencies, options);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): FeeParams {
    const signArgs = params.signArgs as CosmosSignArgs;
    const txBodyData = params.txBody as { txBody: TxBody };
    const signerInfoData = params.signerInfo as { signerInfo: SignerInfo };

    return {
      fee: signArgs.fee,
      txBody: txBodyData.txBody,
      signerInfos: [signerInfoData.signerInfo],
      gasPrice: signArgs.options?.gasPrice,
      multiplier: signArgs.options?.multiplier,
    };
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<unknown>>,
    params: FeeParams
  ): Promise<void> {
    let stdFee = params.fee;

    if (!stdFee) {
      const signer = ctx.signer as CosmosBaseSigner<unknown>;
      const { gasInfo } = await signer.simulateByTxBody(params.txBody, params.signerInfos);

      if (typeof gasInfo === 'undefined') {
        throw new Error('Failed to estimate gas by simulate tx.');
      }

      const signArgs = ctx.getStagingData<CosmosSignArgs>('sign_args');
      stdFee = await calculateFee(gasInfo, signArgs.options || {}, async () => {
        return signer.queryClient.getChainId();
      });
    }

    const fee = toFee(stdFee);

    ctx.setStagingData(STAGING_KEYS.FEE, stdFee);
    ctx.setStagingData('calculated_fee', { fee });
  }
}