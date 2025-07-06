import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
  SignatureInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';
import { isAuth, isOfflineDirectSigner } from '../../signers/types';
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
    const authOrSigner = signer.getAuthOrSigner();
    
    if (isAuth(authOrSigner)) {
      // Auth path: sign bytes directly
      const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);
      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else if (isOfflineDirectSigner(authOrSigner)) {
      // OfflineDirectSigner path: use signDirect with SignDoc
      const signDoc = ctx.getStagingData<SignDoc>(STAGING_KEYS.SIGN_DOC);
      const account = await signer.getAccount();
      
      const response = await authOrSigner.signDirect(account.address, signDoc);
      const signature = BaseCryptoBytes.from(response.signature);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else {
      throw new Error('Signer does not support direct signing');
    }
  }
}