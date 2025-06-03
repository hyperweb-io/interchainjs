import { buildUseVueQuery } from "../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { getParams, getDenomHash, getEscrowAddress, getTotalEscrowForDenom } from "./query.rpc.func";
/* Params queries all parameters of the ibc-transfer module. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* DenomHash queries a denomination hash information. */
export const useGetDenomHash = buildUseVueQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: getDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
/* EscrowAddress returns the escrow address for a particular port and channel id. */
export const useGetEscrowAddress = buildUseVueQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: getEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
/* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
export const useGetTotalEscrowForDenom = buildUseVueQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: getTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});