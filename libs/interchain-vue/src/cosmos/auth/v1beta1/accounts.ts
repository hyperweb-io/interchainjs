import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BaseAccount, BaseAccountAmino } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryLegacyAccount defines a query that can be implemented by an x/account
 * to return an auth understandable representation of an account.
 * This query is only used for accounts retro-compatibility at gRPC
 * level, the state machine must not make any assumptions around this.
 */
export interface QueryLegacyAccount {}
export interface QueryLegacyAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccount";
  value: Uint8Array;
}
/**
 * QueryLegacyAccount defines a query that can be implemented by an x/account
 * to return an auth understandable representation of an account.
 * This query is only used for accounts retro-compatibility at gRPC
 * level, the state machine must not make any assumptions around this.
 */
export interface QueryLegacyAccountAmino {}
export interface QueryLegacyAccountAminoMsg {
  type: "cosmos-sdk/QueryLegacyAccount";
  value: QueryLegacyAccountAmino;
}
/**
 * QueryLegacyAccountResponse defines the response type of the
 * `QueryLegacyAccount` query.
 */
export interface QueryLegacyAccountResponse {
  /**
   * account represents the google.Protobuf.Any wrapped account
   * the type wrapped by the any does not need to comply with the
   * sdk.AccountI interface.
   */
  account?: Any;
  /**
   * base represents the account as a BaseAccount, this can return
   * nil if the account cannot be represented as a BaseAccount.
   * This is used in the gRPC QueryAccountInfo method.
   */
  base?: BaseAccount;
}
export interface QueryLegacyAccountResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccountResponse";
  value: Uint8Array;
}
/**
 * QueryLegacyAccountResponse defines the response type of the
 * `QueryLegacyAccount` query.
 */
export interface QueryLegacyAccountResponseAmino {
  /**
   * account represents the google.Protobuf.Any wrapped account
   * the type wrapped by the any does not need to comply with the
   * sdk.AccountI interface.
   */
  account?: AnyAmino;
  /**
   * base represents the account as a BaseAccount, this can return
   * nil if the account cannot be represented as a BaseAccount.
   * This is used in the gRPC QueryAccountInfo method.
   */
  base?: BaseAccountAmino;
}
export interface QueryLegacyAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryLegacyAccountResponse";
  value: QueryLegacyAccountResponseAmino;
}
function createBaseQueryLegacyAccount(): QueryLegacyAccount {
  return {};
}
export const QueryLegacyAccount = {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccount",
  aminoType: "cosmos-sdk/QueryLegacyAccount",
  is(o: any): o is QueryLegacyAccount {
    return o && o.$typeUrl === QueryLegacyAccount.typeUrl;
  },
  isAmino(o: any): o is QueryLegacyAccountAmino {
    return o && o.$typeUrl === QueryLegacyAccount.typeUrl;
  },
  encode(_: QueryLegacyAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryLegacyAccount>): QueryLegacyAccount {
    const message = createBaseQueryLegacyAccount();
    return message;
  },
  fromAmino(_: QueryLegacyAccountAmino): QueryLegacyAccount {
    const message = createBaseQueryLegacyAccount();
    return message;
  },
  toAmino(_: QueryLegacyAccount): QueryLegacyAccountAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLegacyAccountAminoMsg): QueryLegacyAccount {
    return QueryLegacyAccount.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLegacyAccount): QueryLegacyAccountAminoMsg {
    return {
      type: "cosmos-sdk/QueryLegacyAccount",
      value: QueryLegacyAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLegacyAccountProtoMsg): QueryLegacyAccount {
    return QueryLegacyAccount.decode(message.value);
  },
  toProto(message: QueryLegacyAccount): Uint8Array {
    return QueryLegacyAccount.encode(message).finish();
  },
  toProtoMsg(message: QueryLegacyAccount): QueryLegacyAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccount",
      value: QueryLegacyAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLegacyAccount.typeUrl, QueryLegacyAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLegacyAccount.aminoType, QueryLegacyAccount.typeUrl);
function createBaseQueryLegacyAccountResponse(): QueryLegacyAccountResponse {
  return {
    account: undefined,
    base: undefined
  };
}
export const QueryLegacyAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccountResponse",
  aminoType: "cosmos-sdk/QueryLegacyAccountResponse",
  is(o: any): o is QueryLegacyAccountResponse {
    return o && o.$typeUrl === QueryLegacyAccountResponse.typeUrl;
  },
  isAmino(o: any): o is QueryLegacyAccountResponseAmino {
    return o && o.$typeUrl === QueryLegacyAccountResponse.typeUrl;
  },
  encode(message: QueryLegacyAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.base !== undefined) {
      BaseAccount.encode(message.base, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.base = BaseAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLegacyAccountResponse>): QueryLegacyAccountResponse {
    const message = createBaseQueryLegacyAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    message.base = object.base !== undefined && object.base !== null ? BaseAccount.fromPartial(object.base) : undefined;
    return message;
  },
  fromAmino(object: QueryLegacyAccountResponseAmino): QueryLegacyAccountResponse {
    const message = createBaseQueryLegacyAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = Any.fromAmino(object.account);
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = BaseAccount.fromAmino(object.base);
    }
    return message;
  },
  toAmino(message: QueryLegacyAccountResponse): QueryLegacyAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? Any.toAmino(message.account) : undefined;
    obj.base = message.base ? BaseAccount.toAmino(message.base) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLegacyAccountResponseAminoMsg): QueryLegacyAccountResponse {
    return QueryLegacyAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLegacyAccountResponse): QueryLegacyAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryLegacyAccountResponse",
      value: QueryLegacyAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLegacyAccountResponseProtoMsg): QueryLegacyAccountResponse {
    return QueryLegacyAccountResponse.decode(message.value);
  },
  toProto(message: QueryLegacyAccountResponse): Uint8Array {
    return QueryLegacyAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLegacyAccountResponse): QueryLegacyAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccountResponse",
      value: QueryLegacyAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLegacyAccountResponse.typeUrl, QueryLegacyAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLegacyAccountResponse.aminoType, QueryLegacyAccountResponse.typeUrl);