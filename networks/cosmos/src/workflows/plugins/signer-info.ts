import { SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import {
  SignerInfoInput,
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to build signer info
 */
export class SignerInfoPlugin extends BaseWorkflowBuilderPlugin<
  SignerInfoInput,
  CosmosWorkflowBuilderContext
> {
  private defaultSignMode: SignMode;

  constructor(signMode: SignMode = SignMode.SIGN_MODE_DIRECT) {
    super([]);
    this.defaultSignMode = signMode;
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignerInfoInput
  ): Promise<void> {
    const options = ctx.getStagingData<any>(STAGING_KEYS.OPTIONS);
    const signerAddresses = await ctx.getSigner().getAddresses();
    const signerAddress = signerAddresses[0];
    if (!signerAddress) {
      throw new Error('No addresses available');
    }



    const sequence = options?.sequence ??
      await ctx.getSigner().getSequence(signerAddress);



    // Get sign mode from options or use default
    const signMode = options?.signMode ?? params.signMode ?? this.defaultSignMode;



    // Get the actual public key from the signer
    const accounts = await ctx.getSigner().getAccounts();
    const account = accounts[0];
    if (!account || !account.pubkey) {
      throw new Error('No public key available for account');
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
    ctx.setStagingData(STAGING_KEYS.SIGNER_INFO, signerInfo);
  }
}