import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
import { getParams, getCurrentValset, getValsetRequest, getValsetConfirm, getValsetConfirmsByNonce, getLastValsetRequests, getLastPendingValsetRequestByAddr, getLastEventByAddr, getGetPendingSendToEth, getBatchFees, getOutgoingTxBatches, getLastPendingBatchRequestByAddr, getBatchRequestByNonce, getBatchConfirms, getERC20ToDenom, getDenomToERC20, getGetDelegateKeyByValidator, getGetDelegateKeyByEth, getGetDelegateKeyByOrchestrator, getPeggyModuleState, getMissingPeggoNonces } from "./query.rpc.func";
/* Deployments queries deployments */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* valset */
export const useGetCurrentValset = buildUseQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: getCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
export const useGetValsetRequest = buildUseQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: getValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
export const useGetValsetConfirm = buildUseQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: getValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
export const useGetValsetConfirmsByNonce = buildUseQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: getValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
export const useGetLastValsetRequests = buildUseQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: getLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
export const useGetLastPendingValsetRequestByAddr = buildUseQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: getLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
/* claim */
export const useGetLastEventByAddr = buildUseQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: getLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
/* batch */
export const useGetGetPendingSendToEth = buildUseQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: getGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
export const useGetBatchFees = buildUseQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: getBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
export const useGetOutgoingTxBatches = buildUseQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: getOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
export const useGetLastPendingBatchRequestByAddr = buildUseQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: getLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
export const useGetBatchRequestByNonce = buildUseQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: getBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
export const useGetBatchConfirms = buildUseQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: getBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
export const useGetERC20ToDenom = buildUseQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: getERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
export const useGetDenomToERC20 = buildUseQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: getDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
export const useGetGetDelegateKeyByValidator = buildUseQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
export const useGetGetDelegateKeyByEth = buildUseQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: getGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
export const useGetGetDelegateKeyByOrchestrator = buildUseQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
/* Retrieves the entire peggy module's state */
export const useGetPeggyModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
export const useGetMissingPeggoNonces = buildUseQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: getMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});