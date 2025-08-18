/**
 * Solana Workflow Builder Implementation
 */

import {
  IWorkflowBuilder,
  IWorkflowPlugin,
  ISolanaSigner,
  SolanaSignArgs,
  SolanaWorkflowOptions,
  SolanaWorkflowContext
} from '../../types/client';
import { TransactionInstruction, PublicKey } from '../../types/common';
import { SolanaSigningError } from '../../errors';

/**
 * Workflow context implementation for Solana
 */
export class SolanaWorkflowContextImpl implements SolanaWorkflowContext {
  private validatedInputs: any = null;
  private encodedMessage: Uint8Array | null = null;
  private transaction: any = null;

  constructor(
    public readonly signer: ISolanaSigner,
    public readonly signArgs: SolanaSignArgs,
    public readonly options: SolanaWorkflowOptions
  ) {}

  getValidatedInputs(): any {
    if (!this.validatedInputs) {
      throw new SolanaSigningError('Inputs not yet validated');
    }
    return this.validatedInputs;
  }

  setValidatedInputs(inputs: any): void {
    this.validatedInputs = inputs;
  }

  setEncodedMessage(message: Uint8Array): void {
    this.encodedMessage = message;
  }

  getEncodedMessage(): Uint8Array {
    if (!this.encodedMessage) {
      throw new SolanaSigningError('Message not yet encoded');
    }
    return this.encodedMessage;
  }

  setTransaction(transaction: any): void {
    this.transaction = transaction;
  }

  getTransaction(): any {
    if (!this.transaction) {
      throw new SolanaSigningError('Transaction not yet built');
    }
    return this.transaction;
  }
}

/**
 * Base workflow plugin implementation
 */
export abstract class BaseWorkflowPlugin<TContext> implements IWorkflowPlugin<TContext> {
  protected context: TContext | null = null;

  constructor(
    public readonly dependencies: string[],
    public readonly name: string
  ) {}

  setContext(context: TContext): void {
    this.context = context;
  }

  protected getContext(): TContext {
    if (!this.context) {
      throw new SolanaSigningError(`Context not set for plugin ${this.name}`);
    }
    return this.context;
  }

  abstract execute(context: TContext): Promise<void>;
}

/**
 * Solana workflow builder implementation
 */
export class SolanaWorkflowBuilder implements IWorkflowBuilder<ISolanaSigner, any, SolanaWorkflowContext> {
  private plugins: IWorkflowPlugin<SolanaWorkflowContext>[] = [];
  private context: SolanaWorkflowContextImpl;

  constructor(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowOptions = {}
  ) {
    this.context = new SolanaWorkflowContextImpl(signer, signArgs, options);
    this.setupDefaultPlugins();
  }

  static create(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowOptions = {}
  ): SolanaWorkflowBuilder {
    return new SolanaWorkflowBuilder(signer, signArgs, options);
  }

  async build(): Promise<any> {
    try {
      // Sort plugins by dependencies
      const sortedPlugins = this.sortPluginsByDependencies();

      // Execute plugins in order
      for (const plugin of sortedPlugins) {
        await plugin.execute(this.context);
      }

      return this.context.getTransaction();
    } catch (error) {
      throw new SolanaSigningError(
        `Workflow execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error as Error
      );
    }
  }

  addPlugin(plugin: IWorkflowPlugin<SolanaWorkflowContext>): this {
    this.plugins.push(plugin);
    plugin.setContext(this.context);
    return this;
  }

  removePlugin(name: string): this {
    this.plugins = this.plugins.filter(plugin => plugin.name !== name);
    return this;
  }

  getPlugins(): IWorkflowPlugin<SolanaWorkflowContext>[] {
    return [...this.plugins];
  }

  private setupDefaultPlugins(): void {
    // Import plugins dynamically to avoid circular dependencies
    const {
      InputValidationPlugin,
      MessageEncodingPlugin,
      FeeCalculationPlugin,
      SignaturePlugin,
      TransactionAssemblyPlugin,
      ComputeBudgetPlugin
    } = require('./plugins');

    this.addPlugin(new InputValidationPlugin());
    this.addPlugin(new FeeCalculationPlugin());
    this.addPlugin(new ComputeBudgetPlugin());
    this.addPlugin(new MessageEncodingPlugin());
    this.addPlugin(new SignaturePlugin());
    this.addPlugin(new TransactionAssemblyPlugin());
  }

  private sortPluginsByDependencies(): IWorkflowPlugin<SolanaWorkflowContext>[] {
    const sorted: IWorkflowPlugin<SolanaWorkflowContext>[] = [];
    const visited = new Set<string>();
    const visiting = new Set<string>();

    const visit = (plugin: IWorkflowPlugin<SolanaWorkflowContext>) => {
      if (visiting.has(plugin.name)) {
        throw new SolanaSigningError(`Circular dependency detected involving plugin: ${plugin.name}`);
      }

      if (visited.has(plugin.name)) {
        return;
      }

      visiting.add(plugin.name);

      // Visit dependencies first
      for (const depName of plugin.dependencies) {
        const depPlugin = this.plugins.find(p => p.name === depName);
        if (depPlugin) {
          visit(depPlugin);
        } else {
          throw new SolanaSigningError(`Missing dependency: ${depName} for plugin: ${plugin.name}`);
        }
      }

      visiting.delete(plugin.name);
      visited.add(plugin.name);
      sorted.push(plugin);
    };

    for (const plugin of this.plugins) {
      visit(plugin);
    }

    return sorted;
  }
}

/**
 * Factory function to create workflow builder
 */
export function createSolanaWorkflowBuilder(
  signer: ISolanaSigner,
  signArgs: SolanaSignArgs,
  options: SolanaWorkflowOptions = {}
): SolanaWorkflowBuilder {
  return SolanaWorkflowBuilder.create(signer, signArgs, options);
}
