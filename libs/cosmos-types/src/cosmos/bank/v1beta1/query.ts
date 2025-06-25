import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata, SendEnabled } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 * @name QueryBalanceRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequest {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 * @name QueryBalanceResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponse {
  /**
   * balance is the balance of the coin.
   */
  balance?: Coin;
}
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 * @name QueryAllBalancesRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export interface QueryAllBalancesRequest {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
  /**
   * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
   */
  resolveDenom: boolean;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 * @name QueryAllBalancesResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export interface QueryAllBalancesResponse {
  /**
   * balances is the balances of all the coins.
   */
  balances: Coin[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export interface QuerySpendableBalancesRequest {
  /**
   * address is the address to query spendable balances for.
   */
  address: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export interface QuerySpendableBalancesResponse {
  /**
   * balances is the spendable balances of all the coins.
   */
  balances: Coin[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export interface QuerySpendableBalanceByDenomRequest {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export interface QuerySpendableBalanceByDenomResponse {
  /**
   * balance is the balance of the coin.
   */
  balance?: Coin;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 * @name QueryTotalSupplyRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export interface QueryTotalSupplyRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 * @name QueryTotalSupplyResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export interface QueryTotalSupplyResponse {
  /**
   * supply is the supply of the coins
   */
  supply: Coin[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export interface QuerySupplyOfRequest {
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export interface QuerySupplyOfResponse {
  /**
   * amount is the supply of the coin.
   */
  amount: Coin;
}
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 * @name QueryParamsRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 * @name QueryParamsResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params provides the parameters of the bank module.
   */
  params: Params;
}
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 * @name QueryDenomsMetadataRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export interface QueryDenomsMetadataRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 * @name QueryDenomsMetadataResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export interface QueryDenomsMetadataResponse {
  /**
   * metadata provides the client information for all the registered tokens.
   */
  metadatas: Metadata[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 * @name QueryDenomMetadataRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export interface QueryDenomMetadataRequest {
  /**
   * denom is the coin denom to query the metadata for.
   */
  denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 * @name QueryDenomMetadataResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export interface QueryDenomMetadataResponse {
  /**
   * metadata describes and provides all the client information for the requested token.
   */
  metadata: Metadata;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 * @name QueryDenomMetadataByQueryStringRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest
 */
export interface QueryDenomMetadataByQueryStringRequest {
  /**
   * denom is the coin denom to query the metadata for.
   */
  denom: string;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 * @name QueryDenomMetadataByQueryStringResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse
 */
export interface QueryDenomMetadataByQueryStringResponse {
  /**
   * metadata describes and provides all the client information for the requested token.
   */
  metadata: Metadata;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export interface QueryDenomOwnersRequest {
  /**
   * denom defines the coin denomination to query all account holders for.
   */
  denom: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 * @name DenomOwner
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomOwner
 */
export interface DenomOwner {
  /**
   * address defines the address that owns a particular denomination.
   */
  address: string;
  /**
   * balance is the balance of the denominated coin for an account.
   */
  balance: Coin;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 * @name QueryDenomOwnersResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export interface QueryDenomOwnersResponse {
  denomOwners: DenomOwner[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersByQueryRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest
 */
export interface QueryDenomOwnersByQueryRequest {
  /**
   * denom defines the coin denomination to query all account holders for.
   */
  denom: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 * @name QueryDenomOwnersByQueryResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse
 */
export interface QueryDenomOwnersByQueryResponse {
  denomOwners: DenomOwner[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 * @name QuerySendEnabledRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export interface QuerySendEnabledRequest {
  /**
   * denoms is the specific denoms you want look up. Leave empty to get all entries.
   */
  denoms: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   */
  pagination?: PageRequest;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 * @name QuerySendEnabledResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export interface QuerySendEnabledResponse {
  sendEnabled: SendEnabled[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   */
  pagination?: PageResponse;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    denom: ""
  };
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 * @name QueryBalanceRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceRequest
 */
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
  aminoType: "cosmos-sdk/QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined
  };
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 * @name QueryBalanceResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceResponse
 */
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
  aminoType: "cosmos-sdk/QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return {
    address: "",
    pagination: undefined,
    resolveDenom: false
  };
}
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 * @name QueryAllBalancesRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export const QueryAllBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
  aminoType: "cosmos-sdk/QueryAllBalancesRequest",
  encode(message: QueryAllBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.resolveDenom === true) {
      writer.uint32(24).bool(message.resolveDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.resolveDenom = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.resolveDenom = object.resolveDenom ?? false;
    return message;
  }
};
function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 * @name QueryAllBalancesResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export const QueryAllBalancesResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
  aminoType: "cosmos-sdk/QueryAllBalancesResponse",
  encode(message: QueryAllBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySpendableBalancesRequest(): QuerySpendableBalancesRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export const QuerySpendableBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
  aminoType: "cosmos-sdk/QuerySpendableBalancesRequest",
  encode(message: QuerySpendableBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySpendableBalancesResponse(): QuerySpendableBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export const QuerySpendableBalancesResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
  aminoType: "cosmos-sdk/QuerySpendableBalancesResponse",
  encode(message: QuerySpendableBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySpendableBalanceByDenomRequest(): QuerySpendableBalanceByDenomRequest {
  return {
    address: "",
    denom: ""
  };
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export const QuerySpendableBalanceByDenomRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
  aminoType: "cosmos-sdk/QuerySpendableBalanceByDenomRequest",
  encode(message: QuerySpendableBalanceByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomRequest>): QuerySpendableBalanceByDenomRequest {
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQuerySpendableBalanceByDenomResponse(): QuerySpendableBalanceByDenomResponse {
  return {
    balance: undefined
  };
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export const QuerySpendableBalanceByDenomResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
  aminoType: "cosmos-sdk/QuerySpendableBalanceByDenomResponse",
  encode(message: QuerySpendableBalanceByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomResponse>): QuerySpendableBalanceByDenomResponse {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 * @name QueryTotalSupplyRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export const QueryTotalSupplyRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
  aminoType: "cosmos-sdk/QueryTotalSupplyRequest",
  encode(message: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: [],
    pagination: undefined
  };
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 * @name QueryTotalSupplyResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export const QueryTotalSupplyResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
  aminoType: "cosmos-sdk/QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return {
    denom: ""
  };
}
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export const QuerySupplyOfRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
  aminoType: "cosmos-sdk/QuerySupplyOfRequest",
  encode(message: QuerySupplyOfRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export const QuerySupplyOfResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
  aminoType: "cosmos-sdk/QuerySupplyOfResponse",
  encode(message: QuerySupplyOfResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 * @name QueryParamsRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 * @name QueryParamsResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryDenomsMetadataRequest(): QueryDenomsMetadataRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 * @name QueryDenomsMetadataRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export const QueryDenomsMetadataRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
  aminoType: "cosmos-sdk/QueryDenomsMetadataRequest",
  encode(message: QueryDenomsMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest {
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDenomsMetadataResponse(): QueryDenomsMetadataResponse {
  return {
    metadatas: [],
    pagination: undefined
  };
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 * @name QueryDenomsMetadataResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export const QueryDenomsMetadataResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
  aminoType: "cosmos-sdk/QueryDenomsMetadataResponse",
  encode(message: QueryDenomsMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metadatas) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map(e => Metadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
  return {
    denom: ""
  };
}
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 * @name QueryDenomMetadataRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export const QueryDenomMetadataRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
  aminoType: "cosmos-sdk/QueryDenomMetadataRequest",
  encode(message: QueryDenomMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest {
    const message = createBaseQueryDenomMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
  return {
    metadata: Metadata.fromPartial({})
  };
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 * @name QueryDenomMetadataResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export const QueryDenomMetadataResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
  aminoType: "cosmos-sdk/QueryDenomMetadataResponse",
  encode(message: QueryDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse {
    const message = createBaseQueryDenomMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
function createBaseQueryDenomMetadataByQueryStringRequest(): QueryDenomMetadataByQueryStringRequest {
  return {
    denom: ""
  };
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 * @name QueryDenomMetadataByQueryStringRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest
 */
export const QueryDenomMetadataByQueryStringRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest",
  aminoType: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest",
  encode(message: QueryDenomMetadataByQueryStringRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringRequest>): QueryDenomMetadataByQueryStringRequest {
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomMetadataByQueryStringResponse(): QueryDenomMetadataByQueryStringResponse {
  return {
    metadata: Metadata.fromPartial({})
  };
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 * @name QueryDenomMetadataByQueryStringResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse
 */
export const QueryDenomMetadataByQueryStringResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse",
  aminoType: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse",
  encode(message: QueryDenomMetadataByQueryStringResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringResponse>): QueryDenomMetadataByQueryStringResponse {
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
function createBaseQueryDenomOwnersRequest(): QueryDenomOwnersRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export const QueryDenomOwnersRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
  aminoType: "cosmos-sdk/QueryDenomOwnersRequest",
  encode(message: QueryDenomOwnersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest {
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseDenomOwner(): DenomOwner {
  return {
    address: "",
    balance: Coin.fromPartial({})
  };
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 * @name DenomOwner
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomOwner
 */
export const DenomOwner = {
  typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
  aminoType: "cosmos-sdk/DenomOwner",
  encode(message: DenomOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomOwner>): DenomOwner {
    const message = createBaseDenomOwner();
    message.address = object.address ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueryDenomOwnersResponse(): QueryDenomOwnersResponse {
  return {
    denomOwners: [],
    pagination: undefined
  };
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 * @name QueryDenomOwnersResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export const QueryDenomOwnersResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
  aminoType: "cosmos-sdk/QueryDenomOwnersResponse",
  encode(message: QueryDenomOwnersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denomOwners?.map(e => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDenomOwnersByQueryRequest(): QueryDenomOwnersByQueryRequest {
  return {
    denom: "",
    pagination: undefined
  };
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersByQueryRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest
 */
export const QueryDenomOwnersByQueryRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest",
  aminoType: "cosmos-sdk/QueryDenomOwnersByQueryRequest",
  encode(message: QueryDenomOwnersByQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersByQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomOwnersByQueryRequest>): QueryDenomOwnersByQueryRequest {
    const message = createBaseQueryDenomOwnersByQueryRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDenomOwnersByQueryResponse(): QueryDenomOwnersByQueryResponse {
  return {
    denomOwners: [],
    pagination: undefined
  };
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 * @name QueryDenomOwnersByQueryResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse
 */
export const QueryDenomOwnersByQueryResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse",
  aminoType: "cosmos-sdk/QueryDenomOwnersByQueryResponse",
  encode(message: QueryDenomOwnersByQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersByQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomOwnersByQueryResponse>): QueryDenomOwnersByQueryResponse {
    const message = createBaseQueryDenomOwnersByQueryResponse();
    message.denomOwners = object.denomOwners?.map(e => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySendEnabledRequest(): QuerySendEnabledRequest {
  return {
    denoms: [],
    pagination: undefined
  };
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 * @name QuerySendEnabledRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export const QuerySendEnabledRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
  aminoType: "cosmos-sdk/QuerySendEnabledRequest",
  encode(message: QuerySendEnabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySendEnabledRequest>): QuerySendEnabledRequest {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySendEnabledResponse(): QuerySendEnabledResponse {
  return {
    sendEnabled: [],
    pagination: undefined
  };
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 * @name QuerySendEnabledResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export const QuerySendEnabledResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
  aminoType: "cosmos-sdk/QuerySendEnabledResponse",
  encode(message: QuerySendEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySendEnabledResponse>): QuerySendEnabledResponse {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};