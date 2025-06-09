import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
import { getConfig, getStatus } from "./query.rpc.func";
/**
 * Config queries for the operator configuration.
 * @name useGetConfig
 * @package cosmos.base.node.v1beta1
 * @see proto service: cosmos.base.node.v1beta1.Config
 */
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});
/**
 * Status queries for the node status.
 * @name useGetStatus
 * @package cosmos.base.node.v1beta1
 * @see proto service: cosmos.base.node.v1beta1.Status
 */
export const useGetStatus = buildUseQuery<StatusRequest, StatusResponse>({
  builderQueryFn: getStatus,
  queryKeyPrefix: "StatusQuery"
});