import { IWorkflowBuilderContext } from "./IWorkflowBuilderContext";

/**
 * Default staging key for final results
 */
export const DEFAULT_RESULT_STAGING_KEY = "__final_result__";

/**
 * The default implementation of the context
 * @template Signer The type of signer used by the builder
 */
export class WorkflowBuilderContext<Signer> implements IWorkflowBuilderContext<Signer> {
  private stagingData: Record<string, unknown> = {};

  constructor(public signer?: Signer) {}

  setStagingData(key: string, data: unknown): void {
    this.stagingData[key] = data;
  }

  getStagingData<TStaging>(key: string): TStaging {
    return this.stagingData[key] as TStaging;
  }

  setFinalResult<TResult>(result: TResult): void {
    this.setStagingData(DEFAULT_RESULT_STAGING_KEY, result);
  }
}