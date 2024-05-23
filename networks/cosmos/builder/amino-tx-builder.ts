import { SignMode } from "@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing";

import { type AminoSignerBase } from "../amino";
import { BaseCosmosTxBuilder } from "../base";
import { BaseCosmosTxBuilderContext } from "../base/builder-context";
import { CosmosAminoDoc, CosmosSignArgs } from "../types";
import { encodeStdSignDoc, toAminoMsgs } from "../utils";

export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
  constructor(protected ctx: BaseCosmosTxBuilderContext<AminoSignerBase>) {
    super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
  }

  async buildDoc({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<CosmosAminoDoc> {
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
      msgs: toAminoMsgs(messages, this.ctx.signer.getConverterFromTypeUrl),
      memo: memo ?? "",
    };
    return signDoc;
  }

  async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
    return encodeStdSignDoc(doc);
  }
}
