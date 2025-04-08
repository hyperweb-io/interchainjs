import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "Params"
});
export const getCurrentValset = buildQuery<QueryCurrentValsetRequest, QueryCurrentValsetResponse>({
  encode: QueryCurrentValsetRequest.encode,
  decode: QueryCurrentValsetResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "CurrentValset"
});
export const getValsetRequest = buildQuery<QueryValsetRequestRequest, QueryValsetRequestResponse>({
  encode: QueryValsetRequestRequest.encode,
  decode: QueryValsetRequestResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetRequest"
});
export const getValsetConfirm = buildQuery<QueryValsetConfirmRequest, QueryValsetConfirmResponse>({
  encode: QueryValsetConfirmRequest.encode,
  decode: QueryValsetConfirmResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirm"
});
export const getValsetConfirmsByNonce = buildQuery<QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse>({
  encode: QueryValsetConfirmsByNonceRequest.encode,
  decode: QueryValsetConfirmsByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ValsetConfirmsByNonce"
});
export const getLastValsetRequests = buildQuery<QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse>({
  encode: QueryLastValsetRequestsRequest.encode,
  decode: QueryLastValsetRequestsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastValsetRequests"
});
export const getLastPendingValsetRequestByAddr = buildQuery<QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse>({
  encode: QueryLastPendingValsetRequestByAddrRequest.encode,
  decode: QueryLastPendingValsetRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingValsetRequestByAddr"
});
export const getLastEventByAddr = buildQuery<QueryLastEventByAddrRequest, QueryLastEventByAddrResponse>({
  encode: QueryLastEventByAddrRequest.encode,
  decode: QueryLastEventByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastEventByAddr"
});
export const getGetPendingSendToEth = buildQuery<QueryPendingSendToEth, QueryPendingSendToEthResponse>({
  encode: QueryPendingSendToEth.encode,
  decode: QueryPendingSendToEthResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetPendingSendToEth"
});
export const getBatchFees = buildQuery<QueryBatchFeeRequest, QueryBatchFeeResponse>({
  encode: QueryBatchFeeRequest.encode,
  decode: QueryBatchFeeResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchFees"
});
export const getOutgoingTxBatches = buildQuery<QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse>({
  encode: QueryOutgoingTxBatchesRequest.encode,
  decode: QueryOutgoingTxBatchesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "OutgoingTxBatches"
});
export const getLastPendingBatchRequestByAddr = buildQuery<QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse>({
  encode: QueryLastPendingBatchRequestByAddrRequest.encode,
  decode: QueryLastPendingBatchRequestByAddrResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "LastPendingBatchRequestByAddr"
});
export const getBatchRequestByNonce = buildQuery<QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse>({
  encode: QueryBatchRequestByNonceRequest.encode,
  decode: QueryBatchRequestByNonceResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchRequestByNonce"
});
export const getBatchConfirms = buildQuery<QueryBatchConfirmsRequest, QueryBatchConfirmsResponse>({
  encode: QueryBatchConfirmsRequest.encode,
  decode: QueryBatchConfirmsResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "BatchConfirms"
});
export const getERC20ToDenom = buildQuery<QueryERC20ToDenomRequest, QueryERC20ToDenomResponse>({
  encode: QueryERC20ToDenomRequest.encode,
  decode: QueryERC20ToDenomResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "ERC20ToDenom"
});
export const getDenomToERC20 = buildQuery<QueryDenomToERC20Request, QueryDenomToERC20Response>({
  encode: QueryDenomToERC20Request.encode,
  decode: QueryDenomToERC20Response.decode,
  service: "injective.peggy.v1.Query",
  method: "DenomToERC20"
});
export const getGetDelegateKeyByValidator = buildQuery<QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse>({
  encode: QueryDelegateKeysByValidatorAddress.encode,
  decode: QueryDelegateKeysByValidatorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByValidator"
});
export const getGetDelegateKeyByEth = buildQuery<QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse>({
  encode: QueryDelegateKeysByEthAddress.encode,
  decode: QueryDelegateKeysByEthAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByEth"
});
export const getGetDelegateKeyByOrchestrator = buildQuery<QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse>({
  encode: QueryDelegateKeysByOrchestratorAddress.encode,
  decode: QueryDelegateKeysByOrchestratorAddressResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "GetDelegateKeyByOrchestrator"
});
export const getPeggyModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "PeggyModuleState"
});
export const getMissingPeggoNonces = buildQuery<MissingNoncesRequest, MissingNoncesResponse>({
  encode: MissingNoncesRequest.encode,
  decode: MissingNoncesResponse.decode,
  service: "injective.peggy.v1.Query",
  method: "MissingPeggoNonces"
});