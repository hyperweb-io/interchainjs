import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
import { getParams, getCurrentValset, getValsetRequest, getValsetConfirm, getValsetConfirmsByNonce, getLastValsetRequests, getLastPendingValsetRequestByAddr, getLastEventByAddr, getGetPendingSendToEth, getBatchFees, getOutgoingTxBatches, getLastPendingBatchRequestByAddr, getBatchRequestByNonce, getBatchConfirms, getERC20ToDenom, getDenomToERC20, getGetDelegateKeyByValidator, getGetDelegateKeyByEth, getGetDelegateKeyByOrchestrator, getPeggyModuleState, getMissingPeggoNonces } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetCurrentValset = buildUseVueQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: getCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
export const useGetValsetRequest = buildUseVueQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: getValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
export const useGetValsetConfirm = buildUseVueQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: getValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
export const useGetValsetConfirmsByNonce = buildUseVueQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: getValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
export const useGetLastValsetRequests = buildUseVueQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: getLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
export const useGetLastPendingValsetRequestByAddr = buildUseVueQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: getLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
export const useGetLastEventByAddr = buildUseVueQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: getLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
export const useGetGetPendingSendToEth = buildUseVueQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: getGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
export const useGetBatchFees = buildUseVueQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: getBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
export const useGetOutgoingTxBatches = buildUseVueQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: getOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
export const useGetLastPendingBatchRequestByAddr = buildUseVueQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: getLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
export const useGetBatchRequestByNonce = buildUseVueQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: getBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
export const useGetBatchConfirms = buildUseVueQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: getBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
export const useGetERC20ToDenom = buildUseVueQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: getERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
export const useGetDenomToERC20 = buildUseVueQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: getDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
export const useGetGetDelegateKeyByValidator = buildUseVueQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
export const useGetGetDelegateKeyByEth = buildUseVueQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: getGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
export const useGetGetDelegateKeyByOrchestrator = buildUseVueQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
export const useGetPeggyModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
export const useGetMissingPeggoNonces = buildUseVueQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: getMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});