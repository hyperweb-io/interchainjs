import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
/**
 * Config queries for the operator configuration.
 * @name useGetConfig
 * @package cosmos.base.node.v2
 * @see proto service: cosmos.base.node.v2.Config
 */
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});