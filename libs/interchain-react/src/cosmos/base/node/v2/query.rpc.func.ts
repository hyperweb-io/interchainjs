import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse } from "./query";
export const createGetConfig = (clientResolver?: RpcResolver) => buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v2.Service",
  method: "Config",
  clientResolver,
  deps: [ConfigRequest, ConfigResponse]
});
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});