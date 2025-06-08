import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
import { getParams, getCurrentValset, getValsetRequest, getValsetConfirm, getValsetConfirmsByNonce, getLastValsetRequests, getLastPendingValsetRequestByAddr, getLastEventByAddr, getGetPendingSendToEth, getBatchFees, getOutgoingTxBatches, getLastPendingBatchRequestByAddr, getBatchRequestByNonce, getBatchConfirms, getERC20ToDenom, getDenomToERC20, getGetDelegateKeyByValidator, getGetDelegateKeyByEth, getGetDelegateKeyByOrchestrator, getPeggyModuleState, getMissingPeggoNonces } from "./query.rpc.func";
/**
 * Deployments queries deployments
 * @name useGetParams
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * valset
 * @name useGetCurrentValset
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.CurrentValset
 */
export const useGetCurrentValset = buildUseVueQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  builderQueryFn: getCurrentValset,
  queryKeyPrefix: "CurrentValsetQuery"
});
/**
 * @name useGetValsetRequest
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetRequest
 */
export const useGetValsetRequest = buildUseVueQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  builderQueryFn: getValsetRequest,
  queryKeyPrefix: "ValsetRequestQuery"
});
/**
 * @name useGetValsetConfirm
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirm
 */
export const useGetValsetConfirm = buildUseVueQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  builderQueryFn: getValsetConfirm,
  queryKeyPrefix: "ValsetConfirmQuery"
});
/**
 * @name useGetValsetConfirmsByNonce
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirmsByNonce
 */
export const useGetValsetConfirmsByNonce = buildUseVueQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  builderQueryFn: getValsetConfirmsByNonce,
  queryKeyPrefix: "ValsetConfirmsByNonceQuery"
});
/**
 * @name useGetLastValsetRequests
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastValsetRequests
 */
export const useGetLastValsetRequests = buildUseVueQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  builderQueryFn: getLastValsetRequests,
  queryKeyPrefix: "LastValsetRequestsQuery"
});
/**
 * @name useGetLastPendingValsetRequestByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastPendingValsetRequestByAddr
 */
export const useGetLastPendingValsetRequestByAddr = buildUseVueQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  builderQueryFn: getLastPendingValsetRequestByAddr,
  queryKeyPrefix: "LastPendingValsetRequestByAddrQuery"
});
/**
 * claim
 * @name useGetLastEventByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastEventByAddr
 */
export const useGetLastEventByAddr = buildUseVueQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  builderQueryFn: getLastEventByAddr,
  queryKeyPrefix: "LastEventByAddrQuery"
});
/**
 * batch
 * @name useGetGetPendingSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetPendingSendToEth
 */
export const useGetGetPendingSendToEth = buildUseVueQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  builderQueryFn: getGetPendingSendToEth,
  queryKeyPrefix: "GetPendingSendToEthQuery"
});
/**
 * @name useGetBatchFees
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchFees
 */
export const useGetBatchFees = buildUseVueQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  builderQueryFn: getBatchFees,
  queryKeyPrefix: "BatchFeesQuery"
});
/**
 * @name useGetOutgoingTxBatches
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.OutgoingTxBatches
 */
export const useGetOutgoingTxBatches = buildUseVueQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  builderQueryFn: getOutgoingTxBatches,
  queryKeyPrefix: "OutgoingTxBatchesQuery"
});
/**
 * @name useGetLastPendingBatchRequestByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastPendingBatchRequestByAddr
 */
export const useGetLastPendingBatchRequestByAddr = buildUseVueQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  builderQueryFn: getLastPendingBatchRequestByAddr,
  queryKeyPrefix: "LastPendingBatchRequestByAddrQuery"
});
/**
 * @name useGetBatchRequestByNonce
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchRequestByNonce
 */
export const useGetBatchRequestByNonce = buildUseVueQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  builderQueryFn: getBatchRequestByNonce,
  queryKeyPrefix: "BatchRequestByNonceQuery"
});
/**
 * @name useGetBatchConfirms
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchConfirms
 */
export const useGetBatchConfirms = buildUseVueQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  builderQueryFn: getBatchConfirms,
  queryKeyPrefix: "BatchConfirmsQuery"
});
/**
 * @name useGetERC20ToDenom
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ERC20ToDenom
 */
export const useGetERC20ToDenom = buildUseVueQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  builderQueryFn: getERC20ToDenom,
  queryKeyPrefix: "ERC20ToDenomQuery"
});
/**
 * @name useGetDenomToERC20
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.DenomToERC20
 */
export const useGetDenomToERC20 = buildUseVueQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  builderQueryFn: getDenomToERC20,
  queryKeyPrefix: "DenomToERC20Query"
});
/**
 * @name useGetGetDelegateKeyByValidator
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByValidator
 */
export const useGetGetDelegateKeyByValidator = buildUseVueQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByValidator,
  queryKeyPrefix: "GetDelegateKeyByValidatorQuery"
});
/**
 * @name useGetGetDelegateKeyByEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByEth
 */
export const useGetGetDelegateKeyByEth = buildUseVueQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  builderQueryFn: getGetDelegateKeyByEth,
  queryKeyPrefix: "GetDelegateKeyByEthQuery"
});
/**
 * @name useGetGetDelegateKeyByOrchestrator
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByOrchestrator
 */
export const useGetGetDelegateKeyByOrchestrator = buildUseVueQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  builderQueryFn: getGetDelegateKeyByOrchestrator,
  queryKeyPrefix: "GetDelegateKeyByOrchestratorQuery"
});
/**
 * Retrieves the entire peggy module's state
 * @name useGetPeggyModuleState
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.PeggyModuleState
 */
export const useGetPeggyModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getPeggyModuleState,
  queryKeyPrefix: "PeggyModuleStateQuery"
});
/**
 * @name useGetMissingPeggoNonces
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.MissingPeggoNonces
 */
export const useGetMissingPeggoNonces = buildUseVueQuery<MissingNoncesRequest, MissingNoncesResponse>({
  builderQueryFn: getMissingPeggoNonces,
  queryKeyPrefix: "MissingPeggoNoncesQuery"
});