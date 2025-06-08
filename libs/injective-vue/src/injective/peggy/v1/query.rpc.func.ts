import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
/**
 * Deployments queries deployments
 * @name getParams
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * valset
 * @name getCurrentValset
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.CurrentValset
 */
export const getCurrentValset = buildQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  encode: QueryCurrentValsetRequest.encode,
  decode: QueryCurrentValsetResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "CurrentValset",
  deps: [QueryCurrentValsetRequest, QueryCurrentValsetResponse]
});
/**
 * @name getValsetRequest
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetRequest
 */
export const getValsetRequest = buildQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  encode: QueryValsetRequestRequest.encode,
  decode: QueryValsetRequestResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetRequest",
  deps: [QueryValsetRequestRequest, QueryValsetRequestResponse]
});
/**
 * @name getValsetConfirm
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirm
 */
export const getValsetConfirm = buildQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  encode: QueryValsetConfirmRequest.encode,
  decode: QueryValsetConfirmResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirm",
  deps: [QueryValsetConfirmRequest, QueryValsetConfirmResponse]
});
/**
 * @name getValsetConfirmsByNonce
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ValsetConfirmsByNonce
 */
export const getValsetConfirmsByNonce = buildQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  encode: QueryValsetConfirmsByNonceRequest.encode,
  decode: QueryValsetConfirmsByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirmsByNonce",
  deps: [QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse]
});
/**
 * @name getLastValsetRequests
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastValsetRequests
 */
export const getLastValsetRequests = buildQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  encode: QueryLastValsetRequestsRequest.encode,
  decode: QueryLastValsetRequestsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastValsetRequests",
  deps: [QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse]
});
/**
 * @name getLastPendingValsetRequestByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastPendingValsetRequestByAddr
 */
export const getLastPendingValsetRequestByAddr = buildQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  encode: QueryLastPendingValsetRequestByAddrRequest.encode,
  decode: QueryLastPendingValsetRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingValsetRequestByAddr",
  deps: [QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse]
});
/**
 * claim
 * @name getLastEventByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastEventByAddr
 */
export const getLastEventByAddr = buildQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  encode: QueryLastEventByAddrRequest.encode,
  decode: QueryLastEventByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastEventByAddr",
  deps: [QueryLastEventByAddrRequest, QueryLastEventByAddrResponse]
});
/**
 * batch
 * @name getGetPendingSendToEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetPendingSendToEth
 */
export const getGetPendingSendToEth = buildQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  encode: QueryPendingSendToEth.encode,
  decode: QueryPendingSendToEthResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetPendingSendToEth",
  deps: [QueryPendingSendToEth, QueryPendingSendToEthResponse]
});
/**
 * @name getBatchFees
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchFees
 */
export const getBatchFees = buildQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  encode: QueryBatchFeeRequest.encode,
  decode: QueryBatchFeeResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchFees",
  deps: [QueryBatchFeeRequest, QueryBatchFeeResponse]
});
/**
 * @name getOutgoingTxBatches
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.OutgoingTxBatches
 */
export const getOutgoingTxBatches = buildQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  encode: QueryOutgoingTxBatchesRequest.encode,
  decode: QueryOutgoingTxBatchesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "OutgoingTxBatches",
  deps: [QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse]
});
/**
 * @name getLastPendingBatchRequestByAddr
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.LastPendingBatchRequestByAddr
 */
export const getLastPendingBatchRequestByAddr = buildQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  encode: QueryLastPendingBatchRequestByAddrRequest.encode,
  decode: QueryLastPendingBatchRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingBatchRequestByAddr",
  deps: [QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse]
});
/**
 * @name getBatchRequestByNonce
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchRequestByNonce
 */
export const getBatchRequestByNonce = buildQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  encode: QueryBatchRequestByNonceRequest.encode,
  decode: QueryBatchRequestByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchRequestByNonce",
  deps: [QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse]
});
/**
 * @name getBatchConfirms
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.BatchConfirms
 */
export const getBatchConfirms = buildQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  encode: QueryBatchConfirmsRequest.encode,
  decode: QueryBatchConfirmsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchConfirms",
  deps: [QueryBatchConfirmsRequest, QueryBatchConfirmsResponse]
});
/**
 * @name getERC20ToDenom
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.ERC20ToDenom
 */
export const getERC20ToDenom = buildQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  encode: QueryERC20ToDenomRequest.encode,
  decode: QueryERC20ToDenomResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ERC20ToDenom",
  deps: [QueryERC20ToDenomRequest, QueryERC20ToDenomResponse]
});
/**
 * @name getDenomToERC20
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.DenomToERC20
 */
export const getDenomToERC20 = buildQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  encode: QueryDenomToERC20Request.encode,
  decode: QueryDenomToERC20Response.decode,
  service: "injective.peggy.v1.Query",
  method: "DenomToERC20",
  deps: [QueryDenomToERC20Request, QueryDenomToERC20Response]
});
/**
 * @name getGetDelegateKeyByValidator
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByValidator
 */
export const getGetDelegateKeyByValidator = buildQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  encode: QueryDelegateKeysByValidatorAddress.encode,
  decode: QueryDelegateKeysByValidatorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByValidator",
  deps: [QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse]
});
/**
 * @name getGetDelegateKeyByEth
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByEth
 */
export const getGetDelegateKeyByEth = buildQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  encode: QueryDelegateKeysByEthAddress.encode,
  decode: QueryDelegateKeysByEthAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByEth",
  deps: [QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse]
});
/**
 * @name getGetDelegateKeyByOrchestrator
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.GetDelegateKeyByOrchestrator
 */
export const getGetDelegateKeyByOrchestrator = buildQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  encode: QueryDelegateKeysByOrchestratorAddress.encode,
  decode: QueryDelegateKeysByOrchestratorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByOrchestrator",
  deps: [QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse]
});
/**
 * Retrieves the entire peggy module's state
 * @name getPeggyModuleState
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.PeggyModuleState
 */
export const getPeggyModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "PeggyModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
/**
 * @name getMissingPeggoNonces
 * @package injective.peggy.v1
 * @see proto service: injective.peggy.v1.MissingPeggoNonces
 */
export const getMissingPeggoNonces = buildQuery<MissingNoncesRequest, MissingNoncesResponse>({
  encode: MissingNoncesRequest.encode,
  decode: MissingNoncesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "MissingPeggoNonces",
  deps: [MissingNoncesRequest, MissingNoncesResponse]
});