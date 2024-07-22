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
  IKey,
  isDocAuth,
  SignDocResponse,
  SignerConfig,
  SignResponse,
} from '@interchainjs/types';
import { assertEmpty, isEmpty } from '@interchainjs/utils';

import { defaultSignerOptions } from '../defaults';
import { RpcClient } from '../query/rpc';
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
} from '../types';
import { calculateFee } from '../utils/chain';
import { BaseCosmosSigBuilder, BaseCosmosTxBuilder } from './tx-builder';

export abstract class CosmosDocSigner<SignDoc> extends BaseSigner {
  constructor(auth: Auth, config: SignerConfig) {
    super(auth, config);

    this.txBuilder = this.getTxBuilder();
  }

  txBuilder: BaseCosmosSigBuilder<SignDoc>;
  abstract getTxBuilder(): BaseCosmosSigBuilder<SignDoc>;
  async signDoc(doc: SignDoc): Promise<SignDocResponse<SignDoc>> {
    if (isDocAuth<SignDoc>(this.auth)) {
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

export abstract class CosmosBaseSigner<SignDoc>
  extends CosmosDocSigner<SignDoc>
  implements UniCosmosBaseSigner<SignDoc>
{
  _queryClient?: QueryClient;
  readonly encoders: Encoder[];
  readonly _encodePublicKey: (key: IKey) => EncodedMessage;
  readonly parseAccount: (encodedAccount: EncodedMessage) => BaseAccount;
  prefix?: string;
  account?: IAccount;
  declare txBuilder: BaseCosmosTxBuilder<SignDoc>;

  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
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

  abstract getTxBuilder(): BaseCosmosTxBuilder<SignDoc>;

  public get encodedPublicKey() {
    return this._encodePublicKey(this.publicKey);
  }

  addEncoders = (encoders: Encoder[]) => {
    this.encoders.push(...encoders);
  };

  getPrefix = async () => {
    if (this.prefix) {
      return this.prefix;
    }

    if (this.queryClient) {
      return this.queryClient.getPrefix();
    }

    throw new Error("Can't get prefix because no queryClient is set");
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
    const account = await this.getAccount();

    return account.address;
  }

  abstract getAccount(): Promise<IAccount>;

  setEndpoint(endpoint: string | HttpEndpoint) {
    this._queryClient = new RpcClient(endpoint, this.prefix);
    (this._queryClient as RpcClient).setAccountParser(this.parseAccount);
  }

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

  async simulateByTxBody(txBody: TxBody, signerInfos: SignerInfo[]) {
    return await this.queryClient.simulate(txBody, signerInfos);
  }

  async estimateFee({ messages, memo, options }: CosmosSignArgs) {
    const { gasInfo } = await this.simulate({ messages, memo, options });
    if (typeof gasInfo === 'undefined') {
      throw new Error('Fail to estimate gas by simulate tx.');
    }
    return await calculateFee(gasInfo, options, this.queryClient.getChainId);
  }

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
