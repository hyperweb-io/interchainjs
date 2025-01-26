import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
import { createGetParams, createGetCurrentValset, createGetValsetRequest, createGetValsetConfirm, createGetValsetConfirmsByNonce, createGetLastValsetRequests, createGetLastPendingValsetRequestByAddr, createGetLastEventByAddr, createGetGetPendingSendToEth, createGetBatchFees, createGetOutgoingTxBatches, createGetLastPendingBatchRequestByAddr, createGetBatchRequestByNonce, createGetBatchConfirms, createGetERC20ToDenom, createGetDenomToERC20, createGetGetDelegateKeyByValidator, createGetGetDelegateKeyByEth, createGetGetDelegateKeyByOrchestrator, createGetPeggyModuleState, createGetMissingPeggoNonces } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetCurrentValset = buildUseQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: createGetCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
export const useGetValsetRequest = buildUseQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: createGetValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
export const useGetValsetConfirm = buildUseQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: createGetValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
export const useGetValsetConfirmsByNonce = buildUseQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: createGetValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
export const useGetLastValsetRequests = buildUseQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: createGetLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
export const useGetLastPendingValsetRequestByAddr = buildUseQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
export const useGetLastEventByAddr = buildUseQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: createGetLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
export const useGetGetPendingSendToEth = buildUseQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: createGetGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
export const useGetBatchFees = buildUseQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: createGetBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
export const useGetOutgoingTxBatches = buildUseQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: createGetOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
export const useGetLastPendingBatchRequestByAddr = buildUseQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: createGetLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
export const useGetBatchRequestByNonce = buildUseQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: createGetBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
export const useGetBatchConfirms = buildUseQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: createGetBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
export const useGetERC20ToDenom = buildUseQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: createGetERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
export const useGetDenomToERC20 = buildUseQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: createGetDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
export const useGetGetDelegateKeyByValidator = buildUseQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
export const useGetGetDelegateKeyByEth = buildUseQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
export const useGetGetDelegateKeyByOrchestrator = buildUseQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: createGetGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
export const useGetPeggyModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
export const useGetMissingPeggoNonces = buildUseQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: createGetMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});