import { IWorkflowBuilderPlugin } from "./IWorkflowBuilderPlugin";
import { IWorkflowBuilderContext } from "./IWorkflowBuilderContext";

/**
 * Type for dependency configuration
 * Can be either a string (for required dependencies) or an object with optional flag
 */
export type DependencyConfig = string | {
  dependency: string;
  optional?: boolean;
};

/**
 * The abstract base class for all plugins with common retrieveParams() implementation
 * @template TBuilderInput The type of parameters used by the plugin
 * @template TContext The type of context object used by the plugin
 */
export abstract class BaseWorkflowBuilderPlugin<
  TBuilderInput,
  TContext extends IWorkflowBuilderContext<unknown>
> implements IWorkflowBuilderPlugin<TContext> {
  protected context: TContext | undefined;
  protected options: unknown;
  protected dependencies: readonly DependencyConfig[];

  constructor(
    dependencies: readonly DependencyConfig[],
    options: unknown = {}
  ) {
    this.dependencies = dependencies;
    this.options = options;
  }

  setContext(context: TContext): void {
    this.context = context;
  }

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

    // Iterate through all dependency configurations
    for (const depConfig of this.dependencies) {
      const { key, isOptional } = this.parseDependencyConfig(depConfig);
      const value = ctx.getStagingData<unknown>(key);

      // Handle optional dependencies - skip if not present
      if (isOptional && (value === null || value === undefined)) {
        continue;
      }

      // Validate the value (will throw for required dependencies)
      this.onValidate(key, value, isOptional);

      // Transform the value if needed
      const transformedValue = this.onParam(key, value);

      // Convert key to camelCase and store
      const camelKey = camel(key);
      params[camelKey] = transformedValue;
    }

    // Allow custom transformation of the complete params object
    return this.afterRetrieveParams(params);
  }

  /**
   * Parse dependency configuration to extract key and optional flag
   */
  private parseDependencyConfig(depConfig: DependencyConfig): { key: string; isOptional: boolean } {
    if (typeof depConfig === 'string') {
      return { key: depConfig, isOptional: false };
    } else {
      return { key: depConfig.dependency, isOptional: depConfig.optional ?? false };
    }
  }

  /**
   * Validate a dependency value. Override for custom validation.
   * Default: checks if value exists (not null/undefined) for required dependencies
   * @param key The dependency key
   * @param value The dependency value
   * @param isOptional Whether the dependency is optional
   */
  protected onValidate(key: string, value: unknown, isOptional: boolean = false): void {
    if (!isOptional && (value === null || value === undefined)) {
      throw new Error(`Required dependency '${key}' not found in staging data`);
    }
  }

  /**
   * Transform a dependency value. Override for custom transformation.
   * Default: returns value unchanged
   * @param key The dependency key
   * @param value The dependency value
   * @returns The transformed value
   */
  protected onParam(key: string, value: unknown): unknown {
    return value;
  }

  /**
   * Convert the params Record to TBuilderInput. Override for custom conversion.
   * Default: returns params as-is (assumes TBuilderInput extends Record<string, unknown>)
   * @param params The collected parameters
   * @returns The final parameters object
   */
  protected afterRetrieveParams(params: Record<string, unknown>): TBuilderInput {
    return params as TBuilderInput;
  }



  /**
   * Abstract method to handle the build logic with the retrieved parameters
   * @param ctx The context object
   * @param params The retrieved and transformed parameters
   */
  protected abstract onBuild(ctx: TContext, params: TBuilderInput): Promise<void>;

  async build(): Promise<void> {
    const params = this.retrieveParams();
    await this.onBuild(this.getContext(), params);
  }
}

export function camel(str: string) {
  return str.replace(/[_-]([a-zA-Z])/g, (_, letter) => letter.toUpperCase());
};