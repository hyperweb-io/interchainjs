import { AuthInfo, Fee, SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { STAGING_KEYS, AuthInfoParams, AuthInfoPluginOptions } from '../builders/types';

/**
 * Plugin for building auth info
 */
export class AuthInfoPlugin extends BasePlugin<
  AuthInfoParams,
  BaseTxBuilderContext<CosmosBaseSigner<unknown>>
> {
  constructor(options: AuthInfoPluginOptions = {}) {
    const dependencies = ['signer_info', 'calculated_fee'];
    super(dependencies, options);
  }

  protected afterRetrieveParams(params: Record<string, unknown>): AuthInfoParams {
    const signerInfoData = params.signerInfo as { signerInfo: SignerInfo };
    const feeData = params.calculatedFee as { fee: Fee };

    return {
      signerInfos: [signerInfoData.signerInfo],
      fee: feeData.fee,
    };
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<unknown>>,
    params: AuthInfoParams
  ): Promise<void> {
    const authInfo = AuthInfo.fromPartial({
      signerInfos: params.signerInfos,
      fee: params.fee,
    });

    ctx.setStagingData(STAGING_KEYS.AUTH_INFO, {
      authInfo,
      encode: () => AuthInfo.encode(authInfo).finish(),
    });
  }
}