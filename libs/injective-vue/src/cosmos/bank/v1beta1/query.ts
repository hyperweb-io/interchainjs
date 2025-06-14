import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, Metadata, MetadataAmino, SendEnabled, SendEnabledAmino } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
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
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 * @name QueryBalanceRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequestAmino {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "cosmos-sdk/QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
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
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 * @name QueryBalanceResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponseAmino {
  /**
   * balance is the balance of the coin.
   */
  balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
  type: "cosmos-sdk/QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
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
export interface QueryAllBalancesRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 * @name QueryAllBalancesRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export interface QueryAllBalancesRequestAmino {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
  /**
   * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
   */
  resolve_denom: boolean;
}
export interface QueryAllBalancesRequestAminoMsg {
  type: "cosmos-sdk/QueryAllBalancesRequest";
  value: QueryAllBalancesRequestAmino;
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
export interface QueryAllBalancesResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
  value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 * @name QueryAllBalancesResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export interface QueryAllBalancesResponseAmino {
  /**
   * balances is the balances of all the coins.
   */
  balances: CoinAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
  type: "cosmos-sdk/QueryAllBalancesResponse";
  value: QueryAllBalancesResponseAmino;
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
export interface QuerySpendableBalancesRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export interface QuerySpendableBalancesRequestAmino {
  /**
   * address is the address to query spendable balances for.
   */
  address: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QuerySpendableBalancesRequestAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalancesRequest";
  value: QuerySpendableBalancesRequestAmino;
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
export interface QuerySpendableBalancesResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 * @name QuerySpendableBalancesResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export interface QuerySpendableBalancesResponseAmino {
  /**
   * balances is the spendable balances of all the coins.
   */
  balances: CoinAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QuerySpendableBalancesResponseAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalancesResponse";
  value: QuerySpendableBalancesResponseAmino;
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
export interface QuerySpendableBalanceByDenomRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
  value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export interface QuerySpendableBalanceByDenomRequestAmino {
  /**
   * address is the address to query balances for.
   */
  address: string;
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
export interface QuerySpendableBalanceByDenomRequestAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest";
  value: QuerySpendableBalanceByDenomRequestAmino;
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
export interface QuerySpendableBalanceByDenomResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
  value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 * @name QuerySpendableBalanceByDenomResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export interface QuerySpendableBalanceByDenomResponseAmino {
  /**
   * balance is the balance of the coin.
   */
  balance?: CoinAmino;
}
export interface QuerySpendableBalanceByDenomResponseAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse";
  value: QuerySpendableBalanceByDenomResponseAmino;
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
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 * @name QueryTotalSupplyRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export interface QueryTotalSupplyRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
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
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 * @name QueryTotalSupplyResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export interface QueryTotalSupplyResponseAmino {
  /**
   * supply is the supply of the coins
   */
  supply: CoinAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
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
export interface QuerySupplyOfRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
  value: Uint8Array;
}
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export interface QuerySupplyOfRequestAmino {
  /**
   * denom is the coin denom to query balances for.
   */
  denom: string;
}
export interface QuerySupplyOfRequestAminoMsg {
  type: "cosmos-sdk/QuerySupplyOfRequest";
  value: QuerySupplyOfRequestAmino;
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
export interface QuerySupplyOfResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
  value: Uint8Array;
}
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 * @name QuerySupplyOfResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export interface QuerySupplyOfResponseAmino {
  /**
   * amount is the supply of the coin.
   */
  amount: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
  type: "cosmos-sdk/QuerySupplyOfResponse";
  value: QuerySupplyOfResponseAmino;
}
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 * @name QueryParamsRequest
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 * @name QueryParamsRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
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
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 * @name QueryParamsResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params provides the parameters of the bank module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
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
export interface QueryDenomsMetadataRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 * @name QueryDenomsMetadataRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export interface QueryDenomsMetadataRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryDenomsMetadataRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomsMetadataRequest";
  value: QueryDenomsMetadataRequestAmino;
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
export interface QueryDenomsMetadataResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 * @name QueryDenomsMetadataResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export interface QueryDenomsMetadataResponseAmino {
  /**
   * metadata provides the client information for all the registered tokens.
   */
  metadatas: MetadataAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryDenomsMetadataResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomsMetadataResponse";
  value: QueryDenomsMetadataResponseAmino;
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
export interface QueryDenomMetadataRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 * @name QueryDenomMetadataRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export interface QueryDenomMetadataRequestAmino {
  /**
   * denom is the coin denom to query the metadata for.
   */
  denom: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataRequest";
  value: QueryDenomMetadataRequestAmino;
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
export interface QueryDenomMetadataResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 * @name QueryDenomMetadataResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export interface QueryDenomMetadataResponseAmino {
  /**
   * metadata describes and provides all the client information for the requested token.
   */
  metadata: MetadataAmino;
}
export interface QueryDenomMetadataResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataResponse";
  value: QueryDenomMetadataResponseAmino;
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
export interface QueryDenomMetadataByQueryStringRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest";
  value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 * @name QueryDenomMetadataByQueryStringRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest
 */
export interface QueryDenomMetadataByQueryStringRequestAmino {
  /**
   * denom is the coin denom to query the metadata for.
   */
  denom: string;
}
export interface QueryDenomMetadataByQueryStringRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest";
  value: QueryDenomMetadataByQueryStringRequestAmino;
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
export interface QueryDenomMetadataByQueryStringResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse";
  value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 * @name QueryDenomMetadataByQueryStringResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse
 */
export interface QueryDenomMetadataByQueryStringResponseAmino {
  /**
   * metadata describes and provides all the client information for the requested token.
   */
  metadata: MetadataAmino;
}
export interface QueryDenomMetadataByQueryStringResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse";
  value: QueryDenomMetadataByQueryStringResponseAmino;
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
export interface QueryDenomOwnersRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export interface QueryDenomOwnersRequestAmino {
  /**
   * denom defines the coin denomination to query all account holders for.
   */
  denom: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersRequest";
  value: QueryDenomOwnersRequestAmino;
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
export interface DenomOwnerProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.DenomOwner";
  value: Uint8Array;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 * @name DenomOwnerAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomOwner
 */
export interface DenomOwnerAmino {
  /**
   * address defines the address that owns a particular denomination.
   */
  address: string;
  /**
   * balance is the balance of the denominated coin for an account.
   */
  balance: CoinAmino;
}
export interface DenomOwnerAminoMsg {
  type: "cosmos-sdk/DenomOwner";
  value: DenomOwnerAmino;
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
export interface QueryDenomOwnersResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 * @name QueryDenomOwnersResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export interface QueryDenomOwnersResponseAmino {
  denom_owners: DenomOwnerAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersResponse";
  value: QueryDenomOwnersResponseAmino;
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
export interface QueryDenomOwnersByQueryRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 * @name QueryDenomOwnersByQueryRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest
 */
export interface QueryDenomOwnersByQueryRequestAmino {
  /**
   * denom defines the coin denomination to query all account holders for.
   */
  denom: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersByQueryRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersByQueryRequest";
  value: QueryDenomOwnersByQueryRequestAmino;
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
export interface QueryDenomOwnersByQueryResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 * @name QueryDenomOwnersByQueryResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse
 */
export interface QueryDenomOwnersByQueryResponseAmino {
  denom_owners: DenomOwnerAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersByQueryResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersByQueryResponse";
  value: QueryDenomOwnersByQueryResponseAmino;
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
export interface QuerySendEnabledRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest";
  value: Uint8Array;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 * @name QuerySendEnabledRequestAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export interface QuerySendEnabledRequestAmino {
  /**
   * denoms is the specific denoms you want look up. Leave empty to get all entries.
   */
  denoms: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   */
  pagination?: PageRequestAmino;
}
export interface QuerySendEnabledRequestAminoMsg {
  type: "cosmos-sdk/QuerySendEnabledRequest";
  value: QuerySendEnabledRequestAmino;
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
export interface QuerySendEnabledResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse";
  value: Uint8Array;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 * @name QuerySendEnabledResponseAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export interface QuerySendEnabledResponseAmino {
  send_enabled: SendEnabledAmino[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   */
  pagination?: PageResponseAmino;
}
export interface QuerySendEnabledResponseAminoMsg {
  type: "cosmos-sdk/QuerySendEnabledResponse";
  value: QuerySendEnabledResponseAmino;
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
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QueryBalanceResponse {
    return o && o.$typeUrl === QueryBalanceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && o.$typeUrl === QueryBalanceResponse.typeUrl;
  },
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
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBalanceResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
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
  is(o: any): o is QueryAllBalancesRequest {
    return o && (o.$typeUrl === QueryAllBalancesRequest.typeUrl || typeof o.address === "string" && typeof o.resolveDenom === "boolean");
  },
  isAmino(o: any): o is QueryAllBalancesRequestAmino {
    return o && (o.$typeUrl === QueryAllBalancesRequest.typeUrl || typeof o.address === "string" && typeof o.resolve_denom === "boolean");
  },
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
  },
  fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.resolve_denom !== undefined && object.resolve_denom !== null) {
      message.resolveDenom = object.resolve_denom;
    }
    return message;
  },
  toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.resolve_denom = message.resolveDenom === false ? undefined : message.resolveDenom;
    return obj;
  },
  fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.decode(message.value);
  },
  toProto(message: QueryAllBalancesRequest): Uint8Array {
    return QueryAllBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllBalancesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QueryAllBalancesResponse {
    return o && (o.$typeUrl === QueryAllBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.is(o.balances[0])));
  },
  isAmino(o: any): o is QueryAllBalancesResponseAmino {
    return o && (o.$typeUrl === QueryAllBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.isAmino(o.balances[0])));
  },
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
  },
  fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.decode(message.value);
  },
  toProto(message: QueryAllBalancesResponse): Uint8Array {
    return QueryAllBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryAllBalancesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QuerySpendableBalancesRequest {
    return o && (o.$typeUrl === QuerySpendableBalancesRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QuerySpendableBalancesRequestAmino {
    return o && (o.$typeUrl === QuerySpendableBalancesRequest.typeUrl || typeof o.address === "string");
  },
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
  },
  fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesRequest): Uint8Array {
    return QuerySpendableBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySpendableBalancesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QuerySpendableBalancesResponse {
    return o && (o.$typeUrl === QuerySpendableBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.is(o.balances[0])));
  },
  isAmino(o: any): o is QuerySpendableBalancesResponseAmino {
    return o && (o.$typeUrl === QuerySpendableBalancesResponse.typeUrl || Array.isArray(o.balances) && (!o.balances.length || Coin.isAmino(o.balances[0])));
  },
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
  },
  fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesResponse): Uint8Array {
    return QuerySpendableBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySpendableBalancesResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QuerySpendableBalanceByDenomRequest {
    return o && (o.$typeUrl === QuerySpendableBalanceByDenomRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QuerySpendableBalanceByDenomRequestAmino {
    return o && (o.$typeUrl === QuerySpendableBalanceByDenomRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QuerySpendableBalanceByDenomRequestAmino): QuerySpendableBalanceByDenomRequest {
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalanceByDenomRequestAminoMsg): QuerySpendableBalanceByDenomRequest {
    return QuerySpendableBalanceByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpendableBalanceByDenomRequestProtoMsg): QuerySpendableBalanceByDenomRequest {
    return QuerySpendableBalanceByDenomRequest.decode(message.value);
  },
  toProto(message: QuerySpendableBalanceByDenomRequest): Uint8Array {
    return QuerySpendableBalanceByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QuerySpendableBalanceByDenomResponse {
    return o && o.$typeUrl === QuerySpendableBalanceByDenomResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySpendableBalanceByDenomResponseAmino {
    return o && o.$typeUrl === QuerySpendableBalanceByDenomResponse.typeUrl;
  },
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
  },
  fromAmino(object: QuerySpendableBalanceByDenomResponseAmino): QuerySpendableBalanceByDenomResponse {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableBalanceByDenomResponseAminoMsg): QuerySpendableBalanceByDenomResponse {
    return QuerySpendableBalanceByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpendableBalanceByDenomResponseProtoMsg): QuerySpendableBalanceByDenomResponse {
    return QuerySpendableBalanceByDenomResponse.decode(message.value);
  },
  toProto(message: QuerySpendableBalanceByDenomResponse): Uint8Array {
    return QuerySpendableBalanceByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySpendableBalanceByDenomResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
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
  is(o: any): o is QueryTotalSupplyRequest {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalSupplyRequestAmino {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
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
  },
  fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalSupplyRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QueryTotalSupplyResponse {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.is(o.supply[0])));
  },
  isAmino(o: any): o is QueryTotalSupplyResponseAmino {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || Array.isArray(o.supply) && (!o.supply.length || Coin.isAmino(o.supply[0])));
  },
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
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supply = message.supply;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalSupplyResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QuerySupplyOfRequest {
    return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QuerySupplyOfRequestAmino {
    return o && (o.$typeUrl === QuerySupplyOfRequest.typeUrl || typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.decode(message.value);
  },
  toProto(message: QuerySupplyOfRequest): Uint8Array {
    return QuerySupplyOfRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QuerySupplyOfResponse {
    return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.is(o.amount));
  },
  isAmino(o: any): o is QuerySupplyOfResponseAmino {
    return o && (o.$typeUrl === QuerySupplyOfResponse.typeUrl || Coin.isAmino(o.amount));
  },
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
  },
  fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.decode(message.value);
  },
  toProto(message: QuerySupplyOfResponse): Uint8Array {
    return QuerySupplyOfResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySupplyOfResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
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
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
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
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
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
  is(o: any): o is QueryDenomsMetadataRequest {
    return o && o.$typeUrl === QueryDenomsMetadataRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDenomsMetadataRequestAmino {
    return o && o.$typeUrl === QueryDenomsMetadataRequest.typeUrl;
  },
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
  },
  fromAmino(object: QueryDenomsMetadataRequestAmino): QueryDenomsMetadataRequest {
    const message = createBaseQueryDenomsMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsMetadataRequestAminoMsg): QueryDenomsMetadataRequest {
    return QueryDenomsMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomsMetadataRequestProtoMsg): QueryDenomsMetadataRequest {
    return QueryDenomsMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomsMetadataRequest): Uint8Array {
    return QueryDenomsMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomsMetadataRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QueryDenomsMetadataResponse {
    return o && (o.$typeUrl === QueryDenomsMetadataResponse.typeUrl || Array.isArray(o.metadatas) && (!o.metadatas.length || Metadata.is(o.metadatas[0])));
  },
  isAmino(o: any): o is QueryDenomsMetadataResponseAmino {
    return o && (o.$typeUrl === QueryDenomsMetadataResponse.typeUrl || Array.isArray(o.metadatas) && (!o.metadatas.length || Metadata.isAmino(o.metadatas[0])));
  },
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
  },
  fromAmino(object: QueryDenomsMetadataResponseAmino): QueryDenomsMetadataResponse {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map(e => Metadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAmino {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadatas = message.metadatas;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsMetadataResponseAminoMsg): QueryDenomsMetadataResponse {
    return QueryDenomsMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomsMetadataResponseProtoMsg): QueryDenomsMetadataResponse {
    return QueryDenomsMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomsMetadataResponse): Uint8Array {
    return QueryDenomsMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomsMetadataResponse.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QueryDenomMetadataRequest {
    return o && (o.$typeUrl === QueryDenomMetadataRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomMetadataRequestAmino {
    return o && (o.$typeUrl === QueryDenomMetadataRequest.typeUrl || typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest {
    const message = createBaseQueryDenomMetadataRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest {
    return QueryDenomMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest {
    return QueryDenomMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomMetadataRequest): Uint8Array {
    return QueryDenomMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QueryDenomMetadataResponse {
    return o && (o.$typeUrl === QueryDenomMetadataResponse.typeUrl || Metadata.is(o.metadata));
  },
  isAmino(o: any): o is QueryDenomMetadataResponseAmino {
    return o && (o.$typeUrl === QueryDenomMetadataResponse.typeUrl || Metadata.isAmino(o.metadata));
  },
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
  },
  fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse {
    const message = createBaseQueryDenomMetadataResponse();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : Metadata.toAmino(Metadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse {
    return QueryDenomMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse {
    return QueryDenomMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomMetadataResponse): Uint8Array {
    return QueryDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomMetadataResponse.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
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
  is(o: any): o is QueryDenomMetadataByQueryStringRequest {
    return o && (o.$typeUrl === QueryDenomMetadataByQueryStringRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomMetadataByQueryStringRequestAmino {
    return o && (o.$typeUrl === QueryDenomMetadataByQueryStringRequest.typeUrl || typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QueryDenomMetadataByQueryStringRequestAmino): QueryDenomMetadataByQueryStringRequest {
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomMetadataByQueryStringRequestAminoMsg): QueryDenomMetadataByQueryStringRequest {
    return QueryDenomMetadataByQueryStringRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest",
      value: QueryDenomMetadataByQueryStringRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomMetadataByQueryStringRequestProtoMsg): QueryDenomMetadataByQueryStringRequest {
    return QueryDenomMetadataByQueryStringRequest.decode(message.value);
  },
  toProto(message: QueryDenomMetadataByQueryStringRequest): Uint8Array {
    return QueryDenomMetadataByQueryStringRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest",
      value: QueryDenomMetadataByQueryStringRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
  is(o: any): o is QueryDenomMetadataByQueryStringResponse {
    return o && (o.$typeUrl === QueryDenomMetadataByQueryStringResponse.typeUrl || Metadata.is(o.metadata));
  },
  isAmino(o: any): o is QueryDenomMetadataByQueryStringResponseAmino {
    return o && (o.$typeUrl === QueryDenomMetadataByQueryStringResponse.typeUrl || Metadata.isAmino(o.metadata));
  },
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
  },
  fromAmino(object: QueryDenomMetadataByQueryStringResponseAmino): QueryDenomMetadataByQueryStringResponse {
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : Metadata.toAmino(Metadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryDenomMetadataByQueryStringResponseAminoMsg): QueryDenomMetadataByQueryStringResponse {
    return QueryDenomMetadataByQueryStringResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse",
      value: QueryDenomMetadataByQueryStringResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomMetadataByQueryStringResponseProtoMsg): QueryDenomMetadataByQueryStringResponse {
    return QueryDenomMetadataByQueryStringResponse.decode(message.value);
  },
  toProto(message: QueryDenomMetadataByQueryStringResponse): Uint8Array {
    return QueryDenomMetadataByQueryStringResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse",
      value: QueryDenomMetadataByQueryStringResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomMetadataByQueryStringResponse.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
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
  is(o: any): o is QueryDenomOwnersRequest {
    return o && (o.$typeUrl === QueryDenomOwnersRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomOwnersRequestAmino {
    return o && (o.$typeUrl === QueryDenomOwnersRequest.typeUrl || typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QueryDenomOwnersRequestAmino): QueryDenomOwnersRequest {
    const message = createBaseQueryDenomOwnersRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomOwnersRequestAminoMsg): QueryDenomOwnersRequest {
    return QueryDenomOwnersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomOwnersRequestProtoMsg): QueryDenomOwnersRequest {
    return QueryDenomOwnersRequest.decode(message.value);
  },
  toProto(message: QueryDenomOwnersRequest): Uint8Array {
    return QueryDenomOwnersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomOwnersRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is DenomOwner {
    return o && (o.$typeUrl === DenomOwner.typeUrl || typeof o.address === "string" && Coin.is(o.balance));
  },
  isAmino(o: any): o is DenomOwnerAmino {
    return o && (o.$typeUrl === DenomOwner.typeUrl || typeof o.address === "string" && Coin.isAmino(o.balance));
  },
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
  },
  fromAmino(object: DenomOwnerAmino): DenomOwner {
    const message = createBaseDenomOwner();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: DenomOwner): DenomOwnerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DenomOwnerAminoMsg): DenomOwner {
    return DenomOwner.fromAmino(object.value);
  },
  toAminoMsg(message: DenomOwner): DenomOwnerAminoMsg {
    return {
      type: "cosmos-sdk/DenomOwner",
      value: DenomOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomOwnerProtoMsg): DenomOwner {
    return DenomOwner.decode(message.value);
  },
  toProto(message: DenomOwner): Uint8Array {
    return DenomOwner.encode(message).finish();
  },
  toProtoMsg(message: DenomOwner): DenomOwnerProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
      value: DenomOwner.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DenomOwner.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
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
  is(o: any): o is QueryDenomOwnersResponse {
    return o && (o.$typeUrl === QueryDenomOwnersResponse.typeUrl || Array.isArray(o.denomOwners) && (!o.denomOwners.length || DenomOwner.is(o.denomOwners[0])));
  },
  isAmino(o: any): o is QueryDenomOwnersResponseAmino {
    return o && (o.$typeUrl === QueryDenomOwnersResponse.typeUrl || Array.isArray(o.denom_owners) && (!o.denom_owners.length || DenomOwner.isAmino(o.denom_owners[0])));
  },
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
  },
  fromAmino(object: QueryDenomOwnersResponseAmino): QueryDenomOwnersResponse {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denom_owners?.map(e => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAmino {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denom_owners = message.denomOwners.map(e => e ? DenomOwner.toAmino(e) : undefined);
    } else {
      obj.denom_owners = message.denomOwners;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomOwnersResponseAminoMsg): QueryDenomOwnersResponse {
    return QueryDenomOwnersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomOwnersResponseProtoMsg): QueryDenomOwnersResponse {
    return QueryDenomOwnersResponse.decode(message.value);
  },
  toProto(message: QueryDenomOwnersResponse): Uint8Array {
    return QueryDenomOwnersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomOwnersResponse.typeUrl)) {
      return;
    }
    DenomOwner.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QueryDenomOwnersByQueryRequest {
    return o && (o.$typeUrl === QueryDenomOwnersByQueryRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomOwnersByQueryRequestAmino {
    return o && (o.$typeUrl === QueryDenomOwnersByQueryRequest.typeUrl || typeof o.denom === "string");
  },
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
  },
  fromAmino(object: QueryDenomOwnersByQueryRequestAmino): QueryDenomOwnersByQueryRequest {
    const message = createBaseQueryDenomOwnersByQueryRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomOwnersByQueryRequestAminoMsg): QueryDenomOwnersByQueryRequest {
    return QueryDenomOwnersByQueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersByQueryRequest",
      value: QueryDenomOwnersByQueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomOwnersByQueryRequestProtoMsg): QueryDenomOwnersByQueryRequest {
    return QueryDenomOwnersByQueryRequest.decode(message.value);
  },
  toProto(message: QueryDenomOwnersByQueryRequest): Uint8Array {
    return QueryDenomOwnersByQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest",
      value: QueryDenomOwnersByQueryRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomOwnersByQueryRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QueryDenomOwnersByQueryResponse {
    return o && (o.$typeUrl === QueryDenomOwnersByQueryResponse.typeUrl || Array.isArray(o.denomOwners) && (!o.denomOwners.length || DenomOwner.is(o.denomOwners[0])));
  },
  isAmino(o: any): o is QueryDenomOwnersByQueryResponseAmino {
    return o && (o.$typeUrl === QueryDenomOwnersByQueryResponse.typeUrl || Array.isArray(o.denom_owners) && (!o.denom_owners.length || DenomOwner.isAmino(o.denom_owners[0])));
  },
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
  },
  fromAmino(object: QueryDenomOwnersByQueryResponseAmino): QueryDenomOwnersByQueryResponse {
    const message = createBaseQueryDenomOwnersByQueryResponse();
    message.denomOwners = object.denom_owners?.map(e => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseAmino {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denom_owners = message.denomOwners.map(e => e ? DenomOwner.toAmino(e) : undefined);
    } else {
      obj.denom_owners = message.denomOwners;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomOwnersByQueryResponseAminoMsg): QueryDenomOwnersByQueryResponse {
    return QueryDenomOwnersByQueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersByQueryResponse",
      value: QueryDenomOwnersByQueryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomOwnersByQueryResponseProtoMsg): QueryDenomOwnersByQueryResponse {
    return QueryDenomOwnersByQueryResponse.decode(message.value);
  },
  toProto(message: QueryDenomOwnersByQueryResponse): Uint8Array {
    return QueryDenomOwnersByQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse",
      value: QueryDenomOwnersByQueryResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDenomOwnersByQueryResponse.typeUrl)) {
      return;
    }
    DenomOwner.registerTypeUrl();
    PageResponse.registerTypeUrl();
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
  is(o: any): o is QuerySendEnabledRequest {
    return o && (o.$typeUrl === QuerySendEnabledRequest.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QuerySendEnabledRequestAmino {
    return o && (o.$typeUrl === QuerySendEnabledRequest.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
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
  },
  fromAmino(object: QuerySendEnabledRequestAmino): QuerySendEnabledRequest {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySendEnabledRequest): QuerySendEnabledRequestAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySendEnabledRequestAminoMsg): QuerySendEnabledRequest {
    return QuerySendEnabledRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySendEnabledRequestProtoMsg): QuerySendEnabledRequest {
    return QuerySendEnabledRequest.decode(message.value);
  },
  toProto(message: QuerySendEnabledRequest): Uint8Array {
    return QuerySendEnabledRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySendEnabledRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
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
  is(o: any): o is QuerySendEnabledResponse {
    return o && (o.$typeUrl === QuerySendEnabledResponse.typeUrl || Array.isArray(o.sendEnabled) && (!o.sendEnabled.length || SendEnabled.is(o.sendEnabled[0])));
  },
  isAmino(o: any): o is QuerySendEnabledResponseAmino {
    return o && (o.$typeUrl === QuerySendEnabledResponse.typeUrl || Array.isArray(o.send_enabled) && (!o.send_enabled.length || SendEnabled.isAmino(o.send_enabled[0])));
  },
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
  },
  fromAmino(object: QuerySendEnabledResponseAmino): QuerySendEnabledResponse {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.send_enabled?.map(e => SendEnabled.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySendEnabledResponse): QuerySendEnabledResponseAmino {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map(e => e ? SendEnabled.toAmino(e) : undefined);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySendEnabledResponseAminoMsg): QuerySendEnabledResponse {
    return QuerySendEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySendEnabledResponseProtoMsg): QuerySendEnabledResponse {
    return QuerySendEnabledResponse.decode(message.value);
  },
  toProto(message: QuerySendEnabledResponse): Uint8Array {
    return QuerySendEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySendEnabledResponse.typeUrl)) {
      return;
    }
    SendEnabled.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};