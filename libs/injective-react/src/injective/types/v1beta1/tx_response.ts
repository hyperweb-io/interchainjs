import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessage {
  header: string;
  data: Uint8Array;
}
export interface TxResponseGenericMessageProtoMsg {
  typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage";
  value: Uint8Array;
}
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 */
export interface TxResponseGenericMessageAmino {
  header: string;
  data: string;
}
export interface TxResponseGenericMessageAminoMsg {
  type: "/injective.types.v1beta1.TxResponseGenericMessage";
  value: TxResponseGenericMessageAmino;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseData {
  messages: TxResponseGenericMessage[];
}
export interface TxResponseDataProtoMsg {
  typeUrl: "/injective.types.v1beta1.TxResponseData";
  value: Uint8Array;
}
/** improvised message to unpack length prefixed messages in tx response data */
export interface TxResponseDataAmino {
  messages: TxResponseGenericMessageAmino[];
}
export interface TxResponseDataAminoMsg {
  type: "/injective.types.v1beta1.TxResponseData";
  value: TxResponseDataAmino;
}
function createBaseTxResponseGenericMessage(): TxResponseGenericMessage {
  return {
    header: "",
    data: new Uint8Array()
  };
}
export const TxResponseGenericMessage = {
  typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
  is(o: any): o is TxResponseGenericMessage {
    return o && (o.$typeUrl === TxResponseGenericMessage.typeUrl || typeof o.header === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is TxResponseGenericMessageAmino {
    return o && (o.$typeUrl === TxResponseGenericMessage.typeUrl || typeof o.header === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: TxResponseGenericMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResponseGenericMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponseGenericMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResponseGenericMessage>): TxResponseGenericMessage {
    const message = createBaseTxResponseGenericMessage();
    message.header = object.header ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxResponseGenericMessageAmino): TxResponseGenericMessage {
    const message = createBaseTxResponseGenericMessage();
    if (object.header !== undefined && object.header !== null) {
      message.header = object.header;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: TxResponseGenericMessage): TxResponseGenericMessageAmino {
    const obj: any = {};
    obj.header = message.header === "" ? undefined : message.header;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResponseGenericMessageAminoMsg): TxResponseGenericMessage {
    return TxResponseGenericMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResponseGenericMessageProtoMsg): TxResponseGenericMessage {
    return TxResponseGenericMessage.decode(message.value);
  },
  toProto(message: TxResponseGenericMessage): Uint8Array {
    return TxResponseGenericMessage.encode(message).finish();
  },
  toProtoMsg(message: TxResponseGenericMessage): TxResponseGenericMessageProtoMsg {
    return {
      typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
      value: TxResponseGenericMessage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResponseGenericMessage.typeUrl, TxResponseGenericMessage);
function createBaseTxResponseData(): TxResponseData {
  return {
    messages: []
  };
}
export const TxResponseData = {
  typeUrl: "/injective.types.v1beta1.TxResponseData",
  is(o: any): o is TxResponseData {
    return o && (o.$typeUrl === TxResponseData.typeUrl || Array.isArray(o.messages) && (!o.messages.length || TxResponseGenericMessage.is(o.messages[0])));
  },
  isAmino(o: any): o is TxResponseDataAmino {
    return o && (o.$typeUrl === TxResponseData.typeUrl || Array.isArray(o.messages) && (!o.messages.length || TxResponseGenericMessage.isAmino(o.messages[0])));
  },
  encode(message: TxResponseData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      TxResponseGenericMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResponseData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(TxResponseGenericMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResponseData>): TxResponseData {
    const message = createBaseTxResponseData();
    message.messages = object.messages?.map(e => TxResponseGenericMessage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TxResponseDataAmino): TxResponseData {
    const message = createBaseTxResponseData();
    message.messages = object.messages?.map(e => TxResponseGenericMessage.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxResponseData): TxResponseDataAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? TxResponseGenericMessage.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object: TxResponseDataAminoMsg): TxResponseData {
    return TxResponseData.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResponseDataProtoMsg): TxResponseData {
    return TxResponseData.decode(message.value);
  },
  toProto(message: TxResponseData): Uint8Array {
    return TxResponseData.encode(message).finish();
  },
  toProtoMsg(message: TxResponseData): TxResponseDataProtoMsg {
    return {
      typeUrl: "/injective.types.v1beta1.TxResponseData",
      value: TxResponseData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResponseData.typeUrl, TxResponseData);