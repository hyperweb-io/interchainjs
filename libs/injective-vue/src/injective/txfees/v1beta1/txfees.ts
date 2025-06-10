import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * @name Params
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.Params
 */
export interface Params {
  maxGasWantedPerTx: bigint;
  highGasTxThreshold: bigint;
  minGasPriceForHighGasTx: string;
  mempool1559Enabled: boolean;
  minGasPrice: string;
  defaultBaseFeeMultiplier: string;
  maxBaseFeeMultiplier: string;
  resetInterval: bigint;
  maxBlockChangeRate: string;
  targetBlockSpacePercentRate: string;
  recheckFeeLowBaseFee: string;
  recheckFeeHighBaseFee: string;
  recheckFeeBaseFeeThresholdMultiplier: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.Params";
  value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.Params
 */
export interface ParamsAmino {
  max_gas_wanted_per_tx: string;
  high_gas_tx_threshold: string;
  min_gas_price_for_high_gas_tx: string;
  mempool1559_enabled: boolean;
  min_gas_price: string;
  default_base_fee_multiplier: string;
  max_base_fee_multiplier: string;
  reset_interval: string;
  max_block_change_rate: string;
  target_block_space_percent_rate: string;
  recheck_fee_low_base_fee: string;
  recheck_fee_high_base_fee: string;
  recheck_fee_base_fee_threshold_multiplier: string;
}
export interface ParamsAminoMsg {
  type: "txfees/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    maxGasWantedPerTx: BigInt(0),
    highGasTxThreshold: BigInt(0),
    minGasPriceForHighGasTx: "",
    mempool1559Enabled: false,
    minGasPrice: "",
    defaultBaseFeeMultiplier: "",
    maxBaseFeeMultiplier: "",
    resetInterval: BigInt(0),
    maxBlockChangeRate: "",
    targetBlockSpacePercentRate: "",
    recheckFeeLowBaseFee: "",
    recheckFeeHighBaseFee: "",
    recheckFeeBaseFeeThresholdMultiplier: ""
  };
}
/**
 * @name Params
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.Params
 */
