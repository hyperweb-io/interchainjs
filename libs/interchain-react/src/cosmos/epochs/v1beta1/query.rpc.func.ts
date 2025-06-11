import { buildQuery } from "../../../helper-func-types";
import { QueryEpochInfosRequest, QueryEpochInfosResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
/**
 * EpochInfos provide running epochInfos
 * @name getEpochInfos
 * @package cosmos.epochs.v1beta1
 * @see proto service: cosmos.epochs.v1beta1.EpochInfos
 */
export const getEpochInfos = buildQuery<QueryEpochInfosRequest, QueryEpochInfosResponse>({
  encode: QueryEpochInfosRequest.encode,
  decode: QueryEpochInfosResponse.decode,
  service: "cosmos.epochs.v1beta1.Query",
  method: "EpochInfos",
  deps: [QueryEpochInfosRequest, QueryEpochInfosResponse]
});
/**
 * CurrentEpoch provide current epoch of specified identifier
 * @name getCurrentEpoch
 * @package cosmos.epochs.v1beta1
 * @see proto service: cosmos.epochs.v1beta1.CurrentEpoch
 */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "cosmos.epochs.v1beta1.Query",
  method: "CurrentEpoch",
  deps: [QueryCurrentEpochRequest, QueryCurrentEpochResponse]
});