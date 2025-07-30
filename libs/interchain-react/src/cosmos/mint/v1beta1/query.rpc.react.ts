import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { getParams, getInflation, getAnnualProvisions } from "./query.rpc.func";
/**
 * Params returns the total set of minting parameters.
 * @name useGetParams
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Inflation returns the current minting inflation value.
 * @name useGetInflation
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Inflation
 */
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: getInflation,
  queryKeyPrefix: "InflationQuery"
});
/**
 * AnnualProvisions current minting annual provisions value.
 * @name useGetAnnualProvisions
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.AnnualProvisions
 */
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: getAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});