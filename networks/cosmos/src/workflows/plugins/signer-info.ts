import { SignerInfo, CosmosCryptoSecp256k1PubKey as PubKey, SignMode } from '@interchainjs/cosmos-types';
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
    if (!account) {
      throw new Error(`No account found for address: ${signerAddress}`);
    }

    // Get public key bytes - handle both AccountData (with pubkey property) and IAccount (with getPublicKey method)
    let pubkeyBytes: Uint8Array;
    if ('pubkey' in account && account.pubkey) {
      if (account.pubkey instanceof Uint8Array) {
        pubkeyBytes = account.pubkey;
      } else {
        // Convert object with numeric keys to Uint8Array
        const values = Object.values(account.pubkey) as number[];
        pubkeyBytes = new Uint8Array(values);
      }
    } else if ('getPublicKey' in account && typeof account.getPublicKey === 'function') {
      // IAccount from IWallet - use getPublicKey method
      try {
        const publicKeyObj = account.getPublicKey();
        if (!publicKeyObj || !publicKeyObj.value) {
          throw new Error(`No public key available for account: ${signerAddress}`);
        }
        // Convert ICryptoBytes to Uint8Array
        if (publicKeyObj.value instanceof Uint8Array) {
          pubkeyBytes = publicKeyObj.value;
        } else if (typeof publicKeyObj.value === 'object' && 'toBytes' in publicKeyObj.value) {
          pubkeyBytes = (publicKeyObj.value as any).toBytes();
        } else {
          // Try to convert from hex if it's a string
          const hexStr = publicKeyObj.toHex();
          pubkeyBytes = new Uint8Array(Buffer.from(hexStr, 'hex'));
        }
      } catch (error) {
        throw new Error(`Failed to get public key for account ${signerAddress}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      throw new Error(`No public key available for account: ${signerAddress}`);
    }

    // Check if there's a custom encodePublicKey function in options
    let publicKey: EncodedMessage;
    if (options?.encodePublicKey && typeof options.encodePublicKey === 'function') {
      // Use custom public key encoding (e.g., for Injective)
      publicKey = options.encodePublicKey(pubkeyBytes);
    } else {
      // Default Cosmos public key encoding
      const pubKey = PubKey.fromPartial({ key: pubkeyBytes });
      const pubKeyBytes = PubKey.encode(pubKey).finish();
      publicKey = {
        typeUrl: '/cosmos.crypto.secp256k1.PubKey',
        value: pubKeyBytes
      };
    }

    const signerInfo = SignerInfo.fromPartial({
      publicKey,
      sequence,
      modeInfo: { single: { mode: signMode } },
    });

    // Store in staging
    ctx.setStagingData(SIGNER_INFO_STAGING_KEYS.SIGNER_INFO, signerInfo);
  }
}