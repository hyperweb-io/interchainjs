import { buildUseVueQuery } from "../../../../vue-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { createGetConfig, createGetStatus } from "./query.rpc.func.ts";
export const useGetConfig = buildUseVueQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});
export const useGetStatus = buildUseVueQuery<StatusRequest, StatusResponse>({
  builderQueryFn: createGetStatus,
  queryKeyPrefix: "StatusQuery"
});