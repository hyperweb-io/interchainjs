import { buildQuery } from "../../../../helper-func-types";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse, QueryConfigRequest, QueryConfigResponse } from "./query";
/**
 * CounterpartyInfo queries an IBC light counter party info.
 * @name getCounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.CounterpartyInfo
 */
export const getCounterpartyInfo = buildQuery<QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse>({
  encode: QueryCounterpartyInfoRequest.encode,
  decode: QueryCounterpartyInfoResponse.decode,
  service: "ibc.core.client.v2.Query",
  method: "CounterpartyInfo",
  deps: [QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse]
});
/**
 * Config queries the IBC client v2 configuration for a given client.
 * @name getConfig
 * @package ibc.core.client.v2
 * @see proto service: ibc.core.client.v2.Config
 */
export const getConfig = buildQuery<QueryConfigRequest, QueryConfigResponse>({
  encode: QueryConfigRequest.encode,
  decode: QueryConfigResponse.decode,
  service: "ibc.core.client.v2.Query",
  method: "Config",
  deps: [QueryConfigRequest, QueryConfigResponse]
});