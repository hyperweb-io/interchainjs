import { SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  SignerInfoInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to build signer info
 */
export class SignerInfoPlugin extends BaseWorkflowBuilderPlugin<
  SignerInfoInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignerInfoInput
  ): Promise<void> {
    // Get sequence from options or query
    const options = ctx.getStagingData<any>(STAGING_KEYS.OPTIONS);
    const sequence = options?.sequence ?? 
      await ctx.getSigner().getSequence(await ctx.getSigner().getAddress());

    // Get sign mode from options or use default
    const signMode = options?.signMode ?? params.signMode;

    // Create signer info
    const signerInfo = SignerInfo.fromPartial({
      publicKey: ctx.getSigner().encodedPublicKey,
      sequence,
      modeInfo: { single: { mode: signMode } },
    });

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.SIGNER_INFO, signerInfo);
  }
}