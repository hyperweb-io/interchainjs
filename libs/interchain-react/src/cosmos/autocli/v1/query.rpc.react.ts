import { buildUseQuery } from "../../../react-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
import { getAppOptions } from "./query.rpc.func";
export const useGetAppOptions = buildUseQuery<AppOptionsRequest, AppOptionsResponse>({
  builderQueryFn: getAppOptions,
  queryKeyPrefix: "AppOptionsQuery"
});