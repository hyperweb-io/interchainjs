import { WorkflowBuilder, IWorkflowBuilderPlugin, WorkflowBuilderOptions } from '@interchainjs/types';
import { ISolanaSigner, SolanaSignArgs, SolanaSignedTransaction } from '../signers/types';
import { SolanaWorkflowBuilderContext } from './context';
import {
  InputValidationPlugin,
  TransactionBuildingPlugin,
  SignaturePlugin,
  FinalResultPlugin
} from './plugins';

export interface SolanaWorkflowBuilderOptions extends WorkflowBuilderOptions {
  /**
   * Additional options for Solana workflow
   */
}

/**
 * Solana transaction workflow builder
 * Supports transaction building and signing workflows
 */
export class SolanaWorkflowBuilder extends WorkflowBuilder<ISolanaSigner, SolanaSignedTransaction> {
  private signArgs: SolanaSignArgs;
  declare protected context: SolanaWorkflowBuilderContext;

  constructor(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowBuilderOptions = {}
  ) {
    // Create workflows
    const workflows = SolanaWorkflowBuilder.createWorkflows(signArgs);

    super(signer, workflows, options);

    this.signArgs = signArgs;

    // Override context with solana-specific context
    this.context = new SolanaWorkflowBuilderContext(signer);

    // Re-set context for all plugins
    Object.values(this.workflows).flat().forEach(plugin => plugin.setContext(this.context));

    // Set initial staging data
    this.context.setStagingData('sign_args', signArgs);
  }

  /**
   * Select the workflow to execute
   * For now, we only have one workflow, but this can be extended
   */
  protected selectWorkflow(): string {
    return 'standard';
  }

  /**
   * Create a standard Solana workflow builder
   */
  static createStandardBuilder(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: Omit<SolanaWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ): SolanaWorkflowBuilder {
    return new SolanaWorkflowBuilder(signer, signArgs, options);
  }

  /**
   * Create the workflows for Solana transaction signing
   */
  private static createWorkflows(
    signArgs: SolanaSignArgs
  ): Record<string, IWorkflowBuilderPlugin<SolanaWorkflowBuilderContext>[]> {
    return {
      standard: [
        new InputValidationPlugin(signArgs),
        new TransactionBuildingPlugin(),
        new SignaturePlugin(),
        new FinalResultPlugin(),
      ],
    };
  }
}
