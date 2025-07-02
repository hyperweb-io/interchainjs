import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { CosmosWorkflowBuilder, CosmosWorkflowBuilderOptions } from './cosmos-workflow-builder';
import { ICosmosSigner, CosmosSignArgs, CosmosTx } from './types';

/**
 * Direct (protobuf) workflow for Cosmos transactions
 * Uses SIGN_MODE_DIRECT for protobuf-based signing
 */
export class DirectWorkflow {
  private builder: CosmosWorkflowBuilder;

  constructor(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: Omit<CosmosWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ) {
    this.builder = CosmosWorkflowBuilder.createDirectBuilder(signer, signArgs, options);
  }

  /**
   * Build and sign the transaction using direct (protobuf) workflow
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
    const workflow = new DirectWorkflow(signer, signArgs, options);
    return workflow.build();
  }
}