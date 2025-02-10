import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export const createGetCurrentPlan = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encode: QueryCurrentPlanRequest.encode,
  decode: QueryCurrentPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "CurrentPlan",
  clientResolver,
  deps: [QueryCurrentPlanRequest, QueryCurrentPlanResponse]
});
export const createGetAppliedPlan = (clientResolver?: RpcResolver) => buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encode: QueryAppliedPlanRequest.encode,
  decode: QueryAppliedPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "AppliedPlan",
  clientResolver,
  deps: [QueryAppliedPlanRequest, QueryAppliedPlanResponse]
});
export const createGetUpgradedConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "UpgradedConsensusState",
  clientResolver,
  deps: [QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse]
});
export const createGetModuleVersions = (clientResolver?: RpcResolver) => buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encode: QueryModuleVersionsRequest.encode,
  decode: QueryModuleVersionsResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "ModuleVersions",
  clientResolver,
  deps: [QueryModuleVersionsRequest, QueryModuleVersionsResponse]
});
export const createGetAuthority = (clientResolver?: RpcResolver) => buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encode: QueryAuthorityRequest.encode,
  decode: QueryAuthorityResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "Authority",
  clientResolver,
  deps: [QueryAuthorityRequest, QueryAuthorityResponse]
});