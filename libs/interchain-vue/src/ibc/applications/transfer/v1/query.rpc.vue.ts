import { buildUseVueQuery } from "../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { getParams, getDenomHash, getEscrowAddress, getTotalEscrowForDenom } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDenomHash = buildUseVueQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: getDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
export const useGetEscrowAddress = buildUseVueQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: getEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
export const useGetTotalEscrowForDenom = buildUseVueQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: getTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});