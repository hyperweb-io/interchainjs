import { AuthInfo, SignerInfo, Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { FEE_CALCULATION_STAGING_KEYS } from './fee-calculation';

/**
 * Staging keys created by AuthInfoPlugin
 */
export const AUTH_INFO_STAGING_KEYS = {
  AUTH_INFO: 'auth_info',
  AUTH_INFO_BYTES: 'auth_info_bytes'
} as const;

/**
 * Input parameters for AuthInfoPlugin
 */
export interface AuthInfoParams {
  signerInfos: SignerInfo[];
  fee: Fee;
}

/**
 * Plugin to build auth info
 */
export class AuthInfoPlugin extends BaseWorkflowBuilderPlugin<
  AuthInfoParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      SIGNER_INFO_STAGING_KEYS.SIGNER_INFO,
      FEE_CALCULATION_STAGING_KEYS.PROTOBUF_FEE
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: AuthInfoParams
  ): Promise<void> {
    const signerInfo = ctx.getStagingData(SIGNER_INFO_STAGING_KEYS.SIGNER_INFO);
    const protobufFee = ctx.getStagingData(FEE_CALCULATION_STAGING_KEYS.PROTOBUF_FEE);

    // Create auth info
    const authInfo = AuthInfo.fromPartial({
      signerInfos: [signerInfo],
      fee: protobufFee,
    });

    // Encode auth info to bytes
    const authInfoBytes = AuthInfo.encode(authInfo).finish();

    // Store in staging
    ctx.setStagingData(AUTH_INFO_STAGING_KEYS.AUTH_INFO, authInfo);
    ctx.setStagingData(AUTH_INFO_STAGING_KEYS.AUTH_INFO_BYTES, authInfoBytes);
  }
}