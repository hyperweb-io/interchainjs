import { ISolanaSigner, SolanaSignArgs, SolanaSignedTransaction } from '../signers/types';
import { SolanaWorkflowBuilder, SolanaWorkflowBuilderOptions } from './solana-workflow-builder';

/**
 * Standard workflow for Solana transactions
 * Provides a simple interface for transaction signing using the workflow builder
 */
export class SolanaStdWorkflow {
  private builder: SolanaWorkflowBuilder;

  constructor(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowBuilderOptions = {}
  ) {
    this.builder = SolanaWorkflowBuilder.createStandardBuilder(signer, signArgs, options);
  }

  /**
   * Build and sign the transaction using the standard workflow
   */
  async build(): Promise<SolanaSignedTransaction> {
    return this.builder.build();
  }

  /**
   * Static factory method for convenience
   */
  static async buildTransaction(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowBuilderOptions = {}
  ): Promise<SolanaSignedTransaction> {
    const workflow = new SolanaStdWorkflow(signer, signArgs, options);
    return workflow.build();
  }
}

