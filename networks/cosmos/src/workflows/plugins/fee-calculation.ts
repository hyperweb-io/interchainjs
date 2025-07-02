import { Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import { 
   
  FeeCalculationInput, 
  STAGING_KEYS
} from '../types';
import { CosmosWorkflowBuilderContext } from '../context';

/**
 * Plugin to calculate or validate fee
 */
export class FeeCalculationPlugin extends BaseWorkflowBuilderPlugin<
  FeeCalculationInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      { dependency: STAGING_KEYS.FEE, optional: true },
      STAGING_KEYS.TX_BODY,
      STAGING_KEYS.SIGNER_INFO,
      { dependency: STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: FeeCalculationInput
  ): Promise<void> {
    let finalFee = params.fee;

    // If no fee provided, simulate to estimate
    if (!finalFee) {
      const { gasInfo } = await ctx.getSigner().simulateByTxBody(
        params.txBody, 
        [params.signerInfos[0]]
      );
      
      if (!gasInfo) {
        throw new Error('Failed to estimate gas by simulate tx.');
      }

      // Calculate fee based on gas estimation
      const gasUsed = gasInfo.gasUsed;
      const multiplier = params.options?.multiplier ?? 1.5;
      const gasLimit = BigInt(Math.ceil(Number(gasUsed) * multiplier));
      
      // Default gas price (this should be configurable)
      const gasPrice = params.options?.gasPrice ?? '0.025';
      const amount = BigInt(Math.ceil(Number(gasLimit) * Number(gasPrice)));

      finalFee = {
        amount: [{ denom: 'uatom', amount: amount.toString() }],
        gas: gasLimit.toString(),
      };
    }

    // Convert to protobuf Fee
    const protobufFee = Fee.fromPartial({
      amount: finalFee.amount,
      gasLimit: BigInt(finalFee.gas),
      payer: finalFee.payer,
      granter: finalFee.granter,
    });

    // Store in staging
    ctx.setStagingData(STAGING_KEYS.FEE, finalFee);
    ctx.setStagingData('protobuf_fee', protobufFee);
  }
}