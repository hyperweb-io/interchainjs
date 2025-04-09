import { buildQuery } from "../../../helper-func-types";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export const getCurrentPlan = buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encode: QueryCurrentPlanRequest.encode,
  decode: QueryCurrentPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "CurrentPlan",
  deps: [QueryCurrentPlanRequest, QueryCurrentPlanResponse]
});
export const getAppliedPlan = buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encode: QueryAppliedPlanRequest.encode,
  decode: QueryAppliedPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "AppliedPlan",
  deps: [QueryAppliedPlanRequest, QueryAppliedPlanResponse]
});
export const getUpgradedConsensusState = buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "UpgradedConsensusState",
  deps: [QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse]
});
export const getModuleVersions = buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encode: QueryModuleVersionsRequest.encode,
  decode: QueryModuleVersionsResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "ModuleVersions",
  deps: [QueryModuleVersionsRequest, QueryModuleVersionsResponse]
});
export const getAuthority = buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encode: QueryAuthorityRequest.encode,
  decode: QueryAuthorityResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "Authority",
  deps: [QueryAuthorityRequest, QueryAuthorityResponse]
});