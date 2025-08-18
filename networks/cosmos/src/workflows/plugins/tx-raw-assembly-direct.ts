import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosTx } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { AUTH_INFO_STAGING_KEYS } from './auth-info';
import { DIRECT_SIGNATURE_STAGING_KEYS } from './direct-signature';

/**
 * Input parameters for TxRawAssemblyDirectPlugin
 */
export interface TxRawAssemblyDirectParams {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  signatures: Uint8Array[];
}

/**
 * Plugin to assemble final TxRaw from components for direct (protobuf) signatures
 * Uses the signed SignDoc data that was saved as staging data after the direct-signature.ts plugin execution
 */
export class TxRawAssemblyDirectPlugin extends BaseWorkflowBuilderPlugin<
  TxRawAssemblyDirectParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE,
      MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES,
      AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: TxRawAssemblyDirectParams
  ): Promise<void> {
    // Try to get signed document first (from DirectSignaturePlugin)
    const signedDoc = ctx.getStagingData<any>(DIRECT_SIGNATURE_STAGING_KEYS.SIGNED_DOC);

    // Use signed document's bytes if available, otherwise fall back to original
    const bodyBytes = signedDoc?.bodyBytes || ctx.getStagingData<Uint8Array>(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES);
    const authInfoBytes = signedDoc?.authInfoBytes || ctx.getStagingData<Uint8Array>(AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES);

    // Get signature from Direct signature plugin
    const signature = ctx.getStagingData<{ value: Uint8Array }>(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE);
    if (!signature) {
      throw new Error('No direct signature found in staging data');
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
