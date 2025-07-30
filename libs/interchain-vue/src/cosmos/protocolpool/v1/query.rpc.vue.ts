import { buildUseVueQuery } from "../../../vue-query";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryContinuousFundRequest, QueryContinuousFundResponse, QueryContinuousFundsRequest, QueryContinuousFundsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getCommunityPool, getContinuousFund, getContinuousFunds, getParams } from "./query.rpc.func";
/**
 * CommunityPool queries the community pool coins.
 * @name useGetCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.CommunityPool
 */
export const useGetCommunityPool = buildUseVueQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: getCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});
/**
 * ContinuousFund queries a continuous fund by the recipient is is associated with.
 * @name useGetContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.ContinuousFund
 */
export const useGetContinuousFund = buildUseVueQuery<QueryContinuousFundRequest, QueryContinuousFundResponse>({
  builderQueryFn: getContinuousFund,
  queryKeyPrefix: "ContinuousFundQuery"
});
/**
 * ContinuousFunds queries all continuous funds in the store.
 * @name useGetContinuousFunds
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.ContinuousFunds
 */
export const useGetContinuousFunds = buildUseVueQuery<QueryContinuousFundsRequest, QueryContinuousFundsResponse>({
  builderQueryFn: getContinuousFunds,
  queryKeyPrefix: "ContinuousFundsQuery"
});
/**
 * Params returns the total set of x/protocolpool parameters.
 * @name useGetParams
 * @package cosmos.protocolpool.v1
 * @see proto service: cosmos.protocolpool.v1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});