import { Fee, TxBody, SignerInfo } from '@interchainjs/cosmos-types';
import { BaseWorkflowBuilderPlugin, StdFee } from '@interchainjs/types';
import { DocOptions } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { Price } from '@interchainjs/types';

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

      // Default gas price (this should be configurable)
      let denom = "uatom";
      let gasPriceValue: string;

      if (params.options?.gasPrice &&
        typeof params.options.gasPrice === 'object' &&
        'amount' in params.options.gasPrice &&
        'denom' in params.options.gasPrice &&
        typeof (params.options.gasPrice as any).denom === 'string' &&
        (params.options.gasPrice as any).amount) {
        // type Price
        const price = params.options.gasPrice as Price;
        denom = price.denom;
        gasPriceValue = price.amount.toString();
      } else if (typeof params.options?.gasPrice === 'string' &&
        !isNaN(Number(params.options.gasPrice))) {
        // type string (number only)
        gasPriceValue = params.options.gasPrice;
      } else {
        // 'average' | 'high' | 'low' | undefined
        gasPriceValue = '0.025';
      }

      const amount = BigInt(Math.ceil(Number(gasLimit) * Number(gasPriceValue)));

      finalFee = {
        amount: [{ denom, amount: amount.toString() }],
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
    ctx.setStagingData(FEE_CALCULATION_STAGING_KEYS.FEE, finalFee);
    ctx.setStagingData(FEE_CALCULATION_STAGING_KEYS.PROTOBUF_FEE, protobufFee);
  }
}