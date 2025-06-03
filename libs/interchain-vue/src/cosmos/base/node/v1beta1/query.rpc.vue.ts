import { buildUseVueQuery } from "../../../../vue-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { getConfig, getStatus } from "./query.rpc.func";
/* Config queries for the operator configuration. */
export const useGetConfig = buildUseVueQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});
/* Status queries for the node status. */
export const useGetStatus = buildUseVueQuery<StatusRequest, StatusResponse>({
  builderQueryFn: getStatus,
  queryKeyPrefix: "StatusQuery"
});