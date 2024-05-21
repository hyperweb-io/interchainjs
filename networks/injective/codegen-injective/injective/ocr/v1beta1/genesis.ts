import { Params, ParamsAmino, FeedConfig, FeedConfigAmino, Transmission, TransmissionAmino, EpochAndRound, EpochAndRoundAmino } from "./ocr";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to OCR. */
  params: Params;
  /** feed_configs stores all of the supported OCR feeds */
  feedConfigs: FeedConfig[];
  /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
  latestEpochAndRounds: FeedEpochAndRound[];
  /** feed_transmissions stores the last transmission for each feed */
  feedTransmissions: FeedTransmission[];
  /**
   * latest_aggregator_round_ids stores the latest aggregator round ID for each
   * feedId
   */
  latestAggregatorRoundIds: FeedLatestAggregatorRoundIDs[];
  /** reward_pools stores the reward pools */
  rewardPools: RewardPool[];
  /** feed_observation_counts stores the feed observation counts */
  feedObservationCounts: FeedCounts[];
  /** feed_transmission_counts stores the feed transmission counts */
  feedTransmissionCounts: FeedCounts[];
  /** pending_payeeships stores the pending payeeships */
  pendingPayeeships: PendingPayeeship[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to OCR. */
  params: ParamsAmino;
  /** feed_configs stores all of the supported OCR feeds */
  feed_configs: FeedConfigAmino[];
  /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
  latest_epoch_and_rounds: FeedEpochAndRoundAmino[];
  /** feed_transmissions stores the last transmission for each feed */
  feed_transmissions: FeedTransmissionAmino[];
  /**
   * latest_aggregator_round_ids stores the latest aggregator round ID for each
   * feedId
   */
  latest_aggregator_round_ids: FeedLatestAggregatorRoundIDsAmino[];
  /** reward_pools stores the reward pools */
  reward_pools: RewardPoolAmino[];
  /** feed_observation_counts stores the feed observation counts */
  feed_observation_counts: FeedCountsAmino[];
  /** feed_transmission_counts stores the feed transmission counts */
  feed_transmission_counts: FeedCountsAmino[];
  /** pending_payeeships stores the pending payeeships */
  pending_payeeships: PendingPayeeshipAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.ocr.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface FeedTransmission {
  feedId: string;
  transmission?: Transmission;
}
export interface FeedTransmissionProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedTransmission";
  value: Uint8Array;
}
export interface FeedTransmissionAmino {
  feed_id: string;
  transmission?: TransmissionAmino;
}
export interface FeedTransmissionAminoMsg {
  type: "/injective.ocr.v1beta1.FeedTransmission";
  value: FeedTransmissionAmino;
}
export interface FeedEpochAndRound {
  feedId: string;
  epochAndRound?: EpochAndRound;
}
export interface FeedEpochAndRoundProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound";
  value: Uint8Array;
}
export interface FeedEpochAndRoundAmino {
  feed_id: string;
  epoch_and_round?: EpochAndRoundAmino;
}
export interface FeedEpochAndRoundAminoMsg {
  type: "/injective.ocr.v1beta1.FeedEpochAndRound";
  value: FeedEpochAndRoundAmino;
}
export interface FeedLatestAggregatorRoundIDs {
  feedId: string;
  aggregatorRoundId: bigint;
}
export interface FeedLatestAggregatorRoundIDsProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
  value: Uint8Array;
}
export interface FeedLatestAggregatorRoundIDsAmino {
  feed_id: string;
  aggregator_round_id: string;
}
export interface FeedLatestAggregatorRoundIDsAminoMsg {
  type: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
  value: FeedLatestAggregatorRoundIDsAmino;
}
export interface RewardPool {
  feedId: string;
  amount: Coin;
}
export interface RewardPoolProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.RewardPool";
  value: Uint8Array;
}
export interface RewardPoolAmino {
  feed_id: string;
  amount: CoinAmino;
}
export interface RewardPoolAminoMsg {
  type: "/injective.ocr.v1beta1.RewardPool";
  value: RewardPoolAmino;
}
export interface FeedCounts {
  feedId: string;
  counts: Count[];
}
export interface FeedCountsProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.FeedCounts";
  value: Uint8Array;
}
export interface FeedCountsAmino {
  feed_id: string;
  counts: CountAmino[];
}
export interface FeedCountsAminoMsg {
  type: "/injective.ocr.v1beta1.FeedCounts";
  value: FeedCountsAmino;
}
export interface Count {
  address: string;
  count: bigint;
}
export interface CountProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.Count";
  value: Uint8Array;
}
export interface CountAmino {
  address: string;
  count: string;
}
export interface CountAminoMsg {
  type: "/injective.ocr.v1beta1.Count";
  value: CountAmino;
}
export interface PendingPayeeship {
  feedId: string;
  transmitter: string;
  proposedPayee: string;
}
export interface PendingPayeeshipProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.PendingPayeeship";
  value: Uint8Array;
}
export interface PendingPayeeshipAmino {
  feed_id: string;
  transmitter: string;
  proposed_payee: string;
}
export interface PendingPayeeshipAminoMsg {
  type: "/injective.ocr.v1beta1.PendingPayeeship";
  value: PendingPayeeshipAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feedConfigs: [],
    latestEpochAndRounds: [],
    feedTransmissions: [],
    latestAggregatorRoundIds: [],
    rewardPools: [],
    feedObservationCounts: [],
    feedTransmissionCounts: [],
    pendingPayeeships: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.ocr.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.feedConfigs) && (!o.feedConfigs.length || FeedConfig.is(o.feedConfigs[0])) && Array.isArray(o.latestEpochAndRounds) && (!o.latestEpochAndRounds.length || FeedEpochAndRound.is(o.latestEpochAndRounds[0])) && Array.isArray(o.feedTransmissions) && (!o.feedTransmissions.length || FeedTransmission.is(o.feedTransmissions[0])) && Array.isArray(o.latestAggregatorRoundIds) && (!o.latestAggregatorRoundIds.length || FeedLatestAggregatorRoundIDs.is(o.latestAggregatorRoundIds[0])) && Array.isArray(o.rewardPools) && (!o.rewardPools.length || RewardPool.is(o.rewardPools[0])) && Array.isArray(o.feedObservationCounts) && (!o.feedObservationCounts.length || FeedCounts.is(o.feedObservationCounts[0])) && Array.isArray(o.feedTransmissionCounts) && (!o.feedTransmissionCounts.length || FeedCounts.is(o.feedTransmissionCounts[0])) && Array.isArray(o.pendingPayeeships) && (!o.pendingPayeeships.length || PendingPayeeship.is(o.pendingPayeeships[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.feed_configs) && (!o.feed_configs.length || FeedConfig.isAmino(o.feed_configs[0])) && Array.isArray(o.latest_epoch_and_rounds) && (!o.latest_epoch_and_rounds.length || FeedEpochAndRound.isAmino(o.latest_epoch_and_rounds[0])) && Array.isArray(o.feed_transmissions) && (!o.feed_transmissions.length || FeedTransmission.isAmino(o.feed_transmissions[0])) && Array.isArray(o.latest_aggregator_round_ids) && (!o.latest_aggregator_round_ids.length || FeedLatestAggregatorRoundIDs.isAmino(o.latest_aggregator_round_ids[0])) && Array.isArray(o.reward_pools) && (!o.reward_pools.length || RewardPool.isAmino(o.reward_pools[0])) && Array.isArray(o.feed_observation_counts) && (!o.feed_observation_counts.length || FeedCounts.isAmino(o.feed_observation_counts[0])) && Array.isArray(o.feed_transmission_counts) && (!o.feed_transmission_counts.length || FeedCounts.isAmino(o.feed_transmission_counts[0])) && Array.isArray(o.pending_payeeships) && (!o.pending_payeeships.length || PendingPayeeship.isAmino(o.pending_payeeships[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feedConfigs) {
      FeedConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestEpochAndRounds) {
      FeedEpochAndRound.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feedTransmissions) {
      FeedTransmission.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.latestAggregatorRoundIds) {
      FeedLatestAggregatorRoundIDs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.rewardPools) {
      RewardPool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.feedObservationCounts) {
      FeedCounts.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.feedTransmissionCounts) {
      FeedCounts.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pendingPayeeships) {
      PendingPayeeship.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.feedConfigs.push(FeedConfig.decode(reader, reader.uint32()));
          break;
        case 3:
          message.latestEpochAndRounds.push(FeedEpochAndRound.decode(reader, reader.uint32()));
          break;
        case 4:
          message.feedTransmissions.push(FeedTransmission.decode(reader, reader.uint32()));
          break;
        case 5:
          message.latestAggregatorRoundIds.push(FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardPools.push(RewardPool.decode(reader, reader.uint32()));
          break;
        case 7:
          message.feedObservationCounts.push(FeedCounts.decode(reader, reader.uint32()));
          break;
        case 8:
          message.feedTransmissionCounts.push(FeedCounts.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pendingPayeeships.push(PendingPayeeship.decode(reader, reader.uint32()));
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
    message.feedConfigs = object.feedConfigs?.map(e => FeedConfig.fromPartial(e)) || [];
    message.latestEpochAndRounds = object.latestEpochAndRounds?.map(e => FeedEpochAndRound.fromPartial(e)) || [];
    message.feedTransmissions = object.feedTransmissions?.map(e => FeedTransmission.fromPartial(e)) || [];
    message.latestAggregatorRoundIds = object.latestAggregatorRoundIds?.map(e => FeedLatestAggregatorRoundIDs.fromPartial(e)) || [];
    message.rewardPools = object.rewardPools?.map(e => RewardPool.fromPartial(e)) || [];
    message.feedObservationCounts = object.feedObservationCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.feedTransmissionCounts = object.feedTransmissionCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.pendingPayeeships = object.pendingPayeeships?.map(e => PendingPayeeship.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feedConfigs = object.feed_configs?.map(e => FeedConfig.fromAmino(e)) || [];
    message.latestEpochAndRounds = object.latest_epoch_and_rounds?.map(e => FeedEpochAndRound.fromAmino(e)) || [];
    message.feedTransmissions = object.feed_transmissions?.map(e => FeedTransmission.fromAmino(e)) || [];
    message.latestAggregatorRoundIds = object.latest_aggregator_round_ids?.map(e => FeedLatestAggregatorRoundIDs.fromAmino(e)) || [];
    message.rewardPools = object.reward_pools?.map(e => RewardPool.fromAmino(e)) || [];
    message.feedObservationCounts = object.feed_observation_counts?.map(e => FeedCounts.fromAmino(e)) || [];
    message.feedTransmissionCounts = object.feed_transmission_counts?.map(e => FeedCounts.fromAmino(e)) || [];
    message.pendingPayeeships = object.pending_payeeships?.map(e => PendingPayeeship.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feedConfigs) {
      obj.feed_configs = message.feedConfigs.map(e => e ? FeedConfig.toAmino(e) : undefined);
    } else {
      obj.feed_configs = message.feedConfigs;
    }
    if (message.latestEpochAndRounds) {
      obj.latest_epoch_and_rounds = message.latestEpochAndRounds.map(e => e ? FeedEpochAndRound.toAmino(e) : undefined);
    } else {
      obj.latest_epoch_and_rounds = message.latestEpochAndRounds;
    }
    if (message.feedTransmissions) {
      obj.feed_transmissions = message.feedTransmissions.map(e => e ? FeedTransmission.toAmino(e) : undefined);
    } else {
      obj.feed_transmissions = message.feedTransmissions;
    }
    if (message.latestAggregatorRoundIds) {
      obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds.map(e => e ? FeedLatestAggregatorRoundIDs.toAmino(e) : undefined);
    } else {
      obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds;
    }
    if (message.rewardPools) {
      obj.reward_pools = message.rewardPools.map(e => e ? RewardPool.toAmino(e) : undefined);
    } else {
      obj.reward_pools = message.rewardPools;
    }
    if (message.feedObservationCounts) {
      obj.feed_observation_counts = message.feedObservationCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
    } else {
      obj.feed_observation_counts = message.feedObservationCounts;
    }
    if (message.feedTransmissionCounts) {
      obj.feed_transmission_counts = message.feedTransmissionCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
    } else {
      obj.feed_transmission_counts = message.feedTransmissionCounts;
    }
    if (message.pendingPayeeships) {
      obj.pending_payeeships = message.pendingPayeeships.map(e => e ? PendingPayeeship.toAmino(e) : undefined);
    } else {
      obj.pending_payeeships = message.pendingPayeeships;
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
      typeUrl: "/injective.ocr.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseFeedTransmission(): FeedTransmission {
  return {
    feedId: "",
    transmission: undefined
  };
}
export const FeedTransmission = {
  typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
  is(o: any): o is FeedTransmission {
    return o && (o.$typeUrl === FeedTransmission.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is FeedTransmissionAmino {
    return o && (o.$typeUrl === FeedTransmission.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: FeedTransmission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmission !== undefined) {
      Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedTransmission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedTransmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.transmission = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedTransmission>): FeedTransmission {
    const message = createBaseFeedTransmission();
    message.feedId = object.feedId ?? "";
    message.transmission = object.transmission !== undefined && object.transmission !== null ? Transmission.fromPartial(object.transmission) : undefined;
    return message;
  },
  fromAmino(object: FeedTransmissionAmino): FeedTransmission {
    const message = createBaseFeedTransmission();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.transmission !== undefined && object.transmission !== null) {
      message.transmission = Transmission.fromAmino(object.transmission);
    }
    return message;
  },
  toAmino(message: FeedTransmission): FeedTransmissionAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.transmission = message.transmission ? Transmission.toAmino(message.transmission) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedTransmissionAminoMsg): FeedTransmission {
    return FeedTransmission.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedTransmissionProtoMsg): FeedTransmission {
    return FeedTransmission.decode(message.value);
  },
  toProto(message: FeedTransmission): Uint8Array {
    return FeedTransmission.encode(message).finish();
  },
  toProtoMsg(message: FeedTransmission): FeedTransmissionProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
      value: FeedTransmission.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeedTransmission.typeUrl, FeedTransmission);
function createBaseFeedEpochAndRound(): FeedEpochAndRound {
  return {
    feedId: "",
    epochAndRound: undefined
  };
}
export const FeedEpochAndRound = {
  typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
  is(o: any): o is FeedEpochAndRound {
    return o && (o.$typeUrl === FeedEpochAndRound.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is FeedEpochAndRoundAmino {
    return o && (o.$typeUrl === FeedEpochAndRound.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: FeedEpochAndRound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedEpochAndRound {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedEpochAndRound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedEpochAndRound>): FeedEpochAndRound {
    const message = createBaseFeedEpochAndRound();
    message.feedId = object.feedId ?? "";
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  },
  fromAmino(object: FeedEpochAndRoundAmino): FeedEpochAndRound {
    const message = createBaseFeedEpochAndRound();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    return message;
  },
  toAmino(message: FeedEpochAndRound): FeedEpochAndRoundAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedEpochAndRoundAminoMsg): FeedEpochAndRound {
    return FeedEpochAndRound.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedEpochAndRoundProtoMsg): FeedEpochAndRound {
    return FeedEpochAndRound.decode(message.value);
  },
  toProto(message: FeedEpochAndRound): Uint8Array {
    return FeedEpochAndRound.encode(message).finish();
  },
  toProtoMsg(message: FeedEpochAndRound): FeedEpochAndRoundProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
      value: FeedEpochAndRound.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeedEpochAndRound.typeUrl, FeedEpochAndRound);
function createBaseFeedLatestAggregatorRoundIDs(): FeedLatestAggregatorRoundIDs {
  return {
    feedId: "",
    aggregatorRoundId: BigInt(0)
  };
}
export const FeedLatestAggregatorRoundIDs = {
  typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
  is(o: any): o is FeedLatestAggregatorRoundIDs {
    return o && (o.$typeUrl === FeedLatestAggregatorRoundIDs.typeUrl || typeof o.feedId === "string" && typeof o.aggregatorRoundId === "bigint");
  },
  isAmino(o: any): o is FeedLatestAggregatorRoundIDsAmino {
    return o && (o.$typeUrl === FeedLatestAggregatorRoundIDs.typeUrl || typeof o.feed_id === "string" && typeof o.aggregator_round_id === "bigint");
  },
  encode(message: FeedLatestAggregatorRoundIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.aggregatorRoundId !== BigInt(0)) {
      writer.uint32(16).uint64(message.aggregatorRoundId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedLatestAggregatorRoundIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedLatestAggregatorRoundIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.aggregatorRoundId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedLatestAggregatorRoundIDs>): FeedLatestAggregatorRoundIDs {
    const message = createBaseFeedLatestAggregatorRoundIDs();
    message.feedId = object.feedId ?? "";
    message.aggregatorRoundId = object.aggregatorRoundId !== undefined && object.aggregatorRoundId !== null ? BigInt(object.aggregatorRoundId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeedLatestAggregatorRoundIDsAmino): FeedLatestAggregatorRoundIDs {
    const message = createBaseFeedLatestAggregatorRoundIDs();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.aggregator_round_id !== undefined && object.aggregator_round_id !== null) {
      message.aggregatorRoundId = BigInt(object.aggregator_round_id);
    }
    return message;
  },
  toAmino(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.aggregator_round_id = message.aggregatorRoundId !== BigInt(0) ? message.aggregatorRoundId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedLatestAggregatorRoundIDsAminoMsg): FeedLatestAggregatorRoundIDs {
    return FeedLatestAggregatorRoundIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedLatestAggregatorRoundIDsProtoMsg): FeedLatestAggregatorRoundIDs {
    return FeedLatestAggregatorRoundIDs.decode(message.value);
  },
  toProto(message: FeedLatestAggregatorRoundIDs): Uint8Array {
    return FeedLatestAggregatorRoundIDs.encode(message).finish();
  },
  toProtoMsg(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
      value: FeedLatestAggregatorRoundIDs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeedLatestAggregatorRoundIDs.typeUrl, FeedLatestAggregatorRoundIDs);
function createBaseRewardPool(): RewardPool {
  return {
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const RewardPool = {
  typeUrl: "/injective.ocr.v1beta1.RewardPool",
  is(o: any): o is RewardPool {
    return o && (o.$typeUrl === RewardPool.typeUrl || typeof o.feedId === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is RewardPoolAmino {
    return o && (o.$typeUrl === RewardPool.typeUrl || typeof o.feed_id === "string" && Coin.isAmino(o.amount));
  },
  encode(message: RewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RewardPool>): RewardPool {
    const message = createBaseRewardPool();
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: RewardPoolAmino): RewardPool {
    const message = createBaseRewardPool();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: RewardPool): RewardPoolAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardPoolAminoMsg): RewardPool {
    return RewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardPoolProtoMsg): RewardPool {
    return RewardPool.decode(message.value);
  },
  toProto(message: RewardPool): Uint8Array {
    return RewardPool.encode(message).finish();
  },
  toProtoMsg(message: RewardPool): RewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.RewardPool",
      value: RewardPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardPool.typeUrl, RewardPool);
function createBaseFeedCounts(): FeedCounts {
  return {
    feedId: "",
    counts: []
  };
}
export const FeedCounts = {
  typeUrl: "/injective.ocr.v1beta1.FeedCounts",
  is(o: any): o is FeedCounts {
    return o && (o.$typeUrl === FeedCounts.typeUrl || typeof o.feedId === "string" && Array.isArray(o.counts) && (!o.counts.length || Count.is(o.counts[0])));
  },
  isAmino(o: any): o is FeedCountsAmino {
    return o && (o.$typeUrl === FeedCounts.typeUrl || typeof o.feed_id === "string" && Array.isArray(o.counts) && (!o.counts.length || Count.isAmino(o.counts[0])));
  },
  encode(message: FeedCounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    for (const v of message.counts) {
      Count.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedCounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.counts.push(Count.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeedCounts>): FeedCounts {
    const message = createBaseFeedCounts();
    message.feedId = object.feedId ?? "";
    message.counts = object.counts?.map(e => Count.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeedCountsAmino): FeedCounts {
    const message = createBaseFeedCounts();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    message.counts = object.counts?.map(e => Count.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeedCounts): FeedCountsAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    if (message.counts) {
      obj.counts = message.counts.map(e => e ? Count.toAmino(e) : undefined);
    } else {
      obj.counts = message.counts;
    }
    return obj;
  },
  fromAminoMsg(object: FeedCountsAminoMsg): FeedCounts {
    return FeedCounts.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedCountsProtoMsg): FeedCounts {
    return FeedCounts.decode(message.value);
  },
  toProto(message: FeedCounts): Uint8Array {
    return FeedCounts.encode(message).finish();
  },
  toProtoMsg(message: FeedCounts): FeedCountsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedCounts",
      value: FeedCounts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeedCounts.typeUrl, FeedCounts);
function createBaseCount(): Count {
  return {
    address: "",
    count: BigInt(0)
  };
}
export const Count = {
  typeUrl: "/injective.ocr.v1beta1.Count",
  is(o: any): o is Count {
    return o && (o.$typeUrl === Count.typeUrl || typeof o.address === "string" && typeof o.count === "bigint");
  },
  isAmino(o: any): o is CountAmino {
    return o && (o.$typeUrl === Count.typeUrl || typeof o.address === "string" && typeof o.count === "bigint");
  },
  encode(message: Count, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Count {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Count>): Count {
    const message = createBaseCount();
    message.address = object.address ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CountAmino): Count {
    const message = createBaseCount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: Count): CountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.count = message.count !== BigInt(0) ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CountAminoMsg): Count {
    return Count.fromAmino(object.value);
  },
  fromProtoMsg(message: CountProtoMsg): Count {
    return Count.decode(message.value);
  },
  toProto(message: Count): Uint8Array {
    return Count.encode(message).finish();
  },
  toProtoMsg(message: Count): CountProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Count",
      value: Count.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Count.typeUrl, Count);
function createBasePendingPayeeship(): PendingPayeeship {
  return {
    feedId: "",
    transmitter: "",
    proposedPayee: ""
  };
}
export const PendingPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
  is(o: any): o is PendingPayeeship {
    return o && (o.$typeUrl === PendingPayeeship.typeUrl || typeof o.feedId === "string" && typeof o.transmitter === "string" && typeof o.proposedPayee === "string");
  },
  isAmino(o: any): o is PendingPayeeshipAmino {
    return o && (o.$typeUrl === PendingPayeeship.typeUrl || typeof o.feed_id === "string" && typeof o.transmitter === "string" && typeof o.proposed_payee === "string");
  },
  encode(message: PendingPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.proposedPayee !== "") {
      writer.uint32(26).string(message.proposedPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingPayeeship {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingPayeeship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.transmitter = reader.string();
          break;
        case 3:
          message.proposedPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingPayeeship>): PendingPayeeship {
    const message = createBasePendingPayeeship();
    message.feedId = object.feedId ?? "";
    message.transmitter = object.transmitter ?? "";
    message.proposedPayee = object.proposedPayee ?? "";
    return message;
  },
  fromAmino(object: PendingPayeeshipAmino): PendingPayeeship {
    const message = createBasePendingPayeeship();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    if (object.proposed_payee !== undefined && object.proposed_payee !== null) {
      message.proposedPayee = object.proposed_payee;
    }
    return message;
  },
  toAmino(message: PendingPayeeship): PendingPayeeshipAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    obj.proposed_payee = message.proposedPayee === "" ? undefined : message.proposedPayee;
    return obj;
  },
  fromAminoMsg(object: PendingPayeeshipAminoMsg): PendingPayeeship {
    return PendingPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingPayeeshipProtoMsg): PendingPayeeship {
    return PendingPayeeship.decode(message.value);
  },
  toProto(message: PendingPayeeship): Uint8Array {
    return PendingPayeeship.encode(message).finish();
  },
  toProtoMsg(message: PendingPayeeship): PendingPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
      value: PendingPayeeship.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PendingPayeeship.typeUrl, PendingPayeeship);