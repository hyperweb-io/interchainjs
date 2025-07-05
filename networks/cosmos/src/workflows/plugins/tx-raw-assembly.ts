import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  TxRawAssemblyInput, 
  STAGING_KEYS,
  CosmosTx
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to assemble final TxRaw from components
 */
export class TxRawAssemblyPlugin extends BaseWorkflowBuilderPlugin<
  TxRawAssemblyInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.TX_BODY_BYTES,
      STAGING_KEYS.AUTH_INFO_BYTES,
      STAGING_KEYS.SIGNATURE
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: TxRawAssemblyInput
  ): Promise<void> {
    const bodyBytes = ctx.getStagingData(STAGING_KEYS.TX_BODY_BYTES) as Uint8Array;
    const authInfoBytes = ctx.getStagingData(STAGING_KEYS.AUTH_INFO_BYTES) as Uint8Array;
    const signature = ctx.getStagingData(STAGING_KEYS.SIGNATURE) as { value: Uint8Array };

    // Create final TxRaw
    const txRaw: CosmosTx = TxRaw.fromPartial({
      bodyBytes,
      authInfoBytes,
      signatures: [signature.value],
    });

    // Store as final result
    ctx.setFinalResult(txRaw);
  }
}