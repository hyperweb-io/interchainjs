import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export const createGetGetNodeInfo = (clientResolver?: RpcResolver) => buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo",
  clientResolver,
  deps: [GetNodeInfoRequest, GetNodeInfoResponse]
});
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: createGetGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const createGetGetSyncing = (clientResolver?: RpcResolver) => buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing",
  clientResolver,
  deps: [GetSyncingRequest, GetSyncingResponse]
});
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: createGetGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const createGetGetLatestBlock = (clientResolver?: RpcResolver) => buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock",
  clientResolver,
  deps: [GetLatestBlockRequest, GetLatestBlockResponse]
});
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: createGetGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const createGetGetBlockByHeight = (clientResolver?: RpcResolver) => buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight",
  clientResolver,
  deps: [GetBlockByHeightRequest, GetBlockByHeightResponse]
});
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: createGetGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const createGetGetLatestValidatorSet = (clientResolver?: RpcResolver) => buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet",
  clientResolver,
  deps: [GetLatestValidatorSetRequest, GetLatestValidatorSetResponse]
});
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: createGetGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const createGetGetValidatorSetByHeight = (clientResolver?: RpcResolver) => buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight",
  clientResolver,
  deps: [GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse]
});
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: createGetGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});
export const createGetABCIQuery = (clientResolver?: RpcResolver) => buildQuery<ABCIQueryRequest, ABCIQueryResponse>({
  encode: ABCIQueryRequest.encode,
  decode: ABCIQueryResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "ABCIQuery",
  clientResolver,
  deps: [ABCIQueryRequest, ABCIQueryResponse]
});
export const useGetABCIQuery = buildUseQuery<ABCIQueryRequest, ABCIQueryResponse>({
  builderQueryFn: createGetABCIQuery,
  queryKeyPrefix: "ABCIQueryQuery"
});