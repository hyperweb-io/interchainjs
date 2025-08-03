import { WorkflowBuilder, IWorkflowBuilderPlugin, WorkflowBuilderOptions } from '@interchainjs/types';
import {
  IEthereumSigner,
  EthereumSignArgs,
  EthereumSignedTransaction,
  EthereumTransactionType
} from '../signers/types';
import { EthereumWorkflowBuilderContext } from './context';
import {
  InputValidationPlugin,
  TransactionBuildingPlugin,
  SignaturePlugin,
  TxAssemblyPlugin
} from './plugins';

/**
 * Options for Ethereum workflow builder
 */
export interface EthereumWorkflowBuilderOptions extends WorkflowBuilderOptions {
  /** Preferred transaction type (defaults to auto-detect from transaction) */
  preferredTransactionType?: EthereumTransactionType;
}

/**
 * Ethereum workflow builder
 * Handles both Legacy and EIP-1559 transaction workflows
 */
export class EthereumWorkflowBuilder extends WorkflowBuilder<IEthereumSigner, EthereumSignedTransaction> {
  private signArgs: EthereumSignArgs;
  private preferredTransactionType?: EthereumTransactionType;

  /**
   * Create a workflow builder for legacy transactions
   */
  static createLegacyBuilder(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: Omit<EthereumWorkflowBuilderOptions, 'preferredTransactionType'> = {}
  ): EthereumWorkflowBuilder {
    return new EthereumWorkflowBuilder(signer, signArgs, {
      ...options,
      preferredTransactionType: EthereumTransactionType.LEGACY
    });
  }

  /**
   * Create a workflow builder for EIP-1559 transactions
   */
  static createEIP1559Builder(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: Omit<EthereumWorkflowBuilderOptions, 'preferredTransactionType'> = {}
  ): EthereumWorkflowBuilder {
    return new EthereumWorkflowBuilder(signer, signArgs, {
      ...options,
      preferredTransactionType: EthereumTransactionType.EIP1559
    });
  }

  constructor(
    signer: IEthereumSigner,
    signArgs: EthereumSignArgs,
    options: EthereumWorkflowBuilderOptions = {}
  ) {
    const { preferredTransactionType, ...builderOptions } = options;

    // Create workflows
    const workflows = EthereumWorkflowBuilder.createWorkflows(signArgs);

    super(signer, workflows, builderOptions);

    this.signArgs = signArgs;
    this.preferredTransactionType = preferredTransactionType;

    // Override context with Ethereum-specific context
    this.context = new EthereumWorkflowBuilderContext(signer);

    // Re-set context for all plugins
    Object.values(this.workflows).flat().forEach(plugin => plugin.setContext(this.context));
  }

  /**
   * Select which workflow to execute based on transaction type
   */
  protected selectWorkflow(): string {
    const transaction = this.signArgs.transaction;

    // Use preferred transaction type if specified
    if (this.preferredTransactionType) {
      return this.preferredTransactionType === EthereumTransactionType.EIP1559 ? 'eip1559' : 'legacy';
    }

    // Auto-detect from transaction
    if (transaction.type === '0x2') {
      return 'eip1559';
    } else if (transaction.maxFeePerGas && transaction.maxPriorityFeePerGas) {
      return 'eip1559';
    } else {
      return 'legacy';
    }
  }

  /**
   * Create the workflows for legacy and EIP-1559 signing
   */
  private static createWorkflows(
    signArgs: EthereumSignArgs
  ): Record<string, IWorkflowBuilderPlugin<EthereumWorkflowBuilderContext>[]> {
    return {
      legacy: [
        new InputValidationPlugin(signArgs),
        new TransactionBuildingPlugin(),
        new SignaturePlugin(),
        new TxAssemblyPlugin(),
      ],
      eip1559: [
        new InputValidationPlugin(signArgs),
        new TransactionBuildingPlugin(),
        new SignaturePlugin(),
        new TxAssemblyPlugin(),
      ],
    };
  }
}
