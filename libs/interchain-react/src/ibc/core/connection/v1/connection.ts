import { MerklePrefix, MerklePrefixAmino } from "../../commitment/v1/commitment";
import { isSet, DeepPartial } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A connection end has just started the opening handshake. */
  STATE_INIT = 1,
  /**
   * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
   * chain.
   */
  STATE_TRYOPEN = 2,
  /** STATE_OPEN - A connection end has completed the handshake. */
  STATE_OPEN = 3,
  UNRECOGNIZED = -1,
}
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 * @name ConnectionEnd
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionEnd
 */
export interface ConnectionEnd {
  /**
   * client associated with this connection.
   */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions: Version[];
  /**
   * current state of the connection end.
   */
  state: State;
  /**
   * counterparty chain associated with this connection.
   */
  counterparty: Counterparty;
  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   */
  delayPeriod: bigint;
}
export interface ConnectionEndProtoMsg {
  typeUrl: "/ibc.core.connection.v1.ConnectionEnd";
  value: Uint8Array;
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 * @name ConnectionEndAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionEnd
 */
export interface ConnectionEndAmino {
  /**
   * client associated with this connection.
   */
  client_id: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions: VersionAmino[];
  /**
   * current state of the connection end.
   */
  state: State;
  /**
   * counterparty chain associated with this connection.
   */
  counterparty: CounterpartyAmino;
  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   */
  delay_period: string;
}
export interface ConnectionEndAminoMsg {
  type: "cosmos-sdk/ConnectionEnd";
  value: ConnectionEndAmino;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 * @name IdentifiedConnection
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.IdentifiedConnection
 */
export interface IdentifiedConnection {
  /**
   * connection identifier.
   */
  id: string;
  /**
   * client associated with this connection.
   */
  clientId: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions: Version[];
  /**
   * current state of the connection end.
   */
  state: State;
  /**
   * counterparty chain associated with this connection.
   */
  counterparty: Counterparty;
  /**
   * delay period associated with this connection.
   */
  delayPeriod: bigint;
}
export interface IdentifiedConnectionProtoMsg {
  typeUrl: "/ibc.core.connection.v1.IdentifiedConnection";
  value: Uint8Array;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 * @name IdentifiedConnectionAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.IdentifiedConnection
 */
export interface IdentifiedConnectionAmino {
  /**
   * connection identifier.
   */
  id: string;
  /**
   * client associated with this connection.
   */
  client_id: string;
  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions: VersionAmino[];
  /**
   * current state of the connection end.
   */
  state: State;
  /**
   * counterparty chain associated with this connection.
   */
  counterparty: CounterpartyAmino;
  /**
   * delay period associated with this connection.
   */
  delay_period: string;
}
export interface IdentifiedConnectionAminoMsg {
  type: "cosmos-sdk/IdentifiedConnection";
  value: IdentifiedConnectionAmino;
}
/**
 * Counterparty defines the counterparty chain associated with a connection end.
 * @name Counterparty
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Counterparty
 */
export interface Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  clientId: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connectionId: string;
  /**
   * commitment merkle prefix of the counterparty chain.
   */
  prefix: MerklePrefix;
}
export interface CounterpartyProtoMsg {
  typeUrl: "/ibc.core.connection.v1.Counterparty";
  value: Uint8Array;
}
/**
 * Counterparty defines the counterparty chain associated with a connection end.
 * @name CounterpartyAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Counterparty
 */
export interface CounterpartyAmino {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  client_id: string;
  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connection_id: string;
  /**
   * commitment merkle prefix of the counterparty chain.
   */
  prefix: MerklePrefixAmino;
}
export interface CounterpartyAminoMsg {
  type: "cosmos-sdk/Counterparty";
  value: CounterpartyAmino;
}
/**
 * ClientPaths define all the connection paths for a client state.
 * @name ClientPaths
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ClientPaths
 */
export interface ClientPaths {
  /**
   * list of connection paths
   */
  paths: string[];
}
export interface ClientPathsProtoMsg {
  typeUrl: "/ibc.core.connection.v1.ClientPaths";
  value: Uint8Array;
}
/**
 * ClientPaths define all the connection paths for a client state.
 * @name ClientPathsAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ClientPaths
 */
export interface ClientPathsAmino {
  /**
   * list of connection paths
   */
  paths: string[];
}
export interface ClientPathsAminoMsg {
  type: "cosmos-sdk/ClientPaths";
  value: ClientPathsAmino;
}
/**
 * ConnectionPaths define all the connection paths for a given client state.
 * @name ConnectionPaths
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionPaths
 */
export interface ConnectionPaths {
  /**
   * client state unique identifier
   */
  clientId: string;
  /**
   * list of connection paths
   */
  paths: string[];
}
export interface ConnectionPathsProtoMsg {
  typeUrl: "/ibc.core.connection.v1.ConnectionPaths";
  value: Uint8Array;
}
/**
 * ConnectionPaths define all the connection paths for a given client state.
 * @name ConnectionPathsAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionPaths
 */
export interface ConnectionPathsAmino {
  /**
   * client state unique identifier
   */
  client_id: string;
  /**
   * list of connection paths
   */
  paths: string[];
}
export interface ConnectionPathsAminoMsg {
  type: "cosmos-sdk/ConnectionPaths";
  value: ConnectionPathsAmino;
}
/**
 * Version defines the versioning scheme used to negotiate the IBC version in
 * the connection handshake.
 * @name Version
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Version
 */
export interface Version {
  /**
   * unique version identifier
   */
  identifier: string;
  /**
   * list of features compatible with the specified identifier
   */
  features: string[];
}
export interface VersionProtoMsg {
  typeUrl: "/ibc.core.connection.v1.Version";
  value: Uint8Array;
}
/**
 * Version defines the versioning scheme used to negotiate the IBC version in
 * the connection handshake.
 * @name VersionAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Version
 */
export interface VersionAmino {
  /**
   * unique version identifier
   */
  identifier: string;
  /**
   * list of features compatible with the specified identifier
   */
  features: string[];
}
export interface VersionAminoMsg {
  type: "cosmos-sdk/Version";
  value: VersionAmino;
}
/**
 * Params defines the set of Connection parameters.
 * @name Params
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Params
 */
export interface Params {
  /**
   * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
   * largest amount of time that the chain might reasonably take to produce the next block under normal operating
   * conditions. A safe choice is 3-5x the expected time per block.
   */
  maxExpectedTimePerBlock: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.core.connection.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of Connection parameters.
 * @name ParamsAmino
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Params
 */
export interface ParamsAmino {
  /**
   * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
   * largest amount of time that the chain might reasonably take to produce the next block under normal operating
   * conditions. A safe choice is 3-5x the expected time per block.
   */
  max_expected_time_per_block: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
function createBaseConnectionEnd(): ConnectionEnd {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0)
  };
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 * @name ConnectionEnd
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionEnd
 */
export const ConnectionEnd = {
  typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
  aminoType: "cosmos-sdk/ConnectionEnd",
  is(o: any): o is ConnectionEnd {
    return o && (o.$typeUrl === ConnectionEnd.typeUrl || typeof o.clientId === "string" && Array.isArray(o.versions) && (!o.versions.length || Version.is(o.versions[0])) && isSet(o.state) && Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint");
  },
  isAmino(o: any): o is ConnectionEndAmino {
    return o && (o.$typeUrl === ConnectionEnd.typeUrl || typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || Version.isAmino(o.versions[0])) && isSet(o.state) && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint");
  },
  encode(message: ConnectionEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConnectionEnd>): ConnectionEnd {
    const message = createBaseConnectionEnd();
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConnectionEndAmino): ConnectionEnd {
    const message = createBaseConnectionEnd();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.versions = object.versions?.map(e => Version.fromAmino(e)) || [];
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== undefined && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    return message;
  },
  toAmino(message: ConnectionEnd): ConnectionEndAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toAmino(e) : undefined);
    } else {
      obj.versions = message.versions;
    }
    obj.state = message.state === 0 ? undefined : message.state;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConnectionEndAminoMsg): ConnectionEnd {
    return ConnectionEnd.fromAmino(object.value);
  },
  toAminoMsg(message: ConnectionEnd): ConnectionEndAminoMsg {
    return {
      type: "cosmos-sdk/ConnectionEnd",
      value: ConnectionEnd.toAmino(message)
    };
  },
  fromProtoMsg(message: ConnectionEndProtoMsg): ConnectionEnd {
    return ConnectionEnd.decode(message.value);
  },
  toProto(message: ConnectionEnd): Uint8Array {
    return ConnectionEnd.encode(message).finish();
  },
  toProtoMsg(message: ConnectionEnd): ConnectionEndProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
      value: ConnectionEnd.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ConnectionEnd.typeUrl)) {
      return;
    }
    Version.registerTypeUrl();
    Counterparty.registerTypeUrl();
  }
};
function createBaseIdentifiedConnection(): IdentifiedConnection {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0)
  };
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 * @name IdentifiedConnection
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.IdentifiedConnection
 */
