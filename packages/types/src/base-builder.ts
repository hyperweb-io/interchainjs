import { ITxBuilderContext, BaseTxBuilderContext } from './tx-builder';

/**
 * Base builder interface that defines the contract for building objects
 */
export interface IBaseBuilder<TReturnObj> {
  /**
   * Build and return the target object
   */
  build(): Promise<TReturnObj>;
}

/**
 * Plugin interface that defines the contract for builder plugins
 */
export interface IPlugin<TContext extends ITxBuilderContext<unknown> = ITxBuilderContext<unknown>> {
  /**
   * Set the builder context
   */
  setContext(context: TContext): void;

  /**
   * Get the builder context
   */
  getContext(): TContext;

  /**
   * Execute the plugin's build logic
   */
  build(): Promise<void>;
}

/**
 * Default staging key for final result
 */
export const DEFAULT_RESULT_STAGING_KEY = 'final_result';

/**
 * Base builder class that uses plugins to build objects
 */
export abstract class BaseBuilder<
  TSigner,
  TReturnObj
> implements IBaseBuilder<TReturnObj> {
  protected context: BaseTxBuilderContext<TSigner>;
  protected plugins: IPlugin<BaseTxBuilderContext<TSigner>>[];
  protected resultStagingKey: string;

  constructor(
    signer: TSigner,
    plugins: IPlugin<BaseTxBuilderContext<TSigner>>[],
    options: { resultStagingKey?: string } = {}
  ) {
    this.context = new BaseTxBuilderContext(signer);
    this.plugins = plugins;
    this.resultStagingKey = options.resultStagingKey ?? DEFAULT_RESULT_STAGING_KEY;

    // Set context for all plugins
    this.plugins.forEach(plugin => plugin.setContext(this.context));
  }

  /**
   * Build the target object by executing all plugins and then retrieving the result from staging data
   */
  async build(): Promise<TReturnObj> {
    // Execute all plugins in order
    for (const plugin of this.plugins) {
      await plugin.build();
    }

    // Get the final result from staging data
    const result = this.context.getStagingData<TReturnObj>(this.resultStagingKey);

    if (!result) {
      throw new Error(`Final result not found in staging data at key: ${this.resultStagingKey}`);
    }

    return result;
  }
}

/**
 * Base plugin class that provides common functionality for all plugins
 */
export abstract class BasePlugin<
  TBuilderInput,
  TContext extends ITxBuilderContext<unknown> = ITxBuilderContext<unknown>
> implements IPlugin<TContext> {
  protected context: TContext | undefined;
  protected options: unknown;
  protected dependencies: readonly string[];

  constructor(
    dependencies: readonly string[],
    options: unknown = {}
  ) {
    this.dependencies = dependencies;
    this.options = options;
  }

  /**
   * Set the builder context
   */
  setContext(context: TContext): void {
    this.context = context;
  }

  /**
   * Get the builder context
   */
  getContext(): TContext {
    if (!this.context) {
      throw new Error('Context not set. Call setContext() before using the plugin.');
    }
    return this.context;
  }

  /**
   * Common implementation that handles dependency resolution, validation, and transformation
   */
  protected retrieveParams(): TBuilderInput {
    const ctx = this.getContext();
    const params: Record<string, unknown> = {};

    // Iterate through all dependency keys
    for (const key of this.dependencies) {
      const value = ctx.getStagingData<unknown>(key);

      // Validate the value
      this.onValidate(key, value);

      // Transform the value if needed
      const transformedValue = this.onParam(key, value);

      // Convert key to camelCase and store
      const camelKey = this.toCamelCase(key);
      params[camelKey] = transformedValue;
    }

    // Allow custom transformation of the complete params object
    return this.afterRetrieveParams(params);
  }

  /**
   * Validate a dependency value. Override for custom validation.
   * Default: checks if value exists (not null/undefined)
   */
  protected onValidate(key: string, value: unknown): void {
    if (value === null || value === undefined) {
      throw new Error(`Required dependency '${key}' not found in staging data`);
    }
  }

  /**
   * Transform a dependency value. Override for custom transformation.
   * Default: returns value unchanged
   */
  protected onParam(key: string, value: unknown): unknown {
    return value;
  }

  /**
   * Convert the params Record to TBuilderInput. Override for custom conversion.
   * Default: returns params as-is (assumes TBuilderInput extends Record<string, unknown>)
   */
  protected afterRetrieveParams(params: Record<string, unknown>): TBuilderInput {
    return params as TBuilderInput;
  }

  /**
   * Convert snake_case/kebab-case to camelCase
   */
  private toCamelCase(str: string): string {
    return str.replace(/[_-]([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  /**
   * Abstract method to handle the build logic with the retrieved parameters
   */
  protected abstract onBuild(ctx: TContext, params: TBuilderInput): Promise<void>;

  /**
   * Execute the plugin's build logic
   */
  async build(): Promise<void> {
    const params = this.retrieveParams();
    await this.onBuild(this.getContext(), params);
  }
}

/**
 * Type utility for extracting signer type from context
 */
export type ExtractSigner<T> = T extends ITxBuilderContext<infer S> ? S : never;

/**
 * Type utility for plugin configuration
 */
export interface IPluginConfig {
  [key: string]: unknown;
}