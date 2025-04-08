import { buildUseVueQuery } from "../../../../vue-query";
import { ConfigRequest, ConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
export const useGetConfig = buildUseVueQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});