import { buildUseVueQuery } from "../../../../vue-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
import { getGetNodeInfo, getGetSyncing, getGetLatestBlock, getGetBlockByHeight, getGetLatestValidatorSet, getGetValidatorSetByHeight, getABCIQuery } from "./query.rpc.func";
/* GetNodeInfo queries the current node info. */
export const useGetGetNodeInfo = buildUseVueQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: getGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
/* GetSyncing queries node syncing. */
export const useGetGetSyncing = buildUseVueQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: getGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
/* GetLatestBlock returns the latest block. */
export const useGetGetLatestBlock = buildUseVueQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: getGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
/* GetBlockByHeight queries block for given height. */
export const useGetGetBlockByHeight = buildUseVueQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: getGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
/* GetLatestValidatorSet queries latest validator-set. */
export const useGetGetLatestValidatorSet = buildUseVueQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: getGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
/* GetValidatorSetByHeight queries validator-set at a given height. */
export const useGetGetValidatorSetByHeight = buildUseVueQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: getGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});
/* ABCIQuery defines a query handler that supports ABCI queries directly to the
 application, bypassing Tendermint completely. The ABCI query must contain
 a valid and supported path, including app, custom, p2p, and store.

 Since: cosmos-sdk 0.46 */
export const useGetABCIQuery = buildUseVueQuery<ABCIQueryRequest, ABCIQueryResponse>({
  builderQueryFn: getABCIQuery,
  queryKeyPrefix: "ABCIQueryQuery"
});