export const Params = {
  typeUrl: "/injective.txfees.v1beta1.Params",
  aminoType: "txfees/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxGasWantedPerTx === "bigint" && typeof o.highGasTxThreshold === "bigint" && typeof o.minGasPriceForHighGasTx === "string" && typeof o.mempool1559Enabled === "boolean" && typeof o.minGasPrice === "string" && typeof o.defaultBaseFeeMultiplier === "string" && typeof o.maxBaseFeeMultiplier === "string" && typeof o.resetInterval === "bigint" && typeof o.maxBlockChangeRate === "string" && typeof o.targetBlockSpacePercentRate === "string" && typeof o.recheckFeeLowBaseFee === "string" && typeof o.recheckFeeHighBaseFee === "string" && typeof o.recheckFeeBaseFeeThresholdMultiplier === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_gas_wanted_per_tx === "bigint" && typeof o.high_gas_tx_threshold === "bigint" && typeof o.min_gas_price_for_high_gas_tx === "string" && typeof o.mempool1559_enabled === "boolean" && typeof o.min_gas_price === "string" && typeof o.default_base_fee_multiplier === "string" && typeof o.max_base_fee_multiplier === "string" && typeof o.reset_interval === "bigint" && typeof o.max_block_change_rate === "string" && typeof o.target_block_space_percent_rate === "string" && typeof o.recheck_fee_low_base_fee === "string" && typeof o.recheck_fee_high_base_fee === "string" && typeof o.recheck_fee_base_fee_threshold_multiplier === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxGasWantedPerTx !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxGasWantedPerTx);
    }
    if (message.highGasTxThreshold !== BigInt(0)) {
      writer.uint32(16).uint64(message.highGasTxThreshold);
    }
    if (message.minGasPriceForHighGasTx !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minGasPriceForHighGasTx, 18).atomics);
    }
    if (message.mempool1559Enabled === true) {
      writer.uint32(32).bool(message.mempool1559Enabled);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minGasPrice, 18).atomics);
    }
    if (message.defaultBaseFeeMultiplier !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.defaultBaseFeeMultiplier, 18).atomics);
    }
    if (message.maxBaseFeeMultiplier !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxBaseFeeMultiplier, 18).atomics);
    }
    if (message.resetInterval !== BigInt(0)) {
      writer.uint32(64).int64(message.resetInterval);
    }
    if (message.maxBlockChangeRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxBlockChangeRate, 18).atomics);
    }
    if (message.targetBlockSpacePercentRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.targetBlockSpacePercentRate, 18).atomics);
    }
    if (message.recheckFeeLowBaseFee !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.recheckFeeLowBaseFee, 18).atomics);
    }
    if (message.recheckFeeHighBaseFee !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.recheckFeeHighBaseFee, 18).atomics);
    }
    if (message.recheckFeeBaseFeeThresholdMultiplier !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.recheckFeeBaseFeeThresholdMultiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxGasWantedPerTx = reader.uint64();
          break;
        case 2:
          message.highGasTxThreshold = reader.uint64();
          break;
        case 3:
          message.minGasPriceForHighGasTx = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.mempool1559Enabled = reader.bool();
          break;
        case 5:
          message.minGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.defaultBaseFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxBaseFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.resetInterval = reader.int64();
          break;
        case 9:
          message.maxBlockChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.targetBlockSpacePercentRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.recheckFeeLowBaseFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.recheckFeeHighBaseFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.recheckFeeBaseFeeThresholdMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxGasWantedPerTx = object.maxGasWantedPerTx !== undefined && object.maxGasWantedPerTx !== null ? BigInt(object.maxGasWantedPerTx.toString()) : BigInt(0);
    message.highGasTxThreshold = object.highGasTxThreshold !== undefined && object.highGasTxThreshold !== null ? BigInt(object.highGasTxThreshold.toString()) : BigInt(0);
    message.minGasPriceForHighGasTx = object.minGasPriceForHighGasTx ?? "";
    message.mempool1559Enabled = object.mempool1559Enabled ?? false;
    message.minGasPrice = object.minGasPrice ?? "";
    message.defaultBaseFeeMultiplier = object.defaultBaseFeeMultiplier ?? "";
    message.maxBaseFeeMultiplier = object.maxBaseFeeMultiplier ?? "";
    message.resetInterval = object.resetInterval !== undefined && object.resetInterval !== null ? BigInt(object.resetInterval.toString()) : BigInt(0);
    message.maxBlockChangeRate = object.maxBlockChangeRate ?? "";
    message.targetBlockSpacePercentRate = object.targetBlockSpacePercentRate ?? "";
    message.recheckFeeLowBaseFee = object.recheckFeeLowBaseFee ?? "";
    message.recheckFeeHighBaseFee = object.recheckFeeHighBaseFee ?? "";
    message.recheckFeeBaseFeeThresholdMultiplier = object.recheckFeeBaseFeeThresholdMultiplier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_gas_wanted_per_tx !== undefined && object.max_gas_wanted_per_tx !== null) {
      message.maxGasWantedPerTx = BigInt(object.max_gas_wanted_per_tx);
    }
    if (object.high_gas_tx_threshold !== undefined && object.high_gas_tx_threshold !== null) {
      message.highGasTxThreshold = BigInt(object.high_gas_tx_threshold);
    }
    if (object.min_gas_price_for_high_gas_tx !== undefined && object.min_gas_price_for_high_gas_tx !== null) {
      message.minGasPriceForHighGasTx = object.min_gas_price_for_high_gas_tx;
    }
    if (object.mempool1559_enabled !== undefined && object.mempool1559_enabled !== null) {
      message.mempool1559Enabled = object.mempool1559_enabled;
    }
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = object.min_gas_price;
    }
    if (object.default_base_fee_multiplier !== undefined && object.default_base_fee_multiplier !== null) {
      message.defaultBaseFeeMultiplier = object.default_base_fee_multiplier;
    }
    if (object.max_base_fee_multiplier !== undefined && object.max_base_fee_multiplier !== null) {
      message.maxBaseFeeMultiplier = object.max_base_fee_multiplier;
    }
    if (object.reset_interval !== undefined && object.reset_interval !== null) {
      message.resetInterval = BigInt(object.reset_interval);
    }
    if (object.max_block_change_rate !== undefined && object.max_block_change_rate !== null) {
      message.maxBlockChangeRate = object.max_block_change_rate;
    }
    if (object.target_block_space_percent_rate !== undefined && object.target_block_space_percent_rate !== null) {
      message.targetBlockSpacePercentRate = object.target_block_space_percent_rate;
    }
    if (object.recheck_fee_low_base_fee !== undefined && object.recheck_fee_low_base_fee !== null) {
      message.recheckFeeLowBaseFee = object.recheck_fee_low_base_fee;
    }
    if (object.recheck_fee_high_base_fee !== undefined && object.recheck_fee_high_base_fee !== null) {
      message.recheckFeeHighBaseFee = object.recheck_fee_high_base_fee;
    }
    if (object.recheck_fee_base_fee_threshold_multiplier !== undefined && object.recheck_fee_base_fee_threshold_multiplier !== null) {
      message.recheckFeeBaseFeeThresholdMultiplier = object.recheck_fee_base_fee_threshold_multiplier;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_gas_wanted_per_tx = message.maxGasWantedPerTx !== BigInt(0) ? message.maxGasWantedPerTx?.toString() : undefined;
    obj.high_gas_tx_threshold = message.highGasTxThreshold !== BigInt(0) ? message.highGasTxThreshold?.toString() : undefined;
    obj.min_gas_price_for_high_gas_tx = message.minGasPriceForHighGasTx === "" ? undefined : Decimal.fromUserInput(message.minGasPriceForHighGasTx, 18).atomics;
    obj.mempool1559_enabled = message.mempool1559Enabled === false ? undefined : message.mempool1559Enabled;
    obj.min_gas_price = message.minGasPrice === "" ? undefined : Decimal.fromUserInput(message.minGasPrice, 18).atomics;
    obj.default_base_fee_multiplier = message.defaultBaseFeeMultiplier === "" ? undefined : Decimal.fromUserInput(message.defaultBaseFeeMultiplier, 18).atomics;
    obj.max_base_fee_multiplier = message.maxBaseFeeMultiplier === "" ? undefined : Decimal.fromUserInput(message.maxBaseFeeMultiplier, 18).atomics;
    obj.reset_interval = message.resetInterval !== BigInt(0) ? message.resetInterval?.toString() : undefined;
    obj.max_block_change_rate = message.maxBlockChangeRate === "" ? undefined : Decimal.fromUserInput(message.maxBlockChangeRate, 18).atomics;
    obj.target_block_space_percent_rate = message.targetBlockSpacePercentRate === "" ? undefined : Decimal.fromUserInput(message.targetBlockSpacePercentRate, 18).atomics;
    obj.recheck_fee_low_base_fee = message.recheckFeeLowBaseFee === "" ? undefined : Decimal.fromUserInput(message.recheckFeeLowBaseFee, 18).atomics;
    obj.recheck_fee_high_base_fee = message.recheckFeeHighBaseFee === "" ? undefined : Decimal.fromUserInput(message.recheckFeeHighBaseFee, 18).atomics;
    obj.recheck_fee_base_fee_threshold_multiplier = message.recheckFeeBaseFeeThresholdMultiplier === "" ? undefined : Decimal.fromUserInput(message.recheckFeeBaseFeeThresholdMultiplier, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "txfees/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};