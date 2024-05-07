import {
  AuthInfo,
  Fee,
  SignerInfo,
  TxBody,
} from "../codegen/cosmos/tx/v1beta1/tx";
import { Decoder, EncodedMessage, Encoder, Message, TxOptions } from "../types";
import { assertEmpty } from "@interchainjs/utils";
import { SignMode } from "../codegen/cosmos/tx/signing/v1beta1/signing";
import { TelescopeGeneratedType } from "@interchainjs/types";

export function constructTxBody(
  messages: Message[],
  getEncoder: (typeUrl: string) => Encoder,
  memo?: string,
  options?: TxOptions
) {
  if (options?.timeoutHeight?.type === "relative") {
    throw new Error(
      "timeoutHeight type in function `constructTxBody` shouldn't be `relative`. Please update it to `absolute` value before calling this function."
    );
  }
  const encoded = messages.map(({ typeUrl, value }) => {
    return {
      typeUrl,
      value: getEncoder(typeUrl).encode(value),
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

export function constructSignerInfo(
  publicKey: EncodedMessage,
  sequence: bigint,
  signMode: SignMode
) {
  const signerInfo = SignerInfo.fromPartial({
    publicKey,
    sequence,
    modeInfo: { single: { mode: signMode } },
  });

  return {
    signerInfo,
    encode: () => SignerInfo.encode(signerInfo).finish(),
  };
}

export function constructAuthInfo(signerInfos: SignerInfo[], fee: Fee) {
  const authInfo = AuthInfo.fromPartial({ signerInfos, fee });
  return {
    authInfo,
    encode: () => AuthInfo.encode(authInfo).finish(),
  };
}

export function toEncoder(
  generated: TelescopeGeneratedType<any, any, any>
): Encoder {
  return {
    typeUrl: generated.typeUrl,
    fromPartial: generated.fromPartial,
    encode: (data: any) => {
      assertEmpty(generated.encode);
      return generated.encode(generated.fromPartial(data)).finish();
    },
  };
}

export function toEncoders(
  ...generatedArray: TelescopeGeneratedType<any, any, any>[]
): Encoder[] {
  return generatedArray.map((generated) => toEncoder(generated));
}

export function toDecoder(
  generated: TelescopeGeneratedType<any, any, any>
): Decoder {
  return {
    typeUrl: generated.typeUrl,
    fromPartial: generated.fromPartial,
    decode: (data: Uint8Array) => {
      assertEmpty(generated.decode);
      return generated.decode(data);
    },
  };
}
