import { EthereumWorkflowBuilder, EthereumWorkflowBuilderOptions } from './ethereum-workflow-builder';
import { IEthereumSigner, EthereumSignArgs, EthereumSignedTransaction } from '../signers/types';

/**
 * EIP-1559 workflow for Ethereum transactions
 * Uses maxFeePerGas and maxPriorityFeePerGas for modern transactions
 */
export class EIP1559Workflow {
  private builder: EthereumWorkflowBuilder;

  constructor(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: Omit<EthereumWorkflowBuilderOptions, 'preferredTransactionType'> = {}
  ) {
    this.builder = EthereumWorkflowBuilder.createEIP1559Builder(signer, signArgs, options);
  }

  /**
   * Build and sign the transaction using EIP-1559 workflow
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
    const workflow = new EIP1559Workflow(signer, signArgs, options);
    return workflow.build();
  }
}