export const IdentifiedConnection = {
  typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
  aminoType: "cosmos-sdk/IdentifiedConnection",
  is(o: any): o is IdentifiedConnection {
    return o && (o.$typeUrl === IdentifiedConnection.typeUrl || typeof o.id === "string" && typeof o.clientId === "string" && Array.isArray(o.versions) && (!o.versions.length || Version.is(o.versions[0])) && isSet(o.state) && Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint");
  },
  isAmino(o: any): o is IdentifiedConnectionAmino {
    return o && (o.$typeUrl === IdentifiedConnection.typeUrl || typeof o.id === "string" && typeof o.client_id === "string" && Array.isArray(o.versions) && (!o.versions.length || Version.isAmino(o.versions[0])) && isSet(o.state) && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint");
  },
  encode(message: IdentifiedConnection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentifiedConnection>): IdentifiedConnection {
    const message = createBaseIdentifiedConnection();
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IdentifiedConnectionAmino): IdentifiedConnection {
    const message = createBaseIdentifiedConnection();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.versions = object.versions?.map(e => Version.fromAmino(e)) || [];
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== undefined && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    return message;
  },
  toAmino(message: IdentifiedConnection): IdentifiedConnectionAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toAmino(e) : undefined);
    } else {
      obj.versions = message.versions;
    }
    obj.state = message.state === 0 ? undefined : message.state;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentifiedConnectionAminoMsg): IdentifiedConnection {
    return IdentifiedConnection.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedConnection): IdentifiedConnectionAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedConnection",
      value: IdentifiedConnection.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedConnectionProtoMsg): IdentifiedConnection {
    return IdentifiedConnection.decode(message.value);
  },
  toProto(message: IdentifiedConnection): Uint8Array {
    return IdentifiedConnection.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedConnection): IdentifiedConnectionProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
      value: IdentifiedConnection.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(IdentifiedConnection.typeUrl)) {
      return;
    }
    Version.registerTypeUrl();
    Counterparty.registerTypeUrl();
  }
};
function createBaseCounterparty(): Counterparty {
  return {
    clientId: "",
    connectionId: "",
    prefix: MerklePrefix.fromPartial({})
  };
}
/**
 * Counterparty defines the counterparty chain associated with a connection end.
 * @name Counterparty
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Counterparty
 */
