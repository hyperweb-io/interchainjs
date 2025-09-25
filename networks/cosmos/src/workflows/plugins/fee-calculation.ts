import { Fee, TxBody, SignerInfo } from '@interchainjs/cosmos-types';
import { BaseWorkflowBuilderPlugin, StdFee } from '@interchainjs/types';
import { DocOptions } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { Price } from '@interchainjs/types';
import { calculateFee } from '../../utils/fee';

/**
 * Staging keys created by FeeCalculationPlugin
 */
export const FEE_CALCULATION_STAGING_KEYS = {
  FEE: 'fee',
  PROTOBUF_FEE: 'protobuf_fee'
} as const;

/**
 * Input parameters for FeeCalculationPlugin
 */
export interface FeeCalculationParams {
  fee?: StdFee;
  txBody: TxBody;
  signerInfo: SignerInfo;
  options?: DocOptions;
}

/**
 * Plugin to calculate or validate fee
 */
export class FeeCalculationPlugin extends BaseWorkflowBuilderPlugin<
  FeeCalculationParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      { dependency: INPUT_VALIDATION_STAGING_KEYS.FEE, optional: true },
      MESSAGE_ENCODING_STAGING_KEYS.TX_BODY,
      SIGNER_INFO_STAGING_KEYS.SIGNER_INFO,
      { dependency: INPUT_VALIDATION_STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: FeeCalculationParams
  ): Promise<void> {
    let finalFee = params.fee;

    // If no fee provided, simulate to estimate
    if (!finalFee) {
      const { gasInfo } = await ctx.getSigner().simulateByTxBody(
        params.txBody,
        [params.signerInfo]
      );

      if (!gasInfo) {
        throw new Error('Failed to estimate gas by simulate tx.');
      }

      // Calculate fee based on gas estimation
      const gasUsed = gasInfo.gasUsed;
      const multiplier = params.options?.multiplier ?? 1.5;
      const gasLimit = BigInt(Math.ceil(Number(gasUsed) * multiplier));

      // Resolve gas price to a concrete string value
      let gasPriceString = "0.025uatom"; // Default fallback

      if (typeof params.options?.gasPrice === 'string') {
        // Handle concrete gas price strings like "0.025uatom" or abstract values like "average"
        if (params.options.gasPrice.match(/^(\d+(?:\.\d+)?)(.*)$/)) {
          // It's a concrete gas price string, use it directly
          gasPriceString = params.options.gasPrice;
        } else {
          // It's an abstract value like "average", "high", "low" - keep default for now
          // TODO: In the future, this could be resolved from chain registry or network config
          gasPriceString = "0.025uatom";
        }
      }

      // Use the new calculateFee utility for consistent fee calculation
      finalFee = calculateFee(gasLimit, gasPriceString);
    }

    // Convert to protobuf Fee
    const protobufFee = Fee.fromPartial({
      amount: finalFee.amount,
      gasLimit: BigInt(finalFee.gas),
      payer: finalFee.payer,
      granter: finalFee.granter,
    });

    // Store in staging
    ctx.setStagingData(FEE_CALCULATION_STAGING_KEYS.FEE, finalFee);
    ctx.setStagingData(FEE_CALCULATION_STAGING_KEYS.PROTOBUF_FEE, protobufFee);
  }
}