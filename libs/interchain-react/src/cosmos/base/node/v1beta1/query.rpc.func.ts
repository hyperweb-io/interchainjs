import { buildQuery } from "../../../../helper-func-types";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
/* Config queries for the operator configuration. */
export const getConfig = buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Config",
  deps: [ConfigRequest, ConfigResponse]
});
/* Status queries for the node status. */
export const getStatus = buildQuery<StatusRequest, StatusResponse>({
  encode: StatusRequest.encode,
  decode: StatusResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Status",
  deps: [StatusRequest, StatusResponse]
});