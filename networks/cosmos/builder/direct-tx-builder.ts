import {
  SignDoc,
  SignerInfo,
  TxBody,
  TxRaw,
} from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx";

import { BaseCosmosTxBuilder } from "../base";
import { CosmosDirectDoc, CosmosSignArgs, EncodedMessage, Encoder } from "../types";
import { SignMode } from "@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing";
import { IKey } from "@interchainjs/types";
import { SimulateResponse } from "@interchainjs/cosmos-types/cosmos/tx/v1beta1/service";

export class DirectTxBuilder extends BaseCosmosTxBuilder<CosmosDirectDoc> {
  constructor(
    public signMode: SignMode,
    public publicKey: IKey,
    public chainId: string,
    protected encoderParser: (typeUrl: string) => Encoder,
    protected getSequence: () => Promise<bigint>,
    protected encodePublicKey: (key: IKey) => EncodedMessage,
    protected simulate: (
      txBody: TxBody,
      signerInfos: SignerInfo[]
    ) => Promise<SimulateResponse>,
    protected signArbitrary: (data: Uint8Array) => IKey
  ) {
    super(signMode, publicKey, chainId, encoderParser, getSequence, encodePublicKey, simulate, signArbitrary);
  }

  async buildDoc(
    { options }: CosmosSignArgs,
    txRaw: Partial<TxRaw>
  ): Promise<CosmosDirectDoc> {
    const signDoc: CosmosDirectDoc = SignDoc.fromPartial({
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: txRaw.authInfoBytes,
      chainId: options?.chainId ?? this.chainId,
      accountNumber:
        options?.accountNumber ?? this.,
    });
    return signDoc;
  }

  buildDocBytes(doc: CosmosDirectDoc): Promise<Uint8Array> {}
}
