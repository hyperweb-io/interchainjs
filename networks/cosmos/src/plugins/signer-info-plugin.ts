import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosSignArgs } from '../types/signer';
import { STAGING_KEYS, SignerInfoParams, SignerInfoPluginOptions } from '../builders/types';

/**
 * Plugin for building signer info
 */
export class SignerInfoPlugin extends BasePlugin<
  SignerInfoParams,
  BaseTxBuilderContext<CosmosBaseSigner<unknown>>
> {
  constructor(options: SignerInfoPluginOptions = {}) {
    const dependencies = ['sign_args', 'sign_mode'];
    super(dependencies, options);
  }

  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value);

    if (key === 'sign_args' || key === 'sign_mode') {
      const signer = this.getContext().signer as CosmosBaseSigner<unknown>;
      if (!signer) {
        throw new Error('Signer not found in context');
      }
    }
  }

  protected afterRetrieveParams(params: Record<string, unknown>): SignerInfoParams {
    const signArgs = params.signArgs as CosmosSignArgs;
    const signMode = params.signMode as SignMode;
    const signer = this.getContext().signer as CosmosBaseSigner<unknown>;

    return {
      publicKey: signer.encodedPublicKey,
      sequence: signArgs.options?.sequence ?? 0n, // Will be resolved in async operation
      signMode,
    };
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<unknown>>,
    params: SignerInfoParams
  ): Promise<void> {
    const signer = ctx.signer as CosmosBaseSigner<unknown>;

    // Resolve sequence if not provided
    let sequence = params.sequence;
    if (sequence === 0n) {
      const signArgs = ctx.getStagingData<CosmosSignArgs>('sign_args');
      sequence = signArgs.options?.sequence ??
        (await signer.queryClient.getSequence(await signer.getAddress()));
    }

    const signerInfo = SignerInfo.fromPartial({
      publicKey: params.publicKey,
      sequence,
      modeInfo: { single: { mode: params.signMode } },
    });

    ctx.setStagingData(STAGING_KEYS.SIGNER_INFO, {
      signerInfo,
      encode: () => SignerInfo.encode(signerInfo).finish(),
    });
  }
}