import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
  SignatureInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';
import { isOfflineDirectSigner } from '../../signers/types';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseCryptoBytes } from '@interchainjs/utils';

/**
 * Plugin to create signature for direct (protobuf) signing
 * Handles both Auth (signArbitrary) and OfflineDirectSigner (signDirect) cases
 */
export class DirectSignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.SIGN_DOC_BYTES,
      STAGING_KEYS.SIGN_DOC
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignatureInput
  ): Promise<void> {
    const signer = ctx.getSigner();
    
    // Always use signArbitrary for the cosmos signer interface
    const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);
    const signature = await signer.signArbitrary(signDocBytes);
    ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
  }
}