import { buildQuery } from "../../../../helper-func-types";
import { ConfigRequest, ConfigResponse } from "./query";
/* Config queries for the operator configuration. */
export const getConfig = buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v2.Service",
  method: "Config",
  deps: [ConfigRequest, ConfigResponse]
});