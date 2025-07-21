import { BaseWorkflowBuilderPlugin } from '@interchainjs/types';
import {

  AminoSignDocInput,
  STAGING_KEYS,
} from '../types';
import {
  CosmosAminoDoc,
  CosmosMessage,
  AminoMessage
} from '../../signers/types';
import { CosmosWorkflowBuilderContext } from '../context';
import { fromUtf8 } from '@interchainjs/utils';

/**
 * Plugin to build amino (JSON) sign document
 */
export class AminoSignDocPlugin extends BaseWorkflowBuilderPlugin<
  AminoSignDocInput,
  CosmosWorkflowBuilderContext
> {
  constructor() {
    super([
      STAGING_KEYS.MESSAGES,
      STAGING_KEYS.FEE,
      { dependency: STAGING_KEYS.MEMO, optional: true },
      { dependency: STAGING_KEYS.OPTIONS, optional: true }
    ]);
  }

  protected async onBuild(
    ctx: CosmosWorkflowBuilderContext,
    params: AminoSignDocInput
  ): Promise<void> {
    const messages = ctx.getStagingData<readonly CosmosMessage[]>(STAGING_KEYS.MESSAGES);
    const fee = ctx.getStagingData<any>(STAGING_KEYS.FEE);
    const memo = ctx.getStagingData<string>(STAGING_KEYS.MEMO) || '';
    const options = ctx.getStagingData<any>(STAGING_KEYS.OPTIONS);

    // Get chain ID, account number, and sequence
    const chainId = options?.chainId ?? await ctx.getSigner().getChainId();
    const addresses = await ctx.getSigner().getAddresses();
    const address = addresses[0];
    if (!address) {
      throw new Error('No addresses available');
    }
    const accountNumber = options?.accountNumber ??
      await ctx.getSigner().getAccountNumber(address);
    const sequence = options?.sequence ??
      await ctx.getSigner().getSequence(address);

    // Convert messages to amino format
    const aminoMsgs: AminoMessage[] = messages.map(msg => {
      const converter = ctx.getSigner().getConverterFromTypeUrl(msg.typeUrl);
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
    ctx.setStagingData(STAGING_KEYS.SIGN_DOC, signDoc);
    ctx.setStagingData(STAGING_KEYS.SIGN_DOC_BYTES, signDocBytes);
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