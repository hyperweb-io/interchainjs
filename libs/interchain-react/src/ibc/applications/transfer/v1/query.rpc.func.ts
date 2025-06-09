import { buildQuery } from "../../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/**
 * Params queries all parameters of the ibc-transfer module.
 * @name getParams
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * DenomHash queries a denomination hash information.
 * @name getDenomHash
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.DenomHash
 */
export const getDenomHash = buildQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  encode: QueryDenomHashRequest.encode,
  decode: QueryDenomHashResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomHash",
  deps: [QueryDenomHashRequest, QueryDenomHashResponse]
});
/**
 * EscrowAddress returns the escrow address for a particular port and channel id.
 * @name getEscrowAddress
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.EscrowAddress
 */
export const getEscrowAddress = buildQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  encode: QueryEscrowAddressRequest.encode,
  decode: QueryEscrowAddressResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "EscrowAddress",
  deps: [QueryEscrowAddressRequest, QueryEscrowAddressResponse]
});
/**
 * TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.
 * @name getTotalEscrowForDenom
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.TotalEscrowForDenom
 */
export const getTotalEscrowForDenom = buildQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  encode: QueryTotalEscrowForDenomRequest.encode,
  decode: QueryTotalEscrowForDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "TotalEscrowForDenom",
  deps: [QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse]
});