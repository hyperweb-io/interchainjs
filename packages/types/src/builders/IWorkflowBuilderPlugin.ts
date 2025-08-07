import { IWorkflowBuilderContext } from "./IWorkflowBuilderContext";

/**
 * The contract for all plugins
 * @template TContext The type of context object used by the plugin
 */
export interface IWorkflowBuilderPlugin<
  TContext extends IWorkflowBuilderContext<unknown> = IWorkflowBuilderContext<unknown>
> {
  /**
   * Set the builder context
   * @param context The context to use
   */
  setContext(context: TContext): void;

  /**
   * Get the builder context
   * @returns The context instance
   */
  getContext(): TContext;

  /**
   * Execute the plugin's build logic
   */
  build(): Promise<void>;
}