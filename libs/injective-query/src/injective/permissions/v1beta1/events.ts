import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventSetVoucher {
  addr: string;
  voucher: Coin;
}
export interface EventSetVoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.EventSetVoucher";
  value: Uint8Array;
}
export interface EventSetVoucherAmino {
  addr: string;
  voucher: CoinAmino;
}
export interface EventSetVoucherAminoMsg {
  type: "/injective.permissions.v1beta1.EventSetVoucher";
  value: EventSetVoucherAmino;
}
function createBaseEventSetVoucher(): EventSetVoucher {
  return {
    addr: "",
    voucher: Coin.fromPartial({})
  };
}
export const EventSetVoucher = {
  typeUrl: "/injective.permissions.v1beta1.EventSetVoucher",
  is(o: any): o is EventSetVoucher {
    return o && (o.$typeUrl === EventSetVoucher.typeUrl || typeof o.addr === "string" && Coin.is(o.voucher));
  },
  isAmino(o: any): o is EventSetVoucherAmino {
    return o && (o.$typeUrl === EventSetVoucher.typeUrl || typeof o.addr === "string" && Coin.isAmino(o.voucher));
  },
  encode(message: EventSetVoucher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.voucher !== undefined) {
      Coin.encode(message.voucher, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetVoucher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.voucher = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetVoucher>): EventSetVoucher {
    const message = createBaseEventSetVoucher();
    message.addr = object.addr ?? "";
    message.voucher = object.voucher !== undefined && object.voucher !== null ? Coin.fromPartial(object.voucher) : undefined;
    return message;
  },
  fromAmino(object: EventSetVoucherAmino): EventSetVoucher {
    const message = createBaseEventSetVoucher();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = Coin.fromAmino(object.voucher);
    }
    return message;
  },
  toAmino(message: EventSetVoucher): EventSetVoucherAmino {
    const obj: any = {};
    obj.addr = message.addr === "" ? undefined : message.addr;
    obj.voucher = message.voucher ? Coin.toAmino(message.voucher) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetVoucherAminoMsg): EventSetVoucher {
    return EventSetVoucher.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetVoucherProtoMsg): EventSetVoucher {
    return EventSetVoucher.decode(message.value);
  },
  toProto(message: EventSetVoucher): Uint8Array {
    return EventSetVoucher.encode(message).finish();
  },
  toProtoMsg(message: EventSetVoucher): EventSetVoucherProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.EventSetVoucher",
      value: EventSetVoucher.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetVoucher.typeUrl, EventSetVoucher);