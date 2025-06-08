import { buildUseVueQuery } from "../../../../vue-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
import { getClientState, getClientStates, getConsensusState, getConsensusStates, getConsensusStateHeights, getClientStatus, getClientParams, getUpgradedClientState, getUpgradedConsensusState, getVerifyMembership } from "./query.rpc.func";
/**
 * ClientState queries an IBC light client.
 * @name useGetClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientState
 */
export const useGetClientState = buildUseVueQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: getClientState,
  queryKeyPrefix: "ClientStateQuery"
});
/**
 * ClientStates queries all the IBC light clients of a chain.
 * @name useGetClientStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStates
 */
export const useGetClientStates = buildUseVueQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: getClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
/**
 * ConsensusState queries a consensus state associated with a client state at
 * a given height.
 * @name useGetConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusState
 */
export const useGetConsensusState = buildUseVueQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: getConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
/**
 * ConsensusStates queries all the consensus state associated with a given
 * client.
 * @name useGetConsensusStates
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusStates
 */
export const useGetConsensusStates = buildUseVueQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: getConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
/**
 * ConsensusStateHeights queries the height of every consensus states associated with a given client.
 * @name useGetConsensusStateHeights
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ConsensusStateHeights
 */
export const useGetConsensusStateHeights = buildUseVueQuery<QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse>({
  builderQueryFn: getConsensusStateHeights,
  queryKeyPrefix: "ConsensusStateHeightsQuery"
});
/**
 * Status queries the status of an IBC client.
 * @name useGetClientStatus
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientStatus
 */
export const useGetClientStatus = buildUseVueQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: getClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
/**
 * ClientParams queries all parameters of the ibc client submodule.
 * @name useGetClientParams
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.ClientParams
 */
export const useGetClientParams = buildUseVueQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: getClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
/**
 * UpgradedClientState queries an Upgraded IBC light client.
 * @name useGetUpgradedClientState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedClientState
 */
export const useGetUpgradedClientState = buildUseVueQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: getUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
/**
 * UpgradedConsensusState queries an Upgraded IBC consensus state.
 * @name useGetUpgradedConsensusState
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradedConsensusState
 */
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: getUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
/**
 * VerifyMembership queries an IBC light client for proof verification of a value at a given key path.
 * @name useGetVerifyMembership
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.VerifyMembership
 */
export const useGetVerifyMembership = buildUseVueQuery<QueryVerifyMembershipRequest, QueryVerifyMembershipResponse>({
  builderQueryFn: getVerifyMembership,
  queryKeyPrefix: "VerifyMembershipQuery"
});