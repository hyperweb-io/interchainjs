import { buildQuery } from "../../../../helper-func-types";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
/* GetNodeInfo queries the current node info. */
export const getGetNodeInfo = buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo",
  deps: [GetNodeInfoRequest, GetNodeInfoResponse]
});
/* GetSyncing queries node syncing. */
export const getGetSyncing = buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing",
  deps: [GetSyncingRequest, GetSyncingResponse]
});
/* GetLatestBlock returns the latest block. */
export const getGetLatestBlock = buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock",
  deps: [GetLatestBlockRequest, GetLatestBlockResponse]
});
/* GetBlockByHeight queries block for given height. */
export const getGetBlockByHeight = buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight",
  deps: [GetBlockByHeightRequest, GetBlockByHeightResponse]
});
/* GetLatestValidatorSet queries latest validator-set. */
export const getGetLatestValidatorSet = buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet",
  deps: [GetLatestValidatorSetRequest, GetLatestValidatorSetResponse]
});
/* GetValidatorSetByHeight queries validator-set at a given height. */
export const getGetValidatorSetByHeight = buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight",
  deps: [GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse]
});
/* ABCIQuery defines a query handler that supports ABCI queries directly to the
 application, bypassing Tendermint completely. The ABCI query must contain
 a valid and supported path, including app, custom, p2p, and store.

 Since: cosmos-sdk 0.46 */
export const getABCIQuery = buildQuery<ABCIQueryRequest, ABCIQueryResponse>({
  encode: ABCIQueryRequest.encode,
  decode: ABCIQueryResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "ABCIQuery",
  deps: [ABCIQueryRequest, ABCIQueryResponse]
});