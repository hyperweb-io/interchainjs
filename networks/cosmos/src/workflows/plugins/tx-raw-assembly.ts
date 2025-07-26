import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosTx } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { AUTH_INFO_STAGING_KEYS } from './auth-info';
import { DIRECT_SIGNATURE_STAGING_KEYS } from './direct-signature';
import { AMINO_SIGNATURE_STAGING_KEYS } from './amino-signature';

/**
 * Input parameters for TxRawAssemblyPlugin
 */
export interface TxRawAssemblyParams {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  signatures: Uint8Array[];
}

/**
 * Plugin to assemble final TxRaw from components
 */
export class TxRawAssemblyPlugin extends BaseWorkflowBuilderPlugin<
  TxRawAssemblyParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES,
      AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES,
      // Note: SIGNATURE can come from either Direct or Amino signature plugins
      DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: TxRawAssemblyParams
  ): Promise<void> {
    // Try to get signed document first (from DirectSignaturePlugin)
    const signedDoc = ctx.getStagingData<any>('SIGNED_DOC');

    // Use signed document's bytes if available, otherwise fall back to original
    const bodyBytes = signedDoc?.bodyBytes || ctx.getStagingData<Uint8Array>(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES);
    const authInfoBytes = signedDoc?.authInfoBytes || ctx.getStagingData<Uint8Array>(AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES);
    // Try to get signature from either Direct or Amino signature plugins
    let signature = ctx.getStagingData<{ value: Uint8Array }>(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE);
    if (!signature) {
      signature = ctx.getStagingData<{ value: Uint8Array }>(AMINO_SIGNATURE_STAGING_KEYS.SIGNATURE);
    }



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