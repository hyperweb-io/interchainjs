import { buildQuery } from "../../../helper-func-types";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
export const getAppOptions = buildQuery<AppOptionsRequest, AppOptionsResponse>({
  encode: AppOptionsRequest.encode,
  decode: AppOptionsResponse.decode,
  service: "cosmos.autocli.v1.Query",
  method: "AppOptions",
  deps: [AppOptionsRequest, AppOptionsResponse]
});