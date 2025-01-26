import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  preBlockers: string[];
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  endBlockers: string[];
  /**
   * tx_validators specifies the module names for tx validators
   * If this is left empty, no tx validation will be registered.
   */
  txValidators: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  exportGenesis: string[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order (alphabetically).
   */
  orderMigrations: string[];
  /** GasConfig is the config object for gas limits. */
  gasConfig?: GasConfig;
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  overrideStoreKeys: StoreKeyConfig[];
  /**
   * skip_store_keys is an optional list of store keys to skip when constructing the
   * module's keeper. This is useful when a module does not have a store key.
   * NOTE: the provided environment variable will have a fake store service.
   */
  skipStoreKeys: string[];
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.app.runtime.v2.Module";
  value: Uint8Array;
}
/** Module is the config object for the runtime module. */
export interface ModuleAmino {
  /** app_name is the name of the app. */
  app_name: string;
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  pre_blockers: string[];
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers: string[];
  /**
   * tx_validators specifies the module names for tx validators
   * If this is left empty, no tx validation will be registered.
   */
  tx_validators: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis: string[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order (alphabetically).
   */
  order_migrations: string[];
  /** GasConfig is the config object for gas limits. */
  gas_config?: GasConfigAmino;
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys: StoreKeyConfigAmino[];
  /**
   * skip_store_keys is an optional list of store keys to skip when constructing the
   * module's keeper. This is useful when a module does not have a store key.
   * NOTE: the provided environment variable will have a fake store service.
   */
  skip_store_keys: string[];
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** GasConfig is the config object for gas limits. */
export interface GasConfig {
  /** validate_tx_gas_limit is the gas limit for validating a tx. */
  validateTxGasLimit: bigint;
  /** query_gas_limit is the gas limit for querying. */
  queryGasLimit: bigint;
  /** simulation_gas_limit is the gas limit for simulation. */
  simulationGasLimit: bigint;
}
export interface GasConfigProtoMsg {
  typeUrl: "/cosmos.app.runtime.v2.GasConfig";
  value: Uint8Array;
}
/** GasConfig is the config object for gas limits. */
export interface GasConfigAmino {
  /** validate_tx_gas_limit is the gas limit for validating a tx. */
  validate_tx_gas_limit: string;
  /** query_gas_limit is the gas limit for querying. */
  query_gas_limit: string;
  /** simulation_gas_limit is the gas limit for simulation. */
  simulation_gas_limit: string;
}
export interface GasConfigAminoMsg {
  type: "cosmos-sdk/GasConfig";
  value: GasConfigAmino;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */
  kvStoreKey: string;
}
export interface StoreKeyConfigProtoMsg {
  typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig";
  value: Uint8Array;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigAmino {
  /** name of the module to override the store key of */
  module_name: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key: string;
}
export interface StoreKeyConfigAminoMsg {
  type: "cosmos-sdk/StoreKeyConfig";
  value: StoreKeyConfigAmino;
}
function createBaseModule(): Module {
  return {
    appName: "",
    preBlockers: [],
    beginBlockers: [],
    endBlockers: [],
    txValidators: [],
    initGenesis: [],
    exportGenesis: [],
    orderMigrations: [],
    gasConfig: undefined,
    overrideStoreKeys: [],
    skipStoreKeys: []
  };
}
export const Module = {
  typeUrl: "/cosmos.app.runtime.v2.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.appName === "string" && Array.isArray(o.preBlockers) && (!o.preBlockers.length || typeof o.preBlockers[0] === "string") && Array.isArray(o.beginBlockers) && (!o.beginBlockers.length || typeof o.beginBlockers[0] === "string") && Array.isArray(o.endBlockers) && (!o.endBlockers.length || typeof o.endBlockers[0] === "string") && Array.isArray(o.txValidators) && (!o.txValidators.length || typeof o.txValidators[0] === "string") && Array.isArray(o.initGenesis) && (!o.initGenesis.length || typeof o.initGenesis[0] === "string") && Array.isArray(o.exportGenesis) && (!o.exportGenesis.length || typeof o.exportGenesis[0] === "string") && Array.isArray(o.orderMigrations) && (!o.orderMigrations.length || typeof o.orderMigrations[0] === "string") && Array.isArray(o.overrideStoreKeys) && (!o.overrideStoreKeys.length || StoreKeyConfig.is(o.overrideStoreKeys[0])) && Array.isArray(o.skipStoreKeys) && (!o.skipStoreKeys.length || typeof o.skipStoreKeys[0] === "string"));
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.pre_blockers) && (!o.pre_blockers.length || typeof o.pre_blockers[0] === "string") && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.tx_validators) && (!o.tx_validators.length || typeof o.tx_validators[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isAmino(o.override_store_keys[0])) && Array.isArray(o.skip_store_keys) && (!o.skip_store_keys.length || typeof o.skip_store_keys[0] === "string"));
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.preBlockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.endBlockers) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.txValidators) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.initGenesis) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.orderMigrations) {
      writer.uint32(66).string(v!);
    }
    if (message.gasConfig !== undefined) {
      GasConfig.encode(message.gasConfig, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.skipStoreKeys) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.preBlockers.push(reader.string());
          break;
        case 3:
          message.beginBlockers.push(reader.string());
          break;
        case 4:
          message.endBlockers.push(reader.string());
          break;
        case 5:
          message.txValidators.push(reader.string());
          break;
        case 6:
          message.initGenesis.push(reader.string());
          break;
        case 7:
          message.exportGenesis.push(reader.string());
          break;
        case 8:
          message.orderMigrations.push(reader.string());
          break;
        case 9:
          message.gasConfig = GasConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        case 11:
          message.skipStoreKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.preBlockers = object.preBlockers?.map(e => e) || [];
    message.beginBlockers = object.beginBlockers?.map(e => e) || [];
    message.endBlockers = object.endBlockers?.map(e => e) || [];
    message.txValidators = object.txValidators?.map(e => e) || [];
    message.initGenesis = object.initGenesis?.map(e => e) || [];
    message.exportGenesis = object.exportGenesis?.map(e => e) || [];
    message.orderMigrations = object.orderMigrations?.map(e => e) || [];
    message.gasConfig = object.gasConfig !== undefined && object.gasConfig !== null ? GasConfig.fromPartial(object.gasConfig) : undefined;
    message.overrideStoreKeys = object.overrideStoreKeys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    message.skipStoreKeys = object.skipStoreKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    message.preBlockers = object.pre_blockers?.map(e => e) || [];
    message.beginBlockers = object.begin_blockers?.map(e => e) || [];
    message.endBlockers = object.end_blockers?.map(e => e) || [];
    message.txValidators = object.tx_validators?.map(e => e) || [];
    message.initGenesis = object.init_genesis?.map(e => e) || [];
    message.exportGenesis = object.export_genesis?.map(e => e) || [];
    message.orderMigrations = object.order_migrations?.map(e => e) || [];
    if (object.gas_config !== undefined && object.gas_config !== null) {
      message.gasConfig = GasConfig.fromAmino(object.gas_config);
    }
    message.overrideStoreKeys = object.override_store_keys?.map(e => StoreKeyConfig.fromAmino(e)) || [];
    message.skipStoreKeys = object.skip_store_keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.app_name = message.appName === "" ? undefined : message.appName;
    if (message.preBlockers) {
      obj.pre_blockers = message.preBlockers.map(e => e);
    } else {
      obj.pre_blockers = message.preBlockers;
    }
    if (message.beginBlockers) {
      obj.begin_blockers = message.beginBlockers.map(e => e);
    } else {
      obj.begin_blockers = message.beginBlockers;
    }
    if (message.endBlockers) {
      obj.end_blockers = message.endBlockers.map(e => e);
    } else {
      obj.end_blockers = message.endBlockers;
    }
    if (message.txValidators) {
      obj.tx_validators = message.txValidators.map(e => e);
    } else {
      obj.tx_validators = message.txValidators;
    }
    if (message.initGenesis) {
      obj.init_genesis = message.initGenesis.map(e => e);
    } else {
      obj.init_genesis = message.initGenesis;
    }
    if (message.exportGenesis) {
      obj.export_genesis = message.exportGenesis.map(e => e);
    } else {
      obj.export_genesis = message.exportGenesis;
    }
    if (message.orderMigrations) {
      obj.order_migrations = message.orderMigrations.map(e => e);
    } else {
      obj.order_migrations = message.orderMigrations;
    }
    obj.gas_config = message.gasConfig ? GasConfig.toAmino(message.gasConfig) : undefined;
    if (message.overrideStoreKeys) {
      obj.override_store_keys = message.overrideStoreKeys.map(e => e ? StoreKeyConfig.toAmino(e) : undefined);
    } else {
      obj.override_store_keys = message.overrideStoreKeys;
    }
    if (message.skipStoreKeys) {
      obj.skip_store_keys = message.skipStoreKeys.map(e => e);
    } else {
      obj.skip_store_keys = message.skipStoreKeys;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.Module",
      value: Module.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseGasConfig(): GasConfig {
  return {
    validateTxGasLimit: BigInt(0),
    queryGasLimit: BigInt(0),
    simulationGasLimit: BigInt(0)
  };
}
export const GasConfig = {
  typeUrl: "/cosmos.app.runtime.v2.GasConfig",
  aminoType: "cosmos-sdk/GasConfig",
  is(o: any): o is GasConfig {
    return o && (o.$typeUrl === GasConfig.typeUrl || typeof o.validateTxGasLimit === "bigint" && typeof o.queryGasLimit === "bigint" && typeof o.simulationGasLimit === "bigint");
  },
  isAmino(o: any): o is GasConfigAmino {
    return o && (o.$typeUrl === GasConfig.typeUrl || typeof o.validate_tx_gas_limit === "bigint" && typeof o.query_gas_limit === "bigint" && typeof o.simulation_gas_limit === "bigint");
  },
  encode(message: GasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validateTxGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.validateTxGasLimit);
    }
    if (message.queryGasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryGasLimit);
    }
    if (message.simulationGasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.simulationGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validateTxGasLimit = reader.uint64();
          break;
        case 2:
          message.queryGasLimit = reader.uint64();
          break;
        case 3:
          message.simulationGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasConfig>): GasConfig {
    const message = createBaseGasConfig();
    message.validateTxGasLimit = object.validateTxGasLimit !== undefined && object.validateTxGasLimit !== null ? BigInt(object.validateTxGasLimit.toString()) : BigInt(0);
    message.queryGasLimit = object.queryGasLimit !== undefined && object.queryGasLimit !== null ? BigInt(object.queryGasLimit.toString()) : BigInt(0);
    message.simulationGasLimit = object.simulationGasLimit !== undefined && object.simulationGasLimit !== null ? BigInt(object.simulationGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GasConfigAmino): GasConfig {
    const message = createBaseGasConfig();
    if (object.validate_tx_gas_limit !== undefined && object.validate_tx_gas_limit !== null) {
      message.validateTxGasLimit = BigInt(object.validate_tx_gas_limit);
    }
    if (object.query_gas_limit !== undefined && object.query_gas_limit !== null) {
      message.queryGasLimit = BigInt(object.query_gas_limit);
    }
    if (object.simulation_gas_limit !== undefined && object.simulation_gas_limit !== null) {
      message.simulationGasLimit = BigInt(object.simulation_gas_limit);
    }
    return message;
  },
  toAmino(message: GasConfig): GasConfigAmino {
    const obj: any = {};
    obj.validate_tx_gas_limit = message.validateTxGasLimit !== BigInt(0) ? message.validateTxGasLimit?.toString() : undefined;
    obj.query_gas_limit = message.queryGasLimit !== BigInt(0) ? message.queryGasLimit?.toString() : undefined;
    obj.simulation_gas_limit = message.simulationGasLimit !== BigInt(0) ? message.simulationGasLimit?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasConfigAminoMsg): GasConfig {
    return GasConfig.fromAmino(object.value);
  },
  toAminoMsg(message: GasConfig): GasConfigAminoMsg {
    return {
      type: "cosmos-sdk/GasConfig",
      value: GasConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: GasConfigProtoMsg): GasConfig {
    return GasConfig.decode(message.value);
  },
  toProto(message: GasConfig): Uint8Array {
    return GasConfig.encode(message).finish();
  },
  toProtoMsg(message: GasConfig): GasConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.GasConfig",
      value: GasConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasConfig.typeUrl, GasConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(GasConfig.aminoType, GasConfig.typeUrl);
function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}
export const StoreKeyConfig = {
  typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig",
  aminoType: "cosmos-sdk/StoreKeyConfig",
  is(o: any): o is StoreKeyConfig {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.moduleName === "string" && typeof o.kvStoreKey === "string");
  },
  isAmino(o: any): o is StoreKeyConfigAmino {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  encode(message: StoreKeyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  },
  fromAmino(object: StoreKeyConfigAmino): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
      message.kvStoreKey = object.kv_store_key;
    }
    return message;
  },
  toAmino(message: StoreKeyConfig): StoreKeyConfigAmino {
    const obj: any = {};
    obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
    obj.kv_store_key = message.kvStoreKey === "" ? undefined : message.kvStoreKey;
    return obj;
  },
  fromAminoMsg(object: StoreKeyConfigAminoMsg): StoreKeyConfig {
    return StoreKeyConfig.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKeyConfig): StoreKeyConfigAminoMsg {
    return {
      type: "cosmos-sdk/StoreKeyConfig",
      value: StoreKeyConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKeyConfigProtoMsg): StoreKeyConfig {
    return StoreKeyConfig.decode(message.value);
  },
  toProto(message: StoreKeyConfig): Uint8Array {
    return StoreKeyConfig.encode(message).finish();
  },
  toProtoMsg(message: StoreKeyConfig): StoreKeyConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig",
      value: StoreKeyConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKeyConfig.typeUrl, StoreKeyConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKeyConfig.aminoType, StoreKeyConfig.typeUrl);