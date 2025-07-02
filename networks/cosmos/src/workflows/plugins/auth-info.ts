import { AuthInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  AuthInfoInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to build auth info
 */
export class AuthInfoPlugin extends BaseWorkflowBuilderPlugin<
  AuthInfoInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.SIGNER_INFO,
      'protobuf_fee'
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: AuthInfoInput
  ): Promise<void> {
    const signerInfo = ctx.getStagingData(STAGING_KEYS.SIGNER_INFO);
    const protobufFee = ctx.getStagingData('protobuf_fee');

    // Create auth info
    const authInfo = AuthInfo.fromPartial({
      signerInfos: [signerInfo],
      fee: protobufFee,
    });

    // Encode auth info to bytes
    const authInfoBytes = AuthInfo.encode(authInfo).finish();

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.AUTH_INFO, authInfo);
    ctx.setStagingData(STAGING_KEYS.AUTH_INFO_BYTES, authInfoBytes);
  }
}