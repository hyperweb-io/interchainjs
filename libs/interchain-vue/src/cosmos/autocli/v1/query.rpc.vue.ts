import { buildUseVueQuery } from "../../../vue-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
import { createGetAppOptions } from "./query.rpc.func";
export const useGetAppOptions = buildUseVueQuery<AppOptionsRequest, AppOptionsResponse>({
  builderQueryFn: createGetAppOptions,
  queryKeyPrefix: "AppOptionsQuery"
});