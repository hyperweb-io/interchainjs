import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { Secp256k1 } from '@interchainjs/crypto';
import { CosmosDirectDoc, CosmosAminoDoc } from '../../signers/types';
import { AMINO_SIGN_DOC_STAGING_KEYS } from './amino-sign-doc';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by AminoSignaturePlugin
 */
export const AMINO_SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature'
} as const;

/**
 * Input parameters for AminoSignaturePlugin
 */
export interface AminoSignatureParams {
  signDoc: CosmosDirectDoc | CosmosAminoDoc;
}

/**
 * Plugin to create signature for amino (JSON) signing
 * Handles both Auth (signArbitrary) and OfflineAminoSigner (signAmino) cases
 */
export class AminoSignaturePlugin extends BaseWorkflowBuilderPlugin<
  AminoSignatureParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES,
      AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: AminoSignatureParams
  ): Promise<void> {
    const signer = ctx.getSigner();
    const signDoc = ctx.getStagingData<StdSignDoc>(AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC);
    const options = ctx.getStagingData<any>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);

    // Handle offline signers which have signAmino method
    if (signer.isOfflineAminoSigner()) {
      const signerAddress = options?.signerAddress;
      if (!signerAddress) {
        throw new Error('No signer address provided in options');
      }

      const signatureResult = await signer.signAmino(signerAddress, signDoc);

      // Ensure signature is in compact form (64 bytes) by removing recovery parameter if present
      const compactSignature = Secp256k1.trimRecoveryByte(signatureResult.signature);

      ctx.setStagingData(AMINO_SIGNATURE_STAGING_KEYS.SIGNATURE, new BaseCryptoBytes(compactSignature));
    } else {
      // Fallback to signArbitrary for other interfaces
      const signDocBytes = ctx.getStagingData<Uint8Array>(AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES);
      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(AMINO_SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    }
  }
}