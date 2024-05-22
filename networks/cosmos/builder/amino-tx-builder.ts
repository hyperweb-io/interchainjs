import { SignMode } from "@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing";

import { BaseCosmosTxBuilder, CosmosBaseSigner } from "../base";
import { BaseCosmosTxBuilderContext } from "../base/builder-context";
import { AminoConverter, CosmosAminoDoc, CosmosSignArgs } from "../types";
import { encodeStdSignDoc, toAminoMsgs } from "../utils";

export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
  constructor(
    protected ctx: BaseCosmosTxBuilderContext<CosmosBaseSigner<CosmosAminoDoc>>
  ) {
    super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
  }

  async buildDoc({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<CosmosAminoDoc> {
    const { getConverterFromTypeUrl } = this.ctx.signer as {
      getConverterFromTypeUrl: (typeUrl: string) => AminoConverter;
    };

    const signDoc: CosmosAminoDoc = {
      chain_id:
        options?.chainId ?? (await this.ctx.signer.queryClient.getChainId()),
      account_number: (
        options?.accountNumber ??
        (await this.ctx.signer.queryClient.getAccountNumber())
      ).toString(),
      sequence: (
        options?.sequence ?? (await this.ctx.signer.queryClient.getSequence())
      ).toString(),
      fee,
      msgs: toAminoMsgs(messages, this.getConverterFromTypeUrl),
      memo: memo ?? "",
    };
    return signDoc;
  }

  async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
    return encodeStdSignDoc(doc);
  }
}
