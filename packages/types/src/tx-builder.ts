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
}
