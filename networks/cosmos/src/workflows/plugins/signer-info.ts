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
    const signerAddresses = await ctx.getSigner().getAddresses();
    const signerAddress = signerAddresses[0];
    if (!signerAddress) {
      throw new Error('No addresses available');
    }
    const sequence = options?.sequence ?? 
      await ctx.getSigner().getSequence(signerAddress);

    // Get sign mode from options or use default
    const signMode = options?.signMode ?? params.signMode;

    // Create signer info - use the same address we already have
    
    // For now, create a basic public key - in real implementation this would come from the signer
    const publicKey = { typeUrl: '/cosmos.crypto.secp256k1.PubKey', value: new Uint8Array(33) }; // Placeholder
    
    const signerInfo = SignerInfo.fromPartial({
      publicKey,
      sequence,
      modeInfo: { single: { mode: signMode } },
    });

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.SIGNER_INFO, signerInfo);
  }
}