import { BaseAccount } from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";
import { SignMode } from "@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing";
import {
  SignerInfo,
  TxBody,
  TxRaw,
} from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";
import {
  Auth,
  BaseSigner,
  BroadcastOptions,
  HttpEndpoint,
  IKey,
  SignResponse,
  StdFee,
} from "@interchainjs/types";
import { assertEmpty, isEmpty } from "@interchainjs/utils";

import { defaultSignerOptions } from "../defaults";
import { RpcClient } from "../query/rpc";
import {
  BroadcastResponse,
  CosmosSignArgs,
  DocOptions,
  EncodedMessage,
  Encoder,
  FeeOptions,
  Message,
  QueryClient,
  SignerOptions,
  TimeoutHeightOption,
  UniCosmosBaseSigner,
} from "../types";
import { toFee } from "./amino";
import {
  constructAuthInfo,
  constructSignerInfo,
  constructTxBody,
} from "./direct";
import { calculateFee } from "./fee";

export abstract class CosmosBaseSigner<SignDoc, Options extends DocOptions>
  extends BaseSigner
  implements UniCosmosBaseSigner<SignDoc>
{
  protected _queryClient?: QueryClient;
  readonly encoders: Encoder[];
  readonly encodePublicKey: (key: IKey) => EncodedMessage;
  readonly parseAccount: (encodedAccount: EncodedMessage) => BaseAccount;
  protected prefix?: string;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    super(auth, { ...options, ...defaultSignerOptions });
    this.encoders = encoders;
    this.parseAccount =
      options?.parseAccount ?? defaultSignerOptions.parseAccount;
    this.encodePublicKey =
      options?.encodePublicKey ?? defaultSignerOptions.encodePublicKey;
    this.prefix = options?.prefix;
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
    this._queryClient = new RpcClient(
      endpoint,
      this.publicKeyHash,
      this.prefix
    );
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
      authInfoBytes: constructAuthInfo([signerInfo], toFee(stdFee)).encode(),
      signatures: [],
    });
    return { txRaw, fee: stdFee };
  }

  // abstract signDoc: (doc: SignDoc) => Promise<SignDocResponse<SignDoc>>;
  // abstract createDoc(
  //   messages: Message[],
  //   fee: StdFee,
  //   memo?: string,
  //   options?: Options
  // ): Promise<CreateDocResponse<SignDoc, TxRaw>>;

  async sign({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<SignResponse<TxRaw, SignDoc, BroadcastResponse>> {
    // const created = await this.createDoc(messages, fee, memo, options);
    // const { signature, signDoc } = await this.signDoc(created.signDoc);
    // const txRawCompleted = TxRaw.fromPartial({
    //   ...created.tx,
    //   signatures: [signature.value],
    // });
    // return {
    //   signature,
    //   signDoc,
    //   tx: txRawCompleted,
    //   broadcast: async (options?: BroadcastOptions) => {
    //     return this.broadcast(txRawCompleted, options);
    //   },
    // };

    throw new Error("Not implemented yet");
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
