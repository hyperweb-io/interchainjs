import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { CosmosWorkflowBuilder, CosmosWorkflowBuilderOptions } from './cosmos-workflow-builder';
import { ICosmosSigner, CosmosSignArgs, CosmosTx } from './types';

/**
 * Amino (JSON) workflow for Cosmos transactions
 * Uses SIGN_MODE_LEGACY_AMINO_JSON for JSON-based signing
 */
export class AminoWorkflow {
  private builder: CosmosWorkflowBuilder;

  constructor(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: Omit<CosmosWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ) {
    this.builder = CosmosWorkflowBuilder.createAminoBuilder(signer, signArgs, options);
  }

  /**
   * Build and sign the transaction using amino (JSON) workflow
   */
  async build(): Promise<CosmosTx> {
    return this.builder.build();
  }

  /**
   * Static factory method for convenience
   */
  static async buildTransaction(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: Omit<CosmosWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ): Promise<CosmosTx> {
    const workflow = new AminoWorkflow(signer, signArgs, options);
    return workflow.build();
  }
}