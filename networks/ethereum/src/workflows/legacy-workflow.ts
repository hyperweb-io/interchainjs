import { EthereumWorkflowBuilder, EthereumWorkflowBuilderOptions } from './ethereum-workflow-builder';
import { IEthereumSigner, EthereumSignArgs, EthereumSignedTransaction } from '../signers/types';

/**
 * Legacy workflow for Ethereum transactions
 * Uses gasPrice for pre-EIP-1559 transactions
 */
export class LegacyWorkflow {
  private builder: EthereumWorkflowBuilder;

  constructor(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: Omit<EthereumWorkflowBuilderOptions, 'preferredTransactionType'> = {}
  ) {
    this.builder = EthereumWorkflowBuilder.createLegacyBuilder(signer, signArgs, options);
  }

  /**
   * Build and sign the transaction using legacy workflow
   */
  async build(): Promise<EthereumSignedTransaction> {
    return this.builder.build();
  }

  /**
   * Static factory method for convenience
   */
  static async buildTransaction(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: Omit<EthereumWorkflowBuilderOptions, 'preferredTransactionType'> = {}
  ): Promise<EthereumSignedTransaction> {
    const workflow = new LegacyWorkflow(signer, signArgs, options);
    return workflow.build();
  }
}
