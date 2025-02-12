import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
export const createGetClientState = (clientResolver?: RpcResolver) => buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientState",
  clientResolver,
  deps: [QueryClientStateRequest, QueryClientStateResponse]
});
export const createGetClientStates = (clientResolver?: RpcResolver) => buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStates",
  clientResolver,
  deps: [QueryClientStatesRequest, QueryClientStatesResponse]
});
export const createGetConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusState",
  clientResolver,
  deps: [QueryConsensusStateRequest, QueryConsensusStateResponse]
});
export const createGetConsensusStates = (clientResolver?: RpcResolver) => buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStates",
  clientResolver,
  deps: [QueryConsensusStatesRequest, QueryConsensusStatesResponse]
});
export const createGetConsensusStateHeights = (clientResolver?: RpcResolver) => buildQuery<QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse>({
  encode: QueryConsensusStateHeightsRequest.encode,
  decode: QueryConsensusStateHeightsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStateHeights",
  clientResolver,
  deps: [QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse]
});
export const createGetClientStatus = (clientResolver?: RpcResolver) => buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStatus",
  clientResolver,
  deps: [QueryClientStatusRequest, QueryClientStatusResponse]
});
export const createGetClientParams = (clientResolver?: RpcResolver) => buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientParams",
  clientResolver,
  deps: [QueryClientParamsRequest, QueryClientParamsResponse]
});
export const createGetUpgradedClientState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedClientState",
  clientResolver,
  deps: [QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse]
});
export const createGetUpgradedConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedConsensusState",
  clientResolver,
  deps: [QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse]
});
export const createGetVerifyMembership = (clientResolver?: RpcResolver) => buildQuery<QueryVerifyMembershipRequest, QueryVerifyMembershipResponse>({
  encode: QueryVerifyMembershipRequest.encode,
  decode: QueryVerifyMembershipResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "VerifyMembership",
  clientResolver,
  deps: [QueryVerifyMembershipRequest, QueryVerifyMembershipResponse]
});