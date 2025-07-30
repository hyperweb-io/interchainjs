import { Bip39, Random } from '@interchainjs/crypto';
import { AminoConverter, Encoder } from './types/signing-client';
import { TelescopeGeneratedCodec } from '@interchainjs/types';
import { assertEmpty } from '@interchainjs/utils';

export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}

/**
 * from telescope generated codec to AminoConverter
 */
export function toConverter(
  generated: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)
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
  ...generatedArray: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]
): AminoConverter[] {
  return generatedArray.map((generated) => toConverter(generated));
}

/**
 * from telescope generated codec to encoder
 */
export function toEncoder(
  generated: (Encoder | TelescopeGeneratedCodec<any, any, any>)
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
  ...generatedArray: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]
): Encoder[] {
  return generatedArray.map((generated) => toEncoder(generated));
}