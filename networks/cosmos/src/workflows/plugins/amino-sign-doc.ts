import { BaseWorkflowBuilderPlugin, StdFee } from '@interchainjs/types';
import {
  CosmosAminoDoc,
  CosmosMessage,
  AminoMessage
} from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { fromUtf8 } from '@interchainjs/utils';
import { INPUT_VALIDATION_STAGING_KEYS } from './input-validation';
import { FEE_CALCULATION_STAGING_KEYS } from './fee-calculation';

/**
 * Staging keys created by AminoSignDocPlugin
 */
export const AMINO_SIGN_DOC_STAGING_KEYS = {
  SIGN_DOC: 'sign_doc',
  SIGN_DOC_BYTES: 'sign_doc_bytes'
} as const;

/**
 * Input parameters for AminoSignDocPlugin
 */
export interface AminoSignDocParams {
  messages: readonly CosmosMessage[];
  fee: StdFee;
  memo: string;
  chainId: string;
  accountNumber: string;
  sequence: string;
}

/**
 * Plugin to build amino (JSON) sign document
 */
export class AminoSignDocPlugin extends BaseWorkflowBuilderPlugin<
  AminoSignDocParams,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      INPUT_VALIDATION_STAGING_KEYS.MESSAGES,
      FEE_CALCULATION_STAGING_KEYS.FEE,
      { dependency: INPUT_VALIDATION_STAGING_KEYS.MEMO, optional: true },
      { dependency: INPUT_VALIDATION_STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: AminoSignDocParams
  ): Promise<void> {
    const messages = ctx.getStagingData<readonly CosmosMessage[]>(INPUT_VALIDATION_STAGING_KEYS.MESSAGES);
    const fee = ctx.getStagingData<any>(FEE_CALCULATION_STAGING_KEYS.FEE);
    const memo = ctx.getStagingData<string>(INPUT_VALIDATION_STAGING_KEYS.MEMO) || '';
    const options = ctx.getStagingData<any>(INPUT_VALIDATION_STAGING_KEYS.OPTIONS);

    // Get chain ID, account number, and sequence
    const chainId = options?.chainId ?? await ctx.getSigner().getChainId();
    const address = options?.signerAddress;
    if (!address) {
      throw new Error('No signer address provided in options');
    }
    const accountNumber = options?.accountNumber ??
      await ctx.getSigner().getAccountNumber(address);
    const sequence = options?.sequence ??
      await ctx.getSigner().getSequence(address);

    // Convert messages to amino format
    const aminoMsgs: AminoMessage[] = messages.map(msg => {
      const converter = ctx.getSigner().getConverterFromTypeUrl(msg.typeUrl);
      if (!converter) {
        throw new Error(`No amino converter found for type: ${msg.typeUrl}`);
      }
      if (!converter.toAmino) {
        throw new Error(`Converter for ${msg.typeUrl} does not have toAmino method`);
      }

      return {
        type: converter.aminoType,
        value: converter.toAmino(msg.value)
      };
    });

    // Create amino sign document
    const signDoc: CosmosAminoDoc = {
      chain_id: chainId,
      account_number: accountNumber.toString(),
      sequence: sequence.toString(),
      fee,
      msgs: aminoMsgs,
      memo,
    };

    // Encode sign document to bytes (canonical JSON)
    const signDocBytes = this.encodeStdSignDoc(signDoc);

    // Store in staging
    ctx.setStagingData(AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC, signDoc);
    ctx.setStagingData(AMINO_SIGN_DOC_STAGING_KEYS.SIGN_DOC_BYTES, signDocBytes);
  }

  /**
   * Encode StdSignDoc to canonical JSON bytes
   */
  private encodeStdSignDoc(signDoc: CosmosAminoDoc): Uint8Array {
    // Create canonical JSON representation
    const canonical = {
      account_number: signDoc.account_number,
      chain_id: signDoc.chain_id,
      fee: signDoc.fee,
      memo: signDoc.memo,
      msgs: signDoc.msgs,
      sequence: signDoc.sequence,
    };

    // Convert to JSON string and then to bytes
    const jsonString = JSON.stringify(canonical);
    return fromUtf8(jsonString);
  }
}