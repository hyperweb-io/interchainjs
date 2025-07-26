import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import {
  TxRawAssemblyInput,
  STAGING_KEYS
} from '../types';
import { CosmosTx } from '../../signers/types';
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
    // Try to get signed document first (from DirectSignaturePlugin)
    const signedDoc = ctx.getStagingData<any>('SIGNED_DOC');

    // Use signed document's bytes if available, otherwise fall back to original
    const bodyBytes = signedDoc?.bodyBytes || ctx.getStagingData<Uint8Array>(STAGING_KEYS.TX_BODY_BYTES);
    const authInfoBytes = signedDoc?.authInfoBytes || ctx.getStagingData<Uint8Array>(STAGING_KEYS.AUTH_INFO_BYTES);
    const signature = ctx.getStagingData<{ value: Uint8Array }>(STAGING_KEYS.SIGNATURE);



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