import {
  Auth,
  BroadcastOptions,
  CreateDocResponse,
  HttpEndpoint,
  IKey,
  SignDocResponse,
  SignResponse,
  StdFee,
  UniSigner,
} from "@interchainjs/types";
import { assertEmpty, BaseSigner, isEmpty } from "@interchainjs/utils";
import deepmerge from "deepmerge";

import { defaultSignerOptions } from "../defaults";
import {
  BroadcastResponse,
  CreateAuthInfo,
  CreateSignerInfo,
  CreateTxBody,
  EncodedMessage,
  Encoder,
  FeeOptions,
  Message,
  QueryClient,
  SignerOptions,
  SignMode,
  SignOptions,
  TimeoutHeightOption,
  TxOptions,
  TxRaw,
} from "../types";
import { toFee } from "./amino";
import { calculateFee } from "./fee";

export abstract class CosmosBaseSigner<
    SignDoc,
    Options extends FeeOptions & SignOptions & TxOptions,
    TxBody = unknown,
    SignerInfo = unknown,
    AuthInfo = unknown,
    Acct = unknown,
  >
  extends BaseSigner
  implements UniSigner<SignDoc, TxRaw, BroadcastResponse>
{
  protected _queryClient?: QueryClient<TxBody, SignerInfo>;
  readonly encoders: Encoder[];
  readonly encodePublicKey: (key: IKey) => EncodedMessage;
  readonly parseAccount: (encodedAccount: EncodedMessage) => Acct;
  readonly parseQueryClient?: (
    endpoint: string | HttpEndpoint
  ) => QueryClient<TxBody, SignerInfo>;
  protected prefix?: string;

  protected readonly constructTxBody: CreateTxBody<TxBody>;
  protected readonly constructSignerInfo: CreateSignerInfo<SignerInfo>;
  protected readonly constructAuthInfo: CreateAuthInfo<AuthInfo, SignerInfo>;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions<TxBody, SignerInfo, AuthInfo, Acct>
  ) {
    super(auth, deepmerge(defaultSignerOptions.base, options));

    this.encoders = encoders;
    this.parseAccount = options?.parseAccount;
    this.encodePublicKey =
      options?.encodePublicKey ?? defaultSignerOptions.encodePublicKey;
    this.prefix = options?.prefix;

    this.constructTxBody = options.constructTxBody;
    this.constructSignerInfo = options.constructSignerInfo;
    this.constructAuthInfo = options.constructAuthInfo;
    this.parseQueryClient = options.parseQueryClient;

    if (!isEmpty(endpoint)) {
      this.setEndpoint(endpoint);
    }
  }

  get encodedPublicKey() {
    return this.encodePublicKey(this.publicKeyHash);
  }

  addEncoders = (encoders: Encoder[]) => {
    this.encoders.push(...encoders);
  };

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

  async getAddress() {
    return await this.queryClient.getAddress();
  }

  setEndpoint(endpoint: string | HttpEndpoint) {
    this._queryClient = this.parseQueryClient(endpoint);
    this._queryClient.setAccountParser(this.parseAccount);
  }

  get queryClient() {
    assertEmpty(this._queryClient);
    return this._queryClient;
  }

  /**
   * convert relative timeoutHeight to absolute timeoutHeight
   */
  protected async toAbsoluteTimeoutHeight(
    timeoutHeight?: TimeoutHeightOption
  ): Promise<{ type: "absolute"; value: bigint } | undefined> {
    return isEmpty(timeoutHeight)
      ? void 0
      : {
          type: "absolute",
          value:
            timeoutHeight.type === "absolute"
              ? timeoutHeight.value
              : (await this.queryClient.getLatestBlockHeight()) +
                timeoutHeight.value,
        };
  }

  /**
   * createTransaction without signing
   */
  async createTxRaw(
    messages: Message[],
    signMode: SignMode,
    fee?: StdFee,
    memo?: string,
    options?: Options
  ) {
    const { value: txBody, encode } = this.constructTxBody({
      messages,
      getEncoder: this.getEncoder,
      memo,
      options: {
        ...options,
        timeoutHeight: await this.toAbsoluteTimeoutHeight(
          options?.timeoutHeight
        ),
      },
    });

    const { value: signerInfo } = this.constructSignerInfo({
      publicKey: this.encodePublicKey(this.publicKey),
      sequence: options?.sequence ?? (await this.queryClient.getSequence()),
      signMode,
    });

    let stdFee: StdFee;
    if (fee) {
      stdFee = fee;
    } else {
      const { gasInfo } = await this.simulate(txBody, [signerInfo]);
      if (typeof gasInfo === "undefined") {
        throw new Error("Fail to estimate gas by simulate tx.");
      }
      await calculateFee(gasInfo, options, this.queryClient.getChainId);
    }

    const txRaw = TxRaw.fromPartial({
      bodyBytes: encode(),
      authInfoBytes: this.constructAuthInfo({
        signerInfos: [signerInfo],
        fee: toFee(stdFee),
      }).encode(),
      signatures: [],
    });
    return { txRaw, fee: stdFee };
  }

  abstract signDoc: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
  abstract createDoc(
    messages: Message[],
    fee: StdFee,
    memo?: string,
    options?: Options
  ): Promise<CreateDocResponse<SignDoc, TxRaw>>;

  async sign(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: Options
  ): Promise<SignResponse<SignDoc, TxRaw, BroadcastResponse>> {
    const created = await this.createDoc(messages, fee, memo, options);
    const { signature, signDoc } = await this.signDoc(created.signDoc);
    const txRawCompleted = TxRaw.fromPartial({
      ...created.tx,
      signatures: [signature.value],
    });

    return {
      signature,
      signDoc,
      tx: txRawCompleted,
      broadcast: async (options?: BroadcastOptions) => {
        return this.broadcast(txRawCompleted, options);
      },
    };
  }

  async broadcast(txRaw: TxRaw, options?: BroadcastOptions) {
    return this.broadcastArbitrary(
      TxRaw.encode(TxRaw.fromPartial(txRaw)).finish(),
      options
    );
  }

  async broadcastArbitrary(message: Uint8Array, options?: BroadcastOptions) {
    const result = await this.queryClient.broadcast(message, options);
    return result;
  }

  async signAndBroadcast(
    messages: Message[],
    fee?: StdFee,
    memo?: string,
    options?: Options & BroadcastOptions
  ) {
    const { broadcast } = await this.sign(messages, fee, memo, options);
    return await broadcast(options);
  }

  async simulate(txBody: TxBody, signerInfos: SignerInfo[]) {
    return await this.queryClient.simulate(txBody, signerInfos);
  }

  async estimateFee(
    txBody: TxBody,
    signerInfos: SignerInfo[],
    options?: FeeOptions
  ) {
    const { gasInfo } = await this.simulate(txBody, signerInfos);
    if (typeof gasInfo === "undefined") {
      throw new Error("Fail to estimate gas by simulate tx.");
    }
    return await calculateFee(gasInfo, options, this.queryClient.getChainId);
  }
}
