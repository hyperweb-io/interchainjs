import { buildUseVueQuery } from "../../../vue-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
import { createGetConfig } from "./query.rpc.func";
export const useGetConfig = buildUseVueQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});