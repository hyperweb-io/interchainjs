import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { getConfig, getStatus } from "./query.rpc.func";
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});
export const useGetStatus = buildUseQuery<StatusRequest, StatusResponse>({
  builderQueryFn: getStatus,
  queryKeyPrefix: "StatusQuery"
});