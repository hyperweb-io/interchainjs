import { buildUseVueQuery } from "../../../../vue-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
import { getClientState, getClientStates, getConsensusState, getConsensusStates, getConsensusStateHeights, getClientStatus, getClientParams, getUpgradedClientState, getUpgradedConsensusState, getVerifyMembership } from "./query.rpc.func";
/* ClientState queries an IBC light client. */
export const useGetClientState = buildUseVueQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: getClientState,
  queryKeyPrefix: "ClientStateQuery"
});
/* ClientStates queries all the IBC light clients of a chain. */
export const useGetClientStates = buildUseVueQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: getClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
/* ConsensusState queries a consensus state associated with a client state at
 a given height. */
export const useGetConsensusState = buildUseVueQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: getConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
/* ConsensusStates queries all the consensus state associated with a given
 client. */
export const useGetConsensusStates = buildUseVueQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: getConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
/* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
export const useGetConsensusStateHeights = buildUseVueQuery<QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse>({
  builderQueryFn: getConsensusStateHeights,
  queryKeyPrefix: "ConsensusStateHeightsQuery"
});
/* Status queries the status of an IBC client. */
export const useGetClientStatus = buildUseVueQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: getClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
/* ClientParams queries all parameters of the ibc client submodule. */
export const useGetClientParams = buildUseVueQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: getClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
/* UpgradedClientState queries an Upgraded IBC light client. */
export const useGetUpgradedClientState = buildUseVueQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: getUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
/* UpgradedConsensusState queries an Upgraded IBC consensus state. */
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
/* VerifyMembership queries an IBC light client for proof verification of a value at a given key path. */
export const useGetVerifyMembership = buildUseVueQuery<QueryVerifyMembershipRequest, QueryVerifyMembershipResponse>({
  builderQueryFn: getVerifyMembership,
  queryKeyPrefix: "VerifyMembershipQuery"
});