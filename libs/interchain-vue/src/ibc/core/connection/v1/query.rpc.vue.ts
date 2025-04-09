import { buildUseVueQuery } from "../../../../vue-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
import { getConnection, getConnections, getClientConnections, getConnectionClientState, getConnectionConsensusState, getConnectionParams } from "./query.rpc.func";
export const useGetConnection = buildUseVueQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: getConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const useGetConnections = buildUseVueQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: getConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const useGetClientConnections = buildUseVueQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: getClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const useGetConnectionClientState = buildUseVueQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: getConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const useGetConnectionConsensusState = buildUseVueQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: getConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});
export const useGetConnectionParams = buildUseVueQuery<QueryConnectionParamsRequest, QueryConnectionParamsResponse>({
  builderQueryFn: getConnectionParams,
  queryKeyPrefix: "ConnectionParamsQuery"
});