export const Counterparty = {
  typeUrl: "/ibc.core.connection.v1.Counterparty",
  aminoType: "cosmos-sdk/Counterparty",
  is(o: any): o is Counterparty {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.clientId === "string" && typeof o.connectionId === "string" && MerklePrefix.is(o.prefix));
  },
  isAmino(o: any): o is CounterpartyAmino {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.client_id === "string" && typeof o.connection_id === "string" && MerklePrefix.isAmino(o.prefix));
  },
  encode(message: Counterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== undefined) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.clientId = object.clientId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : undefined;
    return message;
  },
  fromAmino(object: CounterpartyAmino): Counterparty {
    const message = createBaseCounterparty();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = MerklePrefix.fromAmino(object.prefix);
    }
    return message;
  },
  toAmino(message: Counterparty): CounterpartyAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.prefix = message.prefix ? MerklePrefix.toAmino(message.prefix) : undefined;
    return obj;
  },
  fromAminoMsg(object: CounterpartyAminoMsg): Counterparty {
    return Counterparty.fromAmino(object.value);
  },
  toAminoMsg(message: Counterparty): CounterpartyAminoMsg {
    return {
      type: "cosmos-sdk/Counterparty",
      value: Counterparty.toAmino(message)
    };
  },
  fromProtoMsg(message: CounterpartyProtoMsg): Counterparty {
    return Counterparty.decode(message.value);
  },
  toProto(message: Counterparty): Uint8Array {
    return Counterparty.encode(message).finish();
  },
  toProtoMsg(message: Counterparty): CounterpartyProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.Counterparty",
      value: Counterparty.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Counterparty.typeUrl)) {
      return;
    }
    MerklePrefix.registerTypeUrl();
  }
};
function createBaseClientPaths(): ClientPaths {
  return {
    paths: []
  };
}
/**
 * ClientPaths define all the connection paths for a client state.
 * @name ClientPaths
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ClientPaths
 */
