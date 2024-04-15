import {
  Auth,
  HttpEndpoint,
  BroadcastOptions,
  UniSigner,
  SignDocResponse,
  SignResponse,
  CreateDocResponse,
  StdFee,
  IKey,
} from "@interchainjs/types";
import { BaseSigner, assertEmpty, isEmpty } from "@interchainjs/utils";
import { defaultSignerOptions } from "../defaults";
import {
  EncodedMessage,
  Encoder,
  FeeOptions,
  Message,
  QueryClient,
  SignMode,
  SignerInfo,
  SignOptions,
  TimeoutHeightOption,
  TxBody,
  TxOptions,
  TxRaw,
  SignerOptions,
} from "../types";
import { RpcClient } from "../query/rpc";
import {
  constructAuthInfo,
  constructSignerInfo,
  constructTxBody,
} from "./direct";
import { toFee } from "./amino";
import { calculateFee } from "./fee";
import { BaseAccount } from "../codegen/cosmos/auth/v1beta1/auth";

export abstract class CosmosBaseSigner<
  SignDoc,
  Options extends FeeOptions & SignOptions & TxOptions
> extends BaseSigner implements UniSigner<SignDoc, TxRaw> {
  protected _queryClient?: QueryClient;
  readonly encoders: Encoder[];
  readonly encodePublicKey: (key: IKey) => EncodedMessage;
  readonly parseAccount: (encodedAccount: EncodedMessage) => BaseAccount;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, { ...options, ...defaultSignerOptions });
    if (!isEmpty(endpoint)) {
      this.setEndpoint(endpoint);
    }
    this.encoders = encoders;
    this.parseAccount =
      options?.parseAccount ?? defaultSignerOptions.parseAccount;
    this.encodePublicKey =
      options?.encodePublicKey ?? defaultSignerOptions.encodePublicKey;
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
    this._queryClient = new RpcClient(endpoint, this.publicKeyHash);
    (this._queryClient as RpcClient).setAccountParser(this.parseAccount);
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
    const { txBody, encode } = constructTxBody(
      messages,
      this.getEncoder,
      memo,
      {
        ...options,
        timeoutHeight: await this.toAbsoluteTimeoutHeight(
          options?.timeoutHeight
        ),
      }
    );

    const { signerInfo } = constructSignerInfo(
      this.encodePublicKey(this.publicKey),
      options?.sequence ?? (await this.queryClient.getSequence()),
      signMode
    );

    const { gasInfo } = await this.simulate(txBody, [signerInfo]);
    if (typeof gasInfo === "undefined") {
      throw new Error("Fail to estimate gas by simulate tx.");
    }

    const stdFee =
      fee ??
      (await calculateFee(gasInfo, options, this.queryClient.getChainId));

    const txRaw = TxRaw.fromPartial({
      bodyBytes: encode(),
      authInfoBytes: constructAuthInfo([signerInfo], toFee(stdFee)).encode(),
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
  ): Promise<SignResponse<SignDoc, TxRaw>> {
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
}
