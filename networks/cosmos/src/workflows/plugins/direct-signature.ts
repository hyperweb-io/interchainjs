import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { CosmosDirectDoc, CosmosAminoDoc } from '../../signers/types';
import { DIRECT_SIGN_DOC_STAGING_KEYS } from './direct-sign-doc';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by DirectSignaturePlugin
 */
export const DIRECT_SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature'
} as const;

/**
 * Input parameters for DirectSignaturePlugin
 */
export interface DirectSignatureParams {
  signDoc: CosmosDirectDoc | CosmosAminoDoc;
}

/**
 * Plugin to create signature for direct (protobuf) signing
 * Handles both Auth (signArbitrary) and OfflineDirectSigner (signDirect) cases
 */
export class DirectSignaturePlugin extends BaseWorkflowBuilderPlugin<
  DirectSignatureParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES,
      DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: DirectSignatureParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const signDoc = ctx.getStagingData<SignDoc>(DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC);
    const options = ctx.getStagingData<any>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);

    // Handle offline signers which have signDirect method
    if (signer.isOfflineDirectSigner()) {
      const signerAddress = options?.signerAddress;
      if (!signerAddress) {
        throw new Error('No signer address provided in options');
      }

      const signatureResult = await signer.signDirect(signerAddress, signDoc);

      // Check if signature includes recovery parameter and remove it if needed
      let signature = signatureResult.signature;
      if (signature.length === 65) {
        // Remove recovery parameter (last byte) to get standard 64-byte signature
        signature = signature.slice(0, 64);
      }

      // Store both the signature and the signed document
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE, new BaseCryptoBytes(signature));
      ctx.setStagingData('SIGNED_DOC', signatureResult.signed);
    } else {
      // Fallback to signArbitrary for other interfaces
      const signDocBytes = ctx.getStagingData<Uint8Array>(DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES);

      console.log('[TX-DEBUG] DirectSignaturePlugin - Using signArbitrary fallback:', {
        signDocBytesLength: signDocBytes?.length || 0
      });

      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    }
  }
}