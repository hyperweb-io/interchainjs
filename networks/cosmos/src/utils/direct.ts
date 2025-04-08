

import { AuthInfo, Fee, SignerInfo } from '@interchainjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { TelescopeGeneratedType } from '@interchainjs/types';
import { assertEmpty } from '@interchainjs/utils';

import { Decoder, Encoder } from '../types';


export function constructAuthInfo(signerInfos: SignerInfo[], fee: Fee) {
  const authInfo = AuthInfo.fromPartial({ signerInfos, fee });
  return {
    authInfo,
    encode: () => AuthInfo.encode(authInfo).finish(),
  };
}

/**
 * from telescope generated codec to encoder
 */
export function toEncoder(
  generated: (Encoder | TelescopeGeneratedType<any, any, any>)
): Encoder {
  return {
    typeUrl: generated.typeUrl,
    fromPartial: generated.fromPartial,
    encode: (data: any) => {
      assertEmpty(generated.encode);
      const encoded = generated.encode(generated.fromPartial(data));
      return encoded.finish ? encoded.finish() : encoded;
    },
  };
}

/**
 * from telescope generated codecs to encoders
 */
export function toEncoders(
  ...generatedArray: (Encoder | TelescopeGeneratedType<any, any, any>)[]
): Encoder[] {
  return generatedArray.map((generated) => toEncoder(generated));
}

/**
 * from telescope generated codec to decoder
 */
export function toDecoder(
  generated: (Decoder | TelescopeGeneratedType<any, any, any>)
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
