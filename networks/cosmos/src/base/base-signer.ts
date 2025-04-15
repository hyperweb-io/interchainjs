import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import {
  SignerInfo,
  TxBody,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import {
  Auth,
  BaseSigner,
  BroadcastOptions,
  HttpEndpoint,
  IAccount,
  IDocSigner,
  IKey,
  isDocAuth,
  ISigBuilder,
  SignDocResponse,
  SignerConfig,
  SignResponse,
  DeliverTxResponse,
  TelescopeGeneratedCodec,
  EncodeObject,
  StdFee
} from '@interchainjs/types';
import { assertEmpty, isEmpty } from '@interchainjs/utils';

import { defaultSignerOptions } from '../defaults';
import { RpcClient } from '../query/rpc';
import {
  CosmosSignArgs,
  DocOptions,
  EncodedMessage,
  Encoder,
  FeeOptions,
  QueryClient,
  SignerOptions,
  TimeoutHeightOption,
  UniCosmosBaseSigner,
} from '../types';
import { calculateFee } from '../utils/chain';
import { BaseCosmosTxBuilder } from './tx-builder';
import { toEncoder } from '../utils';

/**
 * Base class for Cosmos Doc Signer.
 * It provides the basic methods for signing a document.
 * @template TDoc - The type of the document to be signed.
 *  * @template TArgs The type of the args.
 */
export abstract class CosmosDocSigner<TDoc, TArgs = unknown> extends BaseSigner
  implements IDocSigner<TDoc, TArgs, SignDocResponse<TDoc>> {
  constructor(auth: Auth, config: SignerConfig) {
    super(auth, config);

    this.txBuilder = this.getTxBuilder();
  }

  /**
   * signature builder
   */
  txBuilder: ISigBuilder<TDoc, IKey>;

  /**
   * abstract method to get the signature builder
   */
  abstract getTxBuilder(): ISigBuilder<TDoc, IKey>;

  /**
   * Sign a document.
   */
  async signDoc(doc: TDoc): Promise<SignDocResponse<TDoc>> {
    if (isDocAuth<TDoc>(this.auth)) {
      return await this.auth.signDoc(doc);
    } else {
      const sig = await this.txBuilder.buildSignature(doc);

      return {
        signature: sig,
        signDoc: doc,
      };
    }
  }
}

/**
 * Base class for Cosmos Signer.
 */
export abstract class CosmosBaseSigner<SignDoc>
  extends CosmosDocSigner<SignDoc>
  implements UniCosmosBaseSigner<SignDoc> {
  /**
   * QueryClient for querying chain data.
   */
  _queryClient?: QueryClient;

  /**
   * registered encoders
   */
  readonly encoders: Encoder[];

  /**
   * encode public key to EncodedMessage
   * the method is provided by the config
   */
  readonly _encodePublicKey: (key: IKey) => EncodedMessage;

  /**
   * parse account from EncodedMessage
   * the method is provided by the config
   */
  readonly parseAccount: (encodedAccount: EncodedMessage) => BaseAccount;

  /**
   * prefix of the chain.
   * will get from queryClient if not set.
   */
  prefix?: string;

  /**
   * account info of the current signer.
   */
  account?: IAccount;

  /**
   * signed document builder
   */
  declare txBuilder: BaseCosmosTxBuilder<SignDoc>;

  /**
   * broadcast options
   */
  broadcastOptions?: BroadcastOptions;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions,
    broadcastOptions?: BroadcastOptions
  ) {
    super(auth, { ...defaultSignerOptions, ...options });
    this.encoders = encoders;
    this.parseAccount =
      options?.parseAccount ?? defaultSignerOptions.parseAccount;
    this._encodePublicKey =
      options?.encodePublicKey ?? defaultSignerOptions.encodePublicKey;
    this.prefix = options?.prefix;
    if (!isEmpty(endpoint)) {
      this.setEndpoint(endpoint);
    }

    this.txBuilder = this.getTxBuilder();
  }

  /**
   * abstract method to get the signed document builder
   */
  abstract getTxBuilder(): BaseCosmosTxBuilder<SignDoc>;

  public get encodedPublicKey() {
    return this._encodePublicKey(this.publicKey);
  }

  /**
   * register encoders
   */
  addEncoders = (encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.encoders.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newEncoders = encoders.filter(encoder => !existingTypeUrls.has(encoder.typeUrl));

    // Add only the unique converters
    this.encoders.push(...newEncoders.map(toEncoder));
  };

  /**
   * get prefix of the chain
   * @returns prefix of the chain
   */
  getPrefix = async () => {
    if (this.prefix) {
      return this.prefix;
    }

    if (this.queryClient) {
      return this.queryClient.getPrefix();
    }

    throw new Error("Can't get prefix because no queryClient is set");
  };

  /**
   * get encoder by typeUrl
   */
  getEncoder = (typeUrl: string) => {
    const encoder = this.encoders.find(
      (encoder) => encoder.typeUrl === typeUrl
    );
    if (!encoder) {
      throw new Error(
        `No such Encoder for typeUrl ${typeUrl}, please add corresponding Encoder with method \`addEncoder\``
      );
    }
    return encoder;
  };

  /**
   * get the address of the current signer
   * @returns the address of the current signer
   */
  async getAddress() {
    if (!this.account) {
      this.account = await this.getAccount();
    }

    return this.account.address;
  }

  /**
   * get account by account creator
   */
  async getAccount() {
    const opts = this.config as SignerOptions;

    if (opts.createAccount) {
      return new opts.createAccount(
        await this.getPrefix(),
        this.auth,
        this.config.publicKey.isCompressed
      );
    } else {
      throw new Error('No account creator is provided, or you can try to override the method `getAccount`');
    }
  }

  /**
   * set the endpoint of the queryClient
   */
  setEndpoint(endpoint: string | HttpEndpoint) {
    this._queryClient = new RpcClient(endpoint, this.prefix);
    (this._queryClient as RpcClient).setAccountParser(this.parseAccount);
  }

  /**
   * get the queryClient
   */
  get queryClient() {
    assertEmpty(this._queryClient);
    return this._queryClient;
  }


  /**
   * convert relative timeoutHeight to absolute timeoutHeight
   */
  async toAbsoluteTimeoutHeight(
    timeoutHeight?: TimeoutHeightOption
  ): Promise<{ type: 'absolute'; value: bigint } | undefined> {
    return isEmpty(timeoutHeight)
      ? void 0
      : {
        type: 'absolute',
        value:
          timeoutHeight.type === 'absolute'
            ? timeoutHeight.value
            : (await this.queryClient.getLatestBlockHeight()) +
            timeoutHeight.value,
      };
  }

  /**
   * sign tx messages with fee, memo, etc.
   * @param args - arguments for signing, e.g. messages, fee, memo, etc.
   * @returns a response object with the signed document and a broadcast method
   */
  async sign(
    args: CosmosSignArgs
  ): Promise<SignResponse<TxRaw, SignDoc, DeliverTxResponse>> {
    const signed = await this.txBuilder.buildSignedTxDoc(args);

    return {
      ...signed,
      broadcast: async (options?: BroadcastOptions) => {
        return this.broadcast(signed.tx, options);
      },
    };
  }

  /**
   * broadcast a signed document
   * @param txRaw - the signed document
   * @param options - options for broadcasting
   * @returns a broadcast response
   */
  async broadcast(txRaw: TxRaw, options?: BroadcastOptions) {
    return this.broadcastArbitrary(
      TxRaw.encode(TxRaw.fromPartial(txRaw)).finish(),
      options
    );
  }

  /**
   * broadcast an arbitrary message in bytes
   */
  async broadcastArbitrary(message: Uint8Array, options?: BroadcastOptions) {
    const result = await this.queryClient.broadcast(message, options);
    return result;
  }

  async signAndBroadcast(
    args: CosmosSignArgs,
    options?: BroadcastOptions
  ): Promise<DeliverTxResponse>;

  async signAndBroadcast(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo: string
  ): Promise<DeliverTxResponse>;

  /**
   * sign and broadcast tx messages
   */
  async signAndBroadcast(
    args: CosmosSignArgs | string,
    messageOrOptions?: BroadcastOptions | EncodeObject[],
    fee?: StdFee | 'auto',
    memo?: string,
    options?: DocOptions
  ): Promise<DeliverTxResponse> {
    if (typeof args === 'string') {
      if (args !== await this.getAddress()) {
        throw new Error('signerAddress is not match');
      }

      return this._signAndBroadcast({
        messages: messageOrOptions as EncodeObject[],
        fee: fee === 'auto' ? undefined : fee as StdFee,
        memo: memo as string,
        options: options as DocOptions
      }, this.broadcastOptions);
    }

    return this._signAndBroadcast(args, messageOrOptions ? messageOrOptions as BroadcastOptions : this.broadcastOptions);
  }

  /**
   * sign and broadcast tx messages
   */
  async _signAndBroadcast(
    { messages, fee, memo, options: signOptions }: CosmosSignArgs,
    options?: BroadcastOptions
  ) {
    const { broadcast } = await this.sign({
      messages,
      fee,
      memo,
      options: signOptions,
    });
    return await broadcast(options);
  }

  /**
   * simulate broadcasting tx messages.
   */
  async simulate({ messages, memo, options }: CosmosSignArgs) {
    const { txBody } = await this.txBuilder.buildTxBody({
      messages,
      memo,
      options,
    });
    const { signerInfo } = await this.txBuilder.buildSignerInfo(
      this.encodedPublicKey,
      options?.sequence ??
      (await this.queryClient.getSequence(await this.getAddress())),
      options?.signMode ?? SignMode.SIGN_MODE_DIRECT
    );

    return await this.simulateByTxBody(txBody, [signerInfo]);
  }

  /**
   * simulate broadcasting txBody.
   */
  async simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]) {
    return await this.queryClient.simulate(txBody, signerInfos);
  }

  /**
   * estimate fee for tx messages.
   */
  async estimateFee({ messages, memo, options }: CosmosSignArgs) {
    const { gasInfo } = await this.simulate({ messages, memo, options });
    if (typeof gasInfo === 'undefined') {
      throw new Error('Fail to estimate gas by simulate tx.');
    }
    return await calculateFee(gasInfo, options, this.queryClient.getChainId);
  }

  /**
   * estimate fee by txBody.
   */
  async estimateFeeByTxBody(
    txBody: TxBody,
    signerInfos: SignerInfo[],
    options?: FeeOptions
  ) {
    const { gasInfo } = await this.simulateByTxBody(txBody, signerInfos);
    if (typeof gasInfo === 'undefined') {
      throw new Error('Fail to estimate gas by simulate tx.');
    }
    return await calculateFee(gasInfo, options, this.queryClient.getChainId);
  }
}
