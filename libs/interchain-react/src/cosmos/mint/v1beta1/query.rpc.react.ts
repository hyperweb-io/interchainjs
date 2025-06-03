import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { getParams, getInflation, getAnnualProvisions } from "./query.rpc.func";
/* Params returns the total set of minting parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Inflation returns the current minting inflation value. */
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: getInflation,
  queryKeyPrefix: "InflationQuery"
});
/* AnnualProvisions current minting annual provisions value. */
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: getAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});