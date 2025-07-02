import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  SignatureInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to create signature from sign document
 */
export class SignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.SIGN_DOC_BYTES
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignatureInput
  ): Promise<void> {
    const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);

    // Sign the document bytes
    const signature = await ctx.getSigner().signArbitrary(signDocBytes);

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
  }
}