import { buildUseVueQuery } from "../../../vue-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
import { getCurrentPlan, getAppliedPlan, getUpgradedConsensusState, getModuleVersions, getAuthority } from "./query.rpc.func";
export const useGetCurrentPlan = buildUseVueQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: getCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const useGetAppliedPlan = buildUseVueQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: getAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const useGetModuleVersions = buildUseVueQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: getModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const useGetAuthority = buildUseVueQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: getAuthority,
  queryKeyPrefix: "AuthorityQuery"
});