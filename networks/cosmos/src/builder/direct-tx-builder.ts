import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import {
  SignDoc,
  TxRaw,
} from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';

import {
  BaseCosmosSigBuilder,
  BaseCosmosTxBuilder,
  CosmosBaseSigner,
} from '../base';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { CosmosDirectDoc, CosmosSignArgs } from '../types';

/**
 * Direct signature builder
 */
export class DirectSigBuilder extends BaseCosmosSigBuilder<CosmosDirectDoc> {
  async buildDocBytes(doc: CosmosDirectDoc): Promise<Uint8Array> {
    return SignDoc.encode(doc).finish();
  }
}

/**
 * Direct transaction builder
 */
export class DirectTxBuilder extends BaseCosmosTxBuilder<CosmosDirectDoc> {
  constructor(
    protected ctx: BaseCosmosTxBuilderContext<CosmosBaseSigner<SignDoc>>
  ) {
    super(SignMode.SIGN_MODE_DIRECT, ctx);
  }

  async buildDoc(
    { options }: CosmosSignArgs,
    txRaw: Partial<TxRaw>
  ): Promise<CosmosDirectDoc> {
    const signDoc: CosmosDirectDoc = SignDoc.fromPartial({
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: txRaw.authInfoBytes,
      chainId:
        options?.chainId ?? (await this.ctx.signer.queryClient.getChainId()),
      accountNumber:
        options?.accountNumber ??
        (await this.ctx.signer.queryClient.getAccountNumber(
          await this.ctx.signer.getAddress()
        )),
    });
    return signDoc;
  }

  async buildDocBytes(doc: CosmosDirectDoc): Promise<Uint8Array> {
    return SignDoc.encode(doc).finish();
  }
}
