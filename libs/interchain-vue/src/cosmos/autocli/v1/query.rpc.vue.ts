import { buildUseVueQuery } from "../../../vue-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
import { getAppOptions } from "./query.rpc.func";
export const useGetAppOptions = buildUseVueQuery<AppOptionsRequest, AppOptionsResponse>({
  builderQueryFn: getAppOptions,
  queryKeyPrefix: "AppOptionsQuery"
});