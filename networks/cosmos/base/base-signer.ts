import { BaseAccount } from "@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth";
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
} from "@interchainjs/types";
import { assertEmpty, isEmpty } from "@interchainjs/utils";

import { defaultSignerOptions } from "../defaults";
import { RpcClient } from "../query/rpc";
import {
  BroadcastResponse,
  CosmosSignArgs,
  EncodedMessage,
  Encoder,
  FeeOptions,
  QueryClient,
  SignerOptions,
  TimeoutHeightOption,
  UniCosmosBaseSigner,
} from "../types";
import { calculateFee } from "../utils/fee";
import { BaseCosmosTxBuilder } from "./tx-builder";

export abstract class CosmosBaseSigner<SignDoc>
  extends BaseSigner
  implements UniCosmosBaseSigner<SignDoc>
{
  protected _queryClient?: QueryClient;
  readonly encoders: Encoder[];
  readonly _encodePublicKey: (key: IKey) => EncodedMessage;
  readonly parseAccount: (encodedAccount: EncodedMessage) => BaseAccount;
  protected prefix?: string;
  protected txBuilder: BaseCosmosTxBuilder<SignDoc>;

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
    this._encodePublicKey =
      options?.encodePublicKey ?? defaultSignerOptions.encodePublicKey;
    this.prefix = options?.prefix;
    if (!isEmpty(endpoint)) {
      this.setEndpoint(endpoint);
    }

    this.txBuilder = this.getTxBuilder();
  }

  abstract getTxBuilder(): BaseCosmosTxBuilder<SignDoc>;

  public get encodedPublicKey() {
    return this._encodePublicKey(this.publicKeyHash);
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

  async sign(
    args: CosmosSignArgs
  ): Promise<SignResponse<TxRaw, SignDoc, BroadcastResponse>> {
    const signed = await this.txBuilder.buildSignedTxDoc(args);

    return {
      ...signed,
      broadcast: async (options?: BroadcastOptions) => {
        return this.broadcast(signed.tx, options);
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
