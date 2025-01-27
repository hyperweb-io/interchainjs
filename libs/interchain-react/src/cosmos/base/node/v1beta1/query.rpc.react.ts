import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { createGetConfig, createGetStatus } from "./query.rpc.func";
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});
export const useGetStatus = buildUseQuery<StatusRequest, StatusResponse>({
  builderQueryFn: createGetStatus,
  queryKeyPrefix: "StatusQuery"
});