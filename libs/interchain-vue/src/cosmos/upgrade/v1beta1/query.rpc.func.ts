import { buildQuery } from "../../../helper-func-types";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export const getCurrentPlan = buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encode: QueryCurrentPlanRequest.encode,
  decode: QueryCurrentPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "CurrentPlan"
});
export const getAppliedPlan = buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encode: QueryAppliedPlanRequest.encode,
  decode: QueryAppliedPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "AppliedPlan"
});
export const getUpgradedConsensusState = buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "UpgradedConsensusState"
});
export const getModuleVersions = buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encode: QueryModuleVersionsRequest.encode,
  decode: QueryModuleVersionsResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "ModuleVersions"
});
export const getAuthority = buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encode: QueryAuthorityRequest.encode,
  decode: QueryAuthorityResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "Authority"
});