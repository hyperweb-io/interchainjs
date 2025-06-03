import { buildQuery } from "../../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/* Params queries all parameters of the ibc-transfer module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/* DenomHash queries a denomination hash information. */
export const getDenomHash = buildQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  encode: QueryDenomHashRequest.encode,
  decode: QueryDenomHashResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomHash",
  deps: [QueryDenomHashRequest, QueryDenomHashResponse]
});
/* EscrowAddress returns the escrow address for a particular port and channel id. */
export const getEscrowAddress = buildQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  encode: QueryEscrowAddressRequest.encode,
  decode: QueryEscrowAddressResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "EscrowAddress",
  deps: [QueryEscrowAddressRequest, QueryEscrowAddressResponse]
});
/* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
export const getTotalEscrowForDenom = buildQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  encode: QueryTotalEscrowForDenomRequest.encode,
  decode: QueryTotalEscrowForDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "TotalEscrowForDenom",
  deps: [QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse]
});