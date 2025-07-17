import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
  SignatureInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';
import { isOfflineAminoSigner } from '../../signers/types';
import { StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { AuthInfo, Fee, SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

/**
 * Plugin to create signature for amino (JSON) signing
 * Handles both Auth (signArbitrary) and OfflineAminoSigner (signAmino) cases
 */
export class AminoSignaturePlugin extends BaseWorkflowBuilderPlugin<
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