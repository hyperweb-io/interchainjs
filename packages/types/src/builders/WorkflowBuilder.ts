import { IWorkflowBuilder } from "./IWorkflowBuilder";
import { IWorkflowBuilderPlugin } from "./IWorkflowBuilderPlugin";
import { WorkflowBuilderContext, DEFAULT_RESULT_STAGING_KEY } from "./WorkflowBuilderContext";

/**
 * Options for workflow builder
 */
export interface WorkflowBuilderOptions {
  /**
   * The staging key to use for retrieving the final result
   * @default "__final_result__"
   */
  resultStagingKey?: string;
}

/**
 * The abstract base class for all builders
 * @template TSigner The type of signer used by the builder
 * @template TReturnObj The type of object returned when building is complete
 */
export abstract class WorkflowBuilder<TSigner, TReturnObj> implements IWorkflowBuilder<TReturnObj> {
  protected context: WorkflowBuilderContext<TSigner>;
  protected workflows: Record<string, IWorkflowBuilderPlugin<WorkflowBuilderContext<TSigner>>[]>;
  protected resultStagingKey: string;

  constructor(
    signer: TSigner,
    workflows: Record<string, IWorkflowBuilderPlugin<WorkflowBuilderContext<TSigner>>[]>,
    options: WorkflowBuilderOptions = {}
  ) {
    this.context = new WorkflowBuilderContext(signer);
    this.workflows = workflows;
    this.resultStagingKey = options.resultStagingKey ?? DEFAULT_RESULT_STAGING_KEY;

    // Set context for all plugins in all workflows
    Object.values(this.workflows).flat().forEach(plugin => plugin.setContext(this.context));
  }

  /**
   * Abstract method to determine which workflow to execute
   * Implementations should return the workflow name based on context, options, or other criteria
   */
  protected abstract selectWorkflow(): string;

  async build(): Promise<TReturnObj> {
    // Determine which workflow to execute
    const workflowName = this.selectWorkflow();
    const selectedWorkflow = this.workflows[workflowName];

    if (!selectedWorkflow) {
      throw new Error(`Workflow '${workflowName}' not found. Available workflows: ${Object.keys(this.workflows).join(', ')}`);
    }

    // Execute all plugins in the selected workflow in order
    for (const plugin of selectedWorkflow) {
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