export const ClientPaths = {
  typeUrl: "/ibc.core.connection.v1.ClientPaths",
  aminoType: "cosmos-sdk/ClientPaths",
  is(o: any): o is ClientPaths {
    return o && (o.$typeUrl === ClientPaths.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  isAmino(o: any): o is ClientPathsAmino {
    return o && (o.$typeUrl === ClientPaths.typeUrl || Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  encode(message: ClientPaths, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientPaths {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientPaths>): ClientPaths {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClientPathsAmino): ClientPaths {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClientPaths): ClientPathsAmino {
    const obj: any = {};
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = message.paths;
    }
    return obj;
  },
  fromAminoMsg(object: ClientPathsAminoMsg): ClientPaths {
    return ClientPaths.fromAmino(object.value);
  },
  toAminoMsg(message: ClientPaths): ClientPathsAminoMsg {
    return {
      type: "cosmos-sdk/ClientPaths",
      value: ClientPaths.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientPathsProtoMsg): ClientPaths {
    return ClientPaths.decode(message.value);
  },
  toProto(message: ClientPaths): Uint8Array {
    return ClientPaths.encode(message).finish();
  },
  toProtoMsg(message: ClientPaths): ClientPathsProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.ClientPaths",
      value: ClientPaths.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseConnectionPaths(): ConnectionPaths {
  return {
    clientId: "",
    paths: []
  };
}
/**
 * ConnectionPaths define all the connection paths for a given client state.
 * @name ConnectionPaths
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.ConnectionPaths
 */
export const ConnectionPaths = {
  typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
  aminoType: "cosmos-sdk/ConnectionPaths",
  is(o: any): o is ConnectionPaths {
    return o && (o.$typeUrl === ConnectionPaths.typeUrl || typeof o.clientId === "string" && Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  isAmino(o: any): o is ConnectionPathsAmino {
    return o && (o.$typeUrl === ConnectionPaths.typeUrl || typeof o.client_id === "string" && Array.isArray(o.paths) && (!o.paths.length || typeof o.paths[0] === "string"));
  },
  encode(message: ConnectionPaths, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionPaths {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConnectionPaths>): ConnectionPaths {
    const message = createBaseConnectionPaths();
    message.clientId = object.clientId ?? "";
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ConnectionPathsAmino): ConnectionPaths {
    const message = createBaseConnectionPaths();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.paths = object.paths?.map(e => e) || [];
    return message;
  },
  toAmino(message: ConnectionPaths): ConnectionPathsAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = message.paths;
    }
    return obj;
  },
  fromAminoMsg(object: ConnectionPathsAminoMsg): ConnectionPaths {
    return ConnectionPaths.fromAmino(object.value);
  },
  toAminoMsg(message: ConnectionPaths): ConnectionPathsAminoMsg {
    return {
      type: "cosmos-sdk/ConnectionPaths",
      value: ConnectionPaths.toAmino(message)
    };
  },
  fromProtoMsg(message: ConnectionPathsProtoMsg): ConnectionPaths {
    return ConnectionPaths.decode(message.value);
  },
  toProto(message: ConnectionPaths): Uint8Array {
    return ConnectionPaths.encode(message).finish();
  },
  toProtoMsg(message: ConnectionPaths): ConnectionPathsProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
      value: ConnectionPaths.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseVersion(): Version {
  return {
    identifier: "",
    features: []
  };
}
/**
 * Version defines the versioning scheme used to negotiate the IBC version in
 * the connection handshake.
 * @name Version
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Version
 */
export const Version = {
  typeUrl: "/ibc.core.connection.v1.Version",
  aminoType: "cosmos-sdk/Version",
  is(o: any): o is Version {
    return o && (o.$typeUrl === Version.typeUrl || typeof o.identifier === "string" && Array.isArray(o.features) && (!o.features.length || typeof o.features[0] === "string"));
  },
  isAmino(o: any): o is VersionAmino {
    return o && (o.$typeUrl === Version.typeUrl || typeof o.identifier === "string" && Array.isArray(o.features) && (!o.features.length || typeof o.features[0] === "string"));
  },
  encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map(e => e) || [];
    return message;
  },
  fromAmino(object: VersionAmino): Version {
    const message = createBaseVersion();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    message.features = object.features?.map(e => e) || [];
    return message;
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    if (message.features) {
      obj.features = message.features.map(e => e);
    } else {
      obj.features = message.features;
    }
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  toAminoMsg(message: Version): VersionAminoMsg {
    return {
      type: "cosmos-sdk/Version",
      value: Version.toAmino(message)
    };
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.Version",
      value: Version.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    maxExpectedTimePerBlock: BigInt(0)
  };
}
/**
 * Params defines the set of Connection parameters.
 * @name Params
 * @package ibc.core.connection.v1
 * @see proto type: ibc.core.connection.v1.Params
 */
export const Params = {
  typeUrl: "/ibc.core.connection.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxExpectedTimePerBlock === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_expected_time_per_block === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxExpectedTimePerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
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
          message.maxExpectedTimePerBlock = reader.uint64();
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
    message.maxExpectedTimePerBlock = object.maxExpectedTimePerBlock !== undefined && object.maxExpectedTimePerBlock !== null ? BigInt(object.maxExpectedTimePerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null) {
      message.maxExpectedTimePerBlock = BigInt(object.max_expected_time_per_block);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_expected_time_per_block = message.maxExpectedTimePerBlock !== BigInt(0) ? message.maxExpectedTimePerBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.core.connection.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};