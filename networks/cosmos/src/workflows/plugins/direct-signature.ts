import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { SignDoc } from '@interchainjs/cosmos-types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { fromBase64 } from '@interchainjs/encoding';
import { CosmosDirectDoc, CosmosAminoDoc, CosmosSignerConfig } from '../../signers/types';
import { DIRECT_SIGN_DOC_STAGING_KEYS } from './direct-sign-doc';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { resolveHashFunction, resolveSignatureFormat } from '@interchainjs/auth';

/**
 * Staging keys created by DirectSignaturePlugin
 */
export const DIRECT_SIGNATURE_STAGING_KEYS = {
  SIGNATURE: 'signature',
  SIGNED_DOC: 'signed_doc'
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
    const options = ctx.getStagingData<CosmosSignerConfig>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);

    // Handle offline signers which have signDirect method
    if (signer.isIWallet()) {
      let signDocBytes = ctx.getStagingData<Uint8Array>(DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES);

      if (options.message.hash) {
        const hashFn = resolveHashFunction(options.message.hash, 'sha256');
        signDocBytes = hashFn(signDocBytes);
      }

      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE, signature);
    } else if (signer.isOfflineDirectSigner()) {
      const signerAddress = options?.signerAddress;
      if (!signerAddress) {
        throw new Error('No signer address provided in options');
      }

      const signatureResult = await signer.signDirect(signerAddress, signDoc);

      // Extract signature bytes from the signature object
      let signatureBytes: Uint8Array;
      if (typeof signatureResult.signature === 'object' && 'signature' in signatureResult.signature) {
        // New signature object structure with pub_key and signature fields
        signatureBytes = fromBase64(signatureResult.signature.signature);
      } else if (typeof signatureResult.signature === 'string') {
        // Legacy base64 string format
        signatureBytes = fromBase64(signatureResult.signature);
      } else {
        // Legacy Uint8Array format
        signatureBytes = signatureResult.signature as Uint8Array;
      }

      // Determine signature format - use configured format or default to compact
      const formatFn = resolveSignatureFormat(options?.signature?.format, 'compact');

      let processedSignature: Uint8Array;
      if (formatFn) {
        processedSignature = formatFn(signatureBytes);
      } else {
        processedSignature = signatureBytes;
      }

      // Store both the signature and the signed document
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE, new BaseCryptoBytes(processedSignature));
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNED_DOC, signatureResult.signed);
    } else {
      throw new Error("Unsupported signer type for direct signing");
    }
  }
}