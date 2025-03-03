import { buildUseVueQuery } from "../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { createGetParams, createGetDenomHash, createGetEscrowAddress, createGetTotalEscrowForDenom } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDenomHash = buildUseVueQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: createGetDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
export const useGetEscrowAddress = buildUseVueQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: createGetEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
export const useGetTotalEscrowForDenom = buildUseVueQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: createGetTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});