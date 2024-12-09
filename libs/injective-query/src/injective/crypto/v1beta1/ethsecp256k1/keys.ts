import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKey {
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey";
  value: Uint8Array;
}
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKeyAmino {
  key: string;
}
export interface PubKeyAminoMsg {
  type: "injective/PubKeyEthSecp256k1";
  value: PubKeyAmino;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKey {
  key: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PrivKey";
  value: Uint8Array;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKeyAmino {
  key: string;
}
export interface PrivKeyAminoMsg {
  type: "injective/PrivKeyEthSecp256k1";
  value: PrivKeyAmino;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
  aminoType: "injective/PubKeyEthSecp256k1",
  is(o: any): o is PubKey {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is PubKeyAmino {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "injective/PubKeyEthSecp256k1",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PubKey.typeUrl, PubKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PubKey.aminoType, PubKey.typeUrl);
function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PrivKey",
  aminoType: "injective/PrivKeyEthSecp256k1",
  is(o: any): o is PrivKey {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is PrivKeyAmino {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "injective/PrivKeyEthSecp256k1",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PrivKey.typeUrl, PrivKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PrivKey.aminoType, PrivKey.typeUrl);