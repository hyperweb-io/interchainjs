import { buildUseVueQuery } from "../../../../vue-query";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse, QueryConfigRequest, QueryConfigResponse } from "./query";
import { getCounterpartyInfo, getConfig } from "./query.rpc.func";
/**
 * CounterpartyInfo queries an IBC light counter party info.
 * @name useGetCounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.CounterpartyInfo
 */
export const useGetCounterpartyInfo = buildUseVueQuery<QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse>({
  builderQueryFn: getCounterpartyInfo,
  queryKeyPrefix: "CounterpartyInfoQuery"
});
/**
 * Config queries the IBC client v2 configuration for a given client.
 * @name useGetConfig
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.Config
 */
export const useGetConfig = buildUseVueQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});