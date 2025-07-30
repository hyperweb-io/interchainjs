import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * CounterpartyInfo defines the key that the counterparty will use to message our client
 * @name CounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.CounterpartyInfo
 */
export interface CounterpartyInfo {
  /**
   * merkle prefix key is the prefix that ics provable keys are stored under
   */
  merklePrefix: Uint8Array[];
  /**
   * client identifier is the identifier used to send packet messages to our client
   */
  clientId: string;
}
export interface CounterpartyInfoProtoMsg {
  typeUrl: "/ibc.core.client.v2.CounterpartyInfo";
  value: Uint8Array;
}
/**
 * CounterpartyInfo defines the key that the counterparty will use to message our client
 * @name CounterpartyInfoAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.CounterpartyInfo
 */
export interface CounterpartyInfoAmino {
  /**
   * merkle prefix key is the prefix that ics provable keys are stored under
   */
  merkle_prefix: string[];
  /**
   * client identifier is the identifier used to send packet messages to our client
   */
  client_id: string;
}
export interface CounterpartyInfoAminoMsg {
  type: "cosmos-sdk/CounterpartyInfo";
  value: CounterpartyInfoAmino;
}
function createBaseCounterpartyInfo(): CounterpartyInfo {
  return {
    merklePrefix: [],
    clientId: ""
  };
}
/**
 * CounterpartyInfo defines the key that the counterparty will use to message our client
 * @name CounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.CounterpartyInfo
 */
export const CounterpartyInfo = {
  typeUrl: "/ibc.core.client.v2.CounterpartyInfo",
  aminoType: "cosmos-sdk/CounterpartyInfo",
  is(o: any): o is CounterpartyInfo {
    return o && (o.$typeUrl === CounterpartyInfo.typeUrl || Array.isArray(o.merklePrefix) && (!o.merklePrefix.length || o.merklePrefix[0] instanceof Uint8Array || typeof o.merklePrefix[0] === "string") && typeof o.clientId === "string");
  },
  isAmino(o: any): o is CounterpartyInfoAmino {
    return o && (o.$typeUrl === CounterpartyInfo.typeUrl || Array.isArray(o.merkle_prefix) && (!o.merkle_prefix.length || o.merkle_prefix[0] instanceof Uint8Array || typeof o.merkle_prefix[0] === "string") && typeof o.client_id === "string");
  },
  encode(message: CounterpartyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.merklePrefix) {
      writer.uint32(10).bytes(v!);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CounterpartyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterpartyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merklePrefix.push(reader.bytes());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CounterpartyInfo>): CounterpartyInfo {
    const message = createBaseCounterpartyInfo();
    message.merklePrefix = object.merklePrefix?.map(e => e) || [];
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: CounterpartyInfoAmino): CounterpartyInfo {
    const message = createBaseCounterpartyInfo();
    message.merklePrefix = object.merkle_prefix?.map(e => bytesFromBase64(e)) || [];
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: CounterpartyInfo): CounterpartyInfoAmino {
    const obj: any = {};
    if (message.merklePrefix) {
      obj.merkle_prefix = message.merklePrefix.map(e => base64FromBytes(e));
    } else {
      obj.merkle_prefix = message.merklePrefix;
    }
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: CounterpartyInfoAminoMsg): CounterpartyInfo {
    return CounterpartyInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CounterpartyInfo): CounterpartyInfoAminoMsg {
    return {
      type: "cosmos-sdk/CounterpartyInfo",
      value: CounterpartyInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: CounterpartyInfoProtoMsg): CounterpartyInfo {
    return CounterpartyInfo.decode(message.value);
  },
  toProto(message: CounterpartyInfo): Uint8Array {
    return CounterpartyInfo.encode(message).finish();
  },
  toProtoMsg(message: CounterpartyInfo): CounterpartyInfoProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.CounterpartyInfo",
      value: CounterpartyInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};