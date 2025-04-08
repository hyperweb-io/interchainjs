import { buildQuery } from "../../../helper-func-types";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
export const getConfig = buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encode: QueryConfigRequest.encode,
  decode: QueryConfigResponse.decode,
  service: "cosmos.app.v1alpha1.Query",
  method: "Config"
});