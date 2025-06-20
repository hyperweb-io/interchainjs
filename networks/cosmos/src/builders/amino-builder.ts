import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { SignDocResponse, StdSignDoc } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosAminoDoc, CosmosSignArgs } from '../types/signer';
import { BaseCosmosTxBuilder } from './base-cosmos-builder';
import { CosmosTxBuildResult } from './types';

/**
 * Amino transaction builder for Cosmos chains
 */
export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
  constructor(signer: CosmosBaseSigner<CosmosAminoDoc>, options: { resultStagingKey?: string } = {}) {
    // TODO: Replace with proper plugins once the plugin architecture is fully implemented
    super(signer, SignMode.SIGN_MODE_LEGACY_AMINO_JSON, [], options);
  }

  /**
   * Build signed transaction document for Amino signing
   */
    async buildSignedTxDoc(args: CosmosSignArgs): Promise<CosmosTxBuildResult<CosmosAminoDoc>> {
    // For now, use a simplified approach until plugins are fully implemented
    const { messages, fee, memo, options } = args;

    // Build the Amino sign document
    const doc: StdSignDoc = {
      chain_id: options?.chainId ?? (await this.context.signer!.queryClient.getChainId()),
      account_number: options?.accountNumber?.toString() ??
        (await this.context.signer!.queryClient.getAccountNumber(
          await this.context.signer!.getAddress()
        )).toString(),
      sequence: options?.sequence?.toString() ??
        (await this.context.signer!.queryClient.getSequence(
          await this.context.signer!.getAddress()
        )).toString(),
      fee: fee ?? { gas: '200000', amount: [] },
      msgs: messages.map(msg => ({
        type: msg.typeUrl,
        value: msg.value
      })),
      memo: memo ?? '',
    };

    // Sign the document
    const signResp = await this.context.signer!.signDoc(doc);

    // Build the TxRaw (simplified for now)
    const txRaw = TxRaw.fromPartial({
      bodyBytes: new Uint8Array(), // TODO: Implement proper body bytes encoding
      authInfoBytes: new Uint8Array(), // TODO: Implement proper auth info encoding
      signatures: [signResp.signature.value],
    });

    const result: CosmosTxBuildResult<CosmosAminoDoc> = {
      tx: txRaw,
      doc,
    };

    // Store the result using the convenient setFinalResult method
    this.context.setFinalResult(result);

    return result;
  }
}

/**
 * Factory function to create an Amino builder
 */
export function createAminoBuilder(signer: CosmosBaseSigner<CosmosAminoDoc>): AminoTxBuilder {
  return new AminoTxBuilder(signer);
}