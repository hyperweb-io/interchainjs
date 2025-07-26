import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import {
  SignatureInput,
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';
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
    const signDoc = ctx.getStagingData<SignDoc>(STAGING_KEYS.SIGN_DOC);



    // Handle offline signers which have signDirect method
    if (signer.isOfflineDirectSigner()) {
      const accounts = await signer.getAccounts();
      const account = accounts[0]; // Use first account

      const signatureResult = await signer.signDirect(account.address, signDoc);

      // Check if signature includes recovery parameter and remove it if needed
      let signature = signatureResult.signature;
      if (signature.length === 65) {
        // Remove recovery parameter (last byte) to get standard 64-byte signature
        signature = signature.slice(0, 64);
      }

      // Store both the signature and the signed document
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, new BaseCryptoBytes(signature));
      ctx.setStagingData('SIGNED_DOC', signatureResult.signed);
    } else {
      // Fallback to signArbitrary for other interfaces
      const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);

      console.log('[TX-DEBUG] DirectSignaturePlugin - Using signArbitrary fallback:', {
        signDocBytesLength: signDocBytes?.length || 0
      });

      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    }
  }
}