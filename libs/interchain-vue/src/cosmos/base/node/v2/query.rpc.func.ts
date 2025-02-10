import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { ConfigRequest, ConfigResponse } from "./query";
export const createGetConfig = (clientResolver?: RpcResolver) => buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v2.Service",
  method: "Config",
  clientResolver
});