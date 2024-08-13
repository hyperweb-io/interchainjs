import { Coin } from '@interchainjs/cosmos-types/cosmos/base/v1beta1/coin';
import { Fee } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import {
  StdFee,
  StdSignDoc,
  TelescopeGeneratedType,
} from '@interchainjs/types';
import { assertEmpty, fromUtf8 } from '@interchainjs/utils';

import { AminoConverter, AminoMessage, Message } from '../types';

function sortKey<T>(target: T): T {
  if (target === null || typeof target !== 'object') {
    return target;
  }
  if (Array.isArray(target)) {
    return target.map(sortKey) as T;
  }
  const sortedObj: Record<string, any> = {};
  Object.keys(target)
    .sort()
    .forEach((key) => {
      sortedObj[key] = sortKey((target as Record<string, any>)[key]);
    });
  return sortedObj as T;
}

/**
 * Encode the StdSignDoc to bytes for amino signing
 */
export function encodeStdSignDoc(doc: StdSignDoc): Uint8Array {
  const sorted = sortKey(doc);
  const str = JSON.stringify(sorted);
  const serialized = str
    .replaceAll('&', '\\u0026')
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e');
  return fromUtf8(serialized);
}

/**
 * from Amino messages to protobuf messages
 */
export function toMessages(
  aminoMsgs: AminoMessage[],
  getConverter: (aminoType: string) => AminoConverter
): Message[] {
  return aminoMsgs.map(({ type, value }) => {
    const { fromAmino, typeUrl } = getConverter(type);
    return {
      typeUrl,
      value: fromAmino(value),
    };
  });
}

/**
 * from protobuf messages to Amino messages
 */
export function toAminoMsgs(
  messages: Message[],
  getConverter: (typeUrl: string) => AminoConverter
): AminoMessage[] {
  return messages.map(({ typeUrl, value }) => {
    const { toAmino, aminoType } = getConverter(typeUrl);
    return {
      type: aminoType,
      value: toAmino(value),
    };
  });
}

/**
 * Convert StdFee to Fee
 */
export function toFee(fee: StdFee): Fee {
  return Fee.fromPartial({
    amount: fee.amount.map((coin) => Coin.fromPartial(coin)),
    gasLimit: BigInt(fee.gas),
    payer: fee.payer,
    granter: fee.granter,
  });
}

/**
 * Convert Fee to StdFee
 */
export function toStdFee(fee: Fee): StdFee {
  return {
    amount: fee.amount,
    gas: fee.gasLimit.toString(),
    granter: fee.granter === '' ? void 0 : fee.granter,
    payer: fee.payer === '' ? void 0 : fee.payer,
  };
}

/**
 * from telescope generated codec to AminoConverter
 */
export function toConverter(
  generated: TelescopeGeneratedType<any, any, any>
): AminoConverter {
  assertEmpty(generated.aminoType);
  return {
    aminoType: generated.aminoType,
    typeUrl: generated.typeUrl,
    fromAmino: (data: any) => {
      assertEmpty(generated.fromAmino);
      return generated.fromAmino(data);
    },
    toAmino: (data: any) => {
      assertEmpty(generated.toAmino);
      return generated.toAmino(data);
    },
  };
}

/**
 * from telescope generated codecs to AminoConverters
 */
export function toConverters(
  ...generatedArray: TelescopeGeneratedType<any, any, any>[]
): AminoConverter[] {
  return generatedArray.map((generated) => toConverter(generated));
}
