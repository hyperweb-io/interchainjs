import { buildQuery } from "../../../../helper-func-types";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export const getConnection = buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection",
  deps: [QueryConnectionRequest, QueryConnectionResponse]
});
export const getConnections = buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections",
  deps: [QueryConnectionsRequest, QueryConnectionsResponse]
});
export const getClientConnections = buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections",
  deps: [QueryClientConnectionsRequest, QueryClientConnectionsResponse]
});
export const getConnectionClientState = buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState",
  deps: [QueryConnectionClientStateRequest, QueryConnectionClientStateResponse]
});
export const getConnectionConsensusState = buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState",
  deps: [QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse]
});
export const getConnectionParams = buildQuery<QueryConnectionParamsRequest, QueryConnectionParamsResponse>({
  encode: QueryConnectionParamsRequest.encode,
  decode: QueryConnectionParamsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionParams",
  deps: [QueryConnectionParamsRequest, QueryConnectionParamsResponse]
});