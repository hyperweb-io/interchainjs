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
}