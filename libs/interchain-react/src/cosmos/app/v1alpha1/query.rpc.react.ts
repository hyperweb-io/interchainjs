import { buildUseQuery } from "../../../react-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
import { getConfig } from "./query.rpc.func";
/* Config returns the current app config. */
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});