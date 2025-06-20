import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { SignDoc, TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { SignDocResponse } from '@interchainjs/types';
import { CosmosBaseSigner } from '../base/base-signer';
import { CosmosDirectDoc, CosmosSignArgs } from '../types/signer';
import { BaseCosmosTxBuilder } from './base-cosmos-builder';
import { CosmosTxBuildResult } from './types';

/**
 * Direct (Protobuf) transaction builder for Cosmos chains
 */
export class DirectTxBuilder extends BaseCosmosTxBuilder<CosmosDirectDoc> {
  constructor(signer: CosmosBaseSigner<CosmosDirectDoc>, options: { resultStagingKey?: string } = {}) {
    // TODO: Replace with proper plugins once the plugin architecture is fully implemented
    super(signer, SignMode.SIGN_MODE_DIRECT, [], options);
  }

  /**
   * Build signed transaction document for Direct signing
   */
  async buildSignedTxDoc(args: CosmosSignArgs): Promise<CosmosTxBuildResult<CosmosDirectDoc>> {
    // For now, use a simplified approach until plugins are fully implemented
    const { messages, fee, memo, options } = args;

    // Get chain info
    const chainId = options?.chainId ?? (await this.context.signer!.queryClient.getChainId());
    const accountNumber = options?.accountNumber ??
      (await this.context.signer!.queryClient.getAccountNumber(
        await this.context.signer!.getAddress()
      ));

    // Build the Direct sign document
    const doc: SignDoc = SignDoc.fromPartial({
      bodyBytes: new Uint8Array(), // TODO: Implement proper body bytes encoding
      authInfoBytes: new Uint8Array(), // TODO: Implement proper auth info encoding
      chainId,
      accountNumber,
    });

    // Sign the document
    const signResp = await this.context.signer!.signDoc(doc);

    // Build the TxRaw (simplified for now)
    const txRaw = TxRaw.fromPartial({
      bodyBytes: doc.bodyBytes,
      authInfoBytes: doc.authInfoBytes,
      signatures: [signResp.signature.value],
    });

    const result: CosmosTxBuildResult<CosmosDirectDoc> = {
      tx: txRaw,
      doc,
    };

    // Store the result using the convenient setFinalResult method
    this.context.setFinalResult(result);

    return result;
  }
}

/**
 * Factory function to create a Direct builder
 */
export function createDirectBuilder(signer: CosmosBaseSigner<CosmosDirectDoc>): DirectTxBuilder {
  return new DirectTxBuilder(signer);
}