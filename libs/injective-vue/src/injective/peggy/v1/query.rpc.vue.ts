import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
import { createGetParams, createGetCurrentValset, createGetValsetRequest, createGetValsetConfirm, createGetValsetConfirmsByNonce, createGetLastValsetRequests, createGetLastPendingValsetRequestByAddr, createGetLastEventByAddr, createGetGetPendingSendToEth, createGetBatchFees, createGetOutgoingTxBatches, createGetLastPendingBatchRequestByAddr, createGetBatchRequestByNonce, createGetBatchConfirms, createGetERC20ToDenom, createGetDenomToERC20, createGetGetDelegateKeyByValidator, createGetGetDelegateKeyByEth, createGetGetDelegateKeyByOrchestrator, createGetPeggyModuleState, createGetMissingPeggoNonces } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetCurrentValset = buildUseVueQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: createGetCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
export const useGetValsetRequest = buildUseVueQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: createGetValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
export const useGetValsetConfirm = buildUseVueQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: createGetValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
export const useGetValsetConfirmsByNonce = buildUseVueQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: createGetValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
export const useGetLastValsetRequests = buildUseVueQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: createGetLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
export const useGetLastPendingValsetRequestByAddr = buildUseVueQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
export const useGetLastEventByAddr = buildUseVueQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: createGetLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
export const useGetGetPendingSendToEth = buildUseVueQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: createGetGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
export const useGetBatchFees = buildUseVueQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: createGetBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
export const useGetOutgoingTxBatches = buildUseVueQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: createGetOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
export const useGetLastPendingBatchRequestByAddr = buildUseVueQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
export const useGetBatchRequestByNonce = buildUseVueQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: createGetBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
export const useGetBatchConfirms = buildUseVueQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: createGetBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
export const useGetERC20ToDenom = buildUseVueQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: createGetERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
export const useGetDenomToERC20 = buildUseVueQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: createGetDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
export const useGetGetDelegateKeyByValidator = buildUseVueQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
export const useGetGetDelegateKeyByEth = buildUseVueQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
export const useGetGetDelegateKeyByOrchestrator = buildUseVueQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
export const useGetPeggyModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
export const useGetMissingPeggoNonces = buildUseVueQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: createGetMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});