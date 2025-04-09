import { buildQuery } from "../../../../helper-func-types";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
export const getClientState = buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientState",
  deps: [QueryClientStateRequest, QueryClientStateResponse]
});
export const getClientStates = buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStates",
  deps: [QueryClientStatesRequest, QueryClientStatesResponse]
});
export const getConsensusState = buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusState",
  deps: [QueryConsensusStateRequest, QueryConsensusStateResponse]
});
export const getConsensusStates = buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStates",
  deps: [QueryConsensusStatesRequest, QueryConsensusStatesResponse]
});
export const getConsensusStateHeights = buildQuery<QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse>({
  encode: QueryConsensusStateHeightsRequest.encode,
  decode: QueryConsensusStateHeightsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStateHeights",
  deps: [QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse]
});
export const getClientStatus = buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStatus",
  deps: [QueryClientStatusRequest, QueryClientStatusResponse]
});
export const getClientParams = buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientParams",
  deps: [QueryClientParamsRequest, QueryClientParamsResponse]
});
export const getUpgradedClientState = buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedClientState",
  deps: [QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse]
});
export const getUpgradedConsensusState = buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedConsensusState",
  deps: [QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse]
});
export const getVerifyMembership = buildQuery<QueryVerifyMembershipRequest, QueryVerifyMembershipResponse>({
  encode: QueryVerifyMembershipRequest.encode,
  decode: QueryVerifyMembershipResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "VerifyMembership",
  deps: [QueryVerifyMembershipRequest, QueryVerifyMembershipResponse]
});