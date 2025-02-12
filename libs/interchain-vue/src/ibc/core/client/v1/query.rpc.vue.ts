import { buildUseVueQuery } from "../../../../vue-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
import { createGetClientState, createGetClientStates, createGetConsensusState, createGetConsensusStates, createGetConsensusStateHeights, createGetClientStatus, createGetClientParams, createGetUpgradedClientState, createGetUpgradedConsensusState, createGetVerifyMembership } from "./query.rpc.func";
export const useGetClientState = buildUseVueQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const useGetClientStates = buildUseVueQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const useGetConsensusState = buildUseVueQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const useGetConsensusStates = buildUseVueQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const useGetConsensusStateHeights = buildUseVueQuery<QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse>({
  builderQueryFn: createGetConsensusStateHeights,
  queryKeyPrefix: "ConsensusStateHeightsQuery"
});
export const useGetClientStatus = buildUseVueQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const useGetClientParams = buildUseVueQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const useGetUpgradedClientState = buildUseVueQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const useGetVerifyMembership = buildUseVueQuery<QueryVerifyMembershipRequest, QueryVerifyMembershipResponse>({
  builderQueryFn: createGetVerifyMembership,
  queryKeyPrefix: "VerifyMembershipQuery"
});