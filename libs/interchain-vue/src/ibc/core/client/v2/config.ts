import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
 * for a given client.
 * If it is set, then only relayers in the allow list can send v2 messages
 * If it is not set, then the client allows permissionless relaying of v2 messages
 * @name Config
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.Config
 */
export interface Config {
  /**
   * allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client
   */
  allowedRelayers: string[];
}
export interface ConfigProtoMsg {
  typeUrl: "/ibc.core.client.v2.Config";
  value: Uint8Array;
}
/**
 * Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
 * for a given client.
 * If it is set, then only relayers in the allow list can send v2 messages
 * If it is not set, then the client allows permissionless relaying of v2 messages
 * @name ConfigAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.Config
 */
export interface ConfigAmino {
  /**
   * allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client
   */
  allowed_relayers: string[];
}
export interface ConfigAminoMsg {
  type: "cosmos-sdk/Config";
  value: ConfigAmino;
}
function createBaseConfig(): Config {
  return {
    allowedRelayers: []
  };
}
/**
 * Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
 * for a given client.
 * If it is set, then only relayers in the allow list can send v2 messages
 * If it is not set, then the client allows permissionless relaying of v2 messages
 * @name Config
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.Config
 */
export const Config = {
  typeUrl: "/ibc.core.client.v2.Config",
  aminoType: "cosmos-sdk/Config",
  is(o: any): o is Config {
    return o && (o.$typeUrl === Config.typeUrl || Array.isArray(o.allowedRelayers) && (!o.allowedRelayers.length || typeof o.allowedRelayers[0] === "string"));
  },
  isAmino(o: any): o is ConfigAmino {
    return o && (o.$typeUrl === Config.typeUrl || Array.isArray(o.allowed_relayers) && (!o.allowed_relayers.length || typeof o.allowed_relayers[0] === "string"));
  },
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedRelayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedRelayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Config>): Config {
    const message = createBaseConfig();
    message.allowedRelayers = object.allowedRelayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    message.allowedRelayers = object.allowed_relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    if (message.allowedRelayers) {
      obj.allowed_relayers = message.allowedRelayers.map(e => e);
    } else {
      obj.allowed_relayers = message.allowedRelayers;
    }
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message: Config): ConfigAminoMsg {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.Config",
      value: Config.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};