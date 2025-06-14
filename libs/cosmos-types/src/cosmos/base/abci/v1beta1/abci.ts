import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Block } from "../../../../tendermint/types/block";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 * @name TxResponse
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.TxResponse
 */
export interface TxResponse {
  /**
   * The block height
   */
  height: bigint;
  /**
   * The transaction hash.
   */
  txhash: string;
  /**
   * Namespace for the Code
   */
  codespace: string;
  /**
   * Response code.
   */
  code: number;
  /**
   * Result bytes, if any.
   */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog: string;
  /**
   * The output of the application's logger (typed). May be non-deterministic.
   */
  logs: ABCIMessageLog[];
  /**
   * Additional information. May be non-deterministic.
   */
  info: string;
  /**
   * Amount of gas requested for transaction.
   */
  gasWanted: bigint;
  /**
   * Amount of gas consumed by transaction.
   */
  gasUsed: bigint;
  /**
   * The request transaction bytes.
   */
  tx?: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   */
  events: Event[];
}
/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 * @name ABCIMessageLog
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export interface ABCIMessageLog {
  msgIndex: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 * @name StringEvent
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.StringEvent
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 * @name Attribute
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.Attribute
 */
export interface Attribute {
  key: string;
  value: string;
}
/**
 * GasInfo defines tx execution gas context.
 * @name GasInfo
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.GasInfo
 */
export interface GasInfo {
  /**
   * GasWanted is the maximum units of work we allow this tx to perform.
   */
  gasWanted: bigint;
  /**
   * GasUsed is the amount of gas actually consumed.
   */
  gasUsed: bigint;
}
/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 * @name Result
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.Result
 */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   * @deprecated
   */
  data: Uint8Array;
  /**
   * Log contains the log information from message or handler execution.
   */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   */
  msgResponses: Any[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 * @name SimulationResponse
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SimulationResponse
 */
export interface SimulationResponse {
  gasInfo: GasInfo;
  result?: Result;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 * @name MsgData
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.MsgData
 * @deprecated
 */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 * @name TxMsgData
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.TxMsgData
 */
export interface TxMsgData {
  /**
   * data field is deprecated and not populated.
   * @deprecated
   */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   */
  msgResponses: Any[];
}
/**
 * SearchTxsResult defines a structure for querying txs pageable
 * @name SearchTxsResult
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SearchTxsResult
 */
export interface SearchTxsResult {
  /**
   * Count of all txs
   */
  totalCount: bigint;
  /**
   * Count of txs in current page
   */
  count: bigint;
  /**
   * Index of current page, start from 1
   */
  pageNumber: bigint;
  /**
   * Count of total pages
   */
  pageTotal: bigint;
  /**
   * Max count txs per page
   */
  limit: bigint;
  /**
   * List of txs in current page
   */
  txs: TxResponse[];
}
/**
 * SearchBlocksResult defines a structure for querying blocks pageable
 * @name SearchBlocksResult
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SearchBlocksResult
 */
export interface SearchBlocksResult {
  /**
   * Count of all blocks
   */
  totalCount: bigint;
  /**
   * Count of blocks in current page
   */
  count: bigint;
  /**
   * Index of current page, start from 1
   */
  pageNumber: bigint;
  /**
   * Count of total pages
   */
  pageTotal: bigint;
  /**
   * Max count blocks per page
   */
  limit: bigint;
  /**
   * List of blocks in current page
   */
  blocks: Block[];
}
function createBaseTxResponse(): TxResponse {
  return {
    height: BigInt(0),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: undefined,
    timestamp: "",
    events: []
  };
}
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 * @name TxResponse
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.TxResponse
 */
export const TxResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
  aminoType: "cosmos-sdk/TxResponse",
  encode(message: TxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = object.logs?.map(e => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  }
};
function createBaseABCIMessageLog(): ABCIMessageLog {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 * @name ABCIMessageLog
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export const ABCIMessageLog = {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
  aminoType: "cosmos-sdk/ABCIMessageLog",
  encode(message: ABCIMessageLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ABCIMessageLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map(e => StringEvent.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStringEvent(): StringEvent {
  return {
    type: "",
    attributes: []
  };
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 * @name StringEvent
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.StringEvent
 */
export const StringEvent = {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
  aminoType: "cosmos-sdk/StringEvent",
  encode(message: StringEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 * @name Attribute
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.Attribute
 */
export const Attribute = {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
  aminoType: "cosmos-sdk/Attribute",
  encode(message: Attribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseGasInfo(): GasInfo {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0)
  };
}
/**
 * GasInfo defines tx execution gas context.
 * @name GasInfo
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.GasInfo
 */
export const GasInfo = {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
  aminoType: "cosmos-sdk/GasInfo",
  encode(message: GasInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  }
};
function createBaseResult(): Result {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 * @name Result
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.Result
 */
export const Result = {
  typeUrl: "/cosmos.base.abci.v1beta1.Result",
  aminoType: "cosmos-sdk/Result",
  encode(message: Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Result {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSimulationResponse(): SimulationResponse {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: undefined
  };
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 * @name SimulationResponse
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SimulationResponse
 */
export const SimulationResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
  aminoType: "cosmos-sdk/SimulationResponse",
  encode(message: SimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseMsgData(): MsgData {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 * @name MsgData
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.MsgData
 * @deprecated
 */
export const MsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
  aminoType: "cosmos-sdk/MsgData",
  encode(message: MsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
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
  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseTxMsgData(): TxMsgData {
  return {
    data: [],
    msgResponses: []
  };
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 * @name TxMsgData
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.TxMsgData
 */
export const TxMsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
  aminoType: "cosmos-sdk/TxMsgData",
  encode(message: TxMsgData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map(e => MsgData.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: []
  };
}
/**
 * SearchTxsResult defines a structure for querying txs pageable
 * @name SearchTxsResult
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SearchTxsResult
 */
export const SearchTxsResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
  aminoType: "cosmos-sdk/SearchTxsResult",
  encode(message: SearchTxsResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SearchTxsResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
    message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.txs = object.txs?.map(e => TxResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSearchBlocksResult(): SearchBlocksResult {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    blocks: []
  };
}
/**
 * SearchBlocksResult defines a structure for querying blocks pageable
 * @name SearchBlocksResult
 * @package cosmos.base.abci.v1beta1
 * @see proto type: cosmos.base.abci.v1beta1.SearchBlocksResult
 */
export const SearchBlocksResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchBlocksResult",
  aminoType: "cosmos-sdk/SearchBlocksResult",
  encode(message: SearchBlocksResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).int64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).int64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).int64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).int64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).int64(message.limit);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SearchBlocksResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchBlocksResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.int64();
          break;
        case 2:
          message.count = reader.int64();
          break;
        case 3:
          message.pageNumber = reader.int64();
          break;
        case 4:
          message.pageTotal = reader.int64();
          break;
        case 5:
          message.limit = reader.int64();
          break;
        case 6:
          message.blocks.push(Block.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SearchBlocksResult>): SearchBlocksResult {
    const message = createBaseSearchBlocksResult();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
    message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.blocks = object.blocks?.map(e => Block.fromPartial(e)) || [];
    return message;
  }
};