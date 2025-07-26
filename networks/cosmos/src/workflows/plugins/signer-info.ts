import { SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { EncodedMessage } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';

/**
 * Staging keys created by SignerInfoPlugin
 */
export const SIGNER_INFO_STAGING_KEYS = {
  SIGNER_INFO: 'signer_info'
} as const;

/**
 * Input parameters for SignerInfoPlugin
 */
export interface SignerInfoParams {
  publicKey: EncodedMessage;
  sequence: bigint;
  signMode: SignMode;
}

/**
 * Plugin to build signer info
 */
export class SignerInfoPlugin extends BaseWorkflowBuilderPlugin<
  SignerInfoParams,
  CosmosWorkflowBuilderContext
> {
  private defaultSignMode: SignMode;

  constructor(signMode: SignMode = SignMode.SIGN_MODE_DIRECT) {
    super([]);
    this.defaultSignMode = signMode;
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignerInfoParams
  ): Promise<void> {
    const options = ctx.getStagingData<any>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);
    const signerAddress = options?.signerAddress;
    if (!signerAddress) {
      throw new Error('No signer address provided in options');
    }

    const sequence = options?.sequence ??
      await ctx.getSigner().getSequence(signerAddress);

    // Get sign mode from options or use default
    const signMode = options?.signMode ?? params.signMode ?? this.defaultSignMode;

    // Get the actual public key from the signer
    const accounts = await ctx.getSigner().getAccounts();
    const account = accounts.find(acc => acc.address === signerAddress);
    if (!account || !account.pubkey) {
      throw new Error(`No public key available for account: ${signerAddress}`);
    }



    // Encode the public key using the Cosmos PubKey format
    const pubKey = PubKey.fromPartial({ key: account.pubkey });
    const pubKeyBytes = PubKey.encode(pubKey).finish();

    const publicKey = {
      typeUrl: '/cosmos.crypto.secp256k1.PubKey',
      value: pubKeyBytes
    };

    const signerInfo = SignerInfo.fromPartial({
      publicKey,
      sequence,
      modeInfo: { single: { mode: signMode } },
    });

    // Store in staging
    ctx.setStagingData(SIGNER_INFO_STAGING_KEYS.SIGNER_INFO, signerInfo);
  }
}