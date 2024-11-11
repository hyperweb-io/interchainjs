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
 * ITxBuilderPlugin is an interface for processing staging data.
 */
export interface ITxBuilderPlugin {
  /**
   * process staging data.
   */
  processStagingData(): void;
}

/**
 * IBaseTxBuilder is an interface for building transaction document.
 */
export interface IBaseTxBuilder<TResult> {
  /**
   * build transaction document.
   */
  buildTxDoc(): TResult | Promise<TResult>;
}

/**
 * BaseTxBuilder is a base class for building transaction document.
 */
export abstract class BaseTxBuilder<TResult> implements IBaseTxBuilder<TResult> {
  /**
   * constructor
   * @param context - context object for building transaction document
   * @param plugins - plugins for processing staging data
   */
  constructor(public context: ITxBuilderContext, public plugins: ITxBuilderPlugin[]) {}

  /**
   * get result of building transaction document.
   */
  abstract getResult(): Promise<TResult>;

  /**
   * build transaction document.
   * @returns - transaction document
   */
  async buildTxDoc(): Promise<TResult> {
    this.plugins.forEach((plugin) => {
      plugin.processStagingData();
    });

    return this.getResult();
  }

}

/**
 * BaseTxbuilderPlugin is a base class for processing staging data.
 */
export abstract class BaseTxbuilderPlugin<TArgs> implements ITxBuilderPlugin {
  /**
   * constructor
   * @param context - context object for building transaction document
   * @param deps - dependencies for processing staging data
   */
  constructor(public context: ITxBuilderContext, public deps: string[]) {}

  /**
   * get arguments for processing staging data.
   * @param key - key for staging data
   * @param value - value for staging data
   * @returns - true if the arguments are valid, otherwise false
   */
  onValidateArgs(key: string, value: unknown) {
    return Boolean(value);
  }

  /**
   * process staging data.
   * @param args - arguments for processing staging data, got from getArgs()
   */
  abstract processStagingDataByArgs(args: TArgs): void;

  /**
   * get arguments for processing staging data.
   * @returns - arguments for processing staging data
   */
  getArgs(): TArgs {
    const args: Record<string, unknown> = {};

    this.deps.forEach((key) => {
      args[key] = this.context.getStagingData(key);
      if(this.onValidateArgs(key, args[key]) === false) {
        throw new Error(`Invalid argument for ${key}`);
      }
    });

    return args as TArgs;
  }

  /**
   * process staging data.
   */
  processStagingData() {
    const args = this.getArgs();

    this.processStagingDataByArgs(args);
  }
}