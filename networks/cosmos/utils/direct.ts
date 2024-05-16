import { TelescopeGeneratedType } from "@interchainjs/types";
import { assertEmpty } from "@interchainjs/utils";

import { Decoder, Encoder } from "../types";

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
