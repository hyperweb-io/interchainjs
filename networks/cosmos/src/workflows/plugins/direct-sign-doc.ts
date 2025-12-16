import { SignDoc } from '@interchainjs/cosmos-types';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosDirectDoc } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { AUTH_INFO_STAGING_KEYS } from './auth-info';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by DirectSignDocPlugin
 */
export const DIRECT_SIGN_DOC_STAGING_KEYS = {
  SIGN_DOC: 'sign_doc',
  SIGN_DOC_BYTES: 'sign_doc_bytes'
} as const;

/**
 * Input parameters for DirectSignDocPlugin
 */
export interface DirectSignDocParams {
  bodyBytes: Uint8Array;
  authInfoBytes: Uint8Array;
  chainId: string;
  accountNumber: bigint;
}

/**
 * Plugin to build direct (protobuf) sign document
 */
export class DirectSignDocPlugin extends BaseWorkflowBuilderPlugin<
  DirectSignDocParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES,
      AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES,
      { dependency: INPUT_VALIDATION_STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: DirectSignDocParams
  ): Promise<void> {
    const bodyBytes = ctx.getStagingData<Uint8Array>(MESSAGE_ENCODING_STAGING_KEYS.TX_BODY_BYTES);
    const authInfoBytes = ctx.getStagingData<Uint8Array>(AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES);
    const options = ctx.getStagingData<any>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);



    // Get chain ID and account number
    const chainId = options?.chainId ?? await ctx.getSigner().getChainId();
    const address = options?.signerAddress;
    if (!address) {
      throw new Error('No signer address provided in options');
    }

    const accountNumber = options?.accountNumber ??
      await ctx.getSigner().getAccountNumber(address, options);



    // Create sign document
    const signDoc: CosmosDirectDoc = SignDoc.fromPartial({
      bodyBytes,
      authInfoBytes,
      chainId,
      accountNumber,
    });



    // Encode sign document to bytes
    const signDocBytes = SignDoc.encode(signDoc).finish();



    // Store in staging
    ctx.setStagingData(DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC, signDoc);
    ctx.setStagingData(DIRECT_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES, signDocBytes);
  }
}