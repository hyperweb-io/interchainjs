import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
  SignatureInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';
import { isAuth, isOfflineAminoSigner } from '../../signers/types';
import { StdSignDoc } from '@interchainjs/types';
import { BaseCryptoBytes } from '@interchainjs/utils';
import { AuthInfo, Fee, SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

/**
 * Plugin to create signature for amino (JSON) signing
 * Handles both Auth (signArbitrary) and OfflineAminoSigner (signAmino) cases
 */
export class AminoSignaturePlugin extends BaseWorkflowBuilderPlugin<
  SignatureInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.SIGN_DOC_BYTES,
      STAGING_KEYS.SIGN_DOC
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: SignatureInput
  ): Promise<void> {
    const signer = ctx.getSigner();
    const authOrSigner = signer.getAuthOrSigner();
    
    if (isAuth(authOrSigner)) {
      // Auth path: sign bytes directly
      const signDocBytes = ctx.getStagingData<Uint8Array>(STAGING_KEYS.SIGN_DOC_BYTES);
      const signature = await signer.signArbitrary(signDocBytes);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else if (isOfflineAminoSigner(authOrSigner)) {
      // OfflineAminoSigner path: use signAmino with StdSignDoc
      const signDoc = ctx.getStagingData<StdSignDoc>(STAGING_KEYS.SIGN_DOC);
      const account = await signer.getAccount();
      
      const response = await authOrSigner.signAmino(account.address, signDoc);
      
      // Update fee if it was modified by the offline signer
      if (response.signed.fee) {
        // Convert StdFee to Fee protobuf
        const fee: Fee = {
          amount: response.signed.fee.amount.map(coin => ({
            denom: coin.denom,
            amount: coin.amount
          })),
          gasLimit: BigInt(response.signed.fee.gas),
          payer: '',
          granter: ''
        };
        ctx.setStagingData(STAGING_KEYS.FEE, fee);
        
        // Recalculate auth info with the new fee
        const signerInfo = ctx.getStagingData<SignerInfo>(STAGING_KEYS.SIGNER_INFO);
        const authInfo: AuthInfo = {
          signerInfos: [signerInfo],
          fee,
          tip: undefined
        };
        
        // Update auth info and its bytes
        ctx.setStagingData(STAGING_KEYS.AUTH_INFO, authInfo);
        const authInfoBytes = AuthInfo.encode(authInfo).finish();
        ctx.setStagingData(STAGING_KEYS.AUTH_INFO_BYTES, authInfoBytes);
      }
      
      // Store the signature
      const signature = BaseCryptoBytes.from(response.signature);
      ctx.setStagingData(STAGING_KEYS.SIGNATURE, signature);
    } else {
      throw new Error('Signer does not support amino signing');
    }
  }
}