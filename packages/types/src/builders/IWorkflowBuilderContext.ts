import { IUniSigner } from "../signer";

/**
 * The context object for sharing data between plugins
 * @template Signer The type of signer used by the builder
 */
export interface IWorkflowBuilderContext<Signer = IUniSigner> {
  signer?: Signer;

  /**
   * Set staging data
   * @param key The key to store the data under
   * @param data The data to store
   */
  setStagingData(key: string, data: unknown): void;

  /**
   * Get staging data
   * @template TStaging The expected type of the staging data
   * @param key The key to retrieve data from
   * @returns The staging data casted to TStaging
   */
  getStagingData<TStaging>(key: string): TStaging;

  /**
   * Set the final result using the default staging key
   * Convenience method for setting the final result
   * @template TResult The type of the final result
   * @param result The result to store
   */
  setFinalResult<TResult>(result: TResult): void;
}