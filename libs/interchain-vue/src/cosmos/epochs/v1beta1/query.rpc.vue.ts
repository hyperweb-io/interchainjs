import { buildUseVueQuery } from "../../../vue-query";
import { QueryEpochInfosRequest, QueryEpochInfosResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { getEpochInfos, getCurrentEpoch } from "./query.rpc.func";
/**
 * EpochInfos provide running epochInfos
 * @name useGetEpochInfos
 * @package cosmos.epochs.v1beta1
 * @see proto service: cosmos.epochs.v1beta1.EpochInfos
 */
export const useGetEpochInfos = buildUseVueQuery<QueryEpochInfosRequest, QueryEpochInfosResponse>({
  builderQueryFn: getEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name useGetCurrentEpoch
 * @package cosmos.epochs.v1beta1
 * @see proto service: cosmos.epochs.v1beta1.CurrentEpoch
 */
export const useGetCurrentEpoch = buildUseVueQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: getCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});