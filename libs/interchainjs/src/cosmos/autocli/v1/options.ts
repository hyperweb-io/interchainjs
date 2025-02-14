import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptions {
  /** tx describes the tx commands for the module. */
  tx?: ServiceCommandDescriptor;
  /** query describes the queries commands for the module. */
  query?: ServiceCommandDescriptor;
}
export interface ModuleOptionsProtoMsg {
  typeUrl: "/cosmos.autocli.v1.ModuleOptions";
  value: Uint8Array;
}
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptionsAmino {
  /** tx describes the tx commands for the module. */
  tx?: ServiceCommandDescriptorAmino;
  /** query describes the queries commands for the module. */
  query?: ServiceCommandDescriptorAmino;
}
export interface ModuleOptionsAminoMsg {
  type: "cosmos-sdk/ModuleOptions";
  value: ModuleOptionsAmino;
}
export interface ServiceCommandDescriptor_SubCommandsEntry {
  key: string;
  value?: ServiceCommandDescriptor;
}
export interface ServiceCommandDescriptor_SubCommandsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ServiceCommandDescriptor_SubCommandsEntryAmino {
  key: string;
  value?: ServiceCommandDescriptorAmino;
}
export interface ServiceCommandDescriptor_SubCommandsEntryAminoMsg {
  type: string;
  value: ServiceCommandDescriptor_SubCommandsEntryAmino;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptor {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */
  rpcCommandOptions: RpcCommandOptions[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */
  subCommands: {
    [key: string]: ServiceCommandDescriptor;
  };
}
export interface ServiceCommandDescriptorProtoMsg {
  typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor";
  value: Uint8Array;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptorAmino {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */
  rpc_command_options: RpcCommandOptionsAmino[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */
  sub_commands: {
    [key: string]: ServiceCommandDescriptorAmino;
  };
}
export interface ServiceCommandDescriptorAminoMsg {
  type: "cosmos-sdk/ServiceCommandDescriptor";
  value: ServiceCommandDescriptorAmino;
}
export interface RpcCommandOptions_FlagOptionsEntry {
  key: string;
  value?: FlagOptions;
}
export interface RpcCommandOptions_FlagOptionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface RpcCommandOptions_FlagOptionsEntryAmino {
  key: string;
  value?: FlagOptionsAmino;
}
export interface RpcCommandOptions_FlagOptionsEntryAminoMsg {
  type: string;
  value: RpcCommandOptions_FlagOptionsEntryAmino;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptions {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpcMethod: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   * 
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */
  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */
  long: string;
  /** short is the short description shown in the 'help' output. */
  short: string;
  /** example is examples of how to use the command. */
  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */
  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */
  suggestFor: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */
  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */
  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */
  flagOptions: {
    [key: string]: FlagOptions;
  };
  /** positional_args specifies positional arguments for the command. */
  positionalArgs: PositionalArgDescriptor[];
  /** skip specifies whether to skip this rpc method when generating commands. */
  skip: boolean;
}
export interface RpcCommandOptionsProtoMsg {
  typeUrl: "/cosmos.autocli.v1.RpcCommandOptions";
  value: Uint8Array;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptionsAmino {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpc_method: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   * 
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */
  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */
  long: string;
  /** short is the short description shown in the 'help' output. */
  short: string;
  /** example is examples of how to use the command. */
  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */
  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */
  suggest_for: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */
  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */
  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */
  flag_options: {
    [key: string]: FlagOptionsAmino;
  };
  /** positional_args specifies positional arguments for the command. */
  positional_args: PositionalArgDescriptorAmino[];
  /** skip specifies whether to skip this rpc method when generating commands. */
  skip: boolean;
}
export interface RpcCommandOptionsAminoMsg {
  type: "cosmos-sdk/RpcCommandOptions";
  value: RpcCommandOptionsAmino;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptions {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */
  shorthand: string;
  /** usage is the help message. */
  usage: string;
  /** default_value is the default value as text. */
  defaultValue: string;
  /** deprecated is the usage text to show if this flag is deprecated. */
  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
  shorthandDeprecated: string;
  /** hidden hides the flag from help/usage text */
  hidden: boolean;
}
export interface FlagOptionsProtoMsg {
  typeUrl: "/cosmos.autocli.v1.FlagOptions";
  value: Uint8Array;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptionsAmino {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */
  shorthand: string;
  /** usage is the help message. */
  usage: string;
  /** default_value is the default value as text. */
  default_value: string;
  /** deprecated is the usage text to show if this flag is deprecated. */
  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
  shorthand_deprecated: string;
  /** hidden hides the flag from help/usage text */
  hidden: boolean;
}
export interface FlagOptionsAminoMsg {
  type: "cosmos-sdk/FlagOptions";
  value: FlagOptionsAmino;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptor {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  protoField: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */
  varargs: boolean;
}
export interface PositionalArgDescriptorProtoMsg {
  typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor";
  value: Uint8Array;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptorAmino {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  proto_field: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */
  varargs: boolean;
}
export interface PositionalArgDescriptorAminoMsg {
  type: "cosmos-sdk/PositionalArgDescriptor";
  value: PositionalArgDescriptorAmino;
}
function createBaseModuleOptions(): ModuleOptions {
  return {
    tx: undefined,
    query: undefined
  };
}
export const ModuleOptions = {
  typeUrl: "/cosmos.autocli.v1.ModuleOptions",
  aminoType: "cosmos-sdk/ModuleOptions",
  is(o: any): o is ModuleOptions {
    return o && o.$typeUrl === ModuleOptions.typeUrl;
  },
  isAmino(o: any): o is ModuleOptionsAmino {
    return o && o.$typeUrl === ModuleOptions.typeUrl;
  },
  encode(message: ModuleOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModuleOptions>): ModuleOptions {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  },
  fromAmino(object: ModuleOptionsAmino): ModuleOptions {
    const message = createBaseModuleOptions();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = ServiceCommandDescriptor.fromAmino(object.tx);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ServiceCommandDescriptor.fromAmino(object.query);
    }
    return message;
  },
  toAmino(message: ModuleOptions): ModuleOptionsAmino {
    const obj: any = {};
    obj.tx = message.tx ? ServiceCommandDescriptor.toAmino(message.tx) : undefined;
    obj.query = message.query ? ServiceCommandDescriptor.toAmino(message.query) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleOptionsAminoMsg): ModuleOptions {
    return ModuleOptions.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleOptions): ModuleOptionsAminoMsg {
    return {
      type: "cosmos-sdk/ModuleOptions",
      value: ModuleOptions.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleOptionsProtoMsg): ModuleOptions {
    return ModuleOptions.decode(message.value);
  },
  toProto(message: ModuleOptions): Uint8Array {
    return ModuleOptions.encode(message).finish();
  },
  toProtoMsg(message: ModuleOptions): ModuleOptionsProtoMsg {
    return {
      typeUrl: "/cosmos.autocli.v1.ModuleOptions",
      value: ModuleOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ServiceCommandDescriptor.registerTypeUrl();
  }
};
function createBaseServiceCommandDescriptor_SubCommandsEntry(): ServiceCommandDescriptor_SubCommandsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message: ServiceCommandDescriptor_SubCommandsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor_SubCommandsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>): ServiceCommandDescriptor_SubCommandsEntry {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: ServiceCommandDescriptor_SubCommandsEntryAmino): ServiceCommandDescriptor_SubCommandsEntry {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ServiceCommandDescriptor.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: ServiceCommandDescriptor_SubCommandsEntry): ServiceCommandDescriptor_SubCommandsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? ServiceCommandDescriptor.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceCommandDescriptor_SubCommandsEntryAminoMsg): ServiceCommandDescriptor_SubCommandsEntry {
    return ServiceCommandDescriptor_SubCommandsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceCommandDescriptor_SubCommandsEntryProtoMsg): ServiceCommandDescriptor_SubCommandsEntry {
    return ServiceCommandDescriptor_SubCommandsEntry.decode(message.value);
  },
  toProto(message: ServiceCommandDescriptor_SubCommandsEntry): Uint8Array {
    return ServiceCommandDescriptor_SubCommandsEntry.encode(message).finish();
  },
  registerTypeUrl() {
    ServiceCommandDescriptor.registerTypeUrl();
  }
};
function createBaseServiceCommandDescriptor(): ServiceCommandDescriptor {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {}
  };
}
export const ServiceCommandDescriptor = {
  typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
  aminoType: "cosmos-sdk/ServiceCommandDescriptor",
  is(o: any): o is ServiceCommandDescriptor {
    return o && (o.$typeUrl === ServiceCommandDescriptor.typeUrl || typeof o.service === "string" && Array.isArray(o.rpcCommandOptions) && (!o.rpcCommandOptions.length || RpcCommandOptions.is(o.rpcCommandOptions[0])) && isSet(o.subCommands));
  },
  isAmino(o: any): o is ServiceCommandDescriptorAmino {
    return o && (o.$typeUrl === ServiceCommandDescriptor.typeUrl || typeof o.service === "string" && Array.isArray(o.rpc_command_options) && (!o.rpc_command_options.length || RpcCommandOptions.isAmino(o.rpc_command_options[0])) && isSet(o.sub_commands));
  },
  encode(message: ServiceCommandDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.subCommands[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceCommandDescriptor>): ServiceCommandDescriptor {
    const message = createBaseServiceCommandDescriptor();
    message.service = object.service ?? "";
    message.rpcCommandOptions = object.rpcCommandOptions?.map(e => RpcCommandOptions.fromPartial(e)) || [];
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: ServiceCommandDescriptorAmino): ServiceCommandDescriptor {
    const message = createBaseServiceCommandDescriptor();
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    }
    message.rpcCommandOptions = object.rpc_command_options?.map(e => RpcCommandOptions.fromAmino(e)) || [];
    message.subCommands = Object.entries(object.sub_commands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: ServiceCommandDescriptor): ServiceCommandDescriptorAmino {
    const obj: any = {};
    obj.service = message.service === "" ? undefined : message.service;
    if (message.rpcCommandOptions) {
      obj.rpc_command_options = message.rpcCommandOptions.map(e => e ? RpcCommandOptions.toAmino(e) : undefined);
    } else {
      obj.rpc_command_options = message.rpcCommandOptions;
    }
    obj.sub_commands = {};
    if (message.subCommands) {
      Object.entries(message.subCommands).forEach(([k, v]) => {
        obj.sub_commands[k] = ServiceCommandDescriptor.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: ServiceCommandDescriptorAminoMsg): ServiceCommandDescriptor {
    return ServiceCommandDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: ServiceCommandDescriptor): ServiceCommandDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/ServiceCommandDescriptor",
      value: ServiceCommandDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: ServiceCommandDescriptorProtoMsg): ServiceCommandDescriptor {
    return ServiceCommandDescriptor.decode(message.value);
  },
  toProto(message: ServiceCommandDescriptor): Uint8Array {
    return ServiceCommandDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ServiceCommandDescriptor): ServiceCommandDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
      value: ServiceCommandDescriptor.encode(message).finish()
    };
  },
  registerTypeUrl() {
    RpcCommandOptions.registerTypeUrl();
    ServiceCommandDescriptor.registerTypeUrl();
  }
};
function createBaseRpcCommandOptions_FlagOptionsEntry(): RpcCommandOptions_FlagOptionsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const RpcCommandOptions_FlagOptionsEntry = {
  encode(message: RpcCommandOptions_FlagOptionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions_FlagOptionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RpcCommandOptions_FlagOptionsEntry>): RpcCommandOptions_FlagOptionsEntry {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: RpcCommandOptions_FlagOptionsEntryAmino): RpcCommandOptions_FlagOptionsEntry {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = FlagOptions.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: RpcCommandOptions_FlagOptionsEntry): RpcCommandOptions_FlagOptionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? FlagOptions.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: RpcCommandOptions_FlagOptionsEntryAminoMsg): RpcCommandOptions_FlagOptionsEntry {
    return RpcCommandOptions_FlagOptionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RpcCommandOptions_FlagOptionsEntryProtoMsg): RpcCommandOptions_FlagOptionsEntry {
    return RpcCommandOptions_FlagOptionsEntry.decode(message.value);
  },
  toProto(message: RpcCommandOptions_FlagOptionsEntry): Uint8Array {
    return RpcCommandOptions_FlagOptionsEntry.encode(message).finish();
  },
  registerTypeUrl() {
    FlagOptions.registerTypeUrl();
  }
};
function createBaseRpcCommandOptions(): RpcCommandOptions {
  return {
    rpcMethod: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggestFor: [],
    deprecated: "",
    version: "",
    flagOptions: {},
    positionalArgs: [],
    skip: false
  };
}
export const RpcCommandOptions = {
  typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
  aminoType: "cosmos-sdk/RpcCommandOptions",
  is(o: any): o is RpcCommandOptions {
    return o && (o.$typeUrl === RpcCommandOptions.typeUrl || typeof o.rpcMethod === "string" && typeof o.use === "string" && typeof o.long === "string" && typeof o.short === "string" && typeof o.example === "string" && Array.isArray(o.alias) && (!o.alias.length || typeof o.alias[0] === "string") && Array.isArray(o.suggestFor) && (!o.suggestFor.length || typeof o.suggestFor[0] === "string") && typeof o.deprecated === "string" && typeof o.version === "string" && isSet(o.flagOptions) && Array.isArray(o.positionalArgs) && (!o.positionalArgs.length || PositionalArgDescriptor.is(o.positionalArgs[0])) && typeof o.skip === "boolean");
  },
  isAmino(o: any): o is RpcCommandOptionsAmino {
    return o && (o.$typeUrl === RpcCommandOptions.typeUrl || typeof o.rpc_method === "string" && typeof o.use === "string" && typeof o.long === "string" && typeof o.short === "string" && typeof o.example === "string" && Array.isArray(o.alias) && (!o.alias.length || typeof o.alias[0] === "string") && Array.isArray(o.suggest_for) && (!o.suggest_for.length || typeof o.suggest_for[0] === "string") && typeof o.deprecated === "string" && typeof o.version === "string" && isSet(o.flag_options) && Array.isArray(o.positional_args) && (!o.positional_args.length || PositionalArgDescriptor.isAmino(o.positional_args[0])) && typeof o.skip === "boolean");
  },
  encode(message: RpcCommandOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.suggestFor) {
      writer.uint32(58).string(v!);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(82).fork()).ldelim();
    });
    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggestFor.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.flagOptions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positionalArgs.push(PositionalArgDescriptor.decode(reader, reader.uint32()));
          break;
        case 12:
          message.skip = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RpcCommandOptions>): RpcCommandOptions {
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = object.rpcMethod ?? "";
    message.use = object.use ?? "";
    message.long = object.long ?? "";
    message.short = object.short ?? "";
    message.example = object.example ?? "";
    message.alias = object.alias?.map(e => e) || [];
    message.suggestFor = object.suggestFor?.map(e => e) || [];
    message.deprecated = object.deprecated ?? "";
    message.version = object.version ?? "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = object.positionalArgs?.map(e => PositionalArgDescriptor.fromPartial(e)) || [];
    message.skip = object.skip ?? false;
    return message;
  },
  fromAmino(object: RpcCommandOptionsAmino): RpcCommandOptions {
    const message = createBaseRpcCommandOptions();
    if (object.rpc_method !== undefined && object.rpc_method !== null) {
      message.rpcMethod = object.rpc_method;
    }
    if (object.use !== undefined && object.use !== null) {
      message.use = object.use;
    }
    if (object.long !== undefined && object.long !== null) {
      message.long = object.long;
    }
    if (object.short !== undefined && object.short !== null) {
      message.short = object.short;
    }
    if (object.example !== undefined && object.example !== null) {
      message.example = object.example;
    }
    message.alias = object.alias?.map(e => e) || [];
    message.suggestFor = object.suggest_for?.map(e => e) || [];
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    message.flagOptions = Object.entries(object.flag_options ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromAmino(value);
      }
      return acc;
    }, {});
    message.positionalArgs = object.positional_args?.map(e => PositionalArgDescriptor.fromAmino(e)) || [];
    if (object.skip !== undefined && object.skip !== null) {
      message.skip = object.skip;
    }
    return message;
  },
  toAmino(message: RpcCommandOptions): RpcCommandOptionsAmino {
    const obj: any = {};
    obj.rpc_method = message.rpcMethod === "" ? undefined : message.rpcMethod;
    obj.use = message.use === "" ? undefined : message.use;
    obj.long = message.long === "" ? undefined : message.long;
    obj.short = message.short === "" ? undefined : message.short;
    obj.example = message.example === "" ? undefined : message.example;
    if (message.alias) {
      obj.alias = message.alias.map(e => e);
    } else {
      obj.alias = message.alias;
    }
    if (message.suggestFor) {
      obj.suggest_for = message.suggestFor.map(e => e);
    } else {
      obj.suggest_for = message.suggestFor;
    }
    obj.deprecated = message.deprecated === "" ? undefined : message.deprecated;
    obj.version = message.version === "" ? undefined : message.version;
    obj.flag_options = {};
    if (message.flagOptions) {
      Object.entries(message.flagOptions).forEach(([k, v]) => {
        obj.flag_options[k] = FlagOptions.toAmino(v);
      });
    }
    if (message.positionalArgs) {
      obj.positional_args = message.positionalArgs.map(e => e ? PositionalArgDescriptor.toAmino(e) : undefined);
    } else {
      obj.positional_args = message.positionalArgs;
    }
    obj.skip = message.skip === false ? undefined : message.skip;
    return obj;
  },
  fromAminoMsg(object: RpcCommandOptionsAminoMsg): RpcCommandOptions {
    return RpcCommandOptions.fromAmino(object.value);
  },
  toAminoMsg(message: RpcCommandOptions): RpcCommandOptionsAminoMsg {
    return {
      type: "cosmos-sdk/RpcCommandOptions",
      value: RpcCommandOptions.toAmino(message)
    };
  },
  fromProtoMsg(message: RpcCommandOptionsProtoMsg): RpcCommandOptions {
    return RpcCommandOptions.decode(message.value);
  },
  toProto(message: RpcCommandOptions): Uint8Array {
    return RpcCommandOptions.encode(message).finish();
  },
  toProtoMsg(message: RpcCommandOptions): RpcCommandOptionsProtoMsg {
    return {
      typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
      value: RpcCommandOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FlagOptions.registerTypeUrl();
    PositionalArgDescriptor.registerTypeUrl();
  }
};
function createBaseFlagOptions(): FlagOptions {
  return {
    name: "",
    shorthand: "",
    usage: "",
    defaultValue: "",
    deprecated: "",
    shorthandDeprecated: "",
    hidden: false
  };
}
export const FlagOptions = {
  typeUrl: "/cosmos.autocli.v1.FlagOptions",
  aminoType: "cosmos-sdk/FlagOptions",
  is(o: any): o is FlagOptions {
    return o && (o.$typeUrl === FlagOptions.typeUrl || typeof o.name === "string" && typeof o.shorthand === "string" && typeof o.usage === "string" && typeof o.defaultValue === "string" && typeof o.deprecated === "string" && typeof o.shorthandDeprecated === "string" && typeof o.hidden === "boolean");
  },
  isAmino(o: any): o is FlagOptionsAmino {
    return o && (o.$typeUrl === FlagOptions.typeUrl || typeof o.name === "string" && typeof o.shorthand === "string" && typeof o.usage === "string" && typeof o.default_value === "string" && typeof o.deprecated === "string" && typeof o.shorthand_deprecated === "string" && typeof o.hidden === "boolean");
  },
  encode(message: FlagOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlagOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthandDeprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FlagOptions>): FlagOptions {
    const message = createBaseFlagOptions();
    message.name = object.name ?? "";
    message.shorthand = object.shorthand ?? "";
    message.usage = object.usage ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.deprecated = object.deprecated ?? "";
    message.shorthandDeprecated = object.shorthandDeprecated ?? "";
    message.hidden = object.hidden ?? false;
    return message;
  },
  fromAmino(object: FlagOptionsAmino): FlagOptions {
    const message = createBaseFlagOptions();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.shorthand !== undefined && object.shorthand !== null) {
      message.shorthand = object.shorthand;
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = object.usage;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.shorthand_deprecated !== undefined && object.shorthand_deprecated !== null) {
      message.shorthandDeprecated = object.shorthand_deprecated;
    }
    if (object.hidden !== undefined && object.hidden !== null) {
      message.hidden = object.hidden;
    }
    return message;
  },
  toAmino(message: FlagOptions): FlagOptionsAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.shorthand = message.shorthand === "" ? undefined : message.shorthand;
    obj.usage = message.usage === "" ? undefined : message.usage;
    obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
    obj.deprecated = message.deprecated === "" ? undefined : message.deprecated;
    obj.shorthand_deprecated = message.shorthandDeprecated === "" ? undefined : message.shorthandDeprecated;
    obj.hidden = message.hidden === false ? undefined : message.hidden;
    return obj;
  },
  fromAminoMsg(object: FlagOptionsAminoMsg): FlagOptions {
    return FlagOptions.fromAmino(object.value);
  },
  toAminoMsg(message: FlagOptions): FlagOptionsAminoMsg {
    return {
      type: "cosmos-sdk/FlagOptions",
      value: FlagOptions.toAmino(message)
    };
  },
  fromProtoMsg(message: FlagOptionsProtoMsg): FlagOptions {
    return FlagOptions.decode(message.value);
  },
  toProto(message: FlagOptions): Uint8Array {
    return FlagOptions.encode(message).finish();
  },
  toProtoMsg(message: FlagOptions): FlagOptionsProtoMsg {
    return {
      typeUrl: "/cosmos.autocli.v1.FlagOptions",
      value: FlagOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePositionalArgDescriptor(): PositionalArgDescriptor {
  return {
    protoField: "",
    varargs: false
  };
}
export const PositionalArgDescriptor = {
  typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
  aminoType: "cosmos-sdk/PositionalArgDescriptor",
  is(o: any): o is PositionalArgDescriptor {
    return o && (o.$typeUrl === PositionalArgDescriptor.typeUrl || typeof o.protoField === "string" && typeof o.varargs === "boolean");
  },
  isAmino(o: any): o is PositionalArgDescriptorAmino {
    return o && (o.$typeUrl === PositionalArgDescriptor.typeUrl || typeof o.proto_field === "string" && typeof o.varargs === "boolean");
  },
  encode(message: PositionalArgDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionalArgDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PositionalArgDescriptor>): PositionalArgDescriptor {
    const message = createBasePositionalArgDescriptor();
    message.protoField = object.protoField ?? "";
    message.varargs = object.varargs ?? false;
    return message;
  },
  fromAmino(object: PositionalArgDescriptorAmino): PositionalArgDescriptor {
    const message = createBasePositionalArgDescriptor();
    if (object.proto_field !== undefined && object.proto_field !== null) {
      message.protoField = object.proto_field;
    }
    if (object.varargs !== undefined && object.varargs !== null) {
      message.varargs = object.varargs;
    }
    return message;
  },
  toAmino(message: PositionalArgDescriptor): PositionalArgDescriptorAmino {
    const obj: any = {};
    obj.proto_field = message.protoField === "" ? undefined : message.protoField;
    obj.varargs = message.varargs === false ? undefined : message.varargs;
    return obj;
  },
  fromAminoMsg(object: PositionalArgDescriptorAminoMsg): PositionalArgDescriptor {
    return PositionalArgDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: PositionalArgDescriptor): PositionalArgDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/PositionalArgDescriptor",
      value: PositionalArgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionalArgDescriptorProtoMsg): PositionalArgDescriptor {
    return PositionalArgDescriptor.decode(message.value);
  },
  toProto(message: PositionalArgDescriptor): Uint8Array {
    return PositionalArgDescriptor.encode(message).finish();
  },
  toProtoMsg(message: PositionalArgDescriptor): PositionalArgDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
      value: PositionalArgDescriptor.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};