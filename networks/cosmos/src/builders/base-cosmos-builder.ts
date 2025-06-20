import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { BaseBuilder, IPlugin, BaseTxBuilderContext } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosSignArgs } from '../types/signer';
import { CosmosTxBuildResult, STAGING_KEYS } from './types';

/**
 * Base cosmos transaction builder that uses plugins to build signed transactions
 */
export abstract class BaseCosmosTxBuilder<TSignDoc> extends BaseBuilder<
  CosmosBaseSigner<TSignDoc>,
  CosmosTxBuildResult<TSignDoc>
> {
  constructor(
    signer: CosmosBaseSigner<TSignDoc>,
    signMode: SignMode,
    plugins: IPlugin<BaseTxBuilderContext<CosmosBaseSigner<TSignDoc>>>[],
    options: { resultStagingKey?: string } = {}
  ) {
    super(
      signer,
      plugins,
      { resultStagingKey: options.resultStagingKey ?? STAGING_KEYS.FINAL_RESULT }
    );

    // Store sign mode for plugins to use
    this.context.setStagingData('sign_mode', signMode);
  }

  /**
   * Initialize the building process with sign arguments
   */
  async buildSignedTxDoc(args: CosmosSignArgs): Promise<CosmosTxBuildResult<TSignDoc>> {
    // Store sign arguments for plugins to use
    this.context.setStagingData('sign_args', args);

    // Execute the build process via plugins
    return this.build();
  }
}