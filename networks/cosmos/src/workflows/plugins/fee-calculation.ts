import { Fee, TxBody, SignerInfo } from '@interchainjs/cosmos-types';
import { BaseWorkflowBuilderPlugin, StdFee } from '@interchainjs/types';
import { DocOptions } from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { MESSAGE_ENCODING_STAGING_KEYS } from './message-encoding';
import { SIGNER_INFO_STAGING_KEYS } from './signer-info';
import { Price } from '@interchainjs/types';
import Decimal from 'decimal.js';

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

      // Default gas price ( Price | 'average' | 'high' | 'low' | undefined)
      let denom = "uatom";
      let gasPriceValue = new Decimal('0.025');

      // ex) 123.123uatom -> gasPriceValue: "123.123", denom: "uatom")
      if (typeof params.options?.gasPrice === 'string') {
        const numberMatch = params.options.gasPrice.match(/^(\d+(?:\.\d+)?)(.*)$/);
        if (numberMatch && numberMatch.length === 3) {
          gasPriceValue = new Decimal(numberMatch[1]);
          denom = numberMatch[2];
        }
      }

      const amount = gasPriceValue.mul(gasLimit.toString()).ceil();

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