import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { WorkflowBuilder, IWorkflowBuilderPlugin, WorkflowBuilderOptions } from '@interchainjs/types';
import {
  ICosmosSigner,
  CosmosSignArgs
} from '../signers/types';
import { CosmosTx } from '../signers/types';
import { CosmosWorkflowBuilderContext } from './context';
import {
  InputValidationPlugin,
  MessageEncodingPlugin,
  SignerInfoPlugin,
  FeeCalculationPlugin,
  AuthInfoPlugin,
  DirectSignDocPlugin,
  AminoSignDocPlugin,
  DirectSignaturePlugin,
  AminoSignaturePlugin,
  TxRawAssemblyPlugin
} from './plugins';

export interface CosmosWorkflowBuilderOptions extends WorkflowBuilderOptions {
  /**
   * Preferred sign mode - determines which workflow to use
   * @default SignMode.SIGN_MODE_DIRECT
   */
  preferredSignMode?: SignMode;
}

/**
 * Cosmos transaction workflow builder
 * Supports both direct (protobuf) and amino (JSON) signing workflows
 */
export class CosmosWorkflowBuilder extends WorkflowBuilder<ICosmosSigner, CosmosTx> {
  private signArgs: CosmosSignArgs;
  private preferredSignMode: SignMode;
  declare protected context: CosmosWorkflowBuilderContext;

  constructor(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: CosmosWorkflowBuilderOptions = {}
  ) {
    const { preferredSignMode = SignMode.SIGN_MODE_DIRECT, ...builderOptions } = options;

    // Create workflows
    const workflows = CosmosWorkflowBuilder.createWorkflows(signArgs);

    super(signer, workflows, builderOptions);

    this.signArgs = signArgs;
    this.preferredSignMode = preferredSignMode;

    // Override context with cosmos-specific context
    this.context = new CosmosWorkflowBuilderContext(signer);

    // Re-set context for all plugins
    Object.values(this.workflows).flat().forEach(plugin => plugin.setContext(this.context));
  }

  /**
   * Select workflow based on preferred sign mode or sign args options
   */
  protected selectWorkflow(): string {
    // Check if sign mode is specified in options
    const signMode = this.preferredSignMode || SignMode.SIGN_MODE_DIRECT;

    switch (signMode) {
      case SignMode.SIGN_MODE_DIRECT:
        return 'direct';
      case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
        return 'amino';
      default:
        throw new Error(`Unsupported sign mode: ${signMode}`);
    }
  }

  /**
   * Create the workflows for direct and amino signing
   */
  private static createWorkflows(
    signArgs: CosmosSignArgs
  ): Record<string, IWorkflowBuilderPlugin<CosmosWorkflowBuilderContext>[]> {
    return {
      direct: [
        new InputValidationPlugin(signArgs),
        new MessageEncodingPlugin(),
        new SignerInfoPlugin(SignMode.SIGN_MODE_DIRECT),
        new FeeCalculationPlugin(),
        new AuthInfoPlugin(),
        new DirectSignDocPlugin(),
        new DirectSignaturePlugin(),
        new TxRawAssemblyPlugin(),
      ],
      amino: [
        new InputValidationPlugin(signArgs),
        new MessageEncodingPlugin(),
        new SignerInfoPlugin(SignMode.SIGN_MODE_LEGACY_AMINO_JSON),
        new FeeCalculationPlugin(),
        new AuthInfoPlugin(),
        new AminoSignDocPlugin(),
        new AminoSignaturePlugin(),
        new TxRawAssemblyPlugin(),
      ],
    };
  }

  /**
   * Static factory method for direct signing
   */
  static createDirectBuilder(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: Omit<CosmosWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ): CosmosWorkflowBuilder {
    return new CosmosWorkflowBuilder(signer, signArgs, {
      ...options,
      preferredSignMode: SignMode.SIGN_MODE_DIRECT,
    });
  }

  /**
   * Static factory method for amino signing
   */
  static createAminoBuilder(
    signer: ICosmosSigner,
    signArgs: CosmosSignArgs,
    options: Omit<CosmosWorkflowBuilderOptions, 'preferredSignMode'> = {}
  ): CosmosWorkflowBuilder {
    return new CosmosWorkflowBuilder(signer, signArgs, {
      ...options,
      preferredSignMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
    });
  }
}