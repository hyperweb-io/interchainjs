import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse } from "./query";
import { createGetConfig } from "./query.rpc.func.ts";
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});