import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import {
  AuthInfo,
  Fee,
  SignerInfo,
  TxBody,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import {
  BaseSigner,
  IKey,
  ISigBuilder,
  ITxBuilder,
  StdFee,
} from '@interchainjs/types';

import {
  CosmosCreateDocResponse,
  CosmosSignArgs,
  DocOptions,
  EncodedMessage,
} from '../types';
import { calculateFee, toFee } from '../utils';
import { CosmosBaseSigner } from './base-signer';
import { BaseCosmosTxBuilderContext } from './builder-context';

export abstract class BaseCosmosSigBuilder<SignDoc>
implements ISigBuilder<SignDoc, IKey>
{
  constructor(protected ctx: BaseCosmosTxBuilderContext<BaseSigner>) {}

  abstract buildDocBytes(doc: SignDoc): Promise<Uint8Array>;
  async buildSignature(doc: SignDoc): Promise<IKey> {
    // get doc bytes
    const docBytes = await this.buildDocBytes(doc);

    // sign signature to the doc bytes
    return this.ctx.signer.signArbitrary(docBytes);
  }
}

/**
 * BaseCosmosTxBuilder is a helper class to build the Tx and signDoc
 */
export abstract class BaseCosmosTxBuilder<SignDoc>
  extends BaseCosmosSigBuilder<SignDoc>
  implements
    ITxBuilder<CosmosSignArgs, CosmosCreateDocResponse<SignDoc>>,
    ISigBuilder<SignDoc, IKey>
{
  constructor(
    public signMode: SignMode,
    protected ctx: BaseCosmosTxBuilderContext<CosmosBaseSigner<SignDoc>>
  ) {
    super(ctx);
  }

  abstract buildDoc(
    args: CosmosSignArgs,
    rxRaw: Partial<TxRaw>
  ): Promise<SignDoc>;

  abstract buildDocBytes(doc: SignDoc): Promise<Uint8Array>;

  async buildTxRaw({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<Partial<TxRaw> & { fee: StdFee }> {
    const { txBody, encode: txBodyEncode } = await this.buildTxBody({
      messages,
      memo,
      options,
    });
    const { signerInfo } = await this.buildSignerInfo(
      this.ctx.signer.encodedPublicKey,
      options?.sequence ?? (await this.ctx.signer.queryClient.getSequence()),
      this.signMode
    );

    const stdFee = await this.getFee(fee, txBody, [signerInfo], options);

    return {
      bodyBytes: txBodyEncode(),
      authInfoBytes: (
        await this.buildAuthInfo([signerInfo], toFee(stdFee))
      ).encode(),
      fee: stdFee,
    };
  }

  async buildTxBody({ messages, memo, options }: CosmosSignArgs): Promise<{
    txBody: TxBody;
    encode: () => Uint8Array;
  }> {
    if (options?.timeoutHeight?.type === 'relative') {
      throw new Error(
        "timeoutHeight type in function `constructTxBody` shouldn't be `relative`. Please update it to `absolute` value before calling this function."
      );
    }
    const encoded = messages.map(({ typeUrl, value }) => {
      return {
        typeUrl,
        value: this.ctx.signer.getEncoder(typeUrl).encode(value),
      };
    });
    const txBody = TxBody.fromPartial({
      messages: encoded,
      memo,
      timeoutHeight: options?.timeoutHeight?.value,
      extensionOptions: options?.extensionOptions,
      nonCriticalExtensionOptions: options?.nonCriticalExtensionOptions,
    });
    return {
      txBody,
      encode: () => TxBody.encode(txBody).finish(),
    };
  }

  async buildSignerInfo(
    publicKey: EncodedMessage,
    sequence: bigint,
    signMode: SignMode
  ): Promise<{
    signerInfo: SignerInfo;
    encode: () => Uint8Array;
  }> {
    const signerInfo = SignerInfo.fromPartial({
      publicKey,
      sequence,
      modeInfo: { single: { mode: signMode } },
    });

    return { signerInfo, encode: () => SignerInfo.encode(signerInfo).finish() };
  }

  async buildAuthInfo(
    signerInfos: SignerInfo[],
    fee: Fee
  ): Promise<{
    authInfo: AuthInfo;
    encode: () => Uint8Array;
  }> {
    const authInfo = AuthInfo.fromPartial({ signerInfos, fee });

    return { authInfo, encode: () => AuthInfo.encode(authInfo).finish() };
  }

  async getFee(
    fee: StdFee,
    txBody: TxBody,
    signerInfos: SignerInfo[],
    options: DocOptions
  ) {
    if (fee) {
      return fee;
    }
    const { gasInfo } = await this.ctx.signer.simulate(txBody, signerInfos);
    if (typeof gasInfo === 'undefined') {
      throw new Error('Fail to estimate gas by simulate tx.');
    }
    await calculateFee(gasInfo, options, async () => {
      return this.ctx.signer.queryClient.getChainId();
    });
  }

  async buildSignedTxDoc({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<CosmosCreateDocResponse<SignDoc>> {
    // create partial TxRaw
    const txRaw = await this.buildTxRaw({ messages, fee, memo, options });

    // buildDoc
    const doc = await this.buildDoc({ messages, fee, memo, options }, txRaw);

    // sign signature to the doc bytes
    const signature = await this.buildSignature(doc);

    // build TxRaw
    const signedTxRaw = TxRaw.fromPartial({
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: txRaw.authInfoBytes,
      signatures: [signature.value],
    });

    return {
      tx: signedTxRaw,
      doc: doc,
    };
  }
}
