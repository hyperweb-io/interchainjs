import { buildUseQuery } from "../../../react-query";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
import { getAppOptions } from "./query.rpc.func";
/**
 * AppOptions returns the autocli options for all of the modules in an app.
 * @name useGetAppOptions
 * @package cosmos.autocli.v1
 * @see proto service: cosmos.autocli.v1.AppOptions
 */
export const useGetAppOptions = buildUseQuery<AppOptionsRequest, AppOptionsResponse>({
  builderQueryFn: getAppOptions,
  queryKeyPrefix: "AppOptionsQuery"
});