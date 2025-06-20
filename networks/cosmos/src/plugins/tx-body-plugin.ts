import { TxBody } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BasePlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosSignArgs } from '../types/signer';
import { STAGING_KEYS, TxBodyParams, TxBodyPluginOptions } from '../builders/types';

/**
 * Plugin for building transaction body
 */
export class TxBodyPlugin extends BasePlugin<
  TxBodyParams,
  BaseTxBuilderContext<CosmosBaseSigner<unknown>>
> {
  constructor(options: TxBodyPluginOptions = {}) {
    const dependencies = ['sign_args'];
    super(dependencies, options);
  }

  protected onValidate(key: string, value: unknown): void {
    super.onValidate(key, value); // Check exists first

    if (key === 'sign_args') {
      const signArgs = value as CosmosSignArgs;
      if (signArgs.options?.timeoutHeight?.type === 'relative') {
        throw new Error(
          "timeoutHeight type in function `constructTxBody` shouldn't be `relative`. Please update it to `absolute` value before calling this function."
        );
      }
    }
  }

  protected onParam(key: string, value: unknown): unknown {
    if (key === 'sign_args') {
      const signArgs = value as CosmosSignArgs;
      const { messages, memo, options } = signArgs;

      return {
        messages,
        memo,
        timeoutHeight: options?.timeoutHeight?.value,
        extensionOptions: options?.extensionOptions,
        nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
      };
    }
    return value;
  }

  protected afterRetrieveParams(params: Record<string, unknown>): TxBodyParams {
    return params.signArgs as TxBodyParams;
  }

  protected async onBuild(
    ctx: BaseTxBuilderContext<CosmosBaseSigner<unknown>>,
    params: TxBodyParams
  ): Promise<void> {
    const encoded = params.messages.map(({ typeUrl, value }) => {
      return {
        typeUrl,
        value: (ctx.signer as CosmosBaseSigner<unknown>)!.getEncoder(typeUrl).encode(value),
      };
    });

    const txBody = TxBody.fromPartial({
      messages: encoded,
      memo: params.memo,
      timeoutHeight: params.timeoutHeight,
      extensionOptions: params.extensionOptions,
      nonCriticalExtensionOptions: params.nonCriticalExtensionOptions,
    });

    ctx.setStagingData(STAGING_KEYS.TX_BODY, {
      txBody,
      encode: () => TxBody.encode(txBody).finish(),
    });
  }
}