import { buildUseVueQuery } from "../../../../vue-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { getConfig, getStatus } from "./query.rpc.func";
export const useGetConfig = buildUseVueQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});
export const useGetStatus = buildUseVueQuery<StatusRequest, StatusResponse>({
  builderQueryFn: getStatus,
  queryKeyPrefix: "StatusQuery"
});