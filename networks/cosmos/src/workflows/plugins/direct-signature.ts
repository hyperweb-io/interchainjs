import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { SignDoc } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { Secp256k1 } from '@interchainjs/crypto';
import { CosmosDirectDoc, CosmosAminoDoc, CosmosSignerConfig } from '../../signers/types';
import { DIRECT_SIGN_DOC_STAGING_KEYS } from './direct-sign-doc';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { resolveHashFunction } from '@interchainjs/auth';

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

      // Ensure signature is in compact form (64 bytes) by removing recovery parameter if present
      const compactSignature = Secp256k1.trimRecoveryByte(signatureResult.signature);

      // Store both the signature and the signed document
      ctx.setStagingData(DIRECT_SIGNATURE_STAGING_KEYS.SIGNATURE, new BaseCryptoBytes(compactSignature));
      ctx.setStagingData('SIGNED_DOC', signatureResult.signed);
    } else {
      throw new Error("Unsupported signer type for direct signing");
    }
  }
}