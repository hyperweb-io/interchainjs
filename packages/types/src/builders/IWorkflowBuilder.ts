/**
 * The fundamental contract for all builders
 * @template TReturnObj The type of object returned when building is complete
 */
export interface IWorkflowBuilder<TReturnObj> {
  /**
   * Build and return the target object
   */
  build(): Promise<TReturnObj>;
}