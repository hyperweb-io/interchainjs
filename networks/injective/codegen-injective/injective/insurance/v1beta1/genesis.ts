import { Params, ParamsAmino, InsuranceFund, InsuranceFundAmino, RedemptionSchedule, RedemptionScheduleAmino } from "./insurance";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to insurance. */
  params: Params;
  /**
   * insurance_funds describes the insurance funds available for derivative
   * markets
   */
  insuranceFunds: InsuranceFund[];
  /** redemption_schedule describes the redemption requests pending */
  redemptionSchedule: RedemptionSchedule[];
  /**
   * next_share_denom_id describes the next share denom id to be used for newly
   * creating insurance fund incremented by 1 per insurance fund creation
   */
  nextShareDenomId: bigint;
  /**
   * next_redemption_schedule_id describes next redemption schedule id to be
   * used for next schedule incremented by 1 per redemption request
   */
  nextRedemptionScheduleId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the insurance module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to insurance. */
  params: ParamsAmino;
  /**
   * insurance_funds describes the insurance funds available for derivative
   * markets
   */
  insurance_funds: InsuranceFundAmino[];
  /** redemption_schedule describes the redemption requests pending */
  redemption_schedule: RedemptionScheduleAmino[];
  /**
   * next_share_denom_id describes the next share denom id to be used for newly
   * creating insurance fund incremented by 1 per insurance fund creation
   */
  next_share_denom_id: string;
  /**
   * next_redemption_schedule_id describes next redemption schedule id to be
   * used for next schedule incremented by 1 per redemption request
   */
  next_redemption_schedule_id: string;
}
export interface GenesisStateAminoMsg {
  type: "/injective.insurance.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    insuranceFunds: [],
    redemptionSchedule: [],
    nextShareDenomId: BigInt(0),
    nextRedemptionScheduleId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/injective.insurance.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.insuranceFunds) && (!o.insuranceFunds.length || InsuranceFund.is(o.insuranceFunds[0])) && Array.isArray(o.redemptionSchedule) && (!o.redemptionSchedule.length || RedemptionSchedule.is(o.redemptionSchedule[0])) && typeof o.nextShareDenomId === "bigint" && typeof o.nextRedemptionScheduleId === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.insurance_funds) && (!o.insurance_funds.length || InsuranceFund.isAmino(o.insurance_funds[0])) && Array.isArray(o.redemption_schedule) && (!o.redemption_schedule.length || RedemptionSchedule.isAmino(o.redemption_schedule[0])) && typeof o.next_share_denom_id === "bigint" && typeof o.next_redemption_schedule_id === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.insuranceFunds) {
      InsuranceFund.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.redemptionSchedule) {
      RedemptionSchedule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextShareDenomId !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextShareDenomId);
    }
    if (message.nextRedemptionScheduleId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextRedemptionScheduleId);
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
          message.insuranceFunds.push(InsuranceFund.decode(reader, reader.uint32()));
          break;
        case 3:
          message.redemptionSchedule.push(RedemptionSchedule.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextShareDenomId = reader.uint64();
          break;
        case 5:
          message.nextRedemptionScheduleId = reader.uint64();
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
    message.insuranceFunds = object.insuranceFunds?.map(e => InsuranceFund.fromPartial(e)) || [];
    message.redemptionSchedule = object.redemptionSchedule?.map(e => RedemptionSchedule.fromPartial(e)) || [];
    message.nextShareDenomId = object.nextShareDenomId !== undefined && object.nextShareDenomId !== null ? BigInt(object.nextShareDenomId.toString()) : BigInt(0);
    message.nextRedemptionScheduleId = object.nextRedemptionScheduleId !== undefined && object.nextRedemptionScheduleId !== null ? BigInt(object.nextRedemptionScheduleId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.insuranceFunds = object.insurance_funds?.map(e => InsuranceFund.fromAmino(e)) || [];
    message.redemptionSchedule = object.redemption_schedule?.map(e => RedemptionSchedule.fromAmino(e)) || [];
    if (object.next_share_denom_id !== undefined && object.next_share_denom_id !== null) {
      message.nextShareDenomId = BigInt(object.next_share_denom_id);
    }
    if (object.next_redemption_schedule_id !== undefined && object.next_redemption_schedule_id !== null) {
      message.nextRedemptionScheduleId = BigInt(object.next_redemption_schedule_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.insuranceFunds) {
      obj.insurance_funds = message.insuranceFunds.map(e => e ? InsuranceFund.toAmino(e) : undefined);
    } else {
      obj.insurance_funds = message.insuranceFunds;
    }
    if (message.redemptionSchedule) {
      obj.redemption_schedule = message.redemptionSchedule.map(e => e ? RedemptionSchedule.toAmino(e) : undefined);
    } else {
      obj.redemption_schedule = message.redemptionSchedule;
    }
    obj.next_share_denom_id = message.nextShareDenomId !== BigInt(0) ? message.nextShareDenomId.toString() : undefined;
    obj.next_redemption_schedule_id = message.nextRedemptionScheduleId !== BigInt(0) ? message.nextRedemptionScheduleId.toString() : undefined;
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
      typeUrl: "/injective.insurance.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);