import { buildUseVueQuery } from "../../../../vue-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
import { getConnection, getConnections, getClientConnections, getConnectionClientState, getConnectionConsensusState, getConnectionParams } from "./query.rpc.func";
/* Connection queries an IBC connection end. */
export const useGetConnection = buildUseVueQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: getConnection,
  queryKeyPrefix: "ConnectionQuery"
});
/* Connections queries all the IBC connections of a chain. */
export const useGetConnections = buildUseVueQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: getConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
/* ClientConnections queries the connection paths associated with a client
 state. */
export const useGetClientConnections = buildUseVueQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: getClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
/* ConnectionClientState queries the client state associated with the
 connection. */
export const useGetConnectionClientState = buildUseVueQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: getConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
/* ConnectionConsensusState queries the consensus state associated with the
 connection. */
export const useGetConnectionConsensusState = buildUseVueQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: getConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});
/* ConnectionParams queries all parameters of the ibc connection submodule. */
export const useGetConnectionParams = buildUseVueQuery<QueryConnectionParamsRequest, QueryConnectionParamsResponse>({
  builderQueryFn: getConnectionParams,
  queryKeyPrefix: "ConnectionParamsQuery"
});