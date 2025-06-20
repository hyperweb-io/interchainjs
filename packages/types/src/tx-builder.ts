import { DEFAULT_RESULT_STAGING_KEY } from './base-builder';

/**
 * ISigBuilder is an interface for building signature from document.
 */
export interface ISigBuilder<Doc = unknown, Sig = unknown> {
  /**
   * build signature from document.
   */
  buildSignature(doc: Doc): Sig | Promise<Sig>;
}

/**
 * ITxBuilder is an interface for building signed transaction document.
 */
export interface ITxBuilder<SignArgs = unknown, SignResp = unknown> {
  buildSignedTxDoc(args: SignArgs): Promise<SignResp>;
}

/**
 * ITxBuilderContext is a context object for building transaction document.
 */
export interface ITxBuilderContext<Signer = unknown> {
  signer?: Signer;

  /**
   * set staging data.
   * @param data - staging data
   */
  setStagingData(key: string, data: unknown): void;

  /**
   * get staging data.
   */
  getStagingData<TStaging>(key: string): TStaging;

  /**
   * Set the final result using the default staging key.
   * This is a convenience method for setting the final result that will be returned by the builder.
   * @param result - the final result to be returned by the builder
   */
  setFinalResult<TResult>(result: TResult): void;
}

/**
 * BaseTxBuilderContext is a base class for ITxBuilderContext.
 */
export class BaseTxBuilderContext<Signer> implements ITxBuilderContext<Signer> {
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