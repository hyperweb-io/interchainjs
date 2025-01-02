import { Params, ParamsAmino, BandPriceState, BandPriceStateAmino, PriceFeedState, PriceFeedStateAmino, CoinbasePriceState, CoinbasePriceStateAmino, BandOracleRequest, BandOracleRequestAmino, BandIBCParams, BandIBCParamsAmino, ChainlinkPriceState, ChainlinkPriceStateAmino, PriceRecords, PriceRecordsAmino, ProviderState, ProviderStateAmino, PythPriceState, PythPriceStateAmino, StorkPriceState, StorkPriceStateAmino } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to oracle. */
  params: Params;
  bandRelayers: string[];
  bandPriceStates: BandPriceState[];
  priceFeedPriceStates: PriceFeedState[];
  coinbasePriceStates: CoinbasePriceState[];
  bandIbcPriceStates: BandPriceState[];
  bandIbcOracleRequests: BandOracleRequest[];
  bandIbcParams: BandIBCParams;
  bandIbcLatestClientId: bigint;
  calldataRecords: CalldataRecord[];
  bandIbcLatestRequestId: bigint;
  chainlinkPriceStates: ChainlinkPriceState[];
  historicalPriceRecords: PriceRecords[];
  providerStates: ProviderState[];
  pythPriceStates: PythPriceState[];
  storkPriceStates: StorkPriceState[];
  storkPublishers: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to oracle. */
  params: ParamsAmino;
  band_relayers: string[];
  band_price_states: BandPriceStateAmino[];
  price_feed_price_states: PriceFeedStateAmino[];
  coinbase_price_states: CoinbasePriceStateAmino[];
  band_ibc_price_states: BandPriceStateAmino[];
  band_ibc_oracle_requests: BandOracleRequestAmino[];
  band_ibc_params: BandIBCParamsAmino;
  band_ibc_latest_client_id: string;
  calldata_records: CalldataRecordAmino[];
  band_ibc_latest_request_id: string;
  chainlink_price_states: ChainlinkPriceStateAmino[];
  historical_price_records: PriceRecordsAmino[];
  provider_states: ProviderStateAmino[];
  pyth_price_states: PythPriceStateAmino[];
  stork_price_states: StorkPriceStateAmino[];
  stork_publishers: string[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.oracle.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface CalldataRecord {
  clientId: bigint;
  calldata: Uint8Array;
}
export interface CalldataRecordProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.CalldataRecord";
  value: Uint8Array;
}
export interface CalldataRecordAmino {
  client_id: string;
  calldata: string;
}
export interface CalldataRecordAminoMsg {
  type: "/injective.oracle.v1beta1.CalldataRecord";
  value: CalldataRecordAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    bandRelayers: [],
    bandPriceStates: [],
    priceFeedPriceStates: [],
    coinbasePriceStates: [],
    bandIbcPriceStates: [],
    bandIbcOracleRequests: [],
    bandIbcParams: BandIBCParams.fromPartial({}),
    bandIbcLatestClientId: BigInt(0),
    calldataRecords: [],
    bandIbcLatestRequestId: BigInt(0),
    chainlinkPriceStates: [],
    historicalPriceRecords: [],
    providerStates: [],
    pythPriceStates: [],
    storkPriceStates: [],
    storkPublishers: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.oracle.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.bandRelayers) && (!o.bandRelayers.length || typeof o.bandRelayers[0] === "string") && Array.isArray(o.bandPriceStates) && (!o.bandPriceStates.length || BandPriceState.is(o.bandPriceStates[0])) && Array.isArray(o.priceFeedPriceStates) && (!o.priceFeedPriceStates.length || PriceFeedState.is(o.priceFeedPriceStates[0])) && Array.isArray(o.coinbasePriceStates) && (!o.coinbasePriceStates.length || CoinbasePriceState.is(o.coinbasePriceStates[0])) && Array.isArray(o.bandIbcPriceStates) && (!o.bandIbcPriceStates.length || BandPriceState.is(o.bandIbcPriceStates[0])) && Array.isArray(o.bandIbcOracleRequests) && (!o.bandIbcOracleRequests.length || BandOracleRequest.is(o.bandIbcOracleRequests[0])) && BandIBCParams.is(o.bandIbcParams) && typeof o.bandIbcLatestClientId === "bigint" && Array.isArray(o.calldataRecords) && (!o.calldataRecords.length || CalldataRecord.is(o.calldataRecords[0])) && typeof o.bandIbcLatestRequestId === "bigint" && Array.isArray(o.chainlinkPriceStates) && (!o.chainlinkPriceStates.length || ChainlinkPriceState.is(o.chainlinkPriceStates[0])) && Array.isArray(o.historicalPriceRecords) && (!o.historicalPriceRecords.length || PriceRecords.is(o.historicalPriceRecords[0])) && Array.isArray(o.providerStates) && (!o.providerStates.length || ProviderState.is(o.providerStates[0])) && Array.isArray(o.pythPriceStates) && (!o.pythPriceStates.length || PythPriceState.is(o.pythPriceStates[0])) && Array.isArray(o.storkPriceStates) && (!o.storkPriceStates.length || StorkPriceState.is(o.storkPriceStates[0])) && Array.isArray(o.storkPublishers) && (!o.storkPublishers.length || typeof o.storkPublishers[0] === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.band_relayers) && (!o.band_relayers.length || typeof o.band_relayers[0] === "string") && Array.isArray(o.band_price_states) && (!o.band_price_states.length || BandPriceState.isAmino(o.band_price_states[0])) && Array.isArray(o.price_feed_price_states) && (!o.price_feed_price_states.length || PriceFeedState.isAmino(o.price_feed_price_states[0])) && Array.isArray(o.coinbase_price_states) && (!o.coinbase_price_states.length || CoinbasePriceState.isAmino(o.coinbase_price_states[0])) && Array.isArray(o.band_ibc_price_states) && (!o.band_ibc_price_states.length || BandPriceState.isAmino(o.band_ibc_price_states[0])) && Array.isArray(o.band_ibc_oracle_requests) && (!o.band_ibc_oracle_requests.length || BandOracleRequest.isAmino(o.band_ibc_oracle_requests[0])) && BandIBCParams.isAmino(o.band_ibc_params) && typeof o.band_ibc_latest_client_id === "bigint" && Array.isArray(o.calldata_records) && (!o.calldata_records.length || CalldataRecord.isAmino(o.calldata_records[0])) && typeof o.band_ibc_latest_request_id === "bigint" && Array.isArray(o.chainlink_price_states) && (!o.chainlink_price_states.length || ChainlinkPriceState.isAmino(o.chainlink_price_states[0])) && Array.isArray(o.historical_price_records) && (!o.historical_price_records.length || PriceRecords.isAmino(o.historical_price_records[0])) && Array.isArray(o.provider_states) && (!o.provider_states.length || ProviderState.isAmino(o.provider_states[0])) && Array.isArray(o.pyth_price_states) && (!o.pyth_price_states.length || PythPriceState.isAmino(o.pyth_price_states[0])) && Array.isArray(o.stork_price_states) && (!o.stork_price_states.length || StorkPriceState.isAmino(o.stork_price_states[0])) && Array.isArray(o.stork_publishers) && (!o.stork_publishers.length || typeof o.stork_publishers[0] === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bandRelayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bandPriceStates) {
      BandPriceState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.priceFeedPriceStates) {
      PriceFeedState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coinbasePriceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.bandIbcPriceStates) {
      BandPriceState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.bandIbcOracleRequests) {
      BandOracleRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
    }
    if (message.bandIbcLatestClientId !== BigInt(0)) {
      writer.uint32(72).uint64(message.bandIbcLatestClientId);
    }
    for (const v of message.calldataRecords) {
      CalldataRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.bandIbcLatestRequestId !== BigInt(0)) {
      writer.uint32(88).uint64(message.bandIbcLatestRequestId);
    }
    for (const v of message.chainlinkPriceStates) {
      ChainlinkPriceState.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.historicalPriceRecords) {
      PriceRecords.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.providerStates) {
      ProviderState.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.pythPriceStates) {
      PythPriceState.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.storkPriceStates) {
      StorkPriceState.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.storkPublishers) {
      writer.uint32(138).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.bandRelayers.push(reader.string());
          break;
        case 3:
          message.bandPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.priceFeedPriceStates.push(PriceFeedState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.coinbasePriceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
          break;
        case 6:
          message.bandIbcPriceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        case 7:
          message.bandIbcOracleRequests.push(BandOracleRequest.decode(reader, reader.uint32()));
          break;
        case 8:
          message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
          break;
        case 9:
          message.bandIbcLatestClientId = reader.uint64();
          break;
        case 10:
          message.calldataRecords.push(CalldataRecord.decode(reader, reader.uint32()));
          break;
        case 11:
          message.bandIbcLatestRequestId = reader.uint64();
          break;
        case 12:
          message.chainlinkPriceStates.push(ChainlinkPriceState.decode(reader, reader.uint32()));
          break;
        case 13:
          message.historicalPriceRecords.push(PriceRecords.decode(reader, reader.uint32()));
          break;
        case 14:
          message.providerStates.push(ProviderState.decode(reader, reader.uint32()));
          break;
        case 15:
          message.pythPriceStates.push(PythPriceState.decode(reader, reader.uint32()));
          break;
        case 16:
          message.storkPriceStates.push(StorkPriceState.decode(reader, reader.uint32()));
          break;
        case 17:
          message.storkPublishers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bandRelayers = object.bandRelayers?.map(e => e) || [];
    message.bandPriceStates = object.bandPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.priceFeedPriceStates = object.priceFeedPriceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    message.coinbasePriceStates = object.coinbasePriceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    message.bandIbcPriceStates = object.bandIbcPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.bandIbcOracleRequests = object.bandIbcOracleRequests?.map(e => BandOracleRequest.fromPartial(e)) || [];
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? BigInt(object.bandIbcLatestClientId.toString()) : BigInt(0);
    message.calldataRecords = object.calldataRecords?.map(e => CalldataRecord.fromPartial(e)) || [];
    message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? BigInt(object.bandIbcLatestRequestId.toString()) : BigInt(0);
    message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => ChainlinkPriceState.fromPartial(e)) || [];
    message.historicalPriceRecords = object.historicalPriceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    message.providerStates = object.providerStates?.map(e => ProviderState.fromPartial(e)) || [];
    message.pythPriceStates = object.pythPriceStates?.map(e => PythPriceState.fromPartial(e)) || [];
    message.storkPriceStates = object.storkPriceStates?.map(e => StorkPriceState.fromPartial(e)) || [];
    message.storkPublishers = object.storkPublishers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.bandRelayers = object.band_relayers?.map(e => e) || [];
    message.bandPriceStates = object.band_price_states?.map(e => BandPriceState.fromAmino(e)) || [];
    message.priceFeedPriceStates = object.price_feed_price_states?.map(e => PriceFeedState.fromAmino(e)) || [];
    message.coinbasePriceStates = object.coinbase_price_states?.map(e => CoinbasePriceState.fromAmino(e)) || [];
    message.bandIbcPriceStates = object.band_ibc_price_states?.map(e => BandPriceState.fromAmino(e)) || [];
    message.bandIbcOracleRequests = object.band_ibc_oracle_requests?.map(e => BandOracleRequest.fromAmino(e)) || [];
    if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
      message.bandIbcParams = BandIBCParams.fromAmino(object.band_ibc_params);
    }
    if (object.band_ibc_latest_client_id !== undefined && object.band_ibc_latest_client_id !== null) {
      message.bandIbcLatestClientId = BigInt(object.band_ibc_latest_client_id);
    }
    message.calldataRecords = object.calldata_records?.map(e => CalldataRecord.fromAmino(e)) || [];
    if (object.band_ibc_latest_request_id !== undefined && object.band_ibc_latest_request_id !== null) {
      message.bandIbcLatestRequestId = BigInt(object.band_ibc_latest_request_id);
    }
    message.chainlinkPriceStates = object.chainlink_price_states?.map(e => ChainlinkPriceState.fromAmino(e)) || [];
    message.historicalPriceRecords = object.historical_price_records?.map(e => PriceRecords.fromAmino(e)) || [];
    message.providerStates = object.provider_states?.map(e => ProviderState.fromAmino(e)) || [];
    message.pythPriceStates = object.pyth_price_states?.map(e => PythPriceState.fromAmino(e)) || [];
    message.storkPriceStates = object.stork_price_states?.map(e => StorkPriceState.fromAmino(e)) || [];
    message.storkPublishers = object.stork_publishers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.bandRelayers) {
      obj.band_relayers = message.bandRelayers.map(e => e);
    } else {
      obj.band_relayers = message.bandRelayers;
    }
    if (message.bandPriceStates) {
      obj.band_price_states = message.bandPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.band_price_states = message.bandPriceStates;
    }
    if (message.priceFeedPriceStates) {
      obj.price_feed_price_states = message.priceFeedPriceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
    } else {
      obj.price_feed_price_states = message.priceFeedPriceStates;
    }
    if (message.coinbasePriceStates) {
      obj.coinbase_price_states = message.coinbasePriceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
    } else {
      obj.coinbase_price_states = message.coinbasePriceStates;
    }
    if (message.bandIbcPriceStates) {
      obj.band_ibc_price_states = message.bandIbcPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.band_ibc_price_states = message.bandIbcPriceStates;
    }
    if (message.bandIbcOracleRequests) {
      obj.band_ibc_oracle_requests = message.bandIbcOracleRequests.map(e => e ? BandOracleRequest.toAmino(e) : undefined);
    } else {
      obj.band_ibc_oracle_requests = message.bandIbcOracleRequests;
    }
    obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
    obj.band_ibc_latest_client_id = message.bandIbcLatestClientId !== BigInt(0) ? message.bandIbcLatestClientId?.toString() : undefined;
    if (message.calldataRecords) {
      obj.calldata_records = message.calldataRecords.map(e => e ? CalldataRecord.toAmino(e) : undefined);
    } else {
      obj.calldata_records = message.calldataRecords;
    }
    obj.band_ibc_latest_request_id = message.bandIbcLatestRequestId !== BigInt(0) ? message.bandIbcLatestRequestId?.toString() : undefined;
    if (message.chainlinkPriceStates) {
      obj.chainlink_price_states = message.chainlinkPriceStates.map(e => e ? ChainlinkPriceState.toAmino(e) : undefined);
    } else {
      obj.chainlink_price_states = message.chainlinkPriceStates;
    }
    if (message.historicalPriceRecords) {
      obj.historical_price_records = message.historicalPriceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
    } else {
      obj.historical_price_records = message.historicalPriceRecords;
    }
    if (message.providerStates) {
      obj.provider_states = message.providerStates.map(e => e ? ProviderState.toAmino(e) : undefined);
    } else {
      obj.provider_states = message.providerStates;
    }
    if (message.pythPriceStates) {
      obj.pyth_price_states = message.pythPriceStates.map(e => e ? PythPriceState.toAmino(e) : undefined);
    } else {
      obj.pyth_price_states = message.pythPriceStates;
    }
    if (message.storkPriceStates) {
      obj.stork_price_states = message.storkPriceStates.map(e => e ? StorkPriceState.toAmino(e) : undefined);
    } else {
      obj.stork_price_states = message.storkPriceStates;
    }
    if (message.storkPublishers) {
      obj.stork_publishers = message.storkPublishers.map(e => e);
    } else {
      obj.stork_publishers = message.storkPublishers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
    BandPriceState.registerTypeUrl();
    PriceFeedState.registerTypeUrl();
    CoinbasePriceState.registerTypeUrl();
    BandOracleRequest.registerTypeUrl();
    BandIBCParams.registerTypeUrl();
    CalldataRecord.registerTypeUrl();
    ChainlinkPriceState.registerTypeUrl();
    PriceRecords.registerTypeUrl();
    ProviderState.registerTypeUrl();
    PythPriceState.registerTypeUrl();
    StorkPriceState.registerTypeUrl();
  }
};
function createBaseCalldataRecord(): CalldataRecord {
  return {
    clientId: BigInt(0),
    calldata: new Uint8Array()
  };
}
export const CalldataRecord = {
  typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
  is(o: any): o is CalldataRecord {
    return o && (o.$typeUrl === CalldataRecord.typeUrl || typeof o.clientId === "bigint" && (o.calldata instanceof Uint8Array || typeof o.calldata === "string"));
  },
  isAmino(o: any): o is CalldataRecordAmino {
    return o && (o.$typeUrl === CalldataRecord.typeUrl || typeof o.client_id === "bigint" && (o.calldata instanceof Uint8Array || typeof o.calldata === "string"));
  },
  encode(message: CalldataRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== BigInt(0)) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CalldataRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalldataRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.uint64();
          break;
        case 2:
          message.calldata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CalldataRecord>): CalldataRecord {
    const message = createBaseCalldataRecord();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CalldataRecordAmino): CalldataRecord {
    const message = createBaseCalldataRecord();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = BigInt(object.client_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata);
    }
    return message;
  },
  toAmino(message: CalldataRecord): CalldataRecordAmino {
    const obj: any = {};
    obj.client_id = message.clientId !== BigInt(0) ? message.clientId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    return obj;
  },
  fromAminoMsg(object: CalldataRecordAminoMsg): CalldataRecord {
    return CalldataRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: CalldataRecordProtoMsg): CalldataRecord {
    return CalldataRecord.decode(message.value);
  },
  toProto(message: CalldataRecord): Uint8Array {
    return CalldataRecord.encode(message).finish();
  },
  toProtoMsg(message: CalldataRecord): CalldataRecordProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
      value: CalldataRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};