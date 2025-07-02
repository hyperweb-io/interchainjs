import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  DirectSignDocInput, 
  STAGING_KEYS,
  CosmosDirectDoc
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to build direct (protobuf) sign document
 */
export class DirectSignDocPlugin extends BaseWorkflowBuilderPlugin<
  DirectSignDocInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.TX_BODY_BYTES,
      STAGING_KEYS.AUTH_INFO_BYTES,
      { dependency: STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: DirectSignDocInput
  ): Promise<void> {
    const bodyBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.TX_BODY_BYTES);
    const authInfoBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.AUTH_INFO_BYTES);
    const options = ctx.getStagingData<any>(STAGING_KEYS.OPTIONS);

    // Get chain ID and account number
    const chainId = options?.chainId ?? await ctx.getSigner().getChainId();
    const accountNumber = options?.accountNumber ?? 
      await ctx.getSigner().getAccountNumber(await ctx.getSigner().getAddress());

    // Create sign document
    const signDoc: CosmosDirectDoc = SignDoc.fromPartial({
      bodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    });

    // Encode sign document to bytes
    const signDocBytes = SignDoc.encode(signDoc).finish();

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.SIGN_DOC, signDoc);
    ctx.setStagingData(STAGING_KEYS.SIGN_DOC_BYTES, signDocBytes);
  }
}