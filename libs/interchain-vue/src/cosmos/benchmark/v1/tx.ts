import { Op, OpAmino } from "./benchmark";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgLoadTestOps defines a message containing a sequence of load test operations.
 * @name MsgLoadTest
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTest
 */
export interface MsgLoadTest {
  caller: Uint8Array;
  ops: Op[];
}
export interface MsgLoadTestProtoMsg {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTest";
  value: Uint8Array;
}
/**
 * MsgLoadTestOps defines a message containing a sequence of load test operations.
 * @name MsgLoadTestAmino
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTest
 */
export interface MsgLoadTestAmino {
  caller: string;
  ops: OpAmino[];
}
export interface MsgLoadTestAminoMsg {
  type: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest";
  value: MsgLoadTestAmino;
}
/**
 * MsgLoadTestResponse defines a message containing the results of a load test operation.
 * @name MsgLoadTestResponse
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTestResponse
 */
export interface MsgLoadTestResponse {
  totalTime: bigint;
  totalErrors: bigint;
}
export interface MsgLoadTestResponseProtoMsg {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTestResponse";
  value: Uint8Array;
}
/**
 * MsgLoadTestResponse defines a message containing the results of a load test operation.
 * @name MsgLoadTestResponseAmino
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTestResponse
 */
export interface MsgLoadTestResponseAmino {
  total_time: string;
  total_errors: string;
}
export interface MsgLoadTestResponseAminoMsg {
  type: "cosmos-sdk/MsgLoadTestResponse";
  value: MsgLoadTestResponseAmino;
}
function createBaseMsgLoadTest(): MsgLoadTest {
  return {
    caller: new Uint8Array(),
    ops: []
  };
}
/**
 * MsgLoadTestOps defines a message containing a sequence of load test operations.
 * @name MsgLoadTest
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTest
 */
export const MsgLoadTest = {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
  aminoType: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest",
  is(o: any): o is MsgLoadTest {
    return o && (o.$typeUrl === MsgLoadTest.typeUrl || (o.caller instanceof Uint8Array || typeof o.caller === "string") && Array.isArray(o.ops) && (!o.ops.length || Op.is(o.ops[0])));
  },
  isAmino(o: any): o is MsgLoadTestAmino {
    return o && (o.$typeUrl === MsgLoadTest.typeUrl || (o.caller instanceof Uint8Array || typeof o.caller === "string") && Array.isArray(o.ops) && (!o.ops.length || Op.isAmino(o.ops[0])));
  },
  encode(message: MsgLoadTest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.caller.length !== 0) {
      writer.uint32(10).bytes(message.caller);
    }
    for (const v of message.ops) {
      Op.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.caller = reader.bytes();
          break;
        case 2:
          message.ops.push(Op.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLoadTest>): MsgLoadTest {
    const message = createBaseMsgLoadTest();
    message.caller = object.caller ?? new Uint8Array();
    message.ops = object.ops?.map(e => Op.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgLoadTestAmino): MsgLoadTest {
    const message = createBaseMsgLoadTest();
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = bytesFromBase64(object.caller);
    }
    message.ops = object.ops?.map(e => Op.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgLoadTest): MsgLoadTestAmino {
    const obj: any = {};
    obj.caller = message.caller ? base64FromBytes(message.caller) : undefined;
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? Op.toAmino(e) : undefined);
    } else {
      obj.ops = message.ops;
    }
    return obj;
  },
  fromAminoMsg(object: MsgLoadTestAminoMsg): MsgLoadTest {
    return MsgLoadTest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLoadTest): MsgLoadTestAminoMsg {
    return {
      type: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest",
      value: MsgLoadTest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLoadTestProtoMsg): MsgLoadTest {
    return MsgLoadTest.decode(message.value);
  },
  toProto(message: MsgLoadTest): Uint8Array {
    return MsgLoadTest.encode(message).finish();
  },
  toProtoMsg(message: MsgLoadTest): MsgLoadTestProtoMsg {
    return {
      typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
      value: MsgLoadTest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgLoadTest.typeUrl)) {
      return;
    }
    Op.registerTypeUrl();
  }
};
function createBaseMsgLoadTestResponse(): MsgLoadTestResponse {
  return {
    totalTime: BigInt(0),
    totalErrors: BigInt(0)
  };
}
/**
 * MsgLoadTestResponse defines a message containing the results of a load test operation.
 * @name MsgLoadTestResponse
 * @package cosmos.benchmark.v1
 * @see proto type: cosmos.benchmark.v1.MsgLoadTestResponse
 */
export const MsgLoadTestResponse = {
  typeUrl: "/cosmos.benchmark.v1.MsgLoadTestResponse",
  aminoType: "cosmos-sdk/MsgLoadTestResponse",
  is(o: any): o is MsgLoadTestResponse {
    return o && (o.$typeUrl === MsgLoadTestResponse.typeUrl || typeof o.totalTime === "bigint" && typeof o.totalErrors === "bigint");
  },
  isAmino(o: any): o is MsgLoadTestResponseAmino {
    return o && (o.$typeUrl === MsgLoadTestResponse.typeUrl || typeof o.total_time === "bigint" && typeof o.total_errors === "bigint");
  },
  encode(message: MsgLoadTestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalTime !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalTime);
    }
    if (message.totalErrors !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalErrors);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadTestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalTime = reader.uint64();
          break;
        case 2:
          message.totalErrors = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLoadTestResponse>): MsgLoadTestResponse {
    const message = createBaseMsgLoadTestResponse();
    message.totalTime = object.totalTime !== undefined && object.totalTime !== null ? BigInt(object.totalTime.toString()) : BigInt(0);
    message.totalErrors = object.totalErrors !== undefined && object.totalErrors !== null ? BigInt(object.totalErrors.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLoadTestResponseAmino): MsgLoadTestResponse {
    const message = createBaseMsgLoadTestResponse();
    if (object.total_time !== undefined && object.total_time !== null) {
      message.totalTime = BigInt(object.total_time);
    }
    if (object.total_errors !== undefined && object.total_errors !== null) {
      message.totalErrors = BigInt(object.total_errors);
    }
    return message;
  },
  toAmino(message: MsgLoadTestResponse): MsgLoadTestResponseAmino {
    const obj: any = {};
    obj.total_time = message.totalTime !== BigInt(0) ? message.totalTime?.toString() : undefined;
    obj.total_errors = message.totalErrors !== BigInt(0) ? message.totalErrors?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLoadTestResponseAminoMsg): MsgLoadTestResponse {
    return MsgLoadTestResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLoadTestResponse): MsgLoadTestResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgLoadTestResponse",
      value: MsgLoadTestResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLoadTestResponseProtoMsg): MsgLoadTestResponse {
    return MsgLoadTestResponse.decode(message.value);
  },
  toProto(message: MsgLoadTestResponse): Uint8Array {
    return MsgLoadTestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLoadTestResponse): MsgLoadTestResponseProtoMsg {
    return {
      typeUrl: "/cosmos.benchmark.v1.MsgLoadTestResponse",
      value: MsgLoadTestResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};