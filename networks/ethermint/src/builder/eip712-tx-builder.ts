import { hexConcat } from '@ethersproject/bytes';
import { _TypedDataEncoder } from '@ethersproject/hash';
import { BaseCosmosTxBuilder } from '@interchainjs/cosmos/base';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';
import { SignMode } from '@interchainjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { TxRaw } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { Eip712Types } from '@interchainjs/types';
import { fromHex } from '@interchainjs/utils';

import {
  defaultDomainOptions,
  defaultEip712Types,
  defaultTimeoutHeight,
} from '../defaults';
import { type Eip712SignerBase } from '../eip712';
import { InjectiveEip712Doc, InjectiveEip712SignArgs } from '../types';
import { toEthTypes, updateDomain } from '../utils';

export class Eip712TxBuilder extends BaseCosmosTxBuilder<InjectiveEip712Doc> {
  constructor(protected ctx: BaseCosmosTxBuilderContext<Eip712SignerBase>) {
    super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
  }

  async buildDoc(
    { messages, fee, memo, options }: InjectiveEip712SignArgs,
    rxRaw: Partial<TxRaw>
  ): Promise<InjectiveEip712Doc> {
    messages.forEach((msg) => {
      if (msg.typeUrl !== messages[0].typeUrl) {
        throw new Error("Doesn't support multiple message types");
      }
    });

    const timeoutHeight = await this.ctx.signer.toAbsoluteTimeoutHeight(
      options?.timeoutHeight ?? defaultTimeoutHeight
    );

    const aminoSignDoc = await this.ctx.signer.aminoSigner.txBuilder.buildDoc(
      {
        messages,
        fee,
        memo,
        options: {
          ...options,
          timeoutHeight,
          signMode: options?.signMode ?? SignMode.SIGN_MODE_DIRECT,
          extensionOptions: [
            ...(options?.extensionOptions ?? []),
            {
              typeUrl: '/injective.types.v1beta1.ExtensionOptionsWeb3Tx',
              value: new Uint8Array([8, 1]),
            },
          ],
        },
      },
      rxRaw
    );

    const signDoc: InjectiveEip712Doc = {
      primaryType: defaultEip712Types.primaryType,
      domain: updateDomain(defaultDomainOptions, options),
      types: {
        ...defaultEip712Types.types,
        ...toEthTypes(aminoSignDoc.msgs[0].value),
      },
      message: {
        ...aminoSignDoc,
        timeout_height: timeoutHeight.value.toString(),
        fee: {
          amount: aminoSignDoc.fee.amount,
          gas: aminoSignDoc.fee.gas,
          feePayer: aminoSignDoc.fee.payer,
        },
      },
    };
    return signDoc;
  }

  async buildDocBytes(doc: InjectiveEip712Doc): Promise<Uint8Array> {
    const domainTypes: Eip712Types = {};
    const restTypes: Eip712Types = {};
    Object.entries(doc.types).forEach(([key, value]) => {
      if (key === 'EIP712Domain') {
        domainTypes[key] = value;
      } else {
        restTypes[key] = value;
      }
    });
    const encoded = hexConcat([
      '0x1901',
      _TypedDataEncoder.from(domainTypes).hash(doc.domain),
      _TypedDataEncoder.from(restTypes).hash(doc.message),
    ]);

    return fromHex(encoded);
  }
}
