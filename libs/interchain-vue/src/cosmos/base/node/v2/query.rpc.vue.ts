import { buildUseVueQuery } from "../../../../vue-query";
import { ConfigRequest, ConfigResponse } from "./query";
import { createGetConfig } from "./query.rpc.func";
export const useGetConfig = buildUseVueQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});