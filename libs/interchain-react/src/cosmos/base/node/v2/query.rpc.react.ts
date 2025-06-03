import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
/* Config queries for the operator configuration. */
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});