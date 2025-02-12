import { buildUseQuery } from "../../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { createGetParams, createGetDenomHash, createGetEscrowAddress, createGetTotalEscrowForDenom } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDenomHash = buildUseQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: createGetDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
export const useGetEscrowAddress = buildUseQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: createGetEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
export const useGetTotalEscrowForDenom = buildUseQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: createGetTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});