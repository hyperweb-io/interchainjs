import { buildUseQuery } from "../../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { getParams, getDenomHash, getEscrowAddress, getTotalEscrowForDenom } from "./query.rpc.func";
/* Params queries all parameters of the ibc-transfer module. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* DenomHash queries a denomination hash information. */
export const useGetDenomHash = buildUseQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: getDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
/* EscrowAddress returns the escrow address for a particular port and channel id. */
export const useGetEscrowAddress = buildUseQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: getEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
/* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
export const useGetTotalEscrowForDenom = buildUseQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: getTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});