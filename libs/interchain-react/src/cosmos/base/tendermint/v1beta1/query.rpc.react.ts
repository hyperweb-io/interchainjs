import { buildUseQuery } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
import { getGetNodeInfo, getGetSyncing, getGetLatestBlock, getGetBlockByHeight, getGetLatestValidatorSet, getGetValidatorSetByHeight, getABCIQuery } from "./query.rpc.func";
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: getGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: getGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: getGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: getGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: getGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: getGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});
export const useGetABCIQuery = buildUseQuery<ABCIQueryRequest, ABCIQueryResponse>({
  builderQueryFn: getABCIQuery,
  queryKeyPrefix: "ABCIQueryQuery"
});