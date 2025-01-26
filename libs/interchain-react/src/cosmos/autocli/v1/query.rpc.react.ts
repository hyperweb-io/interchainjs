import { buildUseQuery } from "../../../react-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
import { createGetAppOptions } from "./query.rpc.func";
export const useGetAppOptions = buildUseQuery<AppOptionsRequest, AppOptionsResponse>({
  builderQueryFn: createGetAppOptions,
  queryKeyPrefix: "AppOptionsQuery